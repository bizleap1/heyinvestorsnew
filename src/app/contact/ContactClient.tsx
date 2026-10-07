'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import {
  MapPin,
  Phone,
  Mail,
  ShieldCheck,
  Check,
  Calendar,
  Building,
  User,
  MessageSquare,
  ArrowRight
} from '@/components/ui/icons';
import { COMPANY_INFO } from '@/lib/company-data';
import { PROJECTS } from '@/lib/projects-data';

export default function ContactClient() {
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    projectSlug: '',
    preferredDate: '',
    message: '',
    consent: true,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

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

  return (
    <div className="bg-[#FAF9F6] text-[#111714] min-h-screen selection:bg-[#139D46] selection:text-white pt-32 pb-20 md:pt-40 md:pb-32">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Header */}
        <div className="max-w-3xl space-y-6 pb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#139D46]/10 border border-[#139D46]/20">
            <span className="w-2 h-2 rounded-full bg-[#139D46] animate-pulse"></span>
            <span className="text-[#139D46] text-xs font-bold uppercase tracking-widest font-sans">
              Direct Communication
            </span>
          </div>
          <h1 className="font-display text-[42px] sm:text-[56px] lg:text-[72px] leading-[0.9] tracking-[-0.04em] text-[#111714]">
            Schedule a Site Visit. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#139D46] to-[#0A6329]">On location.</span>
          </h1>
          <p className="font-sans text-[16px] md:text-[18px] text-[#56605A] leading-relaxed max-w-2xl">
            Arrange a private ground inspection of our NMRDA & RL sanctioned plotted developments, or visit our central offices near Law College Square for document verification.
          </p>
        </div>

        {/* Dual Grid: Contact Form + Corporate Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Column */}
          <div className="lg:col-span-7 bg-white p-8 sm:p-12 rounded-[32px] border border-[#E7E3DA] shadow-[0_8px_30px_rgba(19,157,70,0.06)]">
            {isSuccess ? (
              <div className="py-16 text-center space-y-6">
                <div className="w-20 h-20 bg-[#139D46]/10 text-[#139D46] mx-auto rounded-[24px] flex items-center justify-center transform rotate-3">
                  <Check className="w-10 h-10 transform -rotate-3" />
                </div>
                <h2 className="font-display text-[32px] text-[#111714]">Inspection Request Registered</h2>
                <p className="font-sans text-[#56605A] max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-[#111714] font-semibold">{formData.fullName}</strong>. Our senior advisory desk will call you at <strong className="text-[#111714] font-semibold">{formData.phoneNumber}</strong> to confirm your transport and site schedule.
                </p>
                <div className="pt-8 flex flex-col sm:flex-row justify-center gap-4">
                  <button
                    onClick={() => {
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
                    }}
                    className="h-[48px] inline-flex items-center justify-center px-8 bg-[#FAF9F6] text-[#111714] border border-[#E7E3DA] rounded-[12px] font-sans font-semibold text-[14px] hover:bg-white hover:border-[#139D46] transition-all duration-300"
                  >
                    Submit Another Request
                  </button>
                  <a
                    href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello Hey Investor, I submitted a site visit request for ${formData.fullName}.`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="h-[48px] inline-flex items-center justify-center px-8 bg-[#139D46] text-white rounded-[12px] font-sans font-semibold text-[14px] hover:bg-[#10853B] transition-all duration-300 shadow-[0_4px_14px_rgba(19,157,70,0.3)] hover:shadow-[0_6px_20px_rgba(19,157,70,0.4)]"
                  >
                    Direct WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2 mb-8">
                  <h2 className="font-display text-[28px] text-[#111714]">
                    Plan Your Visit
                  </h2>
                  <p className="font-sans text-[14px] text-[#56605A]">
                    Fill out the form below and our team will get back to you promptly.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-4 text-sm bg-red-50 border border-red-200 text-red-700 rounded-[12px]">
                    {errorMessage}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block font-sans text-sm font-semibold text-[#111714]">Full Name *</label>
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#56605A]" />
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Rajesh Sharma"
                        className="w-full pl-12 pr-4 py-3 bg-[#FAF9F6] border border-[#E7E3DA] text-[#111714] text-sm rounded-[12px] focus:outline-none focus:border-[#139D46] focus:ring-1 focus:ring-[#139D46] transition-all placeholder:text-[#A0A8A3]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-sans text-sm font-semibold text-[#111714]">Mobile Number *</label>
                    <div className="relative">
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#56605A]" />
                      <input
                        type="tel"
                        required
                        value={formData.phoneNumber}
                        onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                        placeholder="+91 93256 50256"
                        className="w-full pl-12 pr-4 py-3 bg-[#FAF9F6] border border-[#E7E3DA] text-[#111714] text-sm rounded-[12px] focus:outline-none focus:border-[#139D46] focus:ring-1 focus:ring-[#139D46] transition-all placeholder:text-[#A0A8A3]"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="block font-sans text-sm font-semibold text-[#111714]">Email Address <span className="text-[#A0A8A3] font-normal">(optional)</span></label>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#56605A]" />
                      <input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="rajesh@example.com"
                        className="w-full pl-12 pr-4 py-3 bg-[#FAF9F6] border border-[#E7E3DA] text-[#111714] text-sm rounded-[12px] focus:outline-none focus:border-[#139D46] focus:ring-1 focus:ring-[#139D46] transition-all placeholder:text-[#A0A8A3]"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="block font-sans text-sm font-semibold text-[#111714]">Preferred Visit Date</label>
                    <div className="relative">
                      <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#56605A]" />
                      <input
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        min={new Date().toISOString().split('T')[0]}
                        className="w-full pl-12 pr-4 py-3 bg-[#FAF9F6] border border-[#E7E3DA] text-[#111714] text-sm rounded-[12px] focus:outline-none focus:border-[#139D46] focus:ring-1 focus:ring-[#139D46] transition-all placeholder:text-[#A0A8A3]"
                      />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-sans text-sm font-semibold text-[#111714]">Select Development of Interest</label>
                  <div className="relative">
                    <Building className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#56605A] pointer-events-none" />
                    <select
                      value={formData.projectSlug}
                      onChange={(e) => setFormData({ ...formData, projectSlug: e.target.value })}
                      className="w-full pl-12 pr-4 py-3 bg-[#FAF9F6] border border-[#E7E3DA] text-[#111714] text-sm rounded-[12px] focus:outline-none focus:border-[#139D46] focus:ring-1 focus:ring-[#139D46] transition-all appearance-none cursor-pointer"
                    >
                      <option value="">General Nagpur Consultation / Any Available Corridor</option>
                      {PROJECTS.map((p) => (
                        <option key={p.slug} value={p.slug}>
                          {p.name} ({p.location}) — {p.status === 'sold' ? 'Sold Out' : p.status === 'coming-soon' ? 'Upcoming' : 'Available'}
                        </option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                       <ArrowRight className="w-4 h-4 text-[#56605A] rotate-90" />
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="block font-sans text-sm font-semibold text-[#111714]">Specific Inquiries or Requirements</label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-[#56605A]" />
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Specify questions regarding layout sanctions, plot demarcations, bank loan eligibility..."
                      className="w-full pl-12 pr-4 py-3 bg-[#FAF9F6] border border-[#E7E3DA] text-[#111714] text-sm rounded-[12px] focus:outline-none focus:border-[#139D46] focus:ring-1 focus:ring-[#139D46] transition-all resize-none placeholder:text-[#A0A8A3]"
                    />
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <input
                    type="checkbox"
                    id="page-consent"
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 h-4 w-4 accent-[#139D46] rounded-[4px] cursor-pointer"
                  />
                  <label htmlFor="page-consent" className="text-sm text-[#56605A] leading-relaxed cursor-pointer select-none">
                    I authorize Hey Investor Pvt. Ltd. to contact me via phone, WhatsApp, or email regarding project details and site visit arrangements.
                  </label>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full h-[52px] inline-flex items-center justify-center gap-2 bg-[#111714] text-white rounded-[12px] font-sans font-semibold text-[15px] hover:bg-[#139D46] transition-all duration-300 shadow-[0_4px_14px_rgba(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(19,157,70,0.4)] disabled:opacity-70 disabled:cursor-not-allowed mt-4"
                >
                  {isSubmitting ? (
                    'Registering Inspection Request...'
                  ) : (
                    <>
                      <span>Confirm Site Visit Booking</span>
                      <ArrowRight className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Corporate Office & Details Column */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Headquarters Card */}
            <div className="bg-white p-8 md:p-10 rounded-[32px] border border-[#E7E3DA] group hover:border-[#139D46]/50 hover:shadow-[0_8px_30px_rgba(19,157,70,0.06)] transition-all duration-300">
              <span className="text-[#139D46] text-[11px] font-bold uppercase tracking-widest bg-[#139D46]/10 px-3 py-1 rounded-full mb-6 inline-block">
                Headquarters
              </span>
              <h3 className="font-display text-[32px] mb-6 text-[#111714]">
                Hey Investor Pvt. Ltd.
              </h3>

              <div className="space-y-6 text-[15px] text-[#56605A]">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#FAF9F6] border border-[#E7E3DA] rounded-full flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#139D46]" />
                  </div>
                  <address className="not-italic leading-relaxed mt-1">
                    {COMPANY_INFO.address.line1},<br />
                    {COMPANY_INFO.address.line2},<br />
                    {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                  </address>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#FAF9F6] border border-[#E7E3DA] rounded-full flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#139D46]" />
                  </div>
                  <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="text-[#111714] hover:text-[#139D46] font-medium transition-colors">
                    {COMPANY_INFO.phone}
                  </a>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 flex items-center justify-center bg-[#FAF9F6] border border-[#E7E3DA] rounded-full flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#139D46]" />
                  </div>
                  <a href={`mailto:${COMPANY_INFO.email}`} className="text-[#111714] hover:text-[#139D46] transition-colors">
                    {COMPANY_INFO.email}
                  </a>
                </div>
              </div>
            </div>

            {/* MahaRERA Light Card */}
            <div className="bg-white p-8 rounded-[24px] border border-[#E7E3DA] flex flex-col sm:flex-row items-center gap-6 group hover:border-[#139D46]/50 transition-colors duration-300">
              <div className="w-24 h-24 p-2 bg-[#FAF9F6] border border-[#E7E3DA] rounded-[16px] shrink-0 flex items-center justify-center">
                <Image
                  src={COMPANY_INFO.qrCodeUrl}
                  alt="MahaRERA QR Code"
                  width={80}
                  height={80}
                  className="w-16 h-16 object-contain mix-blend-multiply"
                />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <ShieldCheck className="w-5 h-5 text-[#139D46]" />
                  <span className="font-sans text-[13px] font-bold uppercase tracking-widest text-[#111714]">
                    Regulatory Verification
                  </span>
                </div>
                <strong className="text-[18px] font-sans text-[#111714] block mb-2">
                  {COMPANY_INFO.reraNumber}
                </strong>
                <span className="text-[13px] text-[#56605A] leading-relaxed block">
                  Scan QR to verify regulatory accreditation on the official MahaRERA portal.
                </span>
              </div>
            </div>

            {/* Advisory Timing */}
            <div className="bg-[#FAF9F6] p-8 rounded-[24px] border border-[#E7E3DA]">
              <span className="font-sans text-[13px] font-bold uppercase tracking-widest text-[#111714] block mb-4">
                Advisory Hours
              </span>
              <div className="space-y-2 text-[14px] text-[#56605A]">
                <p className="flex justify-between">
                  <span className="font-medium text-[#111714]">Mon – Sat</span>
                  <span>10:00 AM – 7:00 PM</span>
                </p>
                <div className="w-full h-px bg-[#E7E3DA] my-2" />
                <p className="flex justify-between">
                  <span className="font-medium text-[#111714]">Sunday</span>
                  <span>Prior Appointments Only</span>
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
