import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Instagram, Linkedin } from "lucide-react";

export default function ContactSection() {
  
  const contactInfo = [
    {
      icon: <MapPin className="text-primary mr-4 mt-1" size={20} />,
      title: "Visit Us",
      content: "Texas Tech University, Lubbock, TX 79415"
    },
    {
      icon: <Mail className="text-primary mr-4 mt-1" size={20} />,
      title: "Email Us",
      content: "rpallath@ttu.edu"
    },
    {
      icon: <Phone className="text-primary mr-4 mt-1" size={20} />,
      title: "Call Us",
      content: "+1 (806) 283-0944"
    }
  ];
  
  const socialLinks = [
    { icon: <Instagram size={22} />, href: "https://www.linkedin.com/in/rahul-krishna-pallath-895602169/" },
    { icon: <Linkedin size={22} />, href: "https://www.linkedin.com/in/rahul-krishna-pallath-895602169/" }
  ];
  
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section id="contact" className="py-20 bg-white dark:bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl md:text-5xl mb-6">Get In Touch</h2>
            <div className="w-24 h-1 bg-primary mb-8 mx-auto"></div>
            <motion.p 
              className="text-neutral-dark dark:text-foreground opacity-80 mb-10 leading-relaxed max-w-3xl mx-auto"
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              Looking for a software engineer who can transform caffeine into code with remarkable efficiency? 
              You've found your match! With my 5+ years of crafting scalable, user-centric applications, I'm like a 
              Swiss Army knife for your tech stack—except I won't break when you need me most. My React components 
              are so clean they practically review themselves, and my TypeScript is so strictly typed it makes 
              TypeScript itself blush. I'm fluent in frontend, backend, and can translate "impossible deadline" 
              into "challenge accepted" faster than you can say "production bug."
            </motion.p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {contactInfo.map((item, index) => (
            <motion.div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-sm"
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-primary/10 p-3 rounded-full mb-4">
                {item.icon}
              </div>
              <div>
                <h3 className="font-medium mb-2">{item.title}</h3>
                <p className="opacity-75">{item.content}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="flex justify-center space-x-6 mt-12"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          {socialLinks.map((link, index) => (
            <motion.a 
              key={index}
              href={link.href}
              className="text-neutral-dark dark:text-foreground hover:text-primary transition-colors bg-gray-100 dark:bg-gray-800 p-4 rounded-full"
              whileHover={{ scale: 1.2, backgroundColor: "#f3f4f6" }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              {link.icon}
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
