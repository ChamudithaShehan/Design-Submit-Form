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
      <div className="rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border-2 border-brand-rust/30 shadow-lg p-2.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4 transition-all">
        {/* Selection Status Summary */}
        <div className="flex flex-wrap items-center justify-between sm:justify-start gap-2 w-full sm:w-auto">
          <div className="flex items-center gap-1.5">
            <span className="hidden xs:inline text-xs font-semibold text-slate-700 uppercase tracking-wider">
              Pair:
            </span>
            <span className={`px-2.5 py-1 rounded-full text-xs font-bold flex items-center gap-1 shadow-2xs ${
              isComplete ? 'bg-emerald-100 text-emerald-900 border border-emerald-400' : 'bg-amber-100 text-amber-950 border border-amber-300'
            }`}>
              {isComplete ? (
                <>
                  <CheckCircle2 className="w-4.5 h-4.5 text-emerald-700 shrink-0" />
                  <span>Ready (2/2)</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4.5 h-4.5 text-amber-700 shrink-0" />
                  <span>{(selectedLogo ? 1 : 0) + (selectedCover ? 1 : 0)}/2 Selected</span>
                </>
              )}
            </span>
          </div>

          {/* Badges for Selected Items */}
          <div className="flex items-center gap-2">
            {/* Logo Badge */}
            <div className={`px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl border flex items-center gap-1.5 text-xs sm:text-sm transition-all ${
              selectedLogo
                ? 'bg-orange-50 border-brand-rust/40 text-brand-dark shadow-xs'
                : 'bg-slate-100 border-slate-300 text-slate-700'
            }`}>
              <span className={selectedLogo ? 'text-brand-dark font-bold' : 'text-slate-700 font-semibold'}>Logo:</span>
              {selectedLogo ? (
                <span className="font-mono font-bold text-brand-accent">{selectedLogo.code}</span>
              ) : (
                <span className="text-slate-600 font-medium">None</span>
              )}
            </div>

            {/* Cover Badge */}
            <div className={`px-2.5 sm:px-3 py-1 rounded-lg sm:rounded-xl border flex items-center gap-1.5 text-xs sm:text-sm transition-all ${
              selectedCover
                ? 'bg-orange-50 border-brand-rust/40 text-brand-dark shadow-xs'
                : 'bg-slate-100 border-slate-300 text-slate-700'
            }`}>
              <span className={selectedCover ? 'text-brand-dark font-bold' : 'text-slate-700 font-semibold'}>Cover:</span>
              {selectedCover ? (
                <span className="font-mono font-bold text-brand-accent">{selectedCover.code}</span>
              ) : (
                <span className="text-slate-600 font-medium">None</span>
              )}
            </div>
          </div>
        </div>

        {/* Right Action Buttons */}
        <div className="flex items-center gap-2 w-full sm:w-auto justify-end border-t sm:border-t-0 pt-2 sm:pt-0 border-slate-100">
          {(selectedLogo || selectedCover) && (
            <button
              onClick={onReset}
              className="px-2.5 py-1.5 sm:py-2 rounded-lg sm:rounded-xl text-[11px] sm:text-xs font-medium text-slate-600 hover:text-red-600 bg-slate-100 hover:bg-red-50 border border-slate-200 cursor-pointer transition-colors flex items-center gap-1"
              title="Clear selections"
            >
              <RefreshCw className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
              <span>Reset</span>
            </button>
          )}

          <button
            onClick={onScrollToForm}
            className="flex-1 sm:flex-initial px-4 py-2 rounded-lg sm:rounded-xl bg-brand-accent hover:bg-brand-orange text-white text-[11px] sm:text-xs font-bold flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg cursor-pointer transition-all active:scale-98"
          >
            <span>Proceed to Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
