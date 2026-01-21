'use client';

import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
import { useEffect, useRef } from 'react';
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const footerRef = useRef(null); // ✅ FIXED

  useEffect(() => {
    if (!footerRef.current) return;

    const anim = gsap.from(footerRef.current, {
      scrollTrigger: {
        trigger: footerRef.current,
        start: 'top 85%',
        toggleActions: 'play none none reverse',
      },
      opacity: 0,
      y: 40,
      duration: 1,
      ease: 'power3.out',
    });

    return () => {
      anim.kill();
      ScrollTrigger.getAll().forEach(t => t.kill());
    };
  }, []);

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'Menus / Price List', href: '/menus-/-price-list' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      href: 'https://www.instagram.com/bakemasters.in',
      icon: <FaInstagram />,
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/bakemasters.in',
      icon: <FaFacebookF />,
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/919068664222',
      icon: <FaWhatsapp />,
    },
  ];

  return (
    <footer
      ref={footerRef}
      className="w-full bg-black text-white pt-16 pb-10 relative overflow-hidden"
    >
      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-[#D4A373] via-[#A67C52] to-[#D4A373] opacity-70" />

      <div className="max-w-6xl mx-auto px-5 md:px-8">

        {/* Main Content */}
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl md:text-3xl font-serif font-bold mb-5">
            BAKEMASTERS™
          </h3>

          <p className="text-lg md:text-xl font-medium mb-3">
            Dehradun's Favourite Boutique Bakery
          </p>

          <div className="text-white/90 space-y-2">
            <p className="font-medium">CONTACT DETAILS / ADDRESS:</p>
            <p>
              BAKEMASTERS™<br />
              19, Rajpur Road, Kwality Complex,<br />
              Dehradun, Uttarakhand 248001 INDIA
            </p>

            <p className="mt-4 font-semibold">
              <a href="tel:+919068664222" className="hover:text-[#D4A373]">
                +91 90686 64222
              </a>{' '}
              •{' '}
              <a href="tel:+911352717771" className="hover:text-[#D4A373]">
                +91 135 271 7771
              </a>
            </p>
          </div>

          {/* Instagram */}
          <div className="mt-10">
            <p className="text-xl font-serif italic mb-4">
              SATISFY YOUR SWEET TOOTH ON INSTAGRAM
            </p>
            <a
              href="https://www.instagram.com/bakemasters.in"
              target="_blank"
              className="inline-flex items-center gap-2 text-[#D4A373] hover:text-white transition"
            >
              <FaInstagram /> Follow us on Instagram →
            </a>
          </div>
        </motion.div>

        {/* Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 mb-12">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="text-white/80 hover:text-[#D4A373]"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="w-24 h-0.5 bg-[#D4A373]/40 mx-auto mb-10" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-white/70">
          <p>
            © {currentYear} BakeMasters™ | Designed & Developed by RankMantra
          </p>

          <div className="flex gap-5">
            {socialLinks.map(social => (
              <motion.a
                key={social.name}
                href={social.href}
                target="_blank"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-[#D4A373] hover:text-[#6B3F2A]"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.92 }}
              >
                {social.icon}
              </motion.a>
            ))}
          </div>

          <p className="text-xs text-white/60">
            Baked with patience. Finished with grace. ❤️
          </p>
        </div>
      </div>
    </footer>
  );
}
