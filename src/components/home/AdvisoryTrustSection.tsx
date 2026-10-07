import React from 'react';
import Image from 'next/image';
import { TEAM_MEMBERS } from '@/lib/company-data';

export default function AdvisoryTrustSection() {
  return (
    <section className="pt-12 pb-12 md:pt-16 md:pb-16 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
              LEADERSHIP & GROUNDING
            </span>
          </div>
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] leading-[1.1] tracking-tight mb-6">
            <span className="text-[#111714] font-medium">Local Expertise, </span>
            <span className="text-[#139D46] font-medium">Real Results.</span>
          </h2>
          <p className="font-sans text-[15px] lg:text-[16px] text-[#56605A] leading-relaxed">
            Founded by industry veterans with deep roots across Nagpur and Vidarbha. We handle the entire investor journey with institutional integrity.
          </p>
        </div>

        {/* 3 Real Team Members with Real Photography */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-12 lg:gap-16 pt-8 md:pt-16">
          {TEAM_MEMBERS.map((member, index) => (
            <div 
              key={member.name} 
              className={`bg-white rounded-[20px] p-4 sm:p-6 border border-[#E7E3DA] hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] hover:-translate-y-2 transition-all duration-500 group flex flex-col ${index === 0 ? 'col-span-2 md:col-span-1' : 'col-span-1'}`}
            >
              <div className="relative w-full aspect-square rounded-[12px] sm:rounded-[16px] overflow-hidden mb-4 sm:mb-6 bg-[#F4F9F6]">
                <Image 
                  src={member.image} 
                  alt={member.name} 
                  fill 
                  className="object-cover object-top transition-all duration-700 scale-100 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="text-center flex-grow flex flex-col items-center">
                <span className="text-[#139D46] text-[9px] sm:text-[11px] font-bold uppercase tracking-widest bg-[#139D46]/10 px-2 sm:px-3 py-1 rounded-full mb-2 sm:mb-3 inline-block">
                  {member.role}
                </span>
                <h3 className="font-display text-[16px] sm:text-[24px] text-[#111714] mb-1 sm:mb-2">{member.name}</h3>
                <p className="font-sans text-[11px] sm:text-[14px] text-[#56605A] leading-relaxed line-clamp-3">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
