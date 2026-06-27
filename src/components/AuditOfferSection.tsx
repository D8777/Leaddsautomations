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
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-4 tracking-tight">
            The Free Automation Audit
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            A structured review of where your operations are losing time — and what you could do about it.
          </p>
        </motion.div>

        {/* Who it's for */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16 text-center"
        >
          <div className="inline-block px-6 py-4 bg-dark-card border border-dark-border rounded-lg">
            <p className="text-neutral-300 text-sm">
              <span className="text-white font-medium">Who it's for:</span> Teams running on manual processes, disconnected tools, or workflows that depend too much on one person.
            </p>
          </div>
        </motion.div>

        {/* Steps Container */}
        <div className="relative mb-16">
          {/* Timeline Connector Desktop */}
          <div className="hidden md:block absolute top-[52px] left-[16.66%] right-[16.66%] h-[2px] pointer-events-none z-0">
             <svg width="100%" height="2" preserveAspectRatio="none">
              <motion.line x1="0" y1="0" x2="100%" y2="0" stroke="#D4AF37" strokeOpacity="0.3" strokeWidth="2" strokeDasharray="6 6" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} />
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
          >
            {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={itemVariants}
              className="p-6 bg-dark-card border border-dark-border rounded-lg relative"
            >
              <div className="flex items-center gap-3 mb-4">
                <motion.div 
                  whileInView={{ boxShadow: ['0px 0px 0px rgba(212,175,55,0)', '0px 0px 15px rgba(212,175,55,0.4)', '0px 0px 0px rgba(212,175,55,0)'] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="w-8 h-8 flex items-center justify-center bg-dark-bg border border-accent/40 rounded-md text-accent text-sm font-semibold relative z-10"
                >
                  {step.number}
                </motion.div>
                <step.icon className="w-5 h-5 text-neutral-500 relative z-10 bg-dark-card" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">{step.title}</h3>
              <p className="text-neutral-400 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
            ))}
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center"
        >
          <button
            onClick={onRequestAudit}
            className="px-8 py-4 bg-accent/10 border border-accent/40 text-white text-base font-medium rounded-lg hover:bg-accent/20 hover:border-accent/80 hover:shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:scale-105 transition-all duration-300 mb-6 relative overflow-hidden group"
          >
            <div className="absolute inset-0 -translate-x-[150%] bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:translate-x-[150%] transition-transform duration-1000 ease-out" />
            <span className="relative z-10">Request a Free Automation Audit</span>
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
