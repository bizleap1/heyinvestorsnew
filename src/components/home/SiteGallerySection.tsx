import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from '@/components/ui/icons';

export default function SiteGallerySection() {
  const galleryItems = [
    {
      src: '/PROPERTY/infinitypool.png',
      title: 'Nagpur Marina · Infinity Pool & Villa Land',
      category: 'Lifestyle Plotted Asset',
      aspect: 'col-span-12 lg:col-span-8 aspect-[16/9]',
    },
    {
      src: '/11.png',
      title: 'Saraswati Nagari 10 · Hingna Corridor',
      category: 'Internal Infrastructure & Amenities',
      aspect: 'col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/3] lg:aspect-auto',
    },
    {
      src: '/PROPERTY/sarasvati8.png',
      title: 'Saraswati Nagari 8 · Amravati Road',
      category: 'Cement Roads & Layout Sanction',
      aspect: 'col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/3]',
    },
    {
      src: '/PROPERTY/kamlagreens.png',
      title: 'Kamla Greens · Godhani',
      category: 'DP Road Touched Plotted Layout',
      aspect: 'col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/3]',
    },
    {
      src: '/PROPERTY/chaware.png',
      title: 'Chawre Colony · Wanadongri',
      category: 'Highway & Logistics Integration',
      aspect: 'col-span-12 sm:col-span-6 lg:col-span-4 aspect-[4/3]',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-16 border-b border-[#141414]/10">
          <div className="space-y-3">
            <span className="editorial-label">Ground-Level Reality</span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-medium tracking-[-0.03em] leading-[0.98] text-[#141414] uppercase">
              Site progress & <br />
              <span className="text-[#141414]/65">tangible land.</span>
            </h2>
          </div>
          <div>
            <p className="text-xs text-[#141414]/65 max-w-xs leading-relaxed uppercase tracking-wider font-mono">
              Unfiltered site photography from Hey Investor development enclaves across Nagpur.
            </p>
          </div>
        </div>

        {/* Editorial Asymmetric Grid */}
        <div className="grid grid-cols-12 gap-6 pt-12">
          {galleryItems.map((item) => (
            <div
              key={item.title}
              className={`relative overflow-hidden bg-[#141414]/5 border border-[#141414]/10 group ${item.aspect}`}
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-1000 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

              <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between">
                <div>
                  <span className="text-[10px] uppercase font-mono tracking-wider text-white/70 block">
                    {item.category}
                  </span>
                  <h3 className="font-display font-medium text-lg md:text-xl text-white tracking-[-0.01em] mt-0.5">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="pt-10 flex justify-between items-center text-xs text-[#141414]/65 border-t border-[#141414]/10 mt-12">
          <span>All visual records represent authentic site development on location.</span>
          <Link
            href="/contact"
            className="hover:text-[#6E745F] inline-flex items-center gap-1 font-medium text-[#141414] transition-colors"
          >
            <span>Request Full Layout Dossier</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#6E745F]" />
          </Link>
        </div>
      </div>
    </section>
  );
}
