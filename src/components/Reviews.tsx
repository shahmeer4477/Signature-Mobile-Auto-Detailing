import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2 } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const Reviews: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [currentIndex, setCurrentIndex] = useState(0);
  const reviews = SITE_CONFIG.REVIEWS;

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  return (
    <section id="reviews" ref={ref} className="py-24 bg-[#07130F] relative">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade-up">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
            CLIENT EXPERIENCES
          </span>
          <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] mt-2 mb-4">
            What Our Clients Say
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#9EABA2] font-normal">
            Refined feedback from private garage owners and executives who trust our mobile standard.
          </p>
        </div>

        {/* Carousel / Card Showcase with smooth settle */}
        <div className="max-w-4xl mx-auto relative reveal-scale-up" style={{ transitionDelay: '180ms' }}>
          <div className="bg-[#05110D] border border-[#16362C] p-8 sm:p-12 rounded-sm shadow-2xl relative overflow-hidden transition-all duration-500">
            {/* Top gold accent line */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent" />

            {/* Stars Row */}
            <div className="flex items-center gap-1 mb-6">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#DFBE82] text-[#DFBE82]" />
              ))}
              <span className="text-xs font-mono text-[#DFBE82] ml-2">5.0 / 5.0</span>
            </div>

            {/* Review Quote */}
            <blockquote className="font-['Cormorant_Garamond',serif] text-xl sm:text-2xl md:text-3xl text-[#FBF9F5] italic leading-relaxed mb-8 transition-opacity duration-300">
              "{reviews[currentIndex].reviewText}"
            </blockquote>

            {/* Review Author & Vehicle Meta */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-6 border-t border-[#122820]">
              <div>
                <div className="font-['Cinzel',serif] text-base font-bold text-[#FBF9F5]">
                  {reviews[currentIndex].clientName}
                </div>
                <div className="text-xs text-[#DFBE82] font-medium mt-0.5">
                  {reviews[currentIndex].vehicleType} · {reviews[currentIndex].serviceRequested}
                </div>
              </div>

              <div className="flex items-center gap-1.5 text-xs text-[#9EABA2]">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#DFBE82]" />
                <span>{reviews[currentIndex].dateNote}</span>
              </div>
            </div>
          </div>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === idx ? 'w-8 bg-[#DFBE82]' : 'w-2 bg-[#16362C] hover:bg-[#DFBE82]/40'
                  }`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrev}
                className="w-10 h-10 rounded-sm bg-[#0B1C16] border border-[#16362C] hover:border-[#DFBE82] text-[#DFBE82] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 rounded-sm bg-[#0B1C16] border border-[#16362C] hover:border-[#DFBE82] text-[#DFBE82] flex items-center justify-center transition-colors cursor-pointer"
                aria-label="Next review"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
