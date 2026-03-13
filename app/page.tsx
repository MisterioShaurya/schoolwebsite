import { Metadata } from 'next';
import { HeroSection } from '@/components/sections/hero';
import { AboutPreviewSection } from '@/components/sections/about-preview';
import { AcademicProgramsSection } from '@/components/sections/academic-programs';
import { FacilitiesSection } from '@/components/sections/facilities';
import { ActivitiesSection } from '@/components/sections/activities';
import { AchievementsSection } from '@/components/sections/achievements';
import { EventsSection } from '@/components/sections/events';
import { GallerySection } from '@/components/sections/gallery';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { CtaSection } from '@/components/sections/cta';
import { ContactPreviewSection } from '@/components/sections/contact-preview';

export const metadata: Metadata = {
  title: 'Stellar Academy - Excellence in Education',
  description: 'Welcome to Stellar Academy, where we inspire tomorrow\'s leaders through academic excellence, character development, and a supportive community.',
  openGraph: {
    title: 'Stellar Academy - Excellence in Education',
    description: 'Rigorous academics, vibrant community, and exceptional facilities for middle and high school students.',
    type: 'website',
  },
};

export default function Home() {
  return (
    <div className="w-full">
      <HeroSection />
      <AboutPreviewSection />
      <AcademicProgramsSection />
      <FacilitiesSection />
      <ActivitiesSection />
      <AchievementsSection />
      <EventsSection />
      <GallerySection />
      <TestimonialsSection />
      <CtaSection />
      <ContactPreviewSection />
    </div>
  );
}
