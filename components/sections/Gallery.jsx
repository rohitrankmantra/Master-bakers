'use client';

import { useState } from 'react';

const galleryImages = [
    {
    url: 'https://images.pexels.com/photos/2337818/pexels-photo-2337818.jpeg',
    title: 'Elegant Pastry Display',
  },
    {
    url: 'https://images.pexels.com/photos/2144200/pexels-photo-2144200.jpeg',
    title: 'Golden Croissants',
  },
  {
    url: 'https://images.pexels.com/photos/15836165/pexels-photo-15836165.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Freshly Baked Cookies',
  },
  {
    url: 'https://images.pexels.com/photos/30208654/pexels-photo-30208654.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Artisan Layered Cake',
  },


  {
    url: 'https://images.pexels.com/photos/8101692/pexels-photo-8101692.jpeg',
    title: 'Chocolate Celebration Cake',
  },
  {
    url: 'https://images.pexels.com/photos/4858510/pexels-photo-4858510.jpeg',
    title: 'Custom Themed Dessert',
  },
  {
    url: 'https://images.pexels.com/photos/35583855/pexels-photo-35583855.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    title: 'Rustic Bakery Selection',
  },
  {
    url: 'https://images.pexels.com/photos/375904/pexels-photo-375904.jpeg',
    title: 'Fresh Bakery Biscuits',
  },
    {
    url: 'https://images.pexels.com/photos/34492378/pexels-photo-34492378.jpeg',
    title: 'Rushed Bakery Selection',
  },
];

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(galleryImages[0]);
  const [showLightbox, setShowLightbox] = useState(false);

  return (
    <section
      id="gallery"
      className="w-full py-24 md:py-28 bg-[#FBF4EE]"
    >
      <div className="max-w-7xl mx-auto px-5 md:px-10">

        {/* Header with underline */}
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl md:text-5xl lg:text-6xl font-serif font-extrabold text-[#6B3F2A] relative pb-3">
            Our Gallery
            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-[#6B3F2A] rounded-full"></span>
          </h2>
          <p className="mt-5 text-base md:text-lg text-[#6B3F2A]/70 max-w-2xl mx-auto leading-relaxed">
            A visual journey through our handcrafted desserts, baked with passion and timeless artistry.
          </p>
        </div>

        {/* Main Image */}
        <div className="relative mb-8">
          <div
            className="w-full aspect-4/3 md:aspect-4/3 rounded-xl overflow-hidden cursor-pointer shadow-md hover:shadow-xl transition-all duration-300"
            onClick={() => setShowLightbox(true)}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Thumbnails Horizontal Scroll */}
        <div className="relative">
          {/* Fade edges for film reel feel */}
          <div className="absolute inset-y-0 left-0 w-16 bg-linear-to-r from-[#FBF4EE] to-transparent z-10 pointer-events-none hidden md:block"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-linear-to-l from-[#FBF4EE] to-transparent z-10 pointer-events-none hidden md:block"></div>

          <div className="overflow-x-auto scrollbar-custom snap-x snap-mandatory scroll-smooth">
            <div className="flex gap-4 py-4 px-2 min-w-max">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  onClick={() => setSelectedImage(image)}
                  className={`group shrink-0 w-24 h-24 md:w-32 md:h-32 rounded-lg overflow-hidden cursor-pointer shadow-sm hover:shadow-md transition-all duration-300 snap-center ${
                    selectedImage.url === image.url ? 'border-2 border-[#6B3F2A]' : ''
                  }`}
                >
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile swipe hint */}
        <div className="text-center mt-6 text-sm text-[#6B3F2A]/70 md:hidden">
          Swipe left/right to explore more →
        </div>
      </div>

      {/* Lightbox */}
      {showLightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setShowLightbox(false)}
        >
          <div
            className="relative max-w-5xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage.url}
              alt={selectedImage.title}
              className="w-full max-h-[85vh] object-contain rounded-lg"
            />
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-4 right-4 bg-white/90 hover:bg-white rounded-full px-4 py-2 shadow-md transition"
            >
              ✕
            </button>
            <p className="absolute bottom-4 left-4 right-4 text-white text-lg font-medium bg-black/50 py-2 px-4 rounded">
              {selectedImage.title}
            </p>
          </div>
        </div>
      )}

      {/* Custom Scrollbar - matches your theme */}
      <style jsx global>{`
        .scrollbar-custom {
          scrollbar-width: thin;
          scrollbar-color: #6B3F2A #FBF4EE;
        }
        .scrollbar-custom::-webkit-scrollbar {
          height: 8px;
        }
        .scrollbar-custom::-webkit-scrollbar-track {
          background: #FBF4EE;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb {
          background: #6B3F2A;
          border-radius: 10px;
        }
        .scrollbar-custom::-webkit-scrollbar-thumb:hover {
          background: #8B5A2B;
        }
      `}</style>
    </section>
  );
}