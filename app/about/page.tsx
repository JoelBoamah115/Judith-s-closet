import Image from "next/image";
import Link from "next/link";
import { MessageCircle, Check, ArrowRight } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

export default function AboutPage() {
  return (
    <div className="bg-[#F8F5F0] min-h-screen">
      {/* Editorial Header */}
      <section className="relative py-20 sm:py-28 bg-[#25211F] text-[#F8F5F0] overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2]/20 border border-[#E8DFD2]/30 text-[#E8DFD2] text-xs uppercase tracking-widest font-semibold">
            <span>Our Brand Philosophy</span>
          </div>

          <h1 className="font-serif text-4xl sm:text-6xl font-medium text-white leading-tight">
            Style That Speaks. <br />
            <span className="italic font-light text-[#E8DFD2]">Elegance That Lasts.</span>
          </h1>

          <p className="text-base sm:text-lg text-[#E8DFD2]/80 font-light max-w-2xl mx-auto leading-relaxed">
            Judith&apos;s Closet is a premium fashion destination created for men and women who value confidence, poise, and timeless design over fleeting trends.
          </p>
        </div>
      </section>

      {/* Brand Narrative Section */}
      <section className="py-20 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs uppercase tracking-widest text-[#80664E] font-semibold">
              The Essence of Judith&apos;s Closet
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#25211F] leading-snug">
              Fashion Curated For Life&apos;s Defining Moments
            </h2>
            <p className="text-sm sm:text-base text-[#25211F]/80 font-light leading-relaxed">
              We curate clothing that empowers. From sharply tailored menswear that commands respect in every boardroom, to flowing evening gowns that illuminate galas and celebratory gatherings, each garment in our collection is handpicked for its cut, drape, and enduring appeal.
            </p>
            <p className="text-sm sm:text-base text-[#25211F]/80 font-light leading-relaxed">
              We serve men and women of all ages with a shared appreciation for thoughtful tailoring and refined visual harmony. When you step into an outfit from Judith&apos;s Closet, your presence speaks before a word is spoken.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-[#E8DFD2]">
                <p className="font-serif text-2xl font-semibold text-[#641526]">100%</p>
                <p className="text-xs text-[#80664E] uppercase tracking-wider mt-1">Curated Quality</p>
              </div>
              <div className="p-4 bg-white rounded-xl border border-[#E8DFD2]">
                <p className="font-serif text-2xl font-semibold text-[#641526]">Personal</p>
                <p className="text-xs text-[#80664E] uppercase tracking-wider mt-1">Stylist Concierge</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD2]">
              <Image
                src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
                alt="Judith's Closet Brand Editorial"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Values Grid */}
      <section className="py-16 sm:py-20 bg-[#FAF8F5] border-t border-b border-[#E8DFD2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-3">
            <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold">
              Our Principles
            </p>
            <h3 className="font-serif text-3xl font-medium text-[#25211F]">
              What We Stand For
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-[#E8DFD2] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#641526] text-white flex items-center justify-center text-sm font-serif font-bold">
                1
              </span>
              <h4 className="font-serif text-xl font-semibold text-[#25211F]">Timeless Over Trendy</h4>
              <p className="text-xs text-[#80664E] leading-relaxed">
                We favor enduring cuts, natural textile blends, and versatile palettes that remain stunning season after season.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-[#E8DFD2] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#641526] text-white flex items-center justify-center text-sm font-serif font-bold">
                2
              </span>
              <h4 className="font-serif text-xl font-semibold text-[#25211F]">Inclusivity of Elegance</h4>
              <p className="text-xs text-[#80664E] leading-relaxed">
                Fashion designed for men and women across generations, honoring diverse silhouettes and personal style identities.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-[#E8DFD2] space-y-3">
              <span className="w-8 h-8 rounded-full bg-[#641526] text-white flex items-center justify-center text-sm font-serif font-bold">
                3
              </span>
              <h4 className="font-serif text-xl font-semibold text-[#25211F]">Personal Concierge Care</h4>
              <p className="text-xs text-[#80664E] leading-relaxed">
                Direct WhatsApp shopping bridges digital ease with the intimacy and warmth of a private luxury boutique fitting.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 text-center max-w-3xl mx-auto px-4 space-y-6">
        <h3 className="font-serif text-3xl sm:text-4xl text-[#25211F]">
          Experience Judith&apos;s Closet
        </h3>
        <p className="text-sm text-[#80664E] font-light">
          Explore our collections online or connect with our styling concierge directly on WhatsApp.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
          <Link
            href="/shop"
            className="px-8 py-3.5 rounded-full bg-[#641526] hover:bg-[#7E1B31] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow"
          >
            Explore Collections
          </Link>
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>
      </section>
    </div>
  );
}
