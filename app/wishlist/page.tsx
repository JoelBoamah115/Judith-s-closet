"use client";

import Link from "next/link";
import { Heart, ShoppingBag, ArrowRight, Trash2 } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";

export default function WishlistPage() {
  const { wishlist, toggleWishlist } = useShop();

  const savedProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <div className="bg-[#F8F5F0] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-3">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#E8DFD2]/60 flex items-center justify-center text-[#641526]">
            <Heart className="w-6 h-6 fill-[#641526]" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#25211F]">
            Your Saved Wishlist
          </h1>
          <p className="text-sm text-[#80664E] font-light">
            Keep track of your favorite Judith&apos;s Closet pieces. Saved automatically in your browser.
          </p>
        </div>

        {savedProducts.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center space-y-4 border border-[#E8DFD2] max-w-md mx-auto shadow-sm">
            <p className="font-serif text-xl text-[#25211F]">No favorites saved yet</p>
            <p className="text-xs text-[#80664E] leading-relaxed">
              Explore our men&apos;s and women&apos;s collections and click the heart icon on any style to save it here.
            </p>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#641526] hover:bg-[#7E1B31] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm"
            >
              <span>Explore Collection</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="flex items-center justify-between text-xs text-[#80664E] px-1">
              <span>
                You have <strong className="text-[#25211F]">{savedProducts.length}</strong> saved piece{savedProducts.length > 1 ? "s" : ""}
              </span>
              <span className="italic">Ready for instant WhatsApp ordering</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {savedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
