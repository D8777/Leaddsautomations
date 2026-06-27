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
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-6 tracking-tight">
            See where your operations are losing time.
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">
            A short conversation can clarify where automation might help — and whether it's worth pursuing.
          </p>
          <button
            onClick={onRequestAudit}
            className="px-8 py-4 bg-accent/10 border border-accent/40 text-white text-base font-medium rounded-lg hover:bg-accent/20 hover:border-accent/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          >
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Request a Free Automation Audit</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
