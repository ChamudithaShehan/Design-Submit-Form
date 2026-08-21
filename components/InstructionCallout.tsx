'use client';

import React from 'react';
import { Info, Touchpad, Eye } from 'lucide-react';

export const InstructionCallout: React.FC = () => {
  return (
    <div className="w-full max-w-6xl mx-auto px-3 sm:px-4 my-4 sm:my-6">
      <div className="rounded-xl bg-[#FFF7ED] border-2 border-[#FDBA74] p-3.5 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4 transition-all hover:shadow-md">
        {/* Top Header / Icon Pill */}
        <div className="flex items-center gap-2.5 sm:block shrink-0">
          <div className="p-2 sm:p-3 rounded-full bg-orange-500 text-white shrink-0 shadow-md">
            <Info className="w-4 h-4 sm:w-6 sm:h-6 animate-bounce" />
          </div>
          <div className="sm:hidden">
            <h3 className="font-extrabold text-orange-950 text-sm">
              How to Order Your Custom Design
            </h3>
            <span className="text-[10px] font-semibold text-orange-800">
              උපදෙස්
            </span>
          </div>
        </div>

        {/* Text Content */}
        <div className="space-y-1 flex-1">
          <div className="hidden sm:flex flex-wrap items-center gap-2">
            <h3 className="font-bold text-orange-950 text-base flex items-center gap-1.5">
              <span>How to Order Your Custom Design</span>
            </h3>
            <span className="px-2.5 py-0.5 rounded-full bg-orange-200 text-orange-900 text-xs font-semibold">
              උපදෙස්
            </span>
          </div>

          <p className="text-xs sm:text-sm font-semibold text-orange-900 leading-snug">
            Tap a card to select your design. Click <span className="inline-flex items-center px-1.5 py-0.5 rounded bg-orange-200/70 border border-orange-300 text-orange-950 font-bold text-xs"><Eye className="w-3 h-3 mr-1 inline" /> View</span> to see it full screen.
          </p>

          <p className="text-[11px] sm:text-xs font-medium text-orange-800 leading-normal">
            ඔබට අවශ්‍ය නිර්මාණය තෝරාගැනීමට කාඩ්පත මත ටැප් කරන්න. සම්පූර්ණ තිරයෙන් නැරඹීමට '👁️ View' ක්ලික් කරන්න.
          </p>
        </div>

        {/* Right Helper Indicator */}
        <div className="hidden md:flex items-center gap-2 text-xs font-medium text-orange-700 bg-orange-100/80 px-3 py-2 rounded-lg border border-orange-200 shrink-0">
          <Touchpad className="w-4 h-4 text-orange-600" />
          <span>Interactive Gallery</span>
        </div>
      </div>
    </div>
  );
};
