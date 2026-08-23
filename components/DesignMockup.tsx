'use client';

import React from 'react';
import Image from 'next/image';
import { DesignItem } from '../data/designData';
interface DesignMockupProps {
  item: DesignItem;
  className?: string;
  isLarge?: boolean;
}

export const DesignMockup: React.FC<DesignMockupProps> = ({ item, className = '', isLarge = false }) => {
  const { code, type, nameEn } = item;

  if (type === 'logo') {
    return (
      <div className={`w-full relative overflow-hidden flex items-center justify-center rounded-xl bg-white shadow-md aspect-square ${className}`}>
        <Image 
          src={item.imageUrl || ''} 
          alt={nameEn} 
          fill
          sizes={isLarge ? "(max-width: 768px) 100vw, 500px" : "(max-width: 768px) 50vw, 240px"}
          className="object-cover" 
          unoptimized
        />
        {/* Code Badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/20">
          {code}
        </div>
      </div>
    );
  }

  // Cover photo ratio layout
  return (
    <div className={`w-full relative overflow-hidden rounded-xl bg-white shadow-md aspect-video ${className}`}>
      <Image 
        src={item.imageUrl || ''} 
        alt={nameEn} 
        fill
        sizes={isLarge ? "(max-width: 768px) 100vw, 500px" : "(max-width: 768px) 50vw, 240px"}
        className="object-cover" 
        unoptimized
      />
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/20 pointer-events-none">
        {code}
      </div>
    </div>
  );
};
