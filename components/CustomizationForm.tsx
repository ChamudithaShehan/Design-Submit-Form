'use client';

import React, { useState, ChangeEvent, FormEvent } from 'react';
import { DesignItem } from '../data/designData';
import { Upload, X, Send, Image as ImageIcon, CheckCircle2, AlertTriangle, PhoneCall } from 'lucide-react';

interface CustomizationFormProps {
  selectedLogo: DesignItem | null;
  selectedCover: DesignItem | null;
  formRef: React.RefObject<HTMLDivElement | null>;
}

export const CustomizationForm: React.FC<CustomizationFormProps> = ({
  selectedLogo,
  selectedCover,
  formRef
}) => {
  const [brandName, setBrandName] = useState('');
  const [products, setProducts] = useState('');
  const [colorPrefs, setColorPrefs] = useState('');
  const [instructions, setInstructions] = useState('');
  const [sellerPhone, setSellerPhone] = useState(''); // Default Sri Lankan WhatsApp format

  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    if (!e.target.files) return;

    const filesArr = Array.from(e.target.files);
    if (uploadedFiles.length + filesArr.length > 2) {
      setUploadError('Maximum 2 custom idea photos allowed. (උපරිම ඡායාරූප 2ක් පමණි)');
      return;
    }

    setUploadedFiles((prev) => [...prev, ...filesArr].slice(0, 2));
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setUploadError(null);
  };

  const handleSubmitWhatsApp = (e: FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // Validation
    if (!brandName.trim()) {
      setValidationError('Please enter your Brand/Page Name. (කරුණාකර ව්‍යාපාරයේ නම ඇතුළත් කරන්න)');
      return;
    }

    if (!selectedLogo) {
      setValidationError('Please select a Logo Example from Section 1. (කරුණාකර ලාංඡනයක් තෝරන්න)');
      return;
    }

    if (!selectedCover) {
      setValidationError('Please select a Cover Photo Example from Section 2. (කරුණාකර කවරයේ ඡායාරූපයක් තෝරන්න)');
      return;
    }

    const cleanPhone = sellerPhone.replace(/[^0-9]/g, '');
    const phoneToUse = cleanPhone.length > 5 ? cleanPhone : '94711531989';

    // Construct formatted text message
    const messageLines = [
      `🎨 *NEW CUSTOM BRANDING ORDER* 🎨`,
      `----------------------------------------`,
      `📌 *Brand / Page Name:* ${brandName.trim()}`,
      `🛒 *Products / Services:* ${products.trim() || 'Not specified'}`,
      `🎨 *Color Preferences:* ${colorPrefs.trim() || 'Default design colors'}`,
      ``,
      `--- *SELECTED DESIGNS* ---`,
      `🔹 *Logo Code:* ${selectedLogo.code} (${selectedLogo.nameEn})`,
      `🔹 *Cover Photo Code:* ${selectedCover.code} (${selectedCover.nameEn})`,
      ``,
      `--- *CUSTOM NOTES* ---`,
      `📝 *Instructions:* ${instructions.trim() || 'None'}`,
      `🖼️ *Uploaded Reference Ideas:* ${uploadedFiles.length} file(s) attached in portal idea list`,
      `----------------------------------------`,
      `Sent via Custom Branding Studio Ordering Portal`
    ];

    const fullMessage = messageLines.join('\n');
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/${phoneToUse}?text=${encodedMessage}`;

    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section ref={formRef} className="w-full max-w-6xl mx-auto px-3 sm:px-4 my-6 sm:my-10 scroll-mt-16">
      <div className="rounded-xl sm:rounded-2xl bg-white border-2 border-orange-200 shadow-xl overflow-hidden">
        {/* Section Header */}
        <div className="bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 p-4 sm:p-6 text-white">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white text-orange-600 font-black text-sm sm:text-lg flex items-center justify-center shadow-md shrink-0">
              3
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-black tracking-tight">
                3. Customization Details
              </h2>
              <p className="text-xs sm:text-sm font-bold text-amber-100">
                අභිරුචිකරණ විස්තර
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmitWhatsApp} className="p-4 sm:p-8 space-y-4 sm:space-y-6">
          {/* File Upload Box */}
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-extrabold text-slate-800">
              Custom Reference Photo Upload <span className="text-[11px] font-normal text-slate-500">(Optional)</span>
            </label>

            <div className="border-2 border-dashed border-orange-300 rounded-xl bg-orange-50/50 hover:bg-orange-50/90 transition-colors p-4 sm:p-6 text-center flex flex-col items-center justify-center space-y-2 sm:space-y-3 cursor-pointer relative">
              <input
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
                disabled={uploadedFiles.length >= 2}
              />

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center shrink-0">
                <Upload className="w-5 h-5 sm:w-6 sm:h-6" />
              </div>

              <div>
                <p className="text-xs sm:text-sm font-extrabold text-orange-950">
                  Don't like the examples? Upload your own idea (Max 2 Photos)
                </p>
                <p className="text-[11px] sm:text-xs font-medium text-orange-800 mt-0.5">
                  ඔබට අවශ්‍ය වෙනත් මෝස්තර සටහනක් ඇත්නම් ඡායාරූප 2ක් දක්වා මෙතැනට එක් කරන්න
                </p>
              </div>

              <span className="px-3 py-1 rounded-md bg-white border border-orange-200 text-[11px] sm:text-xs font-semibold text-orange-700 shadow-xs">
                Browse Files or Drag & Drop
              </span>
            </div>

            {uploadError && (
              <p className="text-xs font-semibold text-red-600 flex items-center gap-1">
                <AlertTriangle className="w-3.5 h-3.5" /> {uploadError}
              </p>
            )}

            {/* Uploaded File Previews */}
            {uploadedFiles.length > 0 && (
              <div className="flex flex-wrap gap-2 pt-1">
                {uploadedFiles.map((file, idx) => (
                  <div key={idx} className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-orange-100 border border-orange-300 text-xs font-medium text-orange-900">
                    <ImageIcon className="w-3.5 h-3.5 text-orange-600" />
                    <span className="max-w-[120px] sm:max-w-[150px] truncate">{file.name}</span>
                    <span className="text-[10px] text-orange-700">({(file.size / 1024).toFixed(0)} KB)</span>
                    <button
                      type="button"
                      onClick={() => removeFile(idx)}
                      className="p-0.5 rounded-full hover:bg-orange-200 text-orange-800"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Input 1: Brand/Page Name */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-800">
                1. Brand / Page Name <span className="text-red-500">*</span>
              </label>
              <span className="block text-[11px] sm:text-xs font-semibold text-orange-950">
                ව්‍යාපාරයේ / පේජ් එකේ නම ("The exact name you want on the designs")
              </span>
              <input
                type="text"
                required
                value={brandName}
                onChange={(e) => setBrandName(e.target.value)}
                placeholder="e.g., Royal Closet Boutique"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm font-medium transition-all shadow-xs"
              />
            </div>

            {/* Input 2: Products / Services */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-800">
                2. Products / Services
              </label>
              <span className="block text-[11px] sm:text-xs font-semibold text-orange-950">
                නිෂ්පාදන / සේවාවන් ("e.g., Clothing, Cakes, Cosmetics, Bags, etc.")
              </span>
              <input
                type="text"
                value={products}
                onChange={(e) => setProducts(e.target.value)}
                placeholder="e.g., Ladies Wear, Frocks, Accessories"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm font-medium transition-all shadow-xs"
              />
            </div>

            {/* Input 3: Color Preferences */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-800">
                3. Color Preferences for logo & covers
              </label>
              <span className="block text-[11px] sm:text-xs font-semibold text-orange-950">
                වර්ණ තේරීම් ("e.g., Navy Blue and Gold")
              </span>
              <input
                type="text"
                value={colorPrefs}
                onChange={(e) => setColorPrefs(e.target.value)}
                placeholder="e.g., Gold and Dark Royal Blue"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm font-medium transition-all shadow-xs"
              />
            </div>

            {/* Input 4: Seller Phone Number Config */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-extrabold text-slate-800 flex items-center gap-1">
                <PhoneCall className="w-3.5 h-3.5 text-orange-600" />
                Seller WhatsApp Phone Number
              </label>
              <span className="block text-[11px] sm:text-xs font-semibold text-orange-950">
                ඇණවුම් යවන WhatsApp අංකය (Country code + Number)
              </span>
              <input
                type="text"
                value={sellerPhone}
                onChange={(e) => setSellerPhone(e.target.value)}
                placeholder="e.g., 94711531989"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm font-mono font-medium transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Textarea: Customization Instructions */}
          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-extrabold text-slate-800">
              4. Customization Instructions & Notes
            </label>
            <span className="block text-[11px] sm:text-xs font-semibold text-orange-950">
              අමතර උපදෙස් (Textarea for tagline, contact numbers to show on cover, etc.)
            </span>
            <textarea
              rows={3}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
              placeholder="e.g., Add tagline: 'Elegance in Every Stitch', add phone number 077-1234567 and delivery tag on cover photo."
              className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm font-medium transition-all shadow-xs"
            />
          </div>

          {/* Validation Alert */}
          {validationError && (
            <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs sm:text-sm font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 text-red-600" />
              <span>{validationError}</span>
            </div>
          )}

          {/* Selection Checklist Before Submit */}
          <div className="p-3 sm:p-4 rounded-xl bg-slate-50 border border-slate-200 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2.5 sm:gap-3">
            <div className="text-[11px] sm:text-xs space-y-0.5 text-slate-700">
              <p className="font-bold">Summary of Selected Items:</p>
              <p>• Logo: <span className="font-mono font-bold text-orange-600">{selectedLogo ? selectedLogo.code + ' (' + selectedLogo.nameEn + ')' : '❌ Not selected'}</span></p>
              <p>• Cover: <span className="font-mono font-bold text-orange-600">{selectedCover ? selectedCover.code + ' (' + selectedCover.nameEn + ')' : '❌ Not selected'}</span></p>
            </div>

            {selectedLogo && selectedCover && (
              <span className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-100 text-emerald-800 font-bold text-[11px] sm:text-xs">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> All set for WhatsApp
              </span>
            )}
          </div>

          {/* WhatsApp Submit CTA */}
          <button
            type="submit"
            className="w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl bg-gradient-to-r from-orange-600 via-orange-500 to-amber-500 hover:from-orange-700 hover:to-amber-600 text-white font-black text-base sm:text-lg tracking-wide shadow-xl hover:shadow-2xl transition-all transform active:scale-[0.98] flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer"
          >
            <Send className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
            <div className="flex flex-col sm:flex-row items-center sm:gap-2 text-center">
              <span>💬 Submit Order via WhatsApp</span>
              <span className="text-[11px] sm:text-xs font-normal text-amber-100">(WhatsApp හරහා ඇණවුම් කරන්න)</span>
            </div>
          </button>
        </form>
      </div>
    </section>
  );
};
