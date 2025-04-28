import { motion } from 'framer-motion'

// Sample product data
const products = [
  {
    id: 1,
    name: 'React Component Library',
    category: 'Frontend',
    price: '$199',
    image: 'bg-gradient-to-br from-blue-500 to-purple-600'
  },
  {
    id: 2,
    name: 'Responsive Dashboard',
    category: 'UI/UX',
    price: '$149',
    image: 'bg-gradient-to-br from-green-500 to-teal-600'
  },
  {
    id: 3,
    name: 'API Integration Package',
    category: 'Backend',
    price: '$299',
    image: 'bg-gradient-to-br from-yellow-500 to-orange-600'
  },
  {
    id: 4,
    name: 'E-commerce Template',
    category: 'Full Stack',
    price: '$249',
    image: 'bg-gradient-to-br from-red-500 to-pink-600'
  }
]

const ProductsSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold"
          >
            Featured Projects
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Explore my latest web development projects and React implementations
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="overflow-hidden bg-white border rounded-lg shadow-sm"
            >
              <div className={`aspect-square ${product.image} flex items-center justify-center text-white`}>
                <span className="text-xl font-bold">{product.name.charAt(0)}</span>
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold">{product.name}</h3>
                <p className="mb-2 text-sm text-gray-500">{product.category}</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-primary">{product.price}</span>
                  <button className="text-sm font-medium text-primary hover:underline">
                    View Details
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary"
          >
            View All Projects
          </motion.button>
        </div>
      </div>
    </section>
  )
}

export default ProductsSection