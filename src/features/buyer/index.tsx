import { Header, Footer } from "../../components/layout";

import {
  HeroCarousel,
  BestSection,
  SuccessStories,
  IntroSection,
  Random,
} from "./sections";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroCarousel />
        <IntroSection />
        <BestSection />
        <SuccessStories />
        <Random/>
      </main>

      <Footer />
    </div>
  );
}
