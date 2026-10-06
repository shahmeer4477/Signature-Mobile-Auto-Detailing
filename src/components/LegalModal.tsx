import React from 'react';
import { X } from 'lucide-react';
import { SITE_CONFIG } from '../config/siteConfig';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModal: React.FC<LegalModalProps> = ({ type, onClose }) => {
  if (!type) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms & Conditions';

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-2xl bg-[#07130F] border border-[#DFBE82]/40 rounded-sm shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="px-6 py-5 border-b border-[#16362C] bg-[#05110D] flex items-center justify-between">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-[#DFBE82] uppercase">
              Legal Documentation
            </span>
            <h3 className="font-['Cinzel',serif] text-xl font-bold text-[#FBF9F5]">
              {title}
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-[#07130F] border border-[#DFBE82]/40 text-[#DFBE82] hover:text-white flex items-center justify-center cursor-pointer transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-4 text-xs text-[#9EABA2] leading-relaxed">
          <p>
            Effective Date: October 2026 · {SITE_CONFIG.SITE_NAME}
          </p>

          {isPrivacy ? (
            <>
              <p>
                At {SITE_CONFIG.SITE_NAME}, we prioritize the privacy and security of your personal information. This Privacy Policy details how we collect, use, and protect contact and appointment details provided during your mobile detailing inquiry.
              </p>
              <h4 className="font-bold text-[#FBF9F5] uppercase tracking-wider text-[11px] mt-4">
                1. Information We Collect
              </h4>
              <p>
                When submitting a service request, we collect contact information (name, phone number, email address), vehicle specifications (make, model, year, condition notes), and dispatch service locations (residence or corporate address).
              </p>
              <h4 className="font-bold text-[#FBF9F5] uppercase tracking-wider text-[11px] mt-4">
                2. How Information is Used
              </h4>
              <p>
                Information is utilized solely for communicating scheduling logistics, providing custom quotes, dispatching our mobile vehicle detailing studio, and servicing your appointments. We do not sell or lease your personal data.
              </p>
              <h4 className="font-bold text-[#FBF9F5] uppercase tracking-wider text-[11px] mt-4">
                3. Contact Information
              </h4>
              <p>
                For questions regarding this policy, contact our concierge at {SITE_CONFIG.EMAIL}.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to {SITE_CONFIG.SITE_NAME}. By scheduling services through this website, you agree to the following terms and operating guidelines.
              </p>
              <h4 className="font-bold text-[#FBF9F5] uppercase tracking-wider text-[11px] mt-4">
                1. Mobile Service Accessibility & Safety
              </h4>
              <p>
                Clients must ensure the vehicle is parked in a safe, lawful location with adequate clearance around all perimeter panels, and provide access to a water source and standard electrical power for detailing equipment.
              </p>
              <h4 className="font-bold text-[#FBF9F5] uppercase tracking-wider text-[11px] mt-4">
                2. Vehicle Condition & Inspections
              </h4>
              <p>
                A pre-detail inspection is conducted with the client or designated contact. Pre-existing stone chips, deep clear-coat fractures, or mechanical damage are documented prior to beginning work.
              </p>
              <h4 className="font-bold text-[#FBF9F5] uppercase tracking-wider text-[11px] mt-4">
                3. Weather & Rescheduling Policy
              </h4>
              <p>
                Because mobile detailing involves exterior treatments, appointments scheduled outdoors may be rescheduled without penalty in the event of adverse weather (rain, high winds, or freezing temperatures) unless an indoor private garage bay is available.
              </p>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-[#16362C] bg-[#05110D] flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-sm bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-[#07130F] font-bold text-xs tracking-wider uppercase cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
