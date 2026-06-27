import { useRef, useState } from 'react';
import { motion, useScroll } from 'framer-motion';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ReframeSection } from './components/ReframeSection';
import { InfiniteMarquee } from './components/InfiniteMarquee';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { ROICalculatorSection } from './components/ROICalculatorSection';
import { AuditOfferSection } from './components/AuditOfferSection';
import { FinalCTASection } from './components/FinalCTASection';
import { MultiStepAuditModal } from './components/MultiStepAuditModal';
import { CustomCursor } from './components/CustomCursor';
import { Footer } from './components/Footer';

function App() {
  const auditRef = useRef<HTMLElement>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { scrollYProgress } = useScroll();

  const handleRequestAudit = () => {
    setIsModalOpen(true);
  };

  return (
    <div className="bg-dark-bg min-h-screen relative">
      <CustomCursor />
      <MultiStepAuditModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
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
      <Navigation onRequestAudit={handleRequestAudit} />
      <main>
        <HeroSection onRequestAudit={handleRequestAudit} />
        <InfiniteMarquee />
        <ProblemSection />
        <ROICalculatorSection />
        <ReframeSection />
        <CaseStudiesSection />
        <AuditOfferSection ref={auditRef} onRequestAudit={handleRequestAudit} />
        <FinalCTASection onRequestAudit={handleRequestAudit} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
