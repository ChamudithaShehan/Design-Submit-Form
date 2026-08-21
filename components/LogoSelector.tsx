'use client';

import React from 'react';
import { DesignItem, LOGO_DESIGNS } from '../data/designData';
import { DesignCard } from './DesignCard';
import { Sparkles, CheckCircle2 } from 'lucide-react';

interface LogoSelectorProps {
  selectedLogo: DesignItem | null;
  onSelectLogo: (item: DesignItem) => void;
  onPreviewLogo: (item: DesignItem) => void;
}

export const LogoSelector: React.FC<LogoSelectorProps> = ({
  selectedLogo,
  onSelectLogo,
  onPreviewLogo
}) => {
  return (
    <section className="w-full max-w-6xl mx-auto px-3 sm:px-4 my-6 sm:my-8">
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3.5 mb-4 sm:mb-6 border-b-2 border-orange-200">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-orange-600 text-white font-extrabold text-xs sm:text-sm flex items-center justify-center shadow-md shrink-0">
              1
            </span>
            <h2 className="text-lg sm:text-2xl font-black text-slate-900 tracking-tight">
              1. Choose Your Logo Example <span className="text-orange-600 font-bold text-base sm:text-lg">(Pick 1)</span>
            </h2>
          </div>
          <p className="text-xs sm:text-sm font-semibold text-orange-950 mt-1 pl-9 sm:pl-10">
            1. ඔබගේ ලාංඡන මාදිලිය තෝරන්න (1ක් තෝරන්න)
          </p>
        </div>

        {/* Status Indicator */}
        <div className="self-start sm:self-auto mt-1 sm:mt-0">
          {selectedLogo ? (
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-800 text-[11px] sm:text-xs font-bold shadow-xs">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Selected: {selectedLogo.code} ({selectedLogo.nameEn})</span>
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-100 border border-orange-200 text-orange-800 text-[11px] sm:text-xs font-semibold">
              <Sparkles className="w-3 h-3 text-orange-600 animate-pulse" />
              <span>Select 1 Logo design</span>
            </span>
          )}
        </div>
      </div>

      {/* 5-Column Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5 sm:gap-4">
        {LOGO_DESIGNS.map((item) => (
          <DesignCard
            key={item.code}
            item={item}
            isSelected={selectedLogo?.code === item.code}
            onSelect={onSelectLogo}
            onPreview={onPreviewLogo}
          />
        ))}
      </div>
    </section>
  );
};
