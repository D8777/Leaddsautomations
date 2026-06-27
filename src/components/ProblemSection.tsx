import { motion } from 'framer-motion';
import { Copy, AlertCircle, Clock, Users } from 'lucide-react';

const painPoints = [
  {
    icon: Copy,
    title: 'Manual data entry',
    description: 'Copy-paste between tools that should talk to each other automatically.',
  },
  {
    icon: AlertCircle,
    title: 'Things falling through the cracks',
    description: 'Leads, tasks, or follow-ups that get missed because no system is watching.',
  },
  {
    icon: Clock,
    title: 'Reporting that takes hours',
    description: 'Pulling numbers from different places into one spreadsheet, every single week.',
  },
  {
    icon: Users,
    title: 'Repetitive team work',
    description: "Time spent on low-judgment tasks that don't actually need a person.",
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

export function ProblemSection() {
  return (
    <section id="problems" className="py-24 md:py-32 bg-dark-bg">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            What's Getting in the Way
          </h2>
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            These are the operational problems that slow teams down — not the headlines, just the reality.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="p-6 md:p-8 bg-dark-card border border-dark-border rounded-lg"
            >
              <point.icon className="w-6 h-6 text-neutral-500 mb-4" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-2">{point.title}</h3>
              <p className="text-neutral-400 leading-relaxed">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
