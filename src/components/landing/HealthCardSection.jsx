import { ClipboardCheck, Database, Lock, ShieldCheck } from "lucide-react";
import { QrCodePattern } from "./QrCodePattern";

/* ------------------------------------------------------------------ */
/* Drapeau de la République de Djibouti (SVG inline)                   */
/* ------------------------------------------------------------------ */

function DjiboutiFlag({ className = "h-5 w-7" }) {
  return (
    <svg
      viewBox="0 0 36 24"
      className={`${className} shrink-0 rounded-[2px]`}
      role="img"
      aria-label="Drapeau de la République de Djibouti"
    >
      <rect width="36" height="12" fill="#6AB2E7" />
      <rect y="12" width="36" height="12" fill="#009E60" />
      <polygon points="0,0 15,12 0,24" fill="#FFFFFF" />
      <path
        transform="translate(6.612 12) scale(0.42)"
        d="M0,-10 L2.245,-3.09 L9.51,-3.09 L3.633,1.18 L5.878,8.09 L0,3.82 L-5.878,8.09 L-3.633,1.18 L-9.51,-3.09 L-2.245,-3.09 Z"
        fill="#D21034"
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/* Données de la section                                               */
/* ------------------------------------------------------------------ */

const unlockSteps = [
  {
    title: "Le praticien scanne la carte",
    detail: "Lecture du QR code depuis l'application DrSan Pro ou le terminal de l'officine.",
  },
  {
    title: "Le patient reçoit un code OTP",
    detail: "6 chiffres envoyés par SMS au +253 77 •• •• 41, valable 90 secondes.",
  },
  {
    title: "Le patient valide l'accès",
    detail: "Accès limité au dossier concerné, fenêtre de consultation de 10 minutes.",
  },
  {
    title: "L'ouverture est journalisée",
    detail: "Horodatage, praticien, motif et périmètre consultés — archivage sans réécriture.",
  },
];

const complianceItems = [
  { icon: ShieldCheck, title: "HDS", detail: "Données hébergées chez un hébergeur agréé de données de santé." },
  {
    icon: Lock,
    title: "RGPD & droit djiboutien",
    detail: "Minimisation des données, consentement explicite, droit à l'effacement.",
  },
  {
    icon: Database,
    title: "AES-256 / TLS 1.3",
    detail: "Chiffrement au repos et en transit sur l'ensemble du parcours.",
  },
  {
    icon: ClipboardCheck,
    title: "Journal d'audit",
    detail: "Traçabilité immuable de chaque accès, exportable pour contrôle.",
  },
];

const cardStats = [
  { value: "512 430", label: "cartes actives" },
  { value: "128", label: "établissements habilités" },
  { value: "10 min", label: "durée maximale d'accès" },
];

export function HealthCardSection() {
  return (
    <section id="carte-sante" className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Carte de santé */}
          <div className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-400">02 / Carte de santé connectée</p>

            <div className="mt-6 rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              {/* En-tête de carte */}
              <div className="flex items-center justify-between bg-slate-900 px-5 py-4">
                <div className="leading-tight">
                  <p className="text-lg font-bold text-white">DrSan</p>
                  <p className="text-[10px] font-medium uppercase text-brand-400">e-santé</p>
                </div>
                <div className="flex items-center gap-2.5">
                  <DjiboutiFlag className="h-5 w-7" />
                  <p className="text-[11px] font-medium text-slate-300">République de Djibouti</p>
                </div>
              </div>

              {/* Corps de carte */}
              <div className="flex gap-5 px-5 py-5">
                <div className="shrink-0">
                  <QrCodePattern
                    className="h-[92px] w-[92px] rounded-[2px] border border-slate-200 bg-white p-1 dark:border-slate-700"
                    ariaLabel="QR code de la carte de santé de Mohamed Ali Djama"
                  />
                  <p className="mt-1.5 text-center text-[9px] font-medium uppercase text-slate-400">Scanner DrSan</p>
                </div>

                <div className="min-w-0 flex-1">
                  <p className="text-[10px] font-medium uppercase text-slate-500 dark:text-slate-400">Numéro national de santé</p>
                  <p className="mt-0.5 font-mono text-xl font-bold text-slate-900 dark:text-white">47 298 361 04</p>

                  <div className="mt-3 border-t border-slate-100 pt-3 dark:border-slate-800">
                    <p className="text-[10px] font-medium uppercase text-slate-500 dark:text-slate-400">Titulaire</p>
                    <p className="mt-0.5 text-sm font-bold uppercase text-slate-900 dark:text-white">Mohamed Ali Djama</p>
                    <p className="mt-0.5 text-xs text-slate-600 dark:text-slate-300">Né le 12.03.1984 · 41 ans · Djibouti-Ville</p>
                  </div>

                  <div className="mt-3 grid grid-cols-3 gap-2 border-t border-slate-100 pt-3 dark:border-slate-800">
                    <div>
                      <p className="text-[10px] font-medium uppercase text-slate-500 dark:text-slate-400">Groupe</p>
                      <p className="mt-0.5 text-xs font-bold text-slate-900 dark:text-white">O+ (Rh+)</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium uppercase text-slate-500 dark:text-slate-400">Validité</p>
                      <p className="mt-0.5 text-xs font-bold text-slate-900 dark:text-white">03/2029</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-medium uppercase text-slate-500 dark:text-slate-400">Statut</p>
                      <p className="mt-0.5 inline-flex items-center gap-1 rounded-md bg-brand-50 px-1.5 py-0.5 text-[11px] font-semibold text-brand-700 dark:bg-brand-900 dark:text-brand-200">
                        ACTIVE
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pied de carte */}
              <div className="flex items-center justify-between border-t border-slate-100 px-5 py-2.5 text-[10px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                <p>Carte nationale de santé — usage médical uniquement</p>
                <p className="font-mono">Vérifiée le 06.10.2026 · 14:32</p>
              </div>
            </div>

            {/* Indicateurs de couverture */}
            <div className="mt-4 grid grid-cols-3 rounded-lg border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
              {cardStats.map((stat, index) => (
                <div key={stat.label} className={`px-4 py-3.5 ${index > 0 ? "border-l border-slate-200 dark:border-slate-700" : ""}`}>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">{stat.value}</p>
                  <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Sécurité & conformité */}
          <div id="securite" className="lg:col-span-6">
            <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-400">Sécurité par conception</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
              Une carte que seul le patient peut ouvrir.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              La Carte de Santé DrSan remplace le carnet papier : même format standard, mais reliée en temps réel au
              dossier médical national. Elle est acceptée dans les 128 établissements connectés — en ville comme dans
              les centres périphériques — et le contrôle d&apos;identité fonctionne même en connexion faible grâce au code
              OTP par SMS.
            </p>

            <ol className="mt-8 divide-y divide-slate-100 border-y border-slate-100 dark:divide-slate-800 dark:border-slate-800">
              {unlockSteps.map((step, index) => (
                <li key={step.title} className="flex gap-4 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-slate-900 text-xs font-bold text-white dark:border dark:border-slate-600 dark:bg-slate-800">
                    {index + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{step.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{step.detail}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {complianceItems.map((item) => (
                <div key={item.title} className="rounded-lg border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-800">
                  <div className="flex items-center gap-2">
                    <item.icon className="h-4 w-4 text-brand-700 dark:text-brand-400" aria-hidden="true" />
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{item.title}</p>
                  </div>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 dark:text-slate-300">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HealthCardSection;



