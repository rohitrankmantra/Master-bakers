// app/page.jsx   or   components/HomePage.jsx
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

// High-quality cake images from Pexels (free to use)
const heroSlides = [
  {
    url: 'https://images.pexels.com/photos/1126359/pexels-photo-1126359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Artisan Chocolate Delight',
    subtitle: 'Rich layers of ganache & Belgian chocolate',
  },
  {
    url: 'https://images.pexels.com/photos/1095550/pexels-photo-1095550.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Fresh Strawberry Dream',
    subtitle: 'Light vanilla sponge, mascarpone cream & fresh berries',
  },
  {
    url: 'https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Classic Red Velvet',
    subtitle: 'Cream cheese frosting & velvety cocoa crumb',
  },
  {
    url: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Elegant Wedding Cake',
    subtitle: 'Three-tier masterpiece for your special day',
  },
  {
    url: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    title: 'Tropical Mango Passion',
    subtitle: 'Exotic fruits & silky coconut mousse',
  },
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-slide every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5500);

    return () => clearInterval(interval);
  }, []);

  const slideVariants = {
    initial: { opacity: 0, scale: 1.05 },
    animate: { opacity: 1, scale: 1, transition: { duration: 1.4, ease: 'easeOut' } },
    exit: { opacity: 0, scale: 1.02, transition: { duration: 0.8, ease: 'easeIn' } },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut', delay: 0.3 },
    },
  };

  return (
    <main className="min-h-screen bg-Linear-to-b from-rose-50 via-amber-50/40 to-white">
      {/* ================= HERO SLIDER ================= */}
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={heroSlides[currentIndex].url}
                alt={heroSlides[currentIndex].title}
                fill
                className="object-cover brightness-[0.82] contrast-[1.05]"
                priority={currentIndex === 0}
                quality={85}
              />

              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/30 to-transparent" />

              {/* Text content */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 text-white z-10">
                <motion.h1
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-extrabold tracking-tight drop-shadow-2xl mb-4 md:mb-6"
                >
                  {heroSlides[currentIndex].title}
                </motion.h1>

                <motion.p
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  className="text-xl sm:text-2xl md:text-3xl font-light max-w-3xl mx-auto drop-shadow-lg"
                >
                  {heroSlides[currentIndex].subtitle}
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="mt-10"
                >
                  <button className="px-10 py-5 bg-amber-700 hover:bg-amber-800 text-white rounded-full text-lg font-medium shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    View This Creation →
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots / indicators */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex gap-4 z-20">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                i === currentIndex ? 'bg-amber-400 w-10' : 'bg-white/50 hover:bg-white/80'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </section>

    </main>
  );
}