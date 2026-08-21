'use client';

import React from 'react';
import { DesignItem } from '../data/designData';
import { Sparkles, Crown, ShieldCheck, Heart, Zap, Award, Star, ShoppingBag, Utensils, Feather, CheckCircle2, Phone, Truck } from 'lucide-react';

interface DesignMockupProps {
  item: DesignItem;
  className?: string;
  isLarge?: boolean;
}

export const DesignMockup: React.FC<DesignMockupProps> = ({ item, className = '', isLarge = false }) => {
  const { code, type, nameEn } = item;

  if (type === 'logo') {
    return (
      <div className={`relative overflow-hidden flex items-center justify-center rounded-xl bg-white shadow-md aspect-square ${className}`}>
        <img src={item.imageUrl} alt={nameEn} className="w-full h-full object-cover" />
        {/* Code Badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/20">
          {code}
        </div>
      </div>
    );
  }

  // Cover photo ratio layout
  return (
    <div className={`relative overflow-hidden rounded-xl bg-white shadow-md aspect-[16/9] ${className}`}>
      <img src={item.imageUrl} alt={nameEn} className="w-full h-full object-cover" />
      <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/20 pointer-events-none">
        {code}
      </div>
    </div>
  );
};
