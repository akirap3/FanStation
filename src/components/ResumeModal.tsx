import { useEffect, useRef } from 'react';
import { X, Download, FileText } from 'lucide-react';
import type { ResumeModalProps } from '../types';
import { profile } from '../data/profile';

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      dialog.showModal();
      document.body.style.overflow = 'hidden';
    } else {
      dialog.close();
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <dialog
      ref={dialogRef}
      onCancel={handleClose}
      className="fixed inset-0 z-50 w-screen h-screen max-w-full max-h-full m-0 p-0 overflow-hidden outline-none bg-white dark:bg-[#0D1117] backdrop-blur-xl shadow-2xl transition-all duration-300"
    >
      <div className="flex flex-col w-full h-full">
        {/* Immersive Viewer Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/5 bg-white dark:bg-[#0D1117] shrink-0">
          <div className="flex items-center gap-2.5">
            <FileText className="w-5 h-5 text-accent-cyan" />
            <div>
              <h3 className="font-heading text-sm sm:text-base font-bold text-text-primary">
                Resume
              </h3>
              <p className="font-mono text-[9px] sm:text-[10px] text-text-secondary uppercase tracking-wider">
                {profile.basics.name} | {profile.basics.primaryTitle}
              </p>
            </div>
          </div>

          {/* Action Controls */}
          <div className="flex items-center gap-3">
            <a
              href={profile.basics.resumeUrl}
              download
              className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-accent-cyan text-text-secondary hover:text-accent-cyan transition-colors text-xs font-heading font-semibold"
              aria-label="Download Resume PDF"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download</span>
            </a>

            <button
              onClick={handleClose}
              className="p-2 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-accent-cyan text-text-secondary hover:text-accent-cyan transition-colors"
              aria-label="Close viewer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* PDF Document Viewport */}
        <div className="flex-1 w-full bg-slate-100 dark:bg-obsidian relative overflow-hidden">
          <iframe
            src={`${profile.basics.resumeUrl}#zoom=100`}
            className="w-full h-full border-none"
            title={`${profile.basics.name} Resume`}
          />
        </div>
      </div>
    </dialog>
  );
}
