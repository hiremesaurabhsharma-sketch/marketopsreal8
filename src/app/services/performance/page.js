import React from 'react';
import Link from 'next/link';

export default function PerformanceMarketing() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row-reverse gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full mb-6">
              Performance Marketing
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
              Smarter Ads. <span className="bg-gradient-to-r from-[#03c1fc] to-[#005ea5] bg-clip-text text-transparent">Better Conversions.</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              We leverage data-driven media buying on Google and Meta to scale your brand predictably and profitably.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-8 py-4 rounded-full bg-gradient-to-r from-[#00c6ff] to-[#0072ff] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,198,255,0.3)] transition-all" href="/contact">
              Scale Your Campaigns
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-cyan-900/10 border border-gray-100 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                alt="Marketing data analytics dashboard" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-32">
          <div className="bg-gradient-to-br from-blue-900 to-slate-900 rounded-[3rem] p-12 lg:p-20 text-white shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Media Buying Methodology</h2>
            <div className="grid md:grid-cols-3 gap-10">
              <div>
                <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center text-blue-400 text-2xl mb-6">🎯</div>
                <h3 className="text-xl font-bold mb-3">Hyper-Targeting</h3>
                <p className="text-gray-400">Finding your ideal customers using advanced audience segmentation and intent data.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-cyan-500/20 rounded-2xl flex items-center justify-center text-cyan-400 text-2xl mb-6">🧠</div>
                <h3 className="text-xl font-bold mb-3">Algorithm Mastery</h3>
                <p className="text-gray-400">Feeding the right signals to Meta and Google to let machine learning do the heavy lifting.</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-400 text-2xl mb-6">📈</div>
                <h3 className="text-xl font-bold mb-3">Ruthless Scaling</h3>
                <p className="text-gray-400">Cutting losers quickly and aggressively funding winning campaigns for maximum ROI.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
