'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { use } from 'react'; // Import the use hook
import { FaRegImages, FaChevronLeft, FaSearch, FaDownload, FaHeart } from 'react-icons/fa';

// Mock data - replace with your actual data fetching
const galleries = {
  'corporate-events': {
    title: 'Corporate Events',
    count: 38,
    images: Array(38).fill(null).map((_, i) => ({
      id: i + 1,
      src: `https://source.unsplash.com/random/300x${300 + Math.floor(Math.random() * 300)}/?corporate,event,${i}`,
      width: 300,
      height: 300 + Math.floor(Math.random() * 300),
      likes: Math.floor(Math.random() * 100),
      downloads: Math.floor(Math.random() * 50)
    }))
  },
  'birthday-celebrations': {
    title: 'Birthday Celebrations',
    count: 63,
    images: Array(63).fill(null).map((_, i) => ({
      id: i + 1,
      src: `https://source.unsplash.com/random/300x${300 + Math.floor(Math.random() * 300)}/?birthday,party,${i}`,
      width: 300,
      height: 300 + Math.floor(Math.random() * 300),
      likes: Math.floor(Math.random() * 100),
      downloads: Math.floor(Math.random() * 50)
    }))
  },
  // Add other galleries...
};

export default function GalleryPage({ params }: { params: Promise<{ topic: string }> }) {
  const router = useRouter();
  const [gallery, setGallery] = useState<{
    title: string;
    count: number;
    images: Array<{
      id: number;
      src: string;
      width: number;
      height: number;
      likes: number;
      downloads: number;
    }>;
  } | null>(null);
  const [selectedImage, setSelectedImage] = useState<null | {
    id: number;
    src: string;
    likes: number;
    downloads: number;
  }>(null);

  // Unwrap the params promise
  const { topic } = use(params);

  useEffect(() => {
    // Now use the unwrapped topic value
    const galleryData = galleries[topic as keyof typeof galleries];
    if (galleryData) {
      setGallery(galleryData);
    } else {
      router.push('/');
    }
  }, [topic, router]);

  if (!gallery) {
    return (
      <div className="flex items-center justify-center h-screen bg-gradient-to-b from-white to-blue-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-[#d20ac3] border-t-transparent rounded-full"
        />
      </div>
    );
  }

  // Pinterest-style masonry layout
  const columns = 4;
  const columnHeights = new Array(columns).fill(0);
  const columnImages: Array<Array<typeof gallery.images[0]>> = new Array(columns).fill(null).map(() => []);

  gallery.images.forEach((image) => {
    const shortestColumnIndex = columnHeights.indexOf(Math.min(...columnHeights));
    columnImages[shortestColumnIndex].push(image);
    columnHeights[shortestColumnIndex] += image.height / image.width;
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    }
  };

  return (
    <div className="relative bg-gradient-to-b from-white to-blue-50 min-h-screen">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-purple-100 rounded-full filter blur-3xl opacity-20"></div>
        <div className="absolute bottom-1/3 right-20 w-80 h-80 bg-pink-100 rounded-full filter blur-3xl opacity-20"></div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-12 pb-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.button
            onClick={() => router.back()}
            whileHover={{ x: -5 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-blue-900 font-medium mb-6"
          >
            <FaChevronLeft className="text-[#d20ac3]" />
            Back to Gallery
          </motion.button>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-blue-900 mb-2"
          >
            <span className="bg-gradient-to-r from-blue-900 to-purple-600 bg-clip-text text-transparent">
              {gallery.title}
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-4 text-blue-900/80"
          >
            <FaRegImages className="text-[#d20ac3]" />
            <span>{gallery.count} Professional Shots</span>
          </motion.div>
        </div>
      </header>

      {/* Main Gallery */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pb-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {columnImages.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-4">
              {column.map((image) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  whileHover="hover"
                  className="relative rounded-xl overflow-hidden shadow-lg cursor-pointer group"
                  onClick={() => setSelectedImage(image)}
                >
                  <Image
                    src={image.src}
                    alt={`${gallery.title} image ${image.id}`}
                    width={image.width}
                    height={image.height}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <div className="flex justify-between text-white text-sm">
                      <div className="flex items-center gap-2">
                        <FaHeart />
                        <span>{image.likes}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FaDownload />
                        <span>{image.downloads}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ))}
        </motion.div>
      </main>

      {/* Image Modal */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0.9 }}
            className="relative max-w-6xl w-full max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white hover:text-[#d20ac3] transition-colors"
            >
              Close
            </button>
            
            <div className="bg-white rounded-xl overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-2/3 h-[70vh] md:h-auto relative">
                <Image
                  src={selectedImage.src}
                  alt={`${gallery.title} image ${selectedImage.id}`}
                  fill
                  className="object-contain"
                />
              </div>
              
              <div className="md:w-1/3 p-6 bg-gray-50 flex flex-col">
                <h2 className="text-xl font-bold text-blue-900 mb-4">
                  {gallery.title} #{selectedImage.id}
                </h2>
                
                <div className="flex gap-4 mb-6">
                  <div className="flex items-center gap-2 text-blue-900/80">
                    <FaHeart className="text-[#d20ac3]" />
                    <span>{selectedImage.likes} Likes</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-900/80">
                    <FaDownload className="text-[#d20ac3]" />
                    <span>{selectedImage.downloads} Downloads</span>
                  </div>
                </div>
                
                <div className="mt-auto space-y-4">
                  <button className="w-full bg-gradient-to-r from-blue-900 to-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:shadow-lg transition-all">
                    <FaDownload /> Download
                  </button>
                  <button className="w-full bg-white border border-blue-900 text-blue-900 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-blue-50 transition-all">
                    <FaSearch /> View Full Resolution
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
}