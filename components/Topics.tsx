import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaRegImages } from 'react-icons/fa';
import Link from 'next/link';

const topics = [
  { 
    title: 'Corporate Events', 
    slug: 'corporate-events',
    images: 38, 
    image: '/assets/images/topic/topic-1.jpg' 
  },
  { 
    title: 'Birthday Celebrations', 
    slug: 'birthday-celebrations',
    images: 63, 
    image: '/assets/images/topic/topic-10.jpg' 
  },
  { 
    title: 'Product Launches', 
    slug: 'product-launches',
    images: 78, 
    image: '/assets/images/topic/topic-3.jpg' 
  },
  { 
    title: 'Business Meetings', 
    slug: 'business-meetings',
    images: 125, 
    image: '/assets/images/topic/topic-4.jpg' 
  },
  { 
    title: 'Award Ceremonies', 
    slug: 'award-ceremonies',
    images: 78, 
    image: '/assets/images/topic/topic-7.jpg' 
  },
  { 
    title: 'Team Building', 
    slug: 'team-building',
    images: 125, 
    image: '/assets/images/topic/topic-6.jpg' 
  },
];

export default function Topics() {
  const sliderContainerRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!sliderContainerRef.current) return;

    const container = sliderContainerRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 24;
    const scrollAmount = itemWidth + gap;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section aria-labelledby="topic-label" className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-4">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-xl md:grid md:grid-cols-[0.4fr_1fr] md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-8 md:mb-0 flex flex-col">
            <motion.h2 
              id="topic-label" 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                Events Gallery
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A visual showcase of unforgettable moments. From corporate gatherings to community celebrations, we capture the essence of every occasion.
            </motion.p>
            <div className="flex gap-4 mt-auto">
              <motion.button
                onClick={() => handleScroll('prev')}
                whileHover={{ scale: 1.1, backgroundColor: "#d20ac3" }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-900 to-purple-600 text-white grid place-items-center transition-all shadow-lg"
                aria-label="Previous"
              >
                <IoArrowBack className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('next')}
                whileHover={{ scale: 1.1, backgroundColor: "#d20ac3" }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-900 to-purple-600 text-white grid place-items-center transition-all shadow-lg"
                aria-label="Next"
              >
                <IoArrowForward className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <motion.ul
              ref={sliderContainerRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  className="min-w-full flex-shrink-0 snap-start md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] xl:min-w-[calc(25%-16px)]"
                  variants={cardVariants}
                >
                  <Link href={`/gallery/${topic.slug}`} passHref>
                    <motion.div 
                      className="block relative rounded-2xl overflow-hidden group h-full cursor-pointer"
                      initial="rest"
                      whileHover="hover"
                      variants={hoverVariants}
                    >
                      <motion.div 
                        className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent z-10"
                        variants={{
                          rest: { opacity: 0.7 },
                          hover: { opacity: 0.9 }
                        }}
                      />
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        width={507}
                        height={618}
                        className="w-full h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                        priority={index < 2}
                      />
                      <motion.div 
                        className="absolute bottom-6 left-6 z-20"
                        variants={{
                          rest: { y: 0 },
                          hover: { y: -10 }
                        }}
                      >
                        <span className="text-white font-bold text-2xl block drop-shadow-lg">{topic.title}</span>
                        <div className="flex items-center gap-2 text-gray-200">
                          <FaRegImages className="text-[#d20ac3]" />
                          <span>{topic.images} Professional Shots</span>
                        </div>
                      </motion.div>
                      <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl z-10" />
                    </motion.div>
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}{/*import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';
import { FaRegImages } from 'react-icons/fa';
import Link from 'next/link';

const topics = [
  { title: 'Corporate Events', images: 38, image: '/assets/images/topic/topic-1.jpg' },
  { title: 'Birthday Celebrations', images: 63, image: '/assets/images/topic/topic-10.jpg' },
  { title: 'Product Launches', images: 78, image: '/assets/images/topic/topic-3.jpg' },
  { title: 'Business Meetings', images: 125, image: '/assets/images/topic/topic-4.jpg' },
  { title: 'Award Ceremonies', images: 78, image: '/assets/images/topic/topic-7.jpg' },
  { title: 'Team Building', images: 125, image: '/assets/images/topic/topic-6.jpg' },
];

export default function Topics() {
  const sliderContainerRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!sliderContainerRef.current) return;

    const container = sliderContainerRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 24;
    const scrollAmount = itemWidth + gap;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        type: "spring",
        stiffness: 80,
        damping: 10
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const hoverVariants = {
    rest: { scale: 1 },
    hover: { 
      scale: 1.03,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <section aria-labelledby="topic-label" className="relative bg-gradient-to-b from-white to-blue-50 py-20 px-4">
      {/* Decorative elements *
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      <div className="container mx-auto max-w-7xl px-4 relative z-10">
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-xl md:grid md:grid-cols-[0.4fr_1fr] md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-8 md:mb-0 flex flex-col">
            <motion.h2 
              id="topic-label" 
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
                Events Gallery
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg mb-8 leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A visual showcase of unforgettable moments. From corporate gatherings to community celebrations, we capture the essence of every occasion.
            </motion.p>
            <div className="flex gap-4 mt-auto">
              <motion.button
                onClick={() => handleScroll('prev')}
                whileHover={{ scale: 1.1, backgroundColor: "#d20ac3" }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-900 to-purple-600 text-white grid place-items-center transition-all shadow-lg"
                aria-label="Previous"
              >
                <IoArrowBack className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('next')}
                whileHover={{ scale: 1.1, backgroundColor: "#d20ac3" }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-900 to-purple-600 text-white grid place-items-center transition-all shadow-lg"
                aria-label="Next"
              >
                <IoArrowForward className="w-6 h-6" />
              </motion.button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <motion.ul
              ref={sliderContainerRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory pb-4"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  className="min-w-full flex-shrink-0 snap-start md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] xl:min-w-[calc(25%-16px)]"
                  variants={cardVariants}
                >
                  <motion.div 
                    className="block relative rounded-2xl overflow-hidden group h-full"
                    initial="rest"
                    whileHover="hover"
                    variants={hoverVariants}
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-transparent to-transparent z-10"
                      variants={{
                        rest: { opacity: 0.7 },
                        hover: { opacity: 0.9 }
                      }}
                    />

      <Image
                      src={topic.image}
                      alt={topic.title}
                      width={507}
                      height={618}
                      className="w-full h-80 md:h-96 object-cover transform group-hover:scale-110 transition-transform duration-500"
                      priority={index < 2}
                    />
 
                    <motion.div 
                      className="absolute bottom-6 left-6 z-20"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -10 }
                      }}
                    >
                      <span className="text-white font-bold text-2xl block drop-shadow-lg">{topic.title}</span>
                      <div className="flex items-center gap-2 text-gray-200">
                        <FaRegImages className="text-[#d20ac3]" />
                        <span>{topic.images} Professional Shots</span>
                      </div>
                    </motion.div>
                    <div className="absolute inset-0 border-4 border-transparent group-hover:border-white/30 transition-all duration-500 rounded-2xl z-10" />
                  </motion.div>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}*/}