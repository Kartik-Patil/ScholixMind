import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Play, TrendingUp, Sparkles, Users, Brain } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Hero() {
  const { scrollY } = useScroll();
  const cardOffsetY = useTransform(scrollY, [0, 800], [0, 60]);
  const cardOffsetX = useTransform(scrollY, [0, 800], [0, 18]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="top" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground variant="primary" intensity="medium" animated />
      
      <motion.div
        aria-hidden="true"
        animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.08, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="pointer-events-none absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-gradient-to-r from-primary-500/20 via-accent-400/20 to-transparent blur-3xl"
      />
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, type: 'spring', stiffness: 140, damping: 16 }}
              whileHover={{ scale: 1.03 }}
              className="inline-flex items-center space-x-2 glass px-4 py-2 rounded-full w-fit"
            >
              <Sparkles size={16} className="text-accent-500" />
              <span className="text-sm font-semibold text-primary-600 dark:text-primary-400">Next-Gen EdTech Platform</span>
            </motion.div>

            {/* Heading */}
            <motion.h1 variants={itemVariants} className="section-title leading-tight">
              Building the <span className="gradient-text">Future of Smart Education</span>
            </motion.h1>

            {/* Subheading */}
            <motion.p variants={itemVariants} className="section-subtitle max-w-md">
              AI-powered academic platforms designed for institutions, educators, and students. Transform education with intelligent automation, analytics, and modern digital experiences.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 pt-4">
              <button className="btn-primary flex items-center justify-center gap-2 group">
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="btn-secondary flex items-center justify-center gap-2">
                <Play size={18} />
                Watch Demo
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div variants={itemVariants} className="flex gap-8 pt-8 border-t border-slate-200 dark:border-slate-700">
              {[
                { number: '10K+', label: 'Students' },
                { number: '100+', label: 'Institutions' },
                { number: '1M+', label: 'Records' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">{stat.number}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Floating Cards */}
          <motion.div variants={itemVariants} className="relative h-96 hidden lg:block" style={{ y: cardOffsetY, x: cardOffsetX }}>
            {/* Floating Card 1 - Analytics */}
            <motion.div
              animate={{ y: [0, -20, 0], x: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03, rotate: -1 }}
              className="absolute top-0 right-0 w-64 glass rounded-2xl p-6 glow-effect"
            >
              <div className="flex items-center space-x-2 mb-4">
                <TrendingUp size={20} className="text-accent-500" />
                <span className="font-semibold">Analytics Dashboard</span>
              </div>
              <div className="space-y-2">
                <div className="h-2 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full w-full"></div>
                <div className="h-2 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full w-5/6"></div>
                <div className="h-2 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full w-4/6"></div>
              </div>
              <p className="text-xs text-slate-500 dark:text-slate-400 mt-4">Real-time Performance Tracking</p>
            </motion.div>

            {/* Floating Card 2 - Attendance */}
            <motion.div
              animate={{ y: [0, 20, 0], x: [0, -6, 0] }}
              transition={{ duration: 5.4, repeat: Infinity, delay: 0.5, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="absolute top-48 left-0 w-64 glass rounded-2xl p-6 glow-effect"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Users size={20} className="text-primary-500" />
                <span className="font-semibold">Smart Attendance</span>
              </div>
              <div className="flex justify-around text-center">
                <div>
                  <p className="text-2xl font-bold text-primary-600 dark:text-primary-400">94%</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Accuracy</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-accent-600 dark:text-accent-400">2.5s</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Avg Time</p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 3 - AI */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 6, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1, ease: 'easeInOut' }}
              whileHover={{ scale: 1.03, rotate: 1 }}
              className="absolute bottom-0 right-12 w-64 glass rounded-2xl p-6 glow-effect"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Brain size={20} className="text-accent-500" />
                <span className="font-semibold">AI Insights</span>
              </div>
              <p className="text-sm mb-4">Predictive performance analysis powered by machine learning</p>
              <div className="flex gap-2">
                <span className="px-3 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-xs rounded-full">ML Enabled</span>
                <span className="px-3 py-1 bg-accent-100 dark:bg-accent-900/30 text-accent-700 dark:text-accent-300 text-xs rounded-full">Real-time</span>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
