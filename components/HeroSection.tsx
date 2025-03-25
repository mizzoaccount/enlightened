/*

  import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
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
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { duration: 0.3 }
  };

  const buttonTap = {
    scale: 0.95
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
  };

  return (
    <section className="bg-white pt-[140px] pb-[90px] overflow-hidden">
      <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 md:items-center">
        {/* Hero Banner *
        <motion.div 
          className="relative max-w-max mx-auto"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div 
            className="relative hover:scale-[1.02] transition-transform duration-500"
            style={{
              maskImage: "url('/assets/images/blob.svg')",
              WebkitMaskImage: "url('/assets/images/blob.svg')",
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
            }}
          >
            <Image
              src="/assets/images/heroo.jpeg"
              alt="Julia"
              width={560}
              height={540}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Animated Shape *
          <motion.div 
            className="absolute bottom-[10%] right-[2%]"
            animate={{ y: [-5, 5] }}
            transition={{ duration: 2, repeat: Infinity, repeatType: 'reverse' }}
          >
<Image
  src="/assets/images/hero-shape.svg"
  alt="250+ Projects Done"
  width={203}
  height={91}
  className="filter drop-shadow-xl w-28 h-8 sm:w-28 sm:h-10 md:w-36 md:h-16 lg:w-40 lg:h-18 xl:w-44 xl:h-20"
  style={{ maxWidth: "100%", height: "auto" }} // Ensures it scales properly
/>

          </motion.div>
        </motion.div>

        {/* Hero Content *
        <motion.div 
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl text-blue-900 md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          >
            Bringing Your Vision to Life – <span className="text-[#d20ac3]">Digitally</span> & Beyond
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0"
          >
            At Enlightened Future Hub, we bring your vision to life with expert web design, 
            photography, media production, events, graphic design & printing, CCTV installations, 
            and IT solutions.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a 
              href="#work"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="px-8 py-4 bg-[#d20ac3] text-white font-semibold rounded-full
                border-2 border-[#d20ac3] relative overflow-hidden group"
            >
              <span className="relative z-10">Our Works</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>

            <motion.a 
              href="#contact"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="px-8 py-4 bg-transparent text-[#d20ac3] font-semibold rounded-full
                border-2 border-[#d20ac3] relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}*/

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
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
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        type: "spring", 
        stiffness: 100,
        damping: 10
      } 
    }
  };

  const buttonHover = {
    scale: 1.05,
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  };

  const buttonTap = {
    scale: 0.95
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { 
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      } 
    }
  };

  return (
    <section className="relative bg-gradient-to-b from-white to-blue-50 pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-10 left-10 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto px-4 grid gap-16 md:grid-cols-2 md:items-center relative z-10">
        {/* Hero Banner */}
        <motion.div 
          className="relative max-w-max mx-auto"
          initial="hidden"
          animate="visible"
          variants={imageVariants}
        >
          <div 
            className="relative group"
            style={{
              maskImage: "url('/assets/images/blob.svg')",
              WebkitMaskImage: "url('/assets/images/blob.svg')",
              maskRepeat: 'no-repeat',
              WebkitMaskRepeat: 'no-repeat',
              maskPosition: 'center',
              WebkitMaskPosition: 'center',
              maskSize: 'contain',
              WebkitMaskSize: 'contain',
            }}
          >
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              transition={{ 
                duration: 8,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            >
              <Image
                src="/assets/images/heroo.jpeg"
                alt="Julia"
                width={560}
                height={540}
                className="w-full h-auto rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500"
                priority
              />
            </motion.div>
          </div>
          
          {/* Animated Badge */}
          <motion.div 
            className="absolute -bottom-5 -right-5 md:-right-10"
            initial={{ y: 0, rotate: -5 }}
            animate={{ 
              y: [-5, 5], 
              rotate: [-5, 5] 
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              repeatType: 'reverse',
              ease: "easeInOut"
            }}
          >
            <div className="relative bg-white px-6 py-3 rounded-full shadow-xl border-2 border-blue-100">
              <span className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                250+ Projects Done
              </span>
              <div className="absolute -z-10 inset-0 bg-white/30 backdrop-blur-sm rounded-full"></div>
            </div>
          </motion.div>
        </motion.div>

        {/* Hero Content */}
        <motion.div 
          className="text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              Bringing Your Vision
            </span> <br />
            <span className="text-[#d20ac3] relative inline-block">
              to Life
              <svg 
                className="absolute -bottom-2 left-0 w-full h-4 text-pink-500"
                viewBox="0 0 200 10"
              >
                <path 
                  d="M0,5 Q50,10 100,5 T200,5" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2"
                />
              </svg>
            </span>
          </motion.h1>
          
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0 leading-relaxed"
          >
            At Enlightened Future Hub, we transform ideas into digital reality with cutting-edge 
            web design, stunning media production, and comprehensive IT solutions tailored to your needs.
          </motion.p>

          <motion.div 
            className="flex flex-wrap gap-4 justify-center md:justify-start"
            variants={itemVariants}
          >
            <motion.a 
              href="#work"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="px-8 py-4 bg-gradient-to-r from-[#d20ac3] to-purple-600 text-white font-semibold rounded-full
                border-2 border-transparent relative overflow-hidden group shadow-lg hover:shadow-xl transition-all"
            >
              <span className="relative z-10 flex items-center gap-2">
                Our Works
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-[#d20ac3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.a>

            <motion.a 
              href="#contact"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="px-8 py-4 bg-transparent text-[#d20ac3] font-semibold rounded-full
                border-2 border-[#d20ac3] relative overflow-hidden group hover:text-white transition-colors"
            >
              <span className="relative z-10 flex items-center gap-2">
                Contact Us
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                </svg>
              </span>
              <div className="absolute inset-0 bg-[#d20ac3] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
