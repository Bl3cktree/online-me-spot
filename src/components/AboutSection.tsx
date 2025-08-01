import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code2, Lightbulb, Users, Target } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Code2,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Constantly learning new technologies and applying creative solutions to complex problems."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong relationships with teams and stakeholders to deliver exceptional results."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "Focused on delivering measurable impact and exceeding project expectations."
    }
  ];

  const skills = [
    "JavaScript", "TypeScript", "React", "Node.js", "Python", "AWS",
    "Docker", "PostgreSQL", "MongoDB", "GraphQL", "REST APIs", "CI/CD"
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl font-bold text-foreground mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate software engineer who loves turning complex problems into simple, 
            beautiful solutions. With a strong foundation in both frontend and backend development, 
            I bring ideas to life through code.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Story */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground">My Journey</h3>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                My journey in tech began 8 years ago when I discovered the power of code to solve 
                real-world problems. Since then, I've had the privilege of working with startups 
                and established companies, building everything from MVPs to enterprise-scale applications.
              </p>
              <p>
                I specialize in full-stack development with a particular passion for creating 
                intuitive user experiences backed by robust, scalable architectures. When I'm not coding, 
                you'll find me mentoring junior developers or contributing to open-source projects.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-medium text-foreground">Technical Skills</h4>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary">
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="space-y-6 animate-slide-up">
            <h3 className="text-2xl font-semibold text-foreground">What Drives Me</h3>
            <div className="grid gap-4">
              {values.map((value) => (
                <Card key={value.title} className="border-border/50 shadow-card hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg">
                        <value.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-2">{value.title}</h4>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {value.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;