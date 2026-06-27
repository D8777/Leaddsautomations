import { useRef } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ReframeSection } from './components/ReframeSection';
import { AuditOfferSection } from './components/AuditOfferSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

function App() {
  const auditRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll();

  const scrollToAudit = () => {
    auditRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-dark-bg min-h-screen relative">
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-accent origin-left z-[100]"
        style={{ scaleX: scrollYProgress }}
      />
      {/* SVG Noise Filter */}
      <svg
        className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.03] mix-blend-overlay"
        xmlns="http://www.w3.org/2000/svg"
      >
        <filter id="noiseFilter">
          <feTurbulence type="fractalNoise" baseFrequency="0.6" numOctaves="3" stitchTiles="stitch" />
        </filter>
        <rect width="100%" height="100%" filter="url(#noiseFilter)" />
      </svg>
      <Navigation onRequestAudit={scrollToAudit} />
      <main>
        <HeroSection onRequestAudit={scrollToAudit} />
        <ProblemSection />
        <ReframeSection />
        <AuditOfferSection ref={auditRef} onRequestAudit={scrollToAudit} />
        <FinalCTASection onRequestAudit={scrollToAudit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
