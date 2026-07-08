import { useEffect, useRef } from 'react';
import { ArrowUpRight, Mail } from 'lucide-react';

const Github = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

export default function Hero({ onExploreClick, onContactClick }: { onExploreClick: () => void; onContactClick: () => void }) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const particleCount = 45;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.4,
          vy: (Math.random() - 0.5) * 0.4,
          radius: Math.random() * 2 + 1,
        });
      }
    };

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const isDark = document.documentElement.classList.contains('dark');
      
      // Determine colors based on active theme
      const dotColor = isDark ? 'rgba(230, 237, 242, 0.25)' : 'rgba(15, 23, 42, 0.28)';
      const cyanRgb = isDark ? '0, 245, 212' : '13, 148, 136';
      const violetRgb = isDark ? '157, 78, 221' : '124, 58, 237';
      const lineOpacityMult = isDark ? 0.12 : 0.35;
      const mouseOpacityMult = isDark ? 0.2 : 0.48;
      
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Move particle (low gravity drift)
        p1.x += p1.vx;
        p1.y += p1.vy;
        
        // Boundary wrap
        if (p1.x < 0) p1.x = canvas.width;
        if (p1.x > canvas.width) p1.x = 0;
        if (p1.y < 0) p1.y = canvas.height;
        if (p1.y > canvas.height) p1.y = 0;
        
        // Draw particle dot
        ctx.beginPath();
        ctx.arc(p1.x, p1.y, p1.radius, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();

        // Connect particles
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dist = Math.hypot(p1.x - p2.x, p1.y - p2.y);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(${cyanRgb}, ${lineOpacityMult * (1 - dist / 130)})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }

        // Connect to mouse cursor
        const mouseDist = Math.hypot(p1.x - mouseRef.current.x, p1.y - mouseRef.current.y);
        if (mouseDist < 200) {
          ctx.strokeStyle = `rgba(${violetRgb}, ${mouseOpacityMult * (1 - mouseDist / 200)})`;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouseRef.current.x, mouseRef.current.y);
          ctx.stroke();
        }
      }
      
      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    draw();

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const handleMouseLeave = () => {
      mouseRef.current = { x: -1000, y: -1000 };
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-start lg:items-center justify-center overflow-hidden px-6 lg:px-24 pt-28 pb-16 lg:py-0">
      {/* Interactive Network Mesh Background */}
      <canvas 
        ref={canvasRef} 
        className="absolute top-0 left-0 w-full h-full pointer-events-none z-0" 
      />

      {/* Decorative Radial Ambient Glows */}
      <div className="absolute top-1/4 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full glow-cyan opacity-[0.06] blur-[120px] pointer-events-none z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[550px] h-[550px] rounded-full glow-violet opacity-[0.05] blur-[120px] pointer-events-none z-0"></div>

      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Asymmetrical Left Content Column */}
        <div className="lg:col-span-8 space-y-8 text-left">
          
          {/* Heading */}
          <h1 className="font-heading text-4xl sm:text-6xl lg:text-[72px] font-bold tracking-tight leading-[1.05] text-text-primary">
            Ming-Hung Fan <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-cyan to-accent-violet">
              Architecting Fullstacks
            </span> <br />
            & Systems That Scale
          </h1>

          {/* Body Description */}
          <p className="font-body text-base sm:text-lg max-w-xl text-text-secondary leading-relaxed">
            Ming-Hung Fan is a fullstack architect and system operations specialist. He designs modular fullstacks that deliver high-velocity UX and configures highly secure infrastructure to ensure robust system stability.
          </p>

          {/* Call to Actions */}
          <div className="flex flex-wrap items-center gap-5 pt-4">
            <button 
              onClick={onExploreClick}
              className="group relative px-6 py-3.5 rounded-lg font-heading text-sm font-medium tracking-wide text-white dark:text-obsidian bg-accent-cyan transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,245,212,0.4)] overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/25 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative flex items-center gap-2">
                Explore Expertise <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
            
            <button 
              onClick={onContactClick}
              className="px-6 py-3.5 rounded-lg border border-obsidian-border bg-obsidian-glass backdrop-blur-sm font-heading text-sm font-medium text-text-primary hover:border-accent-cyan/40 hover:text-accent-cyan transition-all duration-300"
            >
              Get In Touch
            </button>
          </div>

        </div>

        {/* Asymmetrical Right Sidebar (Premium Technical Metrics Card) */}
        <div className="lg:col-span-4 space-y-6">
          <div className="glass-card border-glow-hover p-6 rounded-xl relative float-animation">
            <div className="absolute top-2 right-2 font-mono text-[10px] text-accent-cyan/60 tracking-wider">
              SYS-STAT.LOG
            </div>
            
            <div className="space-y-6 text-left">
              <div>
                <div className="font-mono text-2xl font-bold text-accent-cyan">99.9%</div>
                <div className="font-heading text-xs uppercase tracking-wider text-text-secondary mt-1">System Uptime Maintained</div>
              </div>
              
              <div className="border-t border-obsidian-border pt-4">
                <div className="font-mono text-2xl font-bold text-accent-violet">20%</div>
                <div className="font-heading text-xs uppercase tracking-wider text-text-secondary mt-1">Rebuild Stability Boost</div>
              </div>

              <div className="border-t border-obsidian-border pt-4">
                <div className="font-mono text-2xl font-bold text-text-primary">100+</div>
                <div className="font-heading text-xs uppercase tracking-wider text-text-secondary mt-1">Personnel Led & Managed</div>
              </div>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-start lg:justify-center gap-6 px-4">
            <a 
              href="https://github.com/akirap3" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="w-5 h-5" />
            </a>
            <a 
              href="https://linkedin.com/in/ming-hung-fan" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a 
              href="mailto:akirapf3@gmail.com" 
              className="text-text-secondary hover:text-accent-cyan transition-colors duration-200"
              aria-label="Send Email"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
