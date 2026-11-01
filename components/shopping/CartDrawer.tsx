"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Trash2, Plus, Minus, MessageCircle, ArrowRight, ShoppingBag } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatGHS } from "@/lib/utils";
import { createCartWhatsAppUrl } from "@/lib/whatsapp";

export function CartDrawer() {
  const {
    cart,
    isCartOpen,
    setIsCartOpen,
    updateQuantity,
    removeFromCart,
    cartTotal,
    clearCart,
  } = useShop();

  // Lock background scroll when cart drawer is open
  useEffect(() => {
    if (isCartOpen) {
      const origBodyOverflow = document.body.style.overflow;
      const origHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = origBodyOverflow;
        document.documentElement.style.overflow = origHtmlOverflow;
      };
    }
  }, [isCartOpen]);

  if (!isCartOpen) return null;

  const whatsappCheckoutUrl = createCartWhatsAppUrl(cart, cartTotal);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden" aria-modal="true" role="dialog">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-md w-full bg-[#FAF8F5] shadow-2xl flex flex-col z-50 animate-in slide-in-from-right duration-300">
        {/* Header */}
        <div className="p-5 border-b border-[#E8DFD2] flex items-center justify-between bg-[#F8F5F0]">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-[#641526]" />
            <h2 className="font-serif text-lg font-semibold text-[#25211F]">
              Your Shopping Bag
            </h2>
            <span className="text-xs bg-[#E8DFD2] text-[#25211F] px-2 py-0.5 rounded-full font-medium">
              {cart.reduce((total, item) => total + item.quantity, 0)} items
            </span>
          </div>
          <button
            type="button"
            onClick={() => setIsCartOpen(false)}
            className="w-8 h-8 flex items-center justify-center text-[#25211F]/70 hover:text-[#25211F] hover:bg-[#E8DFD2]/60 rounded-full transition-colors"
            aria-label="Close bag"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Cart Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {cart.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 mx-auto rounded-full bg-[#E8DFD2]/50 flex items-center justify-center text-[#80664E]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <h3 className="font-serif text-lg text-[#25211F]">Your bag is empty</h3>
              <p className="text-xs text-[#80664E] max-w-xs mx-auto">
                Explore our curated men&apos;s and women&apos;s collections to discover timeless elegance.
              </p>
              <button
                type="button"
                onClick={() => setIsCartOpen(false)}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#641526] hover:underline pt-2"
              >
                Continue Browsing <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            cart.map((item) => (
              <div
                key={item.id}
                className="flex gap-4 p-3 bg-white rounded-xl border border-[#E8DFD2]/80 shadow-sm transition-all"
              >
                {/* Thumbnail */}
                <div className="relative w-20 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-[#F8F5F0]">
                  <Image
                    src={item.product.images[0]}
                    alt={item.product.name}
                    fill
                    sizes="80px"
                    className="object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col justify-between min-w-0">
                  <div>
                    <div className="flex items-start justify-between gap-1">
                      <h4 className="text-sm font-serif font-medium text-[#25211F] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        type="button"
                        onClick={() => removeFromCart(item.id)}
                        className="text-[#80664E] hover:text-[#641526] p-1 transition-colors"
                        aria-label="Remove item"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#80664E] flex items-center gap-2 mt-0.5">
                      <span>Size: <strong className="text-[#25211F]">{item.selectedSize}</strong></span>
                      {item.selectedColor && (
                        <span>• Color: <strong className="text-[#25211F]">{item.selectedColor}</strong></span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    {/* Stepper */}
                    <div className="flex items-center border border-[#E8DFD2] rounded-lg overflow-hidden bg-[#FAF8F5]">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-[#E8DFD2] text-[#25211F] transition-colors"
                        aria-label="Decrease quantity"
                      >
                        <Minus className="w-3.5 h-3.5" />
                      </button>
                      <span className="px-2.5 text-xs font-semibold text-[#25211F]">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="w-7 h-7 flex items-center justify-center hover:bg-[#E8DFD2] text-[#25211F] transition-colors"
                        aria-label="Increase quantity"
                      >
                        <Plus className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <span className="text-xs font-semibold text-[#641526]">
                      {formatGHS(item.product.price * item.quantity)}
                    </span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer / WhatsApp Checkout */}
        {cart.length > 0 && (
          <div className="p-5 border-t border-[#E8DFD2] bg-white space-y-4">
            <div className="space-y-1.5">
              <div className="flex items-center justify-between text-xs text-[#80664E]">
                <span>Estimated Subtotal</span>
                <span>{formatGHS(cartTotal)}</span>
              </div>
              <div className="flex items-center justify-between text-sm font-semibold text-[#25211F]">
                <span>Total Order Amount</span>
                <span className="text-base text-[#641526] font-bold">{formatGHS(cartTotal)}</span>
              </div>
              <p className="text-[11px] text-[#80664E] italic">
                * Final pricing, delivery details & confirmation will be finalized directly via WhatsApp.
              </p>
            </div>

            {/* Direct WhatsApp Order All Button */}
            <a
              href={whatsappCheckoutUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white py-3.5 px-4 rounded-xl text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              <span>Order All on WhatsApp</span>
            </a>

            <div className="flex items-center justify-between text-xs pt-1">
              <Link
                href="/cart"
                onClick={() => setIsCartOpen(false)}
                className="text-[#641526] hover:underline font-medium"
              >
                View Full Bag Page
              </Link>
              <button
                type="button"
                onClick={clearCart}
                className="text-[#80664E] hover:text-[#641526] transition-colors text-[11px]"
              >
                Clear Bag
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
