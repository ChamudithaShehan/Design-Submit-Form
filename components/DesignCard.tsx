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
          ? 'border-brand-rust ring-2 sm:ring-4 ring-brand-accent/30 shadow-lg scale-[1.01] sm:scale-[1.02]'
          : 'border-slate-200 hover:border-brand-rust/40 hover:shadow-md hover:-translate-y-0.5'
      }`}
    >
      {/* Top Banner Selection Overlay */}
      {isSelected && (
        <div className="absolute top-1.5 right-1.5 z-20 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-brand-accent text-white flex items-center justify-center shadow-md animate-in zoom-in-75 duration-150">
          <Check className="w-3.5 h-3.5 sm:w-4 sm:h-4 stroke-3" />
        </div>
      )}

      {/* Visual Mockup Container */}
      <div className="w-full p-2 sm:p-2.5 bg-slate-50/80 border-b border-slate-100">
        <DesignMockup item={item} className="rounded-lg sm:rounded-xl shadow-xs" />
      </div>

      {/* Card Info & Select Status */}
      <div className="p-2.5 sm:p-3.5 space-y-2 sm:space-y-2.5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between gap-1 mb-1.5">
            <span className="font-bold text-[11px] sm:text-xs text-brand-accent font-mono">
              {item.code}
            </span>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onPreview(item);
              }}
              className="px-2.5 py-0.5 rounded-full bg-brand-accent hover:bg-brand-orange text-white text-[10px] sm:text-[11px] font-bold flex items-center gap-1 shadow-xs transition-all cursor-pointer active:scale-95"
              title="View Fullscreen Preview"
            >
              <Eye className="w-3.5 h-3.5 text-amber-200" />
              <span>Preview</span>
            </button>
          </div>

          <h3 className="font-semibold text-[11px] sm:text-xs text-slate-800 line-clamp-1">
            {item.nameEn}
          </h3>
          <p className="text-[10px] sm:text-[11px] font-medium text-brand-rust line-clamp-1 mt-0.5">
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
          className={`w-full mt-2 py-1.5 sm:py-2 px-2 rounded-lg text-[10px] sm:text-[11px] font-semibold cursor-pointer transition-colors flex items-center justify-center gap-1 active:scale-95 ${
            isSelected
              ? 'bg-brand-accent hover:bg-brand-orange text-white shadow-xs'
              : 'bg-orange-50/80 text-brand-dark hover:bg-orange-100 border border-brand-rust/30'
          }`}
        >
          {isSelected ? '✓ Selected' : 'Select ' + item.code}
        </button>
      </div>
    </div>
  );
};

