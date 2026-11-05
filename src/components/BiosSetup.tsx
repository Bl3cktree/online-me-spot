import { useCallback, useEffect, useRef, useState, type ReactNode, type UIEvent } from "react";
import { Link } from "react-router-dom";
import { SiteFoot } from "@/components/BiosParts";
import { BIOS_EMAIL as EMAIL, isTypingTarget, useBiosBackground } from "@/hooks/use-bios-page";
import "./bios.css";

const LABELS = ["Start", "System", "Projekte", "Boot", "Kontakt"] as const;
const N = LABELS.length;
const LAST = N - 1;
const DESK_QUERY = "(min-width: 1024px)";
const REDUCE_QUERY = "(prefers-reduced-motion: reduce)";

const V_PAGE = true;

const WHEEL_LOCK_MS = 750;
const WHEEL_TAIL_MS = 250;
const EDGE_HOLD_MS = 400;
const SNAP_DELAY_MS = 140;
const SNAP_THRESHOLD = 0.08;
const SWIPE_X_PX = 50;
const SWIPE_Y_PX = 60;

const clamp = (i: number) => Math.max(0, Math.min(LAST, i));

const matches = (query: string) =>
  typeof window !== "undefined" && typeof window.matchMedia === "function"
    ? window.matchMedia(query).matches
    : false;


const BiosSetup = () => {
  const [desk, setDesk] = useState(() => matches(DESK_QUERY));
  const [reduce, setReduce] = useState(() => matches(REDUCE_QUERY));
  const [pos, setPos] = useState(0);
  const [idx, setIdx] = useState(0);
  const [dir, setDir] = useState(1);
  const [blink, setBlink] = useState(true);
  const [tick, setTick] = useState(0);

  const scrollerRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const live = useRef({ desk, reduce, idx });
  live.current = { desk, reduce, idx };
  const settled = useRef(0);
  const snapTimer = useRef<number>();
  const lockUntil = useRef(0);
  const lastWheel = useRef(0);
  const lastInner = useRef(0);
  const touch = useRef<{ x: number; y: number; atTop: boolean; atBottom: boolean } | null>(null);

  const cur = desk ? Math.round(pos) : idx;

  const go = useCallback((target: number) => {
    const i = clamp(target);
    const { desk: isDesk, reduce: noMotion, idx: curIdx } = live.current;
    const behavior: ScrollBehavior = noMotion ? "auto" : "smooth";

    if (isDesk) {
      const s = scrollerRef.current;
      if (!s) return;
      settled.current = i;
      s.scrollTo({ top: i * s.clientHeight, behavior });
      return;
    }

    if (i === curIdx) return;
    settled.current = i;
    setDir(i > curIdx ? 1 : -1);
    setIdx(i);

    const panel = panelRef.current;
    if (panel) {
      const top = panel.getBoundingClientRect().top;
      if (top < 0) window.scrollTo({ top: window.scrollY + top, behavior: "auto" });
    }
    const btn = navRef.current?.children[i] as HTMLElement | undefined;
    if (btn && navRef.current) navRef.current.scrollTo({ left: btn.offsetLeft - 8, behavior });
  }, []);

  useBiosBackground();

  useEffect(() => {
    if (typeof window.matchMedia !== "function") return;
    const dq = window.matchMedia(DESK_QUERY);
    const rq = window.matchMedia(REDUCE_QUERY);
    const onDesk = () => setDesk(dq.matches);
    const onReduce = () => setReduce(rq.matches);
    dq.addEventListener("change", onDesk);
    rq.addEventListener("change", onReduce);
    return () => {
      dq.removeEventListener("change", onDesk);
      rq.removeEventListener("change", onReduce);
    };
  }, []);

  useEffect(() => {
    if (desk) {
      setPos(settled.current);
      const s = scrollerRef.current;
      if (s) s.scrollTop = settled.current * s.clientHeight;
    } else {
      setIdx(settled.current);
    }
  }, [desk]);

  useEffect(() => {
    setTick(0);
    if (!blink || reduce) return;
    const t = window.setInterval(() => setTick((n) => n + 1), 500);
    return () => window.clearInterval(t);
  }, [blink, reduce]);

  useEffect(() => {
    const s = scrollerRef.current;
    if (!s) return;
    const onWheel = (e: WheelEvent) => {
      if (!live.current.desk) return;
      const dy = e.deltaY;
      if (Math.abs(dy) < 2) return;
      const d = dy > 0 ? 1 : -1;

      const now = Date.now();
      const gap = now - lastWheel.current;
      lastWheel.current = now;

      if (now < lockUntil.current) {
        e.preventDefault();
        if (gap < WHEEL_TAIL_MS) lockUntil.current = Math.max(lockUntil.current, now + WHEEL_TAIL_MS);
        return;
      }

      const hovered =
        e.target instanceof Element ? e.target.closest<HTMLElement>(".bios-main, .bios-help") : null;
      const pane =
        hovered ?? s.querySelector<HTMLElement>(`#bereich-${settled.current} .bios-main`);
      if (pane && pane.scrollHeight > pane.clientHeight + 1) {
        const canScroll =
          d > 0 ? pane.scrollTop + pane.clientHeight < pane.scrollHeight - 1 : pane.scrollTop > 0;
        if (canScroll) {
          lastInner.current = now;
          if (!hovered) {
            e.preventDefault();
            const unit = e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? pane.clientHeight : 1;
            pane.scrollBy({ top: dy * unit });
          }
          return;
        }
      }

      e.preventDefault();
      if (now - lastInner.current < EDGE_HOLD_MS) {
        lastInner.current = now;
        return;
      }
      const target = clamp(settled.current + d);
      if (target === settled.current) {
        lockUntil.current = now + WHEEL_TAIL_MS;
        return;
      }
      go(target);
      lockUntil.current = now + WHEEL_LOCK_MS;
    };
    s.addEventListener("wheel", onWheel, { passive: false });
    return () => s.removeEventListener("wheel", onWheel);
  }, [go]);

  useEffect(() => {
    const s = scrollerRef.current;
    if (!s) return;
    const onStart = (e: TouchEvent) => {
      const t = e.touches[0];
      const de = document.scrollingElement || document.documentElement;
      touch.current = {
        x: t.clientX,
        y: t.clientY,
        atTop: de.scrollTop <= 2,
        atBottom: de.scrollTop + window.innerHeight >= de.scrollHeight - 2,
      };
    };
    const onEnd = (e: TouchEvent) => {
      const start = touch.current;
      touch.current = null;
      if (live.current.desk || !start) return;
      const t = e.changedTouches[0];
      const dx = t.clientX - start.x;
      const dy = t.clientY - start.y;
      const i = live.current.idx;
      if (Math.abs(dx) > SWIPE_X_PX && Math.abs(dx) > 1.5 * Math.abs(dy)) {
        go(i + (dx < 0 ? 1 : -1));
        return;
      }
      if (V_PAGE && Math.abs(dy) > SWIPE_Y_PX && Math.abs(dy) > 1.5 * Math.abs(dx)) {
        if (dy < 0 && start.atBottom) go(i + 1);
        else if (dy > 0 && start.atTop && i > 0) go(i - 1);
      }
    };
    s.addEventListener("touchstart", onStart, { passive: true });
    s.addEventListener("touchend", onEnd, { passive: true });
    return () => {
      s.removeEventListener("touchstart", onStart);
      s.removeEventListener("touchend", onEnd);
    };
  }, [go]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.altKey || e.ctrlKey || e.metaKey || isTypingTarget(e.target)) return;
      const { desk: isDesk, idx: i } = live.current;
      const active = isDesk ? settled.current : i;
      switch (e.key) {
        case "ArrowLeft":
          e.preventDefault();
          go(active - 1);
          break;
        case "ArrowRight":
          e.preventDefault();
          go(active + 1);
          break;
        case "F2":
          e.preventDefault();
          setBlink((b) => !b);
          break;
        case "F10":
          e.preventDefault();
          window.location.href = `mailto:${EMAIL}`;
          break;
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  useEffect(() => () => window.clearTimeout(snapTimer.current), []);

  const onScroll = (e: UIEvent<HTMLDivElement>) => {
    const s = e.currentTarget;
    if (!live.current.desk || !s.clientHeight) return;
    setPos(Math.max(0, Math.min(LAST, s.scrollTop / s.clientHeight)));
    window.clearTimeout(snapTimer.current);
    snapTimer.current = window.setTimeout(() => {
      const q = s.scrollTop / s.clientHeight;
      let t = settled.current;
      if (q > t + SNAP_THRESHOLD) t = Math.ceil(q - SNAP_THRESHOLD);
      else if (q < t - SNAP_THRESHOLD) t = Math.floor(q + SNAP_THRESHOLD);
      t = clamp(t);
      settled.current = t;
      if (Math.abs(q - t) > 0.002) {
        s.scrollTo({ top: t * s.clientHeight, behavior: live.current.reduce ? "auto" : "smooth" });
      }
    }, SNAP_DELAY_MS);
  };

  const slideProps = (i: number) => {
    if (desk) return {};
    if (i !== cur) return { "data-hidden": "true" as const };
    return reduce ? {} : { className: `bios-slide ${dir > 0 ? "bios-anim-r" : "bios-anim-l"}` };
  };

  const renderSlide = ({ i, help, children }: { i: number; help: string; children: ReactNode }) => {
    const label = LABELS[i];
    return (
      <section className="bios-slide" id={`bereich-${i}`} aria-label={label} {...slideProps(i)}>
        <div className="bios-main">
          <p className="bios-step">
            {i + 1}/{N} · {label}
          </p>
          {children}
        </div>
        <aside className="bios-help" aria-label={`Hilfe zu ${label}`}>
          <h2 className="bios-h2">Hilfe</h2>
          <p>{help}</p>
        </aside>
      </section>
    );
  };

  const animate = blink && !reduce;
  const dotVisible = !animate || tick % 2 === 0;
  const soonDots = animate ? tick % 4 : 3;

  return (
    <div className="bios" ref={scrollerRef} onScroll={onScroll}>
      <div className="bios-tall" style={{ height: desk ? `${N * 100}vh` : "auto" }}>
        <div className="bios-stage">
          <div className="bios-wrap">
            <section className="bios-hero" aria-label="Selbsttest">
              <p className="bios-wm">
                bakkali
                <span className="bios-dot" style={{ opacity: dotVisible ? 1 : 0 }}>
                  .
                </span>
                io
              </p>
              <div className="bios-post">
                <p>
                  Erfahrung, 15+ Jahre ..... <span className="bios-ok">OK</span>
                </p>
                <p>
                  Endpoint Management ...... <span className="bios-ok">OK</span>
                </p>
                <p>
                  Monitoring ............... <span className="bios-ok">OK</span>
                </p>
                <p>
                  Automatisierung .......... <span className="bios-ok">OK</span>
                </p>
                <p>
                  Observability ............ <span className="bios-load">wird geladen</span>
                </p>
              </div>
            </section>

            <div className="bios-panel" ref={panelRef}>
              <header className="bios-head">
                <h1>Younes Bakkali</h1>
                <span className="bios-role">System Operations Engineer</span>
              </header>

              <nav className="bios-tabs" aria-label="Bereiche" ref={navRef}>
                {LABELS.map((label, i) => (
                  <button
                    key={label}
                    type="button"
                    className="bios-tab"
                    aria-current={i === cur ? "true" : "false"}
                    onClick={() => go(i)}
                  >
                    {label}
                  </button>
                ))}
              </nav>

              <div className="bios-viewport">
                <div
                  className="bios-track"
                  style={{ transform: desk ? `translateX(${-pos * (100 / N)}%)` : undefined }}
                >
                  {renderSlide({
                    i: 0,
                    help: "Mit den Reitern oder ← → durch die Bereiche. F10 für Kontakt.",
                    children: (
                      <>
                        <p className="bios-lead">
                          Ich komme aus dem Systembetrieb, denke in Automatisierung und arbeite mit einem
                          klaren Ziel: Komplexe IT soll einfach laufen.
                        </p>
                        <h2 className="bios-h2">Vision</h2>
                        <p className="bios-text">
                          Einfach laufen heißt für mich: Ein System erkennt die Ursache eines Problems (Root
                          Cause Analysis) und behebt sie selbst (Closed-Loop-Remediation). Nachvollziehbar und
                          beobachtbar für den Menschen, keine Blackbox.
                        </p>
                      </>
                    ),
                  })}

                  {renderSlide({
                    i: 1,
                    help: "Vom Systembetrieb über Monitoring zur Observability.",
                    children: (
                      <>
                        <dl className="bios-dl">
                          <div className="bios-row">
                            <dt>Schwerpunkt</dt>
                            <dd>Endpoint Management, Monitoring, Automatisierung</dd>
                          </div>
                          <div className="bios-row">
                            <dt>Ab 2027</dt>
                            <dd>
                              Coming soon
                              <span className="bios-soon" aria-hidden="true">
                                {[0, 1, 2].map((d) => (
                                  <span key={d} style={{ opacity: d < soonDots ? 1 : 0 }}>
                                    .
                                  </span>
                                ))}
                              </span>
                            </dd>
                          </div>
                          <div className="bios-row">
                            <dt>Richtung</dt>
                            <dd>Observability</dd>
                          </div>
                        </dl>
                        <h2 className="bios-h2">Stationen</h2>
                        <ol className="bios-rows">
                          <li className="bios-row">
                            <span>seit 2019</span>
                            <span>System Operations Engineer · Cyberdyne IT GmbH</span>
                          </li>
                          <li className="bios-row">
                            <span>2017 bis 2019</span>
                            <span>IT-Spezialist · Ditcon GmbH</span>
                          </li>
                          <li className="bios-row">
                            <span>2016 bis 2017</span>
                            <span>IT-Generalist · Bluehex, freiberuflich</span>
                          </li>
                          <li className="bios-row">
                            <span>2014 bis 2016</span>
                            <span>IT-Administrator · A.M Bauunternehmung UG, freiberuflich</span>
                          </li>
                        </ol>
                        <h2 className="bios-h2">Werkzeuge</h2>
                        <dl className="bios-dl">
                          <div className="bios-row">
                            <dt>Endpoint und Plattform</dt>
                            <dd>Intune, Azure AD, Microsoft 365, Windows Server, Datto RMM</dd>
                          </div>
                          <div className="bios-row">
                            <dt>Monitoring</dt>
                            <dd>PRTG, Nagios, eigene Frameworks</dd>
                          </div>
                          <div className="bios-row">
                            <dt>Automatisierung</dt>
                            <dd>PowerShell, Git</dd>
                          </div>
                          <div className="bios-row">
                            <dt>Infrastruktur und Security</dt>
                            <dd>Hyper-V, ESXi, Aruba, HPE, Schwachstellenmanagement, NIS2</dd>
                          </div>
                        </dl>
                      </>
                    ),
                  })}

                  {renderSlide({
                    i: 2,
                    help: "Produkt läuft, im Lab wird ausprobiert.",
                    children: (
                      <>
                        <h2 className="bios-h2 is-first">Produkt</h2>
                        <p>
                          <a href="https://vektorscan.com">vektorscan.com</a>{" "}
                          <span className="bios-mut">· produktiv</span>
                        </p>
                        <p className="bios-sub" style={{ maxWidth: "36em" }}>
                          Eigene SaaS-Plattform für Schwachstellen-Scanning und Angriffsvektor-Analyse, mit
                          NIS2-konformer Dokumentation.
                        </p>
                        <h2 className="bios-h2">Lab</h2>
                        <ul className="bios-lab">
                          <li>
                            <p className="bios-strong">
                              Geoelektrik-Wassermessung <span className="bios-mut-inline">· Forschung</span>
                            </p>
                            <p className="bios-sub">Grundwasserpegel per Geoelektrik, Auswertung in Python.</p>
                          </li>
                          <li>
                            <p className="bios-strong">
                              Visuelles Musikfrequenzsystem{" "}
                              <span className="bios-mut-inline">· experimentell</span>
                            </p>
                            <p className="bios-sub">
                              Laserprojektion von Musikfrequenzen über Membran und Spiegel.
                            </p>
                          </li>
                        </ul>
                      </>
                    ),
                  })}

                  {renderSlide({
                    i: 3,
                    help: "Die Reihenfolge ist die Priorität. Status ändert sich, sobald etwas live ist.",
                    children: (
                      <>
                        <p className="bios-mut" style={{ marginBottom: 20 }}>
                          Boot-Reihenfolge: was als Nächstes geladen wird.
                        </p>
                        <ol className="bios-boot">
                          <li>
                            <span className="bios-num">1.</span>
                            <div>
                              <p className="bios-strong">
                                Observability-Lab <span className="bios-mut-inline">· wird geladen</span>
                              </p>
                              <p className="bios-sub">
                                Eigene Dienste wie bakkali.io und Vektorscan mit offenen Werkzeugen überwachen
                                und die Messwerte hier zeigen.
                              </p>
                            </div>
                          </li>
                          <li>
                            <span className="bios-num">2.</span>
                            <div>
                              <p className="bios-strong">
                                AgentOps-Framework <span className="bios-mut-inline">· geplant</span>
                              </p>
                              <p className="bios-sub">
                                KI-Agenten aufbauen, die sich überwachen und nachvollziehen lassen, und das Setup
                                als Framework anbieten.
                              </p>
                            </div>
                          </li>
                          <li>
                            <span className="bios-num">3.</span>
                            <div>
                              <p className="bios-strong">[Platzhalter: drittes Vorhaben]</p>
                            </div>
                          </li>
                          <li>
                            <span className="bios-num">4.</span>
                            <div>
                              <p className="bios-strong">[Platzhalter: persönliches Projekt]</p>
                            </div>
                          </li>
                        </ol>
                      </>
                    ),
                  })}

                  {renderSlide({
                    i: 4,
                    help: "Am schnellsten per E-Mail.",
                    children: (
                      <dl className="bios-dl">
                        <div className="bios-row">
                          <dt>E-Mail</dt>
                          <dd>
                            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
                          </dd>
                        </div>
                        <div className="bios-row">
                          <dt>LinkedIn</dt>
                          <dd>
                            <a href="https://linkedin.com/in/younes-bakkali-809454127/">Younes Bakkali</a>
                          </dd>
                        </div>
                        <div className="bios-row">
                          <dt>Rechtliches</dt>
                          <dd>
                            <Link to="/legal">Impressum und Datenschutz</Link>
                          </dd>
                        </div>
                      </dl>
                    ),
                  })}
                </div>
              </div>

              <p className="bios-mhint" aria-hidden="true">
                ← wischen oder Reiter tippen →
              </p>

              <footer className="bios-keys">
                <button type="button" className="bios-key" onClick={() => go(cur - 1)}>
                  <span className="bios-cap">←</span> Zurück
                </button>
                <button type="button" className="bios-key" onClick={() => go(cur + 1)}>
                  <span className="bios-cap">→</span> Weiter
                </button>
                <button type="button" className="bios-key" onClick={() => setBlink((b) => !b)}>
                  <span className="bios-cap">F2</span> {blink ? "Cursor aus" : "Cursor an"}
                </button>
                <a className="bios-key-mail" href={`mailto:${EMAIL}`}>
                  <span className="bios-cap">F10</span> Kontakt
                  <span className="bios-klong">aufnehmen</span>
                </a>
              </footer>
            </div>

            <SiteFoot to="/legal" label="Impressum und Datenschutz" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BiosSetup;
