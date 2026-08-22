import React, { useEffect } from 'react';
import { APP_NAME } from '@/utils/constants';

// Homepage Sections
import { Hero } from '@/components/homepage/Hero';
import { ImpactStats } from '@/components/homepage/ImpactStats';
import { AboutSection } from '@/components/homepage/AboutSection';
import { ServiceAreas } from '@/components/homepage/ServiceAreas';
import { FeaturedProjects } from '@/components/homepage/FeaturedProjects';
import { ImpactSection } from '@/components/homepage/ImpactSection';
import { UpcomingEvents } from '@/components/homepage/UpcomingEvents';
import { NewsSection } from '@/components/homepage/NewsSection';
import { GetInvolved } from '@/components/homepage/GetInvolved';
import { MemberSpotlight } from '@/components/homepage/MemberSpotlight';
import { LionsConnection } from '@/components/homepage/LionsConnection';
import { GalleryPreview } from '@/components/homepage/GalleryPreview';
import { Newsletter } from '@/components/homepage/Newsletter';
import { FinalCTA } from '@/components/homepage/FinalCTA';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = `${APP_NAME} | Serving With Purpose`;
  }, []);

  return (
    <>
      <Hero />
      <ImpactStats />
      <AboutSection />
      <ServiceAreas />
      <FeaturedProjects />
      <ImpactSection />
      <UpcomingEvents />
      <NewsSection />
      <GetInvolved />
      <MemberSpotlight />
      <LionsConnection />
      <GalleryPreview />
      <Newsletter />
      <FinalCTA />
    </>
  );
};
