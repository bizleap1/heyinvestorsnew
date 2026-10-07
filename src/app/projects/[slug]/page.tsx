import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { PROJECTS } from '@/lib/projects-data';
import ProjectDetailClient from './ProjectDetailClient';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return PROJECTS.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    return {
      title: 'Project Not Found | Hey Investor',
    };
  }

  return {
    title: `${project.name} — Plots in ${project.location} | Hey Investor`,
    description: `${project.name} in ${project.location}. ${project.approvals.join(', ')} approved residential & commercial plots in Nagpur. ${project.rera ? `MahaRERA: ${project.rera}.` : ''} Book a site inspection.`,
    openGraph: {
      title: `${project.name} | Hey Investor Nagpur`,
      description: project.description,
      images: [
        {
          url: project.image,
          width: 1200,
          height: 630,
          alt: project.name,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = PROJECTS.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
