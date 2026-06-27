import { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator } from 'lucide-react';

export function ROICalculatorSection() {
  const [hours, setHours] = useState(15);
  
  // Assume an average hourly value of $50/hr for the team
  const hourlyRate = 50;
  const weeklyLoss = hours * hourlyRate;
  const monthlyLoss = weeklyLoss * 4.33;
  const yearlyLoss = weeklyLoss * 52;

  return (
    <section className="py-24 md:py-32 bg-dark-charcoal border-t border-dark-border">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, margin: '-100px' }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-accent mb-4 tracking-tight">
              The Cost of Inaction
            </h2>
            <motion.div initial={{ width: 0 }} whileInView={{ width: '4rem' }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }} className="h-1 bg-accent mx-auto mb-6 rounded-full" />
            <p className="text-neutral-400 text-lg max-w-2xl mx-auto">
              Operational bottlenecks don't just waste time; they hemorrhage capital. Use this diagnostic tool to calculate your hidden losses.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-dark-card border border-dark-border rounded-xl p-8 md:p-12 shadow-2xl relative overflow-hidden group"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
          
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <Calculator className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-semibold text-white">Diagnostic Variables</h3>
              </div>
              
              <div className="mb-8">
                <label className="block text-sm font-medium text-neutral-400 mb-6">
                  Manual hours lost per week (across your entire team)
                </label>
                <div className="flex items-center gap-6 mb-4">
                  <input 
                    type="range" 
                    min="1" 
                    max="100" 
                    value={hours} 
                    onChange={(e) => setHours(parseInt(e.target.value))}
                    className="w-full h-2 bg-dark-bg rounded-lg appearance-none cursor-pointer accent-accent"
                  />
                  <span className="text-3xl font-bold text-white w-20 text-right">{hours}h</span>
                </div>
                <p className="text-xs text-neutral-500 mt-4 leading-relaxed">
                  Includes manual data entry, copying data between tools, repetitive lead follow-ups, and building reports by hand.
                </p>
              </div>
            </div>

            <div className="bg-dark-bg rounded-lg p-8 border border-dark-border flex flex-col justify-center">
              <h4 className="text-xs uppercase tracking-[0.1em] text-neutral-500 font-semibold mb-6">Estimated Capital Leakage</h4>
              
              <div className="space-y-6">
                <div>
                  <p className="text-neutral-400 text-sm mb-2">Monthly Loss</p>
                  <p className="text-3xl font-bold text-white">${Math.round(monthlyLoss).toLocaleString()}</p>
                </div>
                <div className="pt-6 border-t border-dark-border">
                  <p className="text-accent text-sm font-semibold mb-2">Annual Loss</p>
                  <p className="text-4xl md:text-5xl font-bold text-accent">${Math.round(yearlyLoss).toLocaleString()}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
