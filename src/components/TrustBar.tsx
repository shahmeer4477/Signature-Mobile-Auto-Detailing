import React from 'react';
import { Shield, Sparkles, Navigation, Clock } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const TrustBar: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.15 });

  const trustPoints = [
    {
      title: 'PREMIUM FINISH',
      subtitle: 'Showroom depth & ceramic clarity',
      icon: Sparkles,
    },
    {
      title: 'MOBILE SERVICE',
      subtitle: 'Direct to your home or office',
      icon: Navigation,
    },
    {
      title: 'ATTENTION TO DETAIL',
      subtitle: 'Meticulous, multi-stage procedures',
      icon: Shield,
    },
    {
      title: 'CUSTOMER-FIRST SERVICE',
      subtitle: 'Bespoke vehicle scheduling',
      icon: Clock,
    },
  ];

  return (
    <section
      id="trust-strip"
      ref={ref}
      className="relative z-20 bg-[#05110D] border-y border-[#DFBE82]/20 py-8"
      aria-label="Brand Pillars"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 ${isVisible ? 'is-revealed' : ''}`}>
          {trustPoints.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className={`reveal-fade-up flex items-center gap-4 ${
                  idx !== 0 ? 'lg:border-l lg:border-[#1A382E] lg:pl-8' : ''
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <div className="w-10 h-10 rounded-sm bg-[#0B1C16] border border-[#DFBE82]/30 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#DFBE82]" />
                </div>
                <div className="flex flex-col">
                  <h3 className="font-['Cinzel','Cormorant_Garamond',serif] text-xs sm:text-sm font-bold tracking-[0.14em] text-[#FBF9F5] leading-tight">
                    {item.title}
                  </h3>
                  <span className="text-[11px] sm:text-xs text-[#9EABA2] mt-0.5 font-normal">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
