import { Award, CheckCircle, QrCode } from "lucide-react";
import { Card } from "@/components/ui/Card";

function CrossIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

function DjiboutiFlag({ className = "h-3 w-4" }) {
  return (
    <svg className={className} viewBox="0 0 600 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <rect width="600" height="200" fill="#6AB2E7" />
      <rect y="200" width="600" height="200" fill="#12AD2B" />
      <polygon points="0,0 0,400 346.41,200" fill="#FFFFFF" />
      <polygon points="115.47,150 128.53,190.21 170.83,190.21 136.62,215.09 149.68,255.3 115.47,230.42 81.26,255.3 94.32,215.09 60.11,190.21 102.41,190.21" fill="#D7141A" />
    </svg>
  );
}

export function CardSection() {
  return (
    <section id="card" className="relative overflow-hidden py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-6">
            <div className="w-full max-w-md">
              <div className="relative overflow-hidden rounded-3xl border border-emerald-400/30 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 p-6 text-white shadow-2xl sm:p-8">
                <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 rounded-full bg-white/10 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-12 -left-12 h-48 w-48 rounded-full bg-emerald-500/20 blur-2xl" />

                <div className="relative z-10 mb-6 flex items-center justify-between border-b border-white/20 pb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-md">
                      <CrossIcon size={20} />
                    </div>
                    <div>
                      <span className="block text-lg font-extrabold tracking-tight">DrSan</span>
                      <span className="-mt-0.5 block text-[10px] font-semibold uppercase tracking-[0.2em] text-emerald-200">e-santé</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 rounded-full border border-white/20 bg-white/15 px-3 py-1 text-xs font-bold tracking-wide">
                    <DjiboutiFlag className="h-3 w-4 rounded-sm" />
                    <span>R. Djibouti</span>
                  </div>
                </div>

                <div className="relative z-10 mb-6 flex items-center justify-between">
                  <div className="flex h-9 w-12 items-center justify-center rounded-lg border border-amber-200/60 bg-gradient-to-tr from-amber-300 via-yellow-400 to-amber-500">
                    <div className="h-5 w-8 rounded-sm border border-amber-800/40" />
                  </div>
                  <div className="font-mono text-[10px] font-bold uppercase tracking-widest text-white/80">((( NFC CONNECTED )))</div>
                </div>

                <div className="relative z-10 mb-6 text-left">
                  <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">Titulaire</div>
                  <div className="mt-1 font-mono text-lg font-black tracking-wide text-white sm:text-xl">MOHAMED ALI DJAMA</div>
                </div>

                <div className="relative z-10 flex items-end justify-between border-t border-white/20 pt-4">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-200">ID National</div>
                    <div className="mt-1 font-mono text-base font-bold tracking-widest text-emerald-100 sm:text-lg">7748 9201 3842</div>
                  </div>

                  <div className="rounded-xl bg-white p-2 shadow-md">
                    <QrCode className="h-10 w-10 text-slate-900" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6 text-center lg:col-span-6 lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-800">
              <Award className="h-4 w-4 text-emerald-600" />
              <span>Norme Nationale de Santé</span>
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Carte Médicale Nationale Digitale</h2>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              Une carte unique reliée directement à votre dossier de santé national. Présentez-la chez votre médecin, à la pharmacie ou à l'hôpital pour un suivi instantané.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "Compatibilité immédiate avec tous les hôpitaux nationaux",
                "Lecture instantanée par QR Code ou technologie NFC",
                "Données hautement cryptées préservant le secret médical",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm font-semibold text-slate-700">
                  <CheckCircle className="h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CardSection;
