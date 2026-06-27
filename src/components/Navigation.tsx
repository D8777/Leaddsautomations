import { motion } from 'framer-motion';

interface NavigationProps {
  onRequestAudit: () => void;
}

export function Navigation({ onRequestAudit }: NavigationProps) {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-dark-bg/90 backdrop-blur-md border-b border-dark-border"
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#" className="text-lg font-semibold text-white tracking-tight">
          Automata
        </a>
        <button
          onClick={onRequestAudit}
          className="px-5 py-2 border border-dark-border text-neutral-300 text-sm font-medium rounded-lg hover:border-accent hover:text-accent transition-colors duration-200"
        >
          Request Audit
        </button>
      </div>
    </motion.nav>
  );
}
