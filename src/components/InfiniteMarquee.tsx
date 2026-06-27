import { motion } from 'framer-motion';

const integrations = [
  "Salesforce", "HubSpot", "Zapier", "OpenAI", "Stripe", "Slack", "Make", "Airtable",
  "Salesforce", "HubSpot", "Zapier", "OpenAI", "Stripe", "Slack", "Make", "Airtable"
];

export function InfiniteMarquee() {
  return (
    <div className="w-full bg-dark-bg border-y border-dark-border py-8 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-dark-bg to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-dark-bg to-transparent z-10 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto mb-6 text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-neutral-500 font-semibold relative z-20">
          Architecting systems that integrate with your stack
        </p>
      </div>

      <motion.div
        className="flex whitespace-nowrap gap-16"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          ease: "linear",
          duration: 30,
          repeat: Infinity,
        }}
      >
        {integrations.map((item, idx) => (
          <div key={idx} className="flex items-center justify-center text-neutral-600 font-bold text-2xl opacity-50 hover:opacity-100 hover:text-accent transition-all duration-300 cursor-default">
            {item}
          </div>
        ))}
      </motion.div>
    </div>
  );
}
