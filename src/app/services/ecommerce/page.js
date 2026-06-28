import React from 'react';
import Link from 'next/link';

export default function EcommerceSolutions() {
  return (
    <div className="bg-white min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-6">
              Ecommerce Solutions
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold mb-8 text-gray-900 tracking-tight leading-tight">
              From Store Setup to <span className="bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">Sales Growth</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
              We build, optimize, and scale high-converting eCommerce stores that turn visitors into loyal, repeat customers.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-8 py-4 rounded-full bg-gradient-to-r from-[#0072ff] to-[#00c6ff] hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,198,255,0.3)] transition-all" href="/contact">
              Start Scaling Your Store
            </Link>
          </div>
          <div className="lg:w-1/2 w-full">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-900/10 border border-gray-100 aspect-[4/3]">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2000&auto=format&fit=crop" 
                alt="Ecommerce strategy session" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            </div>
          </div>
        </div>
        
        <div className="mt-32">
          <h2 className="text-3xl font-bold text-center mb-16">What We Deliver</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-xl font-bold mb-3">Store Setup</h3>
              <p className="text-gray-600">End-to-end Shopify & WooCommerce development optimized for speed.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-xl font-bold mb-3">CRO</h3>
              <p className="text-gray-600">Data-driven Conversion Rate Optimization to maximize revenue per visitor.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">💳</div>
              <h3 className="text-xl font-bold mb-3">Frictionless Checkout</h3>
              <p className="text-gray-600">Removing barriers to purchase for a smooth, high-converting funnel.</p>
            </div>
            <div className="bg-slate-50 p-8 rounded-3xl border border-gray-100 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">🔁</div>
              <h3 className="text-xl font-bold mb-3">Retention</h3>
              <p className="text-gray-600">Post-purchase flows and email marketing to increase Customer Lifetime Value.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
