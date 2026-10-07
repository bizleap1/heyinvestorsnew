'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, MapPin, Phone, Mail, ShieldCheck } from '@/components/ui/icons';
import { COMPANY_INFO } from '@/lib/company-data';
import { PROJECTS } from '@/lib/projects-data';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#111714] text-[#FAF9F6] pt-16 pb-12 border-t border-[#2A332E]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-[#2A332E] text-xs tracking-wide">
          
          {/* Brand Statement */}
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image
                src={COMPANY_INFO.logoUrl}
                alt="Hey Investor Pvt. Ltd."
                width={160}
                height={52}
                className="h-10 md:h-12 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm md:text-base text-[#A0A8A3] leading-relaxed font-light">
              Trusted partner for premium residential and commercial plotted developments across Nagpur and Vidarbha. NMRDA and RL-sanctioned layouts with institutional bank loan facilitation.
            </p>
            <div className="inline-flex items-center gap-3 px-3.5 py-2 bg-[#139D46]/10 border border-[#139D46]/20 rounded-none text-xs text-[#139D46]">
              <ShieldCheck className="w-4 h-4 text-[#139D46]" />
              <span>MahaRERA Reg. No. <strong className="text-white tracking-wider">{COMPANY_INFO.reraNumber}</strong></span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#139D46]">
              Quick Links
            </h4>
            <div className="flex flex-col space-y-3 text-sm text-[#A0A8A3]">
              <Link href="/" className="hover:text-white transition-colors w-fit">Home</Link>
              <Link href="/projects" className="hover:text-white transition-colors w-fit">Projects</Link>
              <Link href="/about" className="hover:text-white transition-colors w-fit">About Us</Link>
              <Link href="/contact" className="hover:text-white transition-colors w-fit">Contact</Link>
            </div>
          </div>

          {/* Office Contact Info */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#139D46]">
              Head Office & Contact
            </h4>
            <div className="space-y-4 text-[#A0A8A3]">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#139D46] mt-0.5 shrink-0" />
                <address className="not-italic leading-relaxed">
                  {COMPANY_INFO.address.line1},<br />
                  {COMPANY_INFO.address.line2},<br />
                  {COMPANY_INFO.address.city}, {COMPANY_INFO.address.state}
                </address>
              </div>

              {/* Big Phone Number CTA */}
              <div className="pt-2 pb-1">
                <a
                  href={`tel:${COMPANY_INFO.phoneRaw}`}
                  className="inline-flex items-center gap-3 group"
                >
                  <div className="w-10 h-10 rounded-full bg-[#139D46]/10 border border-[#139D46]/20 flex items-center justify-center group-hover:bg-[#139D46] transition-colors duration-300">
                    <Phone className="w-4 h-4 text-[#139D46] group-hover:text-white transition-colors" />
                  </div>
                  <span className="text-white text-[18px] md:text-[20px] font-sans font-medium tracking-wide group-hover:text-[#139D46] transition-colors">
                    {COMPANY_INFO.phone}
                  </span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#139D46] shrink-0" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-[#139D46] transition-colors text-white"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>

          {/* Map Location */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[#139D46]">
              Location Map
            </h4>
            <div className="w-full h-[180px] bg-[#2A332E] rounded overflow-hidden border border-[#2A332E]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3721.238695507746!2d79.0660683!3d21.1429037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c060af7c980f%3A0xc6c4f0f0c05f77!2sGhatate%20Building%2C%20Wardha%20Rd%2C%20Dhantoli%2C%20Nagpur%2C%20Maharashtra%20440012!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom Tier: Legal, Regulatory & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-[11px] text-[#A0A8A3]">
          <div>
            © {currentYear} Hey Investor Pvt. Ltd. All rights reserved. MahaRERA No. {COMPANY_INFO.reraNumber}.
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <span>NMRDA & RL Sanctioned Projects</span>
            <span className="hidden md:inline">·</span>
            <span className="hidden md:inline">Nagpur & Vidarbha</span>
            <span className="hidden md:inline">·</span>
            <Link href="/contact" className="hover:text-[#139D46] text-white underline underline-offset-2">
              Legal Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
