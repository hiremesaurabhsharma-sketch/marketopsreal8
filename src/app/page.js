import React from 'react';
import Link from 'next/link';
import Reveal from '../components/Reveal';

export default function Home() {
  return (
    <div className="bg-[#fafbfc] min-h-screen">
      {/* Hero Section - Pinnacle Style */}
      <section className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 md:min-h-[90vh] overflow-hidden px-6 bg-gradient-to-b from-[#3b82f6] to-[#e0f2fe]">
        {/* Subtle background abstract shapes */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] border-[1px] border-white/20 rounded-full pointer-events-none opacity-50"></div>
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[1400px] h-[1400px] border-[1px] border-white/10 rounded-full pointer-events-none opacity-50"></div>
        
        <div className="relative z-10 max-w-5xl mt-10">
          <Reveal delay={100}>
            <h1 className="text-5xl md:text-[80px] md:leading-[1.1] text-white font-medium tracking-tight mb-4 drop-shadow-sm">
              Built For The Brands<br/>
              That <span className="font-bold text-[#0c4a6e] bg-gradient-to-r from-[#0ea5e9] to-[#0284c7] bg-clip-text text-transparent">Don’t Settle</span>
            </h1>
          </Reveal>
          
          <Reveal delay={300}>
            <p className="text-lg md:text-2xl text-white/90 mt-6 mb-10 font-normal max-w-3xl mx-auto drop-shadow-sm">
              Trusted by brands that demand control, consistency and performance
            </p>
          </Reveal>
          
          <Reveal delay={500}>
            <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center">
              <Link className="rounded-full bg-gradient-to-r from-[#0ea5e9] to-[#06b6d4] px-10 py-4 text-white text-lg font-bold shadow-[0_10px_20px_rgba(14,165,233,0.3)] transition-transform hover:-translate-y-1 hover:shadow-[0_15px_30px_rgba(14,165,233,0.4)]" href="/contact">
                Talk to Our Team
              </Link>
              <a className="rounded-full bg-white/90 backdrop-blur-md px-10 py-4 text-[#0ea5e9] text-lg font-bold shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all hover:-translate-y-1 hover:bg-white" href="#services">
                See How we Work
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Stats & Marquee Section */}
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 items-center">
          <Reveal direction="left">
            <div className="border border-gray-200 rounded-full px-4 py-1.5 text-[10px] font-bold text-blue-500 uppercase tracking-widest inline-block mb-4 shadow-sm bg-white">
              MarketOps Spent
            </div>
            <h3 className="flex items-center text-4xl md:text-6xl font-extrabold leading-none tracking-tight mb-4 text-gray-900">
              $100M+
            </h3>
            <p className="text-base sm:text-lg text-gray-500 font-medium">
              Just a normal month of paid advertising spends managed by MarketOps growth partners.
            </p>
          </Reveal>
          
          <div className="md:col-span-2 overflow-hidden relative rounded-3xl">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-20"></div>
            
            <Reveal delay={200}>
              <div className="flex animate-marquee w-max gap-6 py-6">
                {['Skala Media', 'Suits Finance', 'Whop', 'Ooptics', 'Incogniton', 'TikTok', 'Google', 'Meta'].map((partner, i) => (
                  <div key={i} className="flex flex-col items-center justify-center h-[140px] w-[220px] bg-gray-50 border border-gray-100 rounded-3xl flex-shrink-0 shadow-sm transition-shadow">
                    <div className="text-xl font-extrabold text-gray-800 tracking-tight">{partner}</div>
                  </div>
                ))}
                {['Skala Media', 'Suits Finance', 'Whop', 'Ooptics', 'Incogniton', 'TikTok', 'Google', 'Meta'].map((partner, i) => (
                  <div key={i+10} className="flex flex-col items-center justify-center h-[140px] w-[220px] bg-gray-50 border border-gray-100 rounded-3xl flex-shrink-0 shadow-sm transition-shadow">
                    <div className="text-xl font-extrabold text-gray-800 tracking-tight">{partner}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Services Section - Pinnacle Light Style */}
      <section id="services" className="bg-white px-6 xl:px-20 py-24 lg:py-32 relative scroll-mt-24">
        
        <div className="container mx-auto max-w-7xl relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight text-[#0f172a]">
                Engineered for <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Domination</span>
              </h2>
              <p className="text-slate-500 text-lg md:text-xl font-medium">
                We don't just provide services. We build highly calibrated growth engines designed to scale your brand ruthlessly.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            
            {/* Service 1: Ecommerce (Large Feature) */}
            <Reveal className="lg:col-span-2 group relative rounded-[2rem] bg-white p-8 lg:p-12 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(14,165,233,0.2)] overflow-hidden min-h-[350px] flex flex-col justify-between border border-gray-100 hover:border-blue-300 hover:-translate-y-2 z-10">
              {/* Creative Elements */}
              <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-blue-100/80 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-50 to-blue-200 border border-blue-200 flex items-center justify-center shadow-[0_4px_15px_rgba(59,130,246,0.2)] text-blue-700 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>
                  </div>
                  <div className="px-4 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-700 text-xs font-bold uppercase tracking-widest shadow-sm">Top Tier</div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-3 group-hover:text-blue-700 transition-colors">Ecommerce Solutions</h3>
                  <p className="text-slate-600 text-lg mb-8 max-w-xl leading-relaxed">End-to-end store optimization, data-driven CRO, and frictionless checkouts that turn casual visitors into lifelong customers.</p>
                </div>
                
                <Link href="/services/ecommerce" className="inline-flex items-center gap-3 text-[#0f172a] font-bold group-hover:text-blue-600 transition-colors w-fit">
                  Deploy Store 
                  <span className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-3 shadow-sm group-hover:shadow-blue-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Service 2: Performance */}
            <Reveal delay={100} className="group relative rounded-[2rem] bg-white p-8 lg:p-10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(6,182,212,0.2)] overflow-hidden min-h-[350px] flex flex-col justify-between border border-gray-100 hover:border-cyan-300 hover:-translate-y-2 z-10">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-cyan-100/80 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
              <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_2px,transparent_2px)] [background-size:20px_20px] opacity-40 group-hover:opacity-80 transition-opacity pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-200 border border-cyan-200 flex items-center justify-center shadow-[0_4px_15px_rgba(6,182,212,0.2)] text-cyan-700 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-cyan-100 border border-cyan-200 text-cyan-700 text-[10px] font-bold uppercase tracking-widest shadow-sm">Data Driven</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-cyan-700 transition-colors">Performance Ads</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">Algorithm mastery across Meta & Google for aggressive, profitable scaling.</p>
                </div>
                <Link href="/services/performance" className="inline-flex items-center gap-3 text-[#0f172a] font-bold group-hover:text-cyan-600 transition-colors w-fit">
                  Scale Now
                  <span className="w-10 h-10 rounded-full bg-cyan-100 flex items-center justify-center group-hover:bg-cyan-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-3 shadow-sm group-hover:shadow-cyan-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Service 3: Creative */}
            <Reveal delay={200} className="group relative rounded-[2rem] bg-white p-8 lg:p-10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)] overflow-hidden min-h-[350px] flex flex-col justify-between border border-gray-100 hover:border-purple-300 hover:-translate-y-2 z-10">
              <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-gradient-to-tl from-purple-200/60 to-transparent rounded-full translate-y-1/4 translate-x-1/4 group-hover:scale-[1.5] transition-transform duration-700 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-purple-50 to-purple-200 border border-purple-200 flex items-center justify-center shadow-[0_4px_15px_rgba(168,85,247,0.2)] text-purple-700 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-purple-100 border border-purple-200 text-purple-700 text-[10px] font-bold uppercase tracking-widest shadow-sm">Engaging</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-purple-700 transition-colors">Creative Studio</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">Thumb-stopping visual assets and videos engineered to beat the scroll.</p>
                </div>
                <Link href="/services/creative" className="inline-flex items-center gap-3 text-[#0f172a] font-bold group-hover:text-purple-600 transition-colors w-fit">
                  View Work
                  <span className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-3 shadow-sm group-hover:shadow-purple-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Service 4: WebDev (Large Feature) */}
            <Reveal delay={300} className="lg:col-span-2 group relative rounded-[2rem] bg-white p-8 lg:p-12 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)] overflow-hidden min-h-[350px] flex flex-col justify-between border border-gray-100 hover:border-emerald-300 hover:-translate-y-2 z-10">
              <div className="absolute top-1/2 right-10 w-[200px] h-[200px] border-[3px] border-emerald-200 rounded-full blur-[1px] group-hover:scale-[1.8] group-hover:border-emerald-300 transition-transform duration-1000 pointer-events-none opacity-60"></div>
              <div className="absolute top-1/2 right-14 w-[120px] h-[120px] border-[2px] border-emerald-300 rounded-full blur-[1px] group-hover:scale-[2.5] transition-transform duration-1000 pointer-events-none opacity-60"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-50 to-emerald-200 border border-emerald-200 flex items-center justify-center shadow-[0_4px_15px_rgba(16,185,129,0.2)] text-emerald-700 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex gap-2">
                    <div className="px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-600 text-[10px] font-bold uppercase tracking-widest shadow-sm">Fast</div>
                    <div className="px-4 py-1.5 rounded-full bg-emerald-100 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase tracking-widest shadow-sm">Scalable</div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-3xl font-bold text-[#0f172a] mb-3 group-hover:text-emerald-700 transition-colors">Web Development</h3>
                  <p className="text-slate-600 text-lg mb-8 max-w-xl leading-relaxed">Lightning-fast, highly scalable web applications and platforms built with modern tech stacks that don't compromise on speed or aesthetics.</p>
                </div>
                <Link href="/services/webdev" className="inline-flex items-center gap-3 text-[#0f172a] font-bold group-hover:text-emerald-600 transition-colors w-fit">
                  Build System
                  <span className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-3 shadow-sm group-hover:shadow-emerald-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              </div>
            </Reveal>
            
            {/* Service 5: SEO */}
            <Reveal delay={400} className="group relative rounded-[2rem] bg-white p-8 lg:p-10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(245,158,11,0.2)] overflow-hidden min-h-[350px] flex flex-col justify-between border border-gray-100 hover:border-amber-300 hover:-translate-y-2 z-10">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left"></div>
              <div className="absolute inset-0 bg-amber-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-50 to-amber-200 border border-amber-200 flex items-center justify-center shadow-[0_4px_15px_rgba(245,158,11,0.2)] text-amber-700 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-amber-700 text-[10px] font-bold uppercase tracking-widest shadow-sm">Organic</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-amber-700 transition-colors">SEO Dominance</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">High-intent organic traffic engines through technical optimization & authority building.</p>
                </div>
                <Link href="/services/seo" className="inline-flex items-center gap-3 text-[#0f172a] font-bold group-hover:text-amber-600 transition-colors w-fit">
                  Rank Higher
                  <span className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center group-hover:bg-amber-500 group-hover:text-white transition-all duration-300 group-hover:translate-x-3 shadow-sm group-hover:shadow-amber-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              </div>
            </Reveal>

            {/* Service 6: Overseas */}
            <Reveal delay={500} className="group relative rounded-[2rem] bg-white p-8 lg:p-10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)] overflow-hidden min-h-[350px] flex flex-col justify-between border border-gray-100 hover:border-indigo-300 hover:-translate-y-2 z-10">
              <div className="absolute inset-0 bg-indigo-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply"></div>
              <div className="absolute -bottom-10 -left-10 w-[250px] h-[250px] bg-indigo-200/50 rounded-full blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              <div className="relative z-10 flex flex-col h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-indigo-50 to-indigo-200 border border-indigo-200 flex items-center justify-center shadow-[0_4px_15px_rgba(99,102,241,0.2)] text-indigo-700 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300">
                    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div className="px-3 py-1.5 rounded-full bg-indigo-100 border border-indigo-200 text-indigo-700 text-[10px] font-bold uppercase tracking-widest shadow-sm">Global</div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-[#0f172a] mb-3 group-hover:text-indigo-700 transition-colors">Overseas Growth</h3>
                  <p className="text-slate-600 mb-8 leading-relaxed">Expand your footprint globally with localized marketing and market penetration.</p>
                </div>
                <Link href="/services/overseas" className="inline-flex items-center gap-3 text-[#0f172a] font-bold group-hover:text-indigo-600 transition-colors w-fit">
                  Go Global
                  <span className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300 group-hover:translate-x-3 shadow-sm group-hover:shadow-indigo-500/30">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                  </span>
                </Link>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* 4 Metric Cards Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden border-t border-gray-100">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
                When Infrastructure & <br/><span className="bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">Creative Work Together</span>
              </h2>
              <p className="text-lg text-gray-500 font-medium">
                Real, verifiable data averages recorded across our portfolio partners in the last 12 months.
              </p>
            </div>
          </Reveal>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <Reveal delay={100}>
              <div className="rounded-[2rem] border border-gray-100 p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center">
                <h3 className="text-4xl font-black mb-3 text-gray-900 tracking-tighter">24/7</h3>
                <p className="text-gray-500 text-sm font-semibold">Continuous Support & Activation</p>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="rounded-[2rem] border border-gray-100 p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center">
                <h3 className="text-4xl font-black mb-3 text-gray-900 tracking-tighter">37%</h3>
                <p className="text-gray-500 text-sm font-semibold">Drop in CAC</p>
              </div>
            </Reveal>

            <Reveal delay={300}>
              <div className="rounded-[2rem] border border-gray-100 p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center">
                <h3 className="text-4xl font-black mb-3 text-gray-900 tracking-tighter">4.6s</h3>
                <p className="text-gray-500 text-sm font-semibold">Avg Hook Ratio</p>
              </div>
            </Reveal>
            
            <Reveal delay={400}>
              <div className="rounded-[2rem] border border-gray-100 p-8 bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-300 text-center">
                <h3 className="text-4xl font-black mb-3 text-gray-900 tracking-tighter">68%</h3>
                <p className="text-gray-500 text-sm font-semibold">Abandoned Carts Recovered</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </div>
  );
}
