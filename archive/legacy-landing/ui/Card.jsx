export function Card({ children, className = '', ...props }) {
  return (
    <div
      className={`rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_60px_rgba(15,23,42,0.08)] ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export default Card;
