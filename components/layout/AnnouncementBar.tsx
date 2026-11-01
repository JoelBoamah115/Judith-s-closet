import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY_NUMBER } from "@/lib/whatsapp";

export function AnnouncementBar() {
  return (
    <aside aria-label="Store announcement" className="bg-[#25211F] text-[#F8F5F0] text-xs py-2 px-4 border-b border-[#3A3432]">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <p className="hidden md:block text-[11px] tracking-widest uppercase text-[#E8DFD2]/70 font-medium">
          Accra, Ghana • Timeless Luxury & Elegance
        </p>

        <p className="text-center flex-1 tracking-wider text-[11px] sm:text-xs font-light text-[#F8F5F0]">
          Discover your signature style with <span className="font-medium text-[#E8DFD2]">Judith&apos;s Closet</span>
        </p>

        <div className="flex items-center gap-4 text-[11px]">
          <Link
            href={WHATSAPP_BASE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[#E8DFD2] hover:text-white transition-colors"
          >
            <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
            <span className="hidden sm:inline">WhatsApp Concierge:</span>
            <span className="font-medium underline underline-offset-2">{WHATSAPP_DISPLAY_NUMBER}</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}
