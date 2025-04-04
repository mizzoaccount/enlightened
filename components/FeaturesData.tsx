{/*import { motion } from 'framer-motion';
import { IoCreateOutline, IoShieldCheckmarkOutline, IoSettingsOutline, IoCubeOutline } from "react-icons/io5";

export const Features = () => {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
    hover: { y: -10 }
  };

  const iconVariants = {
    hover: { scale: 1.1, rotate: -5 }
  };

  const shapeVariants = {
    hover: { height: "70%" }
  };

  return (
    <section className="bg-white py-0 px-4 mb-20" id="features">
      <div className="container mx-auto px-0">
        {/* Animated Section Header *
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
       
              <motion.h2 
          className="text-4xl font-bold text-blue-900 mb-8 relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Our Values
          <span className="absolute left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#d20ac3] mt-12"></span>
        </motion.h2>


        
        </motion.div>
     
        {/* Animated Features Grid *
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative group cursor-pointer"
            >
              {/* Animated Background Shape *
              <motion.div 
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#d20ac3]/5 to-transparent rounded-xl -z-10"
                variants={shapeVariants}
                initial={{ height: "60%" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Feature Card *
              <motion.div 
                className="bg-white shadow-lg hover:shadow-xl m-2 p-8 rounded-xl text-center transition-all duration-300"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="flex justify-center items-center text-[#d20ac3] text-5xl mb-6"
                  variants={iconVariants}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>

              {/* Hover Gradient Border *
              <div className="absolute inset-0 rounded-xl overflow-hidden -z-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d20ac3]/10 to-[#efa110]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

// Features data
const features = [
  {
    icon: <IoCreateOutline className="hover:scale-110 transition-transform" />,
    title: "Integrity",
    text: "We do the right thing."
  },
  {
    icon: <IoShieldCheckmarkOutline className="hover:scale-110 transition-transform" />,
    title: "Transparency",
    text: "Open, honest, and clear."
  },
  {
    icon: <IoSettingsOutline className="hover:scale-110 transition-transform" />,
    title: "Excellence",
    text: "Always striving to be better."
  },
  {
    icon: <IoCubeOutline className="hover:scale-110 transition-transform" />,
    title: "Innovation",
    text: "Creating new and better solutions."
  }
];*/}

import { motion } from 'framer-motion';
import { IoCreateOutline, IoShieldCheckmarkOutline, IoSettingsOutline, IoCubeOutline } from "react-icons/io5";
import { FaHandshake, FaLightbulb, FaMedal, FaEye } from "react-icons/fa";

export const Features = () => {
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
      y: -15,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  const iconVariants = {
    hover: { 
      scale: 1.15,
      rotate: [0, -10, 10, 0],
      transition: { 
        duration: 0.6 
      } 
    }
  };

  const shapeVariants = {
    hover: { 
      height: "100%",
      opacity: 1 
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 py-0 px-4" id="features">
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
  <span className="relative z-10">Our Core Values</span>
  <motion.span 
    className="absolute left-0 bottom-[-6px] w-full h-1 bg-gradient-to-r from-[#d20ac3] to-[#efa110]"
    initial={{ scaleX: 0 }}
    whileInView={{ scaleX: 1 }}
    transition={{ duration: 0.8, delay: 0.6 }}
    style={{ transformOrigin: 'left' }}
  />
</motion.h2>

          <motion.p 
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            The foundation of everything we do at Enlightened Future Hub
          </motion.p>
        </motion.div>
     
        {/* Features Grid */}
        <motion.ul 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {features.map((feature, index) => (
            <motion.li 
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="relative group cursor-pointer"
            >
              {/* Animated Background Shape */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-b from-[#d20ac3]/10 to-transparent rounded-2xl -z-10"
                variants={shapeVariants}
                initial={{ height: "60%", opacity: 0.5 }}
                transition={{ duration: 0.4 }}
              />
              
              {/* Feature Card */}
              <motion.div 
                className="h-full bg-white shadow-lg hover:shadow-2xl p-8 rounded-2xl text-center transition-all duration-300 border border-gray-100 hover:border-transparent"
                whileTap={{ scale: 0.98 }}
              >
                <motion.div 
                  className="flex justify-center items-center text-5xl mb-6"
                  variants={iconVariants}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="p-4 rounded-full bg-gradient-to-br from-[#d20ac3]/10 to-[#efa110]/10 text-[#d20ac3]">
                    {feature.icon}
                  </div>
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.text}
                </p>
              </motion.div>

              {/* Hover Gradient Border */}
              <div className="absolute inset-0 rounded-2xl overflow-hidden -z-20 p-1">
                <div className="absolute inset-0 bg-gradient-to-br from-[#d20ac3] to-[#efa110] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

// Enhanced Features data
const features = [
  {
    icon: <FaHandshake className="hover:scale-110 transition-transform" />,
    title: "Integrity",
    text: "We uphold the highest ethical standards in all our actions and decisions."
  },
  {
    icon: <FaEye className="hover:scale-110 transition-transform" />,
    title: "Transparency",
    text: "Clear, open communication with no hidden agendas or surprises."
  },
  {
    icon: <FaMedal className="hover:scale-110 transition-transform" />,
    title: "Excellence",
    text: "Relentless pursuit of quality in every project we undertake."
  },
  {
    icon: <FaLightbulb className="hover:scale-110 transition-transform" />,
    title: "Innovation",
    text: "Forward-thinking solutions that push boundaries and create value."
  }
];