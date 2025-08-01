import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and analytics dashboard. Built for a client with 50,000+ products.",
      technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
      features: [
        "Real-time inventory tracking",
        "Advanced search and filtering",
        "Payment processing with Stripe",
        "Admin analytics dashboard"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Live in Production"
    },
    {
      title: "Task Management App",
      description: "A collaborative project management tool with real-time updates, file sharing, and team communication features. Used by 5,000+ teams worldwide.",
      technologies: ["Vue.js", "Python", "FastAPI", "WebSockets", "MongoDB"],
      features: [
        "Real-time collaboration",
        "File upload and sharing",
        "Team messaging",
        "Progress tracking"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Active Development"
    },
    {
      title: "Healthcare Dashboard",
      description: "HIPAA-compliant patient management system with appointment scheduling, medical records, and billing integration for healthcare providers.",
      technologies: ["Angular", "C#", ".NET Core", "SQL Server", "Azure"],
      features: [
        "HIPAA-compliant architecture",
        "Appointment scheduling",
        "Medical records management",
        "Insurance billing integration"
      ],
      liveUrl: "#",
      githubUrl: "#",
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, demonstrating expertise in full-stack development and problem-solving
          </p>
        </div>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="border-border/50 shadow-card hover:shadow-lg transition-all duration-300 animate-slide-up group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <Badge 
                    variant="outline" 
                    className={`text-xs ${
                      project.status === 'Live in Production' 
                        ? 'bg-green-50 text-green-700 border-green-200' 
                        : project.status === 'Active Development'
                        ? 'bg-blue-50 text-blue-700 border-blue-200'
                        : 'bg-gray-50 text-gray-700 border-gray-200'
                    }`}
                  >
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3 pt-4">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/20 hover:bg-primary/5"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 border-primary/20 hover:bg-primary/5"
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;