import { motion } from 'framer-motion';
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

        {/* Features Grid */}
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

        {/* Stats Section */}
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

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-blue-900/5 to-transparent -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d20ac3]/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default WhyChooseUs;