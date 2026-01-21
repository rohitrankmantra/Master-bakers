"use client"

import dynamic from 'next/dynamic';

// Lazy load heavy components

const Hero = dynamic(() => import('@/components/sections/Hero'), {
  ssr: false,
});
const Features = dynamic(() => import('@/components/sections/Features'), {
  ssr: false,
});
const Gallery = dynamic(() => import('@/components/sections/Gallery'), {
  ssr: false,
});
const About = dynamic(() => import('@/components/sections/About'), {
  ssr: false,
});
const Testimonials = dynamic(() => import('@/components/sections/Testimonials'), {
  ssr: false,
});
const Contact = dynamic(() => import('@/components/sections/Contact'), {
  ssr: false,
});


export default function Home() {
  return (
    <main className="w-full bg-white">
      <Hero />
      <About />

      <Features />
      <Gallery />
      <Testimonials />
      <Contact />
    </main>
  );
}
