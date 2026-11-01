import { faqData } from "@/data/faqData";
import { Card } from "@/components/ui/Card";

export function FaqSection() {
  return (
    <section id="faq" className="bg-slate-50 py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full bg-rose-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-rose-700">
            FAQ
          </span>
          <h2 className="mt-6 text-3xl font-black text-slate-900 sm:text-4xl">Questions fréquentes</h2>
        </div>

        <div className="mt-12 space-y-4">
          {faqData.map((item) => (
            <Card key={item.question} className="p-6">
              <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.answer}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
