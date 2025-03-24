
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

export default function Topics() {
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
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
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
    <section aria-labelledby="topic-label" className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-xl p-8 shadow-2xl md:grid md:grid-cols-[0.3fr_1fr] md:gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="mb-8 md:mb-0">
            <motion.h2 
              id="topic-label" 
              className="text-4xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Events Gallery
            </motion.h2>
            <motion.p 
              className="text-gray-600 text-lg mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              A visual showcase of unforgettable moments. From corporate gatherings to community celebrations, we capture the essence of every occasion. This space reflects our commitment to excellence, creativity, and meaningful connections.
            </motion.p>
            <div className="flex gap-3">
              <motion.button
                onClick={() => handleScroll('prev')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-blue-900 text-white grid place-items-center transition-all hover:bg-blue-700"
                aria-label="Previous"
              >
                <IoArrowBack className="w-5 h-5" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('next')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 rounded-full bg-blue-900 text-white grid place-items-center transition-all hover:bg-blue-700"
                aria-label="Next"
              >
                <IoArrowForward className="w-5 h-5" />
              </motion.button>
            </div>
          </div>

          <div className="overflow-hidden relative">
            <motion.ul
              ref={sliderContainerRef}
              className="flex gap-6 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
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
                  whileHover="hover"
                >
                  <motion.a 
                    href="#" 
                    className="block relative rounded-xl overflow-hidden group"
                    whileHover="hover"
                    initial="rest"
                  >
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent"
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
                      className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                    <motion.div 
                      className="absolute bottom-6 left-6"
                      variants={{
                        rest: { y: 0 },
                        hover: { y: -10 }
                      }}
                    >
                      <span className="text-white font-bold text-xl block">{topic.title}</span>
                      <span className="text-gray-200 text-sm">{topic.images} Images</span>
                    </motion.div>
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-[#d20ac3] transition-all rounded-xl" />
                  </motion.a>
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

 /* return (
    <section aria-labelledby="topic-label" className="bg-white py-12">
      <div className="container mx-auto px-4">
        <motion.div 
          className="bg-white rounded-lg p-6 shadow-lg md:grid md:grid-cols-[0.3fr_1fr] md:gap-5"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4 md:mb-0">
            <motion.h2 
              id="topic-label" 
              className="text-3xl font-bold text-gray-900 mb-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Events Gallery
            </motion.h2>
            <motion.p 
              className="text-gray-500 text-sm mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
             A visual showcase of unforgettable moments. From corporate gatherings to community celebrations, we capture the essence of every occasion. This space reflects our commitment to excellence, creativity, and meaningful connections.
            </motion.p>
            <div className="flex gap-2.5">
              <motion.button
                onClick={() => handleScroll('prev')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-blue-900 text-white grid place-items-center transition-all"
                aria-label="Previous"
              >
                <IoArrowBack className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => handleScroll('next')}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-8 h-8 rounded-full bg-blue-900 text-white grid place-items-center transition-all"
                aria-label="Next"
              >
                <IoArrowForward className="w-4 h-4" />
              </motion.button>
            </div>
          </div>

          <div className="overflow-hidden">
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
  );*/
}
/*import { useRef } from 'react';
import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const topics = [
  { title: 'Coporate',images: 38, image: '/assets/images/topic/topic-1.jpg' },
  { title: 'Birthdays',images: 63, image: '/assets/images/topic/topic-10.jpg' },
  { title: 'Coporate',images: 78, image: '/assets/images/topic/topic-3.jpg' },
  { title: 'Meetings',images: 125, image: '/assets/images/topic/topic-4.jpg' },
  { title: 'Coporate',images: 78, image: '/assets/images/topic/topic-7.jpg' },
  { title: 'Coporate',images: 125, image: '/assets/images/topic/topic-6.jpg' },
]; 

export default function Topics() {
  const sliderContainerRef = useRef<HTMLUListElement>(null);

  const handleScroll = (direction: 'prev' | 'next') => {
    if (!sliderContainerRef.current) return;

    const container = sliderContainerRef.current;
    const itemWidth = container.firstElementChild?.clientWidth || 0;
    const gap = 20; // Corresponds to gap-5 in Tailwind
    const scrollAmount = itemWidth + gap;

    container.scrollBy({
      left: direction === 'next' ? scrollAmount : -scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section aria-labelledby="topic-label" className="py-12">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-lg p-6 shadow-lg md:grid md:grid-cols-[0.3fr_1fr] md:gap-5">
          <div className="mb-4 md:mb-0">
            <h2 id="topic-label" className="text-3xl font-bold text-gray-900 mb-3">
              Hot Events
            </h2>
            <p className="text-gray-500 text-sm mb-6">
              Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
            </p>
            <div className="flex gap-2.5">
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

          <div className="overflow-hidden">
            <ul
              ref={sliderContainerRef}
              className="flex gap-5 overflow-x-auto hide-scrollbar snap-x snap-mandatory"
            >
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


{/*import Image from 'next/image';
import { IoArrowBack, IoArrowForward } from 'react-icons/io5';

const Topics = () => {
  const topics = [
    { 
      image: '/assets/images/topic-1.png',
      title: 'Sport',
      articles: '38 Articles'
    },
    { 
      image: '/assets/images/topic-2.png',
      title: 'Travel',
      articles: '63 Articles'
    },
    { 
      image: '/assets/images/topic-3.png',
      title: 'Design',
      articles: '78 Articles'
    },
    { 
      image: '/assets/images/topic-4.png',
      title: 'Movie',
      articles: '125 Articles'
    },
    { 
      image: '/assets/images/topic-5.png',
      title: 'Lifestyle',
      articles: '78 Articles'
    }
  ];

  return (
    <section className="py-20 bg-gray-50" id="topics" aria-labelledby="topic-label">
      <div className="container mx-auto px-4">
        <div className="bg-white rounded-xl shadow-lg p-6">
          {/* Header *
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
            <div className="max-w-md">
              <h2 className="text-3xl font-bold mb-4" id="topic-label">Hot topics</h2>
              <p className="text-gray-600">
                Don't miss out on the latest news about Travel tips, Hotels review, Food guide...
              </p>
            </div>
            
            {/* Navigation Buttons *
            <div className="flex gap-3">
              <button 
                className="w-8 h-8 rounded-full bg-prussian-blue text-white flex items-center justify-center hover:bg-gradient-1 transition-colors"
                aria-label="Previous"
              >
                <IoArrowBack size={18} />
              </button>
              <button 
                className="w-8 h-8 rounded-full bg-prussian-blue text-white flex items-center justify-center hover:bg-gradient-1 transition-colors"
                aria-label="Next"
              >
                <IoArrowForward size={18} />
              </button>
            </div>
          </div>

          {/* Slider *
          <div className="overflow-x-auto pb-4">
            <div className="flex gap-5 w-max">
              {topics.map((topic, index) => (
                <article key={index} className="min-w-[300px]">
                  <a href="#" className="block group relative rounded-xl overflow-hidden">
                    <div className="relative aspect-square">
                      <Image
                        src={topic.image}
                        alt={topic.title}
                        width={507}
                        height={618}
                        className="object-cover w-full h-full"
                      />
                      {/* Gradient Overlay *
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    </div>
                    
                    {/* Content *
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold mb-1 transition-colors group-hover:text-carolina-blue">
                        {topic.title}
                      </h3>
                      <p className="text-sm">{topic.articles}</p>
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Topics;*/}

