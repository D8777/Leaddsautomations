import { motion } from 'framer-motion';

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="py-12 bg-dark-bg border-t border-dark-border"
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-lg font-semibold text-white mb-1">Automata</p>
            <p className="text-neutral-500 text-sm">Practical automation for growing teams.</p>
          </div>
          <div className="text-center md:text-right">
            <a
              href="mailto:hello@automata.work"
              className="text-neutral-400 hover:text-accent transition-colors text-sm"
            >
              hello@automata.work
            </a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}
