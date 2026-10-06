import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  isNavbar?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  isNavbar = true,
}) => {
  // Flag to check if an official logo image file is available
  // The user requested:
  // 1. Exact official logo = use it
  // 2. Exact logo unavailable = show "SIGNATURE" text only
  // 3. NEVER show an incorrect/recreated logo
  const [logoLoaded, setLogoLoaded] = useState(false);
  const [logoChecked, setLogoChecked] = useState(false);

  return (
    <div className={`flex flex-col justify-center select-none ${className}`}>
      {/* Hidden tester to verify if the user provides the exact official logo asset in the future */}
      {!logoChecked && (
        <img
          src="/official-logo.png"
          alt=""
          className="hidden"
          onLoad={() => {
            setLogoLoaded(true);
            setLogoChecked(true);
          }}
          onError={() => {
            setLogoLoaded(false);
            setLogoChecked(true);
          }}
        />
      )}

      {logoLoaded ? (
        <img
          src="/official-logo.png"
          alt="Signature Mobile Auto Detailing"
          className={isNavbar ? 'h-10 sm:h-12 w-auto object-contain' : 'h-12 sm:h-14 w-auto object-contain'}
        />
      ) : (
        /* Pure, elegant typography for SIGNATURE */
        <div className="flex flex-col justify-center">
          <span
            className={`font-['Cinzel','Cormorant_Garamond',serif] font-bold text-[#FBF9F5] tracking-[0.2em] leading-none transition-colors duration-300 hover:text-[#DFBE82] ${
              isNavbar
                ? 'text-xl sm:text-2xl md:text-[26px]'
                : 'text-2xl sm:text-3xl'
            }`}
          >
            SIGNATURE
          </span>
          <span
            className={`font-sans font-medium tracking-[0.32em] text-[#DFBE82]/90 uppercase mt-1 leading-none ${
              isNavbar ? 'text-[9px] sm:text-[10.5px]' : 'text-[10px] sm:text-xs'
            }`}
          >
            Mobile Auto Detailing
          </span>
        </div>
      )}
    </div>
  );
};
