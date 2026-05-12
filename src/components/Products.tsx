import { motion } from 'framer-motion';
import { BookOpen, Users, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function Products() {
  const products = [
    {
      icon: BookOpen,
      name: 'EduAttend',
      subtitle: 'Smart Attendance & Academic Operations',
      description: 'Intelligent attendance tracking and academic engagement platform for schools and colleges.',
      features: [
        'One-click attendance marking',
        'Smart parent alerts & notifications',
        'AI attendance analytics',
        'Multi-role dashboards',
        'Real-time reports & exports',
        'QR & biometric-ready',
      ],
      color: 'from-primary-500 to-primary-600',
      bgGradient: 'from-primary-100 to-primary-50 dark:from-primary-900/20 dark:to-primary-950/20',
    },
    {
      icon: Users,
      name: 'EduPilot',
      subtitle: 'Modern College Management Platform',
      description: 'Complete academic management system for colleges with attendance, marks, and analytics.',
      features: [
        'Student & faculty management',
        'Advanced academic analytics',
        'Timetable & operations',
        'Department dashboards',
        'Parent portal access',
        'Smart institutional workflows',
      ],
      color: 'from-accent-500 to-accent-600',
      bgGradient: 'from-accent-100 to-accent-50 dark:from-accent-900/20 dark:to-accent-950/20',
    },
    {
      icon: Zap,
      name: 'CETup',
      subtitle: 'AI-Powered CET Preparation Platform',
      description: 'Smart preparation and performance platform for competitive exam aspirants.',
      features: [
        'Mock CET examinations',
        'AI learning analytics',
        'Performance prediction',
        'Smart practice engine',
        'Student leaderboard',
        'Personalized learning paths',
      ],
      color: 'from-purple-500 to-pink-500',
      bgGradient: 'from-purple-100 to-pink-50 dark:from-purple-900/20 dark:to-pink-950/20',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="products">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="space-y-16"
        >
          {/* Heading */}
          <div className="text-center space-y-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              Our <span className="gradient-text">Products</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              Three powerful AI-powered platforms designed to transform education
            </motion.p>
          </div>

          {/* Products Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {products.map((product, i) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.15 }}
                  className={`rounded-2xl p-8 bg-gradient-to-br ${product.bgGradient} border border-slate-200/50 dark:border-slate-700/50 glow-effect group hover:-translate-y-4 transition-all duration-300`}
                >
                  {/* Header */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <Icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold">{product.name}</h3>
                    <p className="text-primary-600 dark:text-primary-400 font-semibold">{product.subtitle}</p>
                  </div>

                  {/* Description */}
                  <p className="text-slate-600 dark:text-slate-400 mb-8">
                    {product.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {product.features.map((feature, j) => (
                      <motion.div
                        key={j}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: (i * 0.15) + (j * 0.05) }}
                        className="flex items-start gap-3"
                      >
                        <CheckCircle size={18} className="text-accent-500 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    whileHover={{ x: 4 }}
                    className="w-full flex items-center justify-center gap-2 btn-secondary group/btn"
                  >
                    Learn More
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                  </motion.button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
