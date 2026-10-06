import React, { useState, useRef, useCallback, useEffect } from 'react';
import { Sparkles, SlidersHorizontal } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const BeforeAfter: React.FC = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);

  const updatePosition = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    if (rect.width <= 0) return;
    const offsetX = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (offsetX / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only primary mouse button or touch/pen
    if (e.button !== 0 && e.pointerType === 'mouse') return;
    setIsDragging(true);
    try {
      e.currentTarget.setPointerCapture(e.pointerId);
    } catch {
      // Fallback if browser doesn't support capture on current target
    }
    updatePosition(e.clientX);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const clientX = e.clientX;
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(() => {
      updatePosition(clientX);
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Fallback
      }
    }
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (isDragging) {
      setIsDragging(false);
      try {
        if (e.currentTarget.hasPointerCapture(e.pointerId)) {
          e.currentTarget.releasePointerCapture(e.pointerId);
        }
      } catch {
        // Fallback
      }
    }
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, []);

  const handlePresetClick = (preset: number) => {
    setIsDragging(false);
    setSliderPosition(preset);
  };

  // When actively dragging, transitions are disabled for instant 1:1 response.
  // When clicking preset buttons, a smooth cubic-bezier transition glides into place.
  const smoothTransition = isDragging
    ? 'none'
    : 'clip-path 0.35s cubic-bezier(0.16, 1, 0.3, 1), left 0.35s cubic-bezier(0.16, 1, 0.3, 1)';

  return (
    <section id="before-after" ref={sectionRef} className="py-24 bg-[#07130F] relative overflow-hidden select-none">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 reveal-fade-up">
          <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
            UNPARALLELED CLARITY
          </span>
          <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] mt-2 mb-4">
            See The Signature Difference.
          </h2>
          <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent mx-auto mb-4" />
          <p className="text-sm sm:text-base text-[#9EABA2] font-normal">
            Drag the slider to reveal the transformation — from a road-worn BMW to a professionally detailed Signature finish.
          </p>
        </div>

        {/* Interactive Comparison Container with Soft Scale Entrance */}
        <div className="max-w-4xl mx-auto reveal-scale-up" style={{ transitionDelay: '180ms' }}>
          <div
            ref={containerRef}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={handlePointerUp}
            onPointerCancel={handlePointerCancel}
            className="relative h-[340px] sm:h-[480px] w-full rounded-sm overflow-hidden border border-[#DFBE82]/40 shadow-2xl shadow-black cursor-ew-resize touch-none select-none"
          >
            {/* "After" Image (Underneath, Full Width) */}
            <div className="absolute inset-0 pointer-events-none select-none">
              <img
                src={SITE_CONFIG.IMAGES.bmwAfterDetail}
                alt="After Signature Detail: Professionally detailed BMW with mirror gloss finish and clean wheels"
                className="w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />
              {/* After Label */}
              <div className="absolute top-4 right-4 z-10 px-3.5 py-1.5 rounded-sm bg-[#05110D]/90 border border-[#DFBE82]/60 backdrop-blur-md shadow-md">
                <span className="text-xs font-bold tracking-widest text-[#DFBE82] uppercase flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-[#DFBE82]" />
                  AFTER SIGNATURE DETAIL
                </span>
              </div>
            </div>

            {/* "Before" Image (Hardware-accelerated clip-path reveal) */}
            <div
              className="absolute inset-0 pointer-events-none select-none overflow-hidden"
              style={{
                clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                WebkitClipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                transition: smoothTransition,
              }}
            >
              <img
                src={SITE_CONFIG.IMAGES.bmwBeforeDetail}
                alt="Before Detail: Road-worn BMW with dust, grime and brake dust"
                className="w-full h-full object-cover object-center pointer-events-none select-none"
                draggable={false}
              />
              
              {/* Before Label */}
              <div className="absolute top-4 left-4 z-10 px-3.5 py-1.5 rounded-sm bg-[#05110D]/90 border border-slate-500/60 backdrop-blur-md shadow-md">
                <span className="text-xs font-bold tracking-widest text-slate-200 uppercase">
                  BEFORE DETAIL
                </span>
              </div>
            </div>

            {/* Slider Divider Line */}
            <div
              className="absolute inset-y-0 z-30 w-1 bg-gradient-to-b from-[#DFBE82] via-[#F7E9C4] to-[#DFBE82] shadow-[0_0_15px_rgba(212,175,55,0.8)] -translate-x-1/2 pointer-events-none"
              style={{
                left: `${sliderPosition}%`,
                transition: smoothTransition,
              }}
            >
              {/* Draggable Circular Knob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-[#05110D] border-2 border-[#DFBE82] flex items-center justify-center shadow-lg shadow-black">
                <SlidersHorizontal className="w-4 h-4 text-[#DFBE82]" />
              </div>
            </div>
          </div>

          {/* Quick preset percentage controls */}
          <div className="mt-6 flex items-center justify-center gap-3 reveal-fade-up" style={{ transitionDelay: '300ms' }}>
            <span className="text-xs text-[#9EABA2] uppercase tracking-wider mr-2">Preset view:</span>
            {[25, 50, 75].map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => handlePresetClick(preset)}
                className={`px-3 py-1 rounded-sm text-xs font-mono transition-colors cursor-pointer border ${
                  sliderPosition === preset
                    ? 'border-[#DFBE82] text-[#DFBE82] bg-[#0B1C16]'
                    : 'border-[#16362C] text-[#9EABA2] hover:text-[#FBF9F5]'
                }`}
              >
                {preset}%
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
