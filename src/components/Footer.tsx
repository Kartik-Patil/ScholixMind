import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const columns = [
    {
      title: 'Products',
      links: ['EduAttend', 'EduPilot', 'CETup', 'Pricing', 'All Features'],
    },
    {
      title: 'Company',
      links: ['About Us', 'Blog', 'Careers', 'Press', 'Contact'],
    },
    {
      title: 'Resources',
      links: ['Documentation', 'API Docs', 'Help Center', 'Community', 'Status'],
    },
    {
      title: 'Legal',
      links: ['Privacy Policy', 'Terms of Service', 'Security', 'Compliance', 'Cookies'],
    },
  ];

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Mail, href: '#', label: 'Email' },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900 text-slate-400 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">S</span>
                </div>
                <span className="font-bold text-lg text-white">Scholix Mind</span>
              </div>
              <p className="text-sm text-slate-500 mb-4">
                Transforming education through AI-powered academic ecosystems.
              </p>
              <div className="flex gap-3">
                {socialLinks.map((social, i) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={i}
                      href={social.href}
                      whileHover={{ scale: 1.1 }}
                      className="w-9 h-9 rounded-lg bg-slate-800 hover:bg-gradient-to-br hover:from-primary-500 hover:to-accent-500 flex items-center justify-center transition-all duration-300 group"
                    >
                      <Icon size={18} className="text-slate-400 group-hover:text-white" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Footer Links */}
            {columns.map((column, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: (i + 1) * 0.1 }}
              >
                <h4 className="font-semibold text-white mb-4">{column.title}</h4>
                <ul className="space-y-2">
                  {column.links.map((link, j) => (
                    <li key={j}>
                      <a href="#" className="text-sm hover:text-white transition-colors duration-300">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Divider */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            className="h-px bg-gradient-to-r from-slate-700 via-slate-600 to-slate-700 my-8"
          ></motion.div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-center gap-6"
          >
            <div className="flex items-center gap-2 text-sm">
              <span>© {currentYear} Scholix Mind. All rights reserved.</span>
              <span className="flex items-center gap-1">
                Made with
                <Heart size={14} className="text-red-500 fill-red-500" />
                for education
              </span>
            </div>

            {/* Quick Links */}
            <div className="flex flex-wrap gap-6 text-sm">
              {['Security', 'Privacy', 'Terms', 'Cookies', 'Status'].map((link, i) => (
                <a key={i} href="#" className="hover:text-white transition-colors duration-300">
                  {link}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="border-t border-slate-800 py-8"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-semibold text-white mb-1">Stay Updated</h4>
                <p className="text-sm text-slate-500">Get the latest updates and announcements</p>
              </div>
              <div className="flex gap-2 flex-1 md:flex-none md:w-80">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 focus:outline-none focus:border-primary-500 text-white placeholder-slate-500 transition-colors"
                />
                <button className="px-6 py-2 bg-gradient-to-r from-primary-600 to-accent-500 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-primary-600/50 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
