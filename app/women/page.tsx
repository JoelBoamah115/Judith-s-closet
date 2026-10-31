import Image from "next/image";
import Link from "next/link";
import { PRODUCTS } from "@/lib/products";
import { ProductCard } from "@/components/products/ProductCard";
import { MessageCircle, HeartHandshake, Crown } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

export default function WomenPage() {
  const womenProducts = PRODUCTS.filter((p) => p.category === "women");

  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      {/* Editorial Women's Hero Banner */}
      <section className="relative bg-[#25211F] text-[#F8F5F0] overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 z-0 opacity-40">
          <Image
            src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=1600&auto=format&fit=crop"
            alt="Women's Couture Collection Banner"
            fill
            priority
            className="object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#191615] via-[#25211F]/80 to-transparent z-10" />

        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/20 border border-[#E8DFD2]/30 text-[#E8DFD2] text-xs uppercase tracking-widest font-semibold">
            <span>Ladies&apos; Couture & Eveningwear</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white max-w-2xl leading-tight">
            Grace, Sculpted Drape & <br />
            <span className="italic font-light text-[#E8DFD2]">Effortless Poise.</span>
          </h1>

          <p className="text-sm sm:text-base text-[#E8DFD2]/80 max-w-xl font-light leading-relaxed">
            From liquid champagne silk slip gowns and structured burgundy cape blazers to tailored wide-leg trousers and sculpted evening gowns.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              href="#women-catalog"
              className="px-8 py-3.5 rounded-full bg-[#641526] hover:bg-[#7E1B31] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-md"
            >
              Browse Women&apos;s Pieces ({womenProducts.length})
            </Link>
            <a
              href={WHATSAPP_BASE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#F8F5F0] text-xs uppercase tracking-widest font-semibold backdrop-blur-sm transition-all"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Personal Stylist WhatsApp</span>
            </a>
          </div>
        </div>
      </section>

      {/* Highlights Bar */}
      <div className="bg-[#FAF8F5] border-b border-[#E8DFD2] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#25211F]">
              <Crown className="w-4 h-4 text-[#641526]" />
              <span>Grade-6A Mulberry Silk & Pure Crepe</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#25211F]">
              <HeartHandshake className="w-4 h-4 text-[#641526]" />
              <span>Flattering Tailored Silhouettes</span>
            </div>
            <div className="flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#25211F]">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>Direct WhatsApp Concierge Ordering</span>
            </div>
          </div>
        </div>
      </div>

      {/* Catalog Grid */}
      <section id="women-catalog" className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#25211F]">
              Women&apos;s Signature Lineup
            </h2>
            <p className="text-xs text-[#80664E] mt-1">
              Click any piece to select sizing, add to bag, or order instantly on WhatsApp.
            </p>
          </div>
          <span className="text-xs font-semibold text-[#80664E] bg-white px-3 py-1.5 rounded-full border border-[#E8DFD2]">
            {womenProducts.length} Items Available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {womenProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
