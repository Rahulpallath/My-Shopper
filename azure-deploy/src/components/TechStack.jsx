import { motion } from 'framer-motion'
import { 
  SiReact, 
  SiTypescript, 
  SiTailwindcss, 
  SiFramer,
  SiExpress,
  SiPostgresql,
  SiNodedotjs
} from 'react-icons/si'

const technologies = [
  { name: 'React', icon: SiReact, color: '#61DAFB' },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4' },
  { name: 'Framer Motion', icon: SiFramer, color: '#0055FF' },
  { name: 'Express.js', icon: SiExpress, color: '#000000' },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1' },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933' }
]

const TechStack = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="flex space-x-16 animate-[scroll_25s_linear_infinite]">
        {technologies.map((tech, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="flex flex-col items-center min-w-[120px]"
          >
            <tech.icon size={48} color={tech.color} className="mb-2" />
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
        
        {/* Duplicate items for seamless scrolling */}
        {technologies.map((tech, index) => (
          <motion.div
            key={`dup-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.7 }}
            className="flex flex-col items-center min-w-[120px]"
          >
            <tech.icon size={48} color={tech.color} className="mb-2" />
            <span className="text-sm font-medium">{tech.name}</span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default TechStack