import Image from "next/image";
import { QrCodePattern } from "./QrCodePattern";
import { Smartphone, QrCode } from "lucide-react";

/* Badges officiels des stores — QR code généré en Tailwind pur à côté
   de chaque badge pour un scan direct depuis un écran de bureau. */
const storeBadges = [
  {
    id: "google-play",
    name: "Google Play",
    href: "#",
    src: "/images/google-play.png",
    alt: "Télécharger sur Google Play",
    width: 646,
    height: 250,
    /* Le badge remplit exactement son canvas : simple object-cover. */
    badgeClassName: "h-11 aspect-[646/250] overflow-hidden",
    caption: "Android 9+ · 18,4 Mo",
    seed: 20261009,
  },
  {
    id: "app-store",
    name: "App Store",
    href: "#",
    src: "/images/app-store.png",
    alt: "Disponible sur l'App Store",
    width: 1600,
    height: 1200,
    /* Le canvas source (1600×1200) comporte de grandes marges : un
       cadrage object-cover centré en aspect 3.59/1 isole le badge
       et masque le filigrane du fichier source. */
    badgeClassName: "h-11 aspect-[3.59/1] overflow-hidden",
    caption: "iOS 15+ · iPhone & iPad",
    seed: 77817755,
  },
];

const downloadHighlights = [
  { value: "Gratuite", label: "téléchargement & usage citoyen" },
  { value: "Offline-first", label: "dossier accessible en connexion faible" },
  { value: "FR / AR / EN", label: "interface trilingue" },
];

export function AppDownloadSection() {
  return (
    <section id="telecharger" className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Argumentaire */}
          <div className="lg:col-span-5">
            <p className="text-xs font-semibold uppercase text-brand-700 dark:text-brand-400">
              05 / Application mobile
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-slate-900 dark:text-white sm:text-[2.1rem]">
              L&apos;application DrSan est disponible sur iOS&nbsp;&amp;&nbsp;Android.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
              Téléchargez l&apos;application officielle, authentifiez-vous et présentez votre carte de santé
              directement depuis votre smartphone : dossier médical, ordonnances électroniques et prochaines
              consultations, où que vous soyez à Djibouti.
            </p>

            <div className="mt-6 flex items-start gap-2.5 rounded-lg border border-brand-100 bg-brand-50 px-4 py-3 dark:border-brand-900 dark:bg-brand-950/60">
              <QrCode className="mt-0.5 h-4 w-4 shrink-0 text-brand-600 dark:text-brand-400" aria-hidden="true" />
              <p className="text-xs leading-relaxed text-brand-800 dark:text-brand-200">
                Scannez le QR code correspondant à votre store : l&apos;installation démarre en moins de
                30&nbsp;secondes, sans recherche manuelle.
              </p>
            </div>

            <dl className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-slate-200 bg-slate-200 dark:border-slate-700 dark:bg-slate-700">
              {downloadHighlights.map((item) => (
                <div key={item.value} className="bg-white px-3 py-3.5 dark:bg-slate-900">
                  <dt className="text-[11px] font-bold text-slate-900 dark:text-white">{item.value}</dt>
                  <dd className="mt-0.5 text-[10px] leading-snug text-slate-500 dark:text-slate-400">{item.label}</dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Badges de stores + QR codes */}
          <div className="lg:col-span-7">
            <div className="grid gap-4 sm:grid-cols-2">
              {storeBadges.map((badge) => (
                <div
                  key={badge.id}
                  className="group flex flex-col rounded-lg border border-slate-200 bg-white p-5 transition-all duration-200 ease-in-out hover:border-brand-600 dark:border-slate-700 dark:bg-slate-800 dark:hover:border-brand-400"
                >
                  <a
                    href={badge.href}
                    className={`inline-flex self-start rounded-md ring-1 ring-slate-200 transition-all duration-200 ease-in-out group-hover:ring-brand-600 dark:ring-slate-600 dark:group-hover:ring-brand-400 ${badge.badgeClassName}`}
                    aria-label={badge.alt}
                  >
                    <Image
                      src={badge.src}
                      alt={badge.alt}
                      width={badge.width}
                      height={badge.height}
                      className="h-full w-full object-cover object-center"
                    />
                  </a>

                  <p className="mt-2.5 text-[11px] font-medium text-slate-500 dark:text-slate-400">{badge.caption}</p>

                  <div className="mt-4 flex items-center gap-4 border-t border-slate-100 pt-4 dark:border-slate-700">
                    <div className="rounded-md border border-slate-200 bg-white p-1 dark:border-slate-600">
                      <QrCodePattern
                        seed={badge.seed}
                        size={21}
                        className="h-[76px] w-[76px]"
                        ariaLabel={`QR code d'installation — ${badge.name}`}
                      />
                    </div>
                    <div className="min-w-0">
                      <p className="text-xs font-semibold text-slate-900 dark:text-white">Scannez pour installer</p>
                      <p className="mt-1 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                        Pointez l&apos;appareil photo de votre téléphone — redirection immédiate vers le{" "}
                        {badge.name}.
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="mt-4 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
              <Smartphone className="h-3.5 w-3.5 text-brand-600 dark:text-brand-400" aria-hidden="true" />
              Déploiement progressif sur l&apos;ensemble des 9 wilayas — Djibouti 2026.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AppDownloadSection;

