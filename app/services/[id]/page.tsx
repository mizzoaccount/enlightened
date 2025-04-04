// pages/services/[id].tsx
'use client';

import Footer from '@/components/Footer';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { JSX, useEffect, useState } from 'react';
import { FaRegCalendarAlt, FaGlassCheers, FaRocket, FaDesktop, FaMusic, FaMapMarkerAlt, FaCheck, FaUsers, FaLightbulb, FaChartLine } from 'react-icons/fa';

interface Service {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  icon: JSX.Element;
  details: {
    overview: string;
    features: string[];
    benefits: string[];
    stats: { value: string; label: string }[];
  };
}

const ServiceDetails = () => {
  const router = useRouter();
  const [service, setService] = useState<Service | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const pathParts = window.location.pathname.split('/');
    const id = parseInt(pathParts[pathParts.length - 1]);

    const services: Service[] = [
      {
        id: 1,
        title: "Corporate Events Planning",
        description: "End-to-end management of conferences, seminars, and corporate gatherings with precision and professionalism.",
        imgSrc: "/assets/images/events/cooperate.jpeg",
        icon: <FaRegCalendarAlt className="text-3xl" />,
        details: {
          overview: "Our corporate event planning service delivers flawless execution for business gatherings of all sizes. We combine strategic planning with creative vision to produce events that align with your corporate objectives and brand identity.",
          features: [
            "Full event conceptualization and design",
            "Venue selection and logistics management",
            "Speaker and entertainment coordination",
            "Branding and thematic implementation",
            "On-site event management and staffing",
            "Post-event analysis and reporting"
          ],
          benefits: [
            "Enhanced brand perception",
            "Increased attendee engagement",
            "Seamless execution",
            "Measurable ROI",
            "Stress-free experience for organizers"
          ],
          stats: [
            { value: "98%", label: "Client Satisfaction" },
            { value: "500+", label: "Events Managed" },
            { value: "24/7", label: "Support" }
          ]
        }
      },
      {
        id: 2,
        title: "Wedding Coordination",
        description: "Full-service wedding planning with exquisite attention to every romantic detail.",
        imgSrc: "/assets/images/events/wedding.jpeg",
        icon: <FaGlassCheers className="text-3xl" />,
        details: {
          overview: "Our wedding coordination service transforms your dream wedding into reality. We handle every detail with care, from venue selection to floral arrangements, ensuring your special day is perfect.",
          features: [
            "Complete wedding planning and design",
            "Vendor selection and management",
            "Budget planning and management",
            "Timeline creation and execution",
            "Day-of coordination",
            "Guest management"
          ],
          benefits: [
            "Stress-free planning experience",
            "Professional vendor connections",
            "Customized wedding design",
            "Seamless day-of execution",
            "Memorable experience for you and your guests"
          ],
          stats: [
            { value: "100%", label: "Happy Couples" },
            { value: "300+", label: "Weddings Planned" },
            { value: "50+", label: "Venues Worked With" }
          ]
        }
      }
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
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#d20ac3]"></div>
      </div>
    );
  }

  if (!service) {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-center p-4">
        <h1 className="text-4xl font-bold text-blue-900 mb-4">Service Not Found</h1>
        <p className="text-xl text-blue-900/80 mb-6">The service you're looking for doesn't exist.</p>
        <button 
          onClick={() => router.push('/')}
          className="bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white px-6 py-3 rounded-full font-bold hover:shadow-xl transition-all"
        >
          Back to Home
        </button>
      </div>
    );
  }

  return (
  <div>
    <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-4 relative inline-block"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              {service.title}
            </span>
            <motion.span 
              className="absolute left-0 bottom-[-6px] w-full h-1 bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-blue-900/90 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            {service.description}
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12"
        >
          <motion.div variants={itemVariants} className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src={service.imgSrc}
              alt={service.title}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-8">
            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <FaLightbulb className="text-[#d20ac3]" />
                Service Overview
              </h3>
              <p className="text-blue-900/80 leading-relaxed">{service.details.overview}</p>
            </motion.div>

            <motion.div 
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <FaCheck className="text-[#d20ac3]" />
                Key Features
              </h3>
              <ul className="space-y-3">
                {service.details.features.map((feature, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 text-blue-900/80"
                  >
                    <span className="text-[#d20ac3] mt-1">
                      <FaCheck className="text-sm" />
                    </span>
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center text-blue-900 mb-12"
          >
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Why Choose Our Service
            </span>
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.details.benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <div className="w-14 h-14 bg-gradient-to-r from-[#d20ac3] to-[#efa110] rounded-full flex items-center justify-center text-white mb-4">
                  {index === 0 ? <FaUsers className="text-xl" /> : 
                   index === 1 ? <FaChartLine className="text-xl" /> : 
                   <FaLightbulb className="text-xl" />}
                </div>
                <h4 className="text-xl font-bold text-blue-900 mb-3">{benefit}</h4>
                <p className="text-blue-900/80">We deliver measurable results that align with your business objectives and exceed expectations.</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-20 bg-gradient-to-r from-blue-900 to-purple-800 rounded-2xl p-8 md:p-12 text-white"
        >
          <motion.h3 
            variants={itemVariants}
            className="text-3xl font-bold text-center mb-12"
          >
            Our Results Speak for Themselves
          </motion.h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.details.stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 bg-white/10 rounded-xl backdrop-blur-sm"
              >
                <p className="text-5xl font-bold mb-2">{stat.value}</p>
                <p className="text-xl">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-3xl font-bold text-blue-900 mb-6">Ready to Elevate Your Event?</h3>
          <p className="text-xl text-blue-900/80 mb-8 max-w-2xl mx-auto">
            Let's create something extraordinary together. Contact us today to discuss your event needs.
          </p>
          <button 
            onClick={() => router.push('/contact')}
            className="bg-gradient-to-r from-[#d20ac3] to-[#efa110] text-white px-8 py-4 rounded-full font-bold text-lg hover:shadow-xl transition-all hover:scale-105"
          >
            Get in Touch
          </button>
        </motion.div>
      </div>
    </section>
    <Footer />
    </div>
  );
};

export default ServiceDetails;