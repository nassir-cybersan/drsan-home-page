"use client";

import { useEffect, useState } from "react";
import { BedDouble, MapPin, Siren } from "lucide-react";

/* ------------------------------------------------------------------ */
/* Données de démonstration : flux temps réel des urgences publiques   */
/* (branchées en production sur le réseau DrSan — déploiement 2026).   */
/* ------------------------------------------------------------------ */

const facilities = [
  {
    id: "peltier",
    name: "Hôpital Général Peltier",
    city: "Djibouti-Ville",
    wait: 14,
    beds: { free: 8, total: 24 },
    services: [
      { name: "Imagerie", status: "ok" },
      { name: "Traumatologie", status: "busy" },
      { name: "Laboratoire", status: "ok" },
    ],
  },
  {
    id: "balbala",
    name: "Hôpital de Balbala",
    city: "Balbala",
    wait: 22,
    beds: { free: 4, total: 16 },
    services: [
      { name: "Imagerie", status: "ok" },
      { name: "Traumatologie", status: "ok" },
      { name: "Laboratoire", status: "busy" },
    ],
  },
  {
    id: "ali-sabieh",
    name: "Hôpital Général d'Ali Sabieh",
    city: "Ali Sabieh",
    wait: 9,
    beds: { free: 6, total: 12 },
    services: [
      { name: "Bloc opératoire", status: "ok" },
      { name: "Maternité", status: "ok" },
      { name: "Laboratoire", status: "ok" },
    ],
  },
  {
    id: "dikhil",
    name: "Hôpital de Dikhil",
    city: "Dikhil",
    wait: 12,
    beds: { free: 5, total: 10 },
    services: [
      { name: "Imagerie", status: "busy" },
      { name: "Traumatologie", status: "ok" },
      { name: "Pédiatrie", status: "ok" },
    ],
  },
  {
    id: "tadjourah",
    name: "Hôpital de Tadjourah",
    city: "Tadjourah",
    wait: 27,
    beds: { free: 3, total: 8 },
    services: [
      { name: "Imagerie", status: "ok" },
      { name: "Maternité", status: "busy" },
      { name: "Laboratoire", status: "ok" },
    ],
  },
  {
    id: "obock",
    name: "Hôpital d'Obock",
    city: "Obock",
    wait: 6,
    beds: { free: 7, total: 8 },
    services: [
      { name: "Consultations", status: "ok" },
      { name: "Maternité", status: "ok" },
      { name: "Laboratoire", status: "ok" },
    ],
  },
];

const serviceStatus = {
  ok: {
    label: "Disponible",
    chip: "border-brand-200 bg-brand-50 text-brand-700 dark:border-brand-800 dark:bg-brand-950 dark:text-brand-300",
    dot: "bg-brand-600",
  },
  busy: {
    label: "Sous tension",
    chip: "border-amber-200 bg-amber-50 text-amber-700 dark:border-amber-800 dark:bg-amber-950 dark:text-amber-300",
    dot: "bg-amber-500",
  },
};

const waitTiers = [
  { max: 15, bar: "bg-brand-600", text: "text-brand-700 dark:text-brand-300" },
  { max: 30, bar: "bg-amber-500", text: "text-amber-700 dark:text-amber-300" },
  { max: Infinity, bar: "bg-accent", text: "text-accent-700 dark:text-accent-400" },
];

const tierFor = (wait) => waitTiers.find((tier) => wait <= tier.max);

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

const jitter = (value, spread) => value + Math.round((Math.random() * 2 - 1) * spread);

/* ------------------------------------------------------------------ */
/* Carte établissement                                                 */
/* ------------------------------------------------------------------ */

function FacilityCard({ facility }) {
  const tier = tierFor(facility.wait);
  const occupancy = Math.round((facility.wait / 45) * 100);
  const bedsFull = facility.beds.free === 0;

  const capacityChip = bedsFull
    ? { label: "Urgences complètes", chip: "bg-accent text-white", dot: "bg-white" }
    : facility.beds.free <= 3
      ? { label: "Places limitées", chip: "bg-amber-500 text-white", dot: "bg-white" }
      : { label: "Flux normal", chip: "bg-brand-600 text-white", dot: "bg-white" };

  return (
    <article className="group rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 ease-in-out hover:border-brand-600 hover:shadow-sm dark:border-slate-700 dark:bg-slate-900 dark:hover:border-brand-400">
      {/* Identité de l'établissement */}
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="truncate text-sm font-bold text-slate-900 dark:text-white">{facility.name}</h3>
          <p className="mt-0.5 flex items-center gap-1 text-[11px] text-slate-500 dark:text-slate-400">
            <MapPin className="h-3 w-3 shrink-0" aria-hidden="true" />
            {facility.city}
          </p>
        </div>
        <span
          className={`inline-flex shrink-0 items-center gap-1.5 rounded-md px-2 py-1 text-[10px] font-semibold ${capacityChip.chip}`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${capacityChip.dot}`} aria-hidden="true" />
          {capacityChip.label}
        </span>
      </div>

      {/* Temps d'attente estimé — indicateur visuel interactif */}
      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-2">
          <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Temps d&apos;attente estimé
          </p>
          <p className={`text-sm font-bold ${tier.text}`}>≈ {facility.wait} min</p>
        </div>
        <div
          className="mt-2 h-1.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-800"
          role="progressbar"
          aria-label={`Temps d'attente estimé — ${facility.name}`}
          aria-valuenow={facility.wait}
          aria-valuemin={0}
          aria-valuemax={45}
        >
          <div
            className={`h-full rounded-full transition-all duration-700 ease-in-out ${tier.bar}`}
            style={{ width: `${clamp(occupancy, 4, 100)}%` }}
            title={`Attente estimée : ${facility.wait} minutes`}
          />
        </div>
        <div className="mt-1 flex justify-between text-[9px] text-slate-400 dark:text-slate-500">
          <span>0 min</span>
          <span>45 min +</span>
        </div>
      </div>

      {/* Lits d'urgence disponibles */}
      <div className="mt-4 flex items-center justify-between gap-3 rounded-md border border-slate-100 bg-slate-50 px-3 py-2.5 dark:border-slate-800 dark:bg-slate-800/60">
        <span className="flex items-center gap-2 text-[11px] font-medium text-slate-600 dark:text-slate-300">
          <BedDouble className="h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
          Lits d&apos;urgence disponibles
        </span>
        <span
          className={`text-sm font-bold transition-all duration-300 ease-in-out ${
            bedsFull ? "text-accent" : "text-slate-900 dark:text-white"
          }`}
        >
          {facility.beds.free}
          <span className="text-[10px] font-medium text-slate-400"> / {facility.beds.total}</span>
        </span>
      </div>

      {/* Services spécialisés */}
      <div className="mt-4">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Services spécialisés
        </p>
        <ul className="mt-2 flex flex-wrap gap-1.5">
          {facility.services.map((service) => {
            const status = serviceStatus[service.status];
            return (
              <li
                key={service.name}
                title={`${service.name} — ${status.label}`}
                className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-1 text-[10px] font-medium ${status.chip}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
                {service.name} · {status.label}
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}

/* ------------------------------------------------------------------ */
/* Section « Le fil d'attente en temps réel & disponibilité d'urgence » */
/* ------------------------------------------------------------------ */

export function EmergencySection() {
  const [liveFacilities, setLiveFacilities] = useState(facilities);
  const [lastUpdate, setLastUpdate] = useState(null);

  useEffect(() => {
    const update = () => {
      setLiveFacilities((current) =>
        current.map((facility) => ({
          ...facility,
          wait: clamp(jitter(facility.wait, 4), 4, 48),
          beds: {
            ...facility.beds,
            free: clamp(jitter(facility.beds.free, 1), 0, facility.beds.total),
          },
        })),
      );
      setLastUpdate(new Date());
    };

    update();
    const timer = window.setInterval(update, 4000);
    return () => window.clearInterval(timer);
  }, []);

  const totalFreeBeds = liveFacilities.reduce((sum, facility) => sum + facility.beds.free, 0);
  const clock = lastUpdate
    ? lastUpdate.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit", second: "2-digit" })
    : "--:--:--";

  return (
    <section id="urgences" className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-950">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        {/* En-tête de section */}
        <div className="grid gap-8 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-400">
              06 / Santé publique en temps réel
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
              Le fil d&apos;attente en temps réel &amp; disponibilité d&apos;urgence.
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Avant de vous déplacer, vérifiez la charge réelle des services d&apos;urgence publics de
              Djibouti : temps d&apos;attente estimé, lits disponibles et opérationnalité des services
              spécialisés — donnée collectée en continu par le réseau DrSan.
            </p>
          </div>

          <div className="flex flex-col justify-end gap-2 lg:col-span-5 lg:items-end">
            <span className="inline-flex items-center gap-2 rounded-md border border-brand-200 bg-white px-3 py-1.5 text-[11px] font-semibold text-brand-700 dark:border-brand-800 dark:bg-slate-900 dark:text-brand-300">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              Flux actif · rafraîchi toutes les 4 s
            </span>
            <p className="font-mono text-[11px] text-slate-500 dark:text-slate-400">
              Dernière mise à jour — {clock} · {totalFreeBeds} lits libres sur le réseau
            </p>
          </div>
        </div>

        {/* Légende */}
        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11px] text-slate-500 dark:text-slate-400">
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-brand-600" aria-hidden="true" />
            Attente &lt; 15 min · disponible
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-amber-500" aria-hidden="true" />
            Attente 15–30 min · sous tension
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden="true" />
            Attente &gt; 30 min · affluence élevée
          </span>
        </div>

        {/* Grille des établissements */}
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {liveFacilities.map((facility) => (
            <FacilityCard key={facility.id} facility={facility} />
          ))}
        </div>

        <p className="mt-6 flex items-start gap-2 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
          <Siren className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" aria-hidden="true" />
          <span>
            En cas d&apos;urgence vitale, composez le <strong className="font-semibold text-slate-700 dark:text-slate-200">15</strong>{" "}
            (SAMU) ou rendez-vous directement à l&apos;établissement le plus proche. Valeurs de démonstration —
            en production, ce flux est alimenté en continu par les établissements publics connectés à DrSan.
          </span>
        </p>
      </div>
    </section>
  );
}

export default EmergencySection;

