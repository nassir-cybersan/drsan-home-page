export function MedicalCardVisual({ className = "" }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-emerald-200 bg-gradient-to-br from-emerald-500 via-emerald-600 to-teal-700 p-6 text-white shadow-[0_30px_80px_rgba(16,185,129,0.35)] ${className}`}>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.35),transparent_35%)]" />
      <div className="relative z-10">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-emerald-100">DrSan</p>
            <h3 className="mt-2 text-2xl font-bold">Carte médicale</h3>
          </div>
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-lg font-bold">
            +
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">Titulaire</p>
            <p className="mt-1 text-lg font-semibold">Amina Mohamed</p>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.25em] text-emerald-100">ID</p>
              <p className="mt-1 text-base font-medium">DS-2048</p>
            </div>
            <div className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-xs font-medium">
              Valide
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MedicalCardVisual;
