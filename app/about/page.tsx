"use client";
import { useEffect, useState } from "react";
import Header from "@/components/HeadNavigation";
import { motion } from "framer-motion";
import { FaHandshake, FaLightbulb, FaMedal, FaEye } from "react-icons/fa";
import Footer from "@/components/Footer";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Ensures the page renders only on the client
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  return (
    <div className="mt-12">
      <Header />
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-4 min-h-screen" id="about">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            About Enlightened Future Hub
            <motion.span 
              className="absolute left-0 bottom-[-6px] w-full h-1 bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            />
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Transforming ideas into powerful digital realities
          </motion.p>
        </motion.div>

        {/* About Content */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Text Content */}
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Enlightened Future Hub is a visionary digital agency committed to transforming ideas into powerful digital realities. We specialize in web design, media production, and IT solutions, offering innovative services that empower businesses and individuals to thrive in the digital age.
            </motion.p>
            
            <motion.p 
              className="text-lg text-gray-600 leading-relaxed"
              variants={itemVariants}
            >
              Our mission is to bridge creativity with technology, ensuring that every project we take on is not only visually stunning but also highly functional and effective. We believe in the power of digital transformation to elevate businesses and create meaningful experiences.
            </motion.p>

            <motion.div variants={itemVariants}>
              <button className="bg-gradient-to-r from-[#d20ac3] to-[#efa110] hover:from-[#efa110] hover:to-[#d20ac3] text-white px-8 py-3 rounded-xl text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300">
                Get in Touch
              </button>
            </motion.div>
          </motion.div>

          {/* Core Values */}
          <motion.div 
            className="space-y-6"
            variants={itemVariants}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Our Core Values</h3>
            
            {[
              {
                icon: <FaHandshake className="text-[#d20ac3]" />,
                title: "Integrity",
                description: "We uphold the highest ethical standards in all our actions and decisions."
              },
              {
                icon: <FaEye className="text-[#d20ac3]" />,
                title: "Transparency",
                description: "Clear, open communication with no hidden agendas or surprises."
              },
              {
                icon: <FaMedal className="text-[#d20ac3]" />,
                title: "Excellence",
                description: "Relentless pursuit of quality in every project we undertake."
              },
              {
                icon: <FaLightbulb className="text-[#d20ac3]" />,
                title: "Innovation",
                description: "Forward-thinking solutions that push boundaries and create value."
              }
            ].map((value, index) => (
              <motion.div 
                key={index}
                className="flex items-start gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300"
                whileHover={{ y: -5 }}
                variants={itemVariants}
              >
                <div className="p-3 bg-gradient-to-br from-[#d20ac3]/10 to-[#efa110]/10 rounded-lg">
                  {value.icon}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-gray-900">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
    <Footer />
    </div>
  );
}






