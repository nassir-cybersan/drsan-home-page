export function PhoneMockup({ children, className = "" }) {
  return (
    <div className={`relative mx-auto max-w-[280px] ${className}`}>
      <div className="relative rounded-[2.5rem] border-[10px] border-slate-900 bg-slate-950 p-3 shadow-[0_35px_70px_rgba(15,23,42,0.4)]">
        <div className="absolute left-1/2 top-3 h-1.5 w-24 -translate-x-1/2 rounded-full bg-slate-700" />
        <div className="overflow-hidden rounded-[1.8rem] bg-white">
          {children}
        </div>
      </div>
    </div>
  );
}

export default PhoneMockup;
