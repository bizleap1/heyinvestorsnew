import { Metadata } from 'next';
import ContactClient from './ContactClient';

export const metadata: Metadata = {
  title: 'Contact & Schedule Site Visit | Hey Investor Nagpur',
  description:
    'Schedule a private site visit or consultation with Hey Investor Pvt. Ltd. 103 Ghatate Building, WHC Road, Nagpur. Phone: +91 93256 50256. MahaRERA No. A50500037507.',
};

export default function ContactPage() {
  return <ContactClient />;
}
