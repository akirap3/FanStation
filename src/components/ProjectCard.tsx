import { ExternalLink, CheckCircle2, ArrowRight } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
  index: number;
  onReadDetails: (project: Project) => void;
}

export default function ProjectCard({ project, index, onReadDetails }: ProjectCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div 
      className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch ${
        isEven ? '' : 'lg:flex-row-reverse'
      }`}
    >
      {/* Visual Card (Asymmetrical Panel) */}
      <div 
        className={`lg:col-span-7 flex flex-col justify-between glass-card border-glow-hover p-8 rounded-xl text-left relative overflow-hidden min-h-[300px] ${
          isEven ? 'lg:order-1' : 'lg:order-2'
        }`}
      >
        <div className="absolute -right-8 -bottom-8 w-44 h-44 rounded-full bg-accent-cyan/5 blur-3xl pointer-events-none"></div>
        
        <div className="space-y-4 relative z-10">
          <div className="flex items-center justify-between">
            <div className="font-mono text-[10px] text-accent-cyan uppercase tracking-widest">
              {project.subtitle}
            </div>
            {project.liveLink && (
              <a 
                href={project.liveLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-1 rounded-md text-text-secondary hover:text-accent-cyan transition-colors"
                aria-label="Visit live website"
              >
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>
          <h3 className="font-heading text-xl sm:text-3xl font-bold text-text-primary">
            {project.title}
          </h3>
          <p className="font-body text-text-secondary text-sm leading-relaxed max-w-xl">
            {project.summary}
          </p>
        </div>

        <div className="flex flex-wrap gap-2 pt-6 relative z-10">
          {project.stack.slice(0, 4).map((tech) => (
            <span 
              key={tech}
              className="px-2.5 py-1 rounded border font-mono text-[10px] bg-white dark:bg-[#0A0F19] border-black/10 dark:border-white/10 text-accent-cyan"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Technical Outcomes Panel (Asymmetrical Small Side Column) */}
      <div 
        className={`lg:col-span-5 flex flex-col justify-between glass-card border-glow-hover p-8 rounded-xl text-left ${
          isEven ? 'lg:order-2' : 'lg:order-1'
        }`}
      >
        <div className="space-y-6">
          <span className="font-mono text-[10px] text-accent-violet uppercase tracking-widest block">
            OUTCOME TELEMETRY
          </span>
          
          <ul className="space-y-4">
            {project.metrics.map((metric, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-text-primary">
                <CheckCircle2 className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0" />
                <span className="font-mono">{metric}</span>
              </li>
            ))}
          </ul>
        </div>

        <button 
          onClick={() => onReadDetails(project)}
          className="group mt-8 inline-flex items-center gap-2 font-heading text-xs font-semibold text-accent-cyan hover:text-text-primary transition-colors duration-200"
        >
          READ ENGINEERING DETAILS 
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </button>
      </div>
    </div>
  );
}
