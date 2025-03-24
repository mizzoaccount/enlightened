import { motion } from 'framer-motion';
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

export default EventServices;