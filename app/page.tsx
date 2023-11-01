import Image from 'next/image';
import { Button } from '@/components/ui/button';

import HeroSection from '@/components/HeroSection';
import ProjectsSection from '@/components/Projects';
export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
    </div>
  );
}
