'use client';

import React from 'react';
import Image from 'next/image';
import { ShieldCheck, Landmark, MapPin, User } from 'lucide-react';
import FadeIn from '@/components/ui/FadeIn';
import TextReveal from '@/components/ui/TextReveal';

const FEATURES = [
  {
    icon: ShieldCheck,
    title: 'Legally Secure',
    copy: 'All projects are NMRDA and RL approved, with clear titles and verified documentation.',
    image: '/images/generated/legally_secure.jpg'
  },
  {
    icon: Landmark,
    title: '90% Financing',
    copy: 'Easy home loan options from leading banks, with up to 90% financing available.',
    image: '/images/generated/financing.jpg'
  },
  {
    icon: MapPin,
    title: 'Prime Locations',
    copy: 'Strategically located in Nagpur’s fastest growing corridors with excellent connectivity.',
    image: '/images/generated/prime_location.jpg'
  },
  {
    icon: User,
    title: 'Expert Guidance',
    copy: 'End-to-end support from site visit to registration, with a dedicated team of experts.',
    image: '/images/generated/expert_guidance.jpg'
  }
];
export default function WhyHeyInvestor() {
  return (
    <section className="w-full bg-[#FAF9F6] pt-12 lg:pt-16 pb-12 lg:pb-16 overflow-hidden">
      <div className="max-w-[1360px] mx-auto px-6">
        
        {/* Top Header Row */}
        <FadeIn direction="up">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center mb-4">
              <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
                A PARTNER YOU CAN TRUST
              </span>
            </div>
            <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
              <span className="text-[#111714] font-medium">Why </span>
              <span className="text-[#139D46] font-medium">Hey Investor</span>
            </h2>
            <TextReveal 
              text="More than just land. We offer confidence, clarity and long-term value — backed by expertise and a deep understanding of Nagpur’s real-estate growth."
              className="font-sans text-[15px] lg:text-[16px] text-[#56605A] leading-relaxed"
              delay={0.2}
            />
          </div>
        </FadeIn>

        {/* 4 Feature Cards with Images */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <FadeIn key={idx} direction="up" delay={idx * 0.1} className="h-full">
                <div 
                  className="h-full bg-white rounded-[16px] border border-[#E7E3DA] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col group hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)] transition-shadow duration-300"
                >
                  {/* Image Section */}
                  <div className="relative w-full h-[120px] sm:h-[180px]">
                    <Image
                      src={feature.image}
                      alt={feature.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Subtle Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Content Section with Overlapping Icon */}
                  <div className="relative flex-grow flex flex-col items-center text-center px-3 sm:px-6 pb-6 sm:pb-8 pt-8 sm:pt-10">
                    {/* Overlapping Icon */}
                    <div className="absolute -top-5 sm:-top-7 left-1/2 -translate-x-1/2 w-10 h-10 sm:w-14 sm:h-14 bg-white rounded-full flex items-center justify-center shadow-md border border-[#E7E3DA]">
                      <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#139D46]" />
                    </div>

                    <h3 className="font-display text-[16px] sm:text-[22px] text-[#111714] leading-tight mb-2 sm:mb-3 mt-1 sm:mt-0">
                      {feature.title}
                    </h3>
                    <p className="font-sans text-[12px] sm:text-[14px] text-[#56605A] leading-relaxed">
                      {feature.copy}
                    </p>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
