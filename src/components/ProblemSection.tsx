import { motion } from 'framer-motion';
import { Copy, AlertCircle, Clock, Users } from 'lucide-react';

const painPoints = [
  {
    icon: Copy,
    title: 'Data Silos & Manual Transfer',
    description: "Architectures that don't communicate, forcing your team into manual data entry.",
  },
  {
    icon: AlertCircle,
    title: 'Systemic Lead Leakage',
    description: 'Leads, proposals, and critical follow-ups dropping through the cracks of broken systems.',
  },
  {
    icon: Clock,
    title: 'Inefficient Reporting Loops',
    description: 'Wasting high-value executive time pulling numbers from disconnected platforms.',
  },
  {
    icon: Users,
    title: 'Human Capital Waste',
    description: "Deploying your smartest people to execute low-judgment, repetitive tasks.",
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
          viewport={{ once: false, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-4 tracking-tight">
            Diagnosing Operational Bottlenecks
          </h2>
          <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="h-1 bg-accent mx-auto mb-6 rounded-full" />
          <p className="text-neutral-400 text-lg max-w-xl mx-auto">
            These are the systemic failures that stunt growth and burn out teams.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {painPoints.map((point) => (
            <motion.div
              key={point.title}
              variants={itemVariants}
              className="p-6 md:p-8 bg-dark-card border border-dark-border rounded-lg group hover:scale-[1.02] hover:-translate-y-1 hover:border-accent/50 hover:shadow-[0_0_30px_rgba(212,175,55,0.15)] transition-all duration-300 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <point.icon className="w-6 h-6 text-neutral-500 mb-4 group-hover:text-accent group-hover:-translate-y-1 group-hover:scale-110 transition-all duration-300 relative z-10" strokeWidth={1.5} />
              <h3 className="text-lg font-semibold text-white mb-2 relative z-10">{point.title}</h3>
              <p className="text-neutral-400 leading-relaxed relative z-10">{point.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
