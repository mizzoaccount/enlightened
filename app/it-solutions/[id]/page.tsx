// pages/it-solutions/[id].tsx
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';
import { FaCloud, FaShieldAlt, FaRobot, FaLaptopCode, FaChartLine, FaNetworkWired, FaCheck, FaLightbulb, FaUsers, FaCogs } from 'react-icons/fa';

interface ITService {
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
    technologies: string[];
    stats: { value: string; label: string }[];
    caseStudies: { image: string; title: string; result: string }[];
  };
}

const ITSolutionDetails = () => {
  const router = useRouter();
  const [service, setService] = useState<ITService | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const id = parseInt(pathParts[pathParts.length - 1]);

    const services: ITService[] = [
      {
        id: 1,
        title: 'Cloud Solutions',
        description: 'Scalable cloud infrastructure and migration services tailored to your business needs',
        image: 'https://i.pinimg.com/736x/51/d5/48/51d548911242e61017adcdfbed429f59.jpg',
        icon: <FaCloud className="text-2xl" />,
        color: 'from-blue-900 to-blue-700',
        details: {
          overview: 'Our comprehensive cloud solutions provide secure, scalable, and cost-effective infrastructure tailored to your business requirements. We specialize in cloud migration, architecture design, and ongoing optimization to ensure peak performance.',
          features: [
            'Cloud architecture design',
            'Migration planning & execution',
            'Cost optimization strategies',
            'Disaster recovery solutions',
            '24/7 monitoring & support',
            'Multi-cloud deployments'
          ],
          benefits: [
            'Reduced infrastructure costs',
            'Improved scalability',
            'Enhanced security',
            'Increased operational efficiency',
            'Business continuity assurance'
          ],
          technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes', 'Terraform'],
          stats: [
            { value: "99.9%", label: "Uptime Guarantee" },
            { value: "50+", label: "Cloud Migrations" },
            { value: "40%", label: "Cost Savings Avg." }
          ],
          caseStudies: [
            {
              image: 'https://i.pinimg.com/736x/51/d5/48/51d548911242e61017adcdfbed429f59.jpg',
              title: 'Enterprise Cloud Migration',
              result: 'Reduced infrastructure costs by 45% while improving scalability'
            },
            {
              image: 'https://i.pinimg.com/736x/cd/6f/a9/cd6fa98b64ed44a096fb555fbc065b28.jpg',
              title: 'Hybrid Cloud Solution',
              result: 'Achieved 99.99% uptime with seamless on-premises integration'
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
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-900 to-[#d20ac3] text-white"
        >
          <FaCogs className="text-2xl" />
        </motion.div>
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
          The IT solution you're looking for doesn't exist.
        </motion.p>
        <motion.button 
          onClick={() => router.push('/')}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all"
        >
          Back to Solutions
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
            <div className={`absolute bottom-0 left-0 right-0 p-8 md:p-12 bg-gradient-to-t ${service.color} to-transparent`}>
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
                Solution Overview
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
                  <span className={`mt-1 bg-gradient-to-br ${service.color} text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}>
                    <FaCheck className="text-xs" />
                  </span>
                  <span className="text-lg">{feature}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Benefits & Technologies */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20"
        >
          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <FaChartLine className="text-[#d20ac3]" />
              Business Benefits
            </h3>
            <ul className="space-y-4">
              {service.details.benefits.map((benefit, index) => (
                <motion.li 
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-4 text-blue-900/80"
                >
                  <span className={`mt-1 bg-gradient-to-br ${service.color} text-white w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0`}>
                    {index + 1}
                  </span>
                  <span className="text-lg">{benefit}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <FaLaptopCode className="text-[#d20ac3]" />
              Technologies We Use
            </h3>
            <div className="flex flex-wrap gap-3">
              {service.details.technologies.map((tech, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className={`px-4 py-2 rounded-full ${index % 2 === 0 ? 'bg-blue-100 text-blue-900' : 'bg-[#d20ac3]/10 text-[#d20ac3]'}`}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Case Studies */}
        {service.details.caseStudies && (
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
                Success Stories
              </span>
            </motion.h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {service.details.caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group relative overflow-hidden rounded-2xl shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={caseStudy.image}
                      alt={caseStudy.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h4 className="text-xl font-bold mb-2">{caseStudy.title}</h4>
                      <p className="text-white/90">{caseStudy.result}</p>
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
              Proven Results
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
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Ready to Transform Your IT Infrastructure?</h3>
          <p className="text-xl text-blue-900/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how our {service.title.toLowerCase()} can solve your business challenges.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              Get a Free Consultation
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 border-2 border-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all"
            >
              Download Solution Brief
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ITSolutionDetails;