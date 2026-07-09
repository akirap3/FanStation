import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactHud from './components/ContactHud';
import HiringModal from './components/HiringModal';
import Preloader from './components/Preloader';
import CosmicBackground from './components/CosmicBackground';
import Navbar from './components/Navbar';
import ResumeModal from './components/ResumeModal';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHiringOpen, setIsHiringOpen] = useState(false);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(nextTheme);
    localStorage.setItem('theme', nextTheme);
  };

  const handleExploreScroll = () => {
    const expertiseSection = document.getElementById('expertise');
    if (expertiseSection) {
      expertiseSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="bg-obsidian text-text-primary min-h-screen relative font-body overflow-x-hidden selection:bg-accent-cyan/30 selection:text-accent-cyan">
      
      <AnimatePresence mode="wait">
        {loading ? (
          <Preloader onComplete={() => setLoading(false)} />
        ) : (
          <motion.main
            key="main"
            className="relative min-h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Cosmic Background Layer - Large Floating Planets */}
            <CosmicBackground theme={theme} />

            {/* Global navigation overlays */}
            <Navbar 
              theme={theme}
              toggleTheme={toggleTheme}
              onAvailabilityClick={() => setIsHiringOpen(true)}
              onResumeClick={() => setIsResumeOpen(true)}
            />

            {/* Sections */}
            <Hero onExploreClick={handleExploreScroll} onContactClick={() => setIsContactOpen(true)} />
            <Skills />
            <Projects />
            <Footer />

            {/* Cyber Comms Drawer HUD */}
            <ContactHud isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            {/* Recruiter Hiring Telemetry Dialog */}
            <HiringModal isOpen={isHiringOpen} onClose={() => setIsHiringOpen(false)} onContactClick={() => setIsContactOpen(true)} />

            {/* Resume Immersive PDF Viewer Dialog */}
            <ResumeModal isOpen={isResumeOpen} onClose={() => setIsResumeOpen(false)} />
          </motion.main>
        )}
      </AnimatePresence>

    </div>
  );
}
