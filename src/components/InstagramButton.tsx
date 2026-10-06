import React, { useState } from 'react';
import { Instagram, X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

export const InstagramButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const handleClick = () => {
    window.open(SITE_CONFIG.INSTAGRAM_URL, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="fixed bottom-6 right-6 z-30 flex items-center select-none">
      {/* Quick Tooltip Bubble */}
      {showTooltip && (
        <div className="mr-3 hidden sm:flex items-center gap-2 bg-[#05110D] border border-[#DFBE82]/40 text-[#FBF9F5] text-xs px-3.5 py-2 rounded-sm shadow-xl animate-in fade-in slide-in-from-right-2 duration-200">
          <span>Follow {SITE_CONFIG.INSTAGRAM_HANDLE} on Instagram</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowTooltip(false);
            }}
            className="text-[#9EABA2] hover:text-white"
            aria-label="Dismiss message"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Instagram Button */}
      <button
        onClick={handleClick}
        onMouseEnter={() => setShowTooltip(true)}
        className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white flex items-center justify-center shadow-[0_4px_20px_rgba(253,29,29,0.35)] hover:shadow-[0_6px_25px_rgba(253,29,29,0.55)] hover:scale-105 active:scale-95 transition-all cursor-pointer border border-white/20"
        aria-label="Follow Signature Mobile Auto Detailing on Instagram"
      >
        <Instagram className="w-6 h-6 text-white" />
      </button>
    </div>
  );
};
