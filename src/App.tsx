import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import ContactHud from './components/ContactHud';
import HiringModal from './components/HiringModal';
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
  gradientType: 'earth' | 'saturn' | 'uranus';
  floatAnim: 'saturn' | 'mars';
  spinSpeed: number;
}

export default function App() {
  const [loading, setLoading] = useState(true);
  const [cliLogs, setCliLogs] = useState<string[]>([]);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [isHiringOpen, setIsHiringOpen] = useState(false);
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

  const themeColors = {
    dark: {
      bodyStart: '#1E1B4B',
      bodyEnd: '#0F172A',
      accentViolet: '#9D4EDD',
      accentCyan: '#00F5D4',
      strokeColor: '#9D4EDD',
      ringStroke: '#00F5D4',
      cloudsColor: 'rgba(0, 245, 212, 0.4)',
    },
    light: {
      bodyStart: '#DBEAFE',
      bodyEnd: '#C7D2FE',
      accentViolet: '#7C3AED',
      accentCyan: '#0D9488',
      strokeColor: '#7C3AED',
      ringStroke: '#0D9488',
      cloudsColor: 'rgba(13, 148, 136, 0.4)',
    }
  }[theme];

  const planets: PlanetConfig[] = [
    {
      id: 'uranus-hero-1',
      size: 420,
      top: '4%',
      right: '-8%',
      hasRings: false,
      ringAngle: -15,
      hasSatellite: true,
      gradientType: 'uranus',
      floatAnim: 'saturn',
      spinSpeed: 180
    },
    {
      id: 'saturn-hero-2',
      size: 360,
      top: '18%',
      left: '-7%',
      hasRings: true,
      ringAngle: 25,
      gradientType: 'saturn',
      floatAnim: 'mars',
      spinSpeed: 150
    },
    {
      id: 'earth-skills-1',
      size: 440,
      top: '29%',
      right: '-10%',
      hasRings: false,
      ringAngle: -10,
      hasSatellite: true,
      gradientType: 'earth',
      floatAnim: 'saturn',
      spinSpeed: 200
    },
    {
      id: 'uranus-skills-2',
      size: 480,
      top: '42%',
      left: '-12%',
      hasRings: false,
      ringAngle: 15,
      gradientType: 'uranus',
      floatAnim: 'mars',
      spinSpeed: 220
    },
    {
      id: 'uranus-projects-1',
      size: 350,
      top: '55%',
      right: '-7%',
      hasRings: false,
      ringAngle: -20,
      gradientType: 'uranus',
      floatAnim: 'saturn',
      spinSpeed: 170
    },
    {
      id: 'saturn-projects-2',
      size: 460,
      top: '67%',
      left: '-9%',
      hasRings: true,
      ringAngle: 30,
      hasSatellite: true,
      gradientType: 'saturn',
      floatAnim: 'mars',
      spinSpeed: 140
    },
    {
      id: 'earth-projects-3',
      size: 380,
      top: '76%',
      right: '-8%',
      hasRings: false,
      ringAngle: -25,
      gradientType: 'earth',
      floatAnim: 'saturn',
      spinSpeed: 210
    },
    {
      id: 'earth-footer-1',
      size: 450,
      top: '85%',
      left: '-8%',
      hasRings: false,
      ringAngle: -15,
      hasSatellite: true,
      gradientType: 'earth',
      floatAnim: 'mars',
      spinSpeed: 240
    },
    {
      id: 'saturn-footer-2',
      size: 400,
      top: '93%',
      right: '-8%',
      hasRings: true,
      ringAngle: -18,
      hasSatellite: true,
      gradientType: 'saturn',
      floatAnim: 'saturn',
      spinSpeed: 160
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

                const bodySeaGradId = `body-sea-grad-${planet.id}`;

                return (
                  <div
                    key={planet.id}
                    className={`absolute pointer-events-none select-none opacity-[0.16] dark:opacity-[0.11] ${
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
                        {/* Sea/Body Gradient for Earth & Gas Planets */}
                        <linearGradient id={bodySeaGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={themeColors.bodyStart} />
                          <stop offset="100%" stopColor={themeColors.bodyEnd} />
                        </linearGradient>

                        {/* General Planet Body Gradient */}
                        <linearGradient id={bodyGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={themeColors.bodyStart} />
                          <stop offset="100%" stopColor={themeColors.bodyEnd} />
                        </linearGradient>
                        
                        {/* Rings Gradient */}
                        <linearGradient id={ringGradId} x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor={themeColors.ringStroke} stopOpacity="0.85" />
                          <stop offset="50%" stopColor={themeColors.bodyStart} stopOpacity="0.15" />
                          <stop offset="100%" stopColor={themeColors.ringStroke} stopOpacity="0.85" />
                        </linearGradient>
                      </defs>

                      {/* --- EARTH TEMPLATE --- */}
                      {planet.gradientType === 'earth' && (
                        <>
                          <circle cx="100" cy="100" r="48" fill={`url(#${bodySeaGradId})`} stroke={themeColors.strokeColor} strokeWidth="2.5" />
                          <path d="M 68,60 C 80,50 110,50 120,65 C 125,75 110,85 105,95 C 100,105 85,110 75,90 C 70,80 60,70 68,60 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                          <path d="M 85,110 C 95,100 115,105 125,120 C 130,130 115,140 100,138 C 90,135 80,120 85,110 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                          <path d="M 125,78 C 135,70 145,75 140,85 C 135,90 125,85 125,78 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                          <path d="M 52,90 C 60,85 62,98 56,105 C 50,110 48,95 52,90 Z" fill={themeColors.accentViolet} stroke={themeColors.strokeColor} strokeWidth="1.5" />
                          <path d="M 60,82 Q 100,75 140,82" fill="none" stroke={themeColors.cloudsColor} strokeWidth="3" strokeLinecap="round" />
                          <path d="M 54,115 Q 100,108 146,115" fill="none" stroke={themeColors.cloudsColor} strokeWidth="2.5" strokeLinecap="round" />
                        </>
                      )}

                      {/* --- SATURN TEMPLATE --- */}
                      {planet.gradientType === 'saturn' && (
                        <>
                          <path d="M 10,100 A 90,22 0 0,1 190,100" fill="none" stroke={`url(#${ringGradId})`} strokeWidth="9" strokeLinecap="round" opacity="0.35" />
                          <circle cx="100" cy="100" r="48" fill={`url(#${bodyGradId})`} stroke={themeColors.strokeColor} strokeWidth="2.5" />
                          <path d="M 58,85 Q 100,91 142,85" fill="none" stroke={themeColors.accentViolet} strokeWidth="3" strokeLinecap="round" />
                          <path d="M 53,100 Q 100,106 147,100" fill="none" stroke={themeColors.accentViolet} strokeWidth="4" strokeLinecap="round" />
                          <path d="M 58,115 Q 100,121 142,115" fill="none" stroke={themeColors.accentViolet} strokeWidth="2.5" strokeLinecap="round" />
                          <path d="M 190,100 A 90,22 0 0,1 10,100" fill="none" stroke={`url(#${ringGradId})`} strokeWidth="9" strokeLinecap="round" />
                        </>
                      )}

                      {/* --- URANUS TEMPLATE --- */}
                      {planet.gradientType === 'uranus' && (
                        <>
                          <circle cx="100" cy="100" r="48" fill={`url(#${bodyGradId})`} stroke={themeColors.strokeColor} strokeWidth="2.5" />
                          <path d="M 54,75 Q 100,82 146,75" fill="none" stroke={themeColors.accentViolet} strokeWidth="3" strokeLinecap="round" />
                          <path d="M 52,100 Q 100,107 148,100" fill="none" stroke={themeColors.accentViolet} strokeWidth="4" strokeLinecap="round" />
                          <path d="M 54,125 Q 100,132 146,125" fill="none" stroke={themeColors.accentViolet} strokeWidth="2.5" strokeLinecap="round" />
                        </>
                      )}

                      {/* Unified Orbit & Satellite Overlay */}
                      {planet.hasSatellite && (
                        <>
                          <circle cx="100" cy="100" r="76" fill="none" stroke={themeColors.accentCyan} strokeWidth="0.8" strokeDasharray="3 3" opacity="0.4" />
                          <circle cx="24" cy="100" r="4.5" fill={themeColors.accentCyan} />
                          <line x1="24" y1="100" x2="52" y2="100" stroke={themeColors.accentCyan} strokeWidth="0.8" opacity="0.5" />
                        </>
                      )}
                    </svg>
                  </div>
                );
              })}
            </div>

            {/* Global navigation overlays */}
            {/* Left side fixed availability badge */}
            <button 
              onClick={() => setIsHiringOpen(true)}
              className="fixed top-6 left-6 z-40 inline-flex items-center gap-2 px-3.5 py-2.5 rounded-full glass-card hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300 pointer-events-auto"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
              <span className="font-mono text-[9px] sm:text-[10px] tracking-widest uppercase text-text-secondary font-semibold">
                <span className="hidden sm:inline">Available for Opportunities</span>
                <span className="inline sm:hidden">Available</span>
              </span>
            </button>

            {/* Right side theme switcher & PDF resume */}
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
                <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
              </a>
            </div>

            {/* Sections */}
            <Hero onExploreClick={handleExploreScroll} onContactClick={() => setIsContactOpen(true)} />
            <Skills />
            <Projects />
            <Footer />

            {/* Cyber Comms Drawer HUD */}
            <ContactHud isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />

            {/* Recruiter Hiring Telemetry Dialog */}
            <HiringModal isOpen={isHiringOpen} onClose={() => setIsHiringOpen(false)} onContactClick={() => setIsContactOpen(true)} />
          </motion.main>
        )}
      </AnimatePresence>

    </div>
  );
}
