'use client';

import React from 'react';
import { DesignItem } from '../data/designData';
import { RefreshCw, CheckCircle2, AlertCircle, ArrowRight } from 'lucide-react';

interface SelectionSummaryBarProps {
  selectedLogo: DesignItem | null;
  selectedCover: DesignItem | null;
  onReset: () => void;
  onScrollToForm: () => void;
}

export const SelectionSummaryBar: React.FC<SelectionSummaryBarProps> = ({
  selectedLogo,
  selectedCover,
  onReset,
  onScrollToForm
}) => {
  const isComplete = Boolean(selectedLogo && selectedCover);

  return (
    <div className="w-full sticky top-2 sm:top-4 z-40 max-w-6xl mx-auto px-2.5 sm:px-4 my-3 sm:my-6">
      <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border-2 border-orange-200 shadow-lg p-2.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 transition-all">
        {/* Selection Status Summary */}
        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-1.5">
            <span className="hidden xs:inline text-[11px] sm:text-xs font-bold text-slate-500 uppercase tracking-wider">
              Pair:
            </span>
            <span className={`px-2 py-0.5 sm:py-1 rounded-full text-[11px] sm:text-xs font-extrabold flex items-center gap-1 ${
              isComplete ? 'bg-emerald-100 text-emerald-800 border border-emerald-300' : 'bg-orange-100 text-orange-800 border border-orange-200'
            }`}>
              {isComplete ? (
                <>
                  <CheckCircle2 className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-emerald-600" />
                  <span>Ready (2/2)</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-orange-600" />
                  <span>{(selectedLogo ? 1 : 0) + (selectedCover ? 1 : 0)}/2 Selected</span>
                </>
              )}
            </span>
          </div>

          {/* Badges for Selected Items */}
          <div className="flex items-center gap-1.5">
            {/* Logo Badge */}
            <div className={`px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl border flex items-center gap-1 text-[11px] sm:text-xs font-bold transition-all ${
              selectedLogo
                ? 'bg-orange-50 border-orange-300 text-orange-950 shadow-xs'
                : 'bg-slate-100 border-slate-200 text-slate-400 italic'
            }`}>
              <span className="text-[10px] text-slate-500">L:</span>
              {selectedLogo ? (
                <span className="font-mono font-black text-orange-600">{selectedLogo.code}</span>
              ) : (
                <span className="text-[10px]">None</span>
              )}
            </div>

            {/* Cover Badge */}
            <div className={`px-2 sm:px-3 py-1 rounded-lg sm:rounded-xl border flex items-center gap-1 text-[11px] sm:text-xs font-bold transition-all ${
              selectedCover
                ? 'bg-orange-50 border-orange-300 text-orange-950 shadow-xs'
                : 'bg-slate-100 border-slate-200 text-slate-400 italic'
            }`}>
              <span className="text-[10px] text-slate-500">C:</span>
              {selectedCover ? (
                <span className="font-mono font-black text-orange-600">{selectedCover.code}</span>
              ) : (
                <span className="text-[10px]">None</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
          {(selectedLogo || selectedCover) && (
            <button
              onClick={onReset}
              className="px-2.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-semibold text-slate-600 hover:text-red-600 bg-slate-100 hover:bg-red-50 border border-slate-200 transition-colors flex items-center gap-1"
              title="Clear selections"
            >
              <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={onScrollToForm}
            className="flex-1 sm:flex-initial px-3.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl bg-orange-600 hover:bg-orange-700 text-white text-[11px] sm:text-xs font-extrabold flex items-center justify-center gap-1 shadow-md transition-all"
          >
            <span>Proceed to Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
