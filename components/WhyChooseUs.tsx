{/*import { motion } from 'framer-motion';
import { RocketLaunch, Brain, ShieldCheck, Infinity } from 'phosphor-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <RocketLaunch size={48} />,
      title: "Future-Driven Solutions",
      description: "Pioneering technologies that anticipate tomorrow's challenges"
    },
    {
      icon: <Brain size={48} />,
      title: "Cognitive Expertise",
      description: "Team of visionary thinkers and technical masters"
    },
    {
      icon: <ShieldCheck size={48} />,
      title: "Trusted Partnership",
      description: "Secure, reliable, and transparent collaboration"
    },
    {
      icon: <Infinity size={48} />,
      title: "Sustainable Innovation",
      description: "Ethical solutions with endless possibilities"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction" },
    { number: "250+", label: "Successful Projects" },
    { number: "15", label: "Industry Awards" },
    { number: "∞", label: "Future Possibilities" }
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-blue-900">
            Why Choose Enlightened Future Hub
            <span className="block w-24 h-2 bg-[#d20ac3] mx-auto mt-4 rounded-full"></span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Accelerating progress through intelligent innovation and visionary thinking
          </p>
        </motion.div>

        {/* Features Grid *
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-shadow duration-300"
            >
              <div className="text-[#d20ac3] mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section *
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="relative bg-blue-900 rounded-3xl p-12 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-[#d20ac3]/10 to-blue-900/20" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10">
            {stats.map((stat, index) => (
              <div key={index} className="text-white">
                <motion.div
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring" }}
                  className="text-5xl font-bold mb-2 text-[#d20ac3]"
                >
                  {stat.number}
                </motion.div>
                <div className="text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements *
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/5 to-transparent -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d20ac3]/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default WhyChooseUs;*/}
import { motion } from 'framer-motion';
import { RocketLaunch, Brain, ShieldCheck, Infinity } from 'phosphor-react';

const WhyChooseUs = () => {
  const features = [
    {
      icon: <RocketLaunch weight="duotone" size={56} />,
      title: "Future-Driven Solutions",
      description: "Pioneering technologies that anticipate tomorrow's challenges today",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: <Brain weight="duotone" size={56} />,
      title: "Cognitive Expertise",
      description: "Team of visionary thinkers and technical masters pushing boundaries",
      color: "from-[#d20ac3] to-[#a0089a]"
    },
    {
      icon: <ShieldCheck weight="duotone" size={56} />,
      title: "Trusted Partnership",
      description: "Secure, reliable, and transparent collaboration you can count on",
      color: "from-blue-600 to-purple-600"
    },
    {
      icon: <Infinity weight="duotone" size={56} />,
      title: "Sustainable Innovation",
      description: "Ethical solutions with endless possibilities for growth",
      color: "from-[#d20ac3] to-[#a0089a]"
    }
  ];

  const stats = [
    { number: "98%", label: "Client Satisfaction Rate", icon: "👍" },
    { number: "250+", label: "Successful Projects", icon: "🚀" },
    { number: "15", label: "Industry Awards Won", icon: "🏆" },
    { number: "∞", label: "Future Possibilities", icon: "✨" }
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
    <section className="relative py-28 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
        {/* Header Section */}
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
              Why Choose Enlightened Future Hub
            </span>
            <motion.span 
              className="block w-24 h-1.5 bg-gradient-to-r from-[#d20ac3] to-[#efa110] mx-auto mt-6 rounded-full"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            />
          </motion.h2>
          <motion.p 
            className="text-lg md:text-xl text-blue-900/90 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Accelerating progress through intelligent innovation, visionary thinking, and transformative digital solutions
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
                            Why Choose Enlightened Future Hub
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
                             Accelerating progress through intelligent innovation, visionary thinking, and transformative digital solutions
                             </motion.p>
                          
                        </motion.div>


        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover="hover"
              className="group relative p-8 rounded-2xl bg-white shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`} />
              <div className={`text-transparent bg-gradient-to-br ${feature.color} bg-clip-text mb-6`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-gradient-to-br from-blue-900 to-purple-900 rounded-3xl p-12 text-center overflow-hidden"
        >
          {/* Animated background elements */}
          <div className="absolute inset-0 bg-[url('/assets/images/dots-pattern.png')] opacity-10" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#d20ac3]/10 to-blue-900/20" />
          
          <motion.div 
            className="grid grid-cols-2 md:grid-cols-4 gap-8 relative z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index}
                variants={itemVariants}
                className="text-white"
              >
                <div className="text-6xl font-bold mb-3 text-[#d20ac3] flex items-center justify-center gap-2">
                  <span>{stat.icon}</span>
                  <span>{stat.number}</span>
                </div>
                <div className="text-xl font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;