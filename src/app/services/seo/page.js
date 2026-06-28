import React from 'react';
import Link from 'next/link';

export default function SEOOptimization() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-amber-600 bg-amber-50 px-3 py-1 rounded-full mb-6">
              SEO Optimization
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
              Rank Higher Organically on <span className="bg-gradient-to-r from-amber-500 to-orange-400 bg-clip-text text-transparent">Google</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              We dominate search algorithms to bring high-intent organic traffic to your website without paying for every click.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-8 py-4 rounded-full bg-gradient-to-r from-amber-500 to-orange-400 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(245,158,11,0.3)] transition-all" href="/contact">
              Dominate Search
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-amber-900/10 border border-gray-100 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop" 
                alt="Person analyzing SEO charts" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
