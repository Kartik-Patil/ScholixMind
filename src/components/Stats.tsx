import { motion } from 'framer-motion';
import { BarChart3, Users, Zap, TrendingUp } from 'lucide-react';

export default function Stats() {
  const stats = [
    { icon: Users, label: 'Active Students', value: '10,000+', color: 'from-primary-500 to-primary-600' },
    { icon: BarChart3, label: 'Institutions', value: '100+', color: 'from-accent-500 to-accent-600' },
    { icon: Zap, label: 'Attendance Records', value: '1M+', color: 'from-primary-400 to-accent-500' },
    { icon: TrendingUp, label: 'Success Rate', value: '99.9%', color: 'from-accent-400 to-primary-500' },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass rounded-2xl p-8 glow-effect group hover:glow-effect transition-all duration-300 hover:-translate-y-2"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon size={24} className="text-white" />
                </div>
                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">{stat.label}</p>
                <p className="text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                  {stat.value}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 bg-gradient-to-r from-transparent via-primary-500 to-transparent my-12"
        ></motion.div>

        {/* Institution Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="text-slate-600 dark:text-slate-400 mb-8 font-semibold">Trusted by leading institutions worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 opacity-60 hover:opacity-100 transition-opacity">
            {['MIT', 'Stanford', 'Harvard', 'Oxford', 'Cambridge'].map((name, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.1 }}
                className="glass rounded-lg p-4 text-center"
              >
                <p className="font-bold text-primary-600 dark:text-primary-400">{name}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
