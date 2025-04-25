import HeroSection from "./sections/HeroSection";
import FeaturedCollections from "./sections/FeaturedCollections";
import TechMarquee from "./sections/RunwaySection";
import ProductsGrid from "./sections/ProductsGrid";
import ParallaxSection from "./sections/ParallaxSection";
import AboutMe from "./sections/BrandStory";
import TechCarousel from "./sections/Lookbook";
import Newsletter from "./sections/Newsletter";
import ContactSection from "./sections/ContactSection";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <FeaturedCollections />
      <TechMarquee />
      <ProductsGrid />
      <ParallaxSection />
      <AboutMe />
      <TechCarousel />
      <Newsletter />
      <ContactSection />
    </main>
  );
}
