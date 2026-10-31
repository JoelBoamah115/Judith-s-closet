import Link from "next/link";
import Image from "next/image";
import { ArrowRight, MessageCircle } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

export function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(to bottom, #FDFCFA 0%, #FAF8F5 100%)",
      }}
    >
      {/* Smooth fade into the BrandBenefits section below — same base colour so no edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-16 pointer-events-none z-10"
        style={{ background: "linear-gradient(to bottom, transparent 0%, #FAF8F5 100%)" }}
      />

      {/* Main Editorial Hero Grid */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ── Left Column: Typography & CTAs ── */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-8">

            {/* Tagline pill */}
            <div
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs uppercase tracking-widest font-medium"
              style={{ border: "1px solid #DCCABD", color: "#57443B" }}
            >
              <span>Timeless Luxury • Judith&apos;s Closet</span>
            </div>

            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-serif text-4xl sm:text-6xl lg:text-7xl font-normal tracking-tight leading-[1.08]">
                <span style={{ color: "#30201C" }}>Discover Your</span>
                <br />
                <span className="italic font-light" style={{ color: "#78172D" }}>
                  Signature Style.
                </span>
              </h1>

              <p
                className="text-base sm:text-xl font-light max-w-xl leading-relaxed"
                style={{ color: "#57443B" }}
              >
                Premium fashion for men and women. Look good. Feel amazing. Handcrafted tailoring and statement silhouettes designed to empower every moment.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">

              {/* Explore Collection — burgundy fill */}
              <Link
                href="/shop"
                className="jc-btn-primary inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-md transition-colors duration-300 group"
              >
                <span>Explore Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>

              {/* Shop Women — ghost */}
              <Link
                href="/women"
                className="jc-btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold transition-colors duration-300"
              >
                <span>Shop Women</span>
              </Link>

              {/* Shop Men — ghost */}
              <Link
                href="/men"
                className="jc-btn-ghost inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full text-xs sm:text-sm uppercase tracking-widest font-semibold transition-colors duration-300"
              >
                <span>Shop Men</span>
              </Link>
            </div>

            {/* WhatsApp Callout */}
            <div
              className="pt-4 flex items-center gap-4 text-xs"
              style={{ borderTop: "1px solid #DCCABD", color: "#57443B" }}
            >
              {/* Green WhatsApp icon circle — unchanged */}
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
                style={{
                  background: "rgba(37,211,102,0.12)",
                  border: "1px solid rgba(37,211,102,0.35)",
                  color: "#25D366",
                }}
              >
                <MessageCircle className="w-4 h-4" />
              </div>

              <p>
                Browse online &amp; order instantly on WhatsApp:{" "}
                <Link
                  href={WHATSAPP_BASE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline font-semibold transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#78172D] focus-visible:ring-offset-1"
                  style={{ color: "#78172D" }}
                >
                  +233 54 763 1900
                </Link>
              </p>
            </div>

          </div>

          {/* ── Right Column: Images — layout & imagery unchanged ── */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">

              {/* Main image */}
              <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden shadow-2xl border border-[#DCCABD]/40">
                <Image
                  src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1200&auto=format&fit=crop"
                  alt="Judith's Closet Luxury Fashion Editorial"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="text-[11px] uppercase tracking-widest text-[#E8DFD2] font-semibold">
                    New Season Couture
                  </p>
                  <p className="font-serif text-lg font-medium">Autumn / Evening Edit</p>
                </div>
              </div>

              {/* Floating secondary card */}
              <div className="absolute -bottom-8 -left-6 sm:-left-10 w-44 sm:w-56 aspect-[3/4] rounded-xl overflow-hidden shadow-2xl border-2 border-[#E8DFD2]/40 hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=800&auto=format&fit=crop"
                  alt="Men's Bespoke Tailoring"
                  fill
                  sizes="220px"
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <p className="text-[10px] uppercase tracking-widest text-[#C5A059] font-bold">
                    Men&apos;s Tailoring
                  </p>
                  <p className="font-serif text-xs font-semibold">Italian Wool Overcoat</p>
                </div>
              </div>

              {/* Floating seal */}
              <div className="absolute -top-5 -right-5 w-20 h-20 rounded-full bg-[#641526] border-2 border-[#C5A059] flex flex-col items-center justify-center text-center text-white shadow-xl rotate-12">
                <span className="text-[9px] uppercase tracking-widest font-bold text-[#E8DFD2]">Judith&apos;s</span>
                <span className="text-[8px] uppercase tracking-wider font-light">Elegance</span>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Scoped hero button styles — avoids Server Component inline-handler restrictions */}
      <style>{`
        /* Explore Collection */
        .jc-btn-primary {
          background-color: #78172D;
          color: #ffffff;
        }
        .jc-btn-primary:hover {
          background-color: #661226;
        }
        .jc-btn-primary:focus-visible {
          outline: 2px solid #78172D;
          outline-offset: 2px;
        }

        /* Ghost buttons (Shop Women / Shop Men) */
        .jc-btn-ghost {
          background-color: transparent;
          border: 1px solid #30201C;
          color: #30201C;
        }
        .jc-btn-ghost:hover {
          background-color: #30201C;
          color: #ffffff;
        }
        .jc-btn-ghost:focus-visible {
          outline: 2px solid #78172D;
          outline-offset: 2px;
        }
      `}</style>
    </section>
  );
}
