'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, Phone } from '@/components/ui/icons';
import SiteVisitModal from '@/components/forms/SiteVisitModal';
import { COMPANY_INFO } from '@/lib/company-data';

export default function FinalCtaSection() {
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);

  return (
    <>
      <section className="relative py-16 md:py-24 bg-[#141414] text-[#FAF8F5] overflow-hidden">
        {/* Subtle background video */}
        <div className="absolute inset-0 z-0">
          <video
            src="/hero_video.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#111714]/60" />
        </div>

        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <div className="flex flex-col items-center text-center">
              <div className="flex items-center justify-center mb-4">
                <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
                  NEXT STEPS
                </span>
              </div>
              <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
                <span className="text-[#FAF9F6] font-medium">Your Next Address </span>
                <span className="text-[#139D46] font-medium">May Still Be Land Today.</span>
              </h2>
              <p className="font-sans text-[15px] lg:text-[16px] text-[#FAF8F5]/75 leading-relaxed max-w-xl mx-auto">
                Connect directly with our senior advisory desk to inspect sanctioned residential and commercial plots across Nagpur’s fastest-growing corridors.
              </p>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
              <button
                type="button"
                onClick={() => setSiteVisitOpen(true)}
                className="btn-primary-dark text-xs px-8 py-4 tracking-[0.14em]"
              >
                <span>Schedule a Private Site Visit</span>
                <ArrowRight className="w-4 h-4 ml-1 text-[#141414]" />
              </button>

              <a
                href={`tel:${COMPANY_INFO.phoneRaw}`}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#FAF8F5]/80 hover:text-white transition-colors py-3"
              >
                <Phone className="w-3.5 h-3.5 text-[#6E745F]" />
                <span>Call {COMPANY_INFO.phone}</span>
              </a>
            </div>

            <div className="pt-8 text-[11px] uppercase tracking-widest text-[#FAF8F5]/40 font-mono">
              MahaRERA: {COMPANY_INFO.reraNumber} · Nagpur, Maharashtra
            </div>
          </div>
        </div>
      </section>

      <SiteVisitModal isOpen={siteVisitOpen} onClose={() => setSiteVisitOpen(false)} />
    </>
  );
}
