'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, ArrowRight } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';

const CORRIDORS = [
  {
    id: 'Wardha',
    name: 'Wardha Road',
    image: '/images/generated/wardha_new.jpg',
    subtitle: 'Nagpur’s most preferred growth corridor',
    landmarks: [
      'MIHAN (Airport)',
      'Metro Connectivity',
      'Education Hubs',
      'IT & Business Parks'
    ]
  },
  {
    id: 'Hingna',
    name: 'Hingna',
    image: '/images/generated/hingna.jpg',
    subtitle: 'A rapidly developing residential destination',
    landmarks: [
      'Hingna MIDC',
      'Engineering Colleges',
      'Proposed Metro',
      'Growing Residential Hub'
    ]
  },
  {
    id: 'Amravati',
    name: 'Amravati Road',
    image: '/images/generated/amravati_new.png',
    subtitle: 'Excellent connectivity and high appreciation potential',
    landmarks: [
      'Outer Ring Road',
      'Upcoming Metro Line',
      'Logistics & Warehousing',
      'Emerging Residential Projects'
    ]
  }
];

export default function ExploreCorridors() {
  return (
    <section className="w-full bg-[#FAF9F6] py-[40px] lg:py-[48px] overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-6">
        
        {/* Top Header Row */}
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-center mb-4">
              <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
                KEY GROWTH CORRIDORS
              </span>
            </div>
            <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              <span className="text-[#111714] font-medium">Explore by </span>
              <span className="text-[#139D46] font-medium">Corridor</span>
            </h2>
            <p className="font-sans text-[15px] lg:text-[16px] text-[#56605A] leading-relaxed">
              Strategic locations. Strong infrastructure. Greater opportunities. Invest in Nagpur’s most promising growth corridors.
            </p>
          </div>
        </FadeIn>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Left: Premium Illustrated Map */}
          <FadeIn direction="right" className="w-full">
            <div className="w-full bg-[#FAF9F6] border border-[#E7E3DA] rounded-[12px] p-6 relative min-h-[300px] sm:min-h-[400px] xl:min-h-[600px] shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col items-center justify-center h-full">
              <div className="relative w-full h-full min-h-[250px] sm:min-h-[350px] xl:min-h-[500px]">
                <Image
                  src="/globe.png"
                  alt="Nagpur Investment Corridors Map"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </FadeIn>

          {/* Right: Corridor Cards */}
          <div className="w-full grid grid-cols-2 lg:flex lg:flex-col gap-3 sm:gap-5">
            {CORRIDORS.map((corridor, idx) => (
              <FadeIn key={corridor.id} direction="left" delay={idx * 0.1} className={`h-full ${idx === 2 ? 'col-span-2 sm:col-span-1 lg:col-span-1' : 'col-span-1'}`}>
                <div 
                  className={`bg-white border border-[#E7E3DA] rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col lg:flex-row group transition-shadow hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] h-full`}
                >
                  {/* Image */}
                  <div className="relative w-full lg:w-[35%] xl:w-[40%] aspect-[4/3] lg:aspect-auto lg:min-h-full bg-[#F2EFE9] overflow-hidden shrink-0">
                    <Image
                      src={corridor.image}
                      alt={corridor.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-3 sm:p-5 lg:p-6 flex flex-col flex-grow justify-center">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="font-display text-[15px] sm:text-[20px] lg:text-[24px] text-[#111714] leading-tight">
                        {corridor.name}
                      </h3>
                    </div>
                    <p className="font-sans text-[11px] sm:text-[13px] lg:text-[14px] text-[#56605A] mb-3 lg:mb-4 line-clamp-2 lg:line-clamp-none">
                      {corridor.subtitle}
                    </p>

                    <ul className="flex flex-col sm:grid sm:grid-cols-2 gap-y-1 sm:gap-y-2 gap-x-4 mb-4 lg:mb-6">
                      {corridor.landmarks.map((landmark, lIdx) => (
                        <li key={lIdx} className="flex items-start gap-1.5 sm:gap-2 text-[10px] sm:text-[12px] text-[#111714]">
                          <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-[#139D46] mt-0.5 shrink-0" />
                          <span className="leading-tight">{landmark}</span>
                        </li>
                      ))}
                    </ul>

                    <Link 
                      href={`/projects?corridor=${corridor.id}`}
                      className="w-max inline-flex items-center justify-center gap-1.5 sm:gap-2 text-[#139D46] font-sans font-semibold text-[11px] sm:text-[13px] hover:text-[#10853B] transition-colors mt-auto group/btn"
                    >
                      Explore Plots <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
