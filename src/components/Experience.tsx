import { motion } from 'framer-motion';
import { MonitorPlay, Smartphone, Tablet, BarChart4 } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Experience() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground variant="secondary" intensity="low" animated />
      
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
              Platform <span className="gradient-text">Experience</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              Modern, intuitive dashboards designed for seamless user experience
            </motion.p>
          </div>

          {/* Device Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left - Desktop Preview */}
            <motion.div
              initial={{ opacity: 0, x: -48, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-6"
            >
              <motion.div whileHover={{ y: -6, scale: 1.01 }} className="glass rounded-2xl p-8 glow-effect">
                <div className="flex items-center gap-2 mb-4">
                  <MonitorPlay size={20} className="text-primary-500" />
                  <span className="font-semibold">Desktop Dashboard</span>
                </div>
                <div className="space-y-3">
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '100%' }} viewport={{ once: true }} transition={{ duration: 1.1 }} className="h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full w-full" />
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '83%' }} viewport={{ once: true }} transition={{ duration: 1.15, delay: 0.1 }} className="h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full w-5/6" />
                  <motion.div initial={{ width: 0 }} whileInView={{ width: '66%' }} viewport={{ once: true }} transition={{ duration: 1.2, delay: 0.2 }} className="h-4 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full w-4/6" />
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.15 }} className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg" />
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.25 }} className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg" />
                  </div>
                </div>
              </motion.div>

              <motion.div whileHover={{ y: -4 }} className="glass rounded-2xl p-6 glow-effect">
                <h4 className="font-bold mb-4">Desktop Features</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'Full analytics dashboard',
                    'Advanced filtering & sorting',
                    'Bulk operations',
                    'Custom reports generation',
                  ].map((feat, i) => (
                    <motion.li key={i} initial={{ opacity: 0, x: -8 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                      {feat}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </motion.div>

            {/* Right - Mobile & Tablet */}
            <motion.div
              initial={{ opacity: 0, x: 48, scale: 0.98 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
              className="space-y-6"
            >
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Smartphone, title: 'Mobile App', desc: 'Full-featured mobile experience' },
                  { icon: Tablet, title: 'Tablet', desc: 'Optimized tablet interface' },
                ].map((device, i) => {
                  const Icon = device.icon;
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20, scale: 0.98 }}
                      whileInView={{ opacity: 1, y: 0, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * (i + 1), duration: 0.55 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                      className="glass rounded-2xl p-6 glow-effect"
                    >
                      <Icon size={24} className="text-accent-500 mb-2" />
                      <h4 className="font-bold text-sm">{device.title}</h4>
                      <p className="text-xs text-slate-600 dark:text-slate-400">{device.desc}</p>
                    </motion.div>
                  );
                })}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 24, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                whileHover={{ y: -6 }}
                className="glass rounded-2xl p-8 glow-effect"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BarChart4 size={20} className="text-primary-500" />
                  <span className="font-semibold">Responsive Analytics</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <motion.div initial={{ scaleY: 0.7, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.05 }} className="flex-1 h-16 bg-gradient-to-t from-primary-500 to-primary-300 rounded-lg origin-bottom" />
                    <motion.div initial={{ scaleY: 0.7, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.12 }} className="flex-1 h-20 bg-gradient-to-t from-accent-500 to-accent-300 rounded-lg origin-bottom" />
                    <motion.div initial={{ scaleY: 0.7, opacity: 0 }} whileInView={{ scaleY: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.19 }} className="flex-1 h-12 bg-gradient-to-t from-primary-400 to-primary-200 rounded-lg origin-bottom" />
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Real-time data visualization</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Browser Compatibility */}
            <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} whileHover={{ y: -4 }} className="glass rounded-2xl p-8 glow-effect">
            <h3 className="text-xl font-bold mb-6 text-center">Works on All Devices</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Chrome', 'Firefox', 'Safari', 'Edge'].map((browser, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-4 rounded-lg bg-slate-50 dark:bg-slate-800/50"
                >
                  <p className="font-semibold text-sm">{browser}</p>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Optimized</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
