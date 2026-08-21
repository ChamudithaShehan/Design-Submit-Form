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
  const { code, type, bgGradient, nameEn, tags } = item;

  if (type === 'logo') {
    if (item.imageUrl) {
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

    return (
      <div className={`relative overflow-hidden flex flex-col items-center justify-center rounded-xl bg-gradient-to-br ${bgGradient} text-white shadow-inner p-4 aspect-square ${className}`}>
        {/* Subtle background graphic shapes */}
        <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/10 blur-xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 w-28 h-28 rounded-full bg-black/20 blur-lg pointer-events-none" />

        {/* Code Badge */}
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-black/40 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/20">
          {code}
        </div>



        {/* Dynamic Graphic Center based on code */}
        <div className="flex flex-col items-center justify-center space-y-2 z-10 text-center my-auto">
          {code === 'L-1' && (
            <div className="relative p-3 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-sm shadow-lg">
              <Sparkles className="w-10 h-10 text-amber-300 animate-pulse" />
            </div>
          )}
          {code === 'L-2' && (
            <div className="relative p-3 rounded-full bg-amber-500/20 border-2 border-amber-400 shadow-xl">
              <Crown className="w-10 h-10 text-amber-300" />
            </div>
          )}
          {code === 'L-3' && (
            <div className="relative p-3 rounded-xl bg-orange-600/40 border border-white/40 shadow-xl">
              <ShieldCheck className="w-10 h-10 text-white" />
            </div>
          )}
          {code === 'L-4' && (
            <div className="relative p-3 rounded-full bg-rose-500/30 border border-rose-300/40">
              <Heart className="w-10 h-10 text-rose-200 fill-rose-300/50" />
            </div>
          )}
          {code === 'L-5' && (
            <div className="relative p-3 rounded-lg bg-sky-500/20 border border-sky-400/50 shadow-inner">
              <Zap className="w-10 h-10 text-sky-300" />
            </div>
          )}
          {code === 'L-6' && (
            <div className="relative p-3 rounded-full bg-orange-900/40 border border-amber-300/30">
              <Feather className="w-10 h-10 text-amber-200" />
            </div>
          )}
          {code === 'L-7' && (
            <div className="relative p-3 rounded-full bg-red-900/50 border-2 border-dashed border-red-300/60">
              <Award className="w-10 h-10 text-amber-300" />
            </div>
          )}
          {code === 'L-8' && (
            <div className="relative p-3 rounded-2xl bg-gradient-to-tr from-violet-500 to-amber-300 shadow-lg">
              <Star className="w-10 h-10 text-white fill-white" />
            </div>
          )}
          {code === 'L-9' && (
            <div className="relative p-3 rounded-xl bg-amber-500/30 border border-amber-200/40">
              <Utensils className="w-10 h-10 text-amber-200" />
            </div>
          )}
          {code === 'L-10' && (
            <div className="relative p-3 rounded-2xl bg-zinc-800/60 border border-zinc-500/40">
              <ShoppingBag className="w-10 h-10 text-orange-400" />
            </div>
          )}

          <div className="space-y-0.5 max-w-[130px]">
            <h4 className="font-extrabold text-sm tracking-tight leading-tight line-clamp-1 drop-shadow">
              BRAND LOGO
            </h4>
            <p className="text-[10px] text-white/80 font-medium line-clamp-1">
              {nameEn}
            </p>
          </div>
        </div>

        {/* Bottom Tag Bar */}
        <div className="w-full flex items-center justify-center gap-1 pt-1 border-t border-white/10 text-[9px] font-medium text-white/70">
          <span>{tags[0]}</span> • <span>{tags[1]}</span>
        </div>
      </div>
    );
  }

  // Cover photo ratio layout
  if (item.imageUrl) {
    return (
      <div className={`relative overflow-hidden rounded-xl bg-white shadow-md aspect-[16/9] ${className}`}>
        <img src={item.imageUrl} alt={nameEn} className="w-full h-full object-cover" />
        <div className="absolute top-2 left-2 px-2 py-0.5 rounded bg-black/60 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/20 pointer-events-none">
          {code}
        </div>

      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden flex flex-col justify-between rounded-xl bg-gradient-to-r ${bgGradient} text-white shadow-inner p-3 aspect-[16/9] ${className}`}>
      {/* Background Graphic Accent */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      <div className="absolute -top-12 -right-12 w-32 h-32 rounded-full bg-white/10 blur-2xl pointer-events-none" />

      {/* Top Header Row */}
      <div className="relative z-10 flex items-center justify-between">
        <span className="px-2 py-0.5 rounded bg-black/50 backdrop-blur-md text-[10px] font-mono font-bold text-amber-300 border border-white/20">
          {code}
        </span>
        <span className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-orange-500/80 text-[9px] font-semibold tracking-wide text-white uppercase shadow-sm">
          <Truck className="w-2.5 h-2.5" /> Delivery Info
        </span>
      </div>

      {/* Main Cover Content Showcase */}
      <div className="relative z-10 my-auto flex items-center gap-3">
        {/* Mock Logo Box inside cover */}
        <div className="w-9 h-9 rounded-lg bg-white/20 backdrop-blur-md border border-white/40 flex items-center justify-center shrink-0 shadow-md">
          <Sparkles className="w-5 h-5 text-amber-300" />
        </div>

        <div className="space-y-0.5 overflow-hidden">
          <h3 className="font-extrabold text-xs tracking-tight leading-none text-white drop-shadow line-clamp-1">
            {nameEn.toUpperCase()}
          </h3>
          <p className="text-[9px] text-amber-200/90 font-medium line-clamp-1">
            Official Store Page Cover Header
          </p>
        </div>
      </div>

      {/* Bottom Footer Info Badges */}
      <div className="relative z-10 flex items-center justify-between border-t border-white/20 pt-1 text-[8px] text-white/80">
        <span className="flex items-center gap-1">
          <Phone className="w-2.5 h-2.5 text-amber-300" /> +94 71 153 1989
        </span>
        <span className="flex items-center gap-1 font-semibold text-emerald-300">
          <CheckCircle2 className="w-2.5 h-2.5" /> Order Now
        </span>
      </div>
    </div>
  );
};
