"use client";

import Image from "next/image";
import Link from "next/link";
import { Trash2, Plus, Minus, MessageCircle, ArrowRight, ShoppingBag, ShieldCheck } from "lucide-react";
import { useShop } from "@/context/ShopContext";
import { formatGHS } from "@/lib/utils";
import { createCartWhatsAppUrl, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

export default function CartPage() {
  const { cart, updateQuantity, removeFromCart, cartTotal, clearCart } = useShop();

  const whatsappCheckoutUrl = createCartWhatsAppUrl(cart, cartTotal);

  return (
    <div className="bg-[#F8F5F0] min-h-screen py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto space-y-2">
          <div className="w-12 h-12 mx-auto rounded-full bg-[#E8DFD2]/60 flex items-center justify-center text-[#641526]">
            <ShoppingBag className="w-6 h-6" />
          </div>
          <h1 className="font-serif text-3xl sm:text-4xl font-medium text-[#25211F]">
            Your Shopping Bag
          </h1>
          <p className="text-sm text-[#80664E] font-light">
            Review your selected items before completing your order directly with Judith&apos;s Closet on WhatsApp.
          </p>
        </div>

        {cart.length === 0 ? (
          <div className="bg-white rounded-3xl p-16 text-center space-y-4 border border-[#E8DFD2] max-w-md mx-auto shadow-sm">
            <p className="font-serif text-xl text-[#25211F]">Your bag is currently empty</p>
            <p className="text-xs text-[#80664E] leading-relaxed">
              Explore our curated collections of menswear and ladies&apos; couture to add pieces to your bag.
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
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left: Items List */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center justify-between text-xs text-[#80664E] px-1 pb-2 border-b border-[#E8DFD2]">
                <span>{cart.length} unique style{cart.length > 1 ? "s" : ""} in bag</span>
                <button
                  type="button"
                  onClick={clearCart}
                  className="hover:text-[#641526] underline transition-colors"
                >
                  Clear Bag
                </button>
              </div>

              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-5 p-5 bg-white rounded-2xl border border-[#E8DFD2] shadow-sm"
                >
                  {/* Thumbnail */}
                  <div className="relative w-full sm:w-28 h-36 rounded-xl overflow-hidden bg-[#FAF8F5] flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      sizes="120px"
                      className="object-cover"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between space-y-4">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <p className="text-[10px] uppercase tracking-wider text-[#80664E] font-semibold">
                            {item.product.category} • {item.product.subCategory}
                          </p>
                          <Link href={`/product/${item.product.slug}`} className="hover:text-[#641526]">
                            <h3 className="font-serif text-lg font-semibold text-[#25211F]">
                              {item.product.name}
                            </h3>
                          </Link>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-[#80664E] hover:text-[#641526] p-1 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-[#80664E] mt-2">
                        <span>Selected Size: <strong className="text-[#25211F]">{item.selectedSize}</strong></span>
                        {item.selectedColor && (
                          <span>Color: <strong className="text-[#25211F]">{item.selectedColor}</strong></span>
                        )}
                        <span>Unit: <strong className="text-[#641526]">{formatGHS(item.product.price)}</strong></span>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-2 border-t border-[#E8DFD2]/60">
                      {/* Stepper */}
                      <div className="flex items-center border border-[#E8DFD2] rounded-xl overflow-hidden bg-[#FAF8F5]">
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-xs hover:bg-[#E8DFD2] text-[#25211F]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-4 text-xs font-bold text-[#25211F]">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-xs hover:bg-[#E8DFD2] text-[#25211F]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="text-right">
                        <span className="text-xs text-[#80664E] block">Subtotal</span>
                        <span className="text-base font-bold text-[#641526]">
                          {formatGHS(item.product.price * item.quantity)}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Right: Order Summary & WhatsApp Checkout */}
            <div className="lg:col-span-4 space-y-6">
              <div className="bg-white p-6 sm:p-8 rounded-3xl border border-[#E8DFD2] shadow-sm space-y-6">
                <h3 className="font-serif text-xl font-semibold text-[#25211F]">
                  Order Summary
                </h3>

                <div className="space-y-3 text-xs text-[#80664E] pb-4 border-b border-[#E8DFD2]">
                  <div className="flex justify-between">
                    <span>Selected Items</span>
                    <span>{cart.reduce((t, i) => t + i.quantity, 0)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Estimated Subtotal</span>
                    <span>{formatGHS(cartTotal)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Delivery Coordination</span>
                    <span className="text-[#25211F] font-medium">Arranged on WhatsApp</span>
                  </div>
                </div>

                <div className="flex items-baseline justify-between text-base font-bold text-[#25211F]">
                  <span>Total (Demo Estimate)</span>
                  <span className="text-2xl text-[#641526]">{formatGHS(cartTotal)}</span>
                </div>

                {/* The Core Requirement: Order All on WhatsApp */}
                <a
                  href={whatsappCheckoutUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 py-4 px-6 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm font-bold uppercase tracking-widest shadow-md hover:shadow-lg transition-all"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Order All on WhatsApp</span>
                </a>

                <p className="text-[11px] text-center text-[#80664E] leading-relaxed italic">
                  Clicking will open WhatsApp to <strong>{WHATSAPP_DISPLAY_NUMBER}</strong> with all your selected items, sizes, quantities, and subtotal formatted in your message.
                </p>
              </div>

              {/* Concierge Assurance */}
              <div className="p-5 rounded-2xl bg-[#FAF8F5] border border-[#E8DFD2] space-y-2 text-xs text-[#80664E]">
                <div className="flex items-center gap-2 text-[#25211F] font-semibold">
                  <span>No Fake Payment Gateway</span>
                </div>
                <p className="text-[11px] leading-relaxed">
                  Every order is personally handled with real-time stock checks, custom delivery scheduling in Accra, and flexible payment arrangements.
                </p>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
