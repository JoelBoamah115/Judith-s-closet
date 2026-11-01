"use client";

import { useState, useMemo } from "react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { Filter, SlidersHorizontal, Search } from "lucide-react";

export default function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredProducts = useMemo(() => {
    let list = [...PRODUCTS];

    // Filter category
    if (selectedCategory !== "all") {
      list = list.filter((p) => p.category === selectedCategory);
    }

    // Filter search
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.subCategory.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      );
    }

    // Sort
    if (sortBy === "price-low") {
      list.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      list.sort((a, b) => b.price - a.price);
    } else if (sortBy === "newest") {
      list.sort((a, b) => (b.newArrival ? 1 : 0) - (a.newArrival ? 1 : 0));
    }

    return list;
  }, [selectedCategory, sortBy, searchQuery]);

  return (
    <div className="py-12 sm:py-16 bg-[#F8F5F0] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold flex items-center justify-center">
            Judith&apos;s Closet Catalog
          </p>
          <h1 className="font-serif text-3xl sm:text-5xl font-medium text-[#25211F]">
            The Complete Collection
          </h1>
          <p className="text-sm text-[#80664E] font-light leading-relaxed">
            Discover all curations across menswear, women&apos;s couture, knitwear, and artisan accessories.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-2xl border border-[#E8DFD2] shadow-sm flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {[
              { id: "all", label: "All Items" },
              { id: "men", label: "Men" },
              { id: "women", label: "Women" },
              { id: "accessories", label: "Accessories" },
            ].map((cat) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedCategory(cat.id)}
                className={`text-xs px-4 py-2 rounded-full whitespace-nowrap uppercase tracking-wider font-semibold transition-all ${
                  selectedCategory === cat.id
                    ? "bg-[#641526] text-white shadow-sm"
                    : "bg-[#FAF8F5] text-[#25211F] hover:bg-[#E8DFD2]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search & Sort */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-60">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-[#80664E]" />
              <input
                type="text"
                placeholder="Search styles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs bg-[#FAF8F5] border border-[#E8DFD2] rounded-full focus:outline-none focus:border-[#641526]"
              />
            </div>

            {/* Sort Select */}
            <div className="flex items-center gap-2 flex-1 sm:flex-initial">
              <SlidersHorizontal className="w-4 h-4 text-[#80664E] flex-shrink-0" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full sm:w-auto text-xs bg-[#FAF8F5] border border-[#E8DFD2] rounded-full px-3 py-2 text-[#25211F] focus:outline-none focus:border-[#641526]"
              >
                <option value="featured">Featured Curations</option>
                <option value="newest">New Arrivals First</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Results Counter & Demo Notice */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-[#80664E] px-1 gap-1 sm:gap-0">
          <span>
            Showing <strong className="text-[#25211F]">{filteredProducts.length}</strong> styles
          </span>
          <span className="italic text-[11px]">Demo inventory shown for presentation</span>
        </div>

        {/* Product Grid */}
        {filteredProducts.length === 0 ? (
          <div className="bg-white rounded-2xl p-16 text-center space-y-4 border border-[#E8DFD2]">
            <Filter className="w-10 h-10 mx-auto text-[#80664E]/60" />
            <h3 className="font-serif text-xl text-[#25211F]">No matching items</h3>
            <p className="text-xs text-[#80664E]">Try clearing filters or search keywords.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="px-6 py-2 rounded-full bg-[#641526] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
