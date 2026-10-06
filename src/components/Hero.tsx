import React, { useState, useEffect } from 'react';
import { ArrowRight, ChevronDown, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface HeroProps {
  onOpenBooking: () => void;
  onExploreServices: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking, onExploreServices }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    // Cinematic entrance on mount
    const timer = setTimeout(() => setIsLoaded(true), 60);

    // Subtle gentle parallax for background image
    const handleScroll = () => {
      if (window.scrollY < window.innerHeight) {
        setScrollY(window.scrollY);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-[100svh] flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#07130F]"
    >
      {/* Background Cinematic Visual Asset with subtle slow zoom & gentle parallax */}
      <div
        className="absolute inset-0 z-0 will-change-transform"
        style={{
          transform: `translate3d(0, ${scrollY * 0.18}px, 0)`,
        }}
      >
        <img
          src={SITE_CONFIG.IMAGES.hero}
          alt="Premium black luxury sports vehicle reflecting mirror finish detailing"
          className="w-full h-full object-cover object-center animate-hero-zoom transition-transform duration-1000"
          loading="eager"
          referrerPolicy="no-referrer"
        />

        {/* Sophisticated Dark Emerald & Black Scrim Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#040C09]/95 via-[#07130F]/80 to-[#040C09]/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-transparent to-[#05110D]/70" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(11,28,22,0.4)_0%,rgba(4,12,9,0.85)_100%)]" />
        
        {/* Subtle Gold Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[#DFBE82]/5 blur-[120px] pointer-events-none rounded-full" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Eyebrow Label */}
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1C16]/80 border border-[#DFBE82]/30 shadow-lg shadow-black/30 mb-6 backdrop-blur-sm transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '100ms' }}
        >
          <Sparkles className="w-3.5 h-3.5 text-[#DFBE82]" />
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
            PREMIUM MOBILE AUTO DETAILING
          </span>
        </div>

        {/* Primary H1 Headline */}
        <h1
          className={`font-['Cinzel','Cormorant_Garamond',serif] text-4xl sm:text-6xl md:text-7xl font-bold tracking-[0.03em] leading-[1.08] text-[#FBF9F5] max-w-4xl transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '220ms' }}
        >
          Premium Care.{' '}
          <span
            className={`block mt-1 sm:mt-2 text-gold-gradient font-normal italic font-['Cormorant_Garamond',serif] transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
            style={{ transitionDelay: '340ms' }}
          >
            Delivered to Your Door.
          </span>
        </h1>

        {/* Supporting Headline & Description */}
        <p
          className={`mt-5 text-sm sm:text-base md:text-lg font-medium tracking-[0.08em] text-[#DFBE82] max-w-2xl transition-all duration-750 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '460ms' }}
        >
          Luxury detailing, wherever your vehicle calls home.
        </p>

        <p
          className={`mt-3 text-sm sm:text-base text-[#9EABA2] max-w-2xl font-normal leading-relaxed transition-all duration-750 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
          }`}
          style={{ transitionDelay: '540ms' }}
        >
          Professional mobile auto detailing designed to restore, protect, and elevate your vehicle — at your location.
        </p>

        {/* Call to Actions */}
        <div
          className={`mt-9 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
          style={{ transitionDelay: '640ms' }}
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase hover:shadow-[0_0_30px_rgba(212,175,55,0.45)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap group"
          >
            <span>BOOK YOUR DETAIL</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>

          <button
            onClick={onExploreServices}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-[#DFBE82]/40 bg-[#0B1C16]/50 text-[#FBF9F5] font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase hover:bg-[#0F251E] hover:border-[#DFBE82] transition-all cursor-pointer whitespace-nowrap backdrop-blur-sm"
          >
            <span>EXPLORE SERVICES</span>
          </button>
        </div>

        {/* Premium Brand Statements Minimal Row */}
        <div
          className={`mt-12 flex flex-wrap items-center justify-center gap-x-6 gap-y-2.5 text-xs text-[#9EABA2] font-medium tracking-wider transition-all duration-800 ease-[cubic-bezier(0.22,1,0.36,1)] ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '780ms' }}
        >
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFBE82]" />
            Luxury Vehicle Care
          </span>
          <span className="hidden sm:inline text-[#DFBE82]/40">·</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFBE82]" />
            Meticulous Attention to Detail
          </span>
          <span className="hidden sm:inline text-[#DFBE82]/40">·</span>
          <span className="inline-flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#DFBE82]" />
            Premium Service at Your Location
          </span>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#trust-strip"
        className={`absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1.5 text-[10px] tracking-[0.26em] text-[#DFBE82]/80 hover:text-[#DFBE82] transition-all duration-700 uppercase group ${
          isLoaded ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ transitionDelay: '900ms' }}
      >
        <span className="font-semibold">SCROLL TO EXPLORE</span>
        <ChevronDown className="w-4 h-4 text-[#DFBE82] animate-bounce" />
      </a>
    </section>
  );
};
