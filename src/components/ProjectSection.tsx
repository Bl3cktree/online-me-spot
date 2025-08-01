const ProjectSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Vollständige E-Commerce-Lösung mit React, Node.js und Stripe-Integration. Verarbeitet täglich über 1000 Transaktionen.",
      tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
      link: "github.com/bakkali/ecommerce-platform"
    },
    {
      title: "Task Management App",
      description: "Kollaborative Projektmanagement-Anwendung mit Echtzeit-Updates und Team-Funktionen.",
      tech: ["Next.js", "TypeScript", "MongoDB", "WebSockets"],
      link: "github.com/bakkali/task-manager"
    },
    {
      title: "Analytics Dashboard",
      description: "Datenvisualisierungs-Dashboard für Business Intelligence mit interaktiven Charts und Reports.",
      tech: ["Vue.js", "Python", "FastAPI", "D3.js"],
      link: "github.com/bakkali/analytics-dashboard"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground">Projekte</h2>
        </div>

        {/* Projekt-Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-border p-6 space-y-4 hover:shadow-card transition-shadow duration-200"
            >
              
              {/* Projekttitel */}
              <h3 className="text-lg font-medium text-foreground">
                {project.title}
              </h3>
              
              {/* Beschreibung */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="space-y-2">
                <div className="text-xs text-muted-foreground">Technologien:</div>
                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <span 
                      key={tech} 
                      className="text-xs px-2 py-1 bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Link */}
              <div className="pt-2">
                <a 
                  href={`https://${project.link}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  {project.link}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;