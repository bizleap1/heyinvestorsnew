'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, ShieldCheck, CheckCircle2 } from '@/components/ui/icons';
import FadeIn from '@/components/ui/FadeIn';

const PROPERTIES = [
  {
    id: 'nagpur-marina',
    image: '/BLOGS/infiniteblog.png',
    title: 'Nagpur Marina',
    location: 'Wardha Road, Nagpur',
    pricePerSqft: '₹5,400',
    priceFrom: '₹67.5 Lakh',
    sizes: '1250 / 1798 sq.ft',
    rera: 'PP1190002502095',
    tags: ['NMRDA Approved', 'RL Approved', '90% Loan Available']
  },
  {
    id: 'saraswati-nagari-8',
    image: '/8.png',
    title: 'Saraswati Nagari 8',
    location: 'Mouza-Lava, Nagpur',
    pricePerSqft: '₹2,000',
    priceFrom: '₹20 Lakh',
    sizes: '1000 / 1200 / 1500 sq.ft',
    rera: 'P50500056182',
    tags: ['NMRDA Approved', 'RL Approved', '90% Loan Available']
  },
  {
    id: 'saraswati-nagari-9',
    image: '/10.png',
    title: 'Saraswati Nagari 9',
    location: 'Godhani, Nagpur',
    pricePerSqft: '₹2,250',
    priceFrom: '₹22.5 Lakh',
    sizes: '1000 / 1500 / 2000 sq.ft',
    rera: 'P50500056134',
    tags: ['Commercial + Residential', 'RL Approved', '90% Loan Available']
  },
  {
    id: 'waddhamna-layout',
    image: '/6.png',
    title: 'Waddhamna Layout',
    location: 'Waddhamna, Nagpur',
    pricePerSqft: '₹1,600',
    priceFrom: '₹16 Lakh',
    sizes: '1000 / 1500 sq.ft',
    rera: 'P50500054102',
    tags: ['NMRDA Approved', 'RL Approved', '80% Loan Available']
  }
];

export default function AvailableProperties() {
  return (
    <section className="w-full bg-[#FAF9F6] py-8 lg:py-10 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Top Header Row */}
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center mb-3">
              <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
                PREMIUM OPEN PLOTS IN NAGPUR
              </span>
            </div>
            <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-4">
              <span className="text-[#111714] font-medium">Available </span>
              <span className="text-[#139D46] font-medium">Properties</span>
            </h2>
            <p className="font-sans text-[15px] lg:text-[16px] text-[#56605A] leading-relaxed">
              Well-planned, legally clear and future-ready plotted developments in Nagpur’s fastest growing corridors.
            </p>
          </div>
        </FadeIn>

        {/* 4 Equal Premium Cards Row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 max-w-[1280px] mx-auto">
          {PROPERTIES.map((property, idx) => (
            <FadeIn key={property.id} direction="up" delay={idx * 0.1}>
              <div 
                className="bg-white border border-[#E7E3DA] rounded-[12px] overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.03)] flex flex-col transition-all hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] group h-full"
              >
                {/* Image Container */}
                <div className="relative w-full h-[180px] sm:h-[240px] lg:h-[320px] overflow-hidden bg-[#FAF9F6] border-b border-[#E7E3DA] p-2 sm:p-4 flex items-center justify-center">
                  <div className="relative w-full h-full">
                    <Image
                      src={property.image}
                      alt={property.title}
                      fill
                      className="object-contain transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw"
                    />
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-3 sm:p-5 flex flex-col flex-grow">
                  {/* Header & Location */}
                  <div className="mb-3 sm:mb-4">
                    <div className="inline-flex items-center gap-1.5 bg-[#139D46] text-white px-1.5 sm:px-2 py-0.5 rounded-[4px] text-[8px] sm:text-[9px] font-bold tracking-wider uppercase mb-2 sm:mb-2.5 shadow-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FAF9F6] animate-pulse"></div>
                      AVAILABLE
                    </div>
                    <h3 className="font-display text-[14px] sm:text-[18px] lg:text-[22px] text-[#111714] leading-tight mb-1 sm:mb-2 group-hover:text-[#139D46] transition-colors">
                      {property.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-[#56605A] text-[10px] sm:text-[12px] gap-1 sm:gap-0">
                      <div className="flex items-center gap-1 sm:gap-1.5">
                        <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#139D46] shrink-0" />
                        <span className="truncate max-w-[120px] sm:max-w-none">{property.location}</span>
                      </div>
                      <span className="font-medium text-[#111714] text-[8px] sm:text-[10px] bg-[#FAF9F6] px-1.5 sm:px-2 py-0.5 sm:py-1 rounded border border-[#E7E3DA] whitespace-nowrap">RERA: {property.rera}</span>
                    </div>
                  </div>

                  {/* Pricing Split */}
                  <div className="grid grid-cols-2 gap-2 sm:gap-3 mb-3 sm:mb-4 p-2 sm:p-3 bg-[#FAF9F6] rounded-[8px] border border-[#E7E3DA]/50">
                    <div className="flex flex-col border-r border-[#E7E3DA]">
                      <span className="text-[8px] sm:text-[10px] text-[#56605A] font-semibold uppercase tracking-wider mb-0.5 sm:mb-1">Price / Sq.Ft</span>
                      <span className="text-[11px] sm:text-[16px] text-[#111714] font-bold font-sans">{property.pricePerSqft}</span>
                    </div>
                    <div className="flex flex-col pl-1.5 sm:pl-2">
                      <span className="text-[8px] sm:text-[10px] text-[#56605A] font-semibold uppercase tracking-wider mb-0.5 sm:mb-1">Plots From</span>
                      <span className="text-[11px] sm:text-[16px] text-[#139D46] font-bold font-sans">{property.priceFrom}</span>
                    </div>
                  </div>

                  {/* Plot Sizes */}
                  <div className="mb-3 sm:mb-5">
                    <p className="text-[10px] sm:text-[12px] text-[#56605A] flex flex-col sm:flex-row sm:items-center gap-0.5 sm:gap-2 leading-tight">
                      <span className="font-semibold text-[#111714]">Sizes:</span> {property.sizes}
                    </p>
                  </div>

                  {/* Trust Chips */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 mb-4 sm:mb-6 mt-auto">
                    {property.tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-1 bg-[#F4F9F6] text-[#139D46] text-[8px] sm:text-[10px] font-semibold px-1.5 sm:px-2 py-0.5 sm:py-1 rounded-[6px] border border-[#139D46]/10">
                        <ShieldCheck className="w-2.5 h-2.5 sm:w-3 sm:h-3 shrink-0" />
                        <span className="truncate leading-tight">{tag}</span>
                      </div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex flex-col sm:grid sm:grid-cols-2 gap-1.5 sm:gap-2 pt-3 sm:pt-4 border-t border-[#E7E3DA]">
                    <Link 
                      href={`/projects/${property.id}`}
                      className="h-[32px] sm:h-[42px] flex items-center justify-center text-[#111714] border border-[#E7E3DA] rounded-[8px] font-sans font-semibold text-[10px] sm:text-[13px] hover:bg-[#FAF9F6] hover:border-[#111714] transition-colors"
                    >
                      View Details
                    </Link>
                    <button className="h-[32px] sm:h-[42px] flex items-center justify-center gap-1 sm:gap-1.5 text-white bg-[#139D46] rounded-[8px] font-sans font-semibold text-[10px] sm:text-[13px] hover:bg-[#0A3D2A] transition-colors shadow-sm">
                      Enquire <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                    </button>
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Bottom CTA */}
        <FadeIn direction="up" delay={0.2}>
          <div className="mt-16 flex justify-center">
            <Link 
              href="/projects"
              className="inline-flex items-center justify-center gap-2 text-[#139D46] border border-[#139D46] h-[46px] px-6 rounded-[10px] font-sans font-semibold text-[14px] hover:bg-[#139D46] hover:text-[#FAF9F6] transition-colors"
            >
              View All Properties <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </FadeIn>

      </div>
    </section>
  );
}
