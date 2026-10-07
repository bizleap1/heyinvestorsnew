import React from 'react';
import Image from 'next/image';

export default function HowItWorksSection() {
  const steps = [
    {
      step: '01',
      title: 'Discover',
      description:
        'Explore curated plotted layouts aligned with your timeline, budget, and corridor preference—Wardha Road, Amravati Road, Hingna, or Godhani.',
      image: '/images/generated/process_discover_1791114073088.jpg'
    },
    {
      step: '02',
      title: 'Site Visit',
      description:
        'Guided on-ground inspection. Review road width, demarcation stones, civic utilities, drainage lines, and neighborhood infrastructure in person.',
      image: '/images/generated/process_site_visit_1791114085761.jpg'
    },
    {
      step: '03',
      title: 'Due Diligence',
      description:
        'Complete transparency. Inspect NMRDA sanction numbers, Release Letters (RL), khasra records, and 7/12 land extract documents with our legal desk.',
      image: '/images/generated/process_due_diligence_1791114101591.jpg'
    },
    {
      step: '04',
      title: 'Financing',
      description:
        'Institutional facilitation. We coordinate directly with nationalized and private banking partners to process up to 80%–90% plot loans smoothly.',
      image: '/images/generated/process_financing_1791114112922.jpg'
    },
    {
      step: '05',
      title: 'Ownership',
      description:
        'Flawless registry and mutation. Receive clear freehold title deed and full physical possession ready for immediate construction or long-term holding.',
      image: '/images/generated/process_ownership_1791114125791.jpg'
    },
  ];

  return (
    <section className="py-8 md:py-10 bg-white text-[#141414] border-t border-[#141414]/10">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-10">
          <div className="flex items-center justify-center mb-3">
            <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
              THE PROCESS
            </span>
          </div>
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-4">
            <span className="text-[#111714] font-medium">How Hey Investor </span>
            <span className="text-[#139D46] font-medium">Guides Your Acquisition.</span>
          </h2>
          <p className="font-sans text-[15px] lg:text-[16px] text-[#56605A] leading-relaxed">
            A disciplined, investor-first journey designed to eliminate regulatory friction and bring complete peace of mind to land acquisition.
          </p>
        </div>

        {/* 5-Column Grid with Images */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 sm:gap-8 md:gap-5 border-t border-[#141414]/15 pt-8 md:pt-10">
          {steps.map((item) => (
            <div key={item.step} className="group flex flex-col">
              {/* Image Container */}
              <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#141414]/5 mb-3 sm:mb-6">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-in-out group-hover:scale-105"
                  sizes="(max-width: 768px) 50vw, 20vw"
                />
              </div>
              
              <div className="flex flex-col flex-1">
                <span className="font-mono text-[9px] sm:text-[10px] uppercase tracking-widest text-[#6E745F] block border-b border-[#141414]/10 pb-2 sm:pb-3 group-hover:border-[#141414]/40 transition-colors mb-2 sm:mb-3">
                  STEP {item.step}
                </span>
                <h3 className="font-display font-medium text-[16px] sm:text-xl md:text-2xl text-[#141414] tracking-[-0.02em] group-hover:text-[#6E745F] transition-colors mb-1.5 sm:mb-2">
                  {item.title}
                </h3>
                <p className="text-[12px] sm:text-xs text-[#141414]/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
