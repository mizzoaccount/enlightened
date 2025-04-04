{/*import { motion } from 'framer-motion';
import Image from 'next/image';

const ITSolutions = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure tailored to your business needs',
      image: 'https://i.pinimg.com/736x/51/d5/48/51d548911242e61017adcdfbed429f59.jpg'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions for digital assets',
      image: 'https://i.pinimg.com/736x/cd/6f/a9/cd6fa98b64ed44a096fb555fbc065b28.jpg'
    },
    {
      id: 3,
      title: 'AI Integration',
      description: 'Smart automation and machine learning implementations',
      image: 'https://i.pinimg.com/736x/b2/11/29/b21129b9bf616bb10701394d624ab09a.jpg'
    },
    {
      id: 4,
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation',
      image: 'https://i.pinimg.com/736x/b0/3f/81/b03f815fb319ce720eea730cf59ff111.jpg'
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Big data solutions and business intelligence insights',
      image: 'https://i.pinimg.com/736x/7d/4b/a7/7d4ba708ddfb588b247ee85600e94c0a.jpg'
    },
    {
      id: 6,
      title: 'Network Solutions',
      description: 'Secure and reliable enterprise network infrastructure',
      image: 'https://i.pinimg.com/736x/cc/f2/a5/ccf2a5e7d2a451030d57ce21e3433c4c.jpg'
    }
  ];

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

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
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
            Innovative IT Solutions
            <span className="block w-24 h-2 bg-[#d20ac3] mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Cutting-edge technology services that drive digital transformation and 
            empower businesses to thrive in the modern landscape.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group relative bg-white rounded-xl shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 to-blue-900/60" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-sm opacity-90">{service.description}</p>
              </div>

              <div className="absolute top-4 right-4">
                <button className="bg-[#d20ac3] text-white px-4 py-2 rounded-full 
                  hover:bg-blue-900 transition-colors duration-300 shadow-lg">
                  Explore
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ITSolutions;*/}

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaCloud, FaShieldAlt, FaRobot, FaLaptopCode, FaChartLine, FaNetworkWired } from 'react-icons/fa';

const ITSolutions = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and migration services tailored to your business needs',
      image: 'https://i.pinimg.com/736x/51/d5/48/51d548911242e61017adcdfbed429f59.jpg',
      icon: <FaCloud className="text-2xl" />,
      color: 'from-blue-900 to-blue-700'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions to protect your digital assets and data',
      image: 'https://i.pinimg.com/736x/cd/6f/a9/cd6fa98b64ed44a096fb555fbc065b28.jpg',
      icon: <FaShieldAlt className="text-2xl" />,
      color: 'from-[#d20ac3] to-[#a0089a]'
    },
    {
      id: 3,
      title: 'AI Integration',
      description: 'Smart automation and machine learning implementations to boost efficiency',
      image: 'https://i.pinimg.com/736x/b2/11/29/b21129b9bf616bb10701394d624ab09a.jpg',
      icon: <FaRobot className="text-2xl" />,
      color: 'from-blue-900 to-blue-700'
    },
    {
      id: 4,
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation for digital transformation',
      image: 'https://i.pinimg.com/736x/b0/3f/81/b03f815fb319ce720eea730cf59ff111.jpg',
      icon: <FaLaptopCode className="text-2xl" />,
      color: 'from-[#d20ac3] to-[#a0089a]'
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Big data solutions and business intelligence insights to drive decisions',
      image: 'https://i.pinimg.com/736x/7d/4b/a7/7d4ba708ddfb588b247ee85600e94c0a.jpg',
      icon: <FaChartLine className="text-2xl" />,
      color: 'from-blue-900 to-blue-700'
    },
    {
      id: 6,
      title: 'Network Solutions',
      description: 'Secure and reliable enterprise network infrastructure deployment',
      image: 'https://i.pinimg.com/736x/cc/f2/a5/ccf2a5e7d2a451030d57ce21e3433c4c.jpg',
      icon: <FaNetworkWired className="text-2xl" />,
      color: 'from-[#d20ac3] to-[#a0089a]'
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

  const cardVariants = {
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
        {/*<motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Innovative IT Solutions
            </span>
            <motion.span 
              className="block w-24 h-2 bg-gradient-to-r from-[#d20ac3] to-[#efa110] mx-auto mt-6 rounded-full"
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
            Cutting-edge technology services that drive digital transformation and empower businesses to thrive in the modern technological landscape.
          </motion.p>
        </motion.div>*/}

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
                    Innovative IT Solutions
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
                     Cutting-edge technology services that drive digital transformation and empower businesses to thrive in the modern technological landscape.
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
              variants={cardVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
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
                <div className={`absolute top-6 left-6 bg-gradient-to-br ${service.color} w-14 h-14 rounded-full flex items-center justify-center text-white shadow-lg`}>
                  {service.icon}
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h3 className="text-xl md:text-2xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-200 leading-relaxed mb-6">{service.description}</p>
                <motion.button 
                  className="text-sm font-semibold text-white hover:text-[#d20ac3] transition-colors flex items-center gap-2 group"
                  whileHover={{ x: 5 }}
                >
                  Discover Solution
                  <span className="group-hover:translate-x-2 transition-transform">
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

export default ITSolutions;