import { motion } from 'framer-motion';
import { TrendingUp, Clock, ShieldCheck } from 'lucide-react';

const cases = [
  {
    icon: Clock,
    client: 'Lead Gen Agency',
    challenge: 'Wasting 15+ hours a week manually entering leads from Facebook into their CRM.',
    solution: 'Engineered a seamless data bridge instantly routing leads, formatting data, and triggering immediate email follow-ups.',
    result: 'Reclaimed 15 hours/week. Speed-to-lead dropped from hours to 3 seconds.',
  },
  {
    icon: TrendingUp,
    client: 'B2B Consultancy',
    challenge: 'Lost revenue due to missed client follow-ups and dropped proposals.',
    solution: 'Built an automated pipeline tracking system that alerts the team precisely when a prospect goes cold.',
    result: 'Increased closed-won rate by 22% within the first month of deployment.',
  }
];

export function CaseStudiesSection() {
  return (
    <section className="py-24 md:py-32 bg-dark-charcoal border-t border-dark-border">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-4 tracking-tight">
            Proof of Concept
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            We don't just build automations. We engineer operational scale that translates directly to your bottom line.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {cases.map((study, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.2 }}
              className="p-8 bg-dark-card border border-dark-border rounded-lg relative group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              <div className="flex items-center gap-3 mb-6 relative z-10">
                <div className="w-10 h-10 rounded bg-dark-bg border border-dark-border flex items-center justify-center">
                  <study.icon className="w-5 h-5 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-white">{study.client}</h3>
              </div>

              <div className="space-y-6 relative z-10">
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2 font-semibold">The Diagnosis</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">{study.challenge}</p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-wider text-neutral-500 mb-2 font-semibold">The Architecture</p>
                  <p className="text-neutral-300 text-sm leading-relaxed">{study.solution}</p>
                </div>
                <div className="pt-4 border-t border-dark-border">
                  <p className="text-xs uppercase tracking-wider text-accent mb-2 font-semibold flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" /> Operational Result
                  </p>
                  <p className="text-white font-medium">{study.result}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
