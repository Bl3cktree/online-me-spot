import { HomeMark, SiteFoot, SubpageKeys } from "@/components/BiosParts";
import { BIOS_EMAIL, useBiosBackground, useBiosSubpageKeys } from "@/hooks/use-bios-page";
import "@/components/bios.css";

const Legal = () => {
  useBiosBackground();
  useBiosSubpageKeys();

  return (
    <div className="bios bios-page">
      <div className="bios-wrap bios-page-wrap">
        <HomeMark />

        <main className="bios-panel">
          <header className="bios-head">
            <h1>Rechtliche Hinweise</h1>
            <span className="bios-role">Impressum und Datenschutz</span>
          </header>

          <div className="bios-legal">
            <section className="bios-col" aria-labelledby="impressum">
              <h2 id="impressum" className="bios-h2 is-first">
                Impressum
              </h2>

              <h3 className="bios-h3">Angaben gemäß § 5 DDG</h3>
              <p>
                Younes Bakkali
                <br />
                Betreiber der Website bakkali.io
              </p>

              <h3 className="bios-h3">Kontakt</h3>
              <p>
                E-Mail: <a href={`mailto:${BIOS_EMAIL}`}>{BIOS_EMAIL}</a>
              </p>

              <h3 className="bios-h3">Haftung für Inhalte</h3>
              <p>
                Als Diensteanbieter sind wir für eigene Inhalte auf diesen Seiten nach den allgemeinen
                Gesetzen verantwortlich. Nach §§ 7 bis 10 DDG sind wir als Diensteanbieter jedoch nicht
                unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu
                überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>

              <h3 className="bios-h3">Haftung für Links</h3>
              <p>
                Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber der Seiten verantwortlich.
              </p>

              <h3 className="bios-h3">Urheberrecht</h3>
              <p>
                Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
                der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                Zustimmung des jeweiligen Autors bzw. Erstellers.
              </p>
            </section>

            <section className="bios-col" aria-labelledby="datenschutz">
              <h2 id="datenschutz" className="bios-h2 is-first">
                Datenschutzerklärung
              </h2>

              <h3 className="bios-h3">1. Datenschutz auf einen Blick</h3>
              <p>
                Diese Website erhebt und verarbeitet grundsätzlich keine personenbezogenen Daten, es sei
                denn, Sie nehmen direkt Kontakt mit uns auf (z. B. per E‑Mail). Wir verwenden keine
                Cookies, kein Tracking und keine Analyse‑Dienste, die personenbezogene Profile erstellen.
              </p>

              <h3 className="bios-h3">2. Kontaktaufnahme</h3>
              <p>
                Wenn Sie uns per E‑Mail kontaktieren (z. B.{" "}
                <a href={`mailto:${BIOS_EMAIL}`}>{BIOS_EMAIL}</a>), verarbeiten wir die von Ihnen
                mitgeteilten Daten zur Bearbeitung Ihrer Anfrage. Die Verarbeitung erfolgt auf Grundlage
                von Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrags/Anfragebearbeitung) oder –
                soweit erforderlich – auf Ihrer Einwilligung. Daten werden gelöscht, sobald sie für die
                Bearbeitung nicht mehr erforderlich sind und keine gesetzlichen Aufbewahrungsfristen
                bestehen.
              </p>

              <h3 className="bios-h3">3. Externe Links</h3>
              <p>
                Auf dieser Website befinden sich Links zu externen Angeboten (z. B. LinkedIn). Für die
                Inhalte und die Datenverarbeitung der verlinkten Seiten sind die jeweiligen Betreiber
                verantwortlich. Bitte lesen Sie die Datenschutzhinweise der verlinkten Dienste, wenn Sie
                diese besuchen.
              </p>

              <h3 className="bios-h3">4. Schriftarten</h3>
              <p>
                Die Schriftarten dieser Website sind lokal gehostet. Beim Laden der Seite wird keine
                Verbindung zu Servern Dritter (z. B. Google Fonts) aufgebaut.
              </p>

              <h3 className="bios-h3">5. Ihre Rechte</h3>
              <p>
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung
                sowie Widerspruch gegen die Verarbeitung Ihrer personenbezogenen Daten. Zur Ausübung
                dieser Rechte oder bei Fragen zur Datenverarbeitung kontaktieren Sie uns bitte per
                E‑Mail an <a href={`mailto:${BIOS_EMAIL}`}>{BIOS_EMAIL}</a>.
              </p>

              <h3 className="bios-h3">6. SSL‑Verschlüsselung</h3>
              <p>
                Zum Schutz Ihrer Daten verwenden wir TLS/SSL‑Verschlüsselung (erkennbar an https:// in
                der Adressleiste), wenn persönliche Daten übermittelt werden.
              </p>

              <p className="bios-stand">Stand: November 2026</p>
            </section>
          </div>

          <SubpageKeys />
        </main>

        <SiteFoot to="/" label="Zur Startseite" />
      </div>
    </div>
  );
};

export default Legal;
