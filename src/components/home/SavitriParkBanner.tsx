'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Trees, Map, ShieldCheck } from 'lucide-react';

export default function SavitriParkBanner() {
  return (
    <section className="w-full bg-[#FAF9F6] pb-12 lg:pb-16 overflow-hidden px-6">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
          width: max-content;
        }
      `}} />
      <div className="max-w-[1280px] mx-auto">
        
          {/* Full Banner Image with Marquee */}
          <div className="w-full relative bg-white rounded-[12px] border border-[#E7E3DA] shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col">
            <Image
              src="/savitri.png"
              alt="Savitri Park Banner"
              width={1920}
              height={800}
              className="w-full h-auto object-contain"
              priority
            />
            
            {/* Continuously Rotating Strip (Marquee) */}
            <div className="w-full bg-[#111714] py-4 md:py-5 overflow-hidden flex whitespace-nowrap">
              <div className="flex animate-marquee items-center text-[#139D46] font-display uppercase tracking-[0.2em] text-base md:text-lg">
                {[...Array(12)].map((_, i) => (
                  <React.Fragment key={i}>
                    <span className="mx-8 md:mx-12 font-bold mt-1 text-[#FAF9F6]">COMING SOON</span>
                    <span className="mx-4 md:mx-6 text-[10px] opacity-40">✦</span>
                    <div className="mx-8 md:mx-12 h-[36px] md:h-[48px] relative w-[140px] md:w-[180px]">
                       <Image src="/logo (1).png" alt="Hey Investor" fill className="object-contain brightness-0 invert opacity-90" />
                    </div>
                    <span className="mx-4 md:mx-6 text-[10px] opacity-40">✦</span>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
      </div>
    </section>
  );
}
