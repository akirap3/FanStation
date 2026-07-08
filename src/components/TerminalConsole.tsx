import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Send } from 'lucide-react';
import confetti from 'canvas-confetti';
import type { TerminalLine } from '../types';
import { profile } from '../data/profile';

const quickCommands = ['help', 'about', 'contact', 'clear'];

export default function TerminalConsole() {
  const [history, setHistory] = useState<TerminalLine[]>([
    { type: 'output', text: 'Initialize interactive terminal session...' },
    { type: 'output', text: 'Welcome! Type a command or click a quick link below.' },
  ]);
  const [inputValue, setInputValue] = useState('');
  const terminalContainerRef = useRef<HTMLDivElement | null>(null);

  const scrollToBottom = () => {
    if (terminalContainerRef.current) {
      terminalContainerRef.current.scrollTop = terminalContainerRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.8 },
      colors: ['#00F5D4', '#9D4EDD', '#E6EDF2']
    });
  };

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
          { type: 'output', text: `${profile.basics.name} is a ${profile.basics.primaryTitle}.` },
          { type: 'output', text: 'Certified CCNP Network Engineer with a 4.0 GPA from Seneca Polytechnic (Toronto).' },
          { type: 'output', text: 'Expertise: React 19, Angular 18, TypeScript, Python, and Cisco/Juniper routing infrastructures.' }
        );
        break;
      case 'contact':
        newLines.push(
          { type: 'output', text: `Email: ${profile.basics.email}` },
          { type: 'output', text: `LinkedIn: ${profile.basics.linkedinUrl.replace('https://', '')}` },
          { type: 'output', text: `GitHub: ${profile.basics.githubUrl.replace('https://', '')}` }
        );
        triggerConfetti();
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

  // Coordinated window events (e.g. from footer buttons)
  useEffect(() => {
    const handleExternalCommand = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        handleCommand(customEvent.detail);
      }
    };

    window.addEventListener('run-terminal-command', handleExternalCommand);
    return () => {
      window.removeEventListener('run-terminal-command', handleExternalCommand);
    };
  }, []);

  return (
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
  );
}
