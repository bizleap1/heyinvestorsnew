export type ProjectStatus = 'available' | 'sold' | 'coming-soon';
export type ProjectType = 'residential' | 'commercial' | 'mixed';

export interface AdditionalDetail {
  label: string;
  value: string;
}

export interface Project {
  slug: string;
  name: string;
  location: string;
  area: string;
  pricePerSqft: number | null;
  startingPriceDisplay?: string;
  plotSizes: number[];
  type: ProjectType;
  status: ProjectStatus;
  approvals: string[];
  rera?: string;
  loanEligible: boolean | string;
  description: string;
  longDescription?: string;
  features: string[];
  additionalDetails?: AdditionalDetail[];
  image: string;
  gallery?: string[];
  coordinates?: { lat: number; lng: number };
  featured?: boolean;
}

export interface InsightArticle {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: string;
  publishedAt: string;
  readTime?: string;
  tags: string[];
}

export interface TeamMember {
  name: string;
  initials: string;
  role: string;
  bio: string;
  image: string;
}

export interface SiteVisitRequest {
  fullName: string;
  phoneNumber: string;
  email?: string;
  projectSlug?: string;
  preferredDate?: string;
  message?: string;
  consent: boolean;
}
