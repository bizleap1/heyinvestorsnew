'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, ShieldCheck } from '@/components/ui/icons';
import { PROJECTS } from '@/lib/projects-data';

export default function SelectedDevelopments() {
  const featuredProjects = PROJECTS.filter((p) => p.featured);

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#141414]/10">
          <div className="space-y-3 max-w-xl">
            <span className="editorial-label">Selected Portfolio</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[0.98] text-[#141414] uppercase">
              Plotted developments, <br />
              <span className="text-[#141414]/65">in detail.</span>
            </h2>
          </div>
          <div className="flex items-center gap-6">
            <Link
              href="/projects"
              className="btn-primary text-xs tracking-[0.12em]"
            >
              <span>View All 10 Projects</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#FAF8F5]" />
            </Link>
          </div>
        </div>

        {/* Editorial Project Showcase: Staggered Large Photography Showcase */}
        <div className="space-y-28 md:space-y-36 pt-16">
          {featuredProjects.map((project, index) => {
            const isEven = index % 2 === 0;
            const number = `0${index + 1}`;

            return (
              <article
                key={project.slug}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Frame */}
                <div
                  className={`lg:col-span-7 ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  <Link
                    href={`/projects/${project.slug}`}
                    className="block group relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#141414]/5 border border-[#141414]/10"
                  >
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      sizes="(max-width: 1024px) 100vw, 60vw"
                      className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#141414]/10 group-hover:bg-transparent transition-colors duration-500" />

                    {/* Status Badge */}
                    <div className="absolute top-6 left-6 z-10">
                      <span className="inline-block px-3.5 py-1.5 text-[10px] uppercase tracking-widest font-semibold bg-[#FAF8F5] text-[#141414] border border-[#141414]/15 shadow-xs">
                        {project.status === 'sold'
                          ? 'Sold Out'
                          : project.status === 'coming-soon'
                          ? 'Upcoming Phase'
                          : 'Available'}
                      </span>
                    </div>

                    {/* RERA pill */}
                    {project.rera && (
                      <div className="absolute bottom-6 right-6 z-10 hidden sm:flex items-center gap-1.5 px-3 py-1 text-[11px] bg-[#141414]/90 backdrop-blur-xs text-[#FAF8F5] border border-white/10">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#6E745F]" />
                        <span>MahaRERA: {project.rera}</span>
                      </div>
                    )}
                  </Link>
                </div>

                {/* Metadata & Narrative */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="flex items-center justify-between border-b border-[#141414]/10 pb-4">
                    <span className="font-mono text-xs uppercase tracking-widest text-[#6E745F]">
                      0{index + 1} — FEATURED DEVELOPMENT
                    </span>
                    <span className="editorial-label">
                      {project.area}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-display font-medium text-2xl sm:text-3xl lg:text-4xl text-[#141414] tracking-[-0.03em]">
                      <Link
                        href={`/projects/${project.slug}`}
                        className="hover:text-[#6E745F] transition-colors"
                      >
                        {project.name}
                      </Link>
                    </h3>
                    <p className="text-xs uppercase tracking-wider text-[#141414]/65">
                      {project.location}
                    </p>
                  </div>

                  <p className="text-sm text-[#141414]/65 leading-relaxed font-light">
                    {project.description}
                  </p>

                  {/* Factual Data Grid */}
                  <div className="grid grid-cols-2 gap-4 py-4 border-y border-[#141414]/10 text-xs">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#141414]/50 block">
                        Plot Configurations
                      </span>
                      <span className="font-medium text-[#141414] mt-0.5 block">
                        {project.plotSizes.join(' / ')} sq.ft.
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#141414]/50 block">
                        Approvals
                      </span>
                      <span className="font-medium text-[#141414] mt-0.5 block">
                        {project.approvals.join(', ') || 'RERA Registered'}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#141414]/50 block">
                        Rate Benchmark
                      </span>
                      <span className="font-medium text-[#141414] mt-0.5 block">
                        {project.pricePerSqft
                          ? `₹${project.pricePerSqft.toLocaleString('en-IN')} / sq.ft.`
                          : project.status === 'sold'
                          ? 'Sold Out'
                          : 'Price on Application'}
                      </span>
                    </div>

                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-[#141414]/50 block">
                        Bank Finance
                      </span>
                      <span className="font-medium text-[#141414] mt-0.5 block">
                        {project.loanEligible === true
                          ? 'Up to 90% Loan Approved'
                          : typeof project.loanEligible === 'string'
                          ? project.loanEligible
                          : 'Available'}
                      </span>
                    </div>
                  </div>

                  {/* CTA link */}
                  <div className="pt-2">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] font-medium text-[#141414] hover:text-[#6E745F] transition-colors group"
                    >
                      <span>View Development</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#6E745F]" />
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
