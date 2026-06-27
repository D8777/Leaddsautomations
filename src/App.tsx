import { useRef } from 'react';
import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { ProblemSection } from './components/ProblemSection';
import { ReframeSection } from './components/ReframeSection';
import { AuditOfferSection } from './components/AuditOfferSection';
import { FinalCTASection } from './components/FinalCTASection';
import { Footer } from './components/Footer';

function App() {
  const auditRef = useRef<HTMLElement>(null);

  const scrollToAudit = () => {
    auditRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-dark-bg min-h-screen">
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
