import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send, ArrowUpRight, Check } from 'lucide-react';
import confetti from 'canvas-confetti';

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  text: string;
}

export default function Footer() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', text: 'Initialize interactive terminal session...' },
    { type: 'output', text: 'Welcome! Type a command or click a quick link below.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);

  const quickCommands = ['help', 'about', 'contact', 'clear'];

  const scrollToBottom = () => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    const newLines: TerminalLine[] = [{ type: 'input', text: `guest@fanstation:~$ ${cmd}` }];

    switch (trimmed) {
      case 'help':
        newLines.push({ 
          type: 'output', 
          text: 'Available commands: [help] - List commands | [about] - Short background | [contact] - Get email/socials | [clear] - Clear terminal log' 
        });
        break;
      case 'about':
        newLines.push(
          { type: 'output', text: 'Ming-Hung Fan is a Senior Frontend Engineer & Operations Specialist.' },
          { type: 'output', text: 'Certified CCNP Network Engineer with a 4.0 GPA from Seneca Polytechnic (Toronto).' },
          { type: 'output', text: 'Expertise: React 19, Angular 18, TypeScript, Python, and Cisco/Juniper routing infrastructures.' }
        );
        break;
      case 'contact':
        newLines.push(
          { type: 'output', text: 'Email: akirapf3@gmail.com' },
          { type: 'output', text: 'LinkedIn: linkedin.com/in/ming-hung-fan' },
          { type: 'output', text: 'GitHub: github.com/akirap3' }
        );

        break;
      case 'clear':
        setHistory([]);
        setInputValue('');
        return;
      default:
        newLines.push({ 
          type: 'error', 
          text: `Command not found: "${trimmed}". Type "help" for a list of valid commands.` 
        });
    }

    setHistory((prev) => [...prev, ...newLines]);
    setInputValue('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleCommand(inputValue);
    }
  };

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
    handleCommand('contact');
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
              Senior Frontend Architect & Operations Specialist
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
                className="group relative flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-obsidian-border bg-obsidian-glass/60 text-xs font-mono transition-colors hover:border-accent-cyan/30 text-text-primary"
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
                className="flex items-center justify-between gap-4 px-4 py-3 rounded-lg border border-obsidian-border bg-obsidian-glass/60 text-xs font-mono transition-colors hover:border-accent-violet/30 text-text-primary"
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
          <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-xl border border-white/10">
            
            {/* Terminal Header */}
            <div className="h-9 bg-[#161B22] px-4 flex items-center justify-between border-b border-white/5">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5 text-accent-cyan" />
                <span className="font-mono text-[10px] text-slate-400 tracking-wide">
                  system_shell_guest.log
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-accent-cyan/30"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-accent-violet/30"></span>
              </div>
            </div>

            {/* Terminal Screen log */}
            <div ref={terminalContainerRef} className="p-5 font-mono text-[11px] sm:text-xs text-left space-y-2 h-[200px] overflow-y-auto bg-[#0A0F19]">
              {history.map((line, idx) => (
                <div 
                  key={idx} 
                  className={
                    line.type === 'input' 
                      ? 'text-[#e6edf2]' 
                      : line.type === 'error' 
                      ? 'text-[#ff7b72]' 
                      : 'text-[#8b949e]'
                  }
                >
                  {line.text}
                </div>
              ))}
            </div>

            {/* Command Pills bar */}
            <div className="px-5 py-2.5 bg-[#161B22] border-t border-white/5 flex flex-wrap items-center gap-2 text-[10px] font-mono">
              <span className="text-slate-400">Quick command:</span>
              {quickCommands.map((qc) => (
                <button
                  key={qc}
                  onClick={() => handleCommand(qc)}
                  className="px-2 py-0.5 rounded border border-[#30363d] bg-[#21262d] text-slate-300 hover:border-accent-cyan hover:text-accent-cyan transition-colors"
                >
                  {qc}
                </button>
              ))}
            </div>

            {/* Interactive Terminal input */}
            <div className="flex items-center bg-[#161B22]/50 border-t border-white/5 px-5 py-3 gap-2">
              <span className="font-mono text-xs text-accent-cyan select-none">guest@fanstation:~$</span>
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type command..."
                className="flex-1 bg-transparent outline-none border-none font-mono text-xs text-[#e6edf2] placeholder:text-slate-500"
              />
              <button 
                onClick={() => handleCommand(inputValue)}
                className="p-1 rounded text-slate-400 hover:text-accent-cyan transition-colors"
                aria-label="Send command"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>

          </div>
        </div>

      </div>
    </footer>
  );
}
