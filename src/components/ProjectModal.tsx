import { useEffect, useRef } from 'react';
import { X, ExternalLink } from 'lucide-react';
import type { ProjectModalProps } from '../types';

export default function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && project) {
      if (!dialog.open) {
        dialog.showModal();
        document.body.style.overflow = 'hidden';
      }
    } else {
      if (dialog.open) {
        dialog.close();
        document.body.style.overflow = '';
      }
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen, project]);

  if (!project) return null;

  return (
    <dialog 
      ref={dialogRef} 
      onCancel={(e) => {
        e.preventDefault();
        onClose();
      }}
      className="fixed inset-0 z-50 w-[calc(100%-2rem)] sm:w-full max-w-3xl h-fit max-h-[85vh] p-0 overflow-y-auto outline-none rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0D1117] backdrop-blur-xl shadow-2xl"
    >
      <div className="flex flex-col w-full">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/5 sticky top-0 bg-white dark:bg-[#0D1117] backdrop-blur-md z-10">
          <div>
            <span className="font-mono text-[9px] text-accent-cyan uppercase tracking-widest">
              {project.subtitle}
            </span>
            <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary">
              {project.title}
            </h3>
          </div>
          <button 
            onClick={onClose}
            className="p-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-accent-cyan text-text-secondary hover:text-accent-cyan transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 text-left">
          
          {/* Grid Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-black/[0.02] dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-4 rounded-lg">
            <div>
              <span className="font-mono text-[10px] text-text-secondary block">ROLE</span>
              <span className="font-heading text-xs font-semibold text-text-primary">{project.role}</span>
            </div>
            <div>
              <span className="font-mono text-[10px] text-text-secondary block">LIVE DEMO</span>
              {project.liveLink ? (
                <a 
                  href={project.liveLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-heading text-xs font-semibold text-accent-cyan hover:underline flex items-center gap-1 mt-0.5"
                >
                  Visit Site <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="font-heading text-xs font-semibold text-text-secondary">N/A</span>
              )}
            </div>
            <div>
              <span className="font-mono text-[10px] text-text-secondary block">REPOSITORY</span>
              {project.gitLink ? (
                <a 
                  href={project.gitLink} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="font-heading text-xs font-semibold text-accent-violet hover:underline flex items-center gap-1 mt-0.5"
                >
                  GitHub Repo <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <span className="font-heading text-xs font-semibold text-text-secondary">N/A</span>
              )}
            </div>
          </div>

          {/* Technical Specifications */}
          <div className="space-y-4">
            
            {/* Tech Challenge */}
            <div className="space-y-1.5">
              <h4 className="font-heading text-xs uppercase font-bold text-accent-violet tracking-wider">
                ENGINEERING CHALLENGE
              </h4>
              <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                {project.challenge}
              </p>
            </div>
            
            {/* Tech Solution */}
            <div className="space-y-1.5">
              <h4 className="font-heading text-xs uppercase font-bold text-accent-cyan tracking-wider">
                IMPLEMENTATION & ARCHITECTURE
              </h4>
              <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                {project.solution}
              </p>
            </div>

            {/* Outcome */}
            <div className="space-y-1.5">
              <h4 className="font-heading text-xs uppercase font-bold text-text-primary tracking-wider">
                BUSINESS & TECHNICAL OUTCOME
              </h4>
              <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                {project.outcome}
              </p>
            </div>

          </div>

          {/* Tech Stack nodes */}
          <div className="pt-2 border-t border-black/5 dark:border-white/5">
            <span className="font-mono text-[10px] text-text-secondary block mb-2">SYSTEM TECH STACK</span>
            <div className="flex flex-wrap gap-1.5">
              {project.stack.map((tech) => (
                <span 
                  key={tech} 
                  className="px-2.5 py-1 rounded border font-mono text-[10px] bg-white dark:bg-[#0A0F19] border-black/15 dark:border-white/20 text-accent-cyan"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

      </div>
    </dialog>
  );
}
