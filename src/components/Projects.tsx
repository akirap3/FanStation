import { useState } from 'react';
import { Cpu } from 'lucide-react';
import ProjectCard from './ProjectCard';
import ProjectModal from './ProjectModal';
import type { Project } from '../types/project';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects: Project[] = [
    {
      id: 'vocab-studio',
      title: "Sir Isaac's Vocab Studio",
      subtitle: "React 19 & Google Gemini 2.5 Flash",
      summary: "An interactive AI learning environment utilizing generative language models for automatic vocabulary synthesis and client-side database caching.",
      role: "Fullstack Engineer",
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
      role: "Frontend Engineer",
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
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
            Explorations in high-performance fullstack engineering, AI integrations, and Taiwan web showcases.
          </p>
        </div>

        {/* Asymmetrical alternating grid of project cards */}
        <div className="space-y-16">
          {projects.map((project, index) => (
            <ProjectCard 
              key={project.id}
              project={project}
              index={index}
              onReadDetails={handleOpenModal}
            />
          ))}
        </div>

      </div>

      {/* Project specs details modal */}
      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}
