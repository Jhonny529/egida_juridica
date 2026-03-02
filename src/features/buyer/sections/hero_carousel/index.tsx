import { HeroSlider } from "../../../../components/ui";

const images: string[] = [
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2400&q=80",
];

export default function HeroCarousel() {
  return (
    <HeroSlider
      images={images}
      title={"Buyen Home Journey."}
      subtitle="Your Real Estate Experts"
      cta_left={{ label: "YOUR GUIDE TO BUYING", href: "/buy" }}
      cta_right={{ label: "YOUR GUIDE TO SELLING", href: "/sell" }}
    />
  );
}
