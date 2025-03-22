import { motion } from 'framer-motion';
import Image from 'next/image';

const BrandingPrinting = () => {
  const services = [
    {
      id: 1,
      title: 'Corporate Identity Design',
      description: 'Crafting memorable brand identities that resonate with your target audience',
      image: '/images/service1.jpg'
    },
    {
      id: 2,
      title: 'Packaging Solutions',
      description: 'Innovative packaging designs that enhance product appeal',
      image: '/images/service2.jpg'
    },
    {
      id: 3,
      title: 'Digital Printing',
      description: 'High-quality digital printing with quick turnaround times',
      image: '/images/service3.jpg'
    },
    {
      id: 4,
      title: 'Brand Strategy',
      description: 'Data-driven brand strategies for market dominance',
      image: '/images/service4.jpg'
    },
    {
      id: 5,
      title: 'Large Format Printing',
      description: 'Eye-catching banners, billboards, and signage solutions',
      image: '/images/service5.jpg'
    },
    {
      id: 6,
      title: 'Merchandise Branding',
      description: 'Custom branded merchandise that keeps your logo visible',
      image: '/images/service6.jpg'
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

export default BrandingPrinting;