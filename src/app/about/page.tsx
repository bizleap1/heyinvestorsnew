import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';
import AboutClient from './AboutClient';

export const metadata: Metadata = {
  title: 'Why Hey Investor | Nagpur Land & Plotted Developments',
  description:
    'Hey Investor Pvt. Ltd. is a Nagpur-based real estate firm focused exclusively on approved residential and commercial plots in Vidarbha. MahaRERA Reg. A50500037507.',
};

export default function AboutPage() {
  return <AboutClient />;
}
