import React, { useState, useEffect } from 'react';
import img1 from '../assets/images/hero_truck_highway.png';
import img2 from '../assets/images/hero_truck_warehouse.png';
import img3 from '../assets/images/hero_truck_loading.png';
import img4 from '../assets/images/hero_truck_sunset.png';
import img5 from '../assets/images/hero_truck_longhaul.png';

export default function HeroCarousel() {
  const images = [
    { src: img1, alt: 'Heavy freight truck on Indian national highway' },
    { src: img2, alt: 'Long-haul truck at logistics warehouse hub' },
    { src: img3, alt: 'Truck loading full cargo load at terminal' },
    { src: img4, alt: 'Cargo truck travelling during golden hour sunset' },
    { src: img5, alt: 'Heavy cargo truck travelling on long highway route' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // 6 second interval

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] lg:h-[540px] bg-gray-900 overflow-hidden border border-gray-200 group">
      {/* Images with crossfade & gentle zoom */}
      {images.map((img, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <img
            src={img.src}
            alt={img.alt}
            className={`w-full h-full object-cover transform transition-transform duration-[7000ms] ease-out ${
              idx === currentIndex ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Subtle gradient overlay for image protection */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>
        </div>
      ))}

      {/* Operational Overlays & Badges */}
      <div className="absolute top-4 left-4 z-20 flex flex-wrap gap-2">
        <span className="px-3 py-1 bg-[#111827]/90 text-[#F6DE50] text-xs font-bold uppercase tracking-wider backdrop-blur-xs border border-gray-700">
          PAN INDIA
        </span>
        <span className="px-3 py-1 bg-[#2567A8]/95 text-white text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
          FTL
        </span>
        <span className="px-3 py-1 bg-white/95 text-[#111827] text-xs font-bold uppercase tracking-wider backdrop-blur-xs">
          TRUCK TRANSPORT
        </span>
      </div>

      {/* Slide Counter & Indicators */}
      <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-3 bg-[#111827]/85 text-white px-3.5 py-1.5 backdrop-blur-xs border border-gray-700 text-xs font-mono">
        <span className="font-bold text-[#F6DE50]">0{currentIndex + 1}</span>
        <span className="text-gray-500">/</span>
        <span className="text-gray-300">0{images.length}</span>

        {/* Minimal dot indicators */}
        <div className="flex items-center space-x-1.5 ml-2 border-l border-gray-700 pl-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentIndex(i)}
              className={`w-2 h-2 transition-all duration-300 ${
                i === currentIndex
                  ? 'bg-[#F6DE50] w-4'
                  : 'bg-gray-500 hover:bg-gray-300'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
