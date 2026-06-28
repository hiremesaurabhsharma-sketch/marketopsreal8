import React from 'react';
import Link from 'next/link';

export default function MarketingCreative() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-purple-600 bg-purple-50 px-3 py-1 rounded-full mb-6">
              Marketing Creative
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
              Stop Scrolling. <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">Grab Attention.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              We craft high-converting ad creatives, videos, and graphics designed specifically to beat the algorithm and capture attention instantly.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-8 py-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(168,85,247,0.3)] transition-all" href="/contact">
              Upgrade Your Creatives
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-purple-900/10 border border-gray-100 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                alt="Creative team working on designs" 
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
