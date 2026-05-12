import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: 'Products', href: '#products' },
    { name: 'Features', href: '#features' },
    { name: 'Roadmap', href: '#roadmap' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/50 dark:bg-slate-900/50 border-b border-slate-200/50 dark:border-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center space-x-2 group cursor-pointer"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-500 rounded-lg flex items-center justify-center group-hover:shadow-lg group-hover:shadow-primary-500/50 transition-all duration-300">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-primary-600 to-accent-500 bg-clip-text text-transparent">Scholix Mind</span>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.a
                key={item.name}
                href={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors duration-300 font-medium"
              >
                {item.name}
              </motion.a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="btn-secondary"
            >
              Sign In
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="btn-primary"
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-slate-200 dark:border-slate-700 py-4 space-y-2"
            >
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-4 py-2 rounded-lg text-slate-700 dark:text-slate-300 hover:bg-primary-100 dark:hover:bg-primary-900/30"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex gap-2 pt-2">
                <button className="btn-secondary w-full">Sign In</button>
                <button className="btn-primary w-full">Get Started</button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
