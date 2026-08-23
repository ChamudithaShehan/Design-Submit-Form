'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

export const BackToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div
      className={`fixed bottom-5 right-5 z-50 transition-all duration-500 ease-out transform ${
        isVisible
          ? 'opacity-100 scale-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 scale-75 translate-y-6 pointer-events-none'
      }`}
    >
      <button
        type="button"
        onClick={scrollToTop}
        title="Back to Top (ඉහළට යන්න)"
        aria-label="Back to Top"
        className="relative group p-3.5 rounded-full bg-brand-dark hover:bg-brand-rust text-white shadow-2xl border-2 border-orange-400/50 hover:border-orange-300 transition-all duration-300 transform hover:scale-110 active:scale-95 cursor-pointer flex items-center justify-center"
      >
        {/* Subtle Ambient Pulse Glow Ring */}
        <span className="absolute inset-0 rounded-full bg-amber-400/25 animate-ping pointer-events-none group-hover:bg-amber-400/40" />

        {/* Animated Up Arrow Icon */}
        <ArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110" />
      </button>
    </div>
  );
};
