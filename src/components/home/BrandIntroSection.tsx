import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/icons';

export default function BrandIntroSection() {
  return (
    <section id="brand-intro" className="py-12 md:py-16 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Left Column: Asymmetrical Editorial Typography */}
          <div className="lg:col-span-6 space-y-8">
            <div className="space-y-3">
              <span className="editorial-label">Hey Investor</span>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[1.0] text-[#141414] uppercase">
                Investment, <br />
                <span className="text-[#141414]/65">considered.</span>
              </h2>
            </div>

            <div className="space-y-6 text-sm sm:text-base text-[#141414]/65 leading-relaxed max-w-xl font-light">
              <p>
                Hey Investor Pvt. Ltd. is a Nagpur-based real estate firm focused exclusively on sanctioned residential and commercial plots across Vidarbha’s primary development corridors. Every layout promoted carries verified NMRDA or RL (Release Letter) approvals—ensuring legal clarity and title certainty from day one.
              </p>
              <p>
                Founded by industry professionals with over 15 years of regional experience, we combine granular land knowledge with end-to-end support: from layout selection and documentation verification to institutional bank loan facilitation up to 80%–90%.
              </p>
            </div>

            {/* Factual metric pillars */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 pt-4 border-t border-[#141414]/10">
              <div>
                <span className="block font-display font-semibold text-3xl md:text-4xl text-[#141414] tracking-[-0.03em]">100%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#141414]/65 mt-1 block">
                  Sanctioned Layouts
                </span>
              </div>
              <div>
                <span className="block font-display font-semibold text-3xl md:text-4xl text-[#141414] tracking-[-0.03em]">15+ Yrs</span>
                <span className="text-[11px] uppercase tracking-wider text-[#141414]/65 mt-1 block">
                  Regional Grounding
                </span>
              </div>
              <div>
                <span className="block font-display font-semibold text-3xl md:text-4xl text-[#141414] tracking-[-0.03em]">90%</span>
                <span className="text-[11px] uppercase tracking-wider text-[#141414]/65 mt-1 block">
                  Loan Facilitation
                </span>
              </div>
            </div>

            <div className="pt-2">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#141414] hover:text-[#6E745F] transition-colors group"
              >
                <span>Discover our regional thesis</span>
                <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#6E745F]" />
              </Link>
            </div>
          </div>

          {/* Right Column: Editorial Asymmetric Site Photography */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] w-full overflow-hidden bg-[#141414]/5 border border-[#141414]/10">
              <Image
                src="/11.png"
                alt="Plotted enclave development by Hey Investor in Nagpur"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

              {/* Discreet caption pill */}
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#FAF8F5]/90 backdrop-blur-xs border border-[#141414]/10 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-[#141414]/65 block">
                    Featured Layout
                  </span>
                  <span className="font-display font-medium text-lg text-[#141414] leading-tight block tracking-tight">
                    Saraswati Nagari 10 · Hingna
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] uppercase tracking-wider text-[#6E745F] font-semibold block">
                    NMRDA & RL
                  </span>
                  <span className="text-xs text-[#141414]/65">
                    RERA: P50500081064
                  </span>
                </div>
              </div>
            </div>

            {/* Subtle decorative offset border */}
            <div className="hidden sm:block absolute -bottom-6 -right-6 -z-10 w-full h-full border border-[#141414]/10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
