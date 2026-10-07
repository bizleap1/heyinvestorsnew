'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Compass } from '@/components/ui/icons';
import { CORRIDORS } from '@/lib/company-data';

export default function LocationStorySection() {
  const [selectedCorridor, setSelectedCorridor] = useState(0);

  const keyLandmarks = [
    { name: 'Dr. Babasaheb Ambedkar International Airport', corridor: 'Wardha Road' },
    { name: 'MIHAN Multi-Modal Cargo SEZ & IT Hub', corridor: 'Wardha Road' },
    { name: 'AIIMS Nagpur & IIM Nagpur', corridor: 'Wardha Road' },
    { name: 'Amravati Road (NH-53) & Wadi Chouk', corridor: 'Amravati Road' },
    { name: 'Outer Ring Road (ORR) Interchange', corridor: 'Wanadongri / Hingna' },
    { name: 'Hingna MIDC & YCCE Engineering Campus', corridor: 'Hingna' },
    { name: 'Godhani Railway Station & DP Road Node', corridor: 'Godhani' },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] text-[#141414] border-b border-[#141414]/10">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="max-w-2xl space-y-4 pb-16">
          <span className="editorial-label">Geography & Growth Corridors</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[0.98] text-[#141414] uppercase">
            Nagpur, <br />
            <span className="text-[#141414]/65">in perspective.</span>
          </h2>
          <p className="text-sm sm:text-base text-[#141414]/65 leading-relaxed font-light">
            Nagpur occupies the geometric center of India. Within the district, capital appreciation is concentrated along major transit corridors where arterial highways, Metro rail lines, and employment hubs converge.
          </p>
        </div>

        {/* Architectural Visual + Interactive Corridors */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Corridor Selectors */}
          <div className="lg:col-span-5 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.2em] font-medium text-[#141414]/65 block mb-2 font-mono">
              Primary Infrastructure Corridors
            </span>

            {CORRIDORS.map((corridor, idx) => {
              const active = selectedCorridor === idx;
              return (
                <div
                  key={corridor.name}
                  onClick={() => setSelectedCorridor(idx)}
                  className={`p-6 border transition-all duration-300 cursor-pointer ${
                    active
                      ? 'bg-[#141414]/[0.03] border-[#141414] shadow-xs'
                      : 'bg-transparent border-[#141414]/10 hover:border-[#141414]/30'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs text-[#141414]/65">
                      CORRIDOR 0{idx + 1}
                    </span>
                    {active && (
                      <span className="text-[10px] uppercase tracking-wider font-semibold text-[#6E745F]">
                        Selected Node
                      </span>
                    )}
                  </div>
                  <h3 className="font-display font-medium text-2xl text-[#141414] tracking-[-0.02em] mt-2">
                    {corridor.name}
                  </h3>
                  <p className="text-xs text-[#141414]/65 mt-2 leading-relaxed font-light">
                    {corridor.summary}
                  </p>
                  <div className="pt-3 mt-3 border-t border-[#141414]/10 flex items-center justify-between text-[11px] text-[#6E745F] font-medium">
                    <span>{corridor.relevance}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Column: Architectural Schematic Presentation */}
          <div className="lg:col-span-7 space-y-6">
            <div className="relative aspect-[4/3] w-full bg-[#FAF8F5] border border-[#141414]/15 p-6 md:p-8 flex flex-col justify-between overflow-hidden">
              {/* Subtle architectural grid pattern */}
              <div
                className="absolute inset-0 opacity-10 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle, #141414 1px, transparent 1px)',
                  backgroundSize: '24px 24px',
                }}
              />

              {/* Map Header / Orientation */}
              <div className="relative z-10 flex items-center justify-between border-b border-[#141414]/10 pb-4">
                <div className="flex items-center gap-2">
                  <Compass className="w-4 h-4 text-[#6E745F]" />
                  <span className="font-mono text-xs uppercase tracking-widest text-[#141414]">
                    Nagpur District Development Matrix
                  </span>
                </div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#141414]/50">
                  Cartographic Schematic
                </span>
              </div>

              {/* Schematic Map Visual Nodes */}
              <div className="relative z-10 my-auto py-8">
                <div className="relative w-full max-w-lg mx-auto aspect-[16/10] border border-dashed border-[#141414]/20 p-6 flex flex-col justify-center items-center text-center space-y-4">
                  {/* Central Node */}
                  <div className="p-3 bg-[#141414] text-[#FAF8F5] shadow-xs inline-block">
                    <span className="font-mono text-xs tracking-wider block">
                      ZERO MILE · CENTRAL NAGPUR
                    </span>
                  </div>

                  {/* Radiating Corridors */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full pt-4">
                    <div className="p-2.5 bg-[#FAF8F5] border border-[#141414]/15 text-left">
                      <span className="text-[9px] uppercase tracking-wider text-[#141414]/60 block font-mono">
                        South Axis
                      </span>
                      <strong className="text-xs text-[#141414] font-display font-semibold block tracking-tight">
                        Wardha Rd
                      </strong>
                      <span className="text-[10px] text-[#6E745F]">MIHAN / AIIMS</span>
                    </div>

                    <div className="p-2.5 bg-[#FAF8F5] border border-[#141414]/15 text-left">
                      <span className="text-[9px] uppercase tracking-wider text-[#141414]/60 block font-mono">
                        West Axis
                      </span>
                      <strong className="text-xs text-[#141414] font-display font-semibold block tracking-tight">
                        Amravati Rd
                      </strong>
                      <span className="text-[10px] text-[#6E745F]">Lava / Wadi</span>
                    </div>

                    <div className="p-2.5 bg-[#FAF8F5] border border-[#141414]/15 text-left">
                      <span className="text-[9px] uppercase tracking-wider text-[#141414]/60 block font-mono">
                        South-West
                      </span>
                      <strong className="text-xs text-[#141414] font-display font-semibold block tracking-tight">
                        Hingna Road
                      </strong>
                      <span className="text-[10px] text-[#6E745F]">MIDC / YCCE</span>
                    </div>

                    <div className="p-2.5 bg-[#FAF8F5] border border-[#141414]/15 text-left">
                      <span className="text-[9px] uppercase tracking-wider text-[#141414]/60 block font-mono">
                        North Axis
                      </span>
                      <strong className="text-xs text-[#141414] font-display font-semibold block tracking-tight">
                        Godhani Node
                      </strong>
                      <span className="text-[10px] text-[#6E745F]">DP Road Touched</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Footer: Verified Key Infrastructure */}
              <div className="relative z-10 border-t border-[#141414]/10 pt-4">
                <span className="text-[10px] uppercase tracking-wider text-[#141414]/60 block mb-2 font-mono">
                  Verified Regional Anchors
                </span>
                <div className="flex flex-wrap gap-2">
                  {keyLandmarks.map((lm) => (
                    <span
                      key={lm.name}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#FAF8F5] border border-[#141414]/15 text-[11px] text-[#141414]"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#6E745F]" />
                      {lm.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between text-xs text-[#141414]/65">
              <span>Hey Investor projects positioned along verified municipal development axes.</span>
              <Link href="/projects" className="underline hover:text-[#141414]">
                Filter by Corridor →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
