import Link from "next/image";
import Image from "next/image";
import NextLink from "next/link";
import { ArrowRight } from "lucide-react";

export function CategoryBanners() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold flex items-center justify-center">
            Shop by Category
          </p>
          <h2 className="font-serif text-3xl sm:text-5xl font-medium text-[#25211F]">
            Curated For Distinction
          </h2>
          <p className="text-sm text-[#80664E] font-light leading-relaxed">
            From sharp masculine tailoring to breathtaking evening gowns, explore wardrobe centerpieces designed to turn heads.
          </p>
        </div>

        {/* Two Grand Visual Collection Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          
          {/* Men's Collection Card */}
          <div className="group relative h-[480px] sm:h-[560px] rounded-3xl overflow-hidden shadow-lg border border-[#E8DFD2] flex flex-col justify-end p-8 sm:p-12">
            <Image
              src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
              alt="Judith's Closet Men's Collection"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            {/* Elegant dark overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity group-hover:opacity-90" />

            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#E8DFD2] font-semibold bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm inline-block">
                Gentlemen&apos;s Edit
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                Men&apos;s Collection
              </h3>
              <p className="text-sm text-[#E8DFD2]/85 max-w-md font-light leading-relaxed">
                Precision Italian suiting, crisp Egyptian cotton shirts, cashmere knits, and handcrafted leather footwear for modern gentlemen.
              </p>
              <div>
                <NextLink
                  href="/men"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#25211F] hover:bg-[#641526] hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md group/btn"
                >
                  <span>Shop Men&apos;s Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </NextLink>
              </div>
            </div>
          </div>

          {/* Women's Collection Card */}
          <div className="group relative h-[480px] sm:h-[560px] rounded-3xl overflow-hidden shadow-lg border border-[#E8DFD2] flex flex-col justify-end p-8 sm:p-12">
            <Image
              src="https://images.unsplash.com/photo-1539109136881-3be0616acf4b?q=80&w=1200&auto=format&fit=crop"
              alt="Judith's Closet Women's Collection"
              fill
              sizes="(max-width: 768px) 100vw, 600px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent transition-opacity group-hover:opacity-90" />

            <div className="relative z-10 space-y-4">
              <span className="text-xs uppercase tracking-widest text-[#E8DFD2] font-semibold bg-white/15 px-3 py-1 rounded-full backdrop-blur-sm inline-block">
                Ladies&apos; Couture
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl font-medium text-white">
                Women&apos;s Collection
              </h3>
              <p className="text-sm text-[#E8DFD2]/85 max-w-md font-light leading-relaxed">
                Champagne silk gowns, structured cape blazers, pleated trousers, and statement evening wear designed for poise and confidence.
              </p>
              <div>
                <NextLink
                  href="/women"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-[#25211F] hover:bg-[#641526] hover:text-white text-xs uppercase tracking-widest font-semibold transition-all duration-300 shadow-md group/btn"
                >
                  <span>Shop Women&apos;s Collection</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </NextLink>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
