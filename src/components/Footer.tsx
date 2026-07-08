import React, { useState } from 'react';
import { ArrowUpRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';
import TerminalConsole from './TerminalConsole';

export default function Footer() {
  const [copiedEmail, setCopiedEmail] = useState(false);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00F5D4', '#9D4EDD', '#E6EDF2']
    });
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText('akirapf3@gmail.com');
    setCopiedEmail(true);
    triggerConfetti();
    // Dispatch custom DOM event to trigger decoupled TerminalConsole command
    window.dispatchEvent(new CustomEvent('run-terminal-command', { detail: 'contact' }));
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <footer className="py-16 relative px-6 lg:px-24 border-t border-obsidian-border/30 bg-obsidian-card/10">
      
      {/* Ambient glow decoration */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] rounded-full glow-cyan opacity-[0.03] blur-[100px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
        
        {/* Left Column - Meta & Info */}
        <div className="lg:col-span-5 text-left space-y-6">
          <div className="space-y-2">
            <h4 className="font-heading text-2xl font-bold text-text-primary">
              Ming-Hung Fan
            </h4>
            <p className="font-body text-xs text-text-secondary">
              Fullstack Engineer & Operations Specialist
            </p>
          </div>

          <p className="font-body text-xs text-text-secondary leading-relaxed max-w-sm">
            Bridging modular interfaces with robust system configurations. Designing with performance-first metrics and clean engineering solutions.
          </p>

          <div className="space-y-3 pt-4">
            <div className="font-mono text-[10px] text-text-secondary uppercase tracking-widest">
              Direct Contact
            </div>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button 
                onClick={copyEmailToClipboard}
                className="group relative flex items-center justify-between gap-4 px-4 py-3 rounded-lg glass-card border-glow-hover text-xs font-mono transition-colors text-text-primary"
              >
                <span className="flex items-center gap-2">
                  akirapf3@gmail.com
                  {copiedEmail ? (
                    <Check className="w-3.5 h-3.5 text-accent-cyan animate-bounce" />
                  ) : (
                    <span className="w-1.5 h-1.5 rounded-full bg-accent-cyan group-hover:animate-pulse"></span>
                  )}
                </span>
                <span className="text-[10px] text-accent-cyan/80">
                  {copiedEmail ? 'Copied' : 'Copy'}
                </span>
              </button>

              <a 
                href="https://linkedin.com/in/ming-hung-fan"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg glass-card border-glow-hover text-xs font-mono transition-colors text-text-primary"
              >
                <span>LinkedIn</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-accent-violet" />
              </a>
            </div>
          </div>

          <div className="text-[10px] font-mono text-text-secondary/50 pt-8">
            © {new Date().getFullYear()} Ming-Hung Fan. All Rights Reserved. Built with React & Tailwind.
          </div>
        </div>

        {/* Right Column - Console Terminal Footer */}
        <div className="dark lg:col-span-7 w-full space-y-4">
          <TerminalConsole />
        </div>

      </div>
    </footer>
  );
}
