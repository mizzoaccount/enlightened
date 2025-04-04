// pages/branding-printing/[id].tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';
import { FaPalette, FaBoxOpen, FaPrint, FaChess, FaImage, FaTshirt, FaCheck, FaLightbulb, FaUsers, FaChartLine } from 'react-icons/fa';

interface BrandingService {
  id: number;
  title: string;
  description: string;
  image: string;
  icon: JSX.Element;
  color: string;
  details: {
    overview: string;
    features: string[];
    benefits: string[];
    process: { step: number; title: string; description: string }[];
    stats: { value: string; label: string }[];
    portfolio: { image: string; title: string }[];
  };
}

const BrandingPrintingDetails = () => {
  const router = useRouter();
  const [service, setService] = useState<BrandingService | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const id = parseInt(pathParts[pathParts.length - 1]);

    const services: BrandingService[] = [
      {
        id: 1,
        title: 'Corporate Identity Design',
        description: 'Crafting memorable brand identities that resonate with your target audience and stand the test of time',
        image: 'https://i.pinimg.com/736x/bd/56/8a/bd568ac7a81666af97470b6252cf7b6a.jpg',
        icon: <FaPalette className="text-2xl" />,
        color: 'bg-gradient-to-br from-blue-900 to-blue-700',
        details: {
          overview: 'Our corporate identity design service creates comprehensive visual systems that communicate your brand essence across all touchpoints. We develop logos, color palettes, typography, and brand guidelines that establish a cohesive and professional image.',
          features: [
            'Logo design and variations',
            'Brand style guide development',
            'Color psychology consultation',
            'Typography system creation',
            'Brand application mockups',
            'Stationery design suite'
          ],
          benefits: [
            'Stronger brand recognition',
            'Professional market presence',
            'Consistent visual identity',
            'Increased customer trust',
            'Competitive differentiation'
          ],
          process: [
            {
              step: 1,
              title: 'Discovery & Research',
              description: 'We analyze your business, market, and competitors to inform our design strategy'
            },
            {
              step: 2,
              title: 'Concept Development',
              description: 'Creating multiple design directions for your brand identity'
            },
            {
              step: 3,
              title: 'Refinement',
              description: 'Iterating on selected concepts based on your feedback'
            },
            {
              step: 4,
              title: 'Finalization',
              description: 'Delivering final files and comprehensive brand guidelines'
            }
          ],
          stats: [
            { value: "150+", label: "Brands Developed" },
            { value: "95%", label: "Client Retention" },
            { value: "4.9/5", label: "Satisfaction Rating" }
          ],
          portfolio: [
            {
              image: 'https://i.pinimg.com/736x/3e/4a/1e/3e4a1e7d3b5b5b5b5b5b5b5b5b5b5b5.jpg',
              title: 'Tech Startup Branding'
            },
            {
              image: 'https://i.pinimg.com/736x/4a/3e/1e/4a3e1e7d3b5b5b5b5b5b5b5b5b5b5b5.jpg',
              title: 'Restaurant Identity'
            },
            {
              image: 'https://i.pinimg.com/736x/1e/3e/4a/1e3e4a7d3b5b5b5b5b5b5b5b5b5b5b5.jpg',
              title: 'Healthcare Brand System'
            }
          ]
        }
      },
      // Add other services with similar detail structures...
    ];

    const foundService = services.find(s => s.id === id);
    if (foundService) {
      setService(foundService);
    }
    setLoading(false);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    },
    hover: {
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-blue-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#d20ac3] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-white to-blue-50 text-center p-4">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-blue-900 mb-4"
        >
          Service Not Found
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-xl text-blue-900/80 mb-6"
        >
          The branding service you're looking for doesn't exist.
        </motion.p>
        <motion.button 
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all"
        >
          Back to Services
        </motion.button>
      </div>
    );
  }

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden min-h-screen">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src={service.image}
              alt={service.title}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
            <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 ${service.color} bg-opacity-90`}>
              <motion.h2 
                className="text-3xl md:text-5xl font-bold text-white mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                {service.title}
              </motion.h2>
              <motion.p 
                className="text-lg md:text-xl text-white/90 max-w-3xl leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                {service.description}
              </motion.p>
            </div>
            <div className={`absolute top-8 left-8 ${service.color} w-16 h-16 rounded-full flex items-center justify-center text-white shadow-xl`}>
              {service.icon}
            </div>
          </div>
        </motion.div>

        {/* Overview Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={itemVariants}>
            <h3 className="text-3xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <FaLightbulb className="text-[#d20ac3]" />
              <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                Service Overview
              </span>
            </h3>
            <p className="text-blue-900/80 leading-relaxed text-lg">
              {service.details.overview}
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <FaCheck className="text-[#d20ac3]" />
              Key Features
            </h3>
            <ul className="space-y-4">
              {service.details.features.map((feature, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 text-blue-900/80"
                >
                  <span className={`mt-1 ${service.color} text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <FaCheck className="text-xs" />
                  </span>
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Process Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Our Creative Process
            </span>
          </motion.h3>

          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#d20ac3] to-[#efa110] hidden md:block"></div>
            
            <div className="space-y-12">
              {service.details.process.map((step, index) => (
                <motion.div 
                  key={step.step}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative md:pl-24"
                >
                  <div className={`absolute left-0 top-0 w-16 h-16 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-lg hidden md:flex ${service.color}`}>
                    {step.step}
                  </div>
                  <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                    <h4 className="text-xl font-bold text-blue-900 mb-3">{step.title}</h4>
                    <p className="text-blue-900/80">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Portfolio Section */}
        {service.details.portfolio && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="mb-20"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-center text-blue-900 mb-12"
            >
              <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                Our Work
              </span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {service.details.portfolio.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="text-lg font-bold">{item.title}</h4>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-blue-900 to-purple-800 rounded-2xl p-8 md:p-12 text-white overflow-hidden relative">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-white/10 rounded-full filter blur-3xl"></div>
            
            <motion.h3 
              variants={itemVariants}
              className="text-3xl font-bold text-center mb-12 relative z-10"
            >
              By The Numbers
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {service.details.stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm border border-white/20"
                >
                  <p className="text-5xl font-bold mb-2">{stat.value}</p>
                  <p className="text-xl">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Ready to Elevate Your Brand?</h3>
          <p className="text-xl text-blue-900/80 mb-8 max-w-2xl mx-auto">
            Let's create a powerful brand identity that sets you apart from the competition.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              Start Your Project
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              View Full Portfolio
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingPrintingDetails;