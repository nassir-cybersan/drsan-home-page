import { Card } from "@/components/ui/Card";

const securityItems = [
  "Protection des données personnelles",
  "Authentification sécurisée",
  "Suivi des demandes et validation",
  "Processus conforme aux normes de santé",
];

export function SecuritySection() {
  return (
    <section className="bg-slate-900 py-20 text-white">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.95fr] lg:px-8">
        <div>
          <span className="inline-flex rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
            Sécurité
          </span>
          <h2 className="mt-6 text-3xl font-black sm:text-4xl">
            Une plateforme pensée pour la confiance
          </h2>
          <p className="mt-4 max-w-xl text-lg leading-8 text-slate-300">
            DrSan protège les données de ses utilisateurs en combinant sécurité, simplicité et maîtrise des parcours administratifs.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {securityItems.map((item) => (
              <Card key={item} className="border-slate-700 bg-slate-800 p-4 text-slate-100">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-300">
                    ✓
                  </span>
                  <span className="text-sm font-medium">{item}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-slate-700 bg-slate-800 p-8 shadow-[0_25px_80px_rgba(15,23,42,0.35)]">
          <div className="mb-8 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-400">Sécurité</p>
            <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-300">
              Niveau élevé
            </span>
          </div>

          <div className="space-y-5">
            <div>
              <div className="mb-2 flex justify-between text-sm text-slate-300">
                <span>Protection des données</span>
                <span>96%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-700">
                <div className="h-2.5 w-[96%] rounded-full bg-emerald-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm text-slate-300">
                <span>Authentification</span>
                <span>92%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-700">
                <div className="h-2.5 w-[92%] rounded-full bg-cyan-400" />
              </div>
            </div>

            <div>
              <div className="mb-2 flex justify-between text-sm text-slate-300">
                <span>Validation du dossier</span>
                <span>89%</span>
              </div>
              <div className="h-2.5 rounded-full bg-slate-700">
                <div className="h-2.5 w-[89%] rounded-full bg-violet-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SecuritySection;
