import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeMark, SiteFoot, SubpageKeys } from "@/components/BiosParts";
import { useBiosBackground, useBiosSubpageKeys } from "@/hooks/use-bios-page";
import "@/components/bios.css";

const NotFound = () => {
  const location = useLocation();
  useBiosBackground();
  useBiosSubpageKeys();

  useEffect(() => {
    console.error("404: Seite nicht gefunden:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="bios bios-page">
      <div className="bios-wrap bios-page-wrap">
        <HomeMark />

        <main className="bios-panel">
          <header className="bios-head">
            <h1>Fehler 404</h1>
            <span className="bios-role">Seite nicht gefunden</span>
          </header>

          <div className="bios-error">
            <p className="bios-step">Boot-Gerät nicht gefunden</p>
            <p>Die aufgerufene Seite existiert nicht oder wurde verschoben.</p>
            <p>
              <Link to="/">Zur Startseite</Link>
            </p>
          </div>

          <SubpageKeys />
        </main>

        <SiteFoot to="/legal" label="Impressum und Datenschutz" />
      </div>
    </div>
  );
};

export default NotFound;
