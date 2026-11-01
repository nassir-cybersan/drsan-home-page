"use client";

import { useState } from "react";
import {
  Bed,
  Bell,
  ChartColumn,
  ClipboardList,
  Download,
  FlaskConical,
  LayoutDashboard,
  LogOut,
  Pill,
  RefreshCw,
  Search,
  Stethoscope,
  Timer,
  TriangleAlert,
  Users,
} from "lucide-react";

const sidebarNav = [
  { icon: LayoutDashboard, label: "Tableau de bord", badge: null },
  { icon: ClipboardList, label: "Admissions", badge: "12" },
  { icon: Stethoscope, label: "Consultations", badge: "24" },
  { icon: Pill, label: "Pharmacie", badge: "3", alert: true },
  { icon: FlaskConical, label: "Laboratoire", badge: "7" },
  { icon: ChartColumn, label: "Analytics", badge: null },
];

const kpiTiles = [
  { label: "Lits occupés", value: "86 / 120", detail: "71,6 % du parc — aile A & B", progress: 72 },
  { label: "Patients en attente", value: "14", detail: "Délai moyen : 23 min", progress: null },
  { label: "Ordonnances du jour", value: "143", detail: "+12 % vs hier", progress: null },
  { label: "Alertes de stock", value: "3", detail: "2 critiques — pharmacie", progress: null, alert: true },
];

const roomStatusStyles = {
  occupee: {
    bar: "bg-slate-900 dark:bg-slate-100",
    label: "Occupée",
    chip: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
  },
  libre: {
    bar: "bg-brand-600",
    label: "Libre",
    chip: "bg-brand-50 text-brand-700 dark:bg-brand-900 dark:text-brand-200",
  },
  revision: {
    bar: "bg-slate-300 dark:bg-slate-600",
    label: "Révision",
    chip: "bg-slate-100 text-slate-500 dark:bg-slate-800 dark:text-slate-400",
  },
};

const rooms = [
  { number: "A-101", service: "Cardiologie", patient: "H. M. Ali", status: "occupee" },
  { number: "A-102", service: "Cardiologie", patient: null, status: "libre" },
  { number: "A-103", service: "Cardiologie", patient: "S. A. Warfa", status: "occupee" },
  { number: "A-104", service: "Médecine interne", patient: null, status: "revision" },
  { number: "B-205", service: "Pédiatrie", patient: "F. A. Beira", status: "occupee" },
  { number: "B-206", service: "Pédiatrie", patient: "Y. A. Kamil", status: "occupee" },
  { number: "B-207", service: "Pédiatrie", patient: null, status: "libre" },
  { number: "B-208", service: "Chirurgie", patient: "R. E. Djibouti", status: "revision" },
];

const queueStatusStyles = {
  "En salle": "bg-brand-50 text-brand-700 dark:bg-brand-900 dark:text-brand-200",
  "Appelé": "bg-slate-900 text-white dark:bg-slate-700",
  "Attente": "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
  "Retard": "border border-slate-300 bg-white text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-100",
};

const consultationQueue = [
  { patient: "M. A. Djama", service: "Cardiologie", wait: "12 min", status: "En salle" },
  { patient: "A. R. Soumah", service: "Médecine interne", wait: "8 min", status: "Appelé" },
  { patient: "H. I. Robleh", service: "Pédiatrie", wait: "23 min", status: "Attente" },
  { patient: "K. B. Ahmed", service: "Radiologie", wait: "31 min", status: "Retard" },
];

const prescriptionStatusStyles = {
  Validée: "bg-brand-50 text-brand-700 dark:bg-brand-900 dark:text-brand-200",
  Substitution: "bg-slate-900 text-white dark:bg-slate-700",
  "En attente": "bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300",
};

const recentPrescriptions = [
  { id: "ORD-2026-0842", patient: "M. A. Djama", prescriber: "Dr A. Waberi", status: "Validée" },
  { id: "ORD-2026-0841", patient: "H. I. Robleh", prescriber: "Dr S. Hassan", status: "Substitution" },
  { id: "ORD-2026-0840", patient: "A. R. Soumah", prescriber: "Dr M. Cali", status: "En attente" },
];

function stockLevel(ratio) {
  if (ratio < 0.15)
    return {
      bar: "bg-red-600",
      label: "Critique",
      chip: "bg-red-50 text-red-700 dark:bg-red-950 dark:text-red-300",
    };
  if (ratio < 0.4)
    return {
      bar: "bg-slate-900 dark:bg-slate-100",
      label: "Faible",
      chip: "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
    };
  return {
    bar: "bg-brand-600",
    label: "OK",
    chip: "bg-brand-50 text-brand-700 dark:bg-brand-900 dark:text-brand-200",
  };
}

const pharmacyStock = [
  { name: "Metformine 850 mg", stock: 18, capacity: 120, unit: "boîtes" },
  { name: "Amoxicilline 500 mg", stock: 96, capacity: 150, unit: "boîtes" },
  { name: "Artéméther/Luméfantrine", stock: 7, capacity: 80, unit: "boîtes" },
  { name: "Insuline glargine", stock: 24, capacity: 40, unit: "stylos" },
];

export function HospitalDashboardPreview() {
  const [activeNav, setActiveNav] = useState("Tableau de bord");

  return (
    <section id="espace-hopital" className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* En-tête de section */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-400">04 / Espace gestion hôpital — Web</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
              Un écosystème complet, de l&apos;admission au stock pharmacie.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              La console DrSan orchestre le fonctionnement quotidien des établissements : occupation des lits, files
              d&apos;attente, ordonnances électroniques et inventaire pharmaceutique avec propositions automatiques
              d&apos;équivalents génériques — le tout en temps réel, avec synchronisation du dossier patient.
            </p>
          </div>
          <div className="flex flex-col justify-end gap-2 lg:col-span-5 lg:items-end">
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Un moteur unique, de l&apos;officine de quartier au CHU : 128 établissements connectés.
            </p>
            <div className="flex flex-wrap gap-2">
              {["Interopérabilité HL7 / FHIR", "SSO praticien sécurisé", "Export DGOS"].map((spec) => (
                <span
                  key={spec}
                  className="rounded-md border border-slate-200 bg-white px-2.5 py-1 text-[11px] font-medium text-slate-600 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300"
                >
                  {spec}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Conteneur bureau */}
        <div className="mt-10 overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
          {/* Barre de navigateur */}
          <div className="flex items-center gap-3 border-b border-slate-200 bg-slate-100 px-4 py-2.5 dark:border-slate-700 dark:bg-slate-800">
            <span className="flex gap-1.5" aria-hidden="true">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
              <span className="h-2.5 w-2.5 rounded-full bg-slate-300 dark:bg-slate-600" />
            </span>
            <span className="flex flex-1 items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1 font-mono text-[11px] text-slate-500 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-400">
              app.drsan.dj/hopital/tableau-de-bord
            </span>
            <span className="hidden items-center gap-1.5 text-[11px] text-slate-500 dark:text-slate-400 sm:flex">
              <RefreshCw className="h-3 w-3 text-brand-700" aria-hidden="true" />
              Sync il y a 4 s
            </span>
          </div>

          {/* Corps du tableau de bord */}
          <div className="flex min-h-[640px]">
            {/* Barre latérale */}
            <aside className="hidden w-52 shrink-0 flex-col border-r border-slate-800 bg-slate-900 md:flex">
              <div className="border-b border-slate-800 px-4 py-4">
                <p className="text-sm font-bold text-white">CHU de Djibouti</p>
                <p className="mt-0.5 text-[11px] text-slate-400">Console de gestion · v2.4.1</p>
              </div>
              <nav className="flex-1 px-2.5 py-3" aria-label="Navigation de la console">
                <p className="px-2 pb-2 text-[10px] font-semibold uppercase text-slate-500">Modules</p>
                <ul className="space-y-1">
                  {sidebarNav.map((item) => {
                    const isActive = item.label === activeNav;
                    return (
                      <li key={item.label}>
                        <button
                          type="button"
                          onClick={() => setActiveNav(item.label)}
                          className={`flex w-full items-center gap-2.5 rounded-md px-2.5 py-2 text-left text-[13px] font-medium transition-all duration-200 ease-in-out ${
                            isActive
                              ? "bg-slate-800 text-white"
                              : "text-slate-400 hover:bg-slate-800/60 hover:text-slate-200"
                          }`}
                        >
                          <item.icon className={`h-4 w-4 ${isActive ? "text-brand-400" : ""}`} aria-hidden="true" />
                          <span className="flex-1">{item.label}</span>
                          {item.badge ? (
                            <span
                              className={`rounded-md px-1.5 py-0.5 font-mono text-[10px] ${
                                item.alert
                                  ? "bg-red-500/20 text-red-300"
                                  : isActive
                                    ? "bg-slate-700 text-slate-200"
                                    : "bg-slate-800 text-slate-400"
                              }`}
                            >
                              {item.badge}
                            </span>
                          ) : null}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </nav>
              <div className="border-t border-slate-800 px-4 py-3.5">
                <div className="flex items-center gap-2.5">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md bg-brand-600 text-[11px] font-bold text-white">
                    AW
                  </span>
                  <div className="min-w-0 flex-1 leading-tight">
                    <p className="truncate text-xs font-semibold text-white">Dr A. Waberi</p>
                    <p className="truncate text-[10px] text-slate-400">Administrateur CHU</p>
                  </div>
                  <LogOut className="h-3.5 w-3.5 text-slate-500" aria-hidden="true" />
                </div>
              </div>
            </aside>

            {/* Zone principale */}
            <div className="flex min-w-0 flex-1 flex-col bg-slate-50 dark:bg-slate-950">
              {/* Barre d'outils */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-200 bg-white px-4 py-3 dark:border-slate-700 dark:bg-slate-900">
                <div>
                  <p className="text-sm font-bold text-slate-900 dark:text-white">Activité en temps réel</p>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400">CHU de Djibouti · lundi 06 octobre 2026 · 14:32</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="hidden items-center gap-2 rounded-md border border-slate-200 bg-white px-3 py-1.5 text-xs text-slate-400 dark:border-slate-600 dark:bg-slate-950 xl:flex">
                    <Search className="h-3.5 w-3.5" aria-hidden="true" />
                    Rechercher un patient, un lit, une ordonnance…
                  </span>
                  <span className="rounded-md border border-slate-200 bg-white px-2.5 py-1.5 font-mono text-[11px] text-slate-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300">
                    Oct. 2026
                  </span>
                  <button
                    type="button"
                    className="flex items-center gap-1.5 rounded-md border border-slate-300 bg-white px-2.5 py-1.5 text-xs font-semibold text-slate-700 transition-all duration-200 ease-in-out hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
                  >
                    <Download className="h-3.5 w-3.5" aria-hidden="true" />
                    Exporter
                  </button>
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-600 dark:border-slate-600 dark:bg-slate-950 dark:text-slate-300">
                    <Bell className="h-4 w-4" aria-hidden="true" />
                    <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
                  </span>
                </div>
              </div>

              {/* Contenu principal */}
              <div className="flex-1 space-y-4 p-4">
                {/* Indicateurs */}
                <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
                  {kpiTiles.map((tile) => (
                    <div key={tile.label} className="rounded-lg border border-slate-200 bg-white p-3.5 dark:border-slate-700 dark:bg-slate-900">
                      <p className="text-[11px] font-medium text-slate-500 dark:text-slate-400">{tile.label}</p>
                      <p className={`mt-1 text-xl font-bold ${tile.alert ? "text-red-700 dark:text-red-400" : "text-slate-900 dark:text-white"}`}>
                        {tile.value}
                      </p>
                      <p className="mt-0.5 text-[10px] text-slate-500 dark:text-slate-400">{tile.detail}</p>
                      {tile.progress !== null ? (
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                          <div
                            className="h-full rounded-full bg-slate-900 dark:bg-slate-100"
                            style={{ width: `${tile.progress}%` }}
                          />
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="grid gap-4 xl:grid-cols-3">
                  {/* Colonne principale */}
                  <div className="space-y-4 xl:col-span-2">
                    {/* Chambres */}
                    <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <Bed className="h-4 w-4 text-slate-400" aria-hidden="true" />
                          <p className="text-xs font-bold text-slate-900 dark:text-white">Occupation des chambres — ailes A & B</p>
                        </div>
                        <div className="flex gap-3 text-[10px] text-slate-500 dark:text-slate-400">
                          {Object.values(roomStatusStyles).map((style) => (
                            <span key={style.label} className="flex items-center gap-1.5">
                              <span className={`h-1.5 w-1.5 rounded-full ${style.bar}`} aria-hidden="true" />
                              {style.label}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2.5 p-4 sm:grid-cols-4">
                        {rooms.map((room) => {
                          const style = roomStatusStyles[room.status];
                          return (
                            <div key={room.number} className="overflow-hidden rounded-md border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                              <div className={`h-1 ${style.bar}`} />
                              <div className="p-2.5">
                                <div className="flex items-baseline justify-between gap-1">
                                  <p className="font-mono text-xs font-bold text-slate-900 dark:text-white">{room.number}</p>
                                  <span className={`rounded-[3px] px-1 py-0.5 text-[9px] font-semibold ${style.chip}`}>
                                    {style.label}
                                  </span>
                                </div>
                                <p className="mt-1 truncate text-[10px] text-slate-500 dark:text-slate-400">{room.service}</p>
                                <p className="mt-0.5 truncate text-[11px] font-medium text-slate-900 dark:text-slate-100">
                                  {room.patient ?? "—"}
                                </p>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>

                    {/* File d'attente */}
                    <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <Timer className="h-4 w-4 text-slate-400" aria-hidden="true" />
                          <p className="text-xs font-bold text-slate-900 dark:text-white">File d&apos;attente consultations</p>
                        </div>
                        <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">14 patients · rafraîchi à 14:32</p>
                      </div>
                      <div className="overflow-x-auto">
                        <table className="w-full text-left">
                          <thead>
                            <tr className="border-b border-slate-100 text-[10px] uppercase text-slate-400">
                              <th className="px-4 py-2 font-semibold">Patient</th>
                              <th className="px-4 py-2 font-semibold">Service</th>
                              <th className="px-4 py-2 font-semibold">Attente</th>
                              <th className="px-4 py-2 text-right font-semibold">Statut</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-slate-100">
                            {consultationQueue.map((row) => (
                              <tr key={row.patient} className="text-xs text-slate-700 dark:text-slate-300">
                                <td className="px-4 py-2.5 font-medium text-slate-900 dark:text-white">{row.patient}</td>
                                <td className="px-4 py-2.5">{row.service}</td>
                                <td className="px-4 py-2.5 font-mono text-[11px]">{row.wait}</td>
                                <td className="px-4 py-2.5 text-right">
                                  <span
                                    className={`inline-flex rounded-md px-2 py-0.5 text-[10px] font-semibold ${queueStatusStyles[row.status]}`}
                                  >
                                    {row.status}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>

                  {/* Colonne droite */}
                  <div className="space-y-4">
                    {/* Pharmacie */}
                    <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                      <div className="flex items-center justify-between border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                        <div className="flex items-center gap-2">
                          <Pill className="h-4 w-4 text-slate-400" aria-hidden="true" />
                          <p className="text-xs font-bold text-slate-900 dark:text-white">Pharmacie — stock temps réel</p>
                        </div>
                        <TriangleAlert className="h-3.5 w-3.5 text-red-600 dark:text-red-400" aria-hidden="true" />
                      </div>
                      <ul className="divide-y divide-slate-100">
                        {pharmacyStock.map((item) => {
                          const ratio = item.stock / item.capacity;
                          const level = stockLevel(ratio);
                          return (
                            <li key={item.name} className="px-4 py-2.5">
                              <div className="flex items-baseline justify-between gap-2">
                                <p className="truncate text-[11px] font-semibold text-slate-900 dark:text-slate-100">{item.name}</p>
                                <span
                                  className={`shrink-0 rounded-[3px] px-1.5 py-0.5 text-[9px] font-semibold ${level.chip}`}
                                >
                                  {level.label}
                                </span>
                              </div>
                              <div className="mt-1.5 flex items-center gap-2">
                                <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800">
                                  <div
                                    className={`h-full rounded-full ${level.bar}`}
                                    style={{ width: `${Math.max(4, Math.round(ratio * 100))}%` }}
                                  />
                                </div>
                                <span className="shrink-0 font-mono text-[9px] text-slate-500 dark:text-slate-400">
                                  {item.stock}/{item.capacity} {item.unit}
                                </span>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                      {/* Substitution générique */}
                      <div className="border-t border-slate-100 bg-slate-50 px-4 py-3 dark:border-slate-800 dark:bg-slate-950">
                        <p className="text-[10px] font-semibold uppercase text-slate-500 dark:text-slate-400">
                          Substitution générique proposée
                        </p>
                        <p className="mt-1 text-[11px] leading-relaxed text-slate-700 dark:text-slate-300">
                          <span className="font-mono">ORD-2026-0841</span> — Artéméther/Luméfantrine 20/120 mg →
                          générique agréé, économie estimée <span className="font-semibold">-68 %</span>.
                        </p>
                        <div className="mt-2 flex gap-2">
                          <button
                            type="button"
                            className="rounded-md bg-slate-900 px-2.5 py-1 text-[10px] font-semibold text-white transition-all duration-200 ease-in-out hover:bg-slate-800 dark:bg-brand-600 dark:hover:bg-brand-700"
                          >
                            Valider la substitution
                          </button>
                          <button
                            type="button"
                            className="rounded-md border border-slate-300 bg-white px-2.5 py-1 text-[10px] font-semibold text-slate-600 transition-all duration-200 ease-in-out hover:border-slate-900 hover:text-slate-900 dark:border-slate-600 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
                          >
                            Voir l&apos;ordonnance
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Dernières ordonnances électroniques */}
                    <div className="rounded-lg border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                      <div className="border-b border-slate-100 px-4 py-3 dark:border-slate-800">
                        <p className="text-xs font-bold text-slate-900 dark:text-white">Dernières ordonnances électroniques</p>
                      </div>
                      <ul className="divide-y divide-slate-100">
                        {recentPrescriptions.map((rx) => (
                          <li key={rx.id} className="flex items-center justify-between gap-2 px-4 py-2.5">
                            <div className="min-w-0 leading-tight">
                              <p className="font-mono text-[10px] text-slate-500 dark:text-slate-400">{rx.id}</p>
                              <p className="truncate text-[11px] font-medium text-slate-900 dark:text-slate-100">{rx.patient}</p>
                              <p className="truncate text-[10px] text-slate-500 dark:text-slate-400">{rx.prescriber}</p>
                            </div>
                            <span
                              className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-semibold ${prescriptionStatusStyles[rx.status]}`}
                            >
                              {rx.status}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pied de section */}
        <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500 dark:text-slate-400">
          <p className="flex items-center gap-2">
            <Users className="h-3.5 w-3.5 text-brand-700 dark:text-brand-400" aria-hidden="true" />
            1 427 praticiens et agents administratifs actifs sur la console ce mois-ci
          </p>
          <p className="font-mono">Données de démonstration — structure identique en production</p>
        </div>
      </div>
    </section>
  );
}

export default HospitalDashboardPreview;






