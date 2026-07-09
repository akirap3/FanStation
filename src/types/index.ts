export interface Project {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  role: string;
  stack: string[];
  challenge: string;
  solution: string;
  outcome: string;
  metrics: string[];
  liveLink?: string;
  gitLink?: string;
}

export interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export interface TerminalLine {
  type: 'input' | 'output' | 'error';
  text: string;
}

export interface PreloaderProps {
  onComplete: () => void;
}

export interface CosmicBackgroundProps {
  theme: 'light' | 'dark';
}

export interface NavbarProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
  onAvailabilityClick: () => void;
  onResumeClick: () => void;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
  onReadDetails: (project: Project) => void;
}

export interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

export interface HiringModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}
