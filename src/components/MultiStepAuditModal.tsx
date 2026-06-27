import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowRight, CheckCircle2 } from 'lucide-react';

interface MultiStepAuditModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MultiStepAuditModal({ isOpen, onClose }: MultiStepAuditModalProps) {
  const [step, setStep] = useState(1);
  
  // State for form data (mock)
  const [bottleneck, setBottleneck] = useState('');
  const [teamSize, setTeamSize] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleNext = () => setStep(step + 1);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // In a real app, send data to backend here
    setTimeout(() => {
      onClose();
      // Reset state after close animation
      setTimeout(() => {
        setStep(1);
        setIsSubmitted(false);
        setBottleneck('');
        setTeamSize('');
        setEmail('');
      }, 500);
    }, 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[200] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="bg-dark-card border border-dark-border w-full max-w-lg rounded-2xl shadow-2xl relative z-10 overflow-hidden"
          >
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-dark-border">
              <h3 className="text-white font-semibold">Free Automation Audit</h3>
              <button onClick={onClose} className="text-neutral-500 hover:text-white transition-colors">
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Progress Bar */}
            {!isSubmitted && (
              <div className="h-1 bg-dark-bg w-full">
                <motion.div 
                  className="h-full bg-accent"
                  initial={{ width: '33%' }}
                  animate={{ width: `${(step / 3) * 100}%` }}
                />
              </div>
            )}

            {/* Content */}
            <div className="p-8">
              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center py-12"
                  >
                    <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-8 h-8 text-accent" />
                    </div>
                    <h4 className="text-2xl font-bold text-white mb-2">Audit Requested</h4>
                    <p className="text-neutral-400">We'll be in touch shortly with next steps.</p>
                  </motion.div>
                ) : step === 1 ? (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-6">What is your biggest operational bottleneck right now?</h4>
                    <div className="space-y-3">
                      {['Manual Data Entry', 'Lead Follow-ups & Sales CRM', 'Client Onboarding', 'Complex Reporting'].map((option) => (
                        <button
                          key={option}
                          onClick={() => { setBottleneck(option); handleNext(); }}
                          className={`w-full text-left px-6 py-4 rounded-lg border ${bottleneck === option ? 'border-accent bg-accent/10 text-accent' : 'border-dark-border bg-dark-bg text-neutral-300 hover:border-neutral-500'} transition-all`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : step === 2 ? (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-6">How many team members are impacted by these manual tasks?</h4>
                    <div className="space-y-3">
                      {['Just me (1)', 'Small Team (2-10)', 'Growing Team (11-50)', 'Enterprise (50+)'].map((option) => (
                        <button
                          key={option}
                          onClick={() => { setTeamSize(option); handleNext(); }}
                          className={`w-full text-left px-6 py-4 rounded-lg border ${teamSize === option ? 'border-accent bg-accent/10 text-accent' : 'border-dark-border bg-dark-bg text-neutral-300 hover:border-neutral-500'} transition-all`}
                        >
                          {option}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                  >
                    <h4 className="text-xl font-semibold text-white mb-2">Where should we send your custom strategy?</h4>
                    <p className="text-neutral-400 text-sm mb-6">Enter your email to request the free audit.</p>
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div>
                        <input 
                          type="email" 
                          required
                          placeholder="your@email.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-dark-bg border border-dark-border rounded-lg px-4 py-3 text-white focus:outline-none focus:border-accent"
                        />
                      </div>
                      <button 
                        type="submit"
                        className="w-full bg-accent/20 border border-accent/50 text-white font-medium rounded-lg px-4 py-3 hover:bg-accent/30 transition-colors flex items-center justify-center gap-2 group"
                      >
                        Complete Request
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </button>
                    </form>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
