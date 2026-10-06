import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface NavbarProps {
  onOpenBooking: (serviceId?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'HOME', href: '#home' },
    { label: 'SERVICES', href: '#services' },
    { label: 'ABOUT', href: '#about' },
    { label: 'WHY SIGNATURE', href: '#why-signature' },
    { label: 'REVIEWS', href: '#reviews' },
    { label: 'FAQ', href: '#faq' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
        isScrolled
          ? 'bg-[#07130F]/95 backdrop-blur-md border-b border-[#DFBE82]/20 py-3.5 shadow-2xl shadow-black/60'
          : 'bg-gradient-to-b from-[#05110D]/90 via-[#07130F]/50 to-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Brand / Logo */}
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="focus:outline-none focus-visible:ring-1 focus-visible:ring-[#DFBE82] rounded py-0.5 shrink-0"
          aria-label="Signature Mobile Auto Detailing - Home"
        >
          <Logo isNavbar={true} />
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          className="hidden lg:flex items-center gap-6 xl:gap-8 text-[12px] font-medium tracking-[0.16em] text-[#9EABA2]"
          aria-label="Primary Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="hover:text-[#FBF9F5] transition-colors relative py-1 group whitespace-nowrap"
            >
              {link.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#DFBE82] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Zone 3: Primary Action & Mobile Toggle */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={() => onOpenBooking()}
            className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-semibold text-xs tracking-[0.14em] uppercase hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>BOOK NOW</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#DFBE82] hover:text-white rounded-md focus:outline-none focus:ring-1 focus:ring-[#DFBE82]"
            aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Navigation Menu'}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#07130F]/98 backdrop-blur-xl border-b border-[#DFBE82]/20 px-6 pt-4 pb-8 space-y-4 shadow-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-sm font-medium tracking-[0.18em] text-[#DFBE82] hover:text-white py-2 border-b border-[#142A22]/50 flex items-center justify-between"
              >
                <span>{link.label}</span>
                <span className="text-xs text-[#9EABA2]">→</span>
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs tracking-[0.16em] uppercase text-center cursor-pointer shadow-md"
            >
              BOOK YOUR DETAIL
            </button>
            
            {SITE_CONFIG.PHONE_NUMBER !== 'ADD_PHONE_NUMBER_HERE' && (
              <a
                href={`tel:${SITE_CONFIG.PHONE_NUMBER}`}
                className="w-full py-2.5 rounded-sm border border-[#DFBE82]/30 text-[#DFBE82] text-xs font-semibold tracking-wider text-center flex items-center justify-center gap-2"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call {SITE_CONFIG.PHONE_NUMBER}</span>
              </a>
            )}
          </div>
        </div>
      )}
    </header>
  );
};
