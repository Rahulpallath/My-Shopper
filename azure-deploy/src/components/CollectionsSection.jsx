import { motion } from 'framer-motion'

// Sample collections data
const collections = [
  {
    id: 1,
    name: 'Frontend Development',
    description: 'UI frameworks, component libraries, and responsive design projects',
    image: 'bg-gradient-to-r from-blue-600 to-indigo-700'
  },
  {
    id: 2,
    name: 'Backend Solutions',
    description: 'API development, database integration, and server-side applications',
    image: 'bg-gradient-to-r from-green-600 to-teal-700'
  },
  {
    id: 3,
    name: 'React Animations',
    description: 'Interactive UI components with advanced animation techniques',
    image: 'bg-gradient-to-r from-purple-600 to-pink-700'
  }
]

const CollectionsSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="mb-12 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4 text-3xl font-bold"
          >
            Project Collections
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-gray-600"
          >
            Explore my development expertise organized by specialization area
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {collections.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="overflow-hidden bg-white rounded-lg shadow-md"
            >
              <div className={`h-40 ${collection.image} flex items-center justify-center text-white p-6`}>
                <h3 className="text-xl font-bold text-center">{collection.name}</h3>
              </div>
              <div className="p-6">
                <p className="mb-4 text-gray-600">{collection.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full py-2 text-center text-white rounded-md bg-primary hover:bg-primary/90"
                >
                  View Collection
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default CollectionsSection