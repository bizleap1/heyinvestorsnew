import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/icons';
import { COMPANY_INFO } from '@/lib/company-data';

export default function InvestmentConfidenceSection() {
  const verifiedPoints = [
    {
      category: 'REGULATORY COMPLIANCE',
      title: 'MahaRERA & NMRDA Sanctions',
      detail: `Operating as a registered real estate firm under MahaRERA Registration No. ${COMPANY_INFO.reraNumber}. All layouts are vetted for valid NMRDA or NIT sanctions with official Release Letters (RL).`,
    },
    {
      category: 'INSTITUTIONAL FINANCE',
      title: 'Up to 90% Bank Loan Facility',
      detail:
        'Because each plot has clear legal title and statutory approval, purchasers can avail up to 80%–90% bank financing from major nationalized and private banking institutions.',
    },
    {
      category: 'TITLE DILIGENCE',
      title: 'Documentation & Search Reports',
      detail:
        'Every parcel undergoes rigorous title search diligence. Full legal dossiers, khasra details, and municipal clearance records are provided upfront prior to any token commitment.',
    },
    {
      category: 'PHYSICAL ASSURANCE',
      title: 'Private On-Site Inspection',
      detail:
        'We facilitate guided site visits directly to each development. Inspect ground-level progress: concrete roads, drainage infrastructure, transformers, and physical boundary stones.',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#141414] text-[#FAF8F5]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-20 border-b border-[#FAF8F5]/10 items-end">
          <div className="lg:col-span-8 space-y-4">
            <span className="editorial-label text-[#FAF8F5]/50">Verification & Due Diligence</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[0.98] text-[#FAF8F5] uppercase">
              Investment confidence, <br />
              <span className="text-[#FAF8F5]/65">verified at every step.</span>
            </h2>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <p className="text-xs uppercase tracking-widest text-[#FAF8F5]/60 font-mono">
              MahaRERA Reg. {COMPANY_INFO.reraNumber}
            </p>
          </div>
        </div>

        {/* 4 Typography-led Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 pt-16">
          {verifiedPoints.map((point, idx) => (
            <div key={point.category} className="space-y-4 group">
              <span className="text-[10px] uppercase font-mono tracking-widest text-[#6E745F] block">
                0{idx + 1} · {point.category}
              </span>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-[#FAF8F5] tracking-[-0.02em] group-hover:text-white transition-colors leading-tight">
                {point.title}
              </h3>
              <p className="text-xs text-[#FAF8F5]/65 leading-relaxed font-light">
                {point.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Assurance Bar */}
        <div className="mt-20 pt-10 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-xs text-[#FAF8F5]/70 max-w-xl leading-relaxed text-center sm:text-left">
            Have questions regarding layout sanctions or loan eligibility for a specific plot? Our advisory desk provides direct documentation access.
          </p>
          <Link
            href="/contact"
            className="btn-outline-paper text-xs px-6 py-3 whitespace-nowrap"
          >
            <span>Consult Our Senior Advisory</span>
            <ArrowUpRight className="w-3.5 h-3.5 ml-1 text-[#6E745F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
