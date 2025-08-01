const FooterSection = () => {
  return (
    <footer className="py-16 bg-background border-t border-border">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Kontakt-Überschrift */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-foreground">Kontakt</h2>
        </div>

        {/* Kontakt-Info */}
        <div className="text-center space-y-6">
          
          {/* Email */}
          <div>
            <a 
              href="mailto:kontakt@bakkali.io"
              className="text-lg text-primary hover:underline"
            >
              kontakt@bakkali.io
            </a>
          </div>
          
          {/* LinkedIn */}
          <div>
            <a 
              href="https://linkedin.com/in/bakkali"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg text-primary hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center mt-12 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2024 bakkali.io
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;