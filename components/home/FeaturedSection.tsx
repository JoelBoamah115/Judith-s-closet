"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

const FILTERS = [
  { id: "all", label: "All Curations" },
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "accessories", label: "Accessories" },
  { id: "new-arrivals", label: "New Arrivals" },
];

export function FeaturedSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredProducts = PRODUCTS.filter((product) => {
    if (activeFilter === "all") return product.featured;
    if (activeFilter === "new-arrivals") return product.newArrival;
    return product.category === activeFilter;
  });

  return (
    <section className="py-16 sm:py-24 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-xl">
            <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold">
              The Signature Edit
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#25211F]">
              Featured Collection
            </h2>
            <p className="text-xs sm:text-sm text-[#80664E] font-light">
              Explore timeless pieces for men and women. Click any product to inspect details or order instantly on WhatsApp.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {FILTERS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`text-xs px-4 py-2 rounded-full whitespace-nowrap transition-all uppercase tracking-wider font-semibold ${
                  activeFilter === f.id
                    ? "bg-[#641526] text-white shadow-sm"
                    : "bg-white text-[#25211F] border border-[#E8DFD2] hover:border-[#80664E]"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Notice Banner */}
        <div className="mb-8 p-3 rounded-xl bg-[#E8DFD2]/30 border border-[#E8DFD2] text-[11px] text-[#80664E] flex items-center justify-between">
          <span>
            <strong>Client Demo Note:</strong> Sample products, prices (GH₵), and sizes represent illustrative presentation items.
          </span>
          <span className="hidden sm:inline text-[#641526] font-medium">WhatsApp ordering active</span>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {filteredProducts.slice(0, 8).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom CTA to Shop All */}
        <div className="mt-14 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#25211F] hover:bg-[#641526] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md group"
          >
            <span>View All Curated Styles ({PRODUCTS.length})</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

      </div>
    </section>
  );
}
