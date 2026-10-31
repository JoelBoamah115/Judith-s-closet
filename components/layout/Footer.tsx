import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-[#25211F] text-[#F8F5F0] py-6 border-t border-[#3A3432]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-[#E8DFD2]/70 gap-4">
          <p>
            &copy; {new Date().getFullYear()} Judith&apos;s Closet. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 text-[11px]">
            <span className="text-[#C5A059]/90 font-medium">Demo Presentation Edition</span>
            <span className="text-[#E8DFD2]/40">•</span>
            <Link href="/about" className="hover:text-white transition-colors">
              Brand Story
            </Link>
            <span className="text-[#E8DFD2]/40">•</span>
            <Link href="/contact" className="hover:text-white transition-colors">
              Concierge
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
