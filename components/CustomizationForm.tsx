'use client';

import React, { useState, ChangeEvent, FormEvent, useRef } from 'react';
import { DesignItem } from '../data/designData';
import { Upload, X, MessageCircle, CheckCircle2, AlertTriangle, Eye } from 'lucide-react';

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
  const [whatsappNumber, setWhatsappNumber] = useState('');
  const [email, setEmail] = useState('');
  const [products, setProducts] = useState('');
  const [colorPrefs, setColorPrefs] = useState('');
  const [instructions, setInstructions] = useState('');
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [previewModalFile, setPreviewModalFile] = useState<{ url: string; name: string } | null>(null);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [validationError, setValidationError] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<{ brandName?: string; whatsappNumber?: string; email?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    setUploadError(null);
    if (!e.target.files || e.target.files.length === 0) return;

    const filesArr = Array.from(e.target.files);

    // Validate file type and size
    for (const file of filesArr) {
      if (!file.type.startsWith('image/')) {
        setUploadError('Only image files (JPG, PNG, WEBP) are allowed. (ඡායාරූප ගොනු පමණක් එක් කරන්න)');
        e.target.value = '';
        return;
      }
      if (file.size > 10 * 1024 * 1024) {
        setUploadError('File size must be under 10MB per image. (ඡායාරූපයක ප්‍රමාණය 10MB ට වඩා අඩු විය යුතුය)');
        e.target.value = '';
        return;
      }
    }

    if (uploadedFiles.length + filesArr.length > 2) {
      setUploadError('Maximum 2 custom idea photos allowed. (උපරිම ඡායාරූප 2ක් පමණි)');
      e.target.value = '';
      return;
    }

    setUploadedFiles((prev) => [...prev, ...filesArr].slice(0, 2));
    e.target.value = '';
  };

  const removeFile = (index: number) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
    setUploadError(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleSubmitWhatsApp = async (e: FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setUploadError(null);
    setFieldErrors({});

    const errors: { brandName?: string; whatsappNumber?: string; email?: string } = {};

    // 1. Validate Brand Name
    const cleanBrand = brandName.trim();
    if (!cleanBrand) {
      errors.brandName = 'Please enter your Brand/Page Name. (කරුණාකර ව්‍යාපාරයේ නම ඇතුළත් කරන්න)';
    } else if (cleanBrand.length < 2) {
      errors.brandName = 'Brand Name must be at least 2 characters long.';
    }

    // 2. Validate WhatsApp Number
    const cleanPhone = whatsappNumber.replace(/[\s\-\(\)]/g, '');
    const phoneRegex = /^\+?[0-9]{9,15}$/;
    if (!whatsappNumber.trim()) {
      errors.whatsappNumber = 'Please enter your WhatsApp number. (කරුණාකර ඔබගේ WhatsApp අංකය ඇතුළත් කරන්න)';
    } else if (!phoneRegex.test(cleanPhone)) {
      errors.whatsappNumber = 'Please enter a valid phone number e.g. 0771234567 or +94771234567. (කරුණාකර නිවැරදි WhatsApp අංකයක් ඇතුළත් කරන්න)';
    }

    // 3. Validate Email Address (Optional field, but validate format if provided)
    const cleanEmail = email.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (cleanEmail && !emailRegex.test(cleanEmail)) {
      errors.email = 'Please enter a valid email address. (කරුණාකර නිවැරදි විද්‍යුත් තැපැල් ලිපිනයක් ඇතුළත් කරන්න)';
    }

    // 4. Validate Logo selection from Section 1
    if (!selectedLogo) {
      setFieldErrors(errors);
      setValidationError('Please select a Logo Example from Section 1 above. (කරුණාකර ලාංඡනයක් තෝරන්න)');
      return;
    }

    // 5. Validate Cover selection from Section 2
    if (!selectedCover) {
      setFieldErrors(errors);
      setValidationError('Please select a Cover Photo Example from Section 2 above. (කරුණාකර කවරයේ ඡායාරූපයක් තෝරන්න)');
      return;
    }

    // If input fields have validation errors, halt submission
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      const firstError = Object.values(errors)[0];
      setValidationError(firstError || 'Please fix the highlighted fields.');
      return;
    }

    // Get WhatsApp number from env or fallback to default
    const envPhone = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '94711531989';
    const phoneToUse = envPhone.replace(/[^0-9]/g, '');

    setIsSubmitting(true);

    try {
      const uploadedImageUrls: string[] = [];

      // Attempt to upload reference photos if attached
      if (uploadedFiles.length > 0) {
        const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
        const uploadEndpoint = process.env.NEXT_PUBLIC_IMGBB_API_URL || 'https://api.imgbb.com/1/upload';

        if (apiKey) {
          for (const file of uploadedFiles) {
            try {
              const formData = new FormData();
              formData.append('image', file);

              const response = await fetch(`${uploadEndpoint}?key=${apiKey}`, {
                method: 'POST',
                body: formData,
              });

              const data = await response.json();
              if (data.success && data.data?.url) {
                uploadedImageUrls.push(data.data.url);
              }
            } catch (imgErr) {
              console.warn('Reference photo upload to ImgBB failed for:', file.name, imgErr);
            }
          }
        }
      }

      // Prepare complete order payload for API submission
      const orderPayload = {
        brand_name: brandName.trim(),
        whatsapp: whatsappNumber.trim(),
        whatsapp_number: whatsappNumber.trim(),
        email: email.trim(),
        products_services: products.trim(),
        color_preferences: colorPrefs.trim(),
        logo_code: selectedLogo.code,
        logo_name: selectedLogo.nameEn,
        cover_code: selectedCover.code,
        cover_name: selectedCover.nameEn,
        selected_logo: `${selectedLogo.code} (${selectedLogo.nameEn})`,
        selected_cover: `${selectedCover.code} (${selectedCover.nameEn})`,
        instructions: instructions.trim(),
        customization_instructions: `Logo: ${selectedLogo.code} (${selectedLogo.nameEn}), Cover: ${selectedCover.code} (${selectedCover.nameEn}). Notes: ${instructions.trim() || 'None'}`,
        reference_photos: uploadedImageUrls,
      };

      const designOrderApiUrl = process.env.NEXT_PUBLIC_DESIGN_ORDER_API_URL || 'https://erp.shakthimathaya.site/api/public/design-order';
      const designOrderApiKey = process.env.NEXT_PUBLIC_DESIGN_ORDER_API_KEY || '7f8a92b3c4d5e6f10293847561a2b3c4d5e6f7a8b9c0d1e2';

      // Submit design order
      try {
        const proxyRes = await fetch('/api/submit-order', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(orderPayload),
        });

        if (!proxyRes.ok) {
          // Direct submission fallback if local proxy route is not ready
          await fetch(`${designOrderApiUrl}?api_key=${designOrderApiKey}`, {
            method: 'POST',
            mode: 'no-cors',
            headers: { 'Content-Type': 'text/plain' },
            body: JSON.stringify({ ...orderPayload, api_key: designOrderApiKey }),
          });
        }
      } catch (err) {
        console.warn('Direct order dispatch log:', err);
      }

      // Construct formatted text message for WhatsApp
      const messageLines = [
        `🎨 *NEW CUSTOM BRANDING ORDER* 🎨`,
        `----------------------------------------`,
        `📌 *Brand / Page Name:* ${brandName.trim()}`,
        `📱 *WhatsApp Number:* ${whatsappNumber.trim()}`,
        `✉️ *Email Address:* ${email.trim() || 'Not specified'}`,
        `🛒 *Products / Services:* ${products.trim() || 'Not specified'}`,
        `🎨 *Color Preferences:* ${colorPrefs.trim() || 'Default design colors'}`,
        ``,
        `--- *SELECTED DESIGNS* ---`,
        `🔹 *Logo Code:* ${selectedLogo.code} (${selectedLogo.nameEn})`,
        `🔹 *Cover Photo Code:* ${selectedCover.code} (${selectedCover.nameEn})`,
        ``,
        `--- *CUSTOM NOTES* ---`,
        `📝 *Instructions:* ${instructions.trim() || 'None'}`,
        uploadedImageUrls.length > 0 ? `🖼️ *Reference Photos:*\n${uploadedImageUrls.join('\n')}` : `🖼️ *Reference Photos:* None`,
        `----------------------------------------`,
        `Sent via Custom Branding Studio Ordering Portal`
      ];

      const fullMessage = messageLines.join('\n');
      const encodedMessage = encodeURIComponent(fullMessage);
      const whatsappUrl = `https://wa.me/${phoneToUse}?text=${encodedMessage}`;

      // Open WhatsApp in new tab (or redirect if popup blocked)
      const whatsappWindow = window.open(whatsappUrl, '_blank');
      if (!whatsappWindow || whatsappWindow.closed || typeof whatsappWindow.closed === 'undefined') {
        window.location.href = whatsappUrl;
      }
    } catch (err: unknown) {
      console.warn('Order submission encountered error, continuing to WhatsApp:', err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section ref={formRef} className="w-full max-w-6xl mx-auto px-3 sm:px-4 my-6 sm:my-10 scroll-mt-16">
      <div className="rounded-xl sm:rounded-2xl bg-white border-2 border-brand-rust/30 shadow-xl overflow-hidden">
        {/* Section Header */}
        <div className="bg-linear-to-r from-brand-dark via-brand-rust to-brand-accent p-4 sm:p-6 text-white">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <span className="w-7 h-7 sm:w-9 sm:h-9 rounded-full bg-white text-brand-dark font-bold text-sm sm:text-lg flex items-center justify-center shadow-md shrink-0">
              3
            </span>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight">
                3. Customization Details
              </h2>
              <p className="text-xs sm:text-sm font-semibold text-amber-100">
                අභිරුචිකරණ විස්තර
              </p>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmitWhatsApp} className="p-4 sm:p-8 space-y-4 sm:space-y-6">
          {/* File Upload Box */}
          <div className="space-y-1.5">
            <label className="block text-xs sm:text-sm font-bold text-slate-800">
              Custom Reference Photo Upload <span className="text-[11px] font-normal text-slate-500">(Optional)</span>
            </label>

            <div className="border-2 border-dashed border-brand-rust/40 rounded-xl bg-orange-50/50 hover:bg-orange-50/90 transition-colors p-4 sm:p-6 text-center flex flex-col items-center justify-center space-y-2 sm:space-y-3 cursor-pointer relative group">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                multiple
                onChange={handleFileUpload}
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full z-10"
                disabled={uploadedFiles.length >= 2}
              />

              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-orange-100 text-brand-accent flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-orange-200 transition-all duration-300 shadow-xs">
                <Upload className="w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
              </div>

              <div>
                <p className="text-xs sm:text-sm font-bold text-orange-950">
                  Don&apos;t like the examples? Upload your own idea (Max 2 Photos)
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
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                {uploadedFiles.map((file, idx) => {
                  const objectUrl = URL.createObjectURL(file);
                  return (
                    <div
                      key={idx}
                      className="relative flex items-center gap-3 p-2 rounded-xl bg-orange-50/90 border border-orange-200/90 shadow-xs hover:border-orange-300 transition-all group"
                    >
                      {/* Image Thumbnail Preview */}
                      <div
                        onClick={() => setPreviewModalFile({ url: objectUrl, name: file.name })}
                        className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-orange-200 cursor-pointer shadow-2xs group-hover:opacity-90 transition-opacity"
                        title="Click to enlarge preview"
                      >
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={objectUrl}
                          alt={file.name}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                          <Eye className="w-4 h-4 text-white drop-shadow-md" />
                        </div>
                      </div>

                      {/* File Info */}
                      <div className="flex-1 min-w-0 pr-6">
                        <p className="text-xs font-bold text-slate-800 truncate" title={file.name}>
                          {file.name}
                        </p>
                        <p className="text-[10px] font-medium text-orange-800">
                          {(file.size / 1024).toFixed(0)} KB
                        </p>
                        <button
                          type="button"
                          onClick={() => setPreviewModalFile({ url: objectUrl, name: file.name })}
                          className="inline-flex items-center gap-1 text-[10px] font-bold text-orange-600 hover:text-orange-800 mt-0.5 cursor-pointer"
                        >
                          <Eye className="w-3 h-3" /> Click to enlarge
                        </button>
                      </div>

                      {/* Remove File Button */}
                      <button
                        type="button"
                        onClick={() => removeFile(idx)}
                        className="absolute top-2 right-2 p-1 rounded-full bg-white hover:bg-red-500 hover:text-white text-slate-400 transition-colors shadow-2xs cursor-pointer border border-slate-200"
                        title="Remove photo"
                      >
                        <X className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  );
                })}
              </div>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {/* Input 1: Brand/Page Name */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-bold text-slate-800">
                1. Brand / Page Name <span className="text-red-500">*</span>
              </label>
              <span className="block text-[11px] sm:text-xs font-medium text-orange-950">
                ව්‍යාපාරයේ / පේජ් එකේ නම (&quot;The exact name you want on the designs&quot;)
              </span>
              <input
                type="text"
                required
                value={brandName}
                onChange={(e) => {
                  setBrandName(e.target.value);
                  if (fieldErrors.brandName) setFieldErrors((prev) => ({ ...prev, brandName: undefined }));
                }}
                placeholder="e.g., Royal Closet Boutique"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all shadow-xs focus:outline-none focus:ring-2 ${fieldErrors.brandName
                    ? 'border-red-500 ring-2 ring-red-100 text-red-900 bg-red-50/20'
                    : 'border-slate-300 focus:ring-orange-500 focus:border-orange-500'
                  }`}
              />
              {fieldErrors.brandName && (
                <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  <span>{fieldErrors.brandName}</span>
                </p>
              )}
            </div>

            {/* Input 2: WhatsApp Number (Required) */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-bold text-slate-800">
                2. WhatsApp Number <span className="text-red-500">*</span>
              </label>
              <span className="block text-[11px] sm:text-xs font-medium text-orange-950">
                WhatsApp අංකය (&quot;Your active WhatsApp contact number&quot;)
              </span>
              <input
                type="tel"
                required
                value={whatsappNumber}
                onChange={(e) => {
                  setWhatsappNumber(e.target.value);
                  if (fieldErrors.whatsappNumber) setFieldErrors((prev) => ({ ...prev, whatsappNumber: undefined }));
                }}
                placeholder="e.g., 0771234567 or +94771234567"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all shadow-xs focus:outline-none focus:ring-2 ${fieldErrors.whatsappNumber
                    ? 'border-red-500 ring-2 ring-red-100 text-red-900 bg-red-50/20'
                    : 'border-slate-300 focus:ring-orange-500 focus:border-orange-500'
                  }`}
              />
              {fieldErrors.whatsappNumber && (
                <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  <span>{fieldErrors.whatsappNumber}</span>
                </p>
              )}
            </div>

            {/* Input 3: Email Address (Optional) */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-bold text-slate-800">
                3. Email Address <span className="text-[11px] font-normal text-slate-500">(Optional)</span>
              </label>
              <span className="block text-[11px] sm:text-xs font-medium text-orange-950">
                විද්‍යුත් තැපෑල (&quot;To receive high quality files / order updates&quot;)
              </span>
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (fieldErrors.email) setFieldErrors((prev) => ({ ...prev, email: undefined }));
                }}
                placeholder="e.g., example@gmail.com"
                className={`w-full px-3.5 py-2.5 rounded-xl border text-sm font-medium transition-all shadow-xs focus:outline-none focus:ring-2 ${fieldErrors.email
                    ? 'border-red-500 ring-2 ring-red-100 text-red-900 bg-red-50/20'
                    : 'border-slate-300 focus:ring-orange-500 focus:border-orange-500'
                  }`}
              />
              {fieldErrors.email && (
                <p className="text-[11px] font-semibold text-red-600 flex items-center gap-1 mt-1">
                  <AlertTriangle className="w-3.5 h-3.5 shrink-0 text-red-500" />
                  <span>{fieldErrors.email}</span>
                </p>
              )}
            </div>

            {/* Input 4: Products / Services */}
            <div className="space-y-1">
              <label className="block text-xs sm:text-sm font-bold text-slate-800">
                4. Products / Services <span className="text-[11px] font-normal text-slate-500">(Optional)</span>
              </label>
              <span className="block text-[11px] sm:text-xs font-medium text-orange-950">
                නිෂ්පාදන / සේවාවන් (&quot;e.g., Clothing, Cakes, Cosmetics, Bags, etc.&quot;)
              </span>
              <input
                type="text"
                value={products}
                onChange={(e) => setProducts(e.target.value)}
                placeholder="e.g., Ladies Wear, Frocks, Accessories"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm font-medium transition-all shadow-xs"
              />
            </div>

            {/* Input 5: Color Preferences */}
            <div className="space-y-1 md:col-span-2">
              <label className="block text-xs sm:text-sm font-bold text-slate-800">
                5. Color Preferences for logo & covers <span className="text-[11px] font-normal text-slate-500">(Optional)</span>
              </label>
              <span className="block text-[11px] sm:text-xs font-medium text-orange-950">
                වර්ණ තේරීම් (&quot;e.g., Navy Blue and Gold&quot;)
              </span>
              <input
                type="text"
                value={colorPrefs}
                onChange={(e) => setColorPrefs(e.target.value)}
                placeholder="e.g., Gold and Dark Royal Blue"
                className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-sm font-medium transition-all shadow-xs"
              />
            </div>
          </div>

          {/* Textarea: Customization Instructions */}
          <div className="space-y-1">
            <label className="block text-xs sm:text-sm font-bold text-slate-800">
              6. Customization Instructions & Notes <span className="text-[11px] font-normal text-slate-500">(Optional)</span>
            </label>
            <span className="block text-[11px] sm:text-xs font-medium text-orange-950">
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
            <div className="text-[11px] sm:text-xs space-y-1 text-slate-800">
              <p className="font-bold text-slate-900">Summary of Selected Items:</p>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${selectedLogo ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                <span className="font-semibold text-slate-700">Logo:</span>
                <span className={`font-mono font-bold ${selectedLogo ? 'text-brand-rust' : 'text-slate-500'}`}>
                  {selectedLogo ? `${selectedLogo.code} (${selectedLogo.nameEn})` : 'Not selected'}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full shrink-0 ${selectedCover ? 'bg-emerald-500' : 'bg-amber-400'}`} />
                <span className="font-semibold text-slate-700">Cover:</span>
                <span className={`font-mono font-bold ${selectedCover ? 'text-brand-rust' : 'text-slate-500'}`}>
                  {selectedCover ? `${selectedCover.code} (${selectedCover.nameEn})` : 'Not selected'}
                </span>
              </div>
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
            disabled={isSubmitting}
            className={`w-full py-3.5 sm:py-4 px-4 sm:px-6 rounded-xl sm:rounded-2xl font-bold text-base sm:text-lg tracking-wide shadow-xl transition-all transform flex items-center justify-center gap-2.5 sm:gap-3 cursor-pointer ${isSubmitting
              ? 'bg-slate-400 text-white cursor-not-allowed scale-100'
              : 'bg-brand-accent hover:bg-brand-orange text-white hover:shadow-2xl active:scale-[0.98]'
              }`}
          >
            {isSubmitting ? (
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 sm:w-6 sm:h-6 border-4 border-white border-t-transparent rounded-full animate-spin" />
                <span>Uploading Photos...</span>
              </div>
            ) : (
              <>
                <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 shrink-0" />
                <div className="flex flex-col sm:flex-row items-center sm:gap-2 text-center">
                  <span>Submit Order via WhatsApp</span>
                  <span className="text-[11px] sm:text-xs font-normal text-amber-100">(WhatsApp හරහා ඇණවුම් කරන්න)</span>
                </div>
              </>
            )}
          </button>
        </form>
      </div>

      {/* Fullscreen Uploaded Reference Image Lightbox Modal */}
      {previewModalFile && (
        <div
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex flex-col items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200"
          onClick={() => setPreviewModalFile(null)}
        >
          <div
            className="relative max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={previewModalFile.url}
              alt={previewModalFile.name}
              className="max-h-[75vh] max-w-full object-contain rounded-xl shadow-2xl border border-white/20"
            />
            <p className="mt-3 text-xs sm:text-sm font-semibold text-white/90 bg-black/60 px-3.5 py-1 rounded-full backdrop-blur-sm truncate max-w-full">
              {previewModalFile.name}
            </p>
          </div>
          <button
            type="button"
            onClick={() => setPreviewModalFile(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-white/20 hover:bg-white/30 text-white cursor-pointer transition-colors shadow-lg"
            title="Close preview"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
      )}
    </section>
  );
};
