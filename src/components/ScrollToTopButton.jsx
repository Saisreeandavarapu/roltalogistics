import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 350) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll back to top of page"
      className={`fixed bottom-5 left-5 z-40 p-2.5 bg-[#111827]/90 hover:bg-[#2567A8] text-white border border-gray-700 shadow-md cursor-pointer transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-[#F6DE50] ${
        showButton
          ? 'opacity-100 scale-100 pointer-events-auto'
          : 'opacity-0 scale-90 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5 text-[#F6DE50]" />
    </button>
  );
}
