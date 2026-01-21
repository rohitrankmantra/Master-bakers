# BakeMasters Homepage Redesign

A premium, modern homepage for BakeMasters - Dehradun's favourite boutique bakery. Built with Next.js, Tailwind CSS, Framer Motion, GSAP ScrollTrigger, and Three.js.

## 🎯 Project Overview

This is a complete redesign of the BakeMasters website featuring:

- **Modern Premium Aesthetic**: Soft luxury design with cream, warm browns, and gold accents
- **Smooth Animations**: Framer Motion for micro-interactions and GSAP for scroll-based effects
- **3D Elements**: Three.js floating cake animation in the hero section
- **Responsive Design**: Mobile-first approach with smooth breakpoints
- **Performance Optimized**: Lazy loading, dynamic imports, Vercel-ready

## 🛠 Tech Stack

- **Framework**: Next.js 16 (JavaScript)
- **Styling**: Tailwind CSS v4
- **Animations**: 
  - Framer Motion 12.27.1 (component animations & micro-interactions)
  - GSAP 3.14.2 with ScrollTrigger (scroll-based effects)
- **3D Graphics**: Three.js 0.182.0
- **Deployment**: Vercel-optimized (free tier compatible)

## 📁 Project Structure

```
/app
  ├── layout.tsx          # Root layout with metadata & fonts
  ├── page.jsx            # Main page with component imports
  ├── globals.css         # Global styles & design tokens
  └── favicon.ico

/components
  ├── 3d/
  │   └── FloatingCake.jsx    # Three.js 3D cake component
  └── sections/
      ├── Header.jsx          # Navigation with glassmorphism
      ├── Hero.jsx            # Hero section with 3D object
      ├── Features.jsx        # Services cards with GSAP animations
      ├── Gallery.jsx         # Photo grid with lightbox modal
      ├── About.jsx           # Story section with animations
      ├── Testimonials.jsx    # Carousel with auto-play
      ├── Contact.jsx         # Form with animations
      └── Footer.jsx          # Footer with social links
```

## 🎨 Color Palette

- **Background**: #faf8f5 (Cream/Ivory)
- **Primary**: #3d2817 (Dark Chocolate)
- **Secondary**: #ede5d8 (Warm Beige)
- **Accent**: #d4a574 (Soft Gold)
- **Tertiary**: #f5e8e3 (Soft Pink)
- **Foreground**: #1a1410 (Near Black)

## 🚀 Features

### Hero Section
- Full-screen viewport with gradient background
- Three.js 3D floating cake that reacts to mouse movement
- Smooth fade-in animations using Framer Motion
- Scroll indicator with animated arrow

### Header/Navigation
- Sticky navigation that becomes glassmorphic on scroll
- Logo with subtle floating animation
- Mobile hamburger menu with slide-in animation
- Smooth scroll links to sections

### Features Section
- Three service cards (Artisan Cakes, Fresh Pastries, Custom Orders)
- Card hover animations with image zoom
- GSAP ScrollTrigger reveal on scroll
- Online images for each category

### Gallery
- Responsive grid layout (1/2/4 columns)
- Image reveal animations on scroll
- Click to open lightbox modal
- Modal with smooth transitions and close functionality

### About Section
- Split layout with text and image
- Slide animations on scroll (GSAP + Framer Motion)
- Floating accent box
- Statistics cards

### Testimonials
- Auto-scrolling carousel (pausable on interaction)
- Navigation buttons and dot indicators
- Star ratings
- Manual slide control

### Contact Section
- Contact information with icons
- Animated contact form
- Input focus states with scaling effect
- Social media links
- Address, phone numbers with clickable links

### Footer
- Multi-column layout with links
- Social media icons
- Copyright and legal links
- Scroll-triggered fade-in animation

## ⚡ Performance Optimizations

1. **Dynamic Imports**: All sections use `next/dynamic` with lazy loading
2. **Image Optimization**: Online URLs only (Unsplash/Pexels)
3. **GSAP ScrollTrigger**: Animations only trigger when visible
4. **Vercel Ready**: No heavy dependencies, serverless-friendly
5. **CSS Utilities**: Reusable Tailwind classes for animations

## 📱 Responsive Breakpoints

- Mobile: < 768px (single column, full-width)
- Tablet: 768px - 1024px (optimized layouts)
- Desktop: > 1024px (full grid layouts)

## 🎬 Animations

### Framer Motion (Component-level)
- Fade-in/slide animations on load
- Hover effects (scale, color, shadow)
- Staggered children animations
- Exit animations

### GSAP ScrollTrigger (Scroll-based)
- Element reveals on scroll
- Parallax-like effects
- Coordinated section animations
- Performance-optimized with lazy triggers

### Three.js
- Real-time 3D cake rendering
- Mouse-following rotation
- Gentle floating animation
- Lighting and shadows

## 🔧 Getting Started

### Installation

```bash
# Install dependencies (already configured)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

### Deployment to Vercel

```bash
# Vercel automatically detects Next.js
vercel deploy
```

## 📝 Customization

### Colors
Edit `/app/globals.css` CSS variables in `:root` selector:
```css
--primary: #3d2817;        /* Main brand color */
--accent: #d4a574;         /* Highlight color */
--secondary: #ede5d8;      /* Neutral accent */
```

### Content
Update text in each component file:
- `/components/sections/Hero.jsx` - Headline & CTA
- `/components/sections/Features.jsx` - Services
- `/components/sections/About.jsx` - Story
- `/components/sections/Contact.jsx` - Contact info

### Images
Replace image URLs in:
- `Features.jsx` - Feature images
- `Gallery.jsx` - Gallery images
- `About.jsx` - Story image
- Online sources: Unsplash, Pexels, CDN

## 📞 Contact Information

**BakeMasters**
- Address: 19, Rajpur Road, Kwality Complex, Dehradun 248001
- Phone: +91 9068664222 | +91 1352717771
- Social: Follow us on Instagram for updates and delights

## 📄 License

Copyright © 2024 BakeMasters | Dehradun - All Rights Reserved

---

Built with ❤️ using Next.js, Framer Motion, and GSAP
