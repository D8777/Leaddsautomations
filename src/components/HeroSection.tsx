import { motion } from 'framer-motion';

interface HeroSectionProps {
  onRequestAudit: () => void;
}

export function HeroSection({ onRequestAudit }: HeroSectionProps) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-bg relative overflow-hidden pt-20">
      {/* Subtle gradient noise effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-dark-charcoal/50 to-dark-bg pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-dark-surface/20 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 py-24 text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight mb-8"
        >
          Your team is spending time on work that shouldn't require a person.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          We map where your operations break down and build systems that handle the repetitive parts — so your team can focus on work that actually needs them.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <button
            onClick={onRequestAudit}
            className="px-8 py-4 bg-accent/10 border border-accent/40 text-white text-base font-medium rounded-lg hover:bg-accent/20 hover:border-accent/60 transition-all duration-300"
          >
            Request a Free Automation Audit
          </button>
        </motion.div>
      </div>
    </section>
  );
}
