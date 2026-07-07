import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Copy, Check, Link2, Terminal, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactHudProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ContactHud({ isOpen, onClose }: ContactHudProps) {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [pings, setPings] = useState({ email: 12, linkedin: 18, github: 22 });

  // Fluctuate pings for real-time visual realism
  useEffect(() => {
    if (!isOpen) return;
    const interval = setInterval(() => {
      setPings({
        email: Math.floor(Math.random() * 8) + 8,       // 8ms - 15ms
        linkedin: Math.floor(Math.random() * 12) + 14,  // 14ms - 25ms
        github: Math.floor(Math.random() * 15) + 18,    // 18ms - 32ms
      });
    }, 2000);
    return () => clearInterval(interval);
  }, [isOpen]);

  // Escape key support
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 70,
      spread: 50,
      origin: { x: 0.85, y: 0.5 },
      colors: ['#00F5D4', '#9D4EDD', '#E6EDF2']
    });
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('akirapf3@gmail.com');
    setCopiedEmail(true);
    triggerConfetti();
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Translucent Backdrop overlay */}
          <motion.div
            className="fixed inset-0 z-40 bg-obsidian/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* HUD Drawer */}
          <motion.div
            className="fixed top-0 right-0 z-50 h-screen w-full sm:w-[450px] glass-panel border-l border-obsidian-border/50 shadow-2xl flex flex-col p-6 text-left"
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
          >
            {/* Ambient Radial Accent */}
            <div className="absolute top-1/4 right-0 w-[200px] h-[200px] rounded-full glow-violet opacity-[0.06] blur-[50px] pointer-events-none" />

            {/* Header */}
            <div className="flex items-center justify-between border-b border-obsidian-border/50 pb-4 mb-6">
              <div className="space-y-1">
                <span className="font-mono text-[9px] text-accent-cyan uppercase tracking-widest flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan animate-pulse"></span>
                  Link HUD Established
                </span>
                <h3 className="font-heading text-lg font-bold text-text-primary uppercase tracking-wide">
                  COMMS_INTERFACE.EXE
                </h3>
              </div>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg border border-obsidian-border bg-obsidian-glass/50 hover:border-accent-cyan/40 text-text-secondary hover:text-accent-cyan transition-colors"
                aria-label="Close HUD"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Diagnostic Node Log */}
            <div className="bg-obsidian/70 border border-obsidian-border/40 p-4 rounded-lg font-mono text-[10px] text-text-secondary space-y-1.5 mb-6">
              <div className="flex items-center gap-2 text-accent-violet border-b border-obsidian-border/30 pb-1 mb-2 font-semibold">
                <Terminal className="w-3.5 h-3.5" />
                <span>DIAGNOSTIC TELEMETRY</span>
              </div>
              <div>[SEC] Handshake verification: success</div>
              <div>[NET] Peer-to-peer route: tunnel active</div>
              <div className="flex items-center gap-1">
                <span>[SYS] Status:</span>
                <span className="text-accent-cyan font-bold">ONLINE</span>
              </div>
            </div>

            {/* Contact channels list */}
            <div className="flex-1 space-y-4">
              
              {/* Channel: Email */}
              <div className="glass-card border border-obsidian-border/40 p-4 rounded-xl relative overflow-hidden group hover:border-accent-cyan/30 transition-colors">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider">EMAIL CHANNEL</span>
                  <div className="flex items-center gap-1.5 font-mono text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-text-secondary">ping: {pings.email}ms</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-text-primary truncate">
                    akirapf3@gmail.com
                  </span>
                  
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded bg-obsidian border border-obsidian-border text-text-secondary hover:text-accent-cyan hover:border-accent-cyan/30 transition-colors"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-accent-cyan" /> : <Copy className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>

              {/* Channel: LinkedIn */}
              <a
                href="https://linkedin.com/in/ming-hung-fan"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card border border-obsidian-border/40 p-4 rounded-xl relative overflow-hidden group hover:border-accent-cyan/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider">PROFESSIONAL NETWORK</span>
                  <div className="flex items-center gap-1.5 font-mono text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-text-secondary">ping: {pings.linkedin}ms</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-text-primary">
                    linkedin.com/in/ming-hung-fan
                  </span>
                  <div className="p-2 rounded bg-obsidian border border-obsidian-border text-text-secondary group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors">
                    <Link2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>

              {/* Channel: GitHub */}
              <a
                href="https://github.com/akirap3"
                target="_blank"
                rel="noopener noreferrer"
                className="block glass-card border border-obsidian-border/40 p-4 rounded-xl relative overflow-hidden group hover:border-accent-cyan/30 transition-colors"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="font-mono text-[9px] text-text-secondary uppercase tracking-wider">VERSION CONTROL</span>
                  <div className="flex items-center gap-1.5 font-mono text-[9px]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                    <span className="text-text-secondary">ping: {pings.github}ms</span>
                  </div>
                </div>
                
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-sm text-text-primary">
                    github.com/akirap3
                  </span>
                  <div className="p-2 rounded bg-obsidian border border-obsidian-border text-text-secondary group-hover:text-accent-cyan group-hover:border-accent-cyan/30 transition-colors">
                    <Link2 className="w-3.5 h-3.5" />
                  </div>
                </div>
              </a>

            </div>

            {/* Footer Sign-off */}
            <div className="border-t border-obsidian-border/50 pt-4 mt-6 flex items-start gap-2.5 font-mono text-[9px] text-text-secondary/50">
              <AlertCircle className="w-3.5 h-3.5 text-accent-cyan mt-0.5 flex-shrink-0" />
              <span>
                Close this HUD by clicking the X button or pressing the ESC key.
              </span>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
