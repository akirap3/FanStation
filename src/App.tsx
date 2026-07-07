import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactHud from './components/ContactHud';
import { Sun, Moon } from 'lucide-react';

interface PlanetConfig {
  id: string;
  size: number;
  top: string;
  left?: string;
  right?: string;
  hasRings: boolean;
  ringAngle: number;
  hasSatellite?: boolean;
  gradientType: 'saturn' | 'mars' | 'neptune' | 'jupiter';
  floatAnim: 'saturn' | 'mars';
  spinSpeed: number;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cliLogs, setCliLogs] = useState<string[]>([]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const saved = localStorage.getItem('theme');
    return (saved === 'light' || saved === 'dark') ? saved : 'dark';
  });
  const scrollRef = useRef<HTMLDivElement | null>(null);

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

  const planets: PlanetConfig[] = [
    {
      id: 'saturn-hero',
      size: 480,
      top: '4%',
      right: '-8%',
      hasRings: true,
      ringAngle: -15,
      hasSatellite: true,
      gradientType: 'saturn',
      floatAnim: 'saturn',
      spinSpeed: 160
    },
    {
      id: 'mars-transition',
      size: 350,
      top: '26%',
      left: '-7%',
      hasRings: false,
      ringAngle: 25,
      gradientType: 'mars',
      floatAnim: 'mars',
      spinSpeed: 200
    },
    {
      id: 'neptune-skills',
      size: 420,
      top: '48%',
      right: '-10%',
      hasRings: true,
      ringAngle: 15,
      hasSatellite: false,
      gradientType: 'neptune',
      floatAnim: 'saturn',
      spinSpeed: 180
    },
    {
      id: 'jupiter-projects',
      size: 380,
      top: '70%',
      left: '-6%',
      hasRings: false,
      ringAngle: -20,
      gradientType: 'jupiter',
      floatAnim: 'mars',
      spinSpeed: 220
    },
    {
      id: 'saturn-footer',
      size: 440,
      top: '88%',
      right: '-8%',
      hasRings: true,
      ringAngle: -12,
      hasSatellite: true,
      gradientType: 'saturn',
      floatAnim: 'saturn',
      spinSpeed: 150
    }
  ];

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
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full glow-cyan opacity-[0.05] blur-[80px]"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full glow-violet opacity-[0.04] blur-[100px]"></div>

            {/* Zero-gravity Floating Particles/Tags */}
            <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
              {floatingTags.map((tag, idx) => {
                const randomX = 10 + (idx * 7) % 80;
                const delay = idx * 0.25;
                const duration = 6 + (idx % 3) * 1.5;
                
                return (
                  <motion.div
                    key={tag}
                    className="absolute font-mono text-[9px] sm:text-xs text-text-secondary/70 bg-obsidian-card/90 border border-obsidian-border/60 px-2.5 py-1 rounded backdrop-blur-sm select-none shadow-sm"
                    style={{ left: `${randomX}%`, bottom: '-5%' }}
                    initial={{ y: 0, opacity: 0 }}
                    animate={{
                      y: '-110vh',
                      opacity: [0, 0.75, 0.75, 0],
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
              
              {/* Spinning Core Visual (Polished Theme-Aware Gravity Core) */}
              <div className="relative w-24 h-24">
                <motion.div 
                  className="absolute inset-0 rounded-full border border-dashed border-accent-cyan/40"
                  animate={{ rotate: 360 }}
                  transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-2 rounded-full border border-accent-violet/30"
                  animate={{ rotate: -360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                />
                <motion.div 
                  className="absolute inset-6 rounded-full bg-gradient-to-tr from-accent-cyan to-accent-violet opacity-90 blur-[1px] shadow-[0_0_25px_var(--accent-cyan-glow)]"
                  animate={{ scale: [0.85, 1.1, 0.85] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                />
              </div>

              {/* Console log box */}
              <div className="w-full max-w-md bg-obsidian-card/90 border border-obsidian-border p-5 rounded-lg font-mono text-[10px] sm:text-xs text-left shadow-2xl backdrop-blur-md">
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
                      className={idx === cliLogs.length - 1 ? 'text-accent-cyan font-semibold' : 'text-text-secondary/80'}
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
            className="relative min-h-screen overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Cosmic Background Layer - Large Floating Planets */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
              {planets.map((planet) => {
                const ringGradId = `ring-grad-${planet.id}`;
                const bodyGradId = `body-grad-${planet.id}`;
                
                const positionStyle: React.CSSProperties = {
                  width: `${planet.size}px`,
                  height: `${planet.size}px`,
                  top: planet.top,
                  ...(planet.left ? { left: planet.left } : {}),
                  ...(planet.right ? { right: planet.right } : {}),
                };

                return (
                  <div
                    key={planet.id}
                    className={`absolute pointer-events-none select-none opacity-[0.15] dark:opacity-[0.09] ${
                      planet.floatAnim === 'saturn' ? 'animate-float-saturn' : 'animate-float-mars'
                    }`}
                    style={positionStyle}
                  >
                    <svg
                      viewBox="0 0 200 200"
                      className="w-full h-full"
                      style={{
                        transform: `rotate(${planet.ringAngle}deg)`,
                        animation: `spin-slow ${planet.spinSpeed}s linear infinite`
                      }}
                    >
                      <defs>
                        <linearGradient id={bodyGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                          {planet.gradientType === 'saturn' && (
                            <>
                              <stop offset="0%" stopColor="var(--saturn-body-start)" />
                              <stop offset="100%" stopColor="var(--saturn-body-end)" />
                            </>
                          )}
                          {planet.gradientType === 'mars' && (
                            <>
                              <stop offset="0%" stopColor="var(--mars-body-start)" />
                              <stop offset="100%" stopColor="var(--mars-body-end)" />
                            </>
                          )}
                          {planet.gradientType === 'neptune' && (
                            <>
                              <stop offset="0%" stopColor="var(--neptune-body-start)" />
                              <stop offset="100%" stopColor="var(--neptune-body-end)" />
                            </>
                          )}
                          {planet.gradientType === 'jupiter' && (
                            <>
                              <stop offset="0%" stopColor="var(--jupiter-body-start)" />
                              <stop offset="100%" stopColor="var(--jupiter-body-end)" />
                            </>
                          )}
                        </linearGradient>
                        
                        <linearGradient id={ringGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="var(--saturn-ring-start)" stopOpacity="0.8" />
                          <stop offset="50%" stopColor="var(--saturn-ring-mid)" stopOpacity="0.1" />
                          <stop offset="100%" stopColor="var(--saturn-ring-end)" stopOpacity="0.8" />
                        </linearGradient>
                      </defs>

                      {/* Back half of the ring */}
                      {planet.hasRings && (
                        <path
                          d="M 10,100 A 90,20 0 0,1 190,100"
                          fill="none"
                          stroke={`url(#${ringGradId})`}
                          strokeWidth="8"
                          strokeLinecap="round"
                          opacity="0.35"
                        />
                      )}

                      {/* Planet sphere */}
                      <circle cx="100" cy="100" r="46" fill={`url(#${bodyGradId})`} />

                      {/* Topographic details */}
                      {(planet.gradientType === 'mars' || planet.gradientType === 'jupiter') && (
                        <>
                          <path d="M 58,70 Q 100,77 142,70" fill="none" stroke="var(--mars-stripe)" strokeWidth="1.8" opacity="0.3" strokeLinecap="round" />
                          <path d="M 54,100 Q 100,109 146,100" fill="none" stroke="var(--mars-stripe)" strokeWidth="2.2" opacity="0.25" strokeLinecap="round" />
                          <path d="M 58,130 Q 100,137 142,130" fill="none" stroke="var(--mars-stripe)" strokeWidth="1.5" opacity="0.3" strokeLinecap="round" />
                        </>
                      )}

                      {/* Front half of the ring */}
                      {planet.hasRings && (
                        <path
                          d="M 190,100 A 90,20 0 0,1 10,100"
                          fill="none"
                          stroke={`url(#${ringGradId})`}
                          strokeWidth="8"
                          strokeLinecap="round"
                        />
                      )}

                      {/* Satellite Orbit Dot */}
                      {planet.hasSatellite && (
                        <>
                          <circle cx="100" cy="100" r="75" fill="none" stroke="var(--border-color)" strokeWidth="0.8" strokeDasharray="3 3" opacity="0.5" />
                          <circle cx="28" cy="100" r="4.5" fill="var(--accent-cyan)" />
                          <line x1="28" y1="100" x2="54" y2="100" stroke="var(--border-color)" strokeWidth="0.8" opacity="0.6" />
                        </>
                      )}
                    </svg>
                  </div>
                );
              })}
            </div>

            {/* Global navigation overlay/indicator */}
            <div className="fixed top-6 right-6 z-40 flex items-center gap-3">
              <button
                onClick={toggleTheme}
                className="glass-card hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300 p-2.5 rounded-full flex items-center justify-center text-text-primary"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="w-4 h-4" />
                ) : (
                  <Moon className="w-4 h-4" />
                )}
              </button>

              <a 
                href="/Ming_Hung_Fan_Resume.pdf"
                target="_blank"
                className="glass-card hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300 font-mono text-[10px] tracking-widest uppercase px-4 py-2.5 rounded-full flex items-center gap-1.5"
              >
                <span>Resume PDF</span>
                <span className="w-1 h-1 rounded-full bg-accent-cyan"></span>
              </a>
            </div>

            {/* Sections */}
            <Hero onExploreClick={handleExploreScroll} onContactClick={() => setIsContactOpen(true)} />
            <Skills />
            <Projects />
            <Footer />

            {/* Cyber Comms Drawer HUD */}
            <ContactHud isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
          </motion.main>
        )}
      </AnimatePresence>

    </div>
  );
}
