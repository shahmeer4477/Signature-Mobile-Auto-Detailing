import React from 'react';
import { Logo } from './Logo';
import { Instagram, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenPrivacy,
  onOpenTerms,
  onOpenBooking,
}) => {
  return (
    <footer className="bg-[#040C09] text-[#9EABA2] border-t border-[#16362C] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-14 border-b border-[#122820]">
          {/* Brand Info & Motto */}
          <div className="lg:col-span-4 flex flex-col items-start space-y-4">
            <Logo isNavbar={false} />
            
            <p className="text-xs sm:text-sm font-medium tracking-wide text-[#DFBE82] uppercase mt-2">
              {SITE_CONFIG.MOTTO}
            </p>

            <p className="text-xs text-[#9EABA2] leading-relaxed max-w-sm">
              Premium mobile auto detailing brought directly to you. From a meticulous interior refresh to a refined exterior finish, Signature delivers professional vehicle care with precision, convenience, and attention to every detail.
            </p>

            {/* Social Media & Contact Icons: Instagram, Facebook, Email in ONE clean horizontal row */}
            <div className="flex items-center gap-3 pt-2">
              {/* 1. Instagram */}
              <a
                href={SITE_CONFIG.INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#07130F] border border-[#16362C] hover:border-[#DFBE82] text-[#DFBE82] flex items-center justify-center transition-colors"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {/* 2. Facebook */}
              <a
                href={SITE_CONFIG.FACEBOOK_URL !== 'ADD_FACEBOOK_URL_HERE' ? SITE_CONFIG.FACEBOOK_URL : '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-sm bg-[#07130F] border border-[#16362C] hover:border-[#DFBE82] text-[#DFBE82] flex items-center justify-center transition-colors"
                aria-label="Facebook Page"
              >
                <Facebook className="w-4 h-4" />
              </a>

              {/* 3. Email */}
              <a
                href={`mailto:${SITE_CONFIG.EMAIL}`}
                className="w-9 h-9 rounded-sm bg-[#07130F] border border-[#16362C] hover:border-[#DFBE82] text-[#DFBE82] flex items-center justify-center transition-colors"
                aria-label="Email Signature Detailing"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-['Cinzel',serif] text-xs font-bold text-[#FBF9F5] tracking-[0.16em] uppercase">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-[#DFBE82] transition-colors">Home</a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#DFBE82] transition-colors">Services</a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#DFBE82] transition-colors">About Signature</a>
              </li>
              <li>
                <a href="#why-signature" className="hover:text-[#DFBE82] transition-colors">Why Choose Us</a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#DFBE82] transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#DFBE82] transition-colors">FAQ</a>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Cinzel',serif] text-xs font-bold text-[#FBF9F5] tracking-[0.16em] uppercase">
              Signature Services
            </h4>
            <ul className="space-y-2 text-xs">
              {SITE_CONFIG.SERVICES.map((s) => (
                <li key={s.id}>
                  <a href="#services" className="hover:text-[#DFBE82] transition-colors flex items-center justify-between">
                    <span>{s.name}</span>
                    <span className="font-mono text-[10px] text-[#DFBE82]/60">{s.number}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Dispatch Area */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-['Cinzel',serif] text-xs font-bold text-[#FBF9F5] tracking-[0.16em] uppercase">
              Mobile Concierge
            </h4>
            <div className="space-y-2.5 text-xs text-[#9EABA2]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-3.5 h-3.5 text-[#DFBE82] shrink-0 mt-0.5" />
                <div className="leading-relaxed">
                  <span>13348 186th Ave SE</span>
                  <br />
                  <span>Los Angeles, CA 90001</span>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail className="w-3.5 h-3.5 text-[#DFBE82] shrink-0 mt-0.5" />
                <a
                  href={`mailto:${SITE_CONFIG.EMAIL}`}
                  className="hover:text-[#DFBE82] transition-colors"
                >
                  {SITE_CONFIG.EMAIL}
                </a>
              </div>

              {SITE_CONFIG.PHONE_NUMBER !== 'ADD_PHONE_NUMBER_HERE' && (
                <div className="flex items-start gap-2.5">
                  <Phone className="w-3.5 h-3.5 text-[#DFBE82] shrink-0 mt-0.5" />
                  <span>{SITE_CONFIG.PHONE_NUMBER}</span>
                </div>
              )}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full py-2.5 rounded-sm bg-[#0B1C16] border border-[#DFBE82]/40 text-[#DFBE82] hover:bg-[#0F251E] hover:border-[#DFBE82] text-xs font-bold tracking-wider uppercase transition-all cursor-pointer"
              >
                REQUEST BOOKING
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal Row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#9EABA2]/70">
          <div>
            © 2026 Signature Mobile Auto Detailing. All Rights Reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#DFBE82] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <span>·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#DFBE82] transition-colors cursor-pointer"
            >
              Terms & Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
