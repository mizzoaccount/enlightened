import { motion } from 'framer-motion';
import Image from 'next/image';

const ITSolutions = () => {
  const services = [
    {
      id: 1,
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure tailored to your business needs',
      image: 'https://picsum.photos/400/300?cloud'
    },
    {
      id: 2,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security solutions for digital assets',
      image: 'https://picsum.photos/400/300?security'
    },
    {
      id: 3,
      title: 'AI Integration',
      description: 'Smart automation and machine learning implementations',
      image: 'https://picsum.photos/400/300?ai'
    },
    {
      id: 4,
      title: 'IT Consulting',
      description: 'Strategic technology planning and implementation',
      image: 'https://picsum.photos/400/300?consulting'
    },
    {
      id: 5,
      title: 'Data Analytics',
      description: 'Big data solutions and business intelligence insights',
      image: 'https://picsum.photos/400/300?data'
    },
    {
      id: 6,
      title: 'Network Solutions',
      description: 'Secure and reliable enterprise network infrastructure',
      image: 'https://picsum.photos/400/300?network'
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

export default ITSolutions;