const CVSection = () => {
  const experience = [
    {
      period: "seit 2019",
      title: "System Operations Engineer",
      company: "Cyberdyne IT GmbH",
      description: "Verantwortung für IT-Infrastruktur, Endpoint Management und Monitoring-Systeme. Entwicklung von PowerShell-Automatisierungen und strukturierte Lösungsansätze."
    },
    {
      period: "2017 - 2019",
      title: "IT-Spezialist",
      company: "Ditcon GmbH",
      description: "Systemintegration und IT-Lösungen für mittelständische Unternehmen mit Fokus auf Sicherheit und Prozessoptimierung."
    },
    {
      period: "2016 - 2017",
      title: "IT-Generalist",
      company: "Bluehex (freiberuflich)",
      description: "Entwicklung maßgeschneiderter IT-Lösungen und umfassende Systemadministration für verschiedene Kundenprojekte."
    },
    {
      period: "2014 - 2016",
      title: "IT-Administrator",
      company: "A.M Bauunternehmung UG (freiberuflich)",
      description: "Aufbau und Wartung der IT-Infrastruktur, Implementierung von Backup-Strategien und Netzwerk-Management."
    }
  ];

  const skills = [
    "PowerShell", "Endpoint Management", "System Administration", "Monitoring",
    "Automation", "IT Infrastructure", "Windows Server", "Azure AD",
    "Microsoft 365", "Intune", "Git", "Datto RMM",
    "Virtualisierung (Hyper-V / ESXi)", "Netzwerk & Switching (Aruba / HPE)",
    "IT-Security", "Schwachstellenmanagement", "NIS2-Umsetzung"
  ];

  const tools = [
    "PowerShell", "Microsoft Intune", "Datto RMM", "Azure AD", "Microsoft 365",
    "Windows Server", "Git", "Monitoring-Frameworks", "PRTG", "Nagios",
    "PowerShell ISE", "Azure Portal", "Office 365 Admin",
    "Hyper-V", "VMware ESXi / vSphere", "Aruba Switches", "HPE Switches",
    "vektorscan.com"
  ];

  return (
    <section id="cv" className="py-24 bg-dar-neutral-50 dark:bg-background">
      <div className="container mx-auto">
        
        {/* Überschrift */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-dar-primary mb-6 dark:text-foreground">Über mich</h2>
          <div className="w-12 h-0.5 bg-dar-accent mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
          System Operations Engineer mit über 15 Jahren Erfahrung in der IT-Branche.
          Mein Fokus liegt auf Endpoint Management, Monitoring und Automatisierung. 
          Ich arbeite strukturiert, sicherheitsbewusst und lösungsorientiert.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Berufserfahrung */}
          <div className="lg:col-span-2 space-y-12">
            <h3 className="text-2xl font-medium text-dar-primary mb-8 pb-4 border-b border-dar-neutral-200 dark:text-foreground dark:border-border">
              Berufserfahrung
            </h3>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-dar-neutral-200 dark:border-border">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-dar-accent rounded-full"></div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-medium text-dar-primary dark:text-foreground">{job.title}</h4>
                        <p className="text-dar-accent font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm font-mono text-dar-neutral-800 bg-dar-neutral-100 px-3 py-1 rounded-full w-fit dark:bg-dar-neutral-800 dark:text-white">
                        {job.period}
                      </div> 
                    </div>
                    <p className="text-muted-foreground leading-relaxed dark:text-muted-foreground">
                      {job.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-12">
            
            {/* Skills */}
            <div>
              <h3 className="text-2xl font-medium text-dar-primary mb-8 pb-4 border-b border-dar-neutral-200 dark:text-foreground dark:border-border">
                Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-dar-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground group-hover:text-dar-primary transition-colors dark:text-muted-foreground">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl font-medium text-dar-primary mb-8 pb-4 border-b border-dar-neutral-200 dark:text-foreground dark:border-border">
                Tools
              </h3>
              <div className="space-y-3">
                {tools.map((tool, index) => (
                  <div key={tool} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-dar-neutral-200 rounded-full group-hover:bg-dar-accent transition-colors dark:bg-dar-neutral-800"></div>
                    <span className="text-sm font-mono text-muted-foreground group-hover:text-dar-primary transition-colors dark:text-muted-foreground">
                      {tool}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CVSection;