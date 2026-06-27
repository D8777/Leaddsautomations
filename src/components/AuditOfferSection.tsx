import { forwardRef } from 'react';
import { motion } from 'framer-motion';
import { FileText, Calendar, CheckCircle } from 'lucide-react';

interface AuditOfferSectionProps {
  onRequestAudit: () => void;
}

const steps = [
  {
    icon: FileText,
    number: '1',
    title: 'You submit a request',
    description: 'A short form to tell us about your team, your tools, and where things feel slow or manual.',
  },
  {
    icon: Calendar,
    number: '2',
    title: 'We schedule a 30-minute call',
    description: 'A focused conversation to understand your operations in more detail. No pitch, no pressure.',
  },
  {
    icon: CheckCircle,
    number: '3',
    title: 'You get clear recommendations',
    description: 'Specific, actionable steps for where automation could reduce operational friction. What you do with it is up to you.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export const AuditOfferSection = forwardRef<HTMLElement, AuditOfferSectionProps>(
  function AuditOfferSection({ onRequestAudit }, ref) {
    return (
      <section ref={ref} id="audit" className="py-24 md:py-32 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            The Free Automation Audit
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            A structured review of where your operations are losing time — and what you could do about it.
          </p>
        </motion.div>

        {/* Who it's for */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-6 py-4 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-neutral-300 text-sm">
              <span className="text-white font-medium">Who it's for:</span> Teams running on manual processes, disconnected tools, or workflows that depend too much on one person.
            </p>
          </div>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="p-6 bg-dark-card border border-dark-border rounded-lg relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center bg-accent/10 border border-accent/30 rounded-md text-accent text-sm font-semibold">
                  {step.number}
                </div>
                <step.icon className="w-5 h-5 text-neutral-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onRequestAudit}
            className="px-8 py-4 bg-accent/10 border border-accent/40 text-white text-base font-medium rounded-lg hover:bg-accent/20 hover:border-accent/60 transition-all duration-300 mb-6"
          >
            Request a Free Automation Audit
          </button>
          <p className="text-neutral-500 text-sm max-w-sm mx-auto">
            No cost. No obligation. You decide what to do with the recommendations.
          </p>
        </motion.div>
      </div>
    </section>
  );
  }
);
