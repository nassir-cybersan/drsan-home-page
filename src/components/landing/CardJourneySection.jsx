import { ChevronRight, KeyRound, QrCode, UserCheck } from "lucide-react";

const journeySteps = [
  {
    step: "Étape 1",
    icon: UserCheck,
    title: "Enrôlement & Authentification",
    detail:
      "Présentation de la pièce d'identité nationale dans un centre agréé ou via l'application.",
    meta: "Pièce nationale ou passeport · centre agréé DrSan",
  },
  {
    step: "Étape 2",
    icon: KeyRound,
    title: "Attribution de l'identifiant unique",
    detail:
      "Génération instantanée de l'ID DrSan à 10 chiffres lié au profil médical sécurisé.",
    meta: "ID DrSan à 10 chiffres · vérification OTP immédiate",
  },
  {
    step: "Étape 3",
    icon: QrCode,
    title: "Activation du Pass & QR Code",
    detail:
      "Impression de la carte physique sécurisée et synchronisation automatique sur l'application mobile.",
    meta: "Carte PVC sécurisée · synchronisation mobile ≤ 2 min",
  },
];

const journeyStats = [
  { value: "48 h", label: "délai moyen d'obtention" },
  { value: "10 chiffres", label: "identifiant unique, attribué à vie" },
  { value: "HDS", label: "données hébergées en souveraineté" },
];

const journeyChips = ["Ciblage initial : 500 000+ citoyens", "Gratuit pour le citoyen", "Conforme HDS & RGPD"];

export function CardJourneySection() {
  return (
    <section id="parcours-carte" className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* En-tête de section */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-400">
              03 / Parcours de la carte nationale de santé
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
              Sa carte en trois étapes, en 48 heures.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              De l&apos;enrôlement à l&apos;activation du Pass, le parcours reste court : l&apos;identifiant DrSan est
              attribué à vie et relie le titulaire à son dossier médical national, sans papier ni double saisie.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-2 lg:col-span-5 lg:items-end">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Ouverture progressive : Djibouti-Ville puis les 9 wilayas — 2026.
            </p>
            <div className="flex flex-wrap gap-2 lg:justify-end">
              {journeyChips.map((chip) => (
                <span
                  key={chip}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Indicateur d'étapes */}
        <ol className="mt-10 grid gap-4 lg:grid-cols-3">
          {journeySteps.map((item, index) => (
            <li
              key={item.step}
              className="relative rounded-lg border border-slate-200 bg-white p-6 transition-all duration-200 ease-in-out hover:border-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:hover:border-slate-600"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-md bg-brand-600 px-2 py-1 text-[11px] font-semibold text-white">
                  {item.step}
                </span>
                <span className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-slate-50 dark:border-slate-700 dark:bg-slate-800">
                  <item.icon className="h-4 w-4 text-brand-700 dark:text-brand-400" aria-hidden="true" />
                </span>
              </div>

              <p className="mt-4 text-sm font-bold text-slate-900 dark:text-white">{item.title}</p>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{item.detail}</p>
              <p className="mt-4 border-t border-slate-100 pt-3 font-mono text-[11px] text-slate-500 dark:border-slate-800 dark:text-slate-400">
                {item.meta}
              </p>

              {index < journeySteps.length - 1 && (
                <span
                  className="absolute right-[-20px] top-1/2 z-10 hidden h-6 w-6 -translate-y-1/2 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-400 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-500 lg:flex"
                  aria-hidden="true"
                >
                  <ChevronRight className="h-3.5 w-3.5" />
                </span>
              )}
            </li>
          ))}
        </ol>

        {/* Bandeau synthèse */}
        <div className="mt-6 grid grid-cols-1 rounded-lg border border-slate-200 bg-white sm:grid-cols-3 dark:border-slate-700 dark:bg-slate-900">
          {journeyStats.map((stat, index) => (
            <div
              key={stat.label}
              className={`px-5 py-4 ${index > 0 ? "border-t border-slate-200 dark:border-slate-700 sm:border-t-0 sm:border-l" : ""}`}
            >
              <p className="text-sm font-bold text-slate-900 dark:text-white">{stat.value}</p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardJourneySection;

