import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Lead a team of 5 developers building scalable microservices architecture. Improved system performance by 40% and reduced deployment time by 60%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "PostgreSQL"],
      achievements: [
        "Architected and implemented a real-time data processing pipeline handling 1M+ events daily",
        "Mentored 3 junior developers, improving team productivity by 25%",
        "Led the migration from monolith to microservices, reducing system downtime by 80%"
      ]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2020 - 2022",
      description: "Built the entire frontend and backend for a B2B SaaS platform from scratch. Grew the platform from 0 to 10,000+ active users.",
      technologies: ["Vue.js", "Python", "FastAPI", "MongoDB", "GCP"],
      achievements: [
        "Developed a complete CRM system serving 10,000+ users",
        "Implemented automated testing, achieving 95% code coverage",
        "Optimized database queries, reducing response time by 50%"
      ]
    },
    {
      title: "Software Developer",
      company: "Digital Solutions Ltd",
      location: "New York, NY",
      period: "2018 - 2020",
      description: "Developed and maintained web applications for various clients in healthcare and finance industries.",
      technologies: ["Angular", "C#", ".NET Core", "SQL Server", "Azure"],
      achievements: [
        "Built HIPAA-compliant healthcare management system",
        "Reduced client onboarding time by 70% through automation",
        "Maintained 99.9% uptime across all client applications"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Professional Experience</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            8+ years of experience building impactful software solutions across various industries
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className="border-border/50 shadow-card hover:shadow-lg transition-all duration-300 animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground">{exp.title}</h3>
                    <p className="text-xl text-primary font-medium">{exp.company}</p>
                  </div>
                  <div className="flex flex-col lg:items-end gap-2">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <CalendarDays className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
                
                <div className="space-y-4">
                  <h4 className="font-semibold text-foreground">Key Achievements:</h4>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies Used:</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-accent/10 text-accent">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;