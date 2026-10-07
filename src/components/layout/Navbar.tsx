'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight, ShieldCheck, QrCode } from '@/components/ui/icons';
import { COMPANY_INFO } from '@/lib/company-data';
import SiteVisitModal from '@/components/forms/SiteVisitModal';

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [qrModalOpen, setQrModalOpen] = useState(false);

  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      // Keep navbar transparent over the hero scene on homepage
      const threshold = isHome ? window.innerHeight * 1.2 : 40;
      if (window.scrollY > threshold) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Projects', href: '/projects' },
    { label: 'Why Hey Investor', href: '/about' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#FAF9F6]/95 backdrop-blur-md shadow-sm border-b border-[#E7E3DA]'
            : 'bg-[#FAF9F6] border-b border-[#E7E3DA]'
        }`}
      >
        <div className="w-full px-6 lg:px-8 xl:px-12 h-[74px] flex items-center justify-between">
          {/* Left: Logo & MahaRERA */}
          <div className="flex items-center gap-4 md:gap-5 flex-shrink-0">
            <Link href="/" className="inline-block relative transition-opacity hover:opacity-90 flex-shrink-0">
              <Image
                src={COMPANY_INFO.logoUrl}
                alt="Hey Investor Pvt. Ltd."
                width={220}
                height={70}
                priority
                className="h-12 md:h-14 w-auto object-contain"
              />
            </Link>

            {/* Divider */}
            <div className="hidden md:block w-[1px] h-[40px] bg-[#E7E3DA]"></div>

            {/* MahaRERA Info */}
            <div 
              className="hidden md:flex items-center gap-3 cursor-pointer group"
              onClick={() => setQrModalOpen(true)}
              title="Click to view full MahaRERA Details"
            >
              <Image
                src={COMPANY_INFO.qrCodeUrl}
                alt="MahaRERA QR Code"
                width={44}
                height={44}
                className="h-11 w-11 object-contain opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div className="flex flex-col justify-center">
                <span className="text-[10px] md:text-[11px] text-[#56605A] font-sans uppercase tracking-wider font-medium leading-none mb-1.5">MahaRERA Registration No.</span>
                <span className="text-[13px] md:text-[15px] text-[#1F1F1F] font-sans font-bold leading-none">{COMPANY_INFO.reraNumber}</span>
              </div>
            </div>
          </div>

          {/* Center Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`relative text-[15px] font-sans font-medium transition-colors after:content-[''] after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-[1.5px] after:origin-left after:transition-transform after:duration-300 ${
                    active ? 'text-[#139D46] after:bg-[#139D46] after:scale-x-100' : 'text-[#111714] hover:text-[#139D46] after:bg-[#139D46] after:scale-x-0 hover:after:scale-x-100'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-5 lg:gap-6">




            {/* CTA */}
            <a
              href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent('Hi, I would like a free consultation with your property experts.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center gap-2 h-[44px] px-6 text-[14px] font-sans font-semibold rounded-[8px] bg-[#139D46] text-white hover:bg-[#10853B] transition-colors"
            >
              Free Consultation &rarr;
            </a>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open mobile navigation"
              className="lg:hidden p-2 -mr-2 text-[#111714] hover:text-[#139D46] transition-colors cursor-pointer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-between bg-[#FAF9F6] text-[#111714] p-6 md:p-10 animate-in fade-in duration-200">
          <div className="flex items-center justify-between border-b border-[#E7E3DA] pb-6">
            <Image
              src={COMPANY_INFO.logoUrl}
              alt="Hey Investor Pvt. Ltd."
              width={130}
              height={42}
              className="h-8 w-auto object-contain"
            />
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close mobile navigation"
              className="p-2 text-[#56605A] hover:text-[#139D46]"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-6 py-8">
            <span className="font-sans text-[11px] font-bold uppercase tracking-widest text-[#139D46]">Menu</span>
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-display text-3xl sm:text-4xl font-medium text-[#111714] hover:text-[#139D46] transition-colors tracking-tight"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="border-t border-[#E7E3DA] pt-6 space-y-4">
            <div className="flex items-center justify-between text-xs text-[#56605A]">
              <span>MahaRERA Registration No.</span>
              <span className="font-bold text-[#111714]">{COMPANY_INFO.reraNumber}</span>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                setSiteVisitOpen(true);
              }}
              className="w-full h-[48px] inline-flex items-center justify-center gap-2 bg-[#139D46] text-white rounded-[12px] font-sans font-semibold text-[14px] hover:bg-[#10853B] transition-colors"
            >
              <span>Schedule a Site Visit</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </button>

            <div className="flex justify-between items-center text-xs text-[#56605A] pt-2">
              <a href={`tel:${COMPANY_INFO.phoneRaw}`} className="hover:text-[#139D46] font-medium">
                {COMPANY_INFO.phone}
              </a>
              <a href={COMPANY_INFO.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-[#139D46] font-medium">
                WhatsApp Direct
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MahaRERA Lightbox Modal */}
      {qrModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141414]/80 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
        >
          <div className="relative bg-[#FAF8F5] p-6 md:p-8 max-w-sm w-full border border-[#141414]/15 shadow-2xl text-center space-y-4">
            <button
              onClick={() => setQrModalOpen(false)}
              className="absolute top-4 right-4 text-[#141414]/65 hover:text-[#141414]"
              aria-label="Close QR Modal"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="editorial-label">Regulatory Compliance</span>
            <h3 className="font-display text-lg uppercase font-semibold text-[#141414] tracking-tight">MahaRERA Registration</h3>
            <div className="p-3 bg-white border border-[#141414]/10 inline-block mx-auto">
              <Image
                src={COMPANY_INFO.qrCodeUrl}
                alt="MahaRERA QR Code"
                width={200}
                height={200}
                className="w-48 h-48 object-contain"
              />
            </div>
            <div>
              <p className="text-xs text-[#141414]/65 uppercase tracking-wider">Registration Number</p>
              <p className="font-semibold text-[#141414] tracking-wider text-base mt-0.5">
                {COMPANY_INFO.reraNumber}
              </p>
            </div>
            <p className="text-[11px] text-[#141414]/65 leading-relaxed">
              Verify legal sanctions and agent accreditation directly on the official MahaRERA portal.
            </p>
          </div>
        </div>
      )}

      {/* Global Site Visit Modal */}
      <SiteVisitModal isOpen={siteVisitOpen} onClose={() => setSiteVisitOpen(false)} />
    </>
  );
}
