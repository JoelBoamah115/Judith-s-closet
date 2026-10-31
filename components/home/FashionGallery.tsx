import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { InstagramIcon } from "@/components/shared/SocialIcons";

const GALLERY_IMAGES = [
  {
    url: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?q=80&w=800&auto=format&fit=crop",
    caption: "Tailored Camel Overcoat in Autumn Mist",
  },
  {
    url: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=800&auto=format&fit=crop",
    caption: "Pure Silk Bias Evening Slip",
  },
  {
    url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=800&auto=format&fit=crop",
    caption: "Royal Burgundy Velvet Tuxedo Dinner Jacket",
  },
  {
    url: "https://images.unsplash.com/photo-1584273143981-41c073dfe8f8?q=80&w=800&auto=format&fit=crop",
    caption: "Burgundy Cape Blazer Couture",
  },
  {
    url: "https://images.unsplash.com/photo-1520975954732-35dd22299614?q=80&w=800&auto=format&fit=crop",
    caption: "Heritage Double-Breasted Trench",
  },
  {
    url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=800&auto=format&fit=crop",
    caption: "Draped Satin Cocktail Midi in Mocha",
  },
];

export function FashionGallery() {
  return (
    <section className="py-16 sm:py-24 bg-[#F8F5F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#80664E] font-semibold mb-2">
              <InstagramIcon className="w-4 h-4 text-[#641526]" />
              <span>@judithscloset</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-medium text-[#25211F]">
              The Fashion Gallery
            </h2>
            <p className="text-xs sm:text-sm text-[#80664E] font-light mt-1">
              Curated glimpses into our styling world. Tag your Judith&apos;s Closet looks with #JudithsClosetStyle.
            </p>
          </div>

          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold text-[#641526] hover:text-[#25211F] transition-colors"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-sm border border-[#E8DFD2] bg-[#F4EFE7]"
            >
              <Image
                src={img.url}
                alt={img.caption}
                fill
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 16vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Hover overlay with Instagram icon */}
              <div className="absolute inset-0 bg-[#25211F]/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-3 text-white">
                <div className="self-end">
                  <InstagramIcon className="w-4 h-4 text-[#E8DFD2]" />
                </div>
                <p className="text-[10px] leading-tight font-medium text-[#F8F5F0]">
                  {img.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
