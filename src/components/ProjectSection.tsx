import { ExternalLink } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  status: string;
  url?: string;
};

const ProjectSection = () => {
  const projects: Project[] = [
    {
      title: "vektorscan.com",
      description:
        "Eigene SaaS-Plattform für automatisiertes Schwachstellen-Scanning und Angriffsvektor-Analyse. Prüft IT-Systeme kontinuierlich auf bekannte Sicherheitslücken (CVE) und unterstützt Unternehmen bei der NIS2-konformen Dokumentation und dem Reporting.",
      tech: ["Schwachstellen-Scanning", "NIS2", "SaaS", "Automatisierung"],
      status: "Produktiv",
      url: "https://vektorscan.com",
    },
    {
      title: "Geoelektrik-Wassermessung",
      description: "Hardware-basiertes System zur Messung von Grundwasserpegeln mittels geoelektrischer Verfahren. Entwicklung der Datenauswertung in Python mit statistischer Analyse und Visualisierung der Messergebnisse.",
      tech: ["Python", "Hardware Integration", "Datenanalyse", "Matplotlib"],
      status: "Forschungsprojekt"
    },
    {
      title: "PowerShell Monitoring Framework",
      description: "Umfassendes Monitoring-System für die IT-Infrastruktur bei Cyberdyne IT. Automatisierte Überwachung, intelligentes Alert-Handling und Integration in bestehende ITSM-Workflows.",
      tech: ["PowerShell", "Windows Server", "Alert Management", "Automation"],
      status: "Produktiv"
    },
    {
      title: "Visuelles Musikfrequenzsystem",
      description: "DIY-Projekt zur Visualisierung von Musikfrequenzen durch Laser-Projektion. Verwendung von Membrane und Spiegeln zur Erzeugung dynamischer Lichtmuster basierend auf Audio-Input.",
      tech: ["Hardware Design", "Audio Processing", "Optik", "DIY Electronics"],
      status: "Experimentell"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Produktiv': return 'bg-dar-accent text-white';
      case 'Forschungsprojekt': return 'bg-blue-500 text-white';
      case 'Experimentell': return 'bg-orange-500 text-white';
      default: return 'bg-dar-neutral-200 text-dar-neutral-800 dark:bg-dar-neutral-800 dark:text-white';
    }
  };

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto">
        
        {/* Überschrift */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-dar-primary mb-4 dark:text-foreground">Projekte</h2>
          <div className="w-12 h-0.5 bg-dar-accent mx-auto"></div>
        </div>

        {/* Projekt-Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-card border border-dar-neutral-200 hover:border-dar-accent transition-all duration-300 group dark:border-border"
            >
              
              {/* Header */}
              <div className="p-8 space-y-6">
                
                {/* Title & Status */}
                <div className="flex items-start justify-between gap-4">
                  <h3 className="text-xl font-medium text-dar-primary group-hover:text-dar-accent transition-colors dark:text-foreground">
                    {project.title}
                  </h3>
                  <span className={`text-xs px-2 py-1 rounded-full font-mono ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
                
                {/* Beschreibung */}
                <p className="text-muted-foreground leading-relaxed text-sm dark:text-muted-foreground">
                  {project.description}
                </p>
                
                {/* Tech Stack */}
                <div className="space-y-3">
                  <div className="text-xs text-dar-neutral-800 font-mono uppercase tracking-wider dark:text-white">
                    Tech Stack
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span 
                        key={tech} 
                        className="text-xs px-2 py-1 bg-dar-neutral-100 text-dar-neutral-800 font-mono dark:bg-dar-neutral-800 dark:text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-8 pb-8 pt-4 border-t border-dar-neutral-200 dark:border-border">
                {project.url ? (
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs text-dar-primary font-mono uppercase tracking-wider hover:text-dar-accent transition-colors dark:text-foreground dark:hover:text-dar-accent"
                  >
                    {project.url.replace(/^https?:\/\//, "")}
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                ) : (
                  <div className="text-xs text-dar-neutral-800 font-mono uppercase tracking-wider dark:text-muted-foreground">
                    {project.status === 'Produktiv' ? 'Im produktiven Einsatz' :
                     project.status === 'Forschungsprojekt' ? 'Wissenschaftliches Projekt' :
                     'Experimenteller Aufbau'}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;