import HeroSection from '@/components/home/HeroSection';
import VideoIntroSection from '@/components/home/VideoIntroSection';
import AvailableProperties from '@/components/home/AvailableProperties';
import SavitriParkBanner from '@/components/home/SavitriParkBanner';
import ExploreCorridors from '@/components/home/ExploreCorridors';
import WhyHeyInvestor from '@/components/home/WhyHeyInvestor';
import AdvisoryTrustSection from '@/components/home/AdvisoryTrustSection';
import FinalCtaSection from '@/components/home/FinalCtaSection';

export default function HomePage() {
  return (
    <>
      {/* 01 Full-Screen Cinematic Hero */}
      <HeroSection />

      {/* NEW: SECTION - WHY CHOOSE US (VIDEO INTRO) */}
      <VideoIntroSection />

      {/* NEW: SECTION 1 — AVAILABLE PROPERTIES */}
      <AvailableProperties />

      {/* NEW: SECTION 2 — SAVITRI PARK COMING SOON */}
      <SavitriParkBanner />

      {/* NEW: SECTION 3 — EXPLORE BY CORRIDOR */}
      <ExploreCorridors />

      {/* 09 Leadership & Advisory Trust */}
      <AdvisoryTrustSection />

      {/* NEW: SECTION 4 — WHY HEY INVESTOR */}
      <WhyHeyInvestor />

      {/* 10 Final Luxury CTA */}
      <FinalCtaSection />
    </>
  );
}
