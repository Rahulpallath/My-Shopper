import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <section className="relative py-20 overflow-hidden bg-gray-50">
      <div className="container relative z-10">
        <div className="grid items-center grid-cols-1 gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Frontend React Developer
            </h1>
            <p className="mb-6 text-lg text-gray-600">
              Welcome to my React development showcase. This website demonstrates 
              my skills with React, animations, and modern web technologies.
            </p>
            <div className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn btn-primary"
              >
                View Portfolio
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn bg-white border border-gray-300 hover:bg-gray-100"
              >
                Contact Me
              </motion.button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-video overflow-hidden rounded-lg shadow-lg bg-gradient-to-r from-blue-500 to-indigo-600 flex items-center justify-center text-white p-8">
              <div className="text-center">
                <h2 className="text-2xl font-bold mb-2">Rahul Krishna</h2>
                <p className="text-white/80">Web Developer & UI Designer</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/10 to-transparent" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/3 bg-gradient-to-t from-primary/10 to-transparent" />
    </section>
  )
}

export default HeroSection