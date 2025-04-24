import { motion } from "framer-motion";
import { Download, CheckCircle2, Code, Server, Layout, FileCode } from "lucide-react";

export default function AboutMe() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };
  
  const skills = [
    { icon: <Code className="text-primary" size={22} />, name: "Frontend", techs: ["JavaScript (ES6+)", "TypeScript", "ReactJS", "Angular"] },
    { icon: <Layout className="text-primary" size={22} />, name: "UI/UX", techs: ["Responsive Design", "CSS3/SASS", "Tailwind CSS", "Framer Motion"] },
    { icon: <Server className="text-primary" size={22} />, name: "Backend", techs: ["Node.js", "Spring Boot", "REST APIs", "GraphQL"] }
  ];

  const experience = [
    { years: "5+", label: "Years Experience" },
    { years: "20+", label: "Projects Completed" },
    { years: "12", label: "Certifications" }
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <div className="relative">
              <div className="aspect-[4/5] relative z-10 overflow-hidden bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Technical Skills</h3>
                
                <div className="space-y-8">
                  {skills.map((skill, index) => (
                    <motion.div 
                      key={index}
                      className="p-5 border border-gray-200 dark:border-gray-700 rounded-lg hover:border-primary dark:hover:border-primary transition-colors"
                      whileHover={{ y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center mb-3">
                        {skill.icon}
                        <h4 className="font-semibold ml-2">{skill.name}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.techs.map((tech, i) => (
                          <span key={i} className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-8">
                  <motion.a 
                    href="/attached_assets/Pallath_Rahul.pdf" 
                    download="Pallath_Rahul.pdf"
                    className="bg-primary text-white py-3 px-6 rounded-lg block w-full text-center font-medium transition-all duration-300 hover:bg-primary/90 flex items-center justify-center"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="mr-2" size={18} />
                    Download Resume
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">About Me</h2>
            <div className="w-24 h-1 bg-primary mb-8"></div>
            <p className="text-neutral-dark dark:text-foreground opacity-80 mb-6 leading-relaxed">
              I'm Rahul Krishna, a passionate Software Engineer with 5+ years of experience in building scalable, user-centric web applications and AI-driven solutions. This project showcases my expertise in modern React development, demonstrating advanced concepts and best practices in frontend architecture.
            </p>
            <p className="text-neutral-dark dark:text-foreground opacity-80 mb-6 leading-relaxed">
              This shopping platform was built with React, Tailwind CSS, and Framer Motion to demonstrate responsive design principles and modern UI patterns. The backend utilizes Express with PostgreSQL integration via Drizzle ORM to provide a complete fullstack implementation.
            </p>
            <p className="text-neutral-dark dark:text-foreground opacity-80 mb-6 leading-relaxed">
              Throughout my career, I've focused on creating accessible, performant applications with thoughtful UX and clean, maintainable code. I enjoy solving complex problems and staying up-to-date with the latest web technologies and best practices.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-8">
              {["ReactJS", "TypeScript", "Tailwind CSS", "Express", "PostgreSQL", "Drizzle ORM", "Framer Motion", "Responsive Design"].map((tech, index) => (
                <motion.span 
                  key={index}
                  className="inline-flex items-center px-3 py-1 bg-gray-200 dark:bg-gray-700 rounded-full text-sm"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <CheckCircle2 className="mr-1 text-primary" size={14} />
                  {tech}
                </motion.span>
              ))}
            </div>
            
            <motion.div 
              className="flex flex-wrap justify-start gap-8 mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {experience.map((item, index) => (
                <div key={index} className="text-center">
                  <motion.div 
                    className="font-display text-4xl mb-1 text-primary"
                    initial={{ scale: 0.8 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                  >
                    {item.years}
                  </motion.div>
                  <div className="text-sm uppercase tracking-wider opacity-70">{item.label}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
