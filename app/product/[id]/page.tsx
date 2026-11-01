"use client";

import { useState, use } from "react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { 
  Heart, 
  MessageCircle, 
  ShoppingBag, 
  ArrowLeft, 
  ShieldCheck, 
  Truck, 
  RotateCcw, 
  Check, 
  ChevronRight 
} from "lucide-react";
import { PRODUCTS, getProductById } from "@/lib/products";
import { useShop } from "@/context/ShopContext";
import { formatGHS } from "@/lib/utils";
import { createSingleProductWhatsAppUrl, WHATSAPP_BASE_URL } from "@/lib/whatsapp";
import { ProductCard } from "@/components/products/ProductCard";

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const resolvedParams = use(params);
  const product = getProductById(resolvedParams.id);

  if (!product) {
    notFound();
  }

  const { addToCart, isInWishlist, toggleWishlist } = useShop();
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[0] || "M");
  const [selectedColor, setSelectedColor] = useState<string>(product.colors?.[0]?.name || "");
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [quantity, setQuantity] = useState<number>(1);
  const [activeTab, setActiveTab] = useState<"details" | "fabric" | "shipping">("details");

  const inWishlist = isInWishlist(product.id);
  const singleWhatsAppUrl = createSingleProductWhatsAppUrl(
    product,
    selectedSize,
    selectedColor || undefined,
    quantity
  );

  const relatedProducts = PRODUCTS.filter(
    (p) => p.id !== product.id && p.category === product.category
  ).slice(0, 4);

  return (
    <div className="bg-[#F8F5F0] min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Breadcrumb Navigation */}
        <nav aria-label="Breadcrumb" className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-[#80664E]">
          <Link href="/" className="hover:text-[#641526] transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8DFD2] flex-shrink-0" />
          <Link href="/shop" className="hover:text-[#641526] transition-colors">
            Shop
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8DFD2] flex-shrink-0" />
          <Link
            href={`/${product.category}`}
            className="hover:text-[#641526] uppercase transition-colors"
          >
            {product.category}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-[#E8DFD2] flex-shrink-0" />
          <span className="text-[#25211F] font-medium truncate max-w-[200px] sm:max-w-xs">{product.name}</span>
        </nav>

        {/* Main Product Presentation Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          
          {/* Left: Gallery (Large view + thumbnails) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="relative aspect-[3/4] w-full rounded-3xl overflow-hidden bg-[#F4EFE7] border border-[#E8DFD2] shadow-sm">
              <Image
                src={product.images[activeImageIndex] || product.images[0]}
                alt={product.name}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 700px"
                className="object-cover transition-all duration-500 hover:scale-105"
              />

              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-col gap-2">
                {product.newArrival && (
                  <span className="bg-[#641526] text-white text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow">
                    New Arrival
                  </span>
                )}
                {product.bestseller && (
                  <span className="bg-[#25211F] text-[#E8DFD2] text-xs uppercase tracking-widest font-semibold px-3 py-1 rounded-full shadow">
                    Signature Style
                  </span>
                )}
              </div>

              {/* Wishlist Floating Button */}
              <button
                type="button"
                onClick={() => toggleWishlist(product.id)}
                className="absolute top-4 right-4 p-3 rounded-full bg-white/90 backdrop-blur-sm text-[#25211F] hover:text-[#641526] shadow transition-all"
                aria-label="Wishlist"
              >
                <Heart
                  className={`w-5 h-5 ${
                    inWishlist ? "fill-[#641526] text-[#641526]" : ""
                  }`}
                />
              </button>
            </div>

            {/* Thumbnail Row */}
            {product.images.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2">
                {product.images.map((img, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative w-24 h-28 rounded-xl overflow-hidden border-2 transition-all flex-shrink-0 ${
                      activeImageIndex === idx
                        ? "border-[#641526] ring-2 ring-[#641526]/30 shadow-md"
                        : "border-transparent opacity-70 hover:opacity-100"
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`${product.name} thumbnail ${idx + 1}`}
                      fill
                      sizes="96px"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Right: Product Buying Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold">
                {product.category} • {product.subCategory}
              </p>
              <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#25211F] leading-tight">
                {product.name}
              </h1>

              <div className="flex items-baseline gap-3 pt-2">
                <span className="text-2xl sm:text-3xl font-bold text-[#641526]">
                  {formatGHS(product.price)}
                </span>
                {product.originalPrice && (
                  <span className="text-base line-through text-[#80664E]/70">
                    {formatGHS(product.originalPrice)}
                  </span>
                )}
                <span className="text-xs text-[#80664E] bg-[#E8DFD2]/50 px-2.5 py-1 rounded-full font-medium">
                  Client Demo Price
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-[#25211F]/80 font-light border-t border-b border-[#E8DFD2] py-4">
              {product.description}
            </p>

            {/* Color selection if available */}
            {product.colors && product.colors.length > 0 && (
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#80664E] block">
                  Color Shade: <span className="text-[#25211F] font-bold">{selectedColor}</span>
                </label>
                <div className="flex items-center gap-3">
                  {product.colors.map((c) => (
                    <button
                      key={c.name}
                      type="button"
                      onClick={() => setSelectedColor(c.name)}
                      className={`w-9 h-9 rounded-full border-2 flex items-center justify-center transition-all ${
                        selectedColor === c.name
                          ? "border-[#641526] scale-110 shadow-md ring-2 ring-[#641526]/20"
                          : "border-[#E8DFD2] hover:scale-105"
                      }`}
                      style={{ backgroundColor: c.hex }}
                      title={c.name}
                    >
                      {selectedColor === c.name && (
                        <Check
                          className={`w-4 h-4 ${
                            c.hex === "#FFFFFF" || c.hex === "#F8F5F0"
                              ? "text-black"
                              : "text-white"
                          }`}
                        />
                      )}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Size selection */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-semibold uppercase tracking-wider text-[#80664E]">
                  Select Size
                </label>
                <a
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#641526] hover:underline font-medium"
                >
                  Need size advice? Ask on WhatsApp
                </a>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => setSelectedSize(s)}
                    className={`min-w-12 py-2 px-4 text-xs font-semibold rounded-xl border transition-all ${
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

            {/* Quantity Selector */}
            <div className="flex items-center gap-4">
              <label className="text-xs font-semibold uppercase tracking-wider text-[#80664E]">
                Quantity:
              </label>
              <div className="flex items-center border border-[#E8DFD2] rounded-xl overflow-hidden bg-white">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3.5 py-1.5 text-sm hover:bg-[#E8DFD2]/50 text-[#25211F]"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-[#25211F]">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3.5 py-1.5 text-sm hover:bg-[#E8DFD2]/50 text-[#25211F]"
                >
                  +
                </button>
              </div>
            </div>

            {/* Main Action Buttons */}
            <div className="space-y-3 pt-2">
              {/* Primary WhatsApp Order Direct */}
              <a
                href={singleWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2.5 bg-[#25D366] hover:bg-[#20ba59] text-white py-4 px-6 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Order Directly on WhatsApp</span>
              </a>

              {/* Add to Bag */}
              <button
                type="button"
                onClick={() =>
                  addToCart(product, selectedSize, selectedColor || undefined, quantity)
                }
                className="w-full flex items-center justify-center gap-2.5 bg-[#25211F] hover:bg-[#641526] text-white py-4 px-6 rounded-2xl text-xs sm:text-sm font-bold uppercase tracking-widest shadow transition-all"
              >
                <ShoppingBag className="w-5 h-5" />
                <span>Add to Shopping Bag</span>
              </button>
            </div>

            {/* Assurance Badges */}
            <div className="p-4 rounded-2xl bg-white border border-[#E8DFD2] space-y-3 text-xs text-[#80664E]">
              <div className="flex items-center gap-2.5 text-[#25211F]">
                <ShieldCheck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Authentic premium garments with tailored finish</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#25211F]">
                <Truck className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Accra & Ghana-wide personal courier coordination</span>
              </div>
              <div className="flex items-center gap-2.5 text-[#25211F]">
                <RotateCcw className="w-4 h-4 text-[#C5A059] flex-shrink-0" />
                <span>Exchange assistance for size adjustments via WhatsApp</span>
              </div>
            </div>

            {/* Specification Tabs */}
            <div className="pt-4 border-t border-[#E8DFD2]">
              <div className="flex border-b border-[#E8DFD2] text-xs font-semibold uppercase tracking-wider overflow-x-auto scrollbar-none">
                <button
                  type="button"
                  onClick={() => setActiveTab("details")}
                  className={`pb-2.5 px-3 transition-colors relative whitespace-nowrap flex-shrink-0 ${
                    activeTab === "details"
                      ? "text-[#641526]"
                      : "text-[#80664E] hover:text-[#25211F]"
                  }`}
                >
                  Garment Details
                  {activeTab === "details" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#641526]" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("fabric")}
                  className={`pb-2.5 px-3 transition-colors relative whitespace-nowrap flex-shrink-0 ${
                    activeTab === "fabric"
                      ? "text-[#641526]"
                      : "text-[#80664E] hover:text-[#25211F]"
                  }`}
                >
                  Fabric & Care
                  {activeTab === "fabric" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#641526]" />
                  )}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("shipping")}
                  className={`pb-2.5 px-3 transition-colors relative whitespace-nowrap flex-shrink-0 ${
                    activeTab === "shipping"
                      ? "text-[#641526]"
                      : "text-[#80664E] hover:text-[#25211F]"
                  }`}
                >
                  Ordering Process
                  {activeTab === "shipping" && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#641526]" />
                  )}
                </button>
              </div>

              <div className="py-4 text-xs leading-relaxed text-[#25211F]/80">
                {activeTab === "details" && (
                  <ul className="space-y-2 list-disc list-inside">
                    {product.details.map((detail, idx) => (
                      <li key={idx}>{detail}</li>
                    ))}
                  </ul>
                )}
                {activeTab === "fabric" && (
                  <div className="space-y-2">
                    <p>
                      <strong>Material:</strong> {product.fabric || "Premium textile weave"}
                    </p>
                    <p>
                      <strong>Care Instructions:</strong> {product.care || "Dry clean only"}
                    </p>
                  </div>
                )}
                {activeTab === "shipping" && (
                  <div className="space-y-2">
                    <p>
                      1. Select your preferred size & color.
                    </p>
                    <p>
                      2. Click <strong>Order Directly on WhatsApp</strong> to chat instantly with our styling team.
                    </p>
                    <p>
                      3. Confirm delivery location and payment instructions directly with Judith&apos;s Closet.
                    </p>
                  </div>
                )}
              </div>
            </div>

          </div>
        </div>

        {/* Related Products Carousel */}
        {relatedProducts.length > 0 && (
          <section className="pt-16 border-t border-[#E8DFD2] space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold">
                  Complete The Look
                </p>
                <h3 className="font-serif text-2xl font-medium text-[#25211F] mt-1">
                  You May Also Admire
                </h3>
              </div>
              <Link
                href="/shop"
                className="text-xs uppercase tracking-wider font-semibold text-[#641526] hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProducts.map((p) => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}

      </div>
    </div>
  );
}
