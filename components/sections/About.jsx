'use client';

import { motion } from 'framer-motion';
import { FaLeaf, FaBirthdayCake, FaHeart } from 'react-icons/fa';

export default function About() {
  const cakeImages = [
    'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800',
    'https://images.pexels.com/photos/15366687/pexels-photo-15366687/free-photo-of-a-close-up-shot-of-delicious-cakes-in-a-cake-display-chiller.jpeg?auto=compress&cs=tinysrgb&w=800',
    'https://images.unsplash.com/photo-1651346851254-a1c60422b0d7?auto=format&fit=crop&q=80&w=800',
    'https://images.pexels.com/photos/30208654/pexels-photo-30208654.jpeg?auto=compress&cs=tinysrgb&w=800',
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: 'easeOut' },
    },
  };

  const stagger = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  return (
    <section
      id="about"
      className="w-full py-28 md:py-28 px-5 md:px-8 bg-[#fdfaf5]"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-24 items-center">

          {/* LEFT CONTENT */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-8"
          >
            <motion.div variants={fadeUp}>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-extrabold text-[#6b3f2a]">
                Our Story
              </h2>
              <div className="w-20 h-1.5 bg-accent mt-4 rounded-full" />
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              BakeMasters was born from a simple belief — that every celebration
              deserves something truly special. What began as a home kitchen
              experiment in Dehradun soon grew into a boutique bakery loved by
              families and dessert lovers alike.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              We blend traditional baking techniques with modern creativity,
              crafting cakes and pastries that are rich in flavor, balanced in
              sweetness, and visually stunning. Every ingredient is carefully
              sourced and every recipe refined over time.
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed"
            >
              From intimate birthdays to grand celebrations, our kitchen pours
              heart, skill, and passion into every creation that leaves our oven.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6"
            >
              <div className="flex items-center gap-3">
                <FaLeaf className="text-accent text-2xl" />
                <span className="font-semibold text-lg">Premium Ingredients</span>
              </div>
              <div className="flex items-center gap-3">
                <FaBirthdayCake className="text-accent text-2xl" />
                <span className="font-semibold text-lg">Artisan Crafted</span>
              </div>
              <div className="flex items-center gap-3">
                <FaHeart className="text-accent text-2xl" />
                <span className="font-semibold text-lg">Baked with Love</span>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="space-y-14"
          >
            <motion.div
              variants={stagger}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {cakeImages.map((src, i) => (
                <motion.div
                  key={i}
                  variants={{
                    hidden: { opacity: 0, scale: 0.95 },
                    visible: {
                      opacity: 1,
                      scale: 1,
                      transition: { duration: 0.6 },
                    },
                  }}
                  className="relative aspect-square rounded-2xl overflow-hidden shadow-lg bg-white"
                >
                  <img
                    src={src}
                    alt={`Cake ${i + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-6"
            >
              {[
                { num: '10+', label: 'Years of Baking' },
                { num: '1000+', label: 'Happy Customers' },
              ].map(stat => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-7 text-center shadow-md"
                >
                  <p className="text-4xl md:text-5xl font-bold text-[#6B3F2A] ">{stat.num}</p>
                  <p className="text-muted-foreground mt-2 text-lg">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
