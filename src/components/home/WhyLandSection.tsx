import React from 'react';

export default function WhyLandSection() {
  const pillars = [
    {
      number: '01',
      title: 'LOCATION',
      subtitle: 'Corridors with structural capital allocation',
      description:
        'We select sites strictly along Nagpur’s high-growth axes—Wardha Road, Amravati Road, Hingna, and Godhani. These zones benefit from long-term government infrastructure, institutional presence (AIIMS, IIM, MIHAN), and multi-lane DP roads.',
      datapoint: '4 Primary Corridors',
    },
    {
      number: '02',
      title: 'APPROVALS',
      subtitle: 'NMRDA sanctioned & Release Letter (RL) certainty',
      description:
        'Every project promoted by Hey Investor carries verified planning authority approvals (NMRDA / NIT) and official Release Letters (RL). Unsanctioned or ambiguous parcels are strictly excluded to preserve client capital.',
      datapoint: '100% Clear Sanctions',
    },
    {
      number: '03',
      title: 'CONNECTIVITY',
      subtitle: 'Immediate arterial and highway integration',
      description:
        'All layouts feature wide cement roads (up to 260 ft road-touch frontage for commercial developments), street lighting, storm water drainage, and rapid connectivity to Nagpur Metro stations and the Outer Ring Road.',
      datapoint: 'Direct Highway Touched',
    },
    {
      number: '04',
      title: 'OWNERSHIP & ASSISTANCE',
      subtitle: 'Freehold title with institutional bank finance',
      description:
        'Plots offer absolute individual freehold ownership with complete legal paperwork. We provide direct bank financing facilitation up to 80%–90% through leading nationalized and private banking partners.',
      datapoint: 'Up to 90% Loan Facility',
    },
  ];

  return (
    <section id="why-land" className="py-12 md:py-16 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="pb-20 border-b border-[#141414]/10">
          <span className="editorial-label">Investment Thesis</span>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium tracking-[-0.03em] leading-[0.96] text-[#141414] uppercase mt-3">
            Why Land. <br />
            <span className="text-[#141414]/65">Why Here.</span>
          </h2>
        </div>

        {/* Editorial Rows (Lines + Large Typography + Whitespace, NO cartoon icons) */}
        <div className="divide-y divide-[#141414]/10">
          {pillars.map((pillar) => (
            <div
              key={pillar.number}
              className="py-12 md:py-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-baseline group"
            >
              {/* Number */}
              <div className="lg:col-span-2">
                <span className="font-mono text-sm tracking-widest text-[#6E745F] block">
                  {pillar.number}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-[#141414]/60 mt-1 block">
                  {pillar.datapoint}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div className="lg:col-span-4 space-y-1">
                <h3 className="font-display font-medium text-2xl sm:text-3xl text-[#141414] tracking-[-0.02em] group-hover:text-[#6E745F] transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-xs uppercase tracking-wider text-[#141414]/65">
                  {pillar.subtitle}
                </p>
              </div>

              {/* Narrative Description */}
              <div className="lg:col-span-6">
                <p className="text-sm md:text-base text-[#141414]/65 leading-relaxed font-light">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
