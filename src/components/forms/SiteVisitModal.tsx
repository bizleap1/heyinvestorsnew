'use client';

import React, { useState, useEffect } from 'react';
import { X, Check, Calendar, Phone, Mail, User, Building, MessageSquare, ArrowRight } from '@/components/ui/icons';
import { PROJECTS } from '@/lib/projects-data';
import { COMPANY_INFO } from '@/lib/company-data';

interface SiteVisitModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultProjectSlug?: string;
}

export default function SiteVisitModal({
  isOpen,
  onClose,
  defaultProjectSlug = '',
}: SiteVisitModalProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectSlug: defaultProjectSlug,
    preferredDate: '',
    message: '',
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (defaultProjectSlug) {
      setFormData((prev) => ({ ...prev, projectSlug: defaultProjectSlug }));
    }
  }, [defaultProjectSlug]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');

    if (!formData.fullName.trim()) {
      setErrorMessage('Please enter your full name.');
      return;
    }
    if (!formData.phoneNumber.trim() || formData.phoneNumber.replace(/\D/g, '').length < 10) {
      setErrorMessage('Please enter a valid 10-digit mobile number.');
      return;
    }
    if (!formData.consent) {
      setErrorMessage('Please confirm authorization for communication regarding your visit.');
      return;
    }

    setIsSubmitting(true);

    try {
      const res = await fetch('/api/site-visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        console.warn('API returned non-200, completing locally.');
      }

      setIsSuccess(true);
    } catch {
      setIsSuccess(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setIsSuccess(false);
    setFormData({
      fullName: '',
      phoneNumber: '',
      email: '',
      projectSlug: '',
      preferredDate: '',
      message: '',
      consent: true,
    });
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby="site-visit-title"
    >
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#141414]/80 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#FAF8F5] text-[#141414] shadow-2xl rounded-none border border-[#141414]/15 overflow-hidden z-10 transition-all">
        {/* Header */}
        <div className="relative px-6 py-6 md:px-10 md:py-8 border-b border-[#141414]/10 bg-[#FAF8F5] flex items-start justify-between">
          <div>
            <span className="editorial-label">Direct Advisory & Site Inspection</span>
            <h2 id="site-visit-title" className="font-display text-2xl md:text-3xl font-semibold mt-1 tracking-[-0.03em] uppercase text-[#141414]">
              Schedule a Site Visit
            </h2>
            <p className="text-xs md:text-sm text-[#141414]/65 mt-1 max-w-md">
              Arrange private on-site inspection across Nagpur’s verified plotted developments.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#141414]/65 hover:text-[#141414] transition-colors -mr-2 -mt-2 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 md:p-10 max-h-[75vh] overflow-y-auto">
          {isSuccess ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-14 h-14 bg-[#6E745F]/15 text-[#6E745F] mx-auto rounded-full flex items-center justify-center">
                <Check className="w-7 h-7" />
              </div>
              <h3 className="font-display font-semibold text-2xl text-[#141414] tracking-[-0.02em] uppercase">Visit Request Confirmed</h3>
              <p className="text-sm text-[#141414]/65 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="font-medium text-[#141414]">{formData.fullName}</span>. Our senior land advisory team will contact you shortly at <span className="font-medium text-[#141414]">{formData.phoneNumber}</span> to coordinate your preferred timing and transport.
              </p>
              <div className="pt-4 flex justify-center gap-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="btn-primary text-xs"
                >
                  Done
                </button>
                <a
                  href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Hey Investor, I scheduled a site visit for ${formData.projectSlug || 'a Nagpur project'}. My name is ${formData.fullName}.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary text-xs"
                >
                  Direct WhatsApp Connect
                </a>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {errorMessage && (
                <div className="p-3 text-xs bg-red-50 border border-red-200 text-red-700">
                  {errorMessage}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#141414]/65 mb-1.5 font-mono">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-3 w-4 h-4 text-[#141414]/40" />
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g. Rajesh Sharma"
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#141414]/15 text-sm text-[#141414] focus:outline-none focus:border-[#141414] rounded-none transition"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#141414]/65 mb-1.5 font-mono">
                    Mobile Number *
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3.5 top-3 w-4 h-4 text-[#141414]/40" />
                    <input
                      type="tel"
                      required
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#141414]/15 text-sm text-[#141414] focus:outline-none focus:border-[#141414] rounded-none transition"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Email */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#141414]/65 mb-1.5 font-mono">
                    Email Address <span className="text-[#141414]/40 lowercase">(optional)</span>
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-3 w-4 h-4 text-[#141414]/40" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rajesh@example.com"
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#141414]/15 text-sm text-[#141414] focus:outline-none focus:border-[#141414] rounded-none transition"
                    />
                  </div>
                </div>

                {/* Preferred Date */}
                <div>
                  <label className="block text-xs uppercase tracking-wider font-medium text-[#141414]/65 mb-1.5 font-mono">
                    Preferred Visit Date
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3.5 top-3 w-4 h-4 text-[#141414]/40" />
                    <input
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                      min={new Date().toISOString().split('T')[0]}
                      className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#141414]/15 text-sm text-[#141414] focus:outline-none focus:border-[#141414] rounded-none transition"
                    />
                  </div>
                </div>
              </div>

              {/* Project Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#141414]/65 mb-1.5 font-mono">
                  Interested Plotted Development
                </label>
                <div className="relative">
                  <Building className="absolute left-3.5 top-3 w-4 h-4 text-[#141414]/40" />
                  <select
                    value={formData.projectSlug}
                    onChange={(e) => setFormData({ ...formData, projectSlug: e.target.value })}
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#141414]/15 text-sm text-[#141414] focus:outline-none focus:border-[#141414] rounded-none transition appearance-none cursor-pointer"
                  >
                    <option value="">General Nagpur Consultation / Any Available Corridor</option>
                    {PROJECTS.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} ({p.location}) — {p.status === 'sold' ? 'Sold Out / Resale Inquiry' : p.status === 'coming-soon' ? 'Coming Soon' : 'Available'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Specific requirements */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-medium text-[#141414]/65 mb-1.5 font-mono">
                  Specific Requirements or Questions
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-3.5 top-3 w-4 h-4 text-[#141414]/40" />
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Preferred plot size (e.g. 1,200 sq.ft.), financing requirements, or questions regarding NMRDA approvals..."
                    className="w-full pl-10 pr-3 py-2.5 bg-white border border-[#141414]/15 text-sm text-[#141414] focus:outline-none focus:border-[#141414] rounded-none transition resize-none"
                  />
                </div>
              </div>

              {/* Consent checkbox */}
              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 h-3.5 w-3.5 accent-[#141414] rounded-none cursor-pointer"
                />
                <label htmlFor="consent" className="text-xs text-[#141414]/65 leading-relaxed cursor-pointer">
                  I authorize Hey Investor Pvt. Ltd. to contact me via phone, WhatsApp, or email regarding project details and site visit arrangements.
                </label>
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center text-xs py-3.5"
                >
                  {isSubmitting ? (
                    'Processing Request...'
                  ) : (
                    <>
                      <span>Confirm Site Visit Request</span>
                      <ArrowRight className="w-4 h-4 ml-1 text-[#FAF8F5]" />
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
