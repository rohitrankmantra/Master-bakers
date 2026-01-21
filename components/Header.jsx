// components/sections/Header.jsx
'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import * as THREE from 'three';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const canvasRef = useRef(null);

  /* ================= SCROLL ================= */
  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 120], [96, 72]);
  const logoScale = useTransform(scrollY, [0, 120], [1, 0.88]);
  const bgOpacity = useTransform(scrollY, [0, 120], [0, 0.94]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* ================= THREE PARTICLES ================= */
  useEffect(() => {
    if (!canvasRef.current) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      200
    );

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
    });

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

    return () => {
      window.removeEventListener('resize', resize);
      renderer.dispose();
    };
  }, []);

  const navLinks = ['Home', 'Menu', 'Gallery', 'About', 'Contact'];

  /* ================= MENU ANIMATIONS ================= */
  const menuVariants = {
    hidden: { opacity: 0, y: '100%' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.08,
      },
    },
    exit: {
      opacity: 0,
      y: '100%',
      transition: { duration: 0.5, ease: 'easeInOut' },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 120, damping: 18 },
    },
  };

  return (
    <>
      {/* ================= HEADER ================= */}
      <motion.header
        style={{ height: headerHeight }}
        className="fixed top-0 left-0 right-0 z-50"
      >
        <motion.div
          style={{ opacity: bgOpacity }}
          className="absolute inset-0  h-28  bg-[#2a150a]/95 backdrop-blur-xl shadow-2xl"
        />

        <canvas
          ref={canvasRef}
          className="absolute inset-0 pointer-events-none"
          style={{ opacity: scrolled ? 0.25 : 0.55 }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Left */}
          <motion.span
            className="text-white font-serif text-lg sm:text-2xl tracking-wider"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Our Cakes
          </motion.span>

          {/* Center Logo */}
          <motion.div
            style={{ scale: logoScale }}
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-16 h-16 sm:w-32 sm:h-32 mt-4"
          >
            <Image
              src="/logo-white.png"
              alt="Cake Haven Logo"
              fill
              className="object-contain drop-shadow-2xl"
              priority
            />
          </motion.div>

          {/* Menu Button */}
          <motion.button
            onClick={() => setMenuOpen(true)}
            className="text-amber-100 hover:text-amber-300 text-4xl"
            whileTap={{ scale: 0.88 }}
            aria-label="Open menu"
          >
            <HiMenuAlt3 />
          </motion.button>
        </div>
      </motion.header>

      {/* ================= FULLSCREEN MENU ================= */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-999 bg-linear-to-br from-[#2a150a] via-[#351c0f] to-[#3d1f0f] flex items-center justify-center"
            variants={menuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {/* NAV */}
            <nav className="flex flex-col gap-10 sm:gap-12 text-center">
              {navLinks.map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  variants={itemVariants}
                  className="
                    group
                    block
                    px-10 py-3
                    text-4xl sm:text-5xl md:text-6xl
                    font-serif
                    tracking-wide
                    text-amber-50
                    transition-colors
                    hover:text-amber-300
                  "
                >
                  <span className="relative">
                    {item}
                    <span className="absolute left-0 -bottom-2 h-0.5 w-0 bg-amber-300 transition-all duration-500 group-hover:w-full" />
                  </span>
                </motion.a>
              ))}
            </nav>

            {/* Close */}
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
