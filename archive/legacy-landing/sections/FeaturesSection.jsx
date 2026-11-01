import { Database, Shield, Stethoscope } from "lucide-react";
import { Card } from "@/components/ui/Card";

const features = [
  {
    icon: Shield,
    title: "Carte Digitale Sécurisée",
    description:
      "Portez votre identification médicale partout avec vous. Accessible hors-ligne et protégée par QR Code dynamique.",
    color: "emerald",
  },
  {
    icon: Database,
    title: "Dossier Médical Centralisé",
    description:
      "Historique des consultations, résultats de laboratoire et traitements regroupés au même endroit pour vos médecins.",
    color: "teal",
  },
  {
    icon: Stethoscope,
    title: "Suivi Pharmaceutique",
    description:
      "Vérification rapide des ordonnances et renouvellements simplifiés dans toutes les pharmacies partenaires de Djibouti.",
    color: "blue",
  },
];

export function FeaturesSection() {
  return (
    <section id="features" className="border-t border-slate-200 bg-white py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Pourquoi choisir DrSan ?</h2>
          <p className="text-base text-slate-600 sm:text-lg">
            Une solution moderne, sécurisée et adaptée aux besoins de la population djiboutienne.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {features.map(({ icon: Icon, title, description, color }) => (
            <Card key={title} className="p-8 transition-all hover:shadow-xl">
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl ${color === "emerald" ? "bg-emerald-600/10 text-emerald-600" : color === "teal" ? "bg-teal-600/10 text-teal-600" : "bg-blue-600/10 text-blue-600"}`}>
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
