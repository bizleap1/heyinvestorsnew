import { Metadata } from 'next';
import { Suspense } from 'react';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Curated Plotted Developments | Hey Investor Nagpur',
  description:
    'Explore verified residential and commercial plots for sale across Nagpur’s top infrastructure corridors: Wardha Road, Hingna, Amravati Road, and Godhani. NMRDA and RL sanctioned.',
};

export default function ProjectsPage() {
  return (
    <Suspense fallback={<div className="pt-40 text-center text-[#141414]/65">Loading projects...</div>}>
      <ProjectsClient />
    </Suspense>
  );
}
