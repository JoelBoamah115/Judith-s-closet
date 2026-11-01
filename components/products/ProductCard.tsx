"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, MessageCircle, Eye, ShoppingBag, Check } from "lucide-react";
import { Product } from "@/lib/types";
import { useShop } from "@/context/ShopContext";
import { formatGHS } from "@/lib/utils";
import { createSingleProductWhatsAppUrl } from "@/lib/whatsapp";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export function ProductCard({ product, priority = false }: ProductCardProps) {
  const { isInWishlist, toggleWishlist, setQuickViewProduct, addToCart } = useShop();
  const [isHovered, setIsHovered] = useState(false);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isAdded, setIsAdded] = useState(false);
  const [showSizePrompt, setShowSizePrompt] = useState(false);

  const inWishlist = isInWishlist(product.id);
  const defaultSize = selectedSize || product.sizes[0] || "M";
  const defaultColor = product.colors?.[0]?.name;
  const whatsappUrl = createSingleProductWhatsAppUrl(product, defaultSize, defaultColor);

  const handleMobileAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    // If size is required and product has multiple sizes, prompt customer
    if (!selectedSize && product.sizes.length > 1) {
      if (showSizePrompt) {
        // Tapped again while prompt active: open Quick View for detailed selection
        setQuickViewProduct(product);
        setShowSizePrompt(false);
        return;
      }
      setShowSizePrompt(true);
      setTimeout(() => setShowSizePrompt(false), 2400);
      return;
    }

    const sizeToAdd = selectedSize || product.sizes[0] || "M";
    addToCart(product, sizeToAdd, defaultColor);
    setIsAdded(true);
    setShowSizePrompt(false);
    setTimeout(() => setIsAdded(false), 1800);
  };

  return (
    <div
      className="group relative flex flex-col bg-white rounded-2xl overflow-hidden border border-[#E8DFD2]/70 hover:border-[#641526]/30 shadow-sm hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#F4EFE7]">
        {/* Main image */}
        <Image
          src={isHovered && product.images[1] ? product.images[1] : product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
          {product.newArrival && (
            <span className="bg-[#641526] text-white text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm">
              New Arrival
            </span>
          )}
          {product.bestseller && (
            <span className="bg-[#25211F] text-[#E8DFD2] text-[10px] tracking-widest uppercase font-semibold px-2.5 py-1 rounded-full shadow-sm">
              Curated Style
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          type="button"
          onClick={() => toggleWishlist(product.id)}
          className="absolute top-3 right-3 z-10 w-9 h-9 flex items-center justify-center rounded-full bg-white/90 backdrop-blur-sm text-[#25211F] hover:text-[#641526] hover:bg-white shadow-sm transition-all"
          aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
        >
          <Heart
            className={`w-4 h-4 transition-transform ${
              inWishlist
                ? "fill-[#641526] text-[#641526] scale-110"
                : "text-[#25211F] group-hover:scale-110"
            }`}
          />
        </button>

        {/* Floating Quick Action Overlay on Desktop */}
        <div className="absolute inset-x-3 bottom-3 hidden sm:flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0 z-10">
          <button
            type="button"
            onClick={() => setQuickViewProduct(product)}
            className="flex-1 flex items-center justify-center gap-1.5 py-2 px-3 bg-white/95 backdrop-blur-md hover:bg-[#641526] text-[#25211F] hover:text-white rounded-xl text-xs font-semibold shadow-md transition-all"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Quick View</span>
          </button>
          <button
            type="button"
            onClick={() => addToCart(product, defaultSize, defaultColor)}
            className="p-2 bg-white/95 backdrop-blur-md hover:bg-[#25211F] text-[#25211F] hover:text-white rounded-xl shadow-md transition-all"
            aria-label="Add to bag"
            title="Add to bag"
          >
            <ShoppingBag className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content details */}
      <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* 1. Category information */}
          <div className="flex items-center justify-between text-[11px] text-[#80664E] uppercase tracking-wider font-semibold mb-1">
            <span>{product.category}</span>
            <span>{product.subCategory}</span>
          </div>

          {/* 2. Mobile Only: Add to Bag button (placed immediately below category and above name) */}
          <div className="sm:hidden my-2">
            <button
              type="button"
              onClick={handleMobileAddToCart}
              className={`w-full flex items-center justify-center gap-2 py-2 px-3 rounded-xl text-xs font-semibold uppercase tracking-wider transition-all duration-200 active:scale-[0.98] ${
                isAdded
                  ? "bg-[#167A43] text-white shadow-sm"
                  : showSizePrompt
                  ? "bg-[#641526] text-white shadow-sm animate-pulse"
                  : "bg-[#25211F] hover:bg-[#641526] text-[#F8F5F0] shadow-sm"
              }`}
              aria-label={`Add ${product.name} to bag`}
            >
              {isAdded ? (
                <>
                  <Check className="w-3.5 h-3.5 text-white" />
                  <span className="text-[11px] tracking-widest">Added to Bag</span>
                </>
              ) : showSizePrompt ? (
                <>
                  <span className="text-[10px] tracking-widest font-bold">Select Size Below ↓</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span className="text-[11px] tracking-widest">Add to Bag</span>
                </>
              )}
            </button>
          </div>

          {/* 3. Product name */}
          <Link href={`/product/${product.slug}`} className="block group/title">
            <h3 className="font-serif text-base font-semibold text-[#25211F] group-hover/title:text-[#641526] transition-colors line-clamp-1">
              {product.name}
            </h3>
          </Link>

          {/* 4. Available sizes */}
          <div className="mt-2 flex items-center gap-1 flex-wrap">
            <span className="text-[10px] text-[#80664E] uppercase tracking-wider mr-1">Sizes:</span>
            {product.sizes.slice(0, 4).map((s) => (
              <button
                type="button"
                key={s}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setSelectedSize(s);
                  setShowSizePrompt(false);
                }}
                className={`text-[10px] font-medium px-2 py-0.5 rounded transition-all ${
                  selectedSize === s
                    ? "bg-[#641526] text-white shadow-xs font-semibold"
                    : showSizePrompt
                    ? "bg-[#F4EFE7] text-[#25211F] ring-1 ring-[#641526]"
                    : "bg-[#F4EFE7] text-[#25211F] hover:bg-[#E8DFD2]"
                }`}
                aria-label={`Select size ${s}`}
              >
                {s}
              </button>
            ))}
            {product.sizes.length > 4 && (
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setQuickViewProduct(product);
                }}
                className="text-[10px] text-[#80664E] hover:text-[#641526] underline ml-0.5"
              >
                +{product.sizes.length - 4}
              </button>
            )}
          </div>
        </div>

        {/* 5. Product price and discount information + 6. Actions */}
        <div className="pt-4 border-t border-[#E8DFD2]/60 mt-4">
          <div className="flex items-baseline justify-between mb-3">
            <div className="flex items-baseline gap-2">
              <span className="text-base sm:text-lg font-bold text-[#641526]">
                {formatGHS(product.price)}
              </span>
              {product.originalPrice && (
                <span className="text-xs line-through text-[#80664E]/70">
                  {formatGHS(product.originalPrice)}
                </span>
              )}
            </div>
            <span className="text-[10px] font-medium text-[#80664E] bg-[#E8DFD2]/40 px-2 py-0.5 rounded">
              Demo Price
            </span>
          </div>

          {/* WhatsApp Direct Order Button */}
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-semibold uppercase tracking-wider shadow-sm hover:shadow transition-all"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order on WhatsApp</span>
          </a>

          {/* Mobile Quick View link */}
          <button
            type="button"
            onClick={() => setQuickViewProduct(product)}
            className="w-full sm:hidden text-center text-xs text-[#80664E] hover:text-[#641526] mt-2 font-medium"
          >
            Quick View Details
          </button>
        </div>
      </div>
    </div>
  );
}
