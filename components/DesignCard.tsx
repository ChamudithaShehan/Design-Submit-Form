'use client';

import React from 'react';
import { DesignItem } from '../data/designData';
import { DesignMockup } from './DesignMockup';
import { Check, Eye } from 'lucide-react';

interface DesignCardProps {
  item: DesignItem;
  isSelected: boolean;
  onSelect: (item: DesignItem) => void;
  onPreview: (item: DesignItem) => void;
}

export const DesignCard: React.FC<DesignCardProps> = ({
  item,
  isSelected,
  onSelect,
  onPreview
}) => {
  return (
    <div
      onClick={() => onSelect(item)}
      className={`group relative rounded-xl bg-white border-2 cursor-pointer transition-all duration-200 overflow-hidden flex flex-col justify-between select-none ${
        isSelected
          ? 'border-orange-600 ring-2 sm:ring-4 ring-orange-500/30 shadow-lg scale-[1.01] sm:scale-[1.02]'
          : 'border-slate-200 hover:border-orange-300 hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      {/* Top Banner Selection Overlay */}
      {isSelected && (
        <div className="absolute top-1.5 right-1.5 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-orange-600 text-white flex items-center justify-center shadow-md animate-in zoom-in-75 duration-150">
          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-[3]" />
        </div>
      )}

      {/* Mobile-Friendly Quick View Badge (Always visible icon on top left on mobile) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          onPreview(item);
        }}
        className="absolute top-1.5 left-1.5 z-20 px-2 py-1 rounded-md bg-slate-900/80 backdrop-blur-md text-white text-[10px] sm:text-xs font-bold flex items-center gap-1 shadow-sm hover:bg-orange-600 transition-colors"
        title="View Fullscreen Preview"
      >
        <Eye className="w-3 h-3 text-amber-300" />
        <span className="hidden xs:inline">View</span>
      </button>

      {/* Visual Mockup Container */}
      <div className="relative p-1.5 sm:p-2.5 bg-slate-50 border-b border-slate-100 flex items-center justify-center">
        <DesignMockup item={item} />
      </div>

      {/* Card Info & Select Status */}
      <div className="p-2 sm:p-3 space-y-1 sm:space-y-1.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-1">
            <span className="font-extrabold text-[11px] sm:text-xs text-orange-600 font-mono">
              {item.code}
            </span>
            <span className="text-[9px] sm:text-[10px] font-semibold text-slate-500 bg-slate-100 px-1 py-0.5 rounded truncate max-w-[70px]">
              {item.category}
            </span>
          </div>

          <h4 className="font-bold text-[11px] sm:text-xs text-slate-800 line-clamp-1 mt-0.5">
            {item.nameEn}
          </h4>
          <p className="text-[10px] sm:text-[11px] font-medium text-orange-800 line-clamp-1">
            {item.nameSi}
          </p>
        </div>

        {/* Card Select Button Indicator */}
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            onSelect(item);
          }}
          className={`w-full py-1.5 px-2 rounded-lg text-[10px] sm:text-[11px] font-bold transition-colors flex items-center justify-center gap-1 active:scale-95 ${
            isSelected
              ? 'bg-orange-600 text-white shadow-xs'
              : 'bg-orange-50 text-orange-700 hover:bg-orange-100 border border-orange-200'
          }`}
        >
          {isSelected ? '✓ Selected' : 'Select ' + item.code}
        </button>
      </div>
    </div>
  );
};
