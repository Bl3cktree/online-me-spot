const CVSection = () => {
  const experience = [
    {
      period: "2022 - Heute",
      title: "Senior Full-Stack Developer",
      company: "TechCorp GmbH",
      description: "Entwicklung und Wartung von Enterprise-Webanwendungen mit React, Node.js und AWS. Führung eines 5-köpfigen Entwicklerteams."
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Responsive Webentwicklung und UI/UX-Implementierung für verschiedene Kundenprojekte mit modernen Frameworks."
    },
    {
      period: "2018 - 2020",
      title: "Junior Developer",
      company: "StartupXYZ",
      description: "Mitarbeit an der Entwicklung einer SaaS-Plattform von der MVP-Phase bis zur erfolgreichen Skalierung."
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Vue.js", "Svelte",
    "Node.js", "Python", "Go", "PostgreSQL", "MongoDB", "Redis",
    "AWS", "Docker", "Kubernetes", "GraphQL", "REST APIs", "WebSockets"
  ];

  const tools = [
    "VS Code", "WebStorm", "Figma", "Linear", "Notion", "Postman", 
    "Docker Desktop", "AWS Console", "Vercel", "GitHub", "GitLab", "Slack"
  ];

  return (
    <section id="cv" className="py-24 bg-dar-neutral-50">
      <div className="container mx-auto">
        
        {/* Überschrift */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-light text-dar-primary mb-4">Lebenslauf</h2>
          <div className="w-12 h-0.5 bg-dar-accent mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-16">
          
          {/* Berufserfahrung */}
          <div className="lg:col-span-2 space-y-12">
            <h3 className="text-2xl font-medium text-dar-primary mb-8 pb-4 border-b border-dar-neutral-200">
              Berufserfahrung
            </h3>
            
            <div className="space-y-12">
              {experience.map((job, index) => (
                <div key={index} className="relative pl-8 border-l-2 border-dar-neutral-200">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-dar-accent rounded-full"></div>
                  
                  <div className="space-y-3">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                      <div>
                        <h4 className="text-lg font-medium text-dar-primary">{job.title}</h4>
                        <p className="text-dar-accent font-medium">{job.company}</p>
                      </div>
                      <div className="text-sm font-mono text-dar-neutral-800 bg-dar-neutral-100 px-3 py-1 rounded-full w-fit">
                        {job.period}
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
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
              <h3 className="text-2xl font-medium text-dar-primary mb-8 pb-4 border-b border-dar-neutral-200">
                Skills
              </h3>
              <div className="space-y-3">
                {skills.map((skill, index) => (
                  <div key={skill} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-dar-accent rounded-full"></div>
                    <span className="text-sm text-muted-foreground group-hover:text-dar-primary transition-colors">
                      {skill}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-2xl font-medium text-dar-primary mb-8 pb-4 border-b border-dar-neutral-200">
                Tools
              </h3>
              <div className="space-y-3">
                {tools.map((tool, index) => (
                  <div key={tool} className="flex items-center gap-3 group">
                    <div className="w-1.5 h-1.5 bg-dar-neutral-200 rounded-full group-hover:bg-dar-accent transition-colors"></div>
                    <span className="text-sm font-mono text-muted-foreground group-hover:text-dar-primary transition-colors">
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