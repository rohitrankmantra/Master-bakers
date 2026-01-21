'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import {
  FaBirthdayCake,
  FaBreadSlice,
  FaMagic,
  FaArrowLeft,
  FaArrowRight,
} from 'react-icons/fa';

const features = [
  {
    title: 'Artisan Celebration Cakes',
    description:
      'Multi-layer celebration cakes handcrafted with premium chocolate, fresh fruits, and elegant buttercream finishes for weddings, birthdays, and anniversaries.',
    icon: FaBirthdayCake,
    image:
      'https://images.pexels.com/photos/15836165/pexels-photo-15836165.jpeg',
  },
  {
    title: 'Freshly Baked Pastries',
    description:
      'Golden croissants, fruit tarts, éclairs, and delicate pastries baked fresh daily using authentic techniques and rich butter.',
    icon: FaBreadSlice,
    image:
      'https://images.unsplash.com/photo-1608198093002-ad4e005484ec?auto=format&fit=crop&w=1200&q=80',
  },
  {
    title: 'Custom Dessert Creations',
    description:
      'Personalised cakes, cupcakes, dessert tables, and themed treats designed to perfectly match your celebration and vision.',
    icon: FaMagic,
    image:
      'https://images.pexels.com/photos/35583855/pexels-photo-35583855.jpeg',
  },
];

export default function Features() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [paused, setPaused] = useState(false);

  const paginate = (dir) => {
    setDirection(dir);
    setIndex((prev) => (prev + dir + features.length) % features.length);
  };

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => paginate(1), 5200);
    return () => clearInterval(timer);
  }, [index, paused]);

  const slideVariants = {
    enter: (dir) => ({
      x: dir > 0 ? '100%' : '-100%',
      opacity: 0,
    }),
    center: { x: 0, opacity: 1 },
    exit: (dir) => ({
      x: dir > 0 ? '-100%' : '100%',
      opacity: 0,
    }),
  };

  return (
    <section
      id="specialties"
      className="w-full py-20 md:py-20 px-5 bg-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#6B3F2A]">
            Our Signature Creations
          </h2>
          <p className="mt-5 text-lg text-muted-foreground max-w-3xl mx-auto">
            Handcrafted desserts made with passion, premium ingredients, and timeless artistry.
          </p>
        </motion.div>

        {/* SLIDER */}
        <div
          className="relative max-w-6xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          <div className="overflow-hidden rounded-3xl bg-white shadow-lg border border-[#6B3F2A]/10">
            <div className="relative h-105 md:h-120">
              <AnimatePresence initial={false} custom={direction}>
                <motion.div
                  key={index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: 'spring', stiffness: 260, damping: 30 },
                    opacity: { duration: 0.4 },
                  }}
                  className="absolute inset-0 flex items-center justify-center px-6 md:px-14"
                >
                  <FeatureCard item={features[index]} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* ARROWS */}
          <button
            onClick={() => paginate(-1)}
            className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md hover:scale-105 transition"
          >
            <FaArrowLeft className="text-xl text-[#6B3F2A]" />
          </button>

          <button
            onClick={() => paginate(1)}
            className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 bg-white p-4 rounded-full shadow-md hover:scale-105 transition"
          >
            <FaArrowRight className="text-xl text-[#6B3F2A]" />
          </button>

          {/* DOTS */}
          <div className="flex justify-center gap-3 mt-6">
            {features.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  setDirection(i > index ? 1 : -1);
                  setIndex(i);
                }}
                className={`w-3 h-3 rounded-full transition ${
                  i === index
                    ? 'bg-[#6B3F2A] scale-125'
                    : 'bg-[#6B3F2A]/30 hover:bg-[#6B3F2A]/60'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* CARD */
function FeatureCard({ item }) {
  const Icon = item.icon;

  return (
    <div className="grid md:grid-cols-2 gap-10 items-center">
      {/* IMAGE */}
      <motion.div
        whileHover={{ scale: 1.04 }}
        transition={{ duration: 0.4 }}
        className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-md"
      >
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
      </motion.div>

      {/* CONTENT */}
      <div className="space-y-5 text-center md:text-left">
        <div className="flex justify-center md:justify-start">
          <div className="w-20 h-20 rounded-full bg-accent/15 flex items-center justify-center shadow-md">
            <Icon className="text-4xl text-accent" />
          </div>
        </div>

        <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-[#6B3F2A]">
          {item.title}
        </h3>

        <p className="text-muted-foreground leading-relaxed text-base md:text-lg">
          {item.description}
        </p>
      </div>
    </div>
  );
}
