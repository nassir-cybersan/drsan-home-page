import Image from "next/image";

export function StoreButtons() {
  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <a href="#" className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <Image src="/images/app-store.png" alt="App Store" width={32} height={32} />
        <span className="text-left text-sm text-slate-700">
          <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500">Download on the</span>
          <span className="block text-base font-semibold text-slate-900">App Store</span>
        </span>
      </a>

      <a href="#" className="inline-flex items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
        <Image src="/images/google-play.png" alt="Google Play" width={32} height={32} />
        <span className="text-left text-sm text-slate-700">
          <span className="block text-[10px] uppercase tracking-[0.18em] text-slate-500">Get it on</span>
          <span className="block text-base font-semibold text-slate-900">Google Play</span>
        </span>
      </a>
    </div>
  );
}

export default StoreButtons;
