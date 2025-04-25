import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { Product } from "@/lib/types";

export default function ProductsGrid() {
  const [activeFilter, setActiveFilter] = useState("all");
  const [visibleProducts, setVisibleProducts] = useState<Product[]>([]);
  
  // Mock data for products since API isn't working
  const mockProducts: Product[] = [
    {
      id: 1,
      name: "Minimalist T-Shirt",
      description: "A comfortable cotton t-shirt with a minimal design",
      price: 29.99,
      category: "tops",
      imageUrl: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["white", "black", "gray"],
      isNew: true,
      isSale: false,
      isLimited: false
    },
    {
      id: 2,
      name: "Structured Pants",
      description: "Tailored pants with a modern silhouette",
      price: 79.99,
      category: "bottoms",
      imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["black", "navy", "beige"],
      isNew: false,
      isSale: true,
      salePrice: 59.99,
      isLimited: false
    },
    {
      id: 3,
      name: "Geometric Earrings",
      description: "Modern geometric design earrings",
      price: 39.99,
      category: "accessories",
      imageUrl: "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["gold", "silver"],
      isNew: false,
      isSale: false,
      isLimited: true
    },
    {
      id: 4,
      name: "Oversized Shirt",
      description: "Statement oversized button-up shirt",
      price: 69.99,
      category: "tops",
      imageUrl: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["white", "blue", "black"],
      isNew: true,
      isSale: false,
      isLimited: false
    },
    {
      id: 5,
      name: "Woven Handbag",
      description: "Handcrafted woven handbag with leather details",
      price: 129.99,
      category: "accessories",
      imageUrl: "https://images.unsplash.com/photo-1591561954557-26941169b49e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["brown", "beige"],
      isNew: false,
      isSale: true,
      salePrice: 99.99,
      isLimited: false
    },
    {
      id: 6,
      name: "Wide-Leg Jeans",
      description: "Comfortable wide-leg jeans with a vintage feel",
      price: 89.99,
      category: "bottoms",
      imageUrl: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["blue", "black"],
      isNew: false,
      isSale: false,
      isLimited: false
    },
    {
      id: 7,
      name: "Cashmere Sweater",
      description: "Soft cashmere pullover in a relaxed fit",
      price: 149.99,
      category: "tops",
      imageUrl: "https://images.unsplash.com/photo-1516762689617-e1cffcef479d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["gray", "navy", "beige"],
      isNew: false,
      isSale: false,
      isLimited: false
    },
    {
      id: 8,
      name: "Leather Belt",
      description: "Premium leather belt with minimalist buckle",
      price: 49.99,
      category: "accessories",
      imageUrl: "https://images.unsplash.com/photo-1603252109303-2751441dd157?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
      colors: ["brown", "black"],
      isNew: false,
      isSale: false,
      isLimited: false
    }
  ];
  
  const { data: products, isLoading } = useQuery<Product[]>({
    queryKey: ["/api/products"],
    queryFn: async () => {
      // Simulate API response with mock data
      return new Promise(resolve => {
        setTimeout(() => resolve(mockProducts), 500);
      });
    }
  });
  
  useEffect(() => {
    if (products) {
      if (activeFilter === "all") {
        setVisibleProducts(products);
      } else {
        setVisibleProducts(
          products.filter(product => product.category === activeFilter)
        );
      }
    }
  }, [products, activeFilter]);
  
  const filterButtons = [
    { label: "ALL", value: "all" },
    { label: "TOPS", value: "tops" },
    { label: "BOTTOMS", value: "bottoms" },
    { label: "ACCESSORIES", value: "accessories" }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="products" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-4">Featured Products</h2>
            <p className="text-neutral-dark dark:text-foreground opacity-75 max-w-lg">
              Discover our most coveted pieces crafted with premium materials and avant-garde designs.
            </p>
          </motion.div>
          
          <motion.div 
            className="product-filters flex flex-wrap gap-4 mt-6 md:mt-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {filterButtons.map((button) => (
              <motion.button 
                key={button.value}
                className={`product-filter-btn py-2 px-4 font-medium transition-all ${
                  activeFilter === button.value 
                    ? "bg-black dark:bg-white text-white dark:text-black" 
                    : "bg-[#F5F5F5] dark:bg-neutral-dark text-black dark:text-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
                }`}
                onClick={() => setActiveFilter(button.value)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {button.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
        
        {isLoading ? (
          <div className="flex justify-center py-20">
            <div className="loader border-primary"></div>
          </div>
        ) : (
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {visibleProducts.map((product) => (
              <motion.div 
                key={product.id}
                className="product-card group"
                variants={itemVariants}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-[350px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="product-overlay absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                    <motion.button 
                      className="bg-white text-black py-2 px-6 font-accent tracking-wider hover:bg-primary hover:text-white transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      QUICK VIEW
                    </motion.button>
                  </div>
                  
                  {product.isNew && (
                    <div className="absolute top-4 right-4 bg-primary text-white py-1 px-3 text-xs font-bold">
                      NEW
                    </div>
                  )}
                  
                  {product.isSale && (
                    <div className="absolute top-4 right-4 bg-secondary text-white py-1 px-3 text-xs font-bold">
                      SALE
                    </div>
                  )}
                  
                  {product.isLimited && (
                    <div className="absolute top-4 right-4 bg-[#FFD700] text-white py-1 px-3 text-xs font-bold">
                      LIMITED
                    </div>
                  )}
                </div>
                <div className="pt-4">
                  <h3 className="font-display text-lg">{product.name}</h3>
                  <div className="flex items-center justify-between mt-2">
                    <div>
                      <span className="font-medium">${product.price.toFixed(2)}</span>
                      {product.salePrice && (
                        <span className="line-through text-gray-500 ml-2">${product.salePrice.toFixed(2)}</span>
                      )}
                    </div>
                    <div className="flex space-x-1">
                      {product.colors.map((color, idx) => (
                        <div 
                          key={idx}
                          className="h-4 w-4 rounded-full border border-gray-300 cursor-pointer"
                          style={{ backgroundColor: color === 'white' ? '#FFFFFF' : 
                                  color === 'black' ? '#000000' :
                                  color === 'red' ? '#DC2626' :
                                  color === 'navy' ? '#1E3A8A' :
                                  color === 'blue' ? '#2563EB' :
                                  color === 'beige' ? '#E5E5D0' :
                                  color === 'brown' ? '#92400E' :
                                  color === 'silver' ? '#C0C0C0' :
                                  color === 'gold' ? '#FFD700' :
                                  color === 'gray' ? '#6B7280' : 
                                  color }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.a 
            href="#" 
            className="inline-block bg-black dark:bg-white text-white dark:text-black py-3 px-8 font-accent tracking-wider hover:bg-primary hover:text-white transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            VIEW ALL PRODUCTS
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
