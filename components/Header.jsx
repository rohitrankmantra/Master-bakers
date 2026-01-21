// components/sections/Header.jsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
import { HiMenuAlt3, HiX, HiSearch, HiShoppingCart } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 200);

    const renderer = new THREE.WebGLRenderer({ canvas: canvasRef.current, alpha: true });
    renderer.setClearColor(0x000000, 0); // fully transparent background
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));

    const count = 200;
    const positions = new Float32Array(count * 3);

    for (let i = 0; i < count * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 60;
      positions[i + 1] = Math.random() * 40;
      positions[i + 2] = (Math.random() - 0.5) * 60;
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const material = new THREE.PointsMaterial({
      color: 0xfff1d6,
      size: 0.15,
      transparent: true,
      opacity: 0.55,
      blending: THREE.AdditiveBlending,
    });

    const points = new THREE.Points(geometry, material);
    scene.add(points);

    camera.position.z = 22;

    const animate = () => {
      points.rotation.y += 0.00035;
      points.rotation.x += 0.00015;
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };
    animate();

    const resize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const navLinks = ['Home', 'Menu', 'Gallery', 'About', 'Contact'];

  const menuVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 } },
    exit: { opacity: 0, y: '100%', transition: { duration: 0.5, ease: 'easeInOut' } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 120, damping: 18 } },
  };

  return (
    <>
      <header className="relative w-full overflow-hidden pointer-events-none">
        {/* Particles - fully transparent bg */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none opacity-0 bg-transparent"
        />

        {/* Header content - NO background color */}
        <div className="relative z-20 max-w-7xl mx-auto px-6 h-24 sm:h-28 flex items-center justify-between pointer-events-auto">
          {/* Left: Search + Cart */}
          <div className="flex items-center gap-6 sm:gap-8">
            <motion.button
              className="text-black hover:text-amber-300 text-2xl sm:text-3xl transition-colors drop-shadow-md"
              whileTap={{ scale: 0.9 }}
              aria-label="Search"
            >
              <HiSearch />
            </motion.button>

            <motion.button
              className="text-black hover:text-amber-300 text-2xl sm:text-3xl transition-colors drop-shadow-md"
              whileTap={{ scale: 0.9 }}
              aria-label="Cart"
            >
              <HiShoppingCart />
            </motion.button>
          </div>

          {/* Center: Logo */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-36 md:h-36"
          >
            <Image
              src="/logo.png"
              alt="BakeMasters Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Right: Menu */}
          <motion.button
            onClick={() => setMenuOpen(true)}
            className="text-black hover:text-amber-300 text-3xl sm:text-4xl transition-colors drop-shadow-md"
            whileTap={{ scale: 0.88 }}
            aria-label="Open menu"
          >
            <HiMenuAlt3 />
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-999 bg-linear-to-br from-[#2a150a] via-[#351c0f] to-[#3d1f0f] flex items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <nav className="flex flex-col gap-10 sm:gap-12 text-center">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  variants={itemVariants}
                  className="group block px-10 py-3 text-4xl sm:text-5xl md:text-6xl font-serif tracking-wide text-amber-50 transition-colors hover:text-amber-300"
                >
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-amber-300 transition-all duration-500 group-hover:w-full" />
                  </span>
                </motion.a>
              ))}
            </nav>

            <motion.button
              onClick={() => setMenuOpen(false)}
              className="absolute top-8 right-8 text-amber-100 text-6xl"
              whileHover={{ scale: 1.15, rotate: 90 }}
              aria-label="Close menu"
            >
              <HiX />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}