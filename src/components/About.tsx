import React from 'react';
import { Check } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface AboutProps {
  onLearnMore?: () => void;
  onOpenBooking: () => void;
}

export const About: React.FC<AboutProps> = ({ onOpenBooking }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const checklistItems = [
    'Scratch-free hand wash procedures',
    'pH-balanced leather rejuvenation',
    'Precision machine swirl reduction',
    'Premium Interior & Exterior Care',
  ];

  return (
    <section id="about" ref={ref} className="py-24 bg-[#07130F] relative overflow-hidden">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#DFBE82]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Premium Automotive Image (Fade from left + subtle scale) */}
          <div className="lg:col-span-6 relative reveal-fade-left">
            <div className="relative group rounded-sm overflow-hidden border border-[#DFBE82]/30 shadow-2xl shadow-black/80">
              <img
                src={SITE_CONFIG.IMAGES.about}
                alt="Automotive detailing artisan hand buffing a luxury midnight green sports vehicle"
                className="w-full h-[380px] sm:h-[480px] object-cover object-center transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              
              {/* Subtle Dark Emerald & Gold Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-transparent to-transparent opacity-60" />
              <div className="absolute inset-0 border border-[#DFBE82]/20 pointer-events-none" />

              {/* Decorative Corner Metallic Accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-[#DFBE82]" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-[#DFBE82]" />
            </div>

            {/* Floating Luxury Stamp / Badge */}
            <div className="absolute -bottom-6 -right-4 sm:bottom-6 sm:-right-6 bg-[#05110D]/95 backdrop-blur-md border border-[#DFBE82]/40 p-4 sm:p-5 rounded-sm shadow-xl hidden sm:block max-w-[240px] transition-all duration-700 delay-300">
              <div className="font-['Cinzel','Cormorant_Garamond',serif] text-xs font-bold text-[#DFBE82] tracking-[0.16em] uppercase">
                THE SIGNATURE FINISH
              </div>
              <p className="text-[11px] text-[#9EABA2] mt-1 leading-snug">
                Precision detailing focused on a clean, refined and lasting finish.
              </p>
            </div>
          </div>

          {/* Right Column: Narrative Copy */}
          <div className="lg:col-span-6 flex flex-col items-start">
            {/* Eyebrow */}
            <span
              className="reveal-fade-up text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase mb-3"
              style={{ transitionDelay: '100ms' }}
            >
              ABOUT SIGNATURE
            </span>

            {/* Main Heading */}
            <h2
              className="reveal-fade-up font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] leading-tight"
              style={{ transitionDelay: '180ms' }}
            >
              Detailing With a{' '}
              <span className="text-gold-gradient font-normal italic font-['Cormorant_Garamond',serif]">
                Signature Standard.
              </span>
            </h2>

            {/* Gold Accent Line */}
            <div
              className="reveal-fade-up w-20 h-[2px] bg-gradient-to-r from-[#DFBE82] via-[#D4AF37] to-transparent my-6"
              style={{ transitionDelay: '260ms' }}
            />

            {/* Sub-banner Highlight */}
            <div
              className="reveal-fade-up text-xs sm:text-sm font-semibold tracking-[0.22em] text-[#DFBE82] uppercase mb-4"
              style={{ transitionDelay: '320ms' }}
            >
              PREMIUM CARE. AT YOUR LOCATION.
            </div>

            {/* Primary Paragraph */}
            <p
              className="reveal-fade-up text-base sm:text-lg text-[#FBF9F5]/90 font-light leading-relaxed mb-4"
              style={{ transitionDelay: '380ms' }}
            >
              At Signature Mobile Auto Detailing, we believe your vehicle deserves more than a quick wash. Every detail is approached with precision, care, and a commitment to delivering a finish you can be proud of.
            </p>

            <p
              className="reveal-fade-up text-sm sm:text-base text-[#9EABA2] font-normal leading-relaxed mb-8"
              style={{ transitionDelay: '460ms' }}
            >
              Whether tending to an exotic weekend cruiser, a prestigious executive saloon, or a family SUV, we eliminate the inconvenience of driving to a shop and waiting around. With customer-provided water and standard electrical power, we bring professional equipment, premium supplies, and master craftsmanship straight to your private driveway or residence.
            </p>

            {/* Feature Checklist with subtle stagger */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full mb-8">
              {checklistItems.map((item, idx) => (
                <div
                  key={item}
                  className="reveal-fade-up flex items-center gap-2.5 text-xs text-[#FBF9F5]"
                  style={{ transitionDelay: `${540 + idx * 70}ms` }}
                >
                  <div className="w-4 h-4 rounded-full bg-[#0F251E] border border-[#DFBE82]/40 flex items-center justify-center shrink-0">
                    <Check className="w-2.5 h-2.5 text-[#DFBE82]" />
                  </div>
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Button */}
            <div
              className="reveal-fade-up flex items-center pt-2"
              style={{ transitionDelay: '760ms' }}
            >
              <button
                onClick={onOpenBooking}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs sm:text-sm tracking-[0.14em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.35)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer"
              >
                <span>BOOK APPOINTMENT</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
