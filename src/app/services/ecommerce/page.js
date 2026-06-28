import React from 'react';
import Link from 'next/link';

export default function EcommerceSolutions() {
  return (
    <div className="bg-[#f8fafc] min-h-screen pt-32 pb-32 font-inter text-[#0f172a]">
      <div className="container mx-auto px-6 max-w-7xl">
        
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-16 items-center bg-white p-10 md:p-16 rounded-[3rem] shadow-[0_20px_80px_rgba(0,0,0,0.03)] border border-slate-200 relative overflow-hidden">
          
          {/* Background Elements */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50/80 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-50/80 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
          
          <div className="lg:w-1/2 relative z-10 space-y-8">
            <span className="inline-block bg-blue-100 text-blue-700 text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm">
              Ecommerce Solutions
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
              From Store Setup to <br className="hidden md:block"/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Sales Growth</span>
            </h1>
            <p className="text-slate-600 text-xl md:text-2xl font-medium leading-relaxed max-w-lg">
              We build, optimize, and scale high-converting eCommerce stores that turn visitors into loyal, repeat customers.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all" href="/contact">
              Start Scaling Your Store
            </Link>
          </div>
          
          <div className="lg:w-1/2 w-full relative z-10">
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-white aspect-[4/3] group">
              <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-700 z-10"></div>
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop" 
                alt="Ecommerce strategy session" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
        
        {/* Services Grid */}
        <div className="mt-32">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Our Process</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">What We Deliver</h2>
            <p className="text-slate-600 text-lg font-medium">End-to-end solutions designed for maximum conversions and customer retention.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-2xl">
                  🛒
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">Store Setup</h3>
                <p className="text-slate-600 font-medium leading-relaxed">End-to-end Shopify & WooCommerce development optimized for speed.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all group relative overflow-hidden mt-0 md:mt-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 text-2xl">
                  📈
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">CRO</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Data-driven Conversion Rate Optimization to maximize revenue per visitor.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 text-2xl">
                  💳
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">Frictionless Checkout</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Removing barriers to purchase for a smooth, high-converting funnel.</p>
              </div>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all group relative overflow-hidden mt-0 md:mt-8">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-500"></div>
              <div className="relative z-10 space-y-6">
                <div className="h-14 w-14 rounded-2xl bg-indigo-100 flex items-center justify-center text-indigo-600 text-2xl">
                  🔁
                </div>
                <h3 className="text-xl font-bold text-[#0f172a]">Retention</h3>
                <p className="text-slate-600 font-medium leading-relaxed">Post-purchase flows and email marketing to increase Customer Lifetime Value.</p>
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
}
