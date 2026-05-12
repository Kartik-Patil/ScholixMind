import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, ArrowRight } from 'lucide-react';

export default function Contact() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8" id="contact">
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
              Transform Education with <span className="gradient-text">Scholix Mind</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="section-subtitle max-w-2xl mx-auto"
            >
              Ready to revolutionize your institution? Get in touch with our team today.
            </motion.p>
          </div>

          {/* Main CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass rounded-3xl p-12 lg:p-16 glow-effect relative overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 via-transparent to-accent-500/5 pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
              {/* Left - Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <div>
                  <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
                  <p className="text-slate-600 dark:text-slate-400">
                    Schedule a demo, get pricing information, or discuss your specific needs with our team.
                  </p>
                </div>

                <div className="space-y-6">
                  {[
                    {
                      icon: Mail,
                      label: 'Email',
                      value: 'hello@scholixmind.com',
                      href: 'mailto:hello@scholixmind.com',
                    },
                    {
                      icon: Phone,
                      label: 'Phone',
                      value: '+91 (800) 123-4567',
                      href: 'tel:+918001234567',
                    },
                    {
                      icon: MapPin,
                      label: 'Location',
                      value: 'Bangalore, India',
                      href: '#',
                    },
                  ].map((contact, i) => {
                    const Icon = contact.icon;
                    return (
                      <motion.a
                        key={i}
                        href={contact.href}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                          <Icon size={20} className="text-white" />
                        </div>
                        <div className="group-hover:translate-x-1 transition-transform">
                          <p className="text-sm text-slate-600 dark:text-slate-400">{contact.label}</p>
                          <p className="font-semibold text-slate-900 dark:text-white">{contact.value}</p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Quick Links */}
                <div className="flex flex-wrap gap-3 pt-4">
                  {['Book a Demo', 'Contact Sales', 'See Pricing'].map((link, i) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.05 }}
                      className="px-4 py-2 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-lg text-sm font-semibold hover:bg-primary-200 dark:hover:bg-primary-900/50 transition-colors"
                    >
                      {link}
                    </motion.button>
                  ))}
                </div>
              </motion.div>

              {/* Right - Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="space-y-4"
              >
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                <input
                  type="text"
                  placeholder="Institution Name"
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all"
                />
                <select className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all">
                  <option>Select a product</option>
                  <option>EduAttend</option>
                  <option>EduPilot</option>
                  <option>CETup</option>
                  <option>All Products</option>
                </select>
                <textarea
                  placeholder="Tell us about your needs..."
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-600 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all resize-none"
                ></textarea>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-primary flex items-center justify-center gap-2 group"
                >
                  Send Message
                  <Send size={18} className="group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-primary flex items-center justify-center gap-2"
            >
              Book a Demo
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="btn-secondary flex items-center justify-center gap-2"
            >
              Request Trial
              <ArrowRight size={18} />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
