import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import AnimatedBackground from './AnimatedBackground';

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Student, Mumbai',
      testimonial:
        'CETup completely changed my exam preparation. The AI-powered insights helped me identify weak areas instantly, and I improved my score by 35 points!',
      avatar: '👩‍🎓',
      rating: 5,
    },
    {
      name: 'Dr. Rajesh Kumar',
      role: 'Principal, Delhi College',
      testimonial:
        'EduPilot streamlined our entire attendance and academic management. The system saves us hours every week, and our faculty loves the dashboard.',
      avatar: '👨‍🏫',
      rating: 5,
    },
    {
      name: 'Aisha Patel',
      role: 'HOD Computer Science',
      testimonial:
        'EduAttend is incredibly intuitive. Our attendance tracking is now 100% accurate, and parents receive instant notifications. A game-changer!',
      avatar: '👩‍💼',
      rating: 5,
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      <AnimatedBackground variant="accent" intensity="medium" animated />
      
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
              What Users <span className="gradient-text">Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              Real stories from students, educators, and institutional leaders
            </motion.p>
          </div>

          {/* Testimonials Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {testimonials.map((testimonial, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 26, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="glass rounded-2xl p-8 glow-effect group transition-all duration-300"
              >
                {/* Quote Icon */}
                <motion.div animate={{ rotate: [0, -4, 0] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}>
                  <Quote size={32} className="text-primary-500/20 mb-4 group-hover:text-primary-500/40 transition-colors" />
                </motion.div>

                {/* Testimonial Text */}
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, j) => (
                    <motion.div key={j} initial={{ scale: 0.8, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.06 * j }}>
                      <Star size={16} className="fill-accent-500 text-accent-500" />
                    </motion.div>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 border-t border-slate-200 dark:border-slate-700 pt-4">
                  <motion.div whileHover={{ scale: 1.1, rotate: 4 }} className="text-3xl">{testimonial.avatar}</motion.div>
                  <div>
                    <p className="font-bold">{testimonial.name}</p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Social Proof */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="glass rounded-2xl p-8 glow-effect"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {[
                { number: '4.9/5', label: 'Average Rating' },
                { number: '1000+', label: 'Positive Reviews' },
                { number: '98%', label: 'Satisfaction Rate' },
                { number: '24/7', label: 'Support Available' },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9, y: 8 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                >
                  <p className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">
                    {stat.number}
                  </p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
