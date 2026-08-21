'use client';

import React from 'react';
import { DesignItem } from '../data/designData';
import { DesignMockup } from './DesignMockup';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

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
  if (!item) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200">
      {/* Click backdrop to close */}
      <div className="absolute inset-0" onClick={onClose} />

      <div className="relative z-10 w-full max-w-2xl bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden border-t sm:border border-orange-200 flex flex-col max-h-[92vh] sm:max-h-[90vh] animate-in slide-in-from-bottom sm:zoom-in-95 duration-200">
        {/* Header Bar */}
        <div className="flex items-center justify-between px-4 py-3 sm:px-5 sm:py-3.5 bg-gradient-to-r from-orange-600 to-orange-500 text-white shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2 py-0.5 rounded bg-white/20 text-xs font-mono font-bold">
              {item.code}
            </span>
            <h3 className="font-bold text-sm sm:text-base md:text-lg truncate max-w-[180px] xs:max-w-xs sm:max-w-md">
              {item.nameEn}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/20 transition-colors text-white"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body with Large Preview */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-4 bg-slate-50">
          <div className="w-full flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl shadow-inner border border-slate-200">
            <div className={item.type === 'logo' ? 'w-48 h-48 xs:w-60 xs:h-60 sm:w-64 sm:h-64' : 'w-full max-w-md aspect-[16/9]'}>
              <DesignMockup item={item} isLarge />
            </div>
          </div>

          {/* Details */}
          <div className="bg-white p-3 sm:p-4 rounded-xl border border-orange-100 shadow-sm space-y-1.5 sm:space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] sm:text-xs font-semibold text-orange-600 uppercase tracking-wider">
                {item.type === 'logo' ? 'Logo Template' : 'Cover Photo Header'}
              </span>
              <span className="px-2 py-0.5 rounded-full bg-orange-100 text-orange-800 text-[10px] sm:text-xs font-medium">
                {item.category}
              </span>
            </div>

            <div>
              <h4 className="font-extrabold text-slate-800 text-base sm:text-lg">
                {item.nameEn}
              </h4>
              <p className="text-xs sm:text-sm font-semibold text-orange-600">
                {item.nameSi}
              </p>
            </div>

            <p className="text-xs text-slate-600 leading-normal">
              {item.subtitleEn} • <span className="text-slate-500">{item.subtitleSi}</span>
            </p>

            <div className="flex flex-wrap gap-1 pt-1">
              {item.tags.map((tag) => (
                <span key={tag} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 text-[10px] font-medium">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-4 py-3 sm:px-5 sm:py-4 bg-white border-t border-slate-200 flex items-center justify-between gap-2.5 sm:gap-3 shrink-0">
          <button
            onClick={onClose}
            className="flex-1 sm:flex-none px-3.5 py-2 rounded-lg border border-slate-300 text-slate-700 text-xs sm:text-sm font-semibold hover:bg-slate-50 transition-colors"
          >
            Close
          </button>

          <button
            onClick={() => {
              onSelect(item);
              onClose();
            }}
            className={`flex-1 sm:flex-none px-4 py-2 rounded-lg font-bold text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-all shadow-md active:scale-95 ${
              isSelected
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-orange-600 hover:bg-orange-700 text-white'
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
  );
};
