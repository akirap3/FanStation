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
