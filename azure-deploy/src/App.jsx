import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './pages/sections/HeroSection'
import TechMarquee from './pages/sections/RunwaySection'
import ProductsGrid from './pages/sections/ProductsGrid'
import FeaturedCollections from './pages/sections/FeaturedCollections'
import ParallaxSection from './pages/sections/ParallaxSection'
import LoadingScreen from './components/LoadingScreen'

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingScreen />
      ) : (
        <div className="flex flex-col min-h-screen">
          <Header />
          
          <main className="flex-grow">
            <HeroSection />
            <TechMarquee />
            <ProductsGrid />
            <ParallaxSection />
            <FeaturedCollections />
          </main>
          
          <Footer />
        </div>
      )}
    </>
  )
}

export default App