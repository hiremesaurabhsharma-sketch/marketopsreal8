import Link from 'next/link';

export default function RelatedCasesBanner({ category, title, description }) {
  return (
    <section className="py-24 bg-white border-t border-slate-100">
      <div className="container mx-auto px-6 max-w-5xl text-center">
        <span className="inline-block px-4 py-1.5 rounded-full bg-blue-50 text-blue-700 font-bold text-xs uppercase tracking-widest mb-6">
          Proven Success
        </span>
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
          {title || "See Our Results in Action"}
        </h2>
        <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto">
          {description || "Don't just take our word for it. Explore our detailed case studies and see how we've helped brands scale."}
        </p>
        <Link 
          href={`/cases?category=${category}`}
          className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:-translate-y-1"
        >
          View Related Case Studies
          <span className="material-symbols-outlined">arrow_forward</span>
        </Link>
      </div>
    </section>
  );
}
