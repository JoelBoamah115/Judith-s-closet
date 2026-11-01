import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

export function PromotionalCta() {
  return (
    <section className="py-20 sm:py-24 bg-[#25211F] text-[#F8F5F0] relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#641526]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E8DFD2]/10 border border-[#E8DFD2]/20 text-[#E8DFD2] text-xs uppercase tracking-widest font-medium">
          <span>Elevate Your Wardrobe</span>
        </div>

        <h2 className="font-serif text-3xl sm:text-5xl font-medium tracking-tight text-[#F8F5F0] leading-tight">
          Ready to Discover Elegance That Lasts?
        </h2>

        <p className="text-sm sm:text-base text-[#E8DFD2]/80 font-light max-w-2xl mx-auto leading-relaxed">
          Whether you need custom sizing guidance, styling consultation for an upcoming celebration, or wish to order a piece today, our team is ready to welcome you directly on WhatsApp.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-xs sm:text-sm uppercase tracking-widest font-semibold shadow-lg hover:shadow-xl transition-all text-center group"
          >
            <MessageCircle className="w-5 h-5 flex-shrink-0" />
            <span>OPEN WHATSAPP</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a>

          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-[#F8F5F0] text-xs sm:text-sm uppercase tracking-widest font-semibold backdrop-blur-sm transition-all"
          >
            <span>Explore All Collections</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-[11px] text-[#E8DFD2]/60 pt-2 italic">
          No sign-ups or complex checkout required. Direct, personal concierge service with every inquiry.
        </p>
      </div>
    </section>
  );
}
