"use client";

import { Activity, CheckCircle, FileText, QrCode, Shield, Sparkles, Stethoscope, Users } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { Button } from "@/components/ui/Button";

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

export function HeroSection() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="hero" className={`relative overflow-hidden py-12 lg:py-20 ${isDark ? "bg-slate-900" : "bg-slate-50"}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(16,185,129,0.2),transparent_25%),radial-gradient(circle_at_bottom_right,rgba(14,116,144,0.2),transparent_28%)]" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-12">
          <div className="space-y-6 text-center lg:col-span-7 lg:text-left">
            <div className={`inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold ${isDark ? "border-emerald-800 bg-emerald-950/60 text-emerald-300" : "border-emerald-200 bg-emerald-50 text-emerald-700"}`}>
              <Sparkles className="h-3.5 w-3.5 text-emerald-600" />
              <span>La Santé Numérique à Djibouti</span>
            </div>

            <h1 className={`text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl ${isDark ? "text-white" : "text-slate-900"}`}>
              Votre Santé dans la paume de votre main avec
              <span className="mt-2 block bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent">
                DrSan e-santé
              </span>
            </h1>

            <p className={`max-w-2xl text-lg leading-relaxed ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              La plateforme nationale de santé connectée. Accédez à votre dossier médical, vos ordonnances et votre Carte Médicale Digitale sécurisée en un instant.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 pt-4 sm:flex-row lg:justify-start">
              <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-base shadow-lg shadow-emerald-600/30">
                Obtenir ma Carte
              </Button>
              <Button variant="secondary" className="w-full sm:w-auto px-8 py-4 text-base">
                En savoir plus
              </Button>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-slate-200 pt-6 text-center lg:text-left">
              <div>
                <div className="text-xl font-black text-emerald-600 sm:text-2xl">100%</div>
                <div className="text-xs font-medium text-slate-500">Sécurisé & crypté</div>
              </div>
              <div>
                <div className="text-xl font-black text-emerald-600 sm:text-2xl">24/7</div>
                <div className="text-xs font-medium text-slate-500">Accès dossier</div>
              </div>
              <div>
                <div className="text-xl font-black text-emerald-600 sm:text-2xl">National</div>
                <div className="text-xs font-medium text-slate-500">Djibouti</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="relative w-full max-w-[370px]">
              <div className="absolute -inset-1 rounded-[48px] bg-gradient-to-r from-emerald-600 to-teal-400 opacity-30 blur-xl" />
              <div className="relative rounded-[44px] border-4 border-slate-800 bg-slate-900 p-3 shadow-2xl">
                <div className="absolute left-1/2 top-0 z-20 flex h-5 w-32 -translate-x-1/2 items-center justify-center rounded-b-xl bg-slate-900">
                  <div className="h-1 w-12 rounded-full bg-slate-700" />
                </div>

                <div className="min-h-[620px] overflow-hidden rounded-[36px] bg-white px-4 pb-6 pt-7 text-slate-800">
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white">
                        <CrossIcon size={14} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-emerald-600">DrSan</div>
                        <div className="-mt-0.5 text-[9px] font-semibold uppercase tracking-wider text-slate-500">e-santé</div>
                      </div>
                    </div>
                    <div className="h-2.5 w-2.5 rounded-full bg-emerald-500" />
                  </div>

                  <div className="space-y-4 py-4">
                    <div className="text-left">
                      <div className="text-[11px] font-medium text-slate-500">Bienvenue,</div>
                      <div className="text-sm font-bold text-slate-800">MOHAMED ALI DJAMA</div>
                    </div>

                    <div className="relative overflow-hidden rounded-2xl border border-emerald-400/30 bg-gradient-to-br from-emerald-600 via-teal-700 to-slate-900 p-4 text-white shadow-lg">
                      <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-emerald-500/20 blur-2xl" />
                      <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-white/10 blur-xl" />

                      <div className="relative z-10 mb-3 flex items-center justify-between border-b border-white/20 pb-2.5">
                        <div className="flex items-center gap-2">
                          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white">
                            <CrossIcon size={16} />
                          </div>
                          <div>
                            <div className="text-xs font-extrabold tracking-tight">DrSan</div>
                            <div className="-mt-0.5 text-[8px] font-medium uppercase tracking-wider text-emerald-200">e-santé</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-1 rounded-full border border-white/20 bg-white/15 px-2 py-0.5 text-[10px] font-bold tracking-wide">
                          <DjiboutiFlag className="h-2.5 w-3.5 rounded-sm" />
                          <span>R. Djibouti</span>
                        </div>
                      </div>

                      <div className="relative z-10 mb-4 flex items-center justify-between">
                        <div className="flex h-8 w-12 items-center justify-center rounded-md border border-amber-200/60 bg-gradient-to-tr from-amber-300 to-yellow-500">
                          <div className="h-5 w-8 rounded-sm border border-amber-800/40 bg-amber-200/20" />
                        </div>
                        <div className="text-[10px] font-mono font-bold uppercase text-white/80">((( NFC )))</div>
                      </div>

                      <div className="relative z-10 mb-3 text-left">
                        <div className="text-[9px] font-semibold uppercase tracking-wider text-emerald-200">Titulaire</div>
                        <div className="font-mono text-xs font-black tracking-wide text-white">MOHAMED ALI DJAMA</div>
                      </div>

                      <div className="relative z-10 flex items-end justify-between border-t border-white/15 pt-2">
                        <div>
                          <div className="text-[8px] font-semibold uppercase tracking-wider text-emerald-200">ID National</div>
                          <div className="font-mono text-xs font-bold tracking-widest text-emerald-100">7748 9201 3842</div>
                        </div>
                        <div className="rounded-md bg-white p-1 shadow-md">
                          <QrCode className="h-7 w-7 text-slate-900" />
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-center">
                      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                        <FileText className="mb-1 h-4 w-4 text-emerald-600" />
                        <span className="text-[10px] font-bold text-slate-700">Ordonnances</span>
                      </div>
                      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-100 bg-slate-50 p-2.5">
                        <Activity className="mb-1 h-4 w-4 text-teal-600" />
                        <span className="text-[10px] font-bold text-slate-700">Dossier Médical</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-around border-t border-slate-100 pt-3 text-slate-400">
                    <div className="flex flex-col items-center text-emerald-600">
                      <Shield className="h-4 w-4" />
                      <span className="mt-0.5 text-[9px] font-bold">Carte</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Activity className="h-4 w-4" />
                      <span className="mt-0.5 text-[9px]">Santé</span>
                    </div>
                    <div className="flex flex-col items-center">
                      <Users className="h-4 w-4" />
                      <span className="mt-0.5 text-[9px]">Profil</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
