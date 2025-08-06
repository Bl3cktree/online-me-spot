import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const Legal = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="py-6 border-b border-dar-neutral-200">
        <div className="container mx-auto">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-dar-primary hover:text-dar-accent transition-colors font-mono text-sm"
          >
            <ArrowLeft className="w-4 h-4" />
            Zurück zur Startseite
          </Link>
        </div>
      </nav>

      <div className="py-16">
        <div className="container mx-auto max-w-4xl">
          
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-light text-dar-primary mb-4">
              Rechtliche Hinweise
            </h1>
            <div className="w-12 h-0.5 bg-dar-accent mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            
            {/* Impressum */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-dar-primary mb-6 border-b border-dar-neutral-200 pb-2">
                  Impressum
                </h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">Angaben gemäß § 5 TMG</h3>
                    <p className="leading-relaxed">
                      Younes Bakkali<br />
                      Betreiber der Website bakkali.io
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">Kontakt</h3>
                    <p className="leading-relaxed">
                      E-Mail: kontakt@bakkali.io
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">Haftung für Inhalte</h3>
                    <p className="leading-relaxed text-sm">
                      Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht unter der Verpflichtung, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">Haftung für Links</h3>
                    <p className="leading-relaxed text-sm">
                      Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">Urheberrecht</h3>
                    <p className="leading-relaxed text-sm">
                      Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Datenschutz */}
            <section className="space-y-8">
              <div>
                <h2 className="text-2xl font-medium text-dar-primary mb-6 border-b border-dar-neutral-200 pb-2">
                  Datenschutzerklärung
                </h2>
                
                <div className="space-y-6 text-muted-foreground">
                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">1. Datenschutz auf einen Blick</h3>
                    <p className="leading-relaxed text-sm">
                      Diese Website erhebt keine personenbezogenen Daten, außer wenn Sie uns kontaktieren. Wir verwenden keine Cookies, Tracking-Tools oder Analysedienste.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">2. Kontaktaufnahme</h3>
                    <p className="leading-relaxed text-sm">
                      Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben einschließlich der von Ihnen angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">3. Externe Links</h3>
                    <p className="leading-relaxed text-sm">
                      Diese Website enthält Links zu externen Diensten wie LinkedIn. Beim Aufrufen dieser Links gelten die Datenschutzbestimmungen der jeweiligen Anbieter. Wir haben keinen Einfluss auf die Datenverarbeitung durch diese Anbieter.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">4. Ihre Rechte</h3>
                    <p className="leading-relaxed text-sm">
                      Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Bei Fragen wenden Sie sich an: kontakt@bakkali.io
                    </p>
                  </div>

                  <div>
                    <h3 className="font-medium text-dar-primary mb-2">5. SSL-Verschlüsselung</h3>
                    <p className="leading-relaxed text-sm">
                      Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte eine SSL-Verschlüsselung. Sie erkennen eine verschlüsselte Verbindung daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt.
                    </p>
                  </div>

                  <div className="pt-4 border-t border-dar-neutral-200">
                    <p className="text-xs text-dar-neutral-800">
                      Stand: Dezember 2024
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Legal;