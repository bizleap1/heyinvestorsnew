'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { ArrowUpRight, ShieldCheck, MapPin } from 'lucide-react';
import { PROJECTS } from '@/lib/projects-data';

export default function ProjectsClient() {
  const searchParams = useSearchParams();
  const initialCorridor = searchParams.get('corridor') || 'all';

  const [selectedCorridor, setSelectedCorridor] = useState<string>(initialCorridor);
  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedType, setSelectedType] = useState<string>('all');

  useEffect(() => {
    const corridor = searchParams.get('corridor');
    if (corridor) {
      setSelectedCorridor(corridor);
    }
  }, [searchParams]);

  const filteredProjects = useMemo(() => {
    return PROJECTS.filter((project) => {
      // Filter Corridor / Area
      if (selectedCorridor !== 'all') {
        const areaMatch = project.area.toLowerCase().includes(selectedCorridor.toLowerCase());
        const locMatch = project.location.toLowerCase().includes(selectedCorridor.toLowerCase());
        if (!areaMatch && !locMatch) return false;
      }
      // Filter Status
      if (selectedStatus !== 'all' && project.status !== selectedStatus) {
        return false;
      }
      // Filter Type
      if (selectedType !== 'all' && project.type !== selectedType) {
        return false;
      }
      return true;
    });
  }, [selectedCorridor, selectedStatus, selectedType]);

  return (
    <div className="bg-[#FAF9F6] text-[#111714] min-h-screen overflow-x-hidden w-full relative">
      {/* Clean Theme Header Section */}
      <div className="w-full pt-32 pb-8 md:pt-40 md:pb-12">
        <div className="max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center">
          <div className="flex items-center justify-center mb-4">
            <span className="text-[#139D46] text-[11px] md:text-[12px] font-bold font-sans uppercase tracking-[0.16em]">
              PORTFOLIO
            </span>
          </div>
          <h1 className="font-display text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-[1.1] sm:leading-[1.1] tracking-tight mb-4 sm:mb-6 max-w-4xl break-words">
            <span className="text-[#111714] font-medium block sm:inline">Premium Plotted </span>
            <span className="text-[#139D46] font-medium block sm:inline">Developments <br className="hidden sm:block lg:hidden" />in Nagpur</span>
          </h1>
          <p className="font-sans text-[15px] lg:text-[16px] text-[#56605A] leading-relaxed max-w-2xl">
            Every development promoted by Hey Investor is pre-vetted for planning approvals (NMRDA / RL), clean titles, and verified physical road infrastructure. Explore parcels by corridor and land classification.
          </p>
        </div>
      </div>

      <div className="max-w-[1280px] mx-auto px-6 pb-24 md:pb-36 w-full">

        {/* Minimal Quiet Luxury Filter Bar */}
        <div className="py-6 sm:py-8 border-b border-[#E7E3DA] flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 w-full">
          {/* Corridor Filter Tabs */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0 scrollbar-none w-full md:w-auto">
            <span className="text-[11px] font-bold uppercase tracking-wider text-[#56605A] mr-2 hidden sm:inline font-sans">
              Corridor:
            </span>
            {[
              { id: 'all', label: 'All' },
              { id: 'Wardha', label: 'Wardha Road' },
              { id: 'Amravati', label: 'Amravati Road' },
              { id: 'Hingna', label: 'Hingna' },
              { id: 'Godhani', label: 'Godhani' },
            ].map((tab) => {
              const active = selectedCorridor === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setSelectedCorridor(tab.id)}
                  className={`px-4 py-2 text-[12px] uppercase tracking-wider font-semibold font-sans rounded-[6px] transition-all whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#139D46] text-white'
                      : 'bg-white text-[#56605A] border border-[#E7E3DA] hover:text-[#111714] hover:bg-[#FAF9F6]'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Secondary Quick Selects */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 text-xs w-full md:w-auto">
            <select
              value={selectedStatus}
              onChange={(e) => setSelectedStatus(e.target.value)}
              className="bg-white border border-[#E7E3DA] rounded-[6px] px-3 py-2 text-[12px] font-sans font-semibold text-[#111714] focus:outline-none uppercase tracking-wider cursor-pointer shadow-sm w-full sm:w-auto"
            >
              <option value="all">All Statuses</option>
              <option value="available">Available Now</option>
              <option value="coming-soon">Upcoming Phase</option>
              <option value="sold">Sold Out</option>
            </select>

            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="bg-white border border-[#E7E3DA] rounded-[6px] px-3 py-2 text-[12px] font-sans font-semibold text-[#111714] focus:outline-none uppercase tracking-wider cursor-pointer shadow-sm w-full sm:w-auto"
            >
              <option value="all">All Types</option>
              <option value="residential">Residential Only</option>
              <option value="mixed">Commercial / Mixed</option>
            </select>
          </div>
        </div>

        {/* Results Counter */}
        <div className="pt-6 pb-2 flex items-center justify-between text-[13px] font-sans text-[#56605A]">
          <span>Showing <strong className="text-[#111714]">{filteredProjects.length}</strong> of <strong className="text-[#111714]">{PROJECTS.length}</strong> verified developments</span>
          {(selectedCorridor !== 'all' || selectedStatus !== 'all' || selectedType !== 'all') && (
            <button
              onClick={() => {
                setSelectedCorridor('all');
                setSelectedStatus('all');
                setSelectedType('all');
              }}
              className="underline hover:text-[#111714] font-medium"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Editorial Portfolio Tiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 pt-6">
          {filteredProjects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col bg-white border border-[#E7E3DA] rounded-[12px] overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.02)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {/* Large Landscape Image Frame */}
              <Link
                href={`/projects/${project.slug}`}
                className="relative h-[320px] sm:h-[360px] w-full overflow-hidden bg-[#FAF9F6] block border-b border-[#E7E3DA] p-4 flex items-center justify-center"
              >
                <div className="relative w-full h-full">
                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Status Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className={`px-2.5 py-1 text-[9px] uppercase tracking-wider font-bold rounded-[4px] shadow-sm ${
                    project.status === 'sold'
                      ? 'bg-[#111714] text-white'
                      : project.status === 'coming-soon'
                      ? 'bg-white text-[#111714]'
                      : 'bg-[#139D46] text-white'
                  }`}>
                    {project.status === 'sold'
                      ? 'Sold Out'
                      : project.status === 'coming-soon'
                      ? 'Coming Soon'
                      : 'Available'}
                  </span>
                </div>

                {project.rera && (
                  <div className="absolute top-4 right-4 z-10 hidden sm:flex items-center gap-1.5 px-2.5 py-1 text-[10px] bg-white/95 backdrop-blur-sm text-[#111714] rounded-[4px] font-bold uppercase tracking-wider shadow-sm">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#139D46]" strokeWidth={2.5} />
                    <span>RERA</span>
                  </div>
                )}
              </Link>

              {/* Card Body */}
              <div className="p-6 space-y-4 flex flex-col flex-grow">
                <div className="flex justify-between items-start gap-4">
                  <h2 className="font-display text-[22px] lg:text-[24px] text-[#111714] leading-tight">
                    <Link
                      href={`/projects/${project.slug}`}
                      className="hover:text-[#139D46] transition-colors line-clamp-1"
                    >
                      {project.name}
                    </Link>
                  </h2>
                  <span className="text-[12px] font-bold bg-[#FAF9F6] text-[#139D46] px-2 py-1 rounded-[4px] whitespace-nowrap border border-[#E7E3DA]">
                    {project.pricePerSqft
                      ? `₹${project.pricePerSqft.toLocaleString('en-IN')}`
                      : 'Sold Out'}
                  </span>
                </div>

                <p className="text-[12px] font-sans uppercase tracking-wider text-[#56605A] flex items-center gap-1.5 font-semibold">
                  <MapPin className="w-3.5 h-3.5 text-[#139D46]" strokeWidth={2.5} />
                  <span className="line-clamp-1">{project.location}</span>
                </p>

                <p className="text-[13px] md:text-[14px] text-[#56605A] line-clamp-2 leading-relaxed font-sans mt-2 min-h-[42px]">
                  {project.description}
                </p>

                {/* Specs Grid */}
                <div className="pt-4 mt-auto border-t border-[#E7E3DA] grid grid-cols-2 gap-4">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#56605A] block font-sans mb-1">
                      Plot Sizes
                    </span>
                    <span className="text-[13px] font-medium text-[#111714] block">
                      {project.plotSizes.join(' / ')}
                    </span>
                  </div>

                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#56605A] block font-sans mb-1">
                      Approvals
                    </span>
                    <span className="text-[13px] font-medium text-[#111714] block line-clamp-1">
                      {project.approvals.join(', ') || 'RERA'}
                    </span>
                  </div>
                </div>

                {/* View link */}
                <div className="pt-5 mt-2">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="w-full flex items-center justify-center gap-2 py-2.5 text-[#139D46] border border-[#139D46] rounded-[8px] font-sans font-semibold text-[13px] hover:bg-[#139D46] hover:text-white transition-colors group/link"
                  >
                    <span>View Property</span>
                    <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
