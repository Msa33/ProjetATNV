
'use client';

import Header from './Header';
import Footer from './Footer';
import AboutHero from './AboutHero';
import HistorySection from './HistorySection';
import TeamSection from './TeamSection';
import ValuesSection from './ValuesSection';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <HistorySection />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </div>
  );
}
