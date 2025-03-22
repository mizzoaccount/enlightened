
import { useRef } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const topics = [
  { title: 'Corporate', images: 38, image: '/assets/images/topic/topic-1.jpg' },
  { title: 'Birthdays', images: 63, image: '/assets/images/topic/topic-10.jpg' },
  { title: 'Corporate', images: 78, image: '/assets/images/topic/topic-3.jpg' },
  { title: 'Meetings', images: 125, image: '/assets/images/topic/topic-4.jpg' },
  { title: 'Corporate', images: 78, image: '/assets/images/topic/topic-7.jpg' },
  { title: 'Corporate', images: 125, image: '/assets/images/topic/topic-6.jpg' },
];

export default function TopicsTwo() {
  const sliderContainerRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!sliderContainerRef.current) return;

    const container = sliderContainerRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 20;
    const scrollAmount = itemWidth + gap;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  const cardVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
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

  return (
    <section aria-labelledby="topic-label" className="py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-lg p-6 shadow-lg md:grid md:grid-cols-[1fr_0.3fr] md:gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          {/* Image List */}
          <div className="overflow-hidden order-1">
            <motion.ul
              ref={sliderContainerRef}
              className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {topics.map((topic, index) => (
                <motion.li
                  key={index}
                  className="min-w-full flex-shrink-0 snap-start md:min-w-[calc(33.333%-20px)] lg:min-w-[calc(25%-20px)]"
                  variants={cardVariants}
                  whileHover={{ scale: 0.98 }}
                >
                  <motion.a 
                    href="#" 
                    className="block relative rounded-lg overflow-hidden"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"
                      variants={{
                        rest: { opacity: 0.6 },
                        hover: { opacity: 0.8 }
                      }}
                    />
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      width={507}
                      height={618}
                      className="w-full h-64 object-cover"
                    />
                    <motion.div 
                      className="absolute bottom-4 left-4"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -10 }
                      }}
                    >
                      <span className="text-white font-bold block">{topic.title}</span>
                      <span className="text-gray-300 text-sm">{topic.images} Images</span>
                    </motion.div>
                    <div className="absolute inset-0 border-2 border-transparent hover:border-[#d20ac3] transition-all rounded-lg" />
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          </div>

          {/* Text and Navigation Buttons */}
          <motion.div 
            className="order-2 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <motion.h2 
              id="topic-label" 
              className="text-3xl font-bold text-gray-900 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Media Production
            </motion.h2>
            <motion.p 
              className="text-gray-500 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
            </motion.p>
            <div className="flex gap-2.5 justify-end">
              <motion.button
                onClick={() => handleScroll('prev')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-blue-900 text-white grid place-items-center hover:bg-gradient-to-r from-[#d20ac3] to-[#efa110] transition-all"
                aria-label="Previous"
              >
                <IoArrowBack className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('next')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-blue-900 text-white grid place-items-center hover:bg-gradient-to-r from-[#d20ac3] to-[#efa110] transition-all"
                aria-label="Next"
              >
                <IoArrowForward className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
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
}
/*import { useRef } from 'react';
import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const topics = [
  { title: 'Coporate', images: 38, image: '/assets/images/topic/topic-1.jpg' },
  { title: 'Birthdays', images: 63, image: '/assets/images/topic/topic-10.jpg' },
  { title: 'Coporate', images: 78, image: '/assets/images/topic/topic-3.jpg' },
  { title: 'Meetings', images: 125, image: '/assets/images/topic/topic-4.jpg' },
  { title: 'Coporate', images: 78, image: '/assets/images/topic/topic-7.jpg' },
  { title: 'Coporate', images: 125, image: '/assets/images/topic/topic-6.jpg' },
];

export default function TopicsTwo() {
  const sliderContainerRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!sliderContainerRef.current) return;

    const container = sliderContainerRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 20;
    const scrollAmount = itemWidth + gap;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section aria-labelledby="topic-label" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-6 shadow-lg md:grid md:grid-cols-[1fr_0.3fr] md:gap-5">
          {/* Image List *
          <div className="overflow-hidden order-1">
            <ul ref={sliderContainerRef} className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
              {topics.map((topic, index) => (
                <li
                  key={index}
                  className="min-w-full flex-shrink-0 snap-start md:min-w-[calc(33.333%-20px)] lg:min-w-[calc(25%-20px)]"
                >
                  <a href="#" className="block relative rounded-lg overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent" />
                    <Image
                      src={topic.image}
                      alt={topic.title}
                      width={507}
                      height={618}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute bottom-4 left-4">
                      <span className="text-white font-bold block">{topic.title}</span>
                      <span className="text-gray-300 text-sm">{topic.images} Images</span>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Text and Navigation Buttons *
          <div className="order-2 text-right">
            <h2 id="topic-label" className="text-3xl font-bold text-gray-900 mb-3">Media Production</h2>
            <p className="text-gray-500 text-sm mb-6">
              Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
            </p>
            <div className="flex gap-2.5 justify-end">
              <button
                onClick={() => handleScroll('prev')}
                className="w-8 h-8 rounded-full bg-blue-900 text-white grid place-items-center hover:bg-gradient-to-r from-[#d20ac3] to-[#efa110] transition-all"
                aria-label="Previous"
              >
                <IoArrowBack className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleScroll('next')}
                className="w-8 h-8 rounded-full bg-blue-900 text-white grid place-items-center hover:bg-gradient-to-r from-[#d20ac3] to-[#efa110] transition-all"
                aria-label="Next"
              >
                <IoArrowForward className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
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
}*/
