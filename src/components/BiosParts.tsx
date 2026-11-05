import { Link } from "react-router-dom";
import { BIOS_EMAIL } from "@/hooks/use-bios-page";

export const MonoLogo = () => (
  <div className="bios-mono" aria-hidden="true">
    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
      <path fill="#FFFFFF" d="M2 2h2v12H2zM4 6h5v2H4zM9 7h1v1H9zM9 8h2v4H9zM4 12h5v2H4zM9 12h1v1H9z" />
      <path fill="#FFE14D" d="M12 12h2v2h-2z" />
    </svg>
  </div>
);

export const SiteFoot = ({ to, label }: { to: string; label: string }) => (
  <div className="bios-foot">
    <p>
      © 2026 Younes Bakkali · <Link to={to}>{label}</Link>
    </p>
    <MonoLogo />
  </div>
);

export const HomeMark = () => (
  <header className="bios-hero bios-hero-sub">
    <Link to="/" className="bios-home" aria-label="bakkali.io, zur Startseite">
      <span className="bios-wm">
        bakkali<span className="bios-dot">.</span>io
      </span>
    </Link>
  </header>
);

export const SubpageKeys = () => (
  <footer className="bios-keys">
    <Link to="/" className="bios-key-link">
      <span className="bios-cap">Esc</span> Zur Startseite
    </Link>
    <a className="bios-key-mail" href={`mailto:${BIOS_EMAIL}`}>
      <span className="bios-cap">F10</span> Kontakt
      <span className="bios-klong">aufnehmen</span>
    </a>
  </footer>
);
