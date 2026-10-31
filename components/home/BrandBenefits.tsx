import { Award, Users, MessageCircle, Headphones } from "lucide-react";

const BENEFITS = [
  {
    icon: Award,
    title: "Premium Quality",
    description: "Curated fabrics and refined silhouettes designed for durability and enduring style.",
  },
  {
    icon: Users,
    title: "Fashion for Everyone",
    description: "Tailored selections for men and women across diverse ages, fits, and special occasions.",
  },
  {
    icon: MessageCircle,
    title: "Easy WhatsApp Ordering",
    description: "Order directly in a single click with prefilled size, color, and price details.",
  },
  {
    icon: Headphones,
    title: "Dedicated Customer Support",
    description: "Personal stylist recommendations and responsive sizing assistance via WhatsApp.",
  },
];

export function BrandBenefits() {
  return (
    <section className="bg-[#FAF8F5] border-y border-[#E8DFD2] py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {BENEFITS.map((b, idx) => {
            const Icon = b.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-4 p-5 rounded-2xl bg-white/70 border border-[#E8DFD2]/60 hover:border-[#641526]/30 hover:bg-white transition-all shadow-sm group"
              >
                <div className="p-3 rounded-xl bg-[#FAF8F5] text-[#641526] group-hover:bg-[#641526] group-hover:text-white transition-colors flex-shrink-0">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif text-base font-semibold text-[#25211F]">
                    {b.title}
                  </h3>
                  <p className="text-xs text-[#80664E] leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
