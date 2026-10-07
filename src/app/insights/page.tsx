import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import { ArrowUpRight } from '@/components/ui/icons';
import { INSIGHT_ARTICLES } from '@/lib/insights-data';

export const metadata: Metadata = {
  title: 'Investment Insights & Market Guides | Hey Investor Nagpur',
  description:
    'Research, regulatory analysis, and corridor intelligence for land buyers and plotted real estate investors in Nagpur and Vidarbha.',
};

export default function InsightsPage() {
  const categories = [
    'All Insights',
    'Market Trends',
    'Due Diligence',
    'Corridor Analysis',
    'MahaRERA',
  ];

  return (
    <div className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Page Header */}
        <div className="max-w-4xl space-y-4 pb-14 border-b border-[#141414]/10">
          <span className="editorial-label">Intelligence & Perspectives</span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[0.96] text-[#141414] uppercase">
            Investment Insights, <br />
            <span className="text-[#141414]/65">considered.</span>
          </h1>
          <p className="text-sm sm:text-base text-[#141414]/65 max-w-2xl font-light leading-relaxed pt-2">
            Independent corridor intelligence, regulatory due diligence frameworks, and infrastructure forecasts for strategic land investors in Central India.
          </p>
        </div>

        {/* Categories Bar */}
        <div className="py-6 border-b border-[#141414]/10 flex items-center gap-3 overflow-x-auto scrollbar-none text-xs uppercase tracking-wider">
          {categories.map((cat, idx) => (
            <button
              key={cat}
              className={`px-4 py-2 font-medium transition-all ${
                idx === 0
                  ? 'bg-[#141414] text-[#FAF8F5]'
                  : 'bg-transparent text-[#141414]/65 hover:text-[#141414] hover:bg-[#141414]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Articles Grid (Editorial Tiles) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 pt-12">
          {INSIGHT_ARTICLES.map((article) => (
            <article
              key={article.slug}
              className="group flex flex-col justify-between border-b border-[#141414]/10 pb-12"
            >
              <Link
                href={`/insights/${article.slug}`}
                className="relative aspect-[16/10] w-full overflow-hidden bg-[#141414]/5 mb-6 block border border-[#141414]/10"
              >
                <Image
                  src={article.coverImage}
                  alt={article.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity" />

                <div className="absolute top-4 left-4 flex gap-2">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#FAF8F5] text-[#141414] border border-[#141414]/15 shadow-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>

              <div className="space-y-4">
                <div className="flex items-center gap-4 text-[11px] uppercase font-mono tracking-wider text-[#141414]/65">
                  <span>{article.author}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                </div>

                <h2 className="font-display font-medium text-xl sm:text-2xl lg:text-3xl text-[#141414] group-hover:text-[#6E745F] transition-colors leading-tight tracking-[-0.02em]">
                  <Link href={`/insights/${article.slug}`}>
                    {article.title}
                  </Link>
                </h2>

                <p className="text-xs sm:text-sm text-[#141414]/65 font-light leading-relaxed line-clamp-3">
                  {article.excerpt}
                </p>

                <div className="pt-2">
                  <Link
                    href={`/insights/${article.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.14em] font-medium text-[#141414] hover:text-[#6E745F] transition-colors"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#6E745F]" />
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
