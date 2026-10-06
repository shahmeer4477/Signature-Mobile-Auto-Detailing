import React from 'react';
import { Clock, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface ServicesProps {
  onSelectServiceToBook: (serviceId: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceToBook }) => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const exteriorServices = [
    'Pressure Washer Rinse',
    'Foam Soap Hand Wash',
    'Buffer Wax',
    'Tire Degrease',
    'Dress Wheels, Tires & Rims',
    'Clean All Door Jambs & Trunk Seals',
    'Dry Microfiber Cloth',
  ];

  const interiorServices = [
    'Vacuum All Carpets and Seats',
    'Wipe Down All Interior Surfaces',
    'Dress Interior Surfaces',
    'Leather Conditioner',
    'Shampoo All Stains',
    'Pet Hair Removal',
    'Clean Interior Windows',
  ];

  return (
    <section id="services" ref={ref} className="py-24 bg-[#05110D] relative">
      {/* Decorative hairline divider top */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE82]/20 to-transparent" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade-up">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
            MASTER CRAFTSMANSHIP
          </span>
          <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] mt-2 mb-4">
            Signature Services
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#9EABA2] font-normal">
            Professional detailing designed around your vehicle.
          </p>
        </div>

        {/* 3 Balanced Compact Cards Grid with Subtle Presentation Stagger */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {/* Card 01 — EXTERIOR DETAIL */}
          <article
            className="reveal-scale-up group relative bg-[#07130F] rounded-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1.5 flex flex-col overflow-hidden border border-[#16362C] md:hover:border-[#DFBE82]/70 md:hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.18)]"
            style={{ transitionDelay: '100ms' }}
          >
            {/* Card Image Carrier */}
            <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0A1C16] shrink-0">
              <img
                src={SITE_CONFIG.IMAGES.exteriorCorrection}
                alt="Exterior Detail by Signature Mobile Auto Detailing"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-106 md:group-hover:brightness-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-[#07130F]/45 to-transparent" />
              
              {/* Number Watermark */}
              <div className="absolute top-3 left-4 font-['Cinzel',serif] text-2xl font-bold text-[#DFBE82]/85 tracking-wider">
                01
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-['Cinzel','Cormorant_Garamond',serif] text-lg sm:text-xl font-bold tracking-[0.06em] text-[#FBF9F5] group-hover:text-[#DFBE82] transition-colors leading-snug">
                  EXTERIOR DETAIL
                </h3>

                <p className="text-xs sm:text-sm text-[#9EABA2] font-normal leading-relaxed mt-2.5 mb-5 min-h-[42px]">
                  Complete exterior care designed to refresh, protect and enhance your vehicle's finish.
                </p>

                {/* Included Services Box */}
                <div className="p-3 sm:p-3.5 rounded-sm bg-[#05110D]/90 border border-[#16362C] mb-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#DFBE82] uppercase mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#DFBE82]" />
                    <span>INCLUDED SERVICES</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-[#FBF9F5]/90">
                    {exteriorServices.map((item) => (
                      <li key={item} className="flex items-start gap-1 leading-snug">
                        <span className="text-[#DFBE82] font-bold select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Time & Action Button */}
              <div className="pt-5 border-t border-[#122820] mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-[#9EABA2] mb-3.5">
                  <Clock className="w-3.5 h-3.5 text-[#DFBE82]" />
                  <span className="font-medium text-[#FBF9F5]/90">Approx. 1 – 1.5 Hours</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectServiceToBook('exterior-detail')}
                  className="w-full py-3 px-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs tracking-[0.14em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group-btn"
                >
                  <span>GET FREE QUOTE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Bottom Gold Hover Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500" />
          </article>

          {/* Card 02 — INTERIOR DETAIL */}
          <article
            className="reveal-scale-up group relative bg-[#07130F] rounded-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1.5 flex flex-col overflow-hidden border border-[#16362C] md:hover:border-[#DFBE82]/70 md:hover:shadow-[0_20px_45px_rgba(0,0,0,0.85),0_0_30px_rgba(212,175,55,0.18)]"
            style={{ transitionDelay: '220ms' }}
          >
            {/* Card Image Carrier */}
            <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0A1C16] shrink-0">
              <img
                src={SITE_CONFIG.IMAGES.interiorDetail}
                alt="Interior Detail by Signature Mobile Auto Detailing"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-106 md:group-hover:brightness-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-[#07130F]/45 to-transparent" />
              
              {/* Number Watermark */}
              <div className="absolute top-3 left-4 font-['Cinzel',serif] text-2xl font-bold text-[#DFBE82]/85 tracking-wider">
                02
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-['Cinzel','Cormorant_Garamond',serif] text-lg sm:text-xl font-bold tracking-[0.06em] text-[#FBF9F5] group-hover:text-[#DFBE82] transition-colors leading-snug">
                  INTERIOR DETAIL
                </h3>

                <p className="text-xs sm:text-sm text-[#9EABA2] font-normal leading-relaxed mt-2.5 mb-5 min-h-[42px]">
                  Thorough interior care focused on a clean, refreshed and comfortable cabin.
                </p>

                {/* Included Services Box */}
                <div className="p-3 sm:p-3.5 rounded-sm bg-[#05110D]/90 border border-[#16362C] mb-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#DFBE82] uppercase mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#DFBE82]" />
                    <span>INCLUDED SERVICES</span>
                  </div>
                  <ul className="space-y-1 text-[11px] text-[#FBF9F5]/90">
                    {interiorServices.map((item) => (
                      <li key={item} className="flex items-start gap-1 leading-snug">
                        <span className="text-[#DFBE82] font-bold select-none">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Card Footer: Time & Action Button */}
              <div className="pt-5 border-t border-[#122820] mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-[#9EABA2] mb-3.5">
                  <Clock className="w-3.5 h-3.5 text-[#DFBE82]" />
                  <span className="font-medium text-[#FBF9F5]/90">Approx. 1 – 1.5 Hours</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectServiceToBook('interior-detail')}
                  className="w-full py-3 px-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs tracking-[0.14em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group-btn"
                >
                  <span>GET FREE QUOTE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Bottom Gold Hover Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500" />
          </article>

          {/* Card 03 — FULL SIGNATURE DETAIL */}
          <article
            className="reveal-scale-up group relative bg-[#07130F] rounded-sm transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hover:-translate-y-1.5 flex flex-col overflow-hidden border-2 border-[#DFBE82]/50 md:hover:border-[#DFBE82] md:hover:shadow-[0_22px_48px_rgba(212,175,55,0.25)]"
            style={{ transitionDelay: '340ms' }}
          >
            {/* Premium Badge */}
            <div className="absolute top-3 right-3 z-20 px-2.5 py-1 bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-[#07130F] text-[10px] font-bold tracking-[0.16em] uppercase rounded-sm shadow-md flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-[#07130F]" />
              <span>COMPLETE PACKAGE</span>
            </div>

            {/* Card Image Carrier */}
            <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-[#0A1C16] shrink-0">
              <img
                src={SITE_CONFIG.IMAGES.hero}
                alt="Full Signature Detail by Signature Mobile Auto Detailing"
                className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] md:group-hover:scale-106 md:group-hover:brightness-105"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07130F] via-[#07130F]/45 to-transparent" />
              
              {/* Number Watermark */}
              <div className="absolute top-3 left-4 font-['Cinzel',serif] text-2xl font-bold text-[#DFBE82]/85 tracking-wider">
                03
              </div>
            </div>

            {/* Content Body */}
            <div className="p-6 sm:p-7 flex flex-col flex-1 justify-between">
              <div>
                <h3 className="font-['Cinzel','Cormorant_Garamond',serif] text-lg sm:text-xl font-bold tracking-[0.06em] text-[#FBF9F5] group-hover:text-[#DFBE82] transition-colors leading-snug">
                  FULL SIGNATURE DETAIL
                </h3>

                <p className="text-xs sm:text-sm text-[#9EABA2] font-normal leading-relaxed mt-2.5 mb-5 min-h-[42px]">
                  Complete interior and exterior care designed to give your vehicle a deep clean, refreshed appearance, and a polished Signature finish.
                </p>

                {/* Compact 2-Column Included Services Box */}
                <div className="p-3 sm:p-3.5 rounded-sm bg-[#05110D]/90 border border-[#16362C] mb-6">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-[#DFBE82] uppercase mb-2 flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#DFBE82]" />
                    <span>INCLUDES</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 sm:gap-2.5">
                    {/* Interior Care Column */}
                    <div>
                      <div className="font-semibold text-[#DFBE82] text-[10px] tracking-wider uppercase mb-1">
                        INTERIOR CARE
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#FBF9F5]/90">
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Complete Interior Cleaning</span>
                        </li>
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Leather & Surface Care</span>
                        </li>
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Carpet & Seat Cleaning</span>
                        </li>
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Interior Glass</span>
                        </li>
                      </ul>
                    </div>

                    {/* Exterior Care Column */}
                    <div>
                      <div className="font-semibold text-[#DFBE82] text-[10px] tracking-wider uppercase mb-1">
                        EXTERIOR CARE
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#FBF9F5]/90">
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Foam Hand Wash</span>
                        </li>
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Wheel & Tire Care</span>
                        </li>
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Wax & Finish</span>
                        </li>
                        <li className="flex items-start gap-1 leading-snug">
                          <span className="text-[#DFBE82] font-bold select-none">•</span>
                          <span>Door Jamb Cleaning</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Card Footer: Time & Action Button (Aligned with other cards via mt-auto) */}
              <div className="pt-5 border-t border-[#122820] mt-auto">
                <div className="flex items-center gap-1.5 text-xs text-[#9EABA2] mb-3.5">
                  <Clock className="w-3.5 h-3.5 text-[#DFBE82]" />
                  <span className="font-medium text-[#FBF9F5]/90">Approx. 1 – 2 Hours</span>
                </div>

                <button
                  type="button"
                  onClick={() => onSelectServiceToBook('full-detail')}
                  className="w-full py-3 px-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs tracking-[0.14em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2 group-btn"
                >
                  <span>GET FREE QUOTE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Bottom Gold Hover Accent */}
            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent scale-x-0 md:group-hover:scale-x-100 transition-transform duration-500" />
          </article>
        </div>
      </div>
    </section>
  );
};
