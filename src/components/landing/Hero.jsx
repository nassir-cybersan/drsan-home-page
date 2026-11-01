import { Clock, Lock, Monitor, ShieldCheck, Smartphone } from "lucide-react";

const weeklyVolumes = [
  { day: "Lun", value: 412 },
  { day: "Mar", value: 468 },
  { day: "Mer", value: 445 },
  { day: "Jeu", value: 501 },
  { day: "Ven", value: 476 },
  { day: "Sam", value: 388 },
  { day: "Dim", value: 434 },
];

const maxVolume = 560;

const liveMetrics = [
  { label: "Ordonnances émises aujourd'hui", value: "434" },
  { label: "Praticiens actifs sur le réseau", value: "1 427" },
  { label: "Patients enregistrés cette semaine", value: "2 118" },
];

const liveEvents = [
  { time: "14:32:07", text: "Ordonnance #ORD-2026-0842 validée — CHU de Djibouti" },
  { time: "14:31:48", text: "Lit B-207 — admission confirmée — Hôpital Général d'Ali Sabieh" },
  { time: "14:30:12", text: "Carte #47 298 361 04 déverrouillée par OTP — Dr A. Waberi" },
];

/* Bandeau de prévisions 2026 — déploiement national en cours à Djibouti */
const nationalKpis = [
  {
    value: "60+",
    label: "hôpitaux & centres de santé ciblés",
    detail: "Établissements connectés · déploiement Djibouti-Ville & 9 wilayas · 2026",
  },
  {
    value: "500 000+",
    label: "citoyens sécurisés d'ici 2026",
    detail: "Dossiers patients actifs · ≈ la moitié de la population (1,2 M)",
  },
  {
    value: "1.5M+",
    label: "e-prescriptions prévues / an",
    detail: "Ordonnances électroniques · objectif annuel 2026",
  },
  {
    value: "99.99%",
    label: "Infrastructure souveraine & redondée",
    detail: "Disponibilité du service · objectif SLA 2026",
  },
];

const patientCtaClasses =
  "inline-flex items-center gap-2 rounded-md bg-brand-600 px-5 py-3 text-sm font-semibold text-white transition-all duration-200 ease-in-out hover:bg-brand-700";

const hospitalCtaClasses =
  "inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-all duration-200 ease-in-out hover:border-slate-900 hover:bg-slate-900 hover:text-white dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100 dark:hover:border-brand-500 dark:hover:bg-brand-600 dark:hover:text-white";

export function Hero() {
  return (
    <section className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 py-14 lg:grid-cols-12 lg:gap-10 lg:py-20">
          {/* Argumentaire */}
          <div className="lg:col-span-7">
            <p className="inline-flex items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300">
              <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
              Projet national de digitalisation de la santé · Djibouti 2026
            </p>

            <h1 className="mt-5 text-4xl font-bold leading-[1.08] text-slate-900 dark:text-white sm:text-5xl lg:text-[3.25rem]">
              Un pays. Un dossier.
              <span className="block text-brand-600 dark:text-brand-400">La santé de Djibouti enfin numérique.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-slate-600 dark:text-slate-300">
              DrSan relie les patients, les praticiens et les établissements de la République de Djibouti sur une seule
              infrastructure : dossier médical patient, carte de santé connectée, ordonnance électronique et console de
              gestion hospitalière — conçue pour les contraintes réelles du terrain djiboutien.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <div>
                <a href="#dossier-patient" className={`${patientCtaClasses} w-full justify-center sm:w-auto`}>
                  <Smartphone className="h-4 w-4" aria-hidden="true" />
                  Accès Patient (Mobile)
                </a>
                <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 sm:text-left">
                  iOS & Android · application gratuite · 18,4 Mo
                </p>
              </div>
              <div>
                <a href="#espace-hopital" className={`${hospitalCtaClasses} w-full justify-center sm:w-auto`}>
                  <Monitor className="h-4 w-4" aria-hidden="true" />
                  Espace Gestion Hôpital (Web)
                </a>
                <p className="mt-2 text-center text-[11px] text-slate-500 dark:text-slate-400 sm:text-left">
                  Navigateur · Chrome, Edge, Safari · multi-établissements
                </p>
              </div>
            </div>

            <ul className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-slate-100 pt-6 text-xs font-medium text-slate-600 dark:border-slate-800 dark:text-slate-300">
              <li className="flex items-center gap-2">
                <Lock className="h-3.5 w-3.5 text-brand-700 dark:text-brand-400" aria-hidden="true" />
                Chiffrement AES-256 de bout en bout
              </li>
              <li className="flex items-center gap-2">
                <ShieldCheck className="h-3.5 w-3.5 text-brand-700 dark:text-brand-400" aria-hidden="true" />
                Codes OTP en temps réel
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-brand-700 dark:text-brand-400" aria-hidden="true" />
                Support 24/7 basé à Djibouti-Ville
              </li>
            </ul>
          </div>

          {/* Panneau réseau en temps réel */}
          <div className="lg:col-span-5">
            <div className="rounded-lg border border-slate-800 bg-slate-900 p-5 shadow-sm dark:border-slate-700 dark:bg-slate-800">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3 dark:border-slate-700">
                <div>
                  <p className="text-sm font-semibold text-white">Réseau national</p>
                  <p className="text-[11px] text-slate-400">Flux agrégés — 06 octobre 2026</p>
                </div>
                <span className="inline-flex items-center gap-1.5 rounded-md border border-slate-700 bg-slate-800 px-2 py-1 text-[10px] font-medium text-brand-400 dark:border-slate-600 dark:bg-slate-900">
                  <span className="h-1.5 w-1.5 rounded-full bg-brand-400" aria-hidden="true" />
                  Temps réel
                </span>
              </div>

              <dl className="divide-y divide-slate-800 dark:divide-slate-700">
                {liveMetrics.map((metric) => (
                  <div key={metric.label} className="flex items-baseline justify-between py-3">
                    <dt className="text-xs text-slate-400">{metric.label}</dt>
                    <dd className="text-sm font-bold text-white">{metric.value}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-4 border-t border-slate-800 pt-4 dark:border-slate-700">
                <div className="flex items-baseline justify-between">
                  <p className="text-xs font-medium text-slate-300">Ordonnances émises — 7 jours</p>
                  <p className="font-mono text-[11px] text-slate-500">max 560</p>
                </div>
                <div
                  className="mt-3 flex h-20 items-end gap-1.5"
                  role="img"
                  aria-label="Histogramme des ordonnances émises sur 7 jours"
                >
                  {weeklyVolumes.map((entry) => (
                    <div
                      key={entry.day}
                      className="group flex h-full flex-1 flex-col items-center justify-end gap-1.5"
                    >
                      <span className="font-mono text-[9px] text-slate-500 opacity-0 transition-all duration-200 ease-in-out group-hover:opacity-100">
                        {entry.value}
                      </span>
                      <div
                        className="w-full rounded-t-[2px] bg-brand-600 transition-all duration-200 ease-in-out group-hover:bg-brand-500"
                        style={{ height: `${Math.round((entry.value / maxVolume) * 100)}%` }}
                      />
                    </div>
                  ))}
                </div>
                <div className="mt-1.5 flex gap-1.5">
                  {weeklyVolumes.map((entry) => (
                    <span key={entry.day} className="flex-1 text-center text-[9px] uppercase text-slate-500">
                      {entry.day}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4 border-t border-slate-800 pt-4 dark:border-slate-700">
                <p className="text-xs font-medium text-slate-300">Flux en direct</p>
                <ul className="mt-2.5 space-y-2">
                  {liveEvents.map((event) => (
                    <li
                      key={event.time}
                      className="flex items-start gap-2.5 text-[11px] leading-relaxed text-slate-400"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" aria-hidden="true" />
                      <span className="font-mono text-slate-500">{event.time}</span>
                      <span className="min-w-0 flex-1">{event.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bandeau indicateurs nationaux */}
        <div className="grid grid-cols-2 border-t border-slate-200 dark:border-slate-800 md:grid-cols-4">
          {nationalKpis.map((kpi, index) => (
            <div
              key={kpi.label}
              className={`py-6 md:px-6 ${index % 2 === 1 ? "border-l border-slate-200 pl-5 dark:border-slate-800 md:pl-6" : ""} ${
                index > 0 ? "md:border-l md:border-slate-200 md:dark:border-slate-800" : "md:border-l-0"
              } ${index > 1 ? "border-t border-slate-200 dark:border-slate-800 md:border-t-0" : ""}`}
            >
              <p className="text-2xl font-bold text-slate-900 dark:text-white">{kpi.value}</p>
              <p className="mt-1 text-xs font-semibold text-slate-700 dark:text-slate-200">{kpi.label}</p>
              <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">{kpi.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;

