import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft } from '@/components/ui/icons';
import { INSIGHT_ARTICLES } from '@/lib/insights-data';

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return INSIGHT_ARTICLES.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return {
      title: 'Article Not Found | Hey Investor',
    };
  }

  return {
    title: `${article.title} | Hey Investor Insights`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [
        {
          url: article.coverImage,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
  };
}

export default async function InsightArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = INSIGHT_ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  return (
    <article className="pt-32 pb-24 md:pt-40 md:pb-36 bg-[#FAF8F5] text-[#141414]">
      <div className="max-w-[1520px] mx-auto px-6 md:px-12">
        {/* Back navigation */}
        <div className="pb-8">
          <Link
            href="/insights"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-[#141414]/65 hover:text-[#141414] transition-colors font-mono"
          >
            <ArrowLeft className="w-4 h-4 text-[#6E745F]" />
            <span>Back to Insights</span>
          </Link>
        </div>

        {/* Article Header */}
        <header className="max-w-4xl space-y-6 pb-12 border-b border-[#141414]/10">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] uppercase font-mono tracking-wider bg-[#FAF8F5] text-[#141414] border border-[#141414]/15 shadow-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <h1 className="font-display uppercase font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-[-0.035em] text-[#141414] leading-[0.98]">
            {article.title}
          </h1>

          <div className="flex items-center gap-6 text-xs uppercase font-mono tracking-wider text-[#141414]/65 pt-2">
            <span>By {article.author}</span>
            <span>·</span>
            <span>{article.readTime}</span>
            <span>·</span>
            <span>Nagpur & Vidarbha</span>
          </div>
        </header>

        {/* Hero Cover Image */}
        <div className="relative aspect-[16/9] lg:aspect-[21/9] w-full my-12 overflow-hidden bg-[#141414]/5 border border-[#141414]/10">
          <Image
            src={article.coverImage}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Content & Editorial Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pt-4">
          <div className="lg:col-span-8 space-y-8 text-base md:text-lg text-[#141414] font-light leading-relaxed">
            {article.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('### ')) {
                return (
                  <h2
                    key={index}
                    className="font-display font-medium text-2xl sm:text-3xl text-[#141414] tracking-[-0.02em] pt-6 pb-2"
                  >
                    {paragraph.replace('### ', '')}
                  </h2>
                );
              }
              if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                return (
                  <p key={index} className="font-medium text-[#141414]">
                    {paragraph.replace(/\*\*/g, '')}
                  </p>
                );
              }
              if (paragraph.startsWith('- ')) {
                return (
                  <ul key={index} className="space-y-2 pl-4 list-disc marker:text-[#6E745F] text-sm md:text-base text-[#141414]/75">
                    {paragraph.split('\n').map((li, i) => (
                      <li key={i}>{li.replace('- ', '')}</li>
                    ))}
                  </ul>
                );
              }
              return (
                <p key={index} className="text-[#141414]/75">
                  {paragraph}
                </p>
              );
            })}
          </div>

          {/* Sticky Advisory Sidebar */}
          <aside className="lg:col-span-4 space-y-8 lg:sticky lg:top-32 self-start">
            <div className="p-8 bg-[#FAF8F5] border border-[#141414]/15 space-y-4">
              <span className="editorial-label">Direct Advisory Desk</span>
              <h3 className="font-display font-medium text-xl sm:text-2xl text-[#141414] tracking-[-0.02em]">
                Planning a plotted acquisition in Nagpur?
              </h3>
              <p className="text-xs text-[#141414]/65 leading-relaxed font-light">
                Inspect sanctioned layouts along Wardha Road, Amravati Road, and Hingna. Our senior advisory desk handles site inspections, title reports, and bank financing.
              </p>
              <div className="pt-2">
                <Link
                  href="/contact"
                  className="btn-primary w-full justify-center text-xs"
                >
                  Schedule Site Inspection
                </Link>
              </div>
            </div>

            <div className="p-6 border border-[#141414]/10 space-y-2 text-xs text-[#141414]/65 font-mono">
              <span className="editorial-label block mb-1">Corporate Compliance</span>
              <p>Hey Investor Pvt. Ltd.</p>
              <p>MahaRERA Registration No. A50500037507</p>
              <p>103, Ghatate Building, WHC Road, Nagpur</p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
