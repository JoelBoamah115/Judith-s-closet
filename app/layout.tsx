import type { Metadata } from "next";
import "./globals.css";
import { ShopProvider } from "@/context/ShopContext";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CartDrawer } from "@/components/shopping/CartDrawer";
import { QuickViewModal } from "@/components/shopping/QuickViewModal";
import { SearchModal } from "@/components/shopping/SearchModal";

export const metadata: Metadata = {
  metadataBase: new URL("https://judithscloset.demo"),
  title: "Judith's Closet | Luxury Fashion & Timeless Elegance",
  description:
    "Judith's Closet — Style that speaks. Elegance that lasts. Explore our curated collections of luxury menswear, women's couture, evening gowns, and tailored garments with direct WhatsApp ordering in Ghana.",
  keywords: [
    "Judiths Closet",
    "Luxury Fashion Ghana",
    "Tailored Menswear",
    "Womens Couture",
    "Evening Gowns Accra",
    "Ghana Fashion Boutique",
    "WhatsApp Fashion Ordering",
  ],
  authors: [{ name: "Judith's Closet" }],
  openGraph: {
    title: "Judith's Closet | Luxury Fashion & Timeless Elegance",
    description: "Style that speaks. Elegance that lasts. Curated fashion for men and women.",
    url: "https://judithscloset.demo",
    siteName: "Judith's Closet",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
        alt: "Judith's Closet Official Brand Logo",
      },
    ],
    locale: "en_GH",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    apple: "/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..800;1,400..800&family=Plus+Jakarta+Sans:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#F8F5F0] text-[#25211F]">
        <ShopProvider>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />

          {/* Interactive Global Drawers & Modals */}
          <CartDrawer />
          <QuickViewModal />
          <SearchModal />
        </ShopProvider>
      </body>
    </html>
  );
}
