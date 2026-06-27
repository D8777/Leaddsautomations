import { motion } from 'framer-motion';
import { Workflow, Bot, Settings } from 'lucide-react';

const concepts = [
  {
    icon: Bot,
    title: 'Not a chatbot',
    description: "This isn't about asking questions to an AI assistant. It's about engineering systems that execute specific tasks, reliably, in the background.",
  },
  {
    icon: Workflow,
    title: 'Data Architecture',
    description: 'True automation connects the tools you already use — your CRM, your inbox, your databases — ensuring flawless data flow without human intervention.',
  },
  {
    icon: Settings,
    title: 'Operational Infrastructure',
    description: 'This is the backbone of scale. Once set up, it runs consistently, handling the repetitive parts of your work so your team can focus on strategy and decisions.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export function ReframeSection() {
  return (
    <section id="reframe" className="py-24 md:py-32 bg-dark-charcoal">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-4 tracking-tight">
            The Operational Architecture
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            This isn't about trendy chatbots. It's about engineering infrastructure that scales effortlessly.
          </p>
        </motion.div>

        <div className="relative">
          {/* Animated connection line (desktop only) */}
          <div className="hidden md:block absolute top-1/2 left-[5%] right-[5%] h-[2px] -translate-y-1/2 pointer-events-none z-0">
            <svg width="100%" height="2" preserveAspectRatio="none">
              <motion.line x1="0" y1="1" x2="100%" y2="1" stroke="url(#reframe-gradient-line)" strokeWidth="2" strokeDasharray="4 4" initial={{ pathLength: 0, opacity: 0 }} whileInView={{ pathLength: 1, opacity: 1 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 1.5, ease: "easeInOut" }} />
              <defs>
                <linearGradient id="reframe-gradient-line" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor="#D4AF37" stopOpacity="0.5" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10"
          >
            {concepts.map((concept) => (
            <motion.div
              key={concept.title}
              variants={itemVariants}
              className="p-6 bg-dark-bg border border-dark-border rounded-lg group hover:scale-[1.02] hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <concept.icon className="w-6 h-6 text-neutral-500 mb-4 group-hover:text-accent group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 relative z-10" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-3 relative z-10">{concept.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm relative z-10">{concept.description}</p>
            </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
