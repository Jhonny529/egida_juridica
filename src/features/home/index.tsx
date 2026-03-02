import { Header, Footer } from "../../components/layout";

import {
  HeroCarousel,
  About,
  WorkWithCarousel,
  FeaturedAreas,
  Testimonials,
  Follow,
} from "./sections";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />

      <main>
        <HeroCarousel />
        <About />
        <WorkWithCarousel />
        <FeaturedAreas />
        <Testimonials />
        <Follow />
      </main>

      <Footer />
    </div>
  );
}
