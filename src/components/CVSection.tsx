const CVSection = () => {
  const experience = [
    {
      period: "2022 - Heute",
      title: "Senior Full-Stack Developer",
      company: "TechCorp GmbH",
      description: "Entwicklung und Wartung von Enterprise-Webanwendungen mit React, Node.js und AWS."
    },
    {
      period: "2020 - 2022",
      title: "Frontend Developer",
      company: "Digital Agency",
      description: "Responsive Webentwicklung und UI/UX-Implementierung für verschiedene Kundenprojekte."
    },
    {
      period: "2018 - 2020",
      title: "Junior Developer",
      company: "StartupXYZ",
      description: "Mitarbeit an der Entwicklung einer SaaS-Plattform von der MVP-Phase bis zur Skalierung."
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Next.js", "Node.js", "Python",
    "PostgreSQL", "MongoDB", "AWS", "Docker", "Git", "Figma"
  ];

  const tools = [
    "VS Code", "Postman", "Docker Desktop", "AWS Console", 
    "GitHub", "Figma", "Linear", "Slack"
  ];

  return (
    <section id="cv" className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-light text-foreground">Lebenslauf</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16">
          
          {/* Berufserfahrung */}
          <div className="space-y-8">
            <h3 className="text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
              Berufserfahrung
            </h3>
            
            <div className="space-y-8">
              {experience.map((job, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-sm text-muted-foreground">{job.period}</div>
                  <h4 className="font-medium text-foreground">{job.title}</h4>
                  <div className="text-sm text-muted-foreground">{job.company}</div>
                  <p className="text-sm text-muted-foreground leading-relaxed pt-1">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills & Tools */}
          <div className="space-y-8">
            
            {/* Skills */}
            <div>
              <h3 className="text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
                Skills
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {skills.map((skill) => (
                  <div key={skill} className="text-sm text-muted-foreground py-1">
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="text-xl font-medium text-foreground mb-6 pb-2 border-b border-border">
                Tools
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((tool) => (
                  <div key={tool} className="text-sm text-muted-foreground py-1">
                    {tool}
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