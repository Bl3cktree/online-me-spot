import { ExternalLink, Github } from "lucide-react";

const ProjectSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Vollständige E-Commerce-Lösung mit React, Node.js und Stripe-Integration. Verarbeitet täglich über 1.000 Transaktionen mit optimierter Performance.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      github: "github.com/bakkali/ecommerce-platform",
      demo: "ecommerce-demo.bakkali.io",
      status: "Production"
    },
    {
      title: "Task Management SaaS",
      description: "Kollaborative Projektmanagement-Anwendung mit Echtzeit-Updates, Team-Funktionen und erweiterten Analytics für moderne Teams.",
      tech: ["Next.js", "TypeScript", "MongoDB", "WebSockets", "Vercel"],
      github: "github.com/bakkali/task-manager",
      demo: "tasks.bakkali.io",
      status: "Beta"
    },
    {
      title: "Analytics Dashboard",
      description: "Business Intelligence Dashboard mit interaktiven Charts, Real-Time Data Processing und customizable Reports für Datenvisualisierung.",
      tech: ["Vue.js", "Python", "FastAPI", "D3.js", "Docker"],
      github: "github.com/bakkali/analytics-dashboard",
      demo: "analytics.bakkali.io",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Production': return 'bg-dar-accent text-white';
      case 'Beta': return 'bg-blue-500 text-white';
      default: return 'bg-dar-neutral-200 text-dar-neutral-800';
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        
        {/* Überschrift */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-dar-primary mb-4">Projekte</h2>
          <div className="w-12 h-0.5 bg-dar-accent mx-auto"></div>
        </div>

        {/* Projekt-Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-dar-neutral-200 hover:border-dar-accent transition-all duration-300 group"
            >
              
              {/* Header */}
              <div className="p-8 space-y-6">
                
                {/* Title & Status */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium text-dar-primary group-hover:text-dar-accent transition-colors">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-mono ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Beschreibung */}
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="text-xs text-dar-neutral-800 font-mono uppercase tracking-wider">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-dar-neutral-100 text-dar-neutral-800 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer Links */}
              <div className="px-8 pb-8 pt-4 border-t border-dar-neutral-200">
                <div className="flex gap-4 text-sm">
                  <a 
                    href={`https://${project.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-dar-primary transition-colors"
                  >
                    <Github className="w-4 h-4" />
                    <span className="font-mono">Code</span>
                  </a>
                  <a 
                    href={`https://${project.demo}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-muted-foreground hover:text-dar-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="font-mono">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;