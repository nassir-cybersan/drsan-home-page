export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12 text-sm text-slate-400">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 sm:px-6 lg:flex-row lg:px-8">
        <div className="flex items-center gap-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-base font-bold text-white">
            +
          </div>
          <span className="text-xl font-bold tracking-tight text-white">DrSan</span>
        </div>

        <div className="text-center text-xs text-slate-500 lg:text-left">
          © {new Date().getFullYear()} DrSan e-santé. Tous droits réservés. République de Djibouti - Santé Numérique.
        </div>

        <div className="flex gap-6 text-xs">
          <a href="#" className="transition hover:text-emerald-400">Mentions Légales</a>
          <a href="#" className="transition hover:text-emerald-400">Confidentialité</a>
          <a href="#" className="transition hover:text-emerald-400">Sécurité</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
