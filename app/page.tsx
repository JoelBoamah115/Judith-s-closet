import { HeroSection } from "@/components/home/HeroSection";
import { BrandBenefits } from "@/components/home/BrandBenefits";
import { CategoryBanners } from "@/components/home/CategoryBanners";
import { FeaturedSection } from "@/components/home/FeaturedSection";
import { BrandStory } from "@/components/home/BrandStory";
import { FashionGallery } from "@/components/home/FashionGallery";
import { PromotionalCta } from "@/components/home/PromotionalCta";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BrandBenefits />
      <CategoryBanners />
      <FeaturedSection />
      <BrandStory />
      <FashionGallery />
      <PromotionalCta />
    </>
  );
}
