import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Mail, MapPin } from "lucide-react";
import heroPortrait from "@/assets/hero-portrait.jpg";

const HeroSection = () => {
  return (
    <section className="min-h-screen bg-gradient-background relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-primary opacity-5"></div>
      
      <div className="container mx-auto px-6 pt-20 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
                Available for new opportunities
              </Badge>
              
              <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-primary bg-clip-text text-transparent leading-tight">
                John Smith
              </h1>
              
              <h2 className="text-2xl lg:text-3xl text-secondary font-medium">
                Senior Software Engineer
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg">
                Passionate full-stack developer with 8+ years of experience building scalable web applications. 
                Specialized in React, Node.js, and cloud architecture.
              </p>
            </div>

            <div className="flex items-center gap-4 text-muted-foreground">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>john.smith@email.com</span>
              </div>
            </div>

            <div className="flex gap-4">
              <Button size="lg" className="bg-gradient-primary hover:opacity-90 shadow-hero">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </Button>
              
              <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/5">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative animate-slide-up">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-2xl transform rotate-3 opacity-20"></div>
              <img
                src={heroPortrait}
                alt="Professional portrait"
                className="relative rounded-2xl shadow-hero w-full h-[600px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;