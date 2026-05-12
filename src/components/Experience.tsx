import { motion } from 'framer-motion';
import { MonitorPlay, Smartphone, Tablet, BarChart4 } from 'lucide-react';

export default function Experience() {
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
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="glass rounded-2xl p-8 glow-effect">
                <div className="flex items-center gap-2 mb-4">
                  <MonitorPlay size={20} className="text-primary-500" />
                  <span className="font-semibold">Desktop Dashboard</span>
                </div>
                <div className="space-y-3">
                  <div className="h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full w-full"></div>
                  <div className="h-4 bg-gradient-to-r from-primary-400 to-accent-400 rounded-full w-5/6"></div>
                  <div className="h-4 bg-gradient-to-r from-primary-300 to-accent-300 rounded-full w-4/6"></div>
                  <div className="grid grid-cols-2 gap-2 mt-6">
                    <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
                    <div className="h-12 bg-slate-200 dark:bg-slate-700 rounded-lg"></div>
                  </div>
                </div>
              </div>

              <div className="glass rounded-2xl p-6 glow-effect">
                <h4 className="font-bold mb-4">Desktop Features</h4>
                <ul className="space-y-2 text-sm">
                  {[
                    'Full analytics dashboard',
                    'Advanced filtering & sorting',
                    'Bulk operations',
                    'Custom reports generation',
                  ].map((feat, i) => (
                    <li key={i} className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                      <span className="w-1.5 h-1.5 bg-accent-500 rounded-full"></span>
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>

            {/* Right - Mobile & Tablet */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
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
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 * (i + 1) }}
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="glass rounded-2xl p-8 glow-effect"
              >
                <div className="flex items-center gap-2 mb-4">
                  <BarChart4 size={20} className="text-primary-500" />
                  <span className="font-semibold">Responsive Analytics</span>
                </div>
                <div className="space-y-4">
                  <div className="flex gap-2">
                    <div className="flex-1 h-16 bg-gradient-to-t from-primary-500 to-primary-300 rounded-lg"></div>
                    <div className="flex-1 h-20 bg-gradient-to-t from-accent-500 to-accent-300 rounded-lg"></div>
                    <div className="flex-1 h-12 bg-gradient-to-t from-primary-400 to-primary-200 rounded-lg"></div>
                  </div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Real-time data visualization</p>
                </div>
              </motion.div>
            </motion.div>
          </div>

          {/* Browser Compatibility */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 glow-effect"
          >
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
