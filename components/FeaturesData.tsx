/*import { IoCreateOutline, IoShieldCheckmarkOutline, IoSettingsOutline, IoCubeOutline } from "react-icons/io5";

export const Features = () => {
  return (
    <section className="py-20" id="features">
      <div className="container mx-auto px-4">
        {/* Section Header *
        <div className="text-center mb-12">
          <p className="text-[#efa110] mb-2 uppercase">Our App Feature</p>
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Awesome Features</h2>
        </div>

        {/* Features Grid *
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, index) => (
            <li key={index} className="relative group transition-transform duration-300 hover:-translate-y-2.5">
              {/* Background Shape *
              <div className="absolute top-0 left-0 right-0 h-3/5 bg-gray-50 rounded-xl -z-10" />
              
              {/* Feature Card *
              <div className="bg-white shadow-lg m-5 p-6 rounded-xl text-center">
                <div className="flex justify-center items-center text-[#d20ac3] text-5xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

// Features data
const features = [
  {
    icon: <IoCreateOutline />,
    title: "Easy to Edit",
    text: "Lorem ipsum dolor sit cons ectetur adipiscing"
  },
  {
    icon: <IoShieldCheckmarkOutline />,
    title: "Fully Secure",
    text: "Lorem ipsum dolor sit cons ectetur adipiscing"
  },
  {
    icon: <IoSettingsOutline />,
    title: "Manage User",
    text: "Lorem ipsum dolor sit cons ectetur adipiscing"
  },
  {
    icon: <IoCubeOutline />,
    title: "Free Trial",
    text: "Lorem ipsum dolor sit cons ectetur adipiscing"
  }
];
*/

import { motion } from 'framer-motion';
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
    <section className="bg-white py-4" id="features">
      <div className="container mx-auto px-0">
        {/* Animated Section Header */}
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
     
        {/* Animated Features Grid */}
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
              {/* Animated Background Shape */}
              <motion.div 
                className="absolute top-0 left-0 right-0 bg-gradient-to-b from-[#d20ac3]/5 to-transparent rounded-xl -z-10"
                variants={shapeVariants}
                initial={{ height: "60%" }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Feature Card */}
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

              {/* Hover Gradient Border */}
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
];