'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ArrowLeft,
  ShieldCheck,
  CheckCircle2,
} from '@/components/ui/icons';
import { Project } from '@/types';
import SiteVisitModal from '@/components/forms/SiteVisitModal';
import { COMPANY_INFO } from '@/lib/company-data';

interface ProjectDetailClientProps {
  project: Project;
}

export default function ProjectDetailClient({ project }: ProjectDetailClientProps) {
  const [siteVisitOpen, setSiteVisitOpen] = useState(false);
  const [selectedGalleryImg, setSelectedGalleryImg] = useState<string | null>(null);

  const images = project.gallery && project.gallery.length > 0 ? project.gallery : [project.image];

  return (
    <div className="bg-[#FAF8F5] text-[#141414]">
      {/* 01 Hero Header */}
      <section className="relative min-h-[70vh] lg:min-h-[85vh] w-full flex flex-col justify-between pt-32 pb-12 overflow-hidden bg-[#141414] text-[#FAF8F5]">
        {/* Real project imagery */}
        <div className="absolute inset-0 z-0">
          <Image
            src={project.image}
            alt={project.name}
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/60 to-[#141414]/80" />
        </div>

        {/* Top Breadcrumb Nav */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 w-full">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#FAF8F5]/70 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4 text-[#6E745F]" />
            <span>Back to All Developments</span>
          </Link>
        </div>

        {/* Hero Narrative */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 w-full my-auto py-8">
          <div className="max-w-4xl space-y-6">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-semibold bg-[#FAF8F5] text-[#141414] border border-[#141414]/15 shadow-xs">
                {project.status === 'sold'
                  ? 'Sold Out'
                  : project.status === 'coming-soon'
                  ? 'Upcoming Phase'
                  : 'Available For Registry'}
              </span>

              <span className="px-3 py-1 text-[10px] uppercase tracking-widest font-medium bg-white/10 text-white border border-white/15">
                {project.area}
              </span>

              {project.rera && (
                <span className="inline-flex items-center gap-1.5 px-3 py-1 text-[10px] uppercase tracking-widest font-medium bg-black/60 text-white/90 border border-white/15">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#6E745F]" />
                  MahaRERA: {project.rera}
                </span>
              )}
            </div>

            <h1 className="font-display text-4xl sm:text-6xl md:text-7xl font-semibold tracking-[-0.03em] leading-[0.96] text-[#FAF8F5] uppercase">
              {project.name}
            </h1>

            <p className="text-base sm:text-lg text-[#FAF8F5]/80 max-w-2xl font-light leading-relaxed">
              {project.location} · {project.approvals.join(', ') || 'RERA Registered'}
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={() => setSiteVisitOpen(true)}
                className="btn-primary-dark text-xs px-8 py-3.5 tracking-[0.12em]"
              >
                Schedule Site Visit
              </button>

              <a
                href={`${COMPANY_INFO.whatsappUrl}?text=${encodeURIComponent(`Hello, I would like to inquire about ${project.name} in ${project.location}.`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-paper text-xs px-8 py-3.5 tracking-[0.12em]"
              >
                Inquire on WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Hero Bottom Spec Bar */}
        <div className="relative z-10 max-w-[1520px] mx-auto px-6 md:px-12 w-full pt-8 border-t border-[#FAF8F5]/10 grid grid-cols-2 sm:grid-cols-4 gap-6 text-xs">
          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/60 block">
              Benchmark Rate
            </span>
            <span className="text-sm sm:text-base font-display font-medium text-white mt-1 block">
              {project.pricePerSqft
                ? `₹${project.pricePerSqft.toLocaleString('en-IN')} / sq.ft.`
                : project.status === 'sold'
                ? 'Sold Out'
                : 'Price on Application'}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/60 block">
              Plot Configurations
            </span>
            <span className="text-sm sm:text-base font-display font-medium text-white mt-1 block">
              {project.plotSizes.join(' / ')} sq.ft.
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/60 block">
              Approvals
            </span>
            <span className="text-sm sm:text-base font-display font-medium text-white mt-1 block">
              {project.approvals.join(' & ') || 'Approved'}
            </span>
          </div>

          <div>
            <span className="text-[10px] uppercase font-mono tracking-wider text-white/60 block">
              Financing
            </span>
            <span className="text-sm sm:text-base font-display font-medium text-white mt-1 block">
              {project.loanEligible === true
                ? 'Up to 90% Loan'
                : typeof project.loanEligible === 'string'
                ? project.loanEligible
                : 'Direct Consultation'}
            </span>
          </div>
        </div>
      </section>

      {/* 02 Project Overview & Long Description */}
      <section className="py-20 md:py-32 max-w-[1520px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-4 space-y-4">
            <span className="editorial-label">Overview & Thesis</span>
            <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#141414] uppercase">
              Strategic Plotted <br />
              <span className="text-[#141414]/65">Development.</span>
            </h2>
            <div className="pt-4 border-t border-[#141414]/10 space-y-3 text-xs text-[#141414]/65">
              <div className="flex justify-between py-1 border-b border-[#141414]/5">
                <span>Promoted By</span>
                <span className="font-medium text-[#141414]">Hey Investor Pvt. Ltd.</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#141414]/5">
                <span>RERA Registration</span>
                <span className="font-medium text-[#141414]">{project.rera || COMPANY_INFO.reraNumber}</span>
              </div>
              <div className="flex justify-between py-1 border-b border-[#141414]/5">
                <span>Classification</span>
                <span className="font-medium text-[#141414] capitalize">{project.type} Plotted Land</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-8 space-y-6 text-sm md:text-base text-[#141414]/65 font-light leading-relaxed">
            <p className="text-lg md:text-xl font-display font-medium text-[#141414] leading-snug tracking-tight">
              {project.description}
            </p>
            {project.longDescription && (
              <p>
                {project.longDescription}
              </p>
            )}
            <p>
              Hey Investor Pvt. Ltd. conducts verified due diligence on all statutory approvals. Purchasers receive complete documentation files including sanctioned layout plans, 7/12 land extract records, and bank NOC guidelines before final execution.
            </p>
          </div>
        </div>
      </section>

      {/* 03 Nearby Landmarks & Distance Matrix */}
      {project.additionalDetails && project.additionalDetails.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAF8F5] border-y border-[#141414]/10">
          <div className="max-w-[1520px] mx-auto px-6 md:px-12">
            <div className="max-w-2xl space-y-3 pb-12">
              <span className="editorial-label">Vicinity & Connectivity</span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#141414] uppercase">
                Proximity to key anchors.
              </h2>
              <p className="text-xs text-[#141414]/65 uppercase tracking-wider font-mono">
                Verified ground distances from site entrance.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {project.additionalDetails.map((item) => (
                <div
                  key={item.label}
                  className="p-5 bg-white border border-[#141414]/15 space-y-2 shadow-2xs"
                >
                  <span className="text-[10px] uppercase font-mono tracking-wider text-[#141414]/60 block">
                    {item.label}
                  </span>
                  <strong className="font-display text-xl sm:text-2xl font-semibold text-[#141414] block">
                    {item.value}
                  </strong>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 04 Amenities & On-Site Civil Infrastructure */}
      {project.features && project.features.length > 0 && (
        <section className="py-20 md:py-32 max-w-[1520px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4 space-y-4">
              <span className="editorial-label">Site Development</span>
              <h2 className="font-display text-2xl sm:text-3xl font-medium tracking-tight text-[#141414] uppercase">
                Infrastructure & <br />
                <span className="text-[#141414]/65">amenity standards.</span>
              </h2>
              <p className="text-xs text-[#141414]/65 font-light leading-relaxed">
                All physical development conforms to municipal engineering guidelines, ensuring durability and zero post-handover utility disruption.
              </p>
            </div>

            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="p-4 bg-white border border-[#141414]/15 flex items-center gap-3 shadow-2xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#6E745F] shrink-0" />
                  <span className="text-xs uppercase tracking-wider font-medium text-[#141414] font-mono">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 05 Real Site Gallery */}
      {images.length > 0 && (
        <section className="py-16 md:py-24 bg-[#FAF8F5] border-t border-[#141414]/10">
          <div className="max-w-[1520px] mx-auto px-6 md:px-12 space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <span className="editorial-label">Visual Documentation</span>
                <h2 className="font-display font-medium text-2xl sm:text-3xl text-[#141414] tracking-[-0.03em] uppercase">
                  On-Location Gallery
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {images.map((imgUrl, i) => (
                <div
                  key={imgUrl + i}
                  className="relative aspect-[4/3] w-full overflow-hidden bg-[#141414]/5 group cursor-pointer border border-[#141414]/10"
                  onClick={() => setSelectedGalleryImg(imgUrl)}
                >
                  <Image
                    src={imgUrl}
                    alt={`${project.name} site image ${i + 1}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="px-3 py-1.5 bg-[#FAF8F5] text-[#141414] text-[10px] uppercase font-mono tracking-wider shadow-xs">
                      Expand Image
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Lightbox */}
      {selectedGalleryImg && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#141414]/90 backdrop-blur-md"
          onClick={() => setSelectedGalleryImg(null)}
        >
          <div className="relative max-w-5xl max-h-[85vh] w-full h-full">
            <Image
              src={selectedGalleryImg}
              alt="Enlarged gallery view"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}

      {/* 06 Private Inspection CTA */}
      <section className="py-20 md:py-28 bg-[#141414] text-[#FAF8F5]">
        <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
          <span className="editorial-label text-[#FAF8F5]/50">Site Inspection</span>
          <h2 className="font-display font-semibold text-3xl sm:text-4xl md:text-5xl text-[#FAF8F5] tracking-[-0.03em] uppercase">
            Inspect {project.name} in person.
          </h2>
          <p className="text-xs sm:text-sm text-[#FAF8F5]/70 max-w-xl mx-auto leading-relaxed font-light">
            We provide coordinated site transport, legal dossier access, and plot demarcation inspections for serious investors and families.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => setSiteVisitOpen(true)}
              className="btn-primary-dark text-xs px-8 py-3.5 tracking-[0.12em]"
            >
              Book Private Inspection
            </button>
            <a
              href={`tel:${COMPANY_INFO.phoneRaw}`}
              className="btn-outline-paper text-xs px-8 py-3.5 tracking-[0.12em]"
            >
              Call {COMPANY_INFO.phone}
            </a>
          </div>
        </div>
      </section>

      {/* Site Visit Modal */}
      <SiteVisitModal
        isOpen={siteVisitOpen}
        onClose={() => setSiteVisitOpen(false)}
        defaultProjectSlug={project.slug}
      />
    </div>
  );
}
