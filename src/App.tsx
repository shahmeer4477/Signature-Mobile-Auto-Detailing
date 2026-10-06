import React, { useState, useEffect } from 'react';
import { SeoHead } from './components/SeoHead';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustBar } from './components/TrustBar';
import { About } from './components/About';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { WhySignature } from './components/WhySignature';
import { BeforeAfter } from './components/BeforeAfter';
import { Reviews } from './components/Reviews';
import { BookingForm } from './components/BookingForm';
import { InstagramCTA } from './components/InstagramCTA';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { InstagramButton } from './components/InstagramButton';
import { LegalModal } from './components/LegalModal';
import { X } from 'lucide-react';

export default function App() {
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [selectedServiceId, setSelectedServiceId] = useState<string | undefined>(undefined);
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  const handleOpenBooking = (serviceId?: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  const handleSelectServiceForQuote = (serviceId: string) => {
    setSelectedServiceId(serviceId);
    setBookingModalOpen(true);
  };

  // Lock background scroll when modal is open and allow closing via ESC key
  useEffect(() => {
    if (bookingModalOpen || legalModalType) {
      document.body.style.overflow = 'hidden';
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          setBookingModalOpen(false);
          setLegalModalType(null);
        }
      };
      window.addEventListener('keydown', handleKeyDown);
      return () => {
        document.body.style.overflow = '';
        window.removeEventListener('keydown', handleKeyDown);
      };
    }
  }, [bookingModalOpen, legalModalType]);

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#07130F] text-[#FBF9F5] selection:bg-[#D4AF37]/30 selection:text-[#FBF9F5] flex flex-col font-sans">
      {/* Schema.org Structured Data */}
      <SeoHead />

      {/* Sticky Luxury Navbar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => handleOpenBooking()}
          onExploreServices={scrollToServices}
        />

        {/* 2. Trust / Brand Strip */}
        <TrustBar />

        {/* 3. About Signature Split Section */}
        <About
          onOpenBooking={() => handleOpenBooking()}
        />

        {/* 4. Signature Services Grid with Free Quote CTA */}
        <Services onSelectServiceToBook={handleSelectServiceForQuote} />

        {/* 5. Process: How Signature Works Timeline */}
        <Process />

        {/* 6. Why Signature Benefits */}
        <WhySignature />

        {/* 7. Interactive Before / After Comparison Slider */}
        <BeforeAfter />

        {/* 8. Customer Testimonials Carousel */}
        <Reviews />

        {/* 10. Booking Experience Section */}
        <BookingForm initialServiceId={selectedServiceId} />

        {/* 11. Instagram Integration */}
        <InstagramCTA />

        {/* 12. FAQ Clean Accordion */}
        <FAQ />

        {/* 13. Dramatic Final CTA */}
        <FinalCTA
          onOpenBooking={() => handleOpenBooking()}
          onContactClick={scrollToContact}
        />
      </main>

      {/* 14. Luxury Brand Footer */}
      <Footer
        onOpenPrivacy={() => setLegalModalType('privacy')}
        onOpenTerms={() => setLegalModalType('terms')}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Floating Instagram CTA */}
      <InstagramButton />

      {/* Global Booking / Quote Modal */}
      {bookingModalOpen && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setBookingModalOpen(false)}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl bg-[#07130F] border border-[#DFBE82]/40 rounded-sm shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden my-auto animate-in zoom-in-95 duration-200"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 border-b border-[#16362C] bg-[#05110D] flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono tracking-widest text-[#DFBE82] uppercase">
                  VIP Concierge
                </span>
                <h3 className="font-['Cinzel',serif] text-lg sm:text-xl font-bold text-[#FBF9F5]">
                  Request Free Quote
                </h3>
              </div>
              <button
                onClick={() => setBookingModalOpen(false)}
                className="w-8 h-8 rounded-full bg-[#07130F] border border-[#DFBE82]/40 text-[#DFBE82] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
                aria-label="Close Window"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Form */}
            <div className="p-4 sm:p-6 max-h-[82vh] overflow-y-auto">
              <BookingForm
                isModal={true}
                initialServiceId={selectedServiceId}
                onClose={() => setBookingModalOpen(false)}
              />
            </div>
          </div>
        </div>
      )}

      {/* Privacy Policy & Terms Modal */}
      <LegalModal
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
}
