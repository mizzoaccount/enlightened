import { motion } from 'framer-motion';
import Image from 'next/image';

const MediaProduction = () => {
  const services = [
    {
      id: 1,
      title: "Video Production",
      description: "Professional video production services from concept to final edit",
      image: "https://i.pinimg.com/736x/04/92/39/04923982554969edf93e68ffb5a58e51.jpg",
      color: "bg-blue-900"
    },
    {
      id: 2,
      title: "Photography",
      description: "High-quality photography for corporate and commercial needs",
      image: "https://i.pinimg.com/736x/1e/cf/ef/1ecfef49edd5285598cf3fcc7c521249.jpg",
      color: "bg-[#d20ac3]"
    },
    {
      id: 3,
      title: "Live Streaming",
      description: "Multi-camera live streaming solutions for events",
      image: "/assets/images/media/livestream.jpeg",
      color: "bg-blue-900"
    },
    {
      id: 4,
      title: "Post-Production",
      description: "Expert video editing and color grading services",
      image: "https://i.pinimg.com/736x/e3/a1/84/e3a18424c50d4314926d8f6b37c3e64f.jpg",
      color: "bg-[#d20ac3]"
    },
    {
      id: 5,
      title: "Animation",
      description: "2D/3D animation and motion graphics creation",
      image: "https://i.pinimg.com/736x/d5/2d/7c/d52d7cdd20736a01b0978e04ac276d39.jpg",
      color: "bg-blue-900"
    },
    {
      id: 6,
      title: "Drone Cinematography",
      description: "Aerial filming with professional drone operators",
      image: "https://i.pinimg.com/736x/d4/60/d2/d460d247c2f82915654850aeb21d4e83.jpg",
      color: "bg-[#d20ac3]"
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

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-0">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Media Production Services
            <span className="block w-16 h-1 bg-[#d20ac3] mx-auto mt-4"></span>
          </h2>
          <p className="text-lg text-blue-900/90 max-w-2xl mx-auto">
            Transforming ideas into visual masterpieces through cutting-edge media production solutions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service) => (
            <motion.div 
              key={service.id}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-transparent" />
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <div className={`${service.color} w-12 h-12 rounded-full flex items-center justify-center mb-4`}>
                  <span className="text-white text-xl font-bold">{service.id}</span>
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-200">{service.description}</p>
              </div>

              <div className="absolute top-4 right-4">
                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                  <svg 
                    className="w-4 h-4 text-[#d20ac3]" 
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
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MediaProduction;