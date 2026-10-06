import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Car, User, Phone, Mail, MessageSquare, Check, Instagram, AlertCircle, Loader2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { SITE_CONFIG } from '../config/siteConfig';
import { EMAILJS_CONFIG } from '../config/emailjsConfig';
import { useScrollReveal } from '../hooks/useScrollReveal';

interface BookingFormProps {
  initialServiceId?: string;
  isModal?: boolean;
  onClose?: () => void;
}

export const BookingForm: React.FC<BookingFormProps> = ({
  initialServiceId,
  isModal = false,
  onClose,
}) => {
  const { ref: sectionRef, isVisible } = useScrollReveal<HTMLDivElement>({ threshold: 0.1 });

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMakeModel: '',
    service: initialServiceId || 'full-detail',
    preferredDate: '',
    preferredTime: '',
    location: '',
    zipCode: '',
    additionalNotes: '',
  });

  useEffect(() => {
    if (initialServiceId) {
      setFormData((prev) => ({ ...prev, service: initialServiceId }));
    }
  }, [initialServiceId]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    setErrorMsg(null);

    // Validate all required fields
    if (
      !formData.name.trim() ||
      !formData.phone.trim() ||
      !formData.email.trim() ||
      !formData.vehicleMakeModel.trim() ||
      !formData.service.trim() ||
      !formData.preferredDate.trim() ||
      !formData.preferredTime.trim() ||
      !formData.location.trim() ||
      !formData.zipCode.trim()
    ) {
      setErrorMsg('Please complete all required fields marked with an asterisk (*).');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email.trim())) {
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    // US ZIP Code validation (5 digits or 5+4 format)
    const zipRegex = /^\d{5}(-\d{4})?$/;
    if (!zipRegex.test(formData.zipCode.trim())) {
      setErrorMsg('Please enter a valid 5-digit ZIP code (e.g. 90210).');
      return;
    }

    setIsSubmitting(true);

    try {
      const selectedServiceObj = SITE_CONFIG.SERVICES.find((s) => s.id === formData.service);
      const serviceTitle = selectedServiceObj ? selectedServiceObj.name : formData.service;

      const templateParams: Record<string, string> = {
        customer_name: formData.name.trim(),
        phone: formData.phone.trim(),
        email: formData.email.trim(),
        vehicle_make_model: formData.vehicleMakeModel.trim(),
        service: serviceTitle,
        preferred_date: formData.preferredDate,
        preferred_time: formData.preferredTime,
        address: formData.location.trim(),
        zip_code: formData.zipCode.trim(),
        additional_notes: formData.additionalNotes.trim() || 'None provided',
      };

      // Send to Admin Email Template
      await emailjs.send(
        EMAILJS_CONFIG.serviceId,
        EMAILJS_CONFIG.adminTemplateId,
        templateParams,
        EMAILJS_CONFIG.publicKey
      );

      // If Customer Auto-Reply Template is configured, send auto-reply
      if (EMAILJS_CONFIG.customerTemplateId && EMAILJS_CONFIG.customerTemplateId.trim()) {
        try {
          await emailjs.send(
            EMAILJS_CONFIG.serviceId,
            EMAILJS_CONFIG.customerTemplateId,
            templateParams,
            EMAILJS_CONFIG.publicKey
          );
        } catch (autoReplyErr) {
          console.warn('Customer auto-reply failed to send:', autoReplyErr);
        }
      }

      setSubmitted(true);
    } catch (err) {
      console.error('EmailJS submission error:', err);
      setErrorMsg('Something went wrong while sending your request. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setSubmitted(false);
    setErrorMsg(null);
    setFormData({
      name: '',
      phone: '',
      email: '',
      vehicleMakeModel: '',
      service: 'full-detail',
      preferredDate: '',
      preferredTime: '',
      location: '',
      zipCode: '',
      additionalNotes: '',
    });
  };

  const instagramUrl = SITE_CONFIG.INSTAGRAM_URL;
  const shouldAnimate = !isModal;

  return (
    <section id="contact" ref={sectionRef} className={`${isModal ? 'p-0' : 'py-24 bg-[#05110D] relative'}`}>
      {!isModal && (
        <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#DFBE82]/20 to-transparent" />
      )}

      <div className={`${isModal ? 'w-full' : 'max-w-4xl mx-auto px-4 sm:px-6 lg:px-8'} ${shouldAnimate && isVisible ? 'is-revealed' : ''}`}>
        {!isModal && (
          <div className="text-center max-w-3xl mx-auto mb-16 reveal-fade-up">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.24em] text-[#DFBE82] uppercase">
              PRIORITY APPOINTMENTS
            </span>
            <h2 className="font-['Cinzel','Cormorant_Garamond',serif] text-3xl sm:text-4xl md:text-5xl font-bold tracking-[0.02em] text-[#FBF9F5] mt-2 mb-4">
              Request Your Detail
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent mx-auto mb-4" />
            <p className="text-sm sm:text-base text-[#9EABA2] font-normal">
              Enter your vehicle details and preferred timing. We will confirm your schedule and provide exact recommendations.
            </p>
          </div>
        )}

        <div className={`bg-[#07130F] border border-[#16362C] p-6 sm:p-10 rounded-sm shadow-2xl relative overflow-hidden ${shouldAnimate ? 'reveal-scale-up' : ''}`} style={{ transitionDelay: '140ms' }}>
          {/* Subtle Top Gold Highlight */}
          <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#DFBE82] to-transparent" />

          {submitted ? (
            <div className="py-12 text-center flex flex-col items-center animate-in fade-in duration-300">
              <div className="w-16 h-16 rounded-full bg-[#0B1C16] border-2 border-[#DFBE82] flex items-center justify-center text-[#DFBE82] mb-6 shadow-lg shadow-black">
                <Check className="w-8 h-8 text-[#DFBE82]" />
              </div>
              <h3 className="font-['Cinzel',serif] text-2xl font-bold text-[#FBF9F5] mb-2">
                Thank You.
              </h3>
              <p className="text-sm text-[#9EABA2] max-w-md mb-6 leading-relaxed">
                Your request has been received. We'll review your details and contact you shortly to confirm availability.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="px-6 py-2.5 rounded-sm border border-[#16362C] hover:border-[#DFBE82] text-xs font-semibold tracking-wider text-[#9EABA2] hover:text-[#FBF9F5] cursor-pointer"
                >
                  Submit Another Request
                </button>
                {isModal && onClose && (
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-6 py-2.5 rounded-sm bg-gradient-to-r from-[#D4AF37] to-[#B89228] text-[#07130F] text-xs font-bold tracking-wider uppercase cursor-pointer"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {errorMsg && (
                <div className="p-3.5 rounded-sm bg-red-950/40 border border-red-500/30 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Personal Info Row: Full Name *, Phone Number *, Email Address * */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alexander Vance"
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] placeholder-[#9EABA2]/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. (555) 019-2834"
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] placeholder-[#9EABA2]/40 transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alexander@example.com"
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] placeholder-[#9EABA2]/40 transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Vehicle Make & Model Row * */}
              <div>
                <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                  Vehicle Make & Model *
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={formData.vehicleMakeModel}
                    onChange={(e) => setFormData({ ...formData, vehicleMakeModel: e.target.value })}
                    placeholder="e.g. 2024 Porsche 911 Turbo S"
                    className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] placeholder-[#9EABA2]/40 transition-colors"
                  />
                </div>
              </div>

              {/* Service & Timing Row: Desired Service *, Preferred Date *, Preferred Time * */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div>
                  <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                    Desired Service *
                  </label>
                  <select
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] transition-colors cursor-pointer"
                  >
                    <option value="" disabled className="bg-[#07130F] text-[#9EABA2]">
                      Select a service
                    </option>
                    {SITE_CONFIG.SERVICES.map((s) => (
                      <option key={s.id} value={s.id} className="bg-[#07130F] text-[#FBF9F5]">
                        {s.number}. {s.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                    Preferred Date *
                  </label>
                  <div className="relative">
                    <Calendar className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="date"
                      required
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                    Preferred Time *
                  </label>
                  <div className="relative">
                    <Clock className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                    <input
                      type="time"
                      required
                      value={formData.preferredTime}
                      onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] transition-colors [color-scheme:dark]"
                    />
                  </div>
                </div>
              </div>

              {/* Service Location & ZIP Code Row: Address * & ZIP Code * */}
              <div className="space-y-1.5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="sm:col-span-2">
                    <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                      Mobile Service Location / Address *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        required
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        placeholder="e.g. 742 Evergreen Terrace (Driveway / Residence)"
                        className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] placeholder-[#9EABA2]/40 transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                      ZIP Code *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-[#9EABA2] absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                      <input
                        type="text"
                        inputMode="numeric"
                        required
                        maxLength={10}
                        value={formData.zipCode}
                        onChange={(e) => setFormData({ ...formData, zipCode: e.target.value })}
                        placeholder="e.g. 90210"
                        className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] placeholder-[#9EABA2]/40 transition-colors"
                      />
                    </div>
                  </div>
                </div>
                <span className="text-[10px] text-[#9EABA2] block">
                  Please ensure access to a water source and standard electrical power at your service location.
                </span>
              </div>

              {/* Additional Vehicle Notes (Optional) */}
              <div>
                <label className="block text-xs font-medium text-[#DFBE82] mb-1.5 uppercase tracking-wider">
                  Additional Vehicle Notes
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#9EABA2] absolute left-3 top-3 pointer-events-none" />
                  <textarea
                    rows={2}
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Mention pet hair, heavy water spotting, custom matte wrap, or specific concerns..."
                    className="w-full pl-9 pr-3 py-2.5 rounded-sm bg-[#0B1C16] border border-[#16362C] focus:border-[#DFBE82] focus:outline-none text-xs text-[#FBF9F5] placeholder-[#9EABA2]/40 transition-colors resize-none"
                  />
                </div>
              </div>

              {/* Primary Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-sm bg-gradient-to-r from-[#D4AF37] via-[#DFBE82] to-[#B89228] text-[#07130F] font-bold text-xs sm:text-sm tracking-[0.16em] uppercase hover:shadow-[0_0_25px_rgba(212,175,55,0.4)] hover:brightness-105 active:scale-[0.99] transition-all cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:shadow-none flex items-center justify-center gap-2.5"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 text-[#07130F] animate-spin shrink-0" />
                    <span>SENDING REQUEST...</span>
                  </>
                ) : (
                  <span>REQUEST FREE QUOTE</span>
                )}
              </button>

              {/* Instagram Alternative */}
              <div className="pt-4 border-t border-[#16362C] flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-[#9EABA2]">
                  Explore our latest mobile detailing work & behind-the-scenes
                </span>
                <a
                  href={instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-sm bg-[#0B1C16] border border-[#DFBE82]/40 text-[#DFBE82] hover:bg-[#DFBE82]/10 hover:border-[#DFBE82] text-xs font-semibold tracking-wider transition-colors cursor-pointer"
                >
                  <Instagram className="w-4 h-4" />
                  <span>FOLLOW US ON INSTAGRAM</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};
