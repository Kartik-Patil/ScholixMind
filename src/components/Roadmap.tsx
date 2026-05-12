import { motion } from 'framer-motion';
import { Rocket, Zap, Brain, Mic, Filter, Lightbulb } from 'lucide-react';

export default function Roadmap() {
  const roadmapItems = [
    {
      icon: Brain,
      title: 'AI Academic Assistant',
      description: 'Smart AI-powered tutor for personalized learning assistance',
      status: 'Q2 2026',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Filter,
      title: 'Predictive Analytics',
      description: 'Advanced ML models for performance prediction and intervention',
      status: 'Q2 2026',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Rocket,
      title: 'Face Recognition',
      description: 'Biometric-based smart attendance system',
      status: 'Q3 2026',
      color: 'from-primary-400 to-accent-500',
    },
    {
      icon: Mic,
      title: 'Voice-Based Systems',
      description: 'Voice commands and voice-based learning assistant',
      status: 'Q3 2026',
      color: 'from-accent-400 to-primary-500',
    },
    {
      icon: Lightbulb,
      title: 'Personalized Learning AI',
      description: 'Adaptive learning paths tailored to individual students',
      status: 'Q4 2026',
      color: 'from-purple-500 to-pink-600',
    },
    {
      icon: Zap,
      title: 'Smart Campus Ecosystem',
      description: 'Integrated IoT and smart infrastructure solutions',
      status: 'Q4 2026',
      color: 'from-pink-500 to-purple-600',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="roadmap">
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
              Future <span className="gradient-text">Vision</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              Exciting innovations coming to Scholix Mind
            </motion.p>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical Line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 transform -translate-x-1/2 origin-top"
            ></motion.div>

            {/* Timeline Items */}
            <div className="space-y-12">
              {roadmapItems.map((item, i) => {
                const Icon = item.icon;
                const isEven = i % 2 === 0;

                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 items-center`}
                  >
                    {/* Content */}
                    <div className="flex-1 lg:text-right">
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="glass rounded-2xl p-6 glow-effect"
                      >
                        <p className="text-sm font-bold text-accent-500 mb-2">{item.status}</p>
                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                        <p className="text-slate-600 dark:text-slate-400">{item.description}</p>
                      </motion.div>
                    </div>

                    {/* Center Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`hidden lg:flex w-16 h-16 rounded-full bg-gradient-to-br ${item.color} items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <Icon size={28} className="text-white" />
                    </motion.div>

                    {/* Mobile Icon */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`lg:hidden w-14 h-14 rounded-full bg-gradient-to-br ${item.color} flex items-center justify-center shadow-lg flex-shrink-0`}
                    >
                      <Icon size={24} className="text-white" />
                    </motion.div>

                    {/* Spacer */}
                    <div className="flex-1 hidden lg:block"></div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center glass rounded-2xl p-12 glow-effect"
          >
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Our Progress</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md mx-auto">
              Get notified when new features are released
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
              <button className="btn-primary">Notify</button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
