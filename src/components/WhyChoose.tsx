import { motion } from 'framer-motion';
import { Brain, Shield, Cloud, Zap, TrendingUp, Cpu, Lock, Sparkles } from 'lucide-react';

export default function WhyChoose() {
  const reasons = [
    { icon: Brain, title: 'AI-Powered Ecosystem', description: 'Machine learning algorithms for predictive analytics and smart recommendations' },
    { icon: Cloud, title: 'Modern SaaS Architecture', description: 'Built on cutting-edge cloud infrastructure for scalability and reliability' },
    { icon: Zap, title: 'Scalable Cloud Infrastructure', description: 'Enterprise-grade systems that grow with your institution' },
    { icon: Sparkles, title: 'Built for Indian Education', description: 'Designed specifically for Indian academic systems and workflows' },
    { icon: TrendingUp, title: 'Smart Analytics & Insights', description: 'Real-time dashboards with actionable performance metrics' },
    { icon: Lock, title: 'Secure & Reliable Systems', description: 'Bank-level security with 99.9% uptime guarantee' },
    { icon: Cpu, title: 'Future-Ready Innovation', description: 'Continuously evolving with AI, face recognition, and voice systems' },
    { icon: Shield, title: 'Cross-Platform Experience', description: 'Seamless access across web, mobile, tablet, and desktop' },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-12"
        >
          {/* Heading */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Why Choose <span className="gradient-text">Scholix Mind</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              Trusted by institutions worldwide for modern, intelligent education management
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, i) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (i % 4) * 0.1 }}
                  className="glass rounded-2xl p-6 glow-effect group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon size={24} className="text-white" />
                  </div>
                  <h3 className="font-bold mb-2">{reason.title}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {reason.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Comparison Table Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 glass rounded-2xl p-8 glow-effect"
          >
            <h3 className="text-2xl font-bold mb-8 text-center">Comparison with Traditional Systems</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-slate-300 dark:border-slate-600">
                    <th className="text-left py-4 px-4 font-bold">Feature</th>
                    <th className="text-center py-4 px-4 font-bold">Traditional</th>
                    <th className="text-center py-4 px-4 font-bold">Scholix Mind</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: 'AI-Powered Insights', traditional: '✗', scholix: '✓' },
                    { feature: 'Real-time Analytics', traditional: '✗', scholix: '✓' },
                    { feature: 'Mobile-First Design', traditional: '✗', scholix: '✓' },
                    { feature: 'Automation', traditional: '✗', scholix: '✓' },
                    { feature: 'Scalability', traditional: '✗', scholix: '✓' },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/30 transition-colors">
                      <td className="py-4 px-4">{row.feature}</td>
                      <td className="text-center py-4 px-4 text-slate-500">{row.traditional}</td>
                      <td className="text-center py-4 px-4 text-accent-500 font-bold">{row.scholix}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
