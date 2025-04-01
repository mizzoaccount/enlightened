"use client";
import { motion } from "framer-motion";
import { FaLaptopCode, FaVideo, FaPalette, FaBullhorn, FaServer } from "react-icons/fa";
import Header from "@/components/HeadNavigation";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

export default function Projects() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

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
    },
    hover: {
      y: -5,
      transition: {
        type: "spring",
        stiffness: 400
      }
    }
  };

  const services = [
    {
      icon: <FaLaptopCode className="text-[#d20ac3] text-4xl" />,
      title: "Web Design",
      proficiency: 90,
      description: "Crafting immersive digital experiences that convert visitors into loyal customers",
      details: [
        "200+ websites launched with 98% client satisfaction",
        "Mobile-first responsive designs that perform flawlessly",
        "SEO-optimized architecture built for visibility",
        "Ongoing maintenance and performance monitoring"
      ]
    },
    {
      icon: <FaVideo className="text-[#d20ac3] text-4xl" />,
      title: "Media Production",
      proficiency: 90,
      description: "Professional video and audio production that tells your brand story",
      details: [
        "4K/8K video production with cinematic quality",
        "Animation and motion graphics for enhanced engagement",
        "Live streaming solutions for virtual events",
        "Audio production with studio-grade equipment"
      ]
    },
    {
      icon: <FaPalette className="text-[#d20ac3] text-4xl" />,
      title: "Branding & Printing",
      proficiency: 85,
      description: "Complete visual identity systems that make lasting impressions",
      details: [
        "Logo design and brand style guides",
        "Print collateral with premium finishes",
        "Packaging design that stands out on shelves",
        "Environmental branding for physical spaces"
      ]
    },
    {
      icon: <FaBullhorn className="text-[#d20ac3] text-4xl" />,
      title: "Communication & Marketing",
      proficiency: 80,
      description: "Strategic campaigns that reach the right audience at the right time",
      details: [
        "Social media strategy and management",
        "Email marketing automation systems",
        "Content marketing with measurable ROI",
        "Influencer partnership programs"
      ]
    },
    {
      icon: <FaServer className="text-[#d20ac3] text-4xl" />,
      title: "IT Solutions",
      proficiency: 80,
      description: "Reliable technology infrastructure that powers your business",
      details: [
        "Custom software development",
        "Cloud migration and management",
        "Cybersecurity assessments and solutions",
        "24/7 technical support and monitoring"
      ]
    }
  ];

  return (
    <div className="mt-12">
      <Header />
      <section className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-4 min-h-screen" id="projects">
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
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h2 
              className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Our Core Services
              <motion.span 
                className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.h2>
            <motion.p 
              className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              Comprehensive digital solutions tailored to your business needs
            </motion.p>
          </motion.div>

          {/* Services Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 flex flex-col"
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)" }}
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 bg-gradient-to-br from-[#d20ac3]/10 to-[#efa110]/10 rounded-full">
                    {service.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-center text-blue-900 mb-2">{service.title}</h3>
                
                {/* Proficiency Meter */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm text-gray-500 mb-1">
                    <span>Proficiency</span>
                    <span>{service.proficiency}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5">
                    <motion.div 
                      className="h-2.5 rounded-full bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
                      initial={{ width: 0 }}
                      animate={{ width: `${service.proficiency}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                    />
                  </div>
                </div>
                
                <p className="text-gray-600 text-center mb-6">{service.description}</p>
                
                <div className="mt-auto space-y-3">
                  {service.details.map((detail, i) => (
                    <div key={i} className="flex items-start">
                      <svg className="w-5 h-5 text-[#d20ac3] mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{detail}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Client Testimonials */}
          <motion.div 
            className="mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h3 className="text-2xl font-bold text-blue-900 mb-8 text-center">Trusted By Industry Leaders</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  quote: "Enlightened Future Hub transformed our online presence with a website that increased conversions by 140%.",
                  author: "Sarah Johnson",
                  position: "CEO, TechNova Solutions"
                },
                {
                  quote: "Their media production team created a campaign video that went viral with over 2M views.",
                  author: "Michael Chen",
                  position: "Marketing Director, UrbanEats"
                },
                {
                  quote: "The IT infrastructure they implemented saved us $50k annually in operational costs.",
                  author: "David Rodriguez",
                  position: "CTO, FinSecure"
                }
              ].map((testimonial, index) => (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-xl shadow-md border border-gray-100"
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#d20ac3]/10 to-[#efa110]/10 rounded-full flex items-center justify-center text-[#d20ac3] font-bold text-xl">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900">{testimonial.author}</h4>
                      <p className="text-gray-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}