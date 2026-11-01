"use client";

import Link from "next/link";
import { useState } from "react";
import { ChevronDown, Globe, Menu, Moon, Sun } from "lucide-react";
import { useTheme } from "@/context/ThemeContext";
import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/Button";

const navItems = [
  { label: "Accueil", href: "#hero" },
  { label: "Fonctionnalités", href: "#features" },
  { label: "Carte", href: "#card" },
  { label: "Procédure", href: "#process" },
  { label: "Tarifs", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

function CrossIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 5v14M5 12h14" />
    </svg>
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const { language, setLanguage } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isDark = theme === "dark";

  return (
    <header className={`sticky top-0 z-40 border-b backdrop-blur-md transition-colors ${isDark ? "border-slate-800 bg-slate-900/90" : "border-slate-200 bg-white/90"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Accueil DrSan">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-600 text-white shadow-md shadow-emerald-500/20">
            <CrossIcon size={18} />
          </div>
          <div>
            <p className="text-2xl font-black tracking-tight text-emerald-600">DrSan</p>
            <p className="-mt-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">E-SANTÉ</p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium md:flex">
          {navItems.map((item) => (
            <Link key={item.label} href={item.href} className={isDark ? "text-slate-200 hover:text-emerald-400" : "text-slate-600 hover:text-emerald-600"}>
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <div className="group relative">
            <button type="button" className={`flex items-center gap-2 rounded-lg border px-3 py-1.5 text-xs font-semibold transition ${isDark ? "border-slate-700 bg-slate-800 text-slate-200 hover:bg-slate-700" : "border-slate-200 bg-white text-slate-700 hover:bg-slate-100"}`}>
              <Globe className="h-4 w-4 text-emerald-600" />
              <span>{language.toUpperCase()}</span>
              <ChevronDown className="h-3 w-3" />
            </button>

            <div className={`absolute right-0 z-50 mt-2 hidden w-32 rounded-lg border py-1 shadow-xl group-hover:block ${isDark ? "border-slate-700 bg-slate-800" : "border-slate-100 bg-white"}`}>
              {['fr', 'en', 'ar'].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`block w-full px-4 py-2 text-left text-xs font-medium transition ${language === lang ? "bg-emerald-50 text-emerald-700" : isDark ? "text-slate-200 hover:bg-slate-700" : "text-slate-700 hover:bg-emerald-50"}`}
                >
                  {lang === "fr" ? "Français" : lang === "en" ? "English" : "العربية"}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-sm border transition ${isDark ? "border-slate-700 bg-slate-800 text-amber-300 hover:bg-slate-700" : "border-slate-200 bg-white text-slate-600 hover:bg-slate-100"}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>

          <Button variant="primary">Connexion</Button>
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className={`flex h-10 w-10 items-center justify-center rounded-sm border ${isDark ? "border-slate-700 bg-slate-800 text-amber-300" : "border-slate-200 bg-white text-slate-600"}`}
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((value) => !value)}
            className={`flex h-10 w-10 items-center justify-center rounded-sm border ${isDark ? "border-slate-700 bg-slate-800 text-slate-200" : "border-slate-200 bg-white text-slate-700"}`}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className={`border-t px-4 pb-6 pt-3 md:hidden ${isDark ? "border-slate-800 bg-slate-900" : "border-slate-200 bg-white"}`}>
          <div className="space-y-3">
            {navItems.map((item) => (
              <Link key={item.label} href={item.href} className={isDark ? "block py-2 text-base font-medium text-slate-200" : "block py-2 text-base font-medium text-slate-700"} onClick={() => setMobileMenuOpen(false)}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="mt-4 flex items-center justify-between border-t border-slate-200 pt-4 dark:border-slate-800">
            <div className="flex gap-2">
              {['fr', 'en', 'ar'].map((lang) => (
                <button
                  key={lang}
                  type="button"
                  onClick={() => setLanguage(lang)}
                  className={`rounded-sm px-2.5 py-1 text-xs font-medium ${language === lang ? "bg-emerald-600 text-white" : isDark ? "bg-slate-800 text-slate-200" : "bg-slate-100 text-slate-700"}`}
                >
                  {lang.toUpperCase()}
                </button>
              ))}
            </div>
            <Button variant="primary">Connexion</Button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
