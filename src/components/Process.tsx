import React from 'react';
import { Calendar, Truck, Sparkles, Award } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Process: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const stepIcons = [Calendar, Truck, Sparkles, Award];

  return (
    <section id="process" ref={ref} className="py-24 bg-[#07130F] relative overflow-hidden">
      {/* Background glow accent */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-[#DFBE82]/5 blur-[100px] pointer-events-none rounded-full" />

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 reveal-fade-up">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
            EFFORTLESS CONCIERGE
          </span>
          <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] mt-2 mb-4">
            How Signature Works
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#9EABA2] font-normal">
            A seamless four-step luxury detailing experience brought directly to your location.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Horizontal Line for Desktop (hidden on mobile) */}
          <div className="hidden lg:block absolute top-1/2 left-12 right-12 h-[1.5px] bg-gradient-to-r from-transparent via-[#DFBE82]/40 to-transparent -translate-y-12 z-0" />

          {/* Steps Grid / Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {SITE_CONFIG.PROCESS_STEPS.map((step, index) => {
              const Icon = stepIcons[index] || Sparkles;
              return (
                <div
                  key={step.number}
                  className="reveal-fade-up flex flex-col items-center text-center group bg-[#05110D]/60 p-6 sm:p-8 rounded-sm border border-[#16362C] hover:border-[#DFBE82]/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                  style={{ transitionDelay: `${index * 90}ms` }}
                >
                  {/* Step Number & Icon Circle */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 rounded-full bg-[#0B1C16] border-2 border-[#DFBE82]/40 flex items-center justify-center text-[#DFBE82] group-hover:border-[#DFBE82] group-hover:bg-[#0F251E] transition-all shadow-lg shadow-black/60">
                      <Icon className="w-7 h-7 text-[#DFBE82]" />
                    </div>
                    <span className="absolute -top-2 -right-2 px-2 py-0.5 rounded-full bg-[#07130F] border border-[#DFBE82]/40 font-['Cinzel',serif] text-[10px] font-bold text-[#DFBE82]">
                      {step.number}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="font-['Cinzel','Cormorant_Garamond',serif] text-lg font-bold tracking-[0.08em] text-[#FBF9F5] mb-2 uppercase">
                    {step.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-xs sm:text-sm font-medium text-[#DFBE82]/90 mb-3">
                    {step.description}
                  </p>

                  {/* Detailed explanation */}
                  <p className="text-xs text-[#9EABA2] leading-relaxed">
                    {step.detail}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
