import { motion } from 'framer-motion';
import { Target, Brain, Zap, Globe } from 'lucide-react';

export default function About() {
  const features = [
    {
      icon: Target,
      title: 'Mission',
      description: 'Democratize access to premium education technology through AI-powered, affordable solutions.',
      color: 'from-primary-500 to-primary-600',
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'Continuously advancing education with machine learning, analytics, and intelligent automation.',
      color: 'from-accent-500 to-accent-600',
    },
    {
      icon: Zap,
      title: 'Impact',
      description: 'Transforming academic workflows for millions of students and institutions globally.',
      color: 'from-primary-400 to-accent-500',
    },
    {
      icon: Globe,
      title: 'India First',
      description: 'Built specifically for Indian education system with deep institutional expertise.',
      color: 'from-accent-400 to-primary-500',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="about">
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
              About <span className="gradient-text">Scholix Mind</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              A next-generation EdTech company focused on building intelligent academic ecosystems powered by AI, automation, analytics, and modern digital experiences.
            </motion.p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass rounded-2xl p-8 glow-effect group hover:-translate-y-2 transition-all duration-300"
                >
                  <div className={`w-14 h-14 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-12 glow-effect"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { number: '3', label: 'Flagship Products' },
                { number: '2020', label: 'Founded in India' },
                { number: '15+', label: 'Years Combined EdTech Experience' },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  className="text-center"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                >
                  <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    {item.number}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 mt-2">{item.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
