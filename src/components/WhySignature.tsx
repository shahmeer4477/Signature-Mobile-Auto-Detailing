import React from 'react';
import { Eye, Car, Briefcase, HeartHandshake, ShieldCheck, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const WhySignature: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const icons = [Eye, Car, Briefcase, HeartHandshake, ShieldCheck, MapPin];

  return (
    <section id="why-signature" ref={ref} className="py-24 bg-[#05110D] relative">
      {/* Decorative background border */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE82]/20 to-transparent" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade-up">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
            UNCOMPROMISING EXCELLENCE
          </span>
          <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] mt-2 mb-4">
            Why Choose Signature?
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#9EABA2] font-normal">
            A bespoke approach that blends convenience, cutting-edge chemistry, and automotive passion.
          </p>
        </div>

        {/* 6 Benefits Grid with Staggered Reveal */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SITE_CONFIG.WHY_SIGNATURE.map((benefit, idx) => {
            const Icon = icons[idx] || ShieldCheck;
            return (
              <div
                key={benefit.title}
                className="reveal-fade-up bg-[#07130F] p-8 rounded-sm border border-[#16362C] hover:border-[#DFBE82]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl group"
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="w-12 h-12 rounded-sm bg-[#0B1C16] border border-[#DFBE82]/30 flex items-center justify-center text-[#DFBE82] group-hover:border-[#DFBE82] group-hover:bg-[#0F251E] transition-all mb-6">
                  <Icon className="w-6 h-6 text-[#DFBE82]" />
                </div>

                <h3 className="font-['Cinzel','Cormorant_Garamond',serif] text-lg font-bold tracking-[0.06em] text-[#FBF9F5] mb-3 group-hover:text-[#DFBE82] transition-colors">
                  {benefit.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#9EABA2] leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
