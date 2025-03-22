import { motion } from 'framer-motion';
import Image from 'next/image';

const Brands = () => {
  const brands = [
    { id: 1, name: 'TechNova', logo: '/brands/technova.svg' },
    { id: 2, name: 'BlueWave', logo: '/brands/bluewave.svg' },
    { id: 3, name: 'PixelForge', logo: '/brands/pixelforge.svg' },
    { id: 4, name: 'Quantum', logo: '/brands/quantum.svg' },
    { id: 5, name: 'Aurora', logo: '/brands/aurora.svg' },
    { id: 6, name: 'NexGen', logo: '/brands/nexgen.svg' },
    { id: 7, name: 'Eclipse', logo: '/brands/eclipse.svg' },
    { id: 8, name: 'Zenith', logo: '/brands/zenith.svg' },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Heading Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Trusted By Leading Brands
            <span className="block w-16 h-1 bg-[#d20ac3] mx-auto mt-4"></span>
          </h2>
          <p className="text-lg text-blue-900/90 max-w-2xl mx-auto">
            We've collaborated with industry leaders to deliver exceptional results
          </p>
        </motion.div>

        {/* Brands Marquee */}
        <div className="relative overflow-hidden py-8">
          <motion.div 
            className="flex"
            animate={{
              x: ['0%', '-100%'],
              transition: {
                duration: 30,
                repeat: Infinity,
                ease: 'linear'
              }
            }}
          >
            {/* Double the array for seamless loop */}
            {[...brands, ...brands].map((brand, index) => (
              <motion.div
                key={`${brand.id}-${index}`}
                className="px-8 flex items-center justify-center"
                whileHover={{ scale: 1.1 }}
                transition={{ type: 'spring', stiffness: 300 }}
              >
                <div className="relative w-40 h-20 grayscale hover:grayscale-0 transition-all duration-300">
                  <Image
                    src={brand.logo}
                    alt={brand.name}
                    fill
                    className="object-contain"
                    style={{ filter: 'brightness(0) invert(0)' }}
                  />
                  <div className="absolute inset-0 bg-[#d20ac3] opacity-0 hover:opacity-10 transition-opacity" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Gradient Overlay */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />
        </div>

        {/* Accent Line */}
        <div className="mx-auto mt-12 w-32 h-1 bg-gradient-to-r from-transparent via-[#d20ac3] to-transparent" />
      </div>

      <style jsx global>{`
        .grayscale {
          filter: grayscale(100%);
        }
        .grayscale:hover {
          filter: grayscale(0%);
        }
      `}</style>
    </section>
  );
};

export default Brands;