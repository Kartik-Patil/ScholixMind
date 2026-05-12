import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Products from './components/Products';
import WhyChoose from './components/WhyChoose';
import Experience from './components/Experience';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

export default function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 text-slate-900 dark:text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-primary-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-primary-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main>
        <Hero />
        <Stats />
        <About />
        <Products />
        <WhyChoose />
        <Experience />
        <Roadmap />
        <Testimonials />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
