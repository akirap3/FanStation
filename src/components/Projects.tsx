import { useRef, useState } from 'react';
import { ExternalLink, X, Cpu, CheckCircle2, ArrowRight } from 'lucide-react';

interface Project {
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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement | null>(null);

  const projects: Project[] = [
    {
      id: 'vocab-studio',
      title: "Sir Isaac's Vocab Studio",
      subtitle: "React 19 & Google Gemini 2.5 Flash",
      summary: "An interactive AI learning environment utilizing generative language models for automatic vocabulary synthesis and client-side database caching.",
      role: "Lead Frontend Engineer",
      stack: ["React 19", "Google Gemini API", "IndexedDB", "Tailwind CSS"],
      challenge: "High round-trip network latency from live LLM prompts and heavy token consumption costs for repetitive query patterns.",
      solution: "Engineered a custom cache controller using client-side IndexedDB to store 50MB+ of vocabulary datasets. Built high-fidelity canvas mapping layers to export graphic flashcards as clean PDFs and PNGs.",
      outcome: "Eliminated repeated API token expenses by 35% and provided zero-latency offline vocabulary retrieval.",
      metrics: ["50MB+ IndexedDB cache layer", "35% API cost reduction", "Real-time PDF/PNG exporters"],
      liveLink: "https://vocab-by-paw.vercel.app/",
      gitLink: "https://github.com/akirap3/VocabByPaw"
    },
    {
      id: 'casa-sueno',
      title: "Casa Sueño del Mar",
      subtitle: "Vite 6, React 19 & Supabase",
      summary: "A bilingual high-end vacation rental web application incorporating a secure custom CMS with drag-and-drop asset management.",
      role: "Full-Stack Developer",
      stack: ["React 19", "Vite 6", "Supabase", "PostgreSQL", "Tailwind CSS v4", "@dnd-kit"],
      challenge: "Bilingual content updates and photo gallery adjustments were too slow and technically demanding for non-technical administrators.",
      solution: "Created an administrative console featuring drag-and-drop picture sorting using @dnd-kit, combined with a Supabase PostgreSQL backend database storing localized copy schemas.",
      outcome: "Decreased dashboard administration times and facilitated instant content edits.",
      metrics: ["Zero-friction bilingual schemas", "Drag-and-drop asset ordering", "Instant content propagation"],
      liveLink: "https://casa-sue-o-del-mar.vercel.app/",
      gitLink: "https://github.com/akirap3/Casa_Sue-o_del_Mar"
    },
    {
      id: 'air-quality',
      title: "Air Quality Monitoring Platform",
      subtitle: "Angular, Tailwind CSS & WebSockets",
      summary: "A real-time environmental monitoring dashboard with streaming telemetry datasets and secure session validation.",
      role: "Frontend Systems Engineer",
      stack: ["Angular 18", "WebSockets", "JWT", "ApexCharts", "RESTful APIs"],
      challenge: "Handling concurrent real-time data packets from multiple IoT streams without triggering DOM lag or compromising authorization tokens.",
      solution: "Developed an Angular HTTP Interceptor mapping automated silent JWT refresh cycles. Subscribed to WebSocket packet emitters, feeding them into a throttled ApexCharts data buffer.",
      outcome: "Rendered real-time sensor updates with zero interface stutter or security credential drops.",
      metrics: ["Throttled WebSockets pipeline", "Automated JWT silent refreshes", "Smooth real-time telemetry rendering"],
      liveLink: "https://peace-air.web.app/home"
    },
    {
      id: 'shengshi',
      title: "ShengShi Food-Sharing Hub",
      subtitle: "React, Firebase & Algolia Search",
      summary: "A serverless food exchange portal deploying geo-spatial searches and QR claims checking.",
      role: "Operations & Frontend Lead",
      stack: ["React", "Redux", "Firebase Auth", "Firestore", "Algolia", "Google Maps API"],
      challenge: "Ensuring secure food transactions and low latency geographic queries for nearby donation centers.",
      solution: "Implemented Algolia search index hooks for localized queries, coordinated with Firebase Serverless functions and Google Maps API. Designed secure QR claim keys.",
      outcome: "Reduced geographical retrieval delays under 50ms and verified physical exchanges securely.",
      metrics: ["Under 50ms search query lag", "Secure QR code exchange audits", "Serverless Firebase functions architecture"],
      liveLink: "https://shengshi-8bc48.web.app/",
      gitLink: "https://github.com/akirap3/ShengShi"
    },
    {
      id: 'sun-moon-lake',
      title: "Sun Moon Lake Travel Showcase",
      subtitle: "HTML5, CSS3, Bullframe.css & Responsive Design",
      summary: "A semantic, responsive travel guide page for Sun Moon Lake, Taiwan, demonstrating clean layout structures and lightweight framework usage.",
      role: "Frontend Developer",
      stack: ["HTML5", "CSS3", "Bullframe.css", "Responsive Web Design"],
      challenge: "Constructing a semantic, responsive travel guide for Sun Moon Lake without heavy JavaScript libraries, relying on clean structural elements and optimized embedded media integrations.",
      solution: "Implemented a fully semantic layout structure using HTML5, utilizing the lightweight Bullframe.css stylesheet framework to ensure optimal responsive design. Embedded media objects like dynamic Google Maps, audio guides, and streaming YouTube embeds.",
      outcome: "Achieved a lightweight, fast-loading travel guide showcasing clean, standards-compliant layout mechanics.",
      metrics: ["Zero-dependency semantic HTML", "Lightweight Bullframe.css integration", "Responsive media player containers"],
      liveLink: "https://web222a3.pages.dev/sun-moon-lake/"
    }
  ];

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    dialogRef.current?.showModal();
  };

  const handleCloseModal = () => {
    dialogRef.current?.close();
    setSelectedProject(null);
  };

  return (
    <section id="works" className="py-24 relative px-6 lg:px-24 border-t border-obsidian-border/30">
      {/* Decorative Gradient Overlay */}
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full glow-cyan opacity-[0.03] blur-[120px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-16">
        
        {/* Title */}
        <div className="text-left space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-cyan flex items-center gap-2">
            <Cpu className="w-3.5 h-3.5" /> SELECTED PROJECTS
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Architectural Case Studies.
          </h2>
          <p className="font-body text-text-secondary max-w-xl text-sm sm:text-base leading-relaxed">
            Explorations in high-performance frontend engineering, AI integrations, and Taiwan web showcases.
          </p>
        </div>

        {/* Asymmetrical alternating grid of project cards */}
        <div className="space-y-16">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;
            return (
              <div 
                key={project.id}
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
                        className="px-2.5 py-1 rounded bg-obsidian-card/60 border border-obsidian-border/50 font-mono text-[10px] text-text-secondary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Technical Outcomes Panel (Asymmetrical Small Side Column) */}
                <div 
                  className={`lg:col-span-5 flex flex-col justify-between bg-obsidian-card/30 border border-obsidian-border/40 p-8 rounded-xl text-left ${
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
                    onClick={() => handleOpenModal(project)}
                    className="group mt-8 inline-flex items-center gap-2 font-heading text-xs font-semibold text-accent-cyan hover:text-text-primary transition-colors duration-200"
                  >
                    READ ENGINEERING DETAILS 
                    <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Modern Top-Layer Native Dialog Overlay */}
      <dialog 
        ref={dialogRef} 
        onCancel={handleCloseModal}
        className="fixed inset-0 z-50 w-full max-w-3xl h-fit max-h-[85vh] p-0 overflow-y-auto outline-none rounded-xl border border-obsidian-border bg-obsidian-card/95 backdrop-blur-xl shadow-2xl flex-col"
      >
        {selectedProject && (
          <div className="flex flex-col h-full w-full">
            
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-obsidian-border/50 sticky top-0 bg-obsidian-card/95 backdrop-blur-md z-10">
              <div>
                <span className="font-mono text-[9px] text-accent-cyan uppercase tracking-widest">
                  {selectedProject.subtitle}
                </span>
                <h3 className="font-heading text-lg sm:text-xl font-bold text-text-primary">
                  {selectedProject.title}
                </h3>
              </div>
              <button 
                onClick={handleCloseModal}
                className="p-1.5 rounded-lg border border-obsidian-border bg-obsidian-glass/30 hover:border-accent-cyan/40 text-text-secondary hover:text-accent-cyan transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 space-y-6 text-left">
              
              {/* Grid Metadata */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 bg-obsidian-glass/40 border border-obsidian-border/50 p-4 rounded-lg">
                <div>
                  <span className="font-mono text-[10px] text-text-secondary block">ROLE</span>
                  <span className="font-heading text-xs font-semibold text-text-primary">{selectedProject.role}</span>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-text-secondary block">LIVE DEMO</span>
                  {selectedProject.liveLink ? (
                    <a 
                      href={selectedProject.liveLink} 
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
                  {selectedProject.gitLink ? (
                    <a 
                      href={selectedProject.gitLink} 
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
                    {selectedProject.challenge}
                  </p>
                </div>
                
                {/* Tech Solution */}
                <div className="space-y-1.5">
                  <h4 className="font-heading text-xs uppercase font-bold text-accent-cyan tracking-wider">
                    IMPLEMENTATION & ARCHITECTURE
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>

                {/* Outcome */}
                <div className="space-y-1.5">
                  <h4 className="font-heading text-xs uppercase font-bold text-text-primary tracking-wider">
                    BUSINESS & TECHNICAL OUTCOME
                  </h4>
                  <p className="font-body text-xs sm:text-sm text-text-secondary leading-relaxed">
                    {selectedProject.outcome}
                  </p>
                </div>

              </div>

              {/* Tech Stack nodes */}
              <div className="pt-2 border-t border-obsidian-border/50">
                <span className="font-mono text-[10px] text-text-secondary block mb-2">SYSTEM TECH STACK</span>
                <div className="flex flex-wrap gap-1.5">
                  {selectedProject.stack.map((tech) => (
                    <span 
                      key={tech} 
                      className="px-2 py-0.5 rounded bg-obsidian/40 border border-obsidian-border/40 font-mono text-[10px] text-accent-cyan"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>

          </div>
        )}
      </dialog>
    </section>
  );
}
