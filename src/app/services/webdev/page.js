import React from 'react';
import Link from 'next/link';

export default function WebsiteDevelopment() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full mb-6">
              Website & Developments
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
              Fast, Scalable <span className="bg-gradient-to-r from-emerald-500 to-teal-400 bg-clip-text text-transparent">Custom Websites</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              We engineer premium digital experiences. Lightning-fast load times, flawless responsiveness, and scalable architectures.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-8 py-4 rounded-full bg-gradient-to-r from-emerald-500 to-teal-400 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(16,185,129,0.3)] transition-all" href="/contact">
              Build Your Platform
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-900/10 border border-gray-100 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                alt="Web development coding screen" 
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
