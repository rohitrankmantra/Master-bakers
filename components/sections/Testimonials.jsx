'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
  {
    name: 'Priya Sharma',
    location: 'Dehradun',
    text: 'BakeMasters created the most stunning wedding cake for our special day. The taste and presentation were absolutely incredible!',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    location: 'Dehradun',
    text: 'Every time I visit, I discover something new and delicious. The pastries are so fresh and the quality is consistently amazing.',
    rating: 5,
  },
  {
    name: 'Ananya Gupta',
    location: 'Dehradun',
    text: 'Custom orders are their specialty! They brought my wildest cake ideas to life. Highly recommended for any celebration.',
    rating: 5,
  },
  {
    name: 'Vikram Patel',
    location: 'Dehradun',
    text: 'The attention to detail is remarkable. BakeMasters truly understands the art of baking. A gem in Dehradun!',
    rating: 5,
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  useEffect(() => {
    if (!autoplay) return;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoplay]);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
    setAutoplay(false);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setAutoplay(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const bgImage = 'https://thumbs.dreamstime.com/b/pink-two-tier-wedding-cake-flowers-blurred-background-banquet-hall-ai-generated-371842045.jpg';

  return (
    <section 
      className="w-full py-20 md:py-24 px-4 relative"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-[#FBF4EE]/80"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Section header */}
        <motion.div
          className="text-center mb-16 md:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-black text-[#6B3F2A] mb-4 text-balance">
            Hear From Our Happy Customers
          </h2>
          <p className="text-[#6B3F2A]/70 text-lg">
            Real stories from people who love BakeMasters
          </p>
        </motion.div>

        {/* Testimonial carousel */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Testimonial cards */}
          <div className="relative h-64 md:h-72">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className={`absolute inset-0 ${index === current ? 'pointer-events-auto' : 'pointer-events-none'}`}
                initial={{ opacity: 0, x: 20 }}
                animate={
                  index === current
                    ? { opacity: 1, x: 0 }
                    : { opacity: 0, x: -20 }
                }
                transition={{ duration: 0.5 }}
              >
                <motion.div
                  variants={itemVariants}
                  className="bg-white rounded-2xl p-8 md:p-10 shadow-md-soft h-full flex flex-col justify-between"
                >
                  {/* Stars */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-[#6B3F2A] fill-current"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-lg text-[#6B3F2A]/70 italic leading-relaxed">
                    "{testimonial.text}"
                  </p>

                  {/* Author */}
                  <div>
                    <p className="font-serif font-bold text-[#6B3F2A] text-lg">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-[#6B3F2A]">{testimonial.location}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center justify-between mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FBF4EE] hover:bg-[#6B3F2A]/20 transition-smooth shadow-md-soft"
            >
              <svg
                className="w-6 h-6 text-[#6B3F2A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </motion.button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => {
                    setCurrent(index);
                    setAutoplay(false);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    index === current ? 'bg-[#6B3F2A] w-8' : 'bg-[#6B3F2A]/20 w-2'
                  }`}
                  whileHover={{ scale: 1.2 }}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextSlide}
              className="flex items-center justify-center w-12 h-12 rounded-full bg-[#FBF4EE] hover:bg-[#6B3F2A]/20 transition-smooth shadow-md-soft"
            >
              <svg
                className="w-6 h-6 text-[#6B3F2A]"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}