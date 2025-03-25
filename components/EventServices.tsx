{/*import { motion } from 'framer-motion';
import Image from 'next/image';

const EventServices = () => {
  const services = [
    {
      id: 1,
      title: "Corporate Events Planning",
      description: "End-to-end management of conferences, seminars, and corporate gatherings.",
      imgSrc: "/assets/images/events/cooperate.jpeg"
    },
    {
      id: 2,
      title: "Wedding Coordination",
      description: "Full-service wedding planning with exquisite attention to detail.",
      imgSrc: "/assets/images/events/wedding.jpeg"
    },
    {
      id: 3,
      title: "Product Launches",
      description: "Memorable launch events that create buzz and media engagement.",
      imgSrc: "/assets/images/events/product.jpeg"
    },
    {
      id: 4,
      title: "Virtual Events Production",
      description: "Hybrid and fully virtual event solutions with interactive features.",
      imgSrc: "/assets/images/events/virtual.jpeg"
    },
    {
      id: 5,
      title: "Entertainment Booking",
      description: "Access to top-tier performers and entertainment options.",
      imgSrc: "/assets/images/events/entertainment.jpeg"
    },
    {
      id: 6,
      title: "Venue Sourcing",
      description: "Perfect location selection with global network access.",
      imgSrc: "/assets/images/events/venue.jpeg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-14"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4 relative pb-8">
            Event Management Solutions
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d20ac3]"></span>
          </h2>
          <p className="text-lg text-blue-900/90 max-w-2xl mx-auto">
            Transforming visions into unforgettable experiences through meticulous planning and innovative execution.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-60">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 border-t-4 border-transparent group-hover:border-[#d20ac3] transition-all duration-300">
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-blue-900/80">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventServices;*/}

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaRegCalendarAlt, FaGlassCheers, FaRocket, FaDesktop, FaMusic, FaMapMarkerAlt } from 'react-icons/fa';

const EventServices = () => {
  const services = [
    {
      id: 1,
      title: "Corporate Events Planning",
      description: "End-to-end management of conferences, seminars, and corporate gatherings with precision and professionalism.",
      imgSrc: "/assets/images/events/cooperate.jpeg",
      icon: <FaRegCalendarAlt className="text-3xl" />
    },
    {
      id: 2,
      title: "Wedding Coordination",
      description: "Full-service wedding planning with exquisite attention to every romantic detail.",
      imgSrc: "/assets/images/events/wedding.jpeg",
      icon: <FaGlassCheers className="text-3xl" />
    },
    {
      id: 3,
      title: "Product Launches",
      description: "Memorable launch events that create buzz, media engagement and market impact.",
      imgSrc: "/assets/images/events/product.jpeg",
      icon: <FaRocket className="text-3xl" />
    },
    {
      id: 4,
      title: "Virtual Events Production",
      description: "Cutting-edge hybrid and fully virtual event solutions with interactive features.",
      imgSrc: "/assets/images/events/virtual.jpeg",
      icon: <FaDesktop className="text-3xl" />
    },
    {
      id: 5,
      title: "Entertainment Booking",
      description: "Exclusive access to top-tier performers and premium entertainment options.",
      imgSrc: "/assets/images/events/entertainment.jpeg",
      icon: <FaMusic className="text-3xl" />
    },
    {
      id: 6,
      title: "Venue Sourcing",
      description: "Perfect location selection from our global network of premium venues.",
      imgSrc: "/assets/images/events/venue.jpeg",
      icon: <FaMapMarkerAlt className="text-3xl" />
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
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
      y: -10,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
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
              Event Management Solutions
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
            Transforming visions into unforgettable experiences through meticulous planning and innovative execution that exceeds expectations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              whileHover="hover"
              className="group relative bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative h-72 overflow-hidden">
                <Image
                  src={service.imgSrc}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 right-4 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow-lg text-[#d20ac3]">
                  {service.icon}
                </div>
              </div>
              <div className="p-6 border-t-4 border-transparent group-hover:border-[#d20ac3] transition-all duration-300">
                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-3">{service.title}</h3>
                <p className="text-blue-900/80 leading-relaxed">{service.description}</p>
                <motion.div 
                  className="mt-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                >
                  <button className="text-sm font-semibold text-[#d20ac3] hover:text-blue-900 transition-colors flex items-center gap-2">
                    Learn more
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </button>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default EventServices;