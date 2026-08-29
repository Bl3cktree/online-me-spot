const Legal = () => {
  return (
    <main className="min-h-screen bg-background dark:bg-background">
      <div className="py-16">
        <div className="container mx-auto max-w-4xl">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-dar-primary mb-4 dark:text-foreground">
              Rechtliche Hinweise
            </h1>
            <div className="w-12 h-0.5 bg-dar-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Impressum */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-dar-primary mb-6 border-b border-dar-neutral-200 pb-2 dark:text-foreground dark:border-border">
                  Impressum
                </h2>

                <div className="space-y-6 text-muted-foreground dark:text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      Angaben gemäß § 5 TMG
                    </h3>
                    <p className="leading-relaxed dark:text-muted-foreground">
                      Younes Bakkali
                      <br />
                      Betreiber der Website bakkali.io
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">Kontakt</h3>
                    <p className="leading-relaxed dark:text-muted-foreground">E-Mail: contact@bakkali.io</p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      Haftung für Inhalte
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene
                      Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                      verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                      Diensteanbieter jedoch nicht unter der Verpflichtung,
                      übermittelte oder gespeicherte fremde Informationen zu
                      überwachen oder nach Umständen zu forschen, die auf eine
                      rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      Haftung für Links
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Unser Angebot enthält Links zu externen Websites Dritter,
                      auf deren Inhalte wir keinen Einfluss haben. Deshalb
                      können wir für diese fremden Inhalte auch keine Gewähr
                      übernehmen. Für die Inhalte der verlinkten Seiten ist
                      stets der jeweilige Anbieter oder Betreiber der Seiten
                      verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      Urheberrecht
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke
                      auf diesen Seiten unterliegen dem deutschen Urheberrecht.
                      Die Vervielfältigung, Bearbeitung, Verbreitung und jede
                      Art der Verwertung außerhalb der Grenzen des
                      Urheberrechtes bedürfen der schriftlichen Zustimmung des
                      jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Datenschutz */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-dar-primary mb-6 border-b border-dar-neutral-200 pb-2 dark:text-foreground dark:border-border">
                  Datenschutzerklärung
                </h2>

                <div className="space-y-6 text-muted-foreground dark:text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      1. Datenschutz auf einen Blick
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Diese Website erhebt und verarbeitet grundsätzlich keine personenbezogenen Daten,
                      es sei denn, Sie nehmen direkt Kontakt mit uns auf (z. B. per E‑Mail). Wir verwenden
                      keine Cookies, kein Tracking und keine Analyse‑Dienste, die personenbezogene Profile erstellen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      2. Kontaktaufnahme
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Wenn Sie uns per E‑Mail kontaktieren (z. B. <a href="mailto:contact@bakkali.io" className="underline hover:text-dar-accent dark:text-white">contact@bakkali.io</a>),
                      verarbeiten wir die von Ihnen mitgeteilten Daten zur
                      Bearbeitung Ihrer Anfrage. Die Verarbeitung erfolgt auf Grundlage
                      von Art. 6 Abs. 1 lit. b DSGVO (Erfüllung eines Vertrags/Anfragebearbeitung)
                      oder – soweit erforderlich – auf Ihrer Einwilligung. Daten werden
                      gelöscht, sobald sie für die Bearbeitung nicht mehr erforderlich sind und
                      keine gesetzlichen Aufbewahrungsfristen bestehen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      3. Externe Links
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Auf dieser Website befinden sich Links zu externen Angeboten (z. B. LinkedIn).
                      Für die Inhalte und die Datenverarbeitung der verlinkten Seiten sind die jeweiligen
                      Betreiber verantwortlich. Bitte lesen Sie die Datenschutzhinweise der verlinkten Dienste,
                      wenn Sie diese besuchen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      4. Google Fonts
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Diese Website nutzt Google Fonts zur einheitlichen Darstellung der Schriftarten.
                      Beim Laden der Seite werden die hierfür benötigten Schriftdateien von Google‑Servern
                      angefordert. Dabei kann Ihre IP‑Adresse an die Google LLC in den USA übermittelt werden.
                    </p>
                    <p className="leading-relaxed text-sm mt-2 dark:text-muted-foreground">
                      Die Verarbeitung erfolgt zur Wahrung unseres berechtigten Interesses an einer
                      konsistenten Darstellung (Art. 6 Abs. 1 lit. f DSGVO). Soweit Sie dies verhindern möchten,
                      können Sie das Laden externer Schriftarten in Ihrem Browser unterbinden oder eine lokale
                      Alternative einsetzen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      5. Ihre Rechte
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Sie haben das Recht auf Auskunft, Berichtigung, Löschung,
                      Einschränkung der Verarbeitung sowie Widerspruch gegen die
                      Verarbeitung Ihrer personenbezogenen Daten. Zur Ausübung
                      dieser Rechte oder bei Fragen zur Datenverarbeitung
                      kontaktieren Sie uns bitte per E‑Mail an
                      <a href="mailto:contact@bakkali.io" className="underline ml-1 hover:text-dar-accent dark:text-white">contact@bakkali.io</a>.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2 dark:text-foreground">
                      6. SSL‑Verschlüsselung
                    </h3>
                    <p className="leading-relaxed text-sm dark:text-muted-foreground">
                      Zum Schutz Ihrer Daten verwenden wir TLS/SSL‑Verschlüsselung
                      (erkennbar an https:// in der Adressleiste), wenn persönliche
                      Daten übermittelt werden.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-dar-neutral-200 dark:border-border">
                    <p className="text-xs text-dar-neutral-800 dark:text-white">
                      Stand: Januar 2026
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Legal;
