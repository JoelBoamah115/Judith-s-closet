import Link from "next/link";
import Image from "next/image";

interface BrandLogoProps {
  className?: string;
  variant?: "dark" | "light";
  size?: "sm" | "md" | "lg";
}

export function BrandLogo({ className = "", variant = "dark", size = "md" }: BrandLogoProps) {
  const heightClasses = {
    sm: "h-8 md:h-9",
    md: "h-10 md:h-12",
    lg: "h-14 md:h-16",
  };

  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2 group transition-opacity hover:opacity-90 ${className}`}
      aria-label="Judith's Closet - Return to Home"
    >
      <div className={`relative ${heightClasses[size]} w-auto aspect-[2.6/1] flex items-center`}>
        {/* Exact official logo image supplied */}
        <Image
          src="/images/logo.png"
          alt="Judith's Closet Official Logo"
          width={260}
          height={100}
          priority
          className={`h-full w-auto object-contain ${
            variant === "light" ? "brightness-0 invert drop-shadow-sm" : ""
          }`}
        />
      </div>
    </Link>
  );
}
