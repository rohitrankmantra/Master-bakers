// app/page.jsx   or   components/HomePage.jsx
'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Sirf cake working / decorating videos (free from Pexels & Mixkit)
const heroVideos = [
  {
    url: '/hero1.mp4',
    // Pastry chef applying chocolate ganache on cake (close-up working)
  },
   {
    url: '/hero2.mp4',
    // Pastry chef applying chocolate ganache on cake (close-up working)
  },

];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loaded, setLoaded] = useState({});
  const videoRefs = useRef([]);

  // Har 8 seconds mein next video (thoda lamba feel ke liye)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroVideos.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  // Current video play/restart
  useEffect(() => {
    const vid = videoRefs.current[currentIndex];
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {});
    }
  }, [currentIndex]);

  const variants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { duration: 1.8, ease: 'easeOut' } },
    exit: { opacity: 0, transition: { duration: 1.2, ease: 'easeIn' } },
  };

  return (
    <main className="min-h-screen bg-black">
      <section className="relative w-full h-screen overflow-hidden">
        <AnimatePresence initial={false} mode="wait">
          <motion.div
            key={currentIndex}
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <video
                ref={(el) => (videoRefs.current[currentIndex] = el)}
                autoPlay
                muted
                loop
                playsInline
                onLoadedData={() => setLoaded((prev) => ({ ...prev, [currentIndex]: true }))}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ${
                  loaded[currentIndex] ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <source src={heroVideos[currentIndex].url} type="video/mp4" />
              </video>

              {/* Bahut halka dark overlay taaki video pop kare (optional – remove kar sakte ho) */}
              <div className="absolute inset-0 bg-black/15 pointer-events-none" />
            </div>
          </motion.div>
        </AnimatePresence>
      </section>
    </main>
  );
}