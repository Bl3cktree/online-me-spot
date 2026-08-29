import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404: Seite nicht gefunden:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="min-h-screen flex items-center justify-center bg-background px-6">
      <div className="max-w-lg text-center space-y-6">
        <p className="font-mono text-sm text-dar-accent">Fehler 404</p>
        <h1 className="text-5xl md:text-6xl font-light text-dar-primary tracking-tight dark:text-white">
          Seite nicht gefunden
        </h1>
        <div className="w-12 h-0.5 bg-dar-accent mx-auto"></div>
        <p className="text-muted-foreground leading-relaxed">
          Die aufgerufene Seite existiert nicht oder wurde verschoben.
        </p>
        <div className="pt-4">
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-8 py-4 border border-dar-primary text-dar-primary hover:bg-dar-primary hover:text-white transition-all duration-300 focus:outline-none focus:shadow-focus dark:border-border dark:text-foreground dark:hover:bg-dar-accent dark:hover:text-white"
          >
            <span className="font-medium">Zur Startseite</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
