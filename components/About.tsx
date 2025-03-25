/*

import { motion } from 'framer-motion';
import { Features } from './FeaturesData';

const About = () => {
  const progressItems = [
    { title: 'Web Design', percentage: '90%', color: 'bg-[#d20ac3]' },
    { title: 'Media Production', percentage: '90%', color: 'bg-blue-900' },
    { title: 'Branding and printing', percentage: '85%', color: 'bg-[#efa110]' },
    { title: 'Communication and Marketing', percentage: '80%', color: 'bg-[#e3a6b6]' },
    { title: 'It Solutions', percentage: '85%', color: 'bg-[#d20ac3]' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage: string) => ({
      width: percentage,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section className="bg-white py-0" aria-label="about">
      <div className="container mx-auto px-4">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="max-w-2xl"
            variants={itemVariants}
          >
            <motion.h2 
              className="text-4xl text-blue-900 font-bold mb-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Proficient Skill Rating
            </motion.h2>
            
            <motion.p 
              className="text-gray-600 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We don’t just offer services—we craft perfection with top-rated expertise:
              <span className="block mt-4">💻 Web Design – Stunning, high-performance sites</span>
              <span className="block">📸 Photography & Media – Precision-captured moments</span>
              <span className="block">🎨 Graphic Design & Printing – Visuals that speak</span>
              <span className="block">🔧 CCTV & IT Solutions – Innovation meets security</span>
            </motion.p>
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={containerVariants}
          >
            {progressItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="space-y-2"
                variants={itemVariants}
              >
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#0f0c44]">{item.title}</span>
                  <span className="text-gray-600">{item.percentage}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div 
                    className={`h-full ${item.color}`}
                    custom={item.percentage}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={progressVariants}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <Features />
      </div>
    </section>
  );
};

export default About;*/

import { motion } from 'framer-motion';

const About = () => {
  const progressItems = [
    { title: 'Web Design', percentage: '90%', color: 'bg-gradient-to-r from-purple-600 to-pink-500' },
    { title: 'Media Production', percentage: '90%', color: 'bg-gradient-to-r from-blue-600 to-cyan-500' },
    { title: 'Branding & Printing', percentage: '85%', color: 'bg-gradient-to-r from-amber-500 to-orange-400' },
    { title: 'Communication & Marketing', percentage: '80%', color: 'bg-gradient-to-r from-rose-400 to-pink-400' },
    { title: 'IT Solutions', percentage: '85%', color: 'bg-gradient-to-r from-fuchsia-600 to-purple-400' },
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

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120 } }
  };

  const progressVariants = {
    hidden: { width: 0 },
    visible: (percentage: string) => ({
      width: percentage,
      transition: { duration: 1.5, ease: "easeOut" }
    })
  };

  return (
    <section className="bg-gradient-to-b from-blue-50 to-white py-24 lg:py-32" aria-label="about">
      <div className="container mx-auto px-4 max-w-7xl">
        <motion.div 
          className="grid lg:grid-cols-2 gap-16 mb-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div 
            className="max-w-2xl relative"
            variants={itemVariants}
          >
            <div className="absolute -top-8 -left-8 w-24 h-24 bg-purple-100 rounded-full blur-xl opacity-50" />
            <motion.h2 
              className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Masterful Digital Expertise
            </motion.h2>
            
            <motion.div 
              className="text-gray-600 mb-8 space-y-5 text-lg"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <p className="text-xl text-gray-700 font-medium">
                We transform visions into digital reality through our multidisciplinary expertise:
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full" />
                  <span>💻 Web Design & Development</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full" />
                  <span>📸 Professional Photography & Videography</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full" />
                  <span>🎨 Branding & Graphic Design Solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-rose-400 rounded-full" />
                  <span>🔒 Advanced IT & Security Systems</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="space-y-8 lg:pt-10"
            variants={containerVariants}
          >
            {progressItems.map((item, index) => (
              <motion.div 
                key={index} 
                className="space-y-3 group"
                variants={itemVariants}
              >
                <div className="flex justify-between items-center px-2">
                  <span className="font-semibold text-gray-800 text-lg">{item.title}</span>
                  <span className="text-gray-600 font-medium">{item.percentage}</span>
                </div>
                <div className="h-2.5 bg-gray-100 rounded-full overflow-hidden ring-1 ring-gray-200/50">
                  <motion.div 
                    className={`h-full ${item.color} rounded-full shadow-lg`}
                    custom={item.percentage}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={progressVariants}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          
        </motion.div>
      </div>
    </section>
  );
};

export default About;