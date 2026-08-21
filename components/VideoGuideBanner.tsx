'use client';

import React, { useState } from 'react';
import { Play, Video, BookOpen, Clock, Sparkles, X } from 'lucide-react';

export const VideoGuideBanner: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="w-full max-w-6xl mx-auto px-3 sm:px-4 my-6 sm:my-10">
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-950 via-stone-900 to-amber-900 text-amber-100 shadow-2xl border-2 border-amber-600/40 p-4 sm:p-8">
        {/* Background ambient lighting */}
        <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-amber-500/10 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-orange-600/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-center">
          {/* Text Content Column */}
          <div className="lg:col-span-7 space-y-2.5 sm:space-y-3">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/40 text-amber-300 text-[11px] sm:text-xs font-extrabold tracking-wide uppercase">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Branding Masterclass & Guide</span>
            </div>

            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight leading-tight">
              Business Name & Branding Guide
            </h3>
            <p className="text-base sm:text-lg font-bold text-amber-300">
              ඇඳුම් ව්‍යාපාරය SESSION
            </p>

            <p className="text-xs sm:text-sm text-amber-100/90 leading-relaxed">
              Watch our exclusive step-by-step guidance on choosing the best brand name, color palette, logo icon, and Facebook cover layout to maximize sales for your clothing boutique or online store.
            </p>

            <p className="text-[11px] sm:text-xs text-amber-200/80">
              ඔබගේ ඇඳුම් හෝ ඔන්ලයින් ව්‍යාපාරය සඳහා හොඳම නම, වර්ණ සංයෝජනය සහ සන්නාම සැලසුම තෝරාගන්නා ආකාරය පිළිබඳ සම්පූර්ණ මාර්ගෝපදේශය.
            </p>

            <div className="pt-1.5 flex flex-wrap items-center gap-2 sm:gap-4 text-[11px] sm:text-xs font-semibold text-amber-200">
              <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-amber-500/30">
                <Clock className="w-3.5 h-3.5 text-amber-400" /> 12:45 Min Session
              </span>
              <span className="flex items-center gap-1 bg-black/40 px-2.5 py-1 rounded-lg border border-amber-500/30">
                <BookOpen className="w-3.5 h-3.5 text-amber-400" /> Free Branding Advice
              </span>
            </div>
          </div>

          {/* Video Container Column */}
          <div className="lg:col-span-5">
            {isPlaying ? (
              <div className="relative rounded-xl overflow-hidden aspect-video bg-black shadow-2xl border-2 border-amber-400">
                <button
                  onClick={() => setIsPlaying(false)}
                  className="absolute top-2 right-2 z-20 p-1.5 rounded-full bg-black/70 text-white hover:bg-red-600 transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Branding Guide Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ) : (
              <div
                onClick={() => setIsPlaying(true)}
                className="group relative rounded-xl overflow-hidden aspect-video bg-stone-900 border-2 border-amber-500/50 shadow-2xl cursor-pointer flex items-center justify-center transition-transform hover:scale-[1.01]"
              >
                {/* Simulated Thumbnail */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-amber-950/60 to-black/40" />
                
                {/* Decorative Play Pattern */}
                <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-red-600 text-white text-[9px] sm:text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                  <Video className="w-3 h-3" /> YouTube Guide
                </div>

                {/* Big Play Button Overlay */}
                <div className="relative z-10 flex flex-col items-center space-y-1.5 sm:space-y-2 text-center p-3">
                  <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-orange-600 group-hover:bg-orange-500 text-white flex items-center justify-center shadow-xl border-2 sm:border-4 border-amber-300/80 group-hover:scale-110 transition-all">
                    <Play className="w-6 h-6 sm:w-8 sm:h-8 fill-white translate-x-0.5" />
                  </div>
                  <span className="text-[10px] sm:text-xs font-extrabold text-white tracking-wide uppercase bg-black/60 px-2.5 py-0.5 sm:py-1 rounded-full border border-white/20">
                    Click to Watch Guide Video
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
