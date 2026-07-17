"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, TrendingUp, Target, CheckCircle } from 'lucide-react';
import { FaAmazon } from 'react-icons/fa';

export default function EcommerceSolutions() {
  const [activeEditorial, setActiveEditorial] = useState(null);

  return (
    <div className="bg-[#f8fafc] min-h-screen font-inter text-[#0f172a] overflow-hidden">
      
      {/* 1. HERO SECTION (Massive & Designer) */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm border border-blue-200">
                Ultimate E-Commerce & Marketplace Partner
              </span>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tight text-[#0f172a] leading-tight md:leading-[1.1]">
                Dominate D2C & <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Marketplaces.</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                We engineer highly profitable e-commerce ecosystems on Shopify, and execute deep-level marketplace dominance on Amazon, Flipkart, and Meesho.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full">
                <Link className="w-full sm:w-auto text-center inline-flex items-center justify-center text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all" href="#calendly">
                  Scale My Sales Now
                </Link>
                <Link className="w-full sm:w-auto text-center inline-flex items-center justify-center text-slate-700 font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all" href="#marketplaces">
                  View Marketplace Services
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* Massive Dashboard Graphic */}
              <div className="relative rounded-[3rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.12)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-r from-orange-400 to-orange-600 text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-90 uppercase tracking-widest">Amazon ACoS</p>
                  <p className="text-4xl font-black">12.4% 🔥</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-90 uppercase tracking-widest">Flipkart ROI</p>
                  <p className="text-3xl font-black">4.8x 🚀</p>
                </div>

                <div className="space-y-6 opacity-95 relative z-10">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                     <div>
                       <p className="text-slate-400 font-bold text-sm">Total Gross Revenue</p>
                       <p className="text-6xl font-black text-slate-800">$8.4M</p>
                     </div>
                     <div className="bg-emerald-100 text-emerald-600 px-4 py-2 rounded-xl font-bold text-sm">
                       +142% vs last year
                     </div>
                  </div>
                  {/* Fake Multi-channel Graph */}
                  <div className="h-48 flex items-end justify-between gap-3 pt-4">
                    {[30, 45, 25, 60, 50, 80, 65, 90, 75, 100].map((h, i) => (
                       <div key={i} className="w-full flex flex-col gap-1 items-center justify-end h-full">
                         {/* Amazon */}
                         <div className="w-full bg-orange-400 rounded-sm" style={{height: `${h * 0.4}%`}}></div>
                         {/* Flipkart */}
                         <div className="w-full bg-blue-500 rounded-sm" style={{height: `${h * 0.3}%`}}></div>
                         {/* D2C */}
                         <div className="w-full bg-indigo-500 rounded-sm" style={{height: `${h * 0.3}%`}}></div>
                       </div>
                    ))}
                  </div>
                  <div className="flex justify-between text-xs font-bold text-slate-400 uppercase tracking-widest mt-2">
                    <span className="flex items-center gap-1"><div className="w-2 h-2 bg-orange-400 rounded-full"></div> Amazon</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 bg-blue-500 rounded-full"></div> Flipkart</span>
                    <span className="flex items-center gap-1"><div className="w-2 h-2 bg-indigo-500 rounded-full"></div> Shopify D2C</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* NEW: MARKETPLACE DOMINATION (Amazon, Flipkart, Meesho) */}
      <section id="marketplaces" className="py-32 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-4xl mx-auto mb-20 space-y-4">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Marketplace Domination</span>
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a]">Rule the Giants.</h2>
            <p className="text-slate-600 text-lg md:text-xl font-medium">Deep-level execution on Amazon, Flipkart, and Meesho. From cataloging to high-ROAS ads, we manage your marketplace presence end-to-end.</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Amazon Card */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-100 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-orange-500/30">
                <FaAmazon size={32} />
              </div>
              <h3 className="text-3xl font-black text-slate-800 mb-4">Amazon Excellence</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-orange-500 shrink-0" size={20} /> Deep Keyword Research & Listing SEO</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-orange-500 shrink-0" size={20} /> Premium A+ Content & Brand Store Design</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-orange-500 shrink-0" size={20} /> AMS (Sponsored Products & Brands)</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-orange-500 shrink-0" size={20} /> Account Health & Inventory Forecasting</li>
              </ul>
            </div>

            {/* Flipkart Card */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-100 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#2874F0] to-[#FFE11B] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-blue-500/30 p-3">
                {/* Custom Flipkart-like styling */}
                <span className="font-black text-3xl italic tracking-tighter drop-shadow-md">f</span>
              </div>
              <h3 className="text-3xl font-black text-slate-800 mb-4">Flipkart Scaling</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#2874F0] shrink-0" size={20} /> Search Visibility & Catalog Optimization</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#2874F0] shrink-0" size={20} /> Flipkart Ads (PLA & PCA) Management</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#2874F0] shrink-0" size={20} /> Promotions & Big Billion Days Strategy</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#2874F0] shrink-0" size={20} /> Seller Tier Upgrade Management</li>
              </ul>
            </div>

            {/* Meesho Card */}
            <div className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-shadow relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-pink-100 rounded-bl-[100px] -z-10 transition-transform group-hover:scale-125"></div>
              <div className="w-16 h-16 bg-gradient-to-br from-[#E72A7A] to-[#99154E] rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg shadow-pink-500/30">
                 <span className="font-black text-3xl tracking-tighter">m</span>
              </div>
              <h3 className="text-3xl font-black text-slate-800 mb-4">Meesho Mastery</h3>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#E72A7A] shrink-0" size={20} /> Bulk Catalog Uploading & Error Fixing</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#E72A7A] shrink-0" size={20} /> Price Benchmarking & Margin Optimization</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#E72A7A] shrink-0" size={20} /> Meesho Ads & Visibility Boost</li>
                <li className="flex items-start gap-3 text-slate-600 font-medium"><CheckCircle className="text-[#E72A7A] shrink-0" size={20} /> Order Volume Scaling Strategies</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* D2C CAPABILITIES SECTION */}
      <section id="capabilities" className="py-24 bg-[#f8fafc] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">D2C Engine</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Shopify & Independent Stores</h2>
            <p className="text-slate-600 text-lg font-medium">Build a brand that isn't dependent solely on marketplaces. Own your audience.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: ShoppingBag, title: 'Shopify Plus Development', desc: 'Custom theme architecture and headless builds that prioritize speed, UX, and conversion.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30',
                editorial: 'In the modern eCommerce battlefield, slow and clunky stores die quickly. Our Shopify Plus development isn\'t just about making things look pretty; it\'s about building a high-speed, frictionless buying engine. We implement custom architectures, headless builds, and advanced API integrations that handle massive traffic spikes without breaking a sweat.'
              },
              { 
                icon: Target, title: 'Growth Marketing', desc: 'Omnichannel ad strategies across Meta, Google, and TikTok to acquire high-intent buyers profitably.', gradient: 'from-blue-600 to-indigo-600', shadow: 'shadow-indigo-500/30',
                editorial: 'Traffic is useless if it doesn\'t convert. Our Growth Marketing methodology revolves around acquiring highly qualified, intent-driven traffic at the lowest possible cost. We build omnichannel funnels across Meta, Google Ads, and TikTok, utilizing advanced server-side tracking (CAPI) and dynamic product ads.'
              },
              { 
                icon: TrendingUp, title: 'Conversion Rate Optimization', desc: 'A/B testing, heatmap analysis, and UI improvements to squeeze more revenue out of your existing traffic.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30',
                editorial: 'Why pay for more traffic when you can generate more revenue from the visitors you already have? Our Conversion Rate Optimization (CRO) experts dive deep into user psychology, deploying heatmaps, session recordings, and rigorous A/B testing.'
              }
            ].map((v, i) => (
              <div key={i} onClick={() => setActiveEditorial(v)} className="group cursor-pointer relative bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden text-left">
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${v.gradient} group-hover:bg-none group-hover:bg-white/20 flex items-center justify-center text-white mb-6 shadow-lg ${v.shadow} group-hover:shadow-none transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                    <v.icon size={32} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0f172a] group-hover:text-white mb-4 transition-colors duration-500">{v.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm font-medium transition-colors duration-500 flex-grow">{v.desc}</p>
                  
                  <div className="mt-8 flex items-center text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-white transition-all duration-500 delay-100">
                    Read Editorial <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY EMBED SECTION */}
      <section id="calendly" className="py-32 bg-white relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row gap-16 bg-slate-900 rounded-[3rem] p-10 md:p-16 border border-slate-800 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,rgba(37,99,235,0.3),transparent_60%)] pointer-events-none"></div>
            
            <div className="md:w-1/2 space-y-8 relative z-10">
              <h3 className="text-4xl md:text-5xl font-black text-white leading-tight">Ready to Audit Your <span className="text-blue-400">eCommerce Empire?</span></h3>
              <p className="text-slate-300 text-lg leading-relaxed">Whether it's skyrocketing your D2C ROAS or dominating page 1 on Amazon and Flipkart, our team of seasoned growth partners is ready to tear down your bottlenecks.</p>
              <ul className="space-y-4 text-white font-medium text-lg">
                <li className="flex items-center gap-3"><CheckCircle className="text-blue-400" /> Complete Store & Listing SEO Audit</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-blue-400" /> Ad Account Efficiency Breakdown</li>
                <li className="flex items-center gap-3"><CheckCircle className="text-blue-400" /> 90-Day Revenue Scaling Roadmap</li>
              </ul>
            </div>
            
            <div className="md:w-1/2 bg-white rounded-3xl p-10 shadow-2xl text-center flex flex-col justify-center relative z-10">
              <h4 className="text-3xl font-black text-[#0f172a] mb-4">Book Your Strategy Call</h4>
              <p className="text-slate-500 mb-10 font-medium text-lg">Choose a slot on our executive calendar.</p>
              <div className="space-y-4">
                <a href="https://wa.me/919424995426" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-lg text-lg">
                  <span className="material-symbols-outlined">chat</span> WhatsApp Direct Booking
                </a>
                <a href="mailto:connect@marketops.in" className="flex items-center justify-center gap-3 w-full py-5 rounded-2xl font-bold bg-slate-50 text-slate-700 border-2 border-slate-200 hover:bg-slate-100 transition-colors text-lg">
                  <span className="material-symbols-outlined">mail</span> connect@marketops.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EDITORIAL MODAL */}
      {activeEditorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="absolute inset-0 bg-[#0f172a]/80 backdrop-blur-md transition-opacity" onClick={() => setActiveEditorial(null)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300 border border-slate-100">
            {/* Header/Gradient */}
            <div className={`h-40 w-full bg-gradient-to-br ${activeEditorial.gradient} relative shrink-0`}>
               <button onClick={() => setActiveEditorial(null)} className="absolute top-6 right-6 w-12 h-12 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm z-10">
                 <span className="material-symbols-outlined font-bold text-xl">close</span>
               </button>
               {/* Icon */}
               <div className="absolute -bottom-12 left-10 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center p-1.5">
                 <div className={`w-full h-full rounded-2xl bg-gradient-to-br ${activeEditorial.gradient} flex items-center justify-center text-white`}>
                   <activeEditorial.icon size={44} strokeWidth={2.5} />
                 </div>
               </div>
            </div>
            
            {/* Content */}
            <div className="pt-20 pb-12 px-10 md:px-14 overflow-y-auto">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-3 block">MarketOps Execution</span>
              <h3 className="text-3xl md:text-5xl font-black text-[#0f172a] mb-8 leading-tight">{activeEditorial.title}</h3>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-medium">
                {activeEditorial.editorial}
              </p>
              
              <div className="mt-12 pt-10 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                <button onClick={() => setActiveEditorial(null)} className="text-slate-500 font-bold hover:text-slate-800 transition-colors w-full sm:w-auto">
                  Close Reading
                </button>
                <button onClick={() => { setActiveEditorial(null); window.location.href = '#calendly'; }} className={`px-10 py-4 rounded-full text-white font-bold bg-gradient-to-r ${activeEditorial.gradient} shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full sm:w-auto text-lg`}>
                  Discuss Strategy
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
