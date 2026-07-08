import { Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onAvailabilityClick: () => void;
}

export default function Navbar({ theme, toggleTheme, onAvailabilityClick }: NavbarProps) {
  return (
    <>
      {/* Global navigation overlays */}
      {/* Left side fixed availability badge */}
      <button 
        onClick={onAvailabilityClick}
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
    </>
  );
}
