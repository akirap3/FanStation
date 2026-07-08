import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface PreloaderProps {
  onComplete: () => void;
}

const floatingTags = [
  'Angular 18', 'React 19', 'CCNP Certified', 'Google Gemini',
  'Python', 'TypeScript', 'Supabase', 'Docker',
  'IndexedDB', 'WebSockets', 'TailwindCSS', 'Zabbix'
];

const logSequence = [
  '>> INITIALIZING ANTIGRAVITY ENGINE...',
  '>> LOADING RESUME: Ming_Hung_Fan_Resume.pdf',
  '>> PARSING fullstack_architect_profile.json',
  '>> DETECTED: 4 major career eras, 22 technical nodes',
  '>> COMPILING core technical stack...',
  '>> SYSTEM READY. BOOTING FULLSTACK INTERFACE.'
];

export default function Preloader({ onComplete }: PreloaderProps) {
  const [cliLogs, setCliLogs] = useState<string[]>([]);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let logIndex = 0;
    const logInterval = setInterval(() => {
      if (logIndex < logSequence.length) {
        setCliLogs((prev) => [...prev, logSequence[logIndex]]);
        logIndex++;
      } else {
        clearInterval(logInterval);
        const timeout = setTimeout(() => {
          onComplete();
        }, 1200);
        return () => clearTimeout(timeout);
      }
    }, 450);

    return () => clearInterval(logInterval);
  }, [onComplete]);

  // Auto-scroll terminal output to bottom
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [cliLogs]);

  return (
    <div className="dark">
      <motion.div
        key="preloader"
        className="fixed inset-0 z-50 flex flex-col items-center justify-center overflow-hidden px-6"
        style={{ backgroundColor: '#0A0F19' }}
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
    </div>
  );
}
