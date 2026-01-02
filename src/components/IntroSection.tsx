const IntroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-4xl text-center space-y-12 animate-fade-in">
        {/* Name */}
        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-light text-dar-primary tracking-tight leading-none dark:text-white">
            Bakkali
          </h1>
          <div className="w-16 h-0.5 bg-dar-accent mx-auto"></div>
        </div>
        
        {/* Claim/Slogan */}
        <p className="text-xl md:text-2xl text-dar-neutral-800 font-light tracking-wide dark:text-foreground">
          System Operations Engineer
        </p>
        
        {/* Kurze Bio */}
        <div className="max-w-2xl mx-auto">
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed font-light">

            Ich komme aus dem Systembetrieb, denke in Automatisierung und arbeite mit einem klaren Ziel: 
            Komplexe IT soll einfach laufen.<br />

          </p>
        </div>

        
        {/* Tech Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-dar-neutral-50 border border-dar-neutral-200 rounded-full dark:bg-card dark:border-border">
          <span className="w-2 h-2 bg-dar-accent rounded-full animate-pulse"></span>
          <span className="text-sm text-dar-neutral-800 font-mono dark:text-dar-neutral-100">Available for projects</span>
        </div>
        
        {/* Minimaler CTA */}
        <div className="pt-8">
          <a
            href="#cv"
            onClick={(e) => {
              e.preventDefault();
              const el = document.getElementById("cv");
              if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
                // update the hash without jumping
                window.history.pushState(null, "", "#cv");
              }
            }}
            className="inline-flex items-center gap-3 px-8 py-4 border border-dar-primary text-dar-primary hover:bg-dar-primary hover:text-white transition-all duration-300 focus:outline-none focus:shadow-focus group dark:border-border dark:text-foreground dark:hover:bg-dar-accent dark:hover:text-white"
          >
            <span className="font-medium">Mehr erfahren</span>
            <span className="w-4 h-0.5 bg-current group-hover:w-6 transition-all duration-300"></span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
