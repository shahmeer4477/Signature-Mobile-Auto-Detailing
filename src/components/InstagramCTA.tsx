import React from 'react';
import { Instagram, ArrowUpRight } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

export const InstagramCTA: React.FC = () => {
  const { ref, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const handleInstagramClick = () => {
    window.open(SITE_CONFIG.INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  // Preview cards showing recent feed aesthetic
  const previewPosts = [
    { image: SITE_CONFIG.IMAGES.hero, tag: 'Mirror Finish' },
    { image: SITE_CONFIG.IMAGES.interiorDetail, tag: 'Bespoke Leather' },
    { image: SITE_CONFIG.IMAGES.wheelCeramic, tag: 'Hydrophobic Wheels' },
    { image: SITE_CONFIG.IMAGES.about, tag: 'Artisan Precision' },
  ];

  return (
    <section ref={ref} className="py-20 bg-[#07130F] relative border-t border-[#16362C]">
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${isVisible ? 'is-revealed' : ''}`}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left Text & CTA */}
          <div className="lg:col-span-5 flex flex-col items-start reveal-fade-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-[#0B1C16] border border-[#DFBE82]/30 text-xs text-[#DFBE82] font-semibold tracking-widest uppercase mb-4">
              <Instagram className="w-3.5 h-3.5" />
              <span>INSTAGRAM FEED</span>
            </div>

            <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl font-bold tracking-[0.02em] text-[#FBF9F5] leading-tight">
              Follow The Signature
            </h2>

            <div className="w-14 h-[2px] bg-gradient-to-r from-[#DFBE82] to-transparent my-4" />

            <p className="text-sm sm:text-base text-[#9EABA2] leading-relaxed mb-6">
              See our latest transformations, exotic arrivals, and behind-the-scenes mobile detailing work directly on Instagram.
            </p>

            <button
              onClick={handleInstagramClick}
              className="inline-flex items-center gap-2.5 px-6 py-3 rounded-sm bg-[#0B1C16] border border-[#DFBE82]/50 text-[#FBF9F5] hover:text-[#DFBE82] hover:border-[#DFBE82] text-xs font-bold tracking-[0.14em] uppercase transition-all cursor-pointer group shadow-lg"
            >
              <Instagram className="w-4 h-4 text-[#DFBE82]" />
              <span>FOLLOW US ON INSTAGRAM</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            <span className="text-[11px] font-mono text-[#9EABA2]/70 mt-3">
              {SITE_CONFIG.INSTAGRAM_HANDLE}
            </span>
          </div>

          {/* Right Visual Mini Grid with Stagger */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
            {previewPosts.map((post, idx) => (
              <div
                key={idx}
                onClick={handleInstagramClick}
                className="reveal-scale-up group relative rounded-sm overflow-hidden aspect-square border border-[#16362C] hover:border-[#DFBE82]/60 cursor-pointer shadow-md"
                style={{ transitionDelay: `${160 + idx * 70}ms` }}
              >
                <img
                  src={post.image}
                  alt={`Signature Detailing Instagram Showcase: ${post.tag}`}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-[#07130F]/40 group-hover:bg-[#07130F]/10 transition-colors" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono tracking-wider text-[#DFBE82] bg-[#05110D]/80 px-2 py-0.5 rounded-sm backdrop-blur-sm truncate">
                  #{post.tag.replace(/\s+/g, '')}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
