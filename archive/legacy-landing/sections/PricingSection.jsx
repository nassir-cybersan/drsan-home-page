import { Check } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Tarif d'Enregistrement Fixe</h2>
          <p className="text-base text-slate-600 sm:text-lg">Un accès équitable pour tous les citoyens et résidents.</p>
        </div>

        <div className="mx-auto max-w-md">
          <div className="relative rounded-3xl border-2 border-emerald-600 bg-white p-8 shadow-2xl">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-emerald-600 px-4 py-1 text-xs font-bold uppercase tracking-widest text-white shadow">
              Tarif National
            </div>

            <div className="my-6 text-center">
              <div className="text-4xl font-black tracking-tight text-emerald-600 sm:text-5xl">2 500 FDJ</div>
              <div className="mt-2 text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">Frais unique d'activation</div>
            </div>

            <div className="my-8 space-y-4 text-sm text-slate-700">
              {[
                "Carte Médicale Digitale permanente",
                "Accès au Dossier Médical Partagé",
                "Historique des prescriptions et vaccins",
                "Support client et assistance 24/7",
              ].map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <Check className="h-5 w-5 shrink-0 text-emerald-500" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            <Button variant="primary" className="w-full py-4 text-base">
              S'inscrire maintenant
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default PricingSection;
