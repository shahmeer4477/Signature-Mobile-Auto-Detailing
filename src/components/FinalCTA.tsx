import React from 'react';
import { ArrowRight, Sparkles, MessageCircle } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FinalCTAProps {
  onOpenBooking: () => void;
  onContactClick: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenBooking, onContactClick }) => {
  return (
    <section className="relative py-28 bg-[#07130F] overflow-hidden">
      {/* Background Photography with Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={SITE_CONFIG.IMAGES.hero}
          alt="Luxury vehicle detailing background"
          className="w-full h-full object-cover object-center filter brightness-40 contrast-125"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#05110D] via-[#07130F]/85 to-[#05110D]" />
        
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-[#DFBE82]/8 blur-[100px] pointer-events-none rounded-full" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0B1C16]/90 border border-[#DFBE82]/40 mb-6 backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#DFBE82]" />
          <span className="text-[11px] font-semibold tracking-[0.22em] text-[#DFBE82] uppercase">
            ELEVATE YOUR AUTOMOTIVE EXPERIENCE
          </span>
        </div>

        <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-5xl md:text-6xl font-bold tracking-[0.02em] text-[#FBF9F5] leading-tight mb-4">
          Your Vehicle Deserves the{' '}
          <span className="text-gold-gradient font-normal italic font-['Cormorant_Garamond',serif]">
            Signature Treatment.
          </span>
        </h2>

        <p className="text-sm sm:text-base md:text-lg text-[#9EABA2] max-w-2xl font-normal leading-relaxed mb-8">
          Premium detailing. Professional care. Delivered directly to your location. Ready to experience the pinnacle of vehicle preservation?
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap group"
          >
            <span>BOOK YOUR DETAIL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onContactClick}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-[#DFBE82]/40 bg-[#0B1C16]/70 text-[#FBF9F5] font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase hover:bg-[#0F251E] hover:border-[#DFBE82] transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            <MessageCircle className="w-4 h-4 text-[#DFBE82]" />
            <span>CONTACT US</span>
          </button>
        </div>
      </div>
    </section>
  );
};
