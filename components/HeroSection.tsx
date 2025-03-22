/*import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-cultured pt-[140px] pb-[90px]">
      <div className="container mx-auto px-4 grid gap-12 md:grid-cols-2 md:items-center">
        {/* Hero Banner *
        <div className="relative max-w-max mx-auto">
          <div 
            className="relative"
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
            />
          </div>
          
          {/* Shape *
          <Image
            src="/assets/images/hero-shape.svg"
            alt="250+ Projects Done"
            width={203}
            height={91}
            className="absolute bottom-[10%] right-[2%] filter drop-shadow-xl"
          />
        </div>

           {/* Hero Content *
        <div className="text-center md:text-left">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Bringing Your Vision to Life – Digitally & Beyond
          </h1>
          
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto md:mx-0">
          At Enlightened Future Hub, we bring your vision to life with expert web design, photography, media production, events, graphic design & printing, CCTV installations, and IT solutions. Whether it’s crafting stunning visuals or enhancing security, we deliver creativity and innovation to help your brand thrive. Let’s create something extraordinary together! 🚀
          </p>

          <div className="flex flex-wrap gap-4 justify-center md:justify-start">
  <a 
    href="#work" 
    className="
      px-8 py-4 
      bg-[#d20ac3] text-white 
      font-semibold 
      rounded-full 
      border-2 border-[#d20ac3]
      hover:bg-[#d20ac3] hover:text-[#d20ac3]
      transition-colors duration-300
      relative
      overflow-hidden
      group
    "
  >
    <span className="relative z-10">See Our Works</span>
    <div className="
      absolute -inset-8 -skew-y-12
      bg-white
      transition-transform duration-300
      -translate-y-32
      group-hover:translate-y-0
    "></div>
  </a>

  <a 
    href="#contact" 
    className="
      px-8 py-4 
      bg-transparent text-[#d20ac3] 
      font-semibold 
      rounded-full 
      border-2 border-[#d20ac3]
       hover:text-white
      transition-colors duration-300
      relative
      overflow-hidden
      group
    "
  >
    <span className="relative z-10">Contact Us</span>
    <div className="
      absolute -inset-8 -skew-y-12
      bg-[#d20ac3]
      transition-transform duration-300
      -translate-y-32
      group-hover:translate-y-0
    "></div>
  </a>
</div>
          </div>
        
      </div>
    </section>
  ); }*/

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
        {/* Hero Banner */}
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
          
          {/* Animated Shape */}
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
              className="filter drop-shadow-xl"
            />
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
              <span className="relative z-10">See Our Works</span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity" />
            </motion.a>

            <motion.a 
              href="#contact"
              whileHover={buttonHover}
              whileTap={buttonTap}
              className="px-8 py-4 bg-transparent text-[#d20ac3] font-semibold rounded-full
                border-2 border-[#d20ac3] hover:text-white relative overflow-hidden group"
            >
              <span className="relative z-10">Contact Us</span>
              <div className="absolute inset-0 bg-[#d20ac3] opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
