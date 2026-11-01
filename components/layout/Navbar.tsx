"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Search, 
  Heart, 
  ShoppingBag, 
  MessageCircle, 
  Menu, 
  X,
  ChevronRight
} from "lucide-react";
import { BrandLogo } from "@/components/shared/BrandLogo";
import { useShop } from "@/context/ShopContext";
import { WHATSAPP_BASE_URL } from "@/lib/whatsapp";

const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Shop All", href: "/shop" },
  { name: "Men", href: "/men" },
  { name: "Women", href: "/women" },
  { name: "About Us", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const { cartCount, wishlist, setIsCartOpen, setIsSearchOpen } = useShop();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock background scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      const origBodyOverflow = document.body.style.overflow;
      const origHtmlOverflow = document.documentElement.style.overflow;
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = origBodyOverflow;
        document.documentElement.style.overflow = origHtmlOverflow;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? "bg-[#F8F5F0]/95 backdrop-blur-md shadow-sm border-b border-[#E8DFD2]/60 py-3"
            : "bg-[#F8F5F0] border-b border-[#E8DFD2]/40 py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden p-2 text-[#25211F] hover:text-[#641526] transition-colors focus:outline-none"
              aria-label="Open mobile menu"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Official Brand Logo */}
            <div className="flex-shrink-0">
              <BrandLogo size="md" />
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-8">
              {NAV_LINKS.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`text-sm tracking-widest uppercase transition-all duration-200 relative py-1 font-medium ${
                      isActive
                        ? "text-[#641526] font-semibold"
                        : "text-[#25211F]/80 hover:text-[#641526]"
                    }`}
                  >
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#641526] rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Action Utilities & WhatsApp Button */}
            <div className="flex items-center space-x-1 sm:space-x-3">
              {/* Search Icon */}
              <button
                type="button"
                onClick={() => setIsSearchOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#25211F] hover:text-[#641526] hover:bg-[#E8DFD2]/40 rounded-full transition-colors relative"
                aria-label="Search catalog"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Icon */}
              <Link
                href="/wishlist"
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#25211F] hover:text-[#641526] hover:bg-[#E8DFD2]/40 rounded-full transition-colors relative"
                aria-label={`Wishlist (${wishlist.length} items)`}
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#641526] text-white text-[10px] font-bold rounded-full flex items-center justify-center animate-pulse">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* Shopping Bag Icon */}
              <button
                type="button"
                onClick={() => setIsCartOpen(true)}
                className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-[#25211F] hover:text-[#641526] hover:bg-[#E8DFD2]/40 rounded-full transition-colors relative"
                aria-label={`Shopping bag (${cartCount} items)`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-[#641526] text-white text-[10px] font-bold rounded-full flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              {/* WhatsApp Ordering Button (Desktop) */}
              <Link
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden sm:inline-flex items-center gap-2 bg-[#641526] hover:bg-[#4E101D] text-white text-xs tracking-wider uppercase font-semibold px-4 py-2.5 rounded-full shadow-sm hover:shadow-md transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Order on WhatsApp</span>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Content */}
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF8F5] shadow-2xl flex flex-col z-50 animate-in slide-in-from-left duration-300">
            {/* Drawer Header */}
            <div className="p-5 border-b border-[#E8DFD2] flex items-center justify-between">
              <BrandLogo size="sm" />
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#25211F] hover:text-[#641526] rounded-full transition-colors"
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="flex-1 overflow-y-auto py-6 px-5 space-y-4">
              <div className="space-y-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.name}
                      href={link.href}
                      className={`flex items-center justify-between py-3 px-3 rounded-lg text-sm uppercase tracking-wider font-medium transition-colors ${
                        isActive
                          ? "bg-[#641526] text-white font-semibold"
                          : "text-[#25211F] hover:bg-[#E8DFD2]/50 hover:text-[#641526]"
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-[#80664E]"}`} />
                    </Link>
                  );
                })}
              </div>

              {/* Mobile Quick Collections */}
              <div className="pt-6 border-t border-[#E8DFD2]/80">
                <p className="text-xs uppercase tracking-widest text-[#80664E] font-semibold mb-3 px-3">
                  Featured Collections
                </p>
                <div className="grid grid-cols-2 gap-2">
                  <Link
                    href="/men"
                    className="p-3 bg-[#E8DFD2]/40 rounded-lg text-xs font-medium text-[#25211F] hover:bg-[#E8DFD2] text-center"
                  >
                    Men&apos;s Tailoring
                  </Link>
                  <Link
                    href="/women"
                    className="p-3 bg-[#E8DFD2]/40 rounded-lg text-xs font-medium text-[#25211F] hover:bg-[#E8DFD2] text-center"
                  >
                    Women&apos;s Couture
                  </Link>
                </div>
              </div>
            </div>

            {/* Drawer Footer with WhatsApp Action */}
            <div className="p-5 border-t border-[#E8DFD2] bg-[#F8F5F0]">
              <Link
                href={WHATSAPP_BASE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 bg-[#641526] hover:bg-[#4E101D] text-white py-3 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366]" />
                <span>Order on WhatsApp</span>
              </Link>
              <p className="text-[11px] text-center text-[#80664E] mt-3">
                Personal Stylist Available Now
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
