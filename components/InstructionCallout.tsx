'use client';

import React from 'react';
import { Info, Touchpad, Eye } from 'lucide-react';

export const InstructionCallout: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 my-4 sm:my-6">
      <div className="rounded-xl bg-[#FFF7ED] border-2 border-brand-rust/30 p-3.5 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 transition-all hover:shadow-md">
        {/* Top Header / Icon Pill */}
        <div className="flex items-center gap-2.5 sm:block shrink-0">
          <div className="p-2 sm:p-3 rounded-full bg-brand-accent text-white shrink-0 shadow-md">
            <Info className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce" />
          </div>
          <div className="sm:hidden">
            <h3 className="font-bold text-brand-dark text-sm">
              How to Order Your Custom Design
            </h3>
            <span className="text-[10px] font-semibold text-brand-rust">
              උපදෙස්
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-1 flex-1">
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-brand-dark text-base flex items-center gap-1.5">
              <span>How to Order Your Custom Design</span>
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-[#ffedd5] text-brand-dark border border-brand-rust/20 text-xs font-bold">
              උපදෙස්
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
            Tap a card to select your design. Click <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-orange-100 border border-orange-300 text-brand-dark font-bold text-xs"><Eye className="w-3 h-3 mr-1 inline text-brand-accent" /> View</span> to see it full screen.
          </p>

          <p className="text-[11px] sm:text-xs font-medium text-brand-rust leading-normal">
            ඔබට අවශ්‍ය නිර්මාණය තෝරාගැනීමට කාඩ්පත මත ටැප් කරන්න. සම්පූර්ණ තිරයෙන් නැරඹීමට &apos;View&apos; ක්ලික් කරන්න.
          </p>
        </div>

        {/* Right Helper Indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-brand-dark bg-white/90 px-3 py-2 rounded-lg border border-brand-rust/30 shrink-0 shadow-2xs">
          <Touchpad className="w-4 h-4 text-brand-accent" />
          <span>Interactive Gallery</span>
        </div>
      </div>
    </div>
  );
};
