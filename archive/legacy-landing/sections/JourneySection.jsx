import { Card } from "@/components/ui/Card";

const steps = [
  {
    id: 1,
    title: "Inscription",
    description: "Remplissez le formulaire en ligne avec vos informations nationales.",
  },
  {
    id: 2,
    title: "Vérification",
    description: "Validation de votre identité par les services de santé agréés.",
  },
  {
    id: 3,
    title: "Activation",
    description: "Réception de vos identifiants et génération de votre Carte Digitale.",
  },
  {
    id: 4,
    title: "Utilisation",
    description: "Présentez votre QR Code ou votre carte physique lors de vos consultations.",
  },
];

export function JourneySection() {
  return (
    <section id="process" className="border-t border-slate-200 bg-slate-100/70 py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-16 max-w-3xl space-y-4 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">Comment obtenir votre Carte DrSan ?</h2>
          <p className="text-base text-slate-600 sm:text-lg">4 étapes simples pour numériser vos données de santé.</p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <Card key={step.id} className="relative p-6">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600 text-sm font-black text-white shadow-md">
                {step.id}
              </div>
              <h3 className="mb-2 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="text-xs leading-relaxed text-slate-600">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default JourneySection;
