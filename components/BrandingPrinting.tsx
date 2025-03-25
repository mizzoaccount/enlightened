import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaPalette, FaBoxOpen, FaPrint, FaChess, FaImage, FaTshirt } from 'react-icons/fa';

const BrandingPrinting = () => {
  const services = [
    {
      id: 1,
      title: 'Corporate Identity Design',
      description: 'Crafting memorable brand identities that resonate with your target audience and stand the test of time',
      image: 'https://i.pinimg.com/736x/bd/56/8a/bd568ac7a81666af97470b6252cf7b6a.jpg',
      icon: <FaPalette className="text-2xl" />,
      color: 'bg-gradient-to-br from-blue-900 to-blue-700'
    },
    {
      id: 2,
      title: 'Packaging Solutions',
      description: 'Innovative packaging designs that enhance product appeal and create unboxing experiences',
      image: '/assets/images/branding/packaging.jpeg',
      icon: <FaBoxOpen className="text-2xl" />,
      color: 'bg-gradient-to-br from-[#d20ac3] to-[#a0089a]'
    },
    {
      id: 3,
      title: 'Digital Printing',
      description: 'High-quality digital printing with quick turnaround times and vibrant color reproduction',
      image: 'https://i.pinimg.com/736x/ff/e1/1f/ffe11fedb5398eef11537c42ff84aed3.jpg',
      icon: <FaPrint className="text-2xl" />,
      color: 'bg-gradient-to-br from-blue-900 to-blue-700'
    },
    {
      id: 4,
      title: 'Brand Strategy',
      description: 'Data-driven brand strategies for market dominance and lasting customer connections',
      image: 'https://i.pinimg.com/736x/bc/0f/bd/bc0fbd2ea3f000f5361c379961f85481.jpg',
      icon: <FaChess className="text-2xl" />,
      color: 'bg-gradient-to-br from-[#d20ac3] to-[#a0089a]'
    },
    {
      id: 5,
      title: 'Large Format Printing',
      description: 'Eye-catching banners, billboards, and signage solutions that command attention',
      image: 'https://i.pinimg.com/736x/ca/90/8e/ca908ebb05309b1d70b1ecca923ce684.jpg',
      icon: <FaImage className="text-2xl" />,
      color: 'bg-gradient-to-br from-blue-900 to-blue-700'
    },
    {
      id: 6,
      title: 'Merchandise Branding',
      description: 'Custom branded merchandise that keeps your logo visible and builds brand loyalty',
      image: 'https://i.pinimg.com/736x/76/50/e1/7650e14c65ad6f0bfe646f018d9360e3.jpg',
      icon: <FaTshirt className="text-2xl" />,
      color: 'bg-gradient-to-br from-[#d20ac3] to-[#a0089a]'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section className="relative py-24 px-4 lg:px-8 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
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
            Branding & Printing
            </span>
            <motion.span 
              className="absolute left-0 bottom-0 w-full h-1 bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
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
            Transforming brands through innovative design and precision printing solutions that create lasting impressions and drive business growth.
          </motion.p>
        </motion.div>

       

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-80 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent" />
                <div className={`absolute top-6 left-6 ${service.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-blue-900">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>
                <motion.button 
                  className="text-[#d20ac3] font-semibold hover:text-blue-900 transition-colors flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  Learn More
                  <span className="group-hover:translate-x-1 transition-transform">
                    →
                  </span>
                </motion.button>
              </div>

              <div className="absolute top-6 right-6">
                <motion.div 
                  className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg"
                  whileHover={{ rotate: 90 }}
                >
                  <svg 
                    className="w-5 h-5 text-[#d20ac3]" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth="2" 
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingPrinting;
{/*import { motion } from 'framer-motion';
import Image from 'next/image';

const BrandingPrinting = () => {
  const services = [
    {
      id: 1,
      title: 'Corporate Identity Design',
      description: 'Crafting memorable brand identities that resonate with your target audience',
      image: 'https://i.pinimg.com/736x/bd/56/8a/bd568ac7a81666af97470b6252cf7b6a.jpg'
    },
    {
      id: 2,
      title: 'Packaging Solutions',
      description: 'Innovative packaging designs that enhance product appeal',
      image: '/assets/images/branding/packaging.jpeg'
    },
    {
      id: 3,
      title: 'Digital Printing',
      description: 'High-quality digital printing with quick turnaround times',
      image: 'https://i.pinimg.com/736x/ff/e1/1f/ffe11fedb5398eef11537c42ff84aed3.jpg'
    },
    {
      id: 4,
      title: 'Brand Strategy',
      description: 'Data-driven brand strategies for market dominance',
      image: 'https://i.pinimg.com/736x/bc/0f/bd/bc0fbd2ea3f000f5361c379961f85481.jpg'
    },
    {
      id: 5,
      title: 'Large Format Printing',
      description: 'Eye-catching banners, billboards, and signage solutions',
      image: 'https://i.pinimg.com/736x/ca/90/8e/ca908ebb05309b1d70b1ecca923ce684.jpg'
    },
    {
      id: 6,
      title: 'Merchandise Branding',
      description: 'Custom branded merchandise that keeps your logo visible',
      image: 'https://i.pinimg.com/736x/76/50/e1/7650e14c65ad6f0bfe646f018d9360e3.jpg'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="min-h-screen py-20 px-4 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Branding & Printing
            <span className="block w-24 h-2 bg-[#d20ac3] mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transforming brands through innovative design and precision printing solutions.
            We create visual experiences that captivate and convert.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent" />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-blue-900">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
                <div className="mt-4">
                  <button className="text-[#d20ac3] font-semibold hover:text-blue-900 transition-colors">
                    Learn More →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BrandingPrinting;*/}