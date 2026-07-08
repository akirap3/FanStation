import React, { useEffect, useRef } from 'react';
import { X, Calendar, MapPin, Briefcase, Clock, Send, ShieldCheck } from 'lucide-react';

interface HiringModalProps {
  isOpen: boolean;
  onClose: () => void;
  onContactClick: () => void;
}

export default function HiringModal({ isOpen, onClose, onContactClick }: HiringModalProps) {
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
      className="fixed inset-0 z-50 w-[calc(100%-2rem)] sm:w-full max-w-md h-fit max-h-[85vh] p-0 overflow-y-auto outline-none rounded-xl border border-black/10 dark:border-white/10 bg-white dark:bg-[#0D1117] backdrop-blur-xl shadow-2xl"
    >
      <div className="flex flex-col w-full">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5 dark:border-white/5 sticky top-0 bg-white dark:bg-[#0D1117] backdrop-blur-md z-10">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-accent-cyan animate-pulse"></span>
            <span className="font-mono text-[10px] text-accent-cyan uppercase tracking-widest font-bold">
              Hiring Telemetry
            </span>
          </div>
          <button
            onClick={handleClose}
            className="p-1.5 rounded-lg border border-black/10 dark:border-white/10 bg-black/5 dark:bg-white/5 hover:border-accent-cyan text-text-secondary hover:text-accent-cyan transition-colors"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6 text-left font-mono">
          {/* Profile Summary */}
          <div className="space-y-1">
            <h3 className="font-heading text-lg font-bold text-text-primary font-sans">
              Ming-Hung Fan
            </h3>
            <p className="text-[11px] text-text-secondary">
              Fullstack Engineer & Systems Operator
            </p>
          </div>

          {/* Status Details */}
          <div className="space-y-4 border-y border-black/5 dark:border-white/5 py-5 text-xs">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-text-secondary">
                <Clock className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Availability</span>
              </div>
              <span className="font-semibold text-accent-cyan bg-accent-cyan-glow/20 px-2 py-0.5 rounded text-[10px]">
                Immediate
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-text-secondary">
                <Briefcase className="w-3.5 h-3.5 text-accent-violet" />
                <span>Target Roles</span>
              </div>
              <span className="font-semibold text-text-primary text-[10px] text-right">
                FullStack / Cloud / Frontend 
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-text-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent-cyan" />
                <span>Preferences</span>
              </div>
              <span className="font-semibold text-text-primary text-[10px]">
                Onsite / Remote / Hybrid (Canada)
              </span>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2 text-text-secondary">
                <ShieldCheck className="w-3.5 h-3.5 text-accent-violet" />
                <span>Leadership</span>
              </div>
              <span className="font-semibold text-text-primary text-[10px] text-right">
                Ops Lead & 10Y Military Exp.
              </span>
            </div>
          </div>

          {/* Bio blurb */}
          <div className="text-[11px] text-text-secondary leading-relaxed bg-black/[0.01] dark:bg-white/[0.01] border border-black/5 dark:border-white/5 p-3.5 rounded-lg">
            Seeking roles in FullStack, Frontend, or Cloud-focused software companies where I can collaborate with teams to build full-scale applications. I aim to bring my specialized engineering skills and leadership value to drive growth across products, platforms, and teams.
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-2.5 pt-2">
            <button
              onClick={() => {
                handleClose();
                onContactClick();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-lg bg-accent-cyan text-white dark:text-obsidian hover:shadow-[0_0_20px_rgba(0,245,212,0.3)] transition-all font-sans text-xs font-semibold"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Initiate Interview Dialog</span>
            </button>
          </div>
        </div>
      </div>
    </dialog>
  );
}
