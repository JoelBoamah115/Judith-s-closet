import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function BrandStory() {
  return (
    <section className="py-20 sm:py-28 bg-[#F4EFE7]/60 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual Composition with overlapping luxury photos */}
          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Primary image */}
              <div className="relative aspect-[4/5] w-full rounded-3xl overflow-hidden shadow-2xl border border-[#E8DFD2]">
                <Image
                  src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=1200&auto=format&fit=crop"
                  alt="Judith's Closet Luxury Fashion Editorial"
                  fill
                  sizes="(max-width: 1024px) 100vw, 550px"
                  className="object-cover"
                />
              </div>

              {/* Floating secondary accent photo */}
              <div className="absolute -bottom-10 -right-6 sm:-right-8 w-44 sm:w-56 aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl border-4 border-[#FAF8F5] hidden sm:block">
                <Image
                  src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=800&auto=format&fit=crop"
                  alt="Judith's Closet Sartorial Details"
                  fill
                  sizes="220px"
                  className="object-cover"
                />
              </div>

              {/* Monogram accent tag */}
              <div className="absolute top-3 left-3 sm:-top-4 sm:-left-4 bg-[#641526] text-white py-3 px-4 rounded-2xl shadow-xl flex items-center">
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-[#E8DFD2] font-semibold">Judith&apos;s Closet</p>
                  <p className="font-serif text-xs font-medium">Bespoke Elegance</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Philosophy */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E8DFD2] text-[#80664E] text-xs uppercase tracking-widest font-semibold">
              <span>About Judith&apos;s Closet</span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-medium text-[#25211F] leading-tight">
              Fashion Is More Than <br />
              <span className="italic font-light text-[#641526]">What You Wear.</span>
            </h2>

            <p className="text-sm sm:text-base text-[#25211F]/80 font-light leading-relaxed">
              At Judith&apos;s Closet, we believe clothing is a personal declaration of confidence, dignity, and individuality. As a premier fashion destination for men and women who appreciate timeless style and refined craftsmanship, our collections are thoughtfully curated to bridge international runway sophistication with modern wearability.
            </p>

            <p className="text-sm sm:text-base text-[#25211F]/80 font-light leading-relaxed">
              Whether you are preparing for a momentous banquet, stepping into an executive conference, or seeking elevated everyday wardrobe essentials, our garments are selected to ensure you look impeccably polished and feel remarkable.
            </p>

            {/* Core Pillars */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#25211F] font-medium">
                <span className="w-5 h-5 rounded-full bg-[#641526] text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Curated selections catering to discerning men and women</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#25211F] font-medium">
                <span className="w-5 h-5 rounded-full bg-[#641526] text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>High-grade textiles including mulberry silk, virgin wool & Egyptian cotton</span>
              </div>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#25211F] font-medium">
                <span className="w-5 h-5 rounded-full bg-[#641526] text-white flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3" />
                </span>
                <span>Personal styling advice and effortless ordering directly over WhatsApp</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-4">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#25211F] hover:bg-[#641526] text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow group"
              >
                <span>Read Full Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/contact"
                className="text-xs uppercase tracking-wider font-semibold text-[#641526] hover:underline"
              >
                Contact Concierge
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
