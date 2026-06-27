import { motion } from 'framer-motion';

interface FinalCTASectionProps {
  onRequestAudit: () => void;
}

export function FinalCTASection({ onRequestAudit }: FinalCTASectionProps) {
  return (
    <section className="py-24 md:py-32 bg-dark-charcoal">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight">
            See where your operations are losing time.
          </h2>
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            A short conversation can clarify where automation might help — and whether it's worth pursuing.
          </p>
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
