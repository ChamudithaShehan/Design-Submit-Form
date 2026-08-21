'use client';

import React from 'react';
import { Sparkles, Palette, Crown } from 'lucide-react';

export const HeaderBanner: React.FC = () => {
  return (
    <header className="w-full relative overflow-hidden bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 text-white shadow-xl">
      {/* Decorative ambient background glows */}
      <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-amber-300/20 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-red-600/30 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-3.5 py-6 sm:py-12 flex flex-col items-center text-center relative z-10">
        {/* Top Floating Badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 backdrop-blur-md border border-white/30 text-amber-100 text-[11px] sm:text-xs font-semibold tracking-wide uppercase shadow-sm mb-2.5">
          <Crown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 fill-amber-300" />
          <span>Premium Ordering Portal • 2026</span>
          <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-200" />
        </div>

        {/* Main Title */}
        <h1 className="text-2xl xs:text-3xl sm:text-5xl font-black tracking-tight drop-shadow-md text-white">
          Custom Branding Studio
        </h1>
        <p className="text-base sm:text-xl font-bold text-amber-100 mt-0.5 tracking-normal font-sans">
          අභිරුචි සන්නාම නිර්මාණ මැදිරිය
        </p>

        {/* Subtitle */}
        <div className="mt-2.5 max-w-2xl text-xs sm:text-base text-orange-50/95 font-medium space-y-0.5 px-2">
          <p className="leading-snug">
            Select your premium Logo and Cover Photo design
          </p>
          <p className="text-amber-200 font-normal">
            ඔබගේ ප්‍රමුඛ පෙළේ ලාංඡන (Logo) සහ කවරයේ ඡායාරූප (Cover Photo) තෝරන්න
          </p>
        </div>

        {/* Feature Pills */}
        <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs font-semibold">
          <span className="px-2.5 py-1 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1">
            <Palette className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" /> 10 Logos (L1 - L10)
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1">
            <Sparkles className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-amber-300" /> 10 Covers (C1 - C10)
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-black/20 backdrop-blur-sm border border-white/20 text-white flex items-center gap-1">
            ⚡ Direct WhatsApp
          </span>
        </div>
      </div>
    </header>
  );
};
