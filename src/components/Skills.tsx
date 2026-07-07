import { useState } from 'react';
import { Terminal, FileCode, Folder, FolderOpen, AlertCircle, Sparkles } from 'lucide-react';

interface FileItem {
  name: string;
  type: 'typescript' | 'json' | 'yaml';
  icon: typeof FileCode;
  impactTitle: string;
  impactMessage: string;
  codeLines: { text: string; highlightType: 'keyword' | 'type' | 'string' | 'comment' | 'plain' | 'number' }[][];
}

export default function Skills() {
  const [activeFileIndex, setActiveFileIndex] = useState(0);
  const [hoveredLineIndex, setHoveredLineIndex] = useState<number | null>(null);

  const files: FileItem[] = [
    {
      name: 'frontend.ts',
      type: 'typescript',
      icon: FileCode,
      impactTitle: 'Frontend & UI Performance',
      impactMessage: 'Angular 18 legacy system rebuild increased stability by 20%. Modular Angular Material / Tailwind components boosted cross-team feature delivery speed by 25% and saved 6+ dev hours weekly via automation.',
      codeLines: [
        [
          { text: 'import', highlightType: 'keyword' },
          { text: ' { ', highlightType: 'plain' },
          { text: 'Architect', highlightType: 'type' },
          { text: ' } ', highlightType: 'plain' },
          { text: 'from', highlightType: 'keyword' },
          { text: ' ', highlightType: 'plain' },
          { text: '"@core/profile"', highlightType: 'string' },
          { text: ';', highlightType: 'plain' }
        ],
        [],
        [
          { text: 'export', highlightType: 'keyword' },
          { text: ' ', highlightType: 'plain' },
          { text: 'interface', highlightType: 'keyword' },
          { text: ' ', highlightType: 'plain' },
          { text: 'FrontendArchitect', highlightType: 'type' },
          { text: ' {', highlightType: 'plain' }
        ],
        [
          { text: '  frameworks: ', highlightType: 'plain' },
          { text: 'string', highlightType: 'type' },
          { text: '[] ', highlightType: 'plain' },
          { text: '= [', highlightType: 'plain' },
          { text: '"React 19"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"Angular 18"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"Ionic"', highlightType: 'string' },
          { text: '];', highlightType: 'plain' }
        ],
        [
          { text: '  styling: ', highlightType: 'plain' },
          { text: 'string', highlightType: 'type' },
          { text: '[] ', highlightType: 'plain' },
          { text: '= [', highlightType: 'plain' },
          { text: '"TailwindCSS"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"Material UI"', highlightType: 'string' },
          { text: '];', highlightType: 'plain' }
        ],
        [
          { text: '  stateManagement: ', highlightType: 'plain' },
          { text: 'string', highlightType: 'type' },
          { text: '[] ', highlightType: 'plain' },
          { text: '= [', highlightType: 'plain' },
          { text: '"Redux"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"IndexedDB"', highlightType: 'string' },
          { text: '];', highlightType: 'plain' }
        ],
        [
          { text: '  interactiveLibs: ', highlightType: 'plain' },
          { text: 'string', highlightType: 'type' },
          { text: '[] ', highlightType: 'plain' },
          { text: '= [', highlightType: 'plain' },
          { text: '"@dnd-kit"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"ApexCharts"', highlightType: 'string' },
          { text: '];', highlightType: 'plain' }
        ],
        [
          { text: '}', highlightType: 'plain' }
        ],
        [],
        [
          { text: '// TODO: Rebuild legacy core for 20% system stability gain', highlightType: 'comment' }
        ]
      ]
    },
    {
      name: 'ai_pipelines.json',
      type: 'json',
      icon: FileCode,
      impactTitle: 'Generative AI & Intelligent Systems',
      impactMessage: 'Constructed custom Gemini 2.5 Flash integrations with client-side IndexedDB caching (supporting 50MB+ datasets) to yield latency-free AI operations and high-resolution document and chart exports.',
      codeLines: [
        [
          { text: '{', highlightType: 'plain' }
        ],
        [
          { text: '  "coreEngine": ', highlightType: 'plain' },
          { text: '"Google Gemini 2.5 Flash"', highlightType: 'string' },
          { text: ',', highlightType: 'plain' }
        ],
        [
          { text: '  "apiIntegration": ', highlightType: 'plain' },
          { text: '"Google Gemini API"', highlightType: 'string' },
          { text: ',', highlightType: 'plain' }
        ],
        [
          { text: '  "cachingStrategy": ', highlightType: 'plain' },
          { text: '"IndexedDB Client Cache (50MB+)"', highlightType: 'string' },
          { text: ',', highlightType: 'plain' }
        ],
        [
          { text: '  "aiApplications": [', highlightType: 'plain' }
        ],
        [
          { text: '    "Vocab Learning Engine"', highlightType: 'string' },
          { text: ',', highlightType: 'plain' }
        ],
        [
          { text: '    "Contextual Prompting Systems"', highlightType: 'string' }
        ],
        [
          { text: '  ],', highlightType: 'plain' }
        ],
        [
          { text: '  "exportCapabilities": [', highlightType: 'plain' }
        ],
        [
          { text: '    "High-resolution PDF"', highlightType: 'string' },
          { text: ',', highlightType: 'plain' }
        ],
        [
          { text: '    "Custom PNG canvas mapping"', highlightType: 'string' }
        ],
        [
          { text: '  ]', highlightType: 'plain' }
        ],
        [
          { text: '}', highlightType: 'plain' }
        ]
      ]
    },
    {
      name: 'networks.yaml',
      type: 'yaml',
      icon: FileCode,
      impactTitle: 'Enterprise Network & Infrastructure',
      impactMessage: 'Maintained 99.9% uptime for business-critical infrastructures. Configured secure multi-vendor networks (Cisco, Juniper, Palo Alto, Fortinet) and engineered DDoS traffic mitigation using Netflow, Grafana, and Zabbix.',
      codeLines: [
        [
          { text: 'network_infrastructure:', highlightType: 'keyword' }
        ],
        [
          { text: '  target_uptime: ', highlightType: 'plain' },
          { text: '99.9%', highlightType: 'number' }
        ],
        [
          { text: '  certifications: ', highlightType: 'plain' },
          { text: '[CCNP Routing & Switching]', highlightType: 'string' }
        ],
        [
          { text: '  infrastructure_vendors:', highlightType: 'keyword' }
        ],
        [
          { text: '    - Cisco', highlightType: 'string' }
        ],
        [
          { text: '    - Juniper', highlightType: 'string' }
        ],
        [
          { text: '    - Palo Alto Networks', highlightType: 'string' }
        ],
        [
          { text: '    - Fortinet', highlightType: 'string' }
        ],
        [
          { text: '  ddos_mitigation:', highlightType: 'keyword' }
        ],
        [
          { text: '    mechanism: ', highlightType: 'plain' },
          { text: '"Dynamic Traffic Redirection"', highlightType: 'string' }
        ],
        [
          { text: '    tools: ', highlightType: 'plain' },
          { text: '[Grafana, Zabbix, Netflow, Noction]', highlightType: 'string' }
        ]
      ]
    },
    {
      name: 'automation.ts',
      type: 'typescript',
      icon: FileCode,
      impactTitle: 'Developer Velocity & Automation',
      impactMessage: 'Authored python automations for parsing router netflow data, mitigating live network issues. Implemented secure CI/CD pipelines (Docker, Jenkins, Firebase, Supabase) supporting zero-downtime releases.',
      codeLines: [
        [
          { text: 'const', highlightType: 'keyword' },
          { text: ' ', highlightType: 'plain' },
          { text: 'automationEngine', highlightType: 'plain' },
          { text: ' = {', highlightType: 'plain' }
        ],
        [
          { text: '  scriptingLanguages: [', highlightType: 'plain' },
          { text: '"TypeScript"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"Python"', highlightType: 'string' },
          { text: '],', highlightType: 'plain' }
        ],
        [
          { text: '  parsingAutomation: ', highlightType: 'plain' },
          { text: '"Netflow traceroute telemetry parsing"', highlightType: 'string' },
          { text: ',', highlightType: 'plain' }
        ],
        [
          { text: '  ci_cd: [', highlightType: 'plain' },
          { text: '"Docker"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"Jenkins"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"GitHub Actions"', highlightType: 'string' },
          { text: '],', highlightType: 'plain' }
        ],
        [
          { text: '  cloudBackends: [', highlightType: 'plain' },
          { text: '"Supabase"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"Firebase Auth/Firestore"', highlightType: 'string' },
          { text: '],', highlightType: 'plain' }
        ],
        [
          { text: '  testingFrameworks: [', highlightType: 'plain' },
          { text: '"Jest"', highlightType: 'string' },
          { text: ', ', highlightType: 'plain' },
          { text: '"Cypress"', highlightType: 'string' },
          { text: ']', highlightType: 'plain' }
        ],
        [
          { text: '};', highlightType: 'plain' }
        ]
      ]
    }
  ];

  const activeFile = files[activeFileIndex];

  const getHighlightClass = (type: string) => {
    switch (type) {
      case 'keyword': return 'text-[#ff7b72] font-semibold';
      case 'type': return 'text-[#79c0ff] font-medium';
      case 'string': return 'text-[#a5d6ff]';
      case 'comment': return 'text-[#8b949e] italic';
      case 'number': return 'text-[#d2a8ff]';
      default: return 'text-[#c9d1d9]';
    }
  };

  return (
    <section id="expertise" className="py-24 relative px-6 lg:px-24">
      {/* Decorative Blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full glow-violet opacity-[0.03] blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Title */}
        <div className="text-left space-y-4">
          <div className="font-mono text-xs uppercase tracking-widest text-accent-cyan flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" /> Technical Ecosystem
          </div>
          <h2 className="font-heading text-3xl sm:text-5xl font-bold tracking-tight">
            Code as Art.
          </h2>
          <p className="font-body text-text-secondary max-w-xl text-sm sm:text-base leading-relaxed">
            Hover over the interface properties below to see the business value mapping parsed dynamically.
          </p>
        </div>

        {/* IDE Layout Container - Fixed to Solid Premium Dark Theme */}
        <div className="bg-[#0D1117] rounded-xl overflow-hidden shadow-2xl border border-white/10 grid grid-cols-1 md:grid-cols-12 min-h-[500px]">
          
          {/* File Explorer Sidebar */}
          <div className="md:col-span-3 bg-[#161B22] border-r border-white/5 p-4 flex flex-col space-y-6">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 tracking-wider uppercase border-b border-white/5 pb-2">
              <span>Workspace Files</span>
              <FolderOpen className="w-3.5 h-3.5 text-slate-400" />
            </div>

            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-mono text-slate-400 px-2 py-1 select-none">
                <Folder className="w-3.5 h-3.5 text-accent-violet" />
                <span>src / config</span>
              </div>
              
              {files.map((file, idx) => (
                <button
                  key={file.name}
                  onClick={() => {
                    setActiveFileIndex(idx);
                    setHoveredLineIndex(null);
                  }}
                  className={`w-full flex items-center gap-2 px-3.5 py-2.5 rounded-md font-mono text-xs text-left transition-all duration-200 border ${
                    idx === activeFileIndex
                      ? 'bg-[#21262d] border-[#30363d] text-[#58a6ff] shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]'
                      : 'border-transparent text-slate-400 hover:text-white hover:bg-white/[0.03]'
                  }`}
                >
                  <FileCode className={`w-3.5 h-3.5 ${idx === activeFileIndex ? 'text-[#58a6ff]' : 'text-slate-500'}`} />
                  <span>{file.name}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Editor Workspace */}
          <div className="md:col-span-9 bg-[#0A0F19] flex flex-col">
            
            {/* Tab Header bar */}
            <div className="h-10 bg-[#161B22] border-b border-white/5 flex items-center justify-between px-4">
              <div className="flex items-center gap-2 flex-shrink-0">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
              </div>
              <div className="font-mono text-[10px] sm:text-xs text-slate-400 truncate max-w-[180px] sm:max-w-none ml-2">
                ~/fanstation/src/ecosystem/{activeFile.name}
              </div>
              <div className="w-8 sm:w-12"></div>
            </div>

            {/* Code Editor Panels */}
            <div className="flex-1 p-4 sm:p-6 font-mono text-[11px] sm:text-sm leading-relaxed overflow-x-auto text-left relative bg-[#0A0F19]">
              <div className="absolute top-4 right-4 text-[10px] text-slate-600 pointer-events-none select-none hidden sm:block">
                {activeFile.type.toUpperCase()} EDITOR
              </div>
              
              {activeFile.codeLines.map((line, lineIdx) => (
                <div
                  key={lineIdx}
                  onMouseEnter={() => setHoveredLineIndex(lineIdx)}
                  onMouseLeave={() => setHoveredLineIndex(null)}
                  className={`flex items-start gap-3 sm:gap-6 py-0.5 px-2 rounded -mx-2 transition-colors duration-150 group cursor-default ${
                    hoveredLineIndex === lineIdx 
                      ? 'bg-white/[0.03]' 
                      : ''
                  }`}
                >
                  {/* Line Number */}
                  <span className="w-6 flex-shrink-0 text-right select-none text-slate-500 font-light border-r border-white/5 pr-2 sm:pr-3">
                    {lineIdx + 1}
                  </span>
                  
                  {/* Code tokens */}
                  <span className="flex-1 whitespace-pre-wrap break-words text-[#c9d1d9]">
                    {line.length === 0 ? ' ' : line.map((token, tokenIdx) => (
                      <span key={tokenIdx} className={getHighlightClass(token.highlightType)}>
                        {token.text}
                      </span>
                    ))}
                  </span>
                </div>
              ))}
            </div>

            {/* Console Value Impact Analyzer Panel */}
            <div className="bg-[#161B22] border-t border-white/5 p-4 font-mono text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-accent-cyan uppercase tracking-wider mb-2.5">
                <Terminal className="w-4 h-4" />
                <span>Value Impact Parser</span>
              </div>
              
              <div className="bg-[#0D1117] rounded-md p-3.5 border border-white/10 min-h-[90px] flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-accent-cyan mt-0.5 flex-shrink-0 animate-pulse" />
                <div className="space-y-1">
                  <div className="text-xs font-semibold text-white uppercase tracking-wide">
                    {activeFile.impactTitle}
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {activeFile.impactMessage}
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
