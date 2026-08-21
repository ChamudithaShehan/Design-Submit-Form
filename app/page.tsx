'use client';

import React, { useState, useRef } from 'react';
import { DesignItem } from '../data/designData';
import { HeaderBanner } from '../components/HeaderBanner';
import { InstructionCallout } from '../components/InstructionCallout';
import { LogoSelector } from '../components/LogoSelector';
import { CoverSelector } from '../components/CoverSelector';
import { SelectionSummaryBar } from '../components/SelectionSummaryBar';
import { VideoGuideBanner } from '../components/VideoGuideBanner';
import { CustomizationForm } from '../components/CustomizationForm';
import { ImagePreviewModal } from '../components/ImagePreviewModal';
import { Sparkles, Heart } from 'lucide-react';

export default function OrderPortalPage() {
  const [selectedLogo, setSelectedLogo] = useState<DesignItem | null>(null);
  const [selectedCover, setSelectedCover] = useState<DesignItem | null>(null);
  const [previewItem, setPreviewItem] = useState<DesignItem | null>(null);

  const formRef = useRef<HTMLDivElement | null>(null);

  const handleSelectLogo = (item: DesignItem) => {
    setSelectedLogo((prev) => (prev?.code === item.code ? null : item));
  };

  const handleSelectCover = (item: DesignItem) => {
    setSelectedCover((prev) => (prev?.code === item.code ? null : item));
  };

  const handleResetSelections = () => {
    setSelectedLogo(null);
    setSelectedCover(null);
  };

  const handleScrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
      {/* Top Branding Banner Header */}
      <HeaderBanner />

      {/* Instructions Callout Box */}
      <InstructionCallout />

      {/* Sticky Selection Summary Bar */}
      <SelectionSummaryBar
        selectedLogo={selectedLogo}
        selectedCover={selectedCover}
        onReset={handleResetSelections}
        onScrollToForm={handleScrollToForm}
      />

      {/* Main Content Area */}
      <main className="flex-1 pb-16">
        {/* Section 1: Logo Selector */}
        <LogoSelector
          selectedLogo={selectedLogo}
          onSelectLogo={handleSelectLogo}
          onPreviewLogo={(item) => setPreviewItem(item)}
        />

        {/* Section 2: Cover Selector */}
        <CoverSelector
          selectedCover={selectedCover}
          onSelectCover={handleSelectCover}
          onPreviewCover={(item) => setPreviewItem(item)}
        />

        {/* Video / Branding Guide Session */}
        <VideoGuideBanner />

        {/* Section 3: Customization Form & WhatsApp CTA */}
        <CustomizationForm
          selectedLogo={selectedLogo}
          selectedCover={selectedCover}
          formRef={formRef}
        />
      </main>

      {/* Fullscreen Image Preview Modal */}
      <ImagePreviewModal
        item={previewItem}
        isSelected={
          previewItem
            ? previewItem.type === 'logo'
              ? selectedLogo?.code === previewItem.code
              : selectedCover?.code === previewItem.code
            : false
        }
        onClose={() => setPreviewItem(null)}
        onSelect={(item) => {
          if (item.type === 'logo') {
            setSelectedLogo(item);
          } else {
            setSelectedCover(item);
          }
        }}
      />

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-8 border-t border-slate-800 text-xs text-center space-y-2">
        <div className="flex items-center justify-center gap-1.5 text-slate-300 font-semibold">
          <Sparkles className="w-4 h-4 text-orange-500" />
          <span>Custom Branding Studio • Premium ordering portal</span>
        </div>
        <p className="text-slate-500">
          © 2026 Custom Branding Studio. All Rights Reserved. (අභිරුචි සන්නාම නිර්මාණ මැදිරිය)
        </p>
      </footer>
    </div>
  );
}
