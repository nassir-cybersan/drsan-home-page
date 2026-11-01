"use client";

import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import Image from "next/image";
import { Check, ChevronDown, ChevronRight, Globe, Menu, Moon, ShieldCheck, Sun, X } from "lucide-react";

const navLinks = [
  { label: "Dossier patient", href: "#dossier-patient" },
  { label: "Carte de santé", href: "#carte-sante" },
  { label: "Parcours carte", href: "#parcours-carte" },
  { label: "Espace hôpital", href: "#espace-hopital" },
  { label: "Urgences", href: "#urgences" },
  { label: "Sécurité", href: "#securite" },
];

const languages = [
  { code: "FR", label: "Français" },
  { code: "EN", label: "English" },
  { code: "AR", label: "العربية" },
];

/* Magasins externes : thème (classe .dark sur <html>) et langue (localStorage) */
const THEME_CHANGED = "drsan-theme-changed";
const LANGUAGE_CHANGED = "drsan-language-changed";

function subscribeTheme(callback) {
  window.addEventListener(THEME_CHANGED, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(THEME_CHANGED, callback);
    window.removeEventListener("storage", callback);
  };
}

function readTheme() {
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}

function getServerTheme() {
  return "light";
}

function subscribeLanguage(callback) {
  window.addEventListener(LANGUAGE_CHANGED, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(LANGUAGE_CHANGED, callback);
    window.removeEventListener("storage", callback);
  };
}

function readLanguage() {
  const saved = window.localStorage.getItem("drsan-language");
  return languages.some((item) => item.code === saved) ? saved : "FR";
}

function getServerLanguage() {
  return "FR";
}

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef(null);

  // Thème et langue exposés comme magasins externes — aucun setState dans un effet
  const theme = useSyncExternalStore(subscribeTheme, readTheme, getServerTheme);
  const language = useSyncExternalStore(subscribeLanguage, readLanguage, getServerLanguage);

  // Applique le thème enregistré au montage — mise à jour du DOM uniquement
  useEffect(() => {
    const savedTheme = window.localStorage.getItem("drsan-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme ?? (prefersDark ? "dark" : "light");
    document.documentElement.classList.toggle("dark", initialTheme === "dark");
    window.dispatchEvent(new Event(THEME_CHANGED));
  }, []);

  // Ferme le sélecteur de langue lors d'un clic extérieur
  useEffect(() => {
    if (!isLangOpen) return undefined;
    const handlePointerDown = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, [isLangOpen]);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
    window.localStorage.setItem("drsan-theme", nextTheme);
    window.dispatchEvent(new Event(THEME_CHANGED));
  };

  const selectLanguage = (code) => {
    setIsLangOpen(false);
    window.localStorage.setItem("drsan-language", code);
    window.dispatchEvent(new Event(LANGUAGE_CHANGED));
  };

  return (
    <header className="sticky top-0 z-50">
      {/* Barre institutionnelle */}
      <div className="hidden bg-slate-900 md:block">
        <div className="mx-auto flex h-9 max-w-7xl items-center justify-between px-6 text-[11px] text-slate-400">
          <p className="flex items-center gap-2">
            <ShieldCheck className="h-3.5 w-3.5 text-brand-500" aria-hidden="true" />
            Plateforme nationale de e-santé — République de Djibouti
          </p>
          <div className="flex items-center gap-4">
            <span>Hébergement HDS</span>
            <span className="text-slate-700" aria-hidden="true">
              |
            </span>
            <span>Conforme RGPD</span>
            <span className="text-slate-700" aria-hidden="true">
              |
            </span>
            <a href="tel:+25321440712" className="transition-all duration-200 ease-in-out hover:text-white">
              Support 24/7 · +253 21 44 07 12
            </a>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          <a href="#" className="flex shrink-0 items-center gap-2.5" aria-label="DrSan — accueil">
            {/* Charte : le logo (lettres noires/vertes) est posé sur un fond blanc
                pour rester lisible en mode clair comme en mode sombre. */}
            <span className="flex h-11 items-center rounded-lg bg-white p-1.5 ring-1 ring-slate-200 dark:ring-slate-700">
              <Image
                src="/images/logo-drsan.png"
                alt="Logo DrSan — e-santé, République de Djibouti"
                width={1299}
                height={974}
                priority
                className="h-8 w-auto"
              />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold text-slate-900 dark:text-white">DrSan</span>
              <span className="block text-[10px] font-medium uppercase text-slate-500 dark:text-slate-400">
                e-santé · Djibouti
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-all duration-200 ease-in-out hover:text-brand-700 dark:text-slate-300 dark:hover:text-brand-400"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            {/* Sélecteur de langue */}
            <div ref={langRef} className="relative">
              <button
                type="button"
                onClick={() => setIsLangOpen((open) => !open)}
                className="flex h-9 items-center gap-1.5 rounded-md border border-slate-200 bg-white px-2.5 text-xs font-semibold text-slate-700 transition-all duration-200 ease-in-out hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
                aria-label="Changer de langue"
              >
                <Globe className="h-3.5 w-3.5" aria-hidden="true" />
                {language}
                <ChevronDown
                  className={`h-3 w-3 transition-all duration-200 ease-in-out ${isLangOpen ? "rotate-180" : ""}`}
                  aria-hidden="true"
                />
              </button>

              {isLangOpen && (
                <ul
                  role="listbox"
                  aria-label="Langue de l'interface"
                  className="absolute right-0 z-50 mt-2 w-40 overflow-hidden rounded-md border border-slate-200 bg-white py-1 shadow-sm dark:border-slate-700 dark:bg-slate-900"
                >
                  {languages.map((item) => (
                    <li key={item.code}>
                      <button
                        type="button"
                        role="option"
                        aria-selected={item.code === language}
                        onClick={() => selectLanguage(item.code)}
                        className={`flex w-full items-center justify-between px-3 py-2 text-left text-xs transition-all duration-200 ease-in-out ${
                          item.code === language
                            ? "bg-brand-50 font-semibold text-brand-700 dark:bg-slate-800 dark:text-brand-400"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        <span className="flex items-center gap-1.5 font-mono text-[10px]">
                          {item.code}
                          {item.code === language && <Check className="h-3 w-3" aria-hidden="true" />}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Bascule thème clair / sombre */}
            <button
              type="button"
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition-all duration-200 ease-in-out hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400"
              aria-label={theme === "dark" ? "Passer en mode clair" : "Passer en mode sombre"}
              title={theme === "dark" ? "Mode clair" : "Mode sombre"}
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" aria-hidden="true" />
              ) : (
                <Moon className="h-4 w-4" aria-hidden="true" />
              )}
            </button>

            {/* Menu mobile */}
            <button
              type="button"
              onClick={() => setIsMenuOpen((open) => !open)}
              className="flex h-9 w-9 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-700 transition-all duration-200 ease-in-out hover:border-slate-900 hover:text-slate-900 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 dark:hover:border-brand-500 dark:hover:text-brand-400 lg:hidden"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      {isMenuOpen && (
        <div className="border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 lg:hidden">
          <nav className="mx-auto max-w-7xl px-4 py-4 sm:px-6" aria-label="Navigation mobile">
            <ul className="divide-y divide-slate-100 border-y border-slate-100 dark:divide-slate-800 dark:border-slate-800">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center justify-between py-3 text-sm font-medium text-slate-700 transition-all duration-200 ease-in-out hover:text-brand-700 dark:text-slate-200 dark:hover:text-brand-400"
                  >
                    {link.label}
                    <ChevronRight className="h-4 w-4 text-slate-400" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
              Besoin d&apos;installer l&apos;application ?{" "}
              <a href="#telecharger" className="font-semibold text-brand-700 transition-all duration-200 ease-in-out hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300">
                Téléchargez DrSan
              </a>{" "}
              ou consultez les{" "}
              <a href="#urgences" className="font-semibold text-brand-700 transition-all duration-200 ease-in-out hover:text-brand-600 dark:text-brand-400 dark:hover:text-brand-300">
                urgences en temps réel
              </a>
              .
            </p>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;


