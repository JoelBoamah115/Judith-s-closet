"use client";

import { useState, useMemo, useEffect } from "react";
import Image from "next/image";
import { Search, X, MessageCircle } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { PRODUCTS } from "@/lib/products";
import { formatGHS } from "@/lib/utils";
import { createSingleProductWhatsAppUrl } from "@/lib/whatsapp";

const QUICK_TAGS = ["All", "Men", "Women", "Shirts", "Dresses", "Overcoat", "Cashmere", "Accessories"];

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useShop();
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

  // Lock background scroll when search modal is open
  useEffect(() => {
    if (isSearchOpen) {
      const origBodyOverflow = document.body.style.overflow;
      const origHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = origBodyOverflow;
        document.documentElement.style.overflow = origHtmlOverflow;
      };
    }
  }, [isSearchOpen]);

  const results = useMemo(() => {
    let list = PRODUCTS;
    if (selectedTag !== "All") {
      const tagLower = selectedTag.toLowerCase();
      list = list.filter(
        (p) =>
          p.category.toLowerCase() === tagLower ||
          p.subCategory.toLowerCase().includes(tagLower) ||
          p.name.toLowerCase().includes(tagLower)
      );
    }
    if (!query.trim()) return list;

    const q = query.toLowerCase().trim();
    return list.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.subCategory.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.fabric?.toLowerCase().includes(q)
    );
  }, [query, selectedTag]);

  if (!isSearchOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/75 backdrop-blur-md transition-opacity"
        onClick={() => setIsSearchOpen(false)}
      />

      <div className="relative max-w-3xl mx-auto mt-4 sm:mt-20 px-2.5 sm:px-4 z-50">
        <div className="bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8DFD2] overflow-hidden">
          {/* Search Input Bar */}
          <div className="p-3.5 sm:p-6 border-b border-[#E8DFD2] flex items-center gap-2.5 sm:gap-3 bg-white">
            <Search className="w-5 h-5 sm:w-6 sm:h-6 text-[#641526] flex-shrink-0" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search garments, gowns, cashmere..."
              className="flex-1 bg-transparent text-sm sm:text-lg text-[#25211F] placeholder-[#80664E]/60 outline-none font-serif min-w-0"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-xs text-[#80664E] hover:text-[#25211F] px-2 py-1 bg-[#E8DFD2]/40 rounded-md flex-shrink-0"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="w-8 h-8 flex items-center justify-center text-[#25211F]/70 hover:text-[#25211F] rounded-full hover:bg-[#E8DFD2]/60 transition-colors flex-shrink-0"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Tags */}
          <div className="px-3.5 sm:px-6 py-2.5 sm:py-3 bg-[#F4EFE7]/50 border-b border-[#E8DFD2] flex items-center gap-1.5 sm:gap-2 overflow-x-auto scrollbar-none">
            <span className="text-[10px] sm:text-[11px] font-semibold text-[#80664E] uppercase tracking-wider flex-shrink-0">
              Filter:
            </span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-2.5 sm:px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
                  selectedTag === tag
                    ? "bg-[#641526] text-white font-medium"
                    : "bg-white text-[#25211F] border border-[#E8DFD2] hover:border-[#80664E]"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          {/* Results List */}
          <div className="max-h-[65vh] sm:max-h-[60vh] overflow-y-auto p-3.5 sm:p-6 space-y-2.5 sm:space-y-3">
            <div className="flex items-center justify-between text-xs text-[#80664E] font-medium pb-1">
              <span>{results.length} styles found</span>
              {query && <span className="truncate max-w-[150px] sm:max-w-none">Keyword: &ldquo;{query}&rdquo;</span>}
            </div>

            {results.length === 0 ? (
              <div className="text-center py-12 space-y-2">
                <p className="font-serif text-lg text-[#25211F]">No exact styles found</p>
                <p className="text-xs text-[#80664E]">
                  Try searching for keywords like &ldquo;wool&rdquo;, &ldquo;silk&rdquo;, &ldquo;shirt&rdquo; or &ldquo;dress&rdquo;.
                </p>
              </div>
            ) : (
              results.map((product) => {
                const whatsappUrl = createSingleProductWhatsAppUrl(product, product.sizes[0] || "M");
                return (
                  <div
                    key={product.id}
                    className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-4 p-3 bg-white rounded-xl border border-[#E8DFD2]/70 hover:border-[#641526]/40 transition-all hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0 w-full sm:w-auto">
                      <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-[#F4EFE7] flex-shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-[10px] uppercase tracking-wider text-[#80664E] font-semibold">
                          {product.category} • {product.subCategory}
                        </p>
                        <h4 className="font-serif text-sm font-semibold text-[#25211F] truncate">
                          {product.name}
                        </h4>
                        <p className="text-xs font-bold text-[#641526]">
                          {formatGHS(product.price)}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-2 w-full sm:w-auto flex-shrink-0 pt-1 sm:pt-0 border-t sm:border-t-0 border-[#E8DFD2]/40">
                      <button
                        type="button"
                        onClick={() => {
                          setQuickViewProduct(product);
                          setIsSearchOpen(false);
                        }}
                        className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-[#E8DFD2] bg-[#FAF8F5] hover:bg-[#E8DFD2] text-[#25211F] transition-colors"
                      >
                        Quick View
                      </button>

                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold transition-colors"
                        title="Inquire on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        <span className="inline sm:hidden lg:inline text-[11px]">WhatsApp</span>
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
