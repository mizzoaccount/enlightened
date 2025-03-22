/*import Image from 'next/image';
import { Features } from './FeaturesData';

const About = () => {
  const progressItems = [
    { title: 'Web Design', percentage: '100%', color: 'bg-[#d20ac3]' },
    { title: 'Media Production', percentage: '80%', color: 'bg-[#0f0c44]' },
    { title: 'Photography', percentage: '85%', color: 'bg-[#efa110]' },
    { title: 'SEO', percentage: '90%', color: 'bg-[#e3a6b6]' },
  ];

  const aboutCards = [
    { 
      icon: '/assets/images/icon-1.svg',
      title: 'Web Design',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
    { 
      icon: '/assets/images/icon-2.svg',
      title: 'Media Production',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
    { 
      icon: '/assets/images/icon-3.svg',
      title: 'Photography',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
    { 
      icon: '/assets/images/icon-4.svg',
      title: 'SEO',
      text: 'Nulla vitae elit libero, a pharetra augue. Donec id elit non mi porta gravida at eget metus. Cras justo cum sociis natoque magnis.'
    },
  ];

  return (
    <section className="py-20" aria-label="about">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold mb-6">Proficient Skill Rating</h2>
            <p className="text-gray-600 mb-8">
            We don’t just offer services—we craft perfection with top-rated expertise:

💻 Web Design – Stunning, high-performance sites 
📸 Photography & Media – Precision-captured moments 
🎨 Graphic Design & Printing – Visuals that speak 
🔧 CCTV & IT Solutions – Innovation meets security 

With years of experience and a stellar portfolio, we turn ideas into impactful realities. Your vision, our mastery—let’s create greatness! 🚀
            </p>
          </div>

          <div className="space-y-6">
            {progressItems.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-semibold">{item.title}</span>
                  <span className="text-gray-600">{item.percentage}</span>
                </div>
                <div className="h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${item.color}`}
                    style={{ width: item.percentage }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <Features />
      </div>
    </section>
  );
};

export default About;*/

import { motion } from 'framer-motion';
import { Features } from './FeaturesData';

const About = () => {
  const progressItems = [
    { title: 'Web Design', percentage: '100%', color: 'bg-[#d20ac3]' },
    { title: 'Media Production', percentage: '80%', color: 'bg-blue-900' },
    { title: 'Photography', percentage: '85%', color: 'bg-[#efa110]' },
    { title: 'SEO', percentage: '90%', color: 'bg-[#e3a6b6]' },
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

export default About;