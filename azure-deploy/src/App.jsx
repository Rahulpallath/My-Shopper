import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'
import TechStack from './components/TechStack'
import ProductsSection from './components/ProductsSection'
import CollectionsSection from './components/CollectionsSection'
import { motion } from 'framer-motion'

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        <HeroSection />
        
        <motion.section 
          className="py-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          <div className="container text-center">
            <h2 className="mb-8 text-3xl font-bold">Technology Showcase</h2>
            <TechStack />
          </div>
        </motion.section>
        
        <ProductsSection />
        
        <CollectionsSection />
      </main>
      
      <Footer />
    </div>
  )
}

export default App