import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const FAQ: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" ref={ref} className="py-24 bg-[#05110D] relative">
      <div className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade-up">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
            COMMON INQUIRIES
          </span>
          <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] mt-2 mb-4">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#9EABA2] font-normal">
            Everything you need to know about our mobile studio visit, preparation, and vehicle care.
          </p>
        </div>

        {/* Accordion List with Staggered Entrance */}
        <div className="space-y-4">
          {SITE_CONFIG.FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="reveal-fade-up bg-[#07130F] border border-[#16362C] hover:border-[#DFBE82]/40 rounded-sm overflow-hidden transition-colors"
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus:ring-1 focus:ring-[#DFBE82]"
                  aria-expanded={isOpen}
                >
                  <span className="font-['Cinzel','Cormorant_Garamond',serif] text-sm sm:text-base font-bold text-[#FBF9F5] tracking-[0.03em]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0B1C16] border border-[#DFBE82]/30 flex items-center justify-center shrink-0 transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                      isOpen ? 'rotate-180 text-[#DFBE82] border-[#DFBE82]' : 'text-[#9EABA2]'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {/* Smooth CSS Grid Open/Close Transition */}
                <div
                  className={`grid transition-all duration-350 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden min-h-0">
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#9EABA2] leading-relaxed border-t border-[#122820]/60">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
