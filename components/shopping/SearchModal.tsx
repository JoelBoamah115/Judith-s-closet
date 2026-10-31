"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, X, ArrowRight, MessageCircle } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { PRODUCTS } from "@/lib/products";
import { formatGHS } from "@/lib/utils";
import { createSingleProductWhatsAppUrl } from "@/lib/whatsapp";

const QUICK_TAGS = ["All", "Men", "Women", "Shirts", "Dresses", "Overcoat", "Cashmere", "Accessories"];

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen, setQuickViewProduct } = useShop();
  const [query, setQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("All");

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

      <div className="relative max-w-3xl mx-auto mt-16 sm:mt-24 px-4 z-50">
        <div className="bg-[#FAF8F5] rounded-2xl shadow-2xl border border-[#E8DFD2] overflow-hidden">
          {/* Search Input Bar */}
          <div className="p-4 sm:p-6 border-b border-[#E8DFD2] flex items-center gap-3 bg-white">
            <Search className="w-6 h-6 text-[#641526]" />
            <input
              type="text"
              autoFocus
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search tailorings, gowns, cashmere, shirts..."
              className="flex-1 bg-transparent text-base sm:text-lg text-[#25211F] placeholder-[#80664E]/60 outline-none font-serif"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery("")}
                className="text-xs text-[#80664E] hover:text-[#25211F] px-2 py-1 bg-[#E8DFD2]/40 rounded-md"
              >
                Clear
              </button>
            )}
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="p-1.5 text-[#25211F]/70 hover:text-[#25211F] rounded-full hover:bg-[#E8DFD2]/60 transition-colors"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Filter Tags */}
          <div className="px-4 sm:px-6 py-3 bg-[#F4EFE7]/50 border-b border-[#E8DFD2] flex items-center gap-2 overflow-x-auto">
            <span className="text-[11px] font-semibold text-[#80664E] uppercase tracking-wider flex-shrink-0">
              Filter:
            </span>
            {QUICK_TAGS.map((tag) => (
              <button
                key={tag}
                type="button"
                onClick={() => setSelectedTag(tag)}
                className={`text-xs px-3 py-1 rounded-full whitespace-nowrap transition-colors ${
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
          <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
            <div className="flex items-center justify-between text-xs text-[#80664E] font-medium pb-1">
              <span>{results.length} styles found</span>
              {query && <span>Keyword: &ldquo;{query}&rdquo;</span>}
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
                    className="flex items-center justify-between gap-4 p-3 bg-white rounded-xl border border-[#E8DFD2]/70 hover:border-[#641526]/40 transition-all hover:shadow-sm"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="relative w-14 h-16 rounded-lg overflow-hidden bg-[#F4EFE7] flex-shrink-0">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          sizes="60px"
                          className="object-cover"
                        />
                      </div>
                      <div className="min-w-0">
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

                    <div className="flex items-center gap-2 flex-shrink-0">
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
                        className="p-2 bg-[#25D366] hover:bg-[#20ba59] text-white rounded-lg transition-colors"
                        title="Order on WhatsApp"
                      >
                        <MessageCircle className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Footer of modal */}
          <div className="p-4 bg-[#F4EFE7] border-t border-[#E8DFD2] flex items-center justify-between text-xs text-[#80664E]">
            <span>Press ESC or click outside to dismiss</span>
            <Link
              href="/shop"
              onClick={() => setIsSearchOpen(false)}
              className="font-semibold text-[#641526] hover:underline flex items-center gap-1"
            >
              Browse Complete Catalog <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
