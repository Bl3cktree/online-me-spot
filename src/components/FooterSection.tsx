import { Mail, Linkedin, ArrowUpRight } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-24 bg-dar-neutral-50 border-t border-dar-neutral-200">
      <div className="container mx-auto">
        
        {/* Kontakt-Überschrift */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-light text-dar-primary mb-4">Kontakt</h2>
          <div className="w-12 h-0.5 bg-dar-accent mx-auto"></div>
        </div>

        {/* Kontakt-Info */}
        <div className="max-w-2xl mx-auto">
          
          {/* Contact Cards */}
          <div className="grid sm:grid-cols-2 gap-6 mb-16">
            
            {/* Email */}
            <a 
              href="mailto:kontakt@bakkali.io"
              className="group p-8 bg-card border border-dar-neutral-200 hover:border-dar-accent transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dar-accent text-white rounded-lg group-hover:scale-110 transition-transform">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-mono text-dar-neutral-800 mb-1">Email</div>
                  <div className="text-dar-primary font-medium group-hover:text-dar-accent transition-colors">
                    kontakt@bakkali.io
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-dar-neutral-800 ml-auto group-hover:text-dar-accent transition-colors" />
              </div>
            </a>
            
            {/* LinkedIn */}
            <a 
              href="https://linkedin.com/in/bakkali"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-8 bg-card border border-dar-neutral-200 hover:border-dar-accent transition-all duration-300 hover:shadow-card"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-dar-primary text-white rounded-lg group-hover:scale-110 transition-transform">
                  <Linkedin className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-sm font-mono text-dar-neutral-800 mb-1">LinkedIn</div>
                  <div className="text-dar-primary font-medium group-hover:text-dar-accent transition-colors">
                    /in/bakkali
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-dar-neutral-800 ml-auto group-hover:text-dar-accent transition-colors" />
              </div>
            </a>
          </div>

          {/* CTA Text */}
          <div className="text-center">
            <p className="text-muted-foreground leading-relaxed">
              Bereit für Ihr nächstes Projekt?<br />
              Lassen Sie uns über Ihre Ideen sprechen.
            </p>
          </div>
        </div>

        {/* Copyright & Legal Links */}
        <div className="text-center mt-16 pt-8 border-t border-dar-neutral-200 space-y-4">
          <div className="flex justify-center items-center gap-6 text-sm">
            <a 
              href="/legal" 
              className="font-mono text-dar-neutral-800 hover:text-dar-accent transition-colors"
            >
              Impressum & Datenschutz
            </a>
          </div>
          <p className="text-sm font-mono text-dar-neutral-800">
            © 2024 bakkali.io — Built with attention to detail
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;