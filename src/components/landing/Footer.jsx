import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

/* Structure stricte : 4 colonnes — Logo & description / Coordonnées /
   Plateforme / Conformité & légal. Aucune donnée hors de ce périmètre. */
const contactItems = [
  { icon: Mail, label: "Email", value: "contact@drsangroup.com", href: "mailto:contact@drsangroup.com" },
  { icon: Phone, label: "Téléphone", value: "77817755", href: "tel:+25377817755" },
  { icon: MapPin, label: "Adresse", value: "Cité Barwako2, Djibouti", href: null },
];

const platformLinks = [
  { label: "Dossier médical patient", href: "#dossier-patient" },
  { label: "Carte de santé nationale", href: "#carte-sante" },
  { label: "Ordonnance électronique", href: "#dossier-patient" },
  { label: "Portail patient (mobile)", href: "#telecharger" },
  { label: "Espace gestion hôpital", href: "#espace-hopital" },
];

const complianceLinks = [
  { label: "Politique de confidentialité", href: "#" },
  { label: "Conformité HDS", href: "#securite" },
  { label: "Accords gouvernementaux", href: "#" },
  { label: "Mentions légales", href: "#" },
  { label: "Conditions générales d'utilisation", href: "#" },
];


export function Footer() {
  return (
    <footer className="border-t-2 border-accent bg-slate-900 text-slate-400">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        {/* 4 colonnes strictes */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Colonne 1 — Logo & description */}
          <div>
            <span className="inline-flex items-center rounded-lg bg-white p-2">
              <Image
                src="/images/logo-drsan.png"
                alt="Logo DrSan — e-santé, République de Djibouti"
                width={1299}
                height={974}
                className="h-10 w-auto"
              />
            </span>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Système national de santé numérique de la République de Djibouti : dossier médical, carte de
              santé connectée, ordonnance électronique et gestion hospitalière.
            </p>
          </div>

          {/* Colonne 2 — Coordonnées */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-white">Coordonnées</h3>
            <ul className="mt-4 space-y-3.5 text-sm">
              {contactItems.map((item) => (
                <li key={item.label}>
                  <span className="flex items-start gap-2.5">
                    <item.icon className="mt-0.5 h-4 w-4 shrink-0 text-brand-400" aria-hidden="true" />
                    <span className="min-w-0">
                      <span className="block text-[10px] font-semibold uppercase tracking-wide text-slate-500">
                        {item.label}
                      </span>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="block break-words text-slate-300 transition-all duration-200 ease-in-out hover:text-white"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <span className="block text-slate-300">{item.value}</span>
                      )}
                    </span>
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Plateforme */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-white">Plateforme</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {platformLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-all duration-200 ease-in-out hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 4 — Conformité & légal */}
          <div>
            <h3 className="text-xs font-semibold uppercase text-white">Conformité &amp; légal</h3>
            <ul className="mt-4 space-y-2.5 text-sm">
              {complianceLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-all duration-200 ease-in-out hover:text-brand-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bandeau : disclaimer national + copyright */}
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-800 pt-6 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p className="flex items-center gap-2 text-slate-400">
            <span className="h-2 w-2 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            Projet national de digitalisation de la santé · Djibouti 2026
          </p>
          <p className="text-slate-500">
            © {new Date().getFullYear()} — Tous droits réservés à DrSan &amp; Cybersan Group
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
