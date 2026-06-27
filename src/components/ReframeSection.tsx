import { motion } from 'framer-motion';
import { Workflow, Bot, Settings } from 'lucide-react';

const concepts = [
  {
    icon: Bot,
    title: 'Not a chatbot',
    description: "This isn't about asking questions to an AI assistant. It's about setting up systems that run specific tasks, reliably, in the background.",
  },
  {
    icon: Workflow,
    title: 'Not a single tool',
    description: 'Automation means connecting the tools you already use — your CRM, your inbox, your spreadsheets — so data moves between them without manual effort.',
  },
  {
    icon: Settings,
    title: 'Not a trend',
    description: 'This is infrastructure. Once set up, it runs consistently. It handles the repetitive parts of your work so your team can focus on decisions, not data entry.',
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
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            What an AI System Actually Is
          </h2>
          <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
            It's not what the headlines make it sound like. It's simpler and more practical than that.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {concepts.map((concept) => (
            <motion.div
              key={concept.title}
              variants={itemVariants}
              className="p-6 bg-dark-bg border border-dark-border rounded-lg"
            >
              <concept.icon className="w-6 h-6 text-neutral-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-3">{concept.title}</h3>
              <p className="text-neutral-400 leading-relaxed text-sm">{concept.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
