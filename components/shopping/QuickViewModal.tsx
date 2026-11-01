"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Heart, MessageCircle, ShoppingBag, Check, ShieldCheck } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatGHS } from "@/lib/utils";
import { createSingleProductWhatsAppUrl } from "@/lib/whatsapp";

export function QuickViewModal() {
  const { quickViewProduct, setQuickViewProduct, addToCart, isInWishlist, toggleWishlist } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);

  // Set defaults whenever quickViewProduct changes
  useEffect(() => {
    if (quickViewProduct) {
      setSelectedSize(quickViewProduct.sizes[0] || "M");
      setSelectedColor(quickViewProduct.colors?.[0]?.name || "");
      setActiveImageIndex(0);
      setQuantity(1);
    }
  }, [quickViewProduct]);

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (quickViewProduct) {
      const origBodyOverflow = document.body.style.overflow;
      const origHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = origBodyOverflow;
        document.documentElement.style.overflow = origHtmlOverflow;
      };
    }
  }, [quickViewProduct]);

  if (!quickViewProduct) return null;

  const inWishlist = isInWishlist(quickViewProduct.id);
  const singleWhatsAppUrl = createSingleProductWhatsAppUrl(
    quickViewProduct,
    selectedSize,
    selectedColor || undefined,
    quantity
  );

  const handleAddToCart = () => {
    addToCart(quickViewProduct, selectedSize, selectedColor || undefined, quantity);
    setQuickViewProduct(null);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overscroll-contain" role="dialog" aria-modal="true">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={() => setQuickViewProduct(null)}
      />

      <div className="min-h-full flex items-stretch sm:items-center justify-center p-0 sm:p-6 text-center">
        <div className="relative bg-[#FAF8F5] rounded-none sm:rounded-2xl max-w-3xl w-full min-h-screen min-h-[100dvh] sm:min-h-0 text-left overflow-hidden shadow-2xl border-0 sm:border sm:border-[#E8DFD2] animate-in zoom-in-95 duration-200">
          {/* Close button */}
          <button
            type="button"
            onClick={() => setQuickViewProduct(null)}
            className="fixed sm:absolute top-4 right-4 z-30 sm:z-10 p-2 text-[#25211F]/70 hover:text-[#25211F] bg-white/90 hover:bg-white rounded-full shadow-md transition-all"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Gallery Section */}
            <div className="p-6 bg-[#F4EFE7]/50 flex flex-col justify-between">
              <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-[#E8DFD2]/40 shadow-inner">
                <Image
                  src={quickViewProduct.images[activeImageIndex] || quickViewProduct.images[0]}
                  alt={quickViewProduct.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 400px"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
                {quickViewProduct.newArrival && (
                  <span className="absolute top-3 left-3 bg-[#641526] text-white text-[10px] tracking-wider uppercase font-semibold px-2.5 py-1 rounded-full">
                    New Arrival
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              {quickViewProduct.images.length > 1 && (
                <div className="flex gap-2 mt-4 overflow-x-auto pb-1">
                  {quickViewProduct.images.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-14 h-18 rounded-md overflow-hidden border-2 transition-all flex-shrink-0 ${
                        activeImageIndex === idx
                          ? "border-[#641526] ring-1 ring-[#641526]"
                          : "border-transparent opacity-70 hover:opacity-100"
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`${quickViewProduct.name} view ${idx + 1}`}
                        fill
                        sizes="60px"
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info Section */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-[#80664E] uppercase tracking-widest font-semibold mb-1">
                  <span>{quickViewProduct.category} • {quickViewProduct.subCategory}</span>
                  <button
                    type="button"
                    onClick={() => toggleWishlist(quickViewProduct.id)}
                    className="p-1.5 hover:text-[#641526] transition-colors"
                    aria-label="Toggle wishlist"
                  >
                    <Heart
                      className={`w-4 h-4 ${
                        inWishlist ? "fill-[#641526] text-[#641526]" : "text-[#80664E]"
                      }`}
                    />
                  </button>
                </div>

                <h3 className="font-serif text-2xl font-semibold text-[#25211F] leading-snug">
                  {quickViewProduct.name}
                </h3>

                <div className="mt-2 flex items-baseline gap-3">
                  <span className="text-xl font-bold text-[#641526]">
                    {formatGHS(quickViewProduct.price)}
                  </span>
                  {quickViewProduct.originalPrice && (
                    <span className="text-sm line-through text-[#80664E]/70">
                      {formatGHS(quickViewProduct.originalPrice)}
                    </span>
                  )}
                </div>

                <p className="mt-3 text-xs leading-relaxed text-[#25211F]/80">
                  {quickViewProduct.description}
                </p>

                {/* Colors */}
                {quickViewProduct.colors && quickViewProduct.colors.length > 0 && (
                  <div className="mt-4">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#80664E] block mb-1.5">
                      Color: <span className="text-[#25211F]">{selectedColor}</span>
                    </label>
                    <div className="flex items-center gap-2">
                      {quickViewProduct.colors.map((c) => (
                        <button
                          key={c.name}
                          type="button"
                          onClick={() => setSelectedColor(c.name)}
                          className={`w-7 h-7 rounded-full border-2 flex items-center justify-center transition-all ${
                            selectedColor === c.name
                              ? "border-[#641526] scale-110 shadow-sm"
                              : "border-[#E8DFD2] hover:scale-105"
                          }`}
                          style={{ backgroundColor: c.hex }}
                          title={c.name}
                        >
                          {selectedColor === c.name && (
                            <Check className={`w-3.5 h-3.5 ${c.hex === "#FFFFFF" || c.hex === "#F8F5F0" ? "text-black" : "text-white"}`} />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Size Selector */}
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-1.5">
                    <label className="text-[11px] font-semibold uppercase tracking-wider text-[#80664E]">
                      Select Size
                    </label>
                    <span className="text-[11px] text-[#641526] hover:underline cursor-pointer">
                      Size Guide
                    </span>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {quickViewProduct.sizes.map((s) => (
                      <button
                        key={s}
                        type="button"
                        onClick={() => setSelectedSize(s)}
                        className={`min-w-10 py-1.5 px-3 text-xs font-semibold rounded-lg border transition-all ${
                          selectedSize === s
                            ? "border-[#641526] bg-[#641526] text-white shadow-sm"
                            : "border-[#E8DFD2] bg-white text-[#25211F] hover:border-[#80664E]"
                        }`}
                      >
                        {s}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Quantity */}
                <div className="mt-4 flex items-center gap-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#80664E]">
                    Quantity
                  </span>
                  <div className="flex items-center border border-[#E8DFD2] rounded-lg overflow-hidden bg-white">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-2.5 py-1 text-xs hover:bg-[#E8DFD2]/50 text-[#25211F]"
                    >
                      -
                    </button>
                    <span className="px-3 text-xs font-semibold text-[#25211F]">
                      {quantity}
                    </span>
                    <button
                      type="button"
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-2.5 py-1 text-xs hover:bg-[#E8DFD2]/50 text-[#25211F]"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2.5 pt-2 border-t border-[#E8DFD2]/60">
                {/* Direct WhatsApp Ordering */}
                <a
                  href={singleWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order Directly on WhatsApp</span>
                </a>

                {/* Add to Bag Button */}
                <button
                  type="button"
                  onClick={handleAddToCart}
                  className="w-full flex items-center justify-center gap-2 bg-[#25211F] hover:bg-[#641526] text-white py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Shopping Bag</span>
                </button>

                <div className="flex items-center justify-between text-[11px] text-[#80664E] pt-2">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059]" />
                    Artisan Craftsmanship
                  </span>
                  <Link
                    href={`/product/${quickViewProduct.slug}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="text-[#641526] hover:underline font-medium"
                  >
                    Full Product Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
