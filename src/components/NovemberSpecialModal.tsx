import React from 'react';
import { X, Sparkles, ArrowRight, Tag } from 'lucide-react';

interface NovemberSpecialModalProps {
  isOpen: boolean;
  onClose: () => void;
  onClaimOffer: (serviceId: string, notes: string) => void;
}

export const NovemberSpecialModal: React.FC<NovemberSpecialModalProps> = ({
  isOpen,
  onClose,
  onClaimOffer,
}) => {
  if (!isOpen) return null;

  const specialOfferNotes =
    'November Special Offer selected — Full Interior + Exterior Detail package for $205 (original price $229). $24 discount applied.';

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="special-offer-title"
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center p-3.5 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-300"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg bg-[#07130F] border border-[#DFBE82]/40 rounded-sm shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_35px_rgba(212,175,55,0.15)] overflow-hidden my-auto animate-in zoom-in-95 duration-300"
      >
        {/* Top Gold Gradient Bar */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent" />

        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3.5 right-3.5 z-20 w-8 h-8 rounded-full bg-[#05110D] border border-[#DFBE82]/40 text-[#DFBE82] hover:text-[#FBF9F5] hover:border-[#DFBE82] flex items-center justify-center cursor-pointer transition-colors"
          aria-label="Close special offer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Inner Container */}
        <div className="p-6 sm:p-8 text-center">
          {/* Badge: NOVEMBER SPECIAL */}
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#DFBE82]/10 border border-[#DFBE82]/30 text-[#DFBE82] text-[10px] sm:text-[11px] font-bold tracking-[0.24em] uppercase mb-3">
            <Sparkles className="w-3.5 h-3.5 text-[#DFBE82]" />
            <span>NOVEMBER SPECIAL</span>
          </div>

          {/* Heading: INTERIOR DETAIL + EXTERIOR DETAIL */}
          <h2
            id="special-offer-title"
            className="font-['Cinzel','Cormorant_Garamond',serif] text-xl sm:text-2xl md:text-3xl font-bold tracking-[0.03em] text-[#FBF9F5] mb-2 leading-tight"
          >
            INTERIOR DETAIL + EXTERIOR DETAIL
          </h2>

          <p className="text-xs sm:text-sm text-[#9EABA2] font-normal max-w-md mx-auto mb-4 leading-relaxed">
            Give your vehicle the premium care it deserves this November with our complete package.
          </p>

          {/* Pricing Box */}
          <div className="my-5 p-4 sm:p-5 bg-[#05110D] border border-[#16362C] rounded-sm max-w-sm mx-auto text-left">
            <div className="flex items-center justify-between text-xs sm:text-sm text-[#9EABA2] pb-2.5 border-b border-[#122820]">
              <span>Original Combined Price:</span>
              <span className="line-through font-medium text-[#9EABA2]">$229</span>
            </div>
            <div className="flex items-center justify-between pt-3">
              <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-[#DFBE82]">
                November Special Price:
              </span>
              <span className="font-['Cinzel',serif] text-2xl sm:text-3xl font-bold text-[#DFBE82]">
                $205
              </span>
            </div>
          </div>

          {/* Banner: SAVE $24 — 10% OFF */}
          <div className="mb-6 py-2 px-4 bg-[#DFBE82]/10 border border-[#DFBE82]/30 rounded-sm inline-flex items-center justify-center gap-2 text-[#DFBE82]">
            <Tag className="w-3.5 h-3.5 text-[#DFBE82]" />
            <span className="text-xs sm:text-sm font-bold tracking-[0.16em] uppercase">
              SAVE $24 — 10% OFF
            </span>
          </div>

          {/* Single Action Button: CLAIM NOVEMBER SPECIAL */}
          <button
            type="button"
            onClick={() => onClaimOffer('full-detail', specialOfferNotes)}
            className="w-full max-w-sm mx-auto py-3.5 px-6 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group mb-4"
          >
            <span>CLAIM NOVEMBER SPECIAL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          {/* Dismiss Link */}
          <button
            type="button"
            onClick={onClose}
            className="text-xs text-[#9EABA2] hover:text-[#DFBE82] transition-colors underline-offset-4 hover:underline cursor-pointer tracking-wider block mx-auto"
          >
            No thanks, continue browsing
          </button>
        </div>
      </div>
    </div>
  );
};
