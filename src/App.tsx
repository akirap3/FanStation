import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cliLogs, setCliLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const floatingTags = [
    'Angular 18', 'React 19', 'CCNP Certified', 'Google Gemini',
    'Python', 'TypeScript', 'Supabase', 'Docker',
    'IndexedDB', 'WebSockets', 'TailwindCSS', 'Zabbix'
  ];

  const logSequence = [
    '>> INITIALIZING ANTIGRAVITY ENGINE...',
    '>> LOADING RESUME: Ming_Hung_Fan_Resume.pdf',
    '>> PARSING frontend_architect_profile.json',
    '>> DETECTED: 4 major career eras, 22 technical nodes',
    '>> COMPILING core technical stack...',
    '>> SYSTEM READY. BOOTING FRONTEND INTERFACE.'
  ];

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < logSequence.length) {
        setCliLogs((prev) => [...prev, logSequence[logIndex]]);
        logIndex++;
      } else {
        clearInterval(logInterval);
        // Add a small delay for cinematic transition after logs complete
        setTimeout(() => {
          setLoading(false);
        }, 1200);
      }
    }, 450);

    return () => clearInterval(logInterval);
  }, []);

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
          <motion.div
            key="preloader"
            className="fixed inset-0 z-50 bg-obsidian flex flex-col items-center justify-center overflow-hidden px-6"
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
            }}
          >
            {/* Ambient glows behind preloader */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full glow-cyan opacity-[0.04] blur-[80px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full glow-violet opacity-[0.03] blur-[100px]"></div>

            {/* Zero-gravity Floating Particles/Tags */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {floatingTags.map((tag, idx) => {
                // Distribute tags across bottom, drifting upwards
                const randomX = 10 + (idx * 7) % 80; // 10% to 90%
                const delay = idx * 0.25;
                const duration = 6 + (idx % 3) * 1.5;
                
                return (
                  <motion.div
                    key={tag}
                    className="absolute font-mono text-[9px] sm:text-xs text-text-secondary/45 bg-obsidian-card/45 border border-obsidian-border/30 px-2.5 py-1 rounded backdrop-blur-sm select-none"
                    style={{ left: `${randomX}%`, bottom: '-5%' }}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                      y: '-110vh',
                      opacity: [0, 0.7, 0.7, 0],
                      x: [0, (idx % 2 === 0 ? 30 : -30), (idx % 2 === 0 ? -20 : 20)]
                    }}
                    transition={{
                      duration: duration,
                      delay: delay,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  >
                    {tag}
                  </motion.div>
                );
              })}
            </div>

            {/* Assembling Logo/Core */}
            <div className="relative z-10 flex flex-col items-center max-w-lg w-full space-y-10">
              
              {/* Spinning Core Visual */}
              <div className="relative w-20 h-20">
                <motion.div 
                  className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-2 rounded-full border border-accent-violet/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-6 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-violet opacity-80 blur-[2px]"
                  animate={{ scale: [0.9, 1.15, 0.9] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Console log box */}
              <div className="w-full max-w-md bg-obsidian-card/80 border border-obsidian-border p-5 rounded-lg font-mono text-[10px] sm:text-xs text-left shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between text-text-secondary/50 border-b border-obsidian-border/50 pb-2 mb-3 select-none">
                  <span>TERMINAL OUTPUT</span>
                  <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
                </div>
                
                <div ref={scrollRef} className="space-y-2 max-h-[140px] overflow-y-auto">
                  {cliLogs.map((log, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.15 }}
                      className={idx === cliLogs.length - 1 ? 'text-accent-cyan' : 'text-text-secondary'}
                    >
                      {log}
                    </motion.div>
                  ))}
                </div>
              </div>

            </div>

          </motion.div>
        ) : (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Global navigation overlay/indicator */}
            <div className="fixed top-6 right-6 z-40">
              <a 
                href="/Ming_Hung_Fan_Resume.pdf"
                target="_blank"
                className="glass-card hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300 font-mono text-[10px] tracking-widest uppercase px-4 py-2 rounded-full flex items-center gap-1.5"
              >
                <span>Resume PDF</span>
                <span className="w-1 h-1 rounded-full bg-accent-cyan"></span>
              </a>
            </div>

            {/* Sections */}
            <Hero onExploreClick={handleExploreScroll} />
            <Skills />
            <Projects />
            <Footer />
          </motion.main>
        )}
      </AnimatePresence>

    </div>
  );
}
