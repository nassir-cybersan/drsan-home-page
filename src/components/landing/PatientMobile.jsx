"use client";

import { useState } from "react";
import { Activity, CalendarDays, ChevronLeft, ClipboardList, FileCheck, FileText, HeartPulse, Lock, Pill, Signal, Wifi } from "lucide-react";

const chartMetrics = [
  {
    id: "tension",
    tab: "Tension",
    label: "Pression artérielle",
    unit: "mmHg",
    min: 60,
    max: 160,
    values: [
      { day: "Lun", value: 128 },
      { day: "Mar", value: 132 },
      { day: "Mer", value: 126 },
      { day: "Jeu", value: 135 },
      { day: "Ven", value: 130 },
      { day: "Sam", value: 124 },
      { day: "Dim", value: 127 },
    ],
    caption: "Moyenne 7 j : 129/83 mmHg — dans la cible (< 140/90)",
  },
  {
    id: "glycemie",
    tab: "Glycémie",
    label: "Glycémie à jeun",
    unit: "g/L",
    min: 0.6,
    max: 1.6,
    values: [
      { day: "Lun", value: 1.02 },
      { day: "Mar", value: 1.08 },
      { day: "Mer", value: 0.97 },
      { day: "Jeu", value: 1.12 },
      { day: "Ven", value: 1.05 },
      { day: "Sam", value: 0.99 },
      { day: "Dim", value: 1.06 },
    ],
    caption: "Moyenne 7 j : 1,04 g/L — contrôle avant le petit-déjeuner",
  },
  {
    id: "pouls",
    tab: "Pouls",
    label: "Fréquence cardiaque",
    unit: "bpm",
    min: 40,
    max: 110,
    values: [
      { day: "Lun", value: 74 },
      { day: "Mar", value: 71 },
      { day: "Mer", value: 76 },
      { day: "Jeu", value: 69 },
      { day: "Ven", value: 72 },
      { day: "Sam", value: 68 },
      { day: "Dim", value: 72 },
    ],
    caption: "Moyenne 7 j : 72 bpm — rythme régulier",
  },
];

const vitalTiles = [
  { label: "Tension", value: "128/84", unit: "mmHg" },
  { label: "Glycémie", value: "1,06", unit: "g/L" },
  { label: "Pouls", value: "72", unit: "bpm" },
];

const activePrescriptions = [
  { name: "Metformine 850 mg", posologie: "1 cp · 2×/jour · aux repas", remaining: 18, total: 28 },
  { name: "Bisoprolol 5 mg", posologie: "1 cp · le matin", remaining: 6, total: 30 },
  { name: "Oméprazole 20 mg", posologie: "1 gélule · à jeun", remaining: 23, total: 30 },
];

const recentHistory = [
  { date: "12.06.2026", title: "Consultation cardiologie", place: "CHU de Djibouti — Dr A. Waberi" },
  { date: "28.05.2026", title: "Bilan biologique (NFS, glycémie)", place: "Laboratoire de la Riviera" },
  { date: "03.05.2026", title: "Renouvellement d'ordonnance", place: "Centre de santé de Balbala" },
];

const featureRows = [
  {
    icon: FileText,
    title: "Historique médical unifié",
    detail: "Consultations, hospitalisations, résultats de laboratoire et imagerie réunis dans une chronologie unique.",
  },
  {
    icon: FileCheck,
    title: "Ordonnances électroniques",
    detail: "Renouvellement en un geste, historique complet et alerte d'interaction médicamenteuse en amont.",
  },
  {
    icon: Activity,
    title: "Constantes suivies en continu",
    detail: "Pression artériale, glycémie et fréquence cardiaque, saisies à la main ou par appareil connecté.",
  },
  {
    icon: Lock,
    title: "Accès contrôlé par le patient",
    detail: "Le patient décide qui consulte quoi, et pour quelle durée — chaque accès est journalisé.",
  },
];

export function PatientMobile() {
  const [activeMetricId, setActiveMetricId] = useState("tension");
  const activeMetric = chartMetrics.find((metric) => metric.id === activeMetricId) ?? chartMetrics[0];

  return (
    <section id="dossier-patient" className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Argumentaire */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-400">01 / Dossier médical patient — Mobile</p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
              Le dossier médical complet, dans la poche du patient.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Chaque Djiboutien dispose d&apos;un dossier unique, partagé entre les établissements du réseau DrSan. Fini les
              radios perdues et les ordonnances recopiées : le patient retrouve son historique complet, où qu&apos;il soit,
              même en connexion intermittente.
            </p>

            <div className="mt-8 divide-y divide-slate-200 border-y border-slate-200 dark:divide-slate-800 dark:border-slate-800">
              {featureRows.map((row) => (
                <div key={row.title} className="flex gap-4 py-4">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white dark:border-slate-700 dark:bg-slate-900">
                    <row.icon className="h-4 w-4 text-brand-700 dark:text-brand-400" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-slate-900 dark:text-slate-100">{row.title}</p>
                    <p className="mt-0.5 text-sm leading-relaxed text-slate-600 dark:text-slate-400">{row.detail}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-1 rounded-lg border border-slate-200 bg-white px-4 py-3 text-[11px] text-slate-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-400">
              <span className="font-semibold text-slate-700 dark:text-slate-200">iOS 15+ · Android 9+</span>
              <span aria-hidden="true">·</span>
              <span>18,4 Mo</span>
              <span aria-hidden="true">·</span>
              <span>Français / العربية</span>
              <span aria-hidden="true">·</span>
              <span>Mode hors-ligne : cache 30 jours</span>
            </div>
          </div>

          {/* Mockup smartphone */}
          <div className="lg:col-span-7">
            <div className="rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3 dark:border-slate-800">
                <p className="text-xs font-semibold text-slate-700 dark:text-slate-200">Aperçu de l&apos;application — Dossier patient</p>
                <span className="rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 font-mono text-[10px] text-slate-500 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-400">
                  v2.4.1 · iOS / Android
                </span>
              </div>

              <div className="flex justify-center bg-slate-100 px-4 py-8 dark:bg-slate-800">
                {/* Châssis du téléphone */}
                <div className="rounded-[30px] border border-slate-800 bg-slate-900 p-2.5 shadow-sm">
                  <div className="relative flex h-[560px] w-[272px] flex-col overflow-hidden rounded-[22px] bg-white">
                    {/* Barre d'état */}
                    <div className="flex items-center justify-between bg-slate-900 px-4 py-1.5 text-[9px] font-medium text-white">
                      <span className="font-mono">14:32</span>
                      <span className="flex items-center gap-1.5">
                        <Signal className="h-2.5 w-2.5" aria-hidden="true" />
                        <Wifi className="h-2.5 w-2.5" aria-hidden="true" />
                        <span className="flex h-2.5 w-5 items-center rounded-[2px] border border-white/60 p-[1px]">
                          <span className="h-full w-3/4 rounded-[1px] bg-white" />
                        </span>
                      </span>
                    </div>

                    {/* En-tête application */}
                    <div className="flex items-center justify-between border-b border-slate-100 px-3 py-2.5">
                      <ChevronLeft className="h-4 w-4 text-slate-400" aria-hidden="true" />
                      <div className="text-center leading-tight">
                        <p className="text-[11px] font-bold text-slate-900">Dossier médical</p>
                        <p className="text-[8px] text-slate-500">CHU de Djibouti · synchronisé</p>
                      </div>
                      <Lock className="h-3.5 w-3.5 text-brand-700" aria-hidden="true" />
                    </div>

                    {/* Identité patient */}
                    <div className="flex items-start gap-3 border-b border-slate-100 bg-slate-50 px-3 py-3">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-brand-600 text-[11px] font-bold text-white">
                        MA
                      </span>
                      <div className="min-w-0 flex-1 leading-tight">
                        <p className="text-[11px] font-bold uppercase text-slate-900">Mohamed Ali Djama</p>
                        <p className="mt-0.5 text-[9px] text-slate-500">Né le 12.03.1984 · 41 ans · Masculin</p>
                        <p className="mt-0.5 font-mono text-[9px] text-slate-500">N° santé 47 298 361 04</p>
                      </div>
                      <span className="flex flex-col items-center rounded-md bg-slate-900 px-2 py-1 text-white">
                        <span className="text-[7px] uppercase text-slate-400">Groupe</span>
                        <span className="text-[11px] font-bold">O+</span>
                      </span>
                    </div>

                    {/* Constantes */}
                    <div className="grid grid-cols-3 gap-1.5 px-3 pt-3">
                      {vitalTiles.map((tile) => (
                        <div key={tile.label} className="rounded-md border border-slate-200 px-2 py-1.5">
                          <p className="text-[8px] font-medium uppercase text-slate-500">{tile.label}</p>
                          <p className="text-[12px] font-bold leading-tight text-slate-900">{tile.value}</p>
                          <p className="text-[8px] text-slate-400">{tile.unit}</p>
                        </div>
                      ))}
                    </div>

                    {/* Graphique interactif */}
                    <div className="mx-3 mt-2.5 rounded-md border border-slate-200 p-2.5">
                      <div className="flex items-center justify-between">
                        <p className="text-[9px] font-bold text-slate-900">{activeMetric.label} — 7 jours</p>
                        <div className="flex gap-1">
                          {chartMetrics.map((metric) => (
                            <button
                              key={metric.id}
                              type="button"
                              onClick={() => setActiveMetricId(metric.id)}
                              className={`rounded-[3px] px-1.5 py-0.5 text-[8px] font-semibold transition-all duration-200 ease-in-out ${
                                metric.id === activeMetricId
                                  ? "bg-slate-900 text-white"
                                  : "border border-slate-200 bg-white text-slate-500 hover:border-slate-400"
                              }`}
                            >
                              {metric.tab}
                            </button>
                          ))}
                        </div>
                      </div>

                      <div className="relative mt-2 h-20 border-b border-slate-200">
                        <span className="absolute inset-x-0 top-1/4 border-t border-dashed border-slate-100" aria-hidden="true" />
                        <span className="absolute inset-x-0 top-2/4 border-t border-dashed border-slate-100" aria-hidden="true" />
                        <span className="absolute inset-x-0 top-3/4 border-t border-dashed border-slate-100" aria-hidden="true" />
                        <div className="flex h-full items-end gap-1.5 px-0.5">
                          {activeMetric.values.map((entry) => {
                            const ratio = (entry.value - activeMetric.min) / (activeMetric.max - activeMetric.min);
                            return (
                              <div key={entry.day} className="flex h-full flex-1 items-end">
                                <div
                                  className="w-full rounded-t-[2px] bg-brand-600 transition-all duration-200 ease-in-out"
                                  style={{ height: `${Math.max(8, Math.round(ratio * 100))}%` }}
                                  title={`${entry.day} : ${entry.value} ${activeMetric.unit}`}
                                />
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <div className="mt-1 flex gap-1.5">
                        {activeMetric.values.map((entry) => (
                          <span key={entry.day} className="flex-1 text-center text-[7px] uppercase text-slate-400">
                            {entry.day}
                          </span>
                        ))}
                      </div>
                      <p className="mt-1.5 text-[8px] leading-relaxed text-slate-500">{activeMetric.caption}</p>
                    </div>

                    {/* Ordonnances actives */}
                    <div className="mx-3 mt-2.5 rounded-md border border-slate-200">
                      <div className="flex items-center justify-between border-b border-slate-100 px-2.5 py-1.5">
                        <p className="text-[9px] font-bold text-slate-900">Ordonnances actives (3)</p>
                        <Pill className="h-3 w-3 text-brand-700" aria-hidden="true" />
                      </div>
                      <ul className="divide-y divide-slate-100">
                        {activePrescriptions.map((rx) => (
                          <li key={rx.name} className="px-2.5 py-1.5">
                            <div className="flex items-baseline justify-between gap-2">
                              <p className="truncate text-[9px] font-semibold text-slate-900">{rx.name}</p>
                              <span className="shrink-0 font-mono text-[8px] text-slate-500">
                                J-{rx.remaining}
                              </span>
                            </div>
                            <p className="mt-0.5 text-[8px] text-slate-500">{rx.posologie}</p>
                            <div className="mt-1 h-1 overflow-hidden rounded-full bg-slate-100">
                              <div
                                className={`h-full rounded-full ${rx.remaining <= 7 ? "bg-slate-900" : "bg-brand-600"}`}
                                style={{ width: `${Math.round((rx.remaining / rx.total) * 100)}%` }}
                              />
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Historique récent */}
                    <div className="mx-3 mt-2.5 rounded-md border border-slate-200">
                      <div className="flex items-center justify-between border-b border-slate-100 px-2.5 py-1.5">
                        <p className="text-[9px] font-bold text-slate-900">Historique récent</p>
                        <HeartPulse className="h-3 w-3 text-brand-700" aria-hidden="true" />
                      </div>
                      <ul className="divide-y divide-slate-100">
                        {recentHistory.map((entry) => (
                          <li key={entry.date} className="flex gap-2 px-2.5 py-1.5">
                            <span className="shrink-0 rounded-[3px] bg-slate-100 px-1 py-0.5 font-mono text-[7px] text-slate-600">
                              {entry.date}
                            </span>
                            <div className="min-w-0 leading-tight">
                              <p className="truncate text-[9px] font-semibold text-slate-900">{entry.title}</p>
                              <p className="truncate text-[8px] text-slate-500">{entry.place}</p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Barre d'onglets */}
                    <div className="mt-auto grid grid-cols-4 border-t border-slate-100 bg-white px-1 py-1.5">
                      {[
                        { icon: Activity, label: "Accueil", active: true },
                        { icon: ClipboardList, label: "Dossiers", active: false },
                        { icon: Pill, label: "Ordonnances", active: false },
                        { icon: CalendarDays, label: "RDV", active: false },
                      ].map((tab) => (
                        <span
                          key={tab.label}
                          className={`flex flex-col items-center gap-0.5 rounded-md py-1 ${
                            tab.active ? "text-brand-700" : "text-slate-400"
                          }`}
                        >
                          <tab.icon className="h-3.5 w-3.5" aria-hidden="true" />
                          <span className="text-[7px] font-semibold">{tab.label}</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Pied du panneau */}
              <div className="grid grid-cols-3 border-t border-slate-100 text-center dark:border-slate-800">
                {[
                  { value: "Chiffrement", label: "bout en bout" },
                  { value: "Hors-ligne", label: "cache 30 jours" },
                  { value: "Sync", label: "≤ 2 secondes" },
                ].map((item, index) => (
                  <div key={item.value} className={`px-3 py-3 ${index > 0 ? "border-l border-slate-100 dark:border-slate-800" : ""}`}>
                    <p className="text-xs font-bold text-slate-900 dark:text-white">{item.value}</p>
                    <p className="mt-0.5 text-[11px] text-slate-500 dark:text-slate-400">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PatientMobile;



