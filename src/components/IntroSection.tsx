const IntroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-2xl text-center space-y-8 animate-fade-in">
        {/* Name */}
        <h1 className="text-5xl md:text-6xl font-light text-foreground tracking-tight">
          Bakkali
        </h1>
        
        {/* Claim/Slogan */}
        <p className="text-xl md:text-2xl text-muted-foreground font-light">
          Full-Stack Developer & Digital Architect
        </p>
        
        {/* Kurze Bio */}
        <div className="max-w-lg mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed">
            Spezialisiert auf moderne Webtechnologien und skalierbare Softwarelösungen. 
            Verwandle komplexe Anforderungen in elegante, benutzerfreundliche Anwendungen.
          </p>
        </div>
        
        {/* Minimaler CTA */}
        <div className="pt-8">
          <a 
            href="#cv" 
            className="inline-block px-8 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
          >
            Mehr erfahren
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;