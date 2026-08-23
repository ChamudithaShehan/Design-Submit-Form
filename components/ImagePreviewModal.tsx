'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { DesignItem } from '../data/designData';
import { DesignMockup } from './DesignMockup';
import { X, CheckCircle2, Sparkles, ZoomIn } from 'lucide-react';

interface ImagePreviewModalProps {
  item: DesignItem | null;
  isSelected: boolean;
  onClose: () => void;
  onSelect: (item: DesignItem) => void;
}

export const ImagePreviewModal: React.FC<ImagePreviewModalProps> = ({
  item,
  isSelected,
  onClose,
  onSelect
}) => {
  const [isZoomed, setIsZoomed] = useState(false);
  const [prevItem, setPrevItem] = useState<DesignItem | null>(item);

  // Reset zoom when item changes during render
  if (item !== prevItem) {
    setPrevItem(item);
    setIsZoomed(false);
  }

  if (!item) return null;

  return (
    <>
      <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
        {/* Click backdrop to close */}
        <div className="absolute inset-0" onClick={onClose} />

        <div className="relative z-10 w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border-t sm:border border-orange-200 flex flex-col max-h-[92vh] sm:max-h-[90vh] animate-in slide-in-from-bottom sm:zoom-in-95 duration-200">
          {/* Header Bar */}
          <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 bg-linear-to-r from-brand-dark via-brand-rust to-brand-accent text-white shrink-0">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded bg-white/20 text-xs font-mono font-bold">
                {item.code}
              </span>
              <h3 className="font-bold text-sm sm:text-base md:text-lg truncate max-w-45 xs:max-w-xs sm:max-w-md">
                {item.nameEn}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full hover:bg-white/20 cursor-pointer transition-colors text-white"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body with Large Preview */}
          <div className="p-0 sm:p-6 overflow-y-auto bg-slate-50 flex flex-col items-center justify-center min-h-75">
            <p className="text-[10px] sm:text-xs text-slate-400 font-medium my-2 sm:mb-4 uppercase tracking-wider flex items-center gap-1">
              <ZoomIn className="w-3.5 h-3.5" /> Tap image to enlarge
            </p>
            <div className="w-full flex items-center justify-center p-0 sm:p-6 bg-white sm:rounded-xl shadow-none sm:shadow-inner border-0 sm:border border-slate-200">
              <div 
                onClick={() => setIsZoomed(true)}
                className={`relative cursor-zoom-in group ${item.type === 'logo' ? 'w-full max-w-[90vw] sm:max-w-100 md:max-w-120 aspect-square' : 'w-full aspect-video'}`}
              >
                <DesignMockup item={item} isLarge />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 pointer-events-none rounded-xl" />
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white border-t border-slate-200 flex items-center justify-between gap-2.5 sm:gap-3 shrink-0">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 cursor-pointer transition-colors"
            >
              Close
            </button>

            <button
              onClick={() => {
                onSelect(item);
                onClose();
              }}
              className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-md cursor-pointer active:scale-95 ${
                isSelected
                  ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                  : 'bg-brand-accent hover:bg-brand-orange text-white'
              }`}
            >
              {isSelected ? (
                <>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Selected ({item.code})</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Select Design ({item.code})</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Fullscreen Zoom Overlay */}
      {isZoomed && item.imageUrl && (
        <div 
          className="fixed inset-0 z-100 bg-black/95 flex items-center justify-center p-2 sm:p-8 cursor-zoom-out animate-in fade-in duration-200"
          onClick={() => setIsZoomed(false)}
        >
          <Image 
            src={item.imageUrl} 
            alt={item.nameEn} 
            fill
            sizes="100vw"
            className="object-contain"
            unoptimized
          />
          <button className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white cursor-pointer transition-colors">
            <X className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>
        </div>
      )}
    </>
  );
};
