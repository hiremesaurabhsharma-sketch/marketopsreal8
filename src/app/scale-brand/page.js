"use client";

import { useEffect, useRef, useState } from "react";

export default function ScaleBrandPage() {
  const containerRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [frameIndex, setFrameIndex] = useState(1);
  
  const frameCount = 115;
  const currentFrame = (index) => 
    `/frames/ezgif-frame-${index.toString().padStart(3, '0')}.jpg`;

  return (
    <>
      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-12 py-[60px] select-none text-left relative z-10">
        
        {/* Header Section */}
        <header className="max-w-3xl mb-16 space-y-4">
          <span className="inline-block bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-on-surface-variant px-3 py-1 rounded-lg text-xs font-semibold tracking-wider uppercase">
            The MarketOps Blueprint
          </span>
          <h1 className="font-be-vietnam-pro font-black text-5xl md:text-7xl leading-tight tracking-tight text-on-surface">
            How We Scale Your Brand
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg font-inter leading-relaxed max-w-xl">
            We don't just run ads. We build highly scalable, data-driven growth engines that turn clicks into loyal customers and revenue.
          </p>
        </header>


      
      {/* The Strategy Engine - Bento Box Layout */}
      <div className="relative z-10 bg-[#f8fafc] py-32 overflow-hidden">
        
        {/* Glowing Vertical Spine (Desktop only) */}
        <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-transparent via-blue-400/30 to-transparent hidden lg:block -translate-x-1/2 pointer-events-none"></div>

        <div className="max-w-[1200px] mx-auto px-6 space-y-32 relative">
          
          {/* Phase 01 */}
          <section className="relative group">
             {/* Center Node on Spine */}
             <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-blue-500 rounded-full shadow-[0_0_20px_rgba(59,130,246,0.8)] hidden lg:block -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500 z-20 border-2 border-white"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Text Content */}
                <div className="space-y-8 relative z-10 lg:pr-12">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-blue-600 font-black tracking-widest uppercase text-sm">Phase 01</span>
                    <div className="h-px w-12 bg-blue-600/30"></div>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-[#0f172a] leading-tight">Deep-Dive <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Brand Audit</span></h3>
                  <p className="text-slate-600 text-xl leading-relaxed font-medium">
                    Before spending a single dollar on ads, we dissect your brand&apos;s current positioning, past campaigns, and competitors. We find the leaks in your funnel and fix them.
                  </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-2 gap-4 relative">
                   {/* Background Glow */}
                   <div className="absolute inset-0 bg-blue-400/20 blur-[100px] rounded-full mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                   
                   {/* Massive 01 Box */}
                   <div className="col-span-2 md:col-span-1 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_60px_rgb(59,130,246,0.1)] transition-all duration-500 flex flex-col justify-between overflow-hidden relative group/box hover:-translate-y-2">
                     <span className="material-symbols-outlined text-4xl text-blue-500 mb-8 relative z-10 group-hover/box:rotate-12 transition-transform duration-500">troubleshoot</span>
                     <div className="relative z-10">
                       <h4 className="text-lg font-bold text-slate-900">Data is our compass</h4>
                       <p className="text-sm text-slate-500 mt-2">Proprietary frameworks to reveal wasted budget.</p>
                     </div>
                     {/* Giant Background Number */}
                     <div className="absolute -bottom-10 -right-6 text-9xl font-black text-transparent [-webkit-text-stroke:2px_#f1f5f9] group-hover/box:[-webkit-text-stroke:2px_rgba(59,130,246,0.1)] transition-colors duration-500 pointer-events-none">01</div>
                   </div>

                   {/* Features List Box */}
                   <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                     {['Audience Persona', 'Competitor Library', 'CRO Fixes'].map((item, i) => (
                       <div key={i} className="bg-white/60 backdrop-blur-md p-6 rounded-[2rem] border border-slate-100 shadow-sm flex items-center gap-4 group-hover:bg-white transition-colors duration-500 hover:-translate-y-1 hover:shadow-md cursor-default">
                         <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600">
                           <span className="material-symbols-outlined text-sm font-bold">check</span>
                         </div>
                         <span className="font-bold text-slate-800">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>
             </div>
          </section>

          {/* Phase 02 */}
          <section className="relative group">
             {/* Center Node on Spine */}
             <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-cyan-500 rounded-full shadow-[0_0_20px_rgba(6,182,212,0.8)] hidden lg:block -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500 z-20 border-2 border-white"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Bento Box Grid (Left side on desktop) */}
                <div className="grid grid-cols-2 gap-4 relative order-2 lg:order-1">
                   <div className="absolute inset-0 bg-cyan-400/20 blur-[100px] rounded-full mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                   
                   <div className="col-span-2 flex flex-col md:flex-row gap-4">
                     <div className="flex-1 bg-white p-8 rounded-[2rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] group-hover:shadow-[0_20px_60px_rgb(6,182,212,0.1)] transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative overflow-hidden group/box">
                       <span className="material-symbols-outlined text-4xl text-cyan-500 mb-8 relative z-10 group-hover/box:scale-110 transition-transform duration-500">campaign</span>
                       <div className="relative z-10">
                         <h4 className="text-lg font-bold text-slate-900">Scroll-stopping creatives</h4>
                         <p className="text-sm text-slate-500 mt-2">Your creative is your targeting. We hook viewers instantly.</p>
                       </div>
                       <div className="absolute -top-10 -right-6 text-9xl font-black text-transparent [-webkit-text-stroke:2px_#f1f5f9] group-hover/box:[-webkit-text-stroke:2px_rgba(6,182,212,0.1)] transition-colors duration-500 pointer-events-none">02</div>
                     </div>
                   </div>

                   <div className="col-span-2 grid grid-cols-2 gap-4">
                     {['UGC Video', 'A/B Testing'].map((item, i) => (
                       <div key={i} className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-[2rem] border border-slate-100 shadow-sm flex flex-col items-center justify-center gap-3 group-hover:border-cyan-100 transition-colors duration-500 hover:-translate-y-1 text-center">
                         <span className="material-symbols-outlined text-cyan-500 bg-cyan-50 p-2 rounded-xl">{i === 0 ? 'movie' : 'science'}</span>
                         <span className="font-bold text-slate-800 text-sm">{item}</span>
                       </div>
                     ))}
                   </div>
                </div>

                {/* Text Content */}
                <div className="space-y-8 relative z-10 lg:pl-12 order-1 lg:order-2">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-cyan-600 font-black tracking-widest uppercase text-sm">Phase 02</span>
                    <div className="h-px w-12 bg-cyan-600/30"></div>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-[#0f172a] leading-tight">Creative <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-teal-400">Engineering</span></h3>
                  <p className="text-slate-600 text-xl leading-relaxed font-medium">
                    We conceptualize, script, and design ad creatives specifically built for performance. From UGC style videos to high-end motion graphics, we test continuously.
                  </p>
                </div>

             </div>
          </section>

          {/* Phase 03 */}
          <section className="relative group">
             {/* Center Node on Spine */}
             <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-purple-500 rounded-full shadow-[0_0_20px_rgba(168,85,247,0.8)] hidden lg:block -translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-500 z-20 border-2 border-white"></div>
             
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
                
                {/* Text Content */}
                <div className="space-y-8 relative z-10 lg:pr-12">
                  <div className="inline-flex items-center gap-3">
                    <span className="text-purple-600 font-black tracking-widest uppercase text-sm">Phase 03</span>
                    <div className="h-px w-12 bg-purple-600/30"></div>
                  </div>
                  <h3 className="text-5xl md:text-6xl font-black text-[#0f172a] leading-tight">Ruthless <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-fuchsia-500">Scaling</span></h3>
                  <p className="text-slate-600 text-xl leading-relaxed font-medium">
                    Once we find winning creatives and audiences, we turn up the heat. We deploy advanced media buying strategies to scale your daily spend while maintaining target ROAS.
                  </p>
                </div>

                {/* Bento Box Grid */}
                <div className="grid grid-cols-2 gap-4 relative">
                   <div className="absolute inset-0 bg-purple-400/20 blur-[100px] rounded-full mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                   
                   <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                     {['Omnichannel', 'Lookalikes', 'Automated Bids'].map((item, i) => (
                       <div key={i} className="bg-white/80 backdrop-blur-md p-6 rounded-[1.5rem] border border-slate-100 shadow-sm flex items-center gap-4 group-hover:bg-white transition-colors duration-500 hover:-translate-x-2">
                         <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                         <span className="font-bold text-slate-800">{item}</span>
                       </div>
                     ))}
                   </div>

                   <div className="col-span-2 md:col-span-1 bg-gradient-to-br from-purple-600 to-fuchsia-600 p-8 rounded-[2rem] shadow-xl transition-all duration-500 flex flex-col justify-between hover:-translate-y-2 relative overflow-hidden group/box">
                     <span className="material-symbols-outlined text-5xl text-white mb-8 relative z-10 group-hover/box:-translate-y-2 transition-transform duration-500">rocket_launch</span>
                     <div className="relative z-10">
                       <h4 className="text-xl font-black text-white">Scaling to the Moon</h4>
                       <p className="text-sm text-purple-100 mt-2 font-medium">Multi-million dollar budgets managed with precision.</p>
                     </div>
                     {/* Decorative light beam */}
                     <div className="absolute top-0 right-0 w-32 h-64 bg-white/10 rotate-45 blur-xl group-hover/box:translate-x-10 transition-transform duration-1000"></div>
                     <div className="absolute -bottom-6 -right-4 text-9xl font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.1)] group-hover/box:[-webkit-text-stroke:2px_rgba(255,255,255,0.3)] transition-colors duration-500 pointer-events-none">03</div>
                   </div>
                </div>
             </div>
          </section>

        </div>
      </div>

        {/* --- BRAND SHOWCASE --- */}
        
        {/* Infinite Logo Marquee - Holographic Track */}
        <section className="py-24 bg-[#f8fafc] overflow-hidden relative border-y border-slate-200/50 perspective-1000">
          <div className="absolute left-0 top-0 bottom-0 w-48 lg:w-96 bg-gradient-to-r from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-20 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-48 lg:w-96 bg-gradient-to-l from-[#f8fafc] via-[#f8fafc]/80 to-transparent z-20 pointer-events-none"></div>
          
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.08)_0%,transparent_70%)] pointer-events-none"></div>
          
          <div className="text-center mb-16 relative z-30">
             <div className="inline-flex items-center gap-4">
                <div className="h-px w-12 bg-slate-300"></div>
                <h3 className="text-xs font-black tracking-[0.2em] text-slate-400 uppercase">Trusted by Global Visionaries</h3>
                <div className="h-px w-12 bg-slate-300"></div>
             </div>
          </div>

          {/* Scrolling Track */}
          <div className="relative transform-gpu rotate-y-[-2deg] rotate-x-[5deg] scale-105 z-10">
            <div className="flex animate-marquee w-max gap-8 py-4">
              {[
                { name: "The Func Lab", domain: "thefunclab.com" },
                { name: "Apsara Tea", domain: "apsaratea.in" },
                { name: "HNI Corp", domain: "hnicorp.com" },
                { name: "Stanphord", domain: "amazon.in" },
                { name: "SleepSmith", domain: "amazon.in" },
                { name: "Mint and Oak", domain: "mintandoak.in" },
                { name: "Moha", domain: "moha.co.in" },
                { name: "Kimirica", domain: "kimirica.shop" },
                { name: "VIVID", domain: "amazon.in" },
                { name: "Vimal Agro", domain: "vimalagro.com" }
              ].map((brand, i) => (
                <div key={i} className="flex items-center gap-4 px-10 py-5 bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500 group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner p-2 group-hover:scale-110 transition-transform duration-500">
                    <img src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} alt={brand.name} className="w-full h-full object-contain rounded-full" onError={(e) => e.target.style.display='none'} />
                  </div>
                  <span className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{brand.name}</span>
                </div>
              ))}
              {/* Duplicate for infinite effect */}
              {[
                { name: "The Func Lab", domain: "thefunclab.com" },
                { name: "Apsara Tea", domain: "apsaratea.in" },
                { name: "HNI Corp", domain: "hnicorp.com" },
                { name: "Stanphord", domain: "amazon.in" },
                { name: "SleepSmith", domain: "amazon.in" },
                { name: "Mint and Oak", domain: "mintandoak.in" },
                { name: "Moha", domain: "moha.co.in" },
                { name: "Kimirica", domain: "kimirica.shop" },
                { name: "VIVID", domain: "amazon.in" },
                { name: "Vimal Agro", domain: "vimalagro.com" }
              ].map((brand, i) => (
                <div key={i+20} className="flex items-center gap-4 px-10 py-5 bg-white/60 backdrop-blur-xl border border-white rounded-[2rem] shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(59,130,246,0.1)] transition-all duration-500 group cursor-pointer">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-inner p-2 group-hover:scale-110 transition-transform duration-500">
                    <img src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} alt={brand.name} className="w-full h-full object-contain rounded-full" onError={(e) => e.target.style.display='none'} />
                  </div>
                  <span className="text-2xl font-black text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-500">{brand.name}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Top Brands Results Driven Showcase */}
        <section className="max-w-[1200px] mx-auto px-6 py-32">
           <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
             <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-600 text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm">
                Case Studies
             </div>
             <h2 className="text-5xl md:text-7xl font-black text-[#0f172a] tracking-tight">Brands We&apos;ve <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Scaled</span></h2>
             <p className="text-slate-500 text-xl font-medium">Real results for industry-leading visionaries.</p>
           </div>
           
           <div className="grid lg:grid-cols-2 gap-10">
             {[
               { name: "Kimirica", domain: "kimirica.shop", url: "https://www.kimirica.shop/", result: "Scaled E-commerce Sales by 3x", icon: "shopping_bag", colorGlow: "from-blue-600 via-indigo-500 to-cyan-500", textGradient: "from-blue-400 to-indigo-300" },
               { name: "GK Hair", domain: "gkhair.com", url: "https://www.gkhair.com/", result: "Reduced CAC by 40%", icon: "content_cut", colorGlow: "from-emerald-500 via-teal-400 to-emerald-600", textGradient: "from-emerald-400 to-teal-200" },
               { name: "VI John", domain: "vijohnkart.com", url: "https://vijohnkart.com/", result: "Generated 50k+ Leads", icon: "group_add", colorGlow: "from-purple-600 via-fuchsia-500 to-pink-500", textGradient: "from-purple-400 to-fuchsia-300" },
               { name: "Shankara", domain: "shankara.in", url: "https://www.shankara.in/", result: "10x Organic Traffic", icon: "trending_up", colorGlow: "from-amber-500 via-orange-500 to-red-500", textGradient: "from-amber-300 to-orange-400" }
             ].map((brand, i) => (
               <a key={i} href={brand.url} target="_blank" rel="noopener noreferrer" className="relative group p-[3px] rounded-[3rem] bg-slate-800 hover:bg-slate-700 transition-colors duration-500 block perspective-1000">
                  
                  {/* Spinning Conic Gradient Border (Simulated with rotating background) */}
                  <div className={`absolute inset-0 bg-gradient-to-r ${brand.colorGlow} rounded-[3rem] opacity-50 group-hover:opacity-100 group-hover:animate-spin-slow blur-md transition-all duration-700`}></div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${brand.colorGlow} rounded-[3rem] opacity-50 group-hover:opacity-100`}></div>
                  
                  {/* Inner Glass Card */}
                  <div className="relative h-full bg-slate-900/90 backdrop-blur-3xl rounded-[2.8rem] p-10 md:p-12 flex flex-col justify-between overflow-hidden transform-gpu group-hover:rotate-x-2 group-hover:-rotate-y-2 transition-transform duration-500 ease-out z-10">
                     
                     {/* Glossy overlay */}
                     <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>

                     <div className="flex justify-between items-start mb-20 relative z-10">
                        <div className="flex items-center gap-5">
                           <div className="w-20 h-20 bg-white/5 backdrop-blur-xl rounded-2xl flex items-center justify-center p-3 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] group-hover:scale-110 transition-transform duration-500">
                             <img src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} alt={brand.name} className="w-full h-full object-contain rounded-xl drop-shadow-md" onError={(e) => { e.target.style.display='none'; e.target.nextSibling.style.display='block'; }} />
                             <span style={{display: 'none'}} className="material-symbols-outlined text-4xl text-white">{brand.icon}</span>
                           </div>
                           <div>
                             <h3 className="text-3xl font-black text-white tracking-tight">{brand.name}</h3>
                             <span className="text-sm font-bold text-slate-500 uppercase tracking-widest mt-1 block">Official Partner</span>
                           </div>
                        </div>
                        <div className="px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-2 text-xs font-black uppercase tracking-widest backdrop-blur-md shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                           <span className="material-symbols-outlined text-[16px]">verified</span>
                        </div>
                     </div>
                     
                     <div className="relative z-10 transform-gpu group-hover:translate-z-10 group-hover:-translate-y-2 transition-transform duration-500">
                        <p className="text-slate-400 font-bold mb-4 text-xs uppercase tracking-[0.2em]">The Result</p>
                        <h4 className={`text-4xl md:text-6xl font-black bg-gradient-to-r ${brand.textGradient} bg-clip-text text-transparent leading-tight drop-shadow-2xl`}>
                           {brand.result}
                        </h4>
                     </div>

                     {/* Action Button */}
                     <div className="absolute bottom-10 right-10 w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-all duration-500 text-white translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 z-10 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                        <span className="material-symbols-outlined text-2xl">arrow_outward</span>
                     </div>
                  </div>
               </a>
             ))}
           </div>
        </section>

        {/* Wall of Fame Grid */}
        <section className="max-w-[1200px] mx-auto px-6 pb-24">
           <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-sm relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400"></div>
             
             <div className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-4">The Wall of Fame</h2>
               <p className="text-slate-600 font-medium">We are proud to have partnered with these incredible brands.</p>
             </div>

             <div className="flex flex-wrap justify-center gap-4">
                {[
                  { name: "The Func Lab", url: "https://thefunclab.com/", domain: "thefunclab.com", color: "from-blue-500 to-indigo-500" },
                  { name: "Apsara Tea", url: "https://apsaratea.in/", domain: "apsaratea.in", color: "from-green-500 to-emerald-500" },
                  { name: "HNI Corp", url: "https://www.hnicorp.com/", domain: "hnicorp.com", color: "from-slate-600 to-slate-800" },
                  { name: "Stanphord", url: "https://www.amazon.in/stores/Stanphord/page/6E641905-7EC0-460D-BC6F-360181AE0C91", domain: "amazon.in", color: "from-orange-400 to-red-500" },
                  { name: "SleepSmith", url: "https://www.amazon.in/stores/SleepSmith/page/47015169-675E-4F54-8E2E-255566AFF4C5", domain: "amazon.in", color: "from-indigo-400 to-purple-500" },
                  { name: "Mint and Oak", url: "https://www.mintandoak.in/", domain: "mintandoak.in", color: "from-emerald-400 to-teal-500" },
                  { name: "Moha", url: "https://www.moha.co.in/", domain: "moha.co.in", color: "from-rose-400 to-pink-500" },
                  { name: "Kimirica", url: "https://www.kimirica.shop/", domain: "kimirica.shop", color: "from-fuchsia-500 to-purple-600" },
                  { name: "VIVID", url: "https://www.amazon.in/stores/VIVID/page/6123B38E-AB8B-48D0-9ED6-AB7E0CE3FF8C", domain: "amazon.in", color: "from-blue-400 to-cyan-500" },
                  { name: "Vimal Agro", url: "https://www.vimalagro.com/", domain: "vimalagro.com", color: "from-green-600 to-lime-500" },
                  { name: "Medisynth", url: "https://medisynth.com/", domain: "medisynth.com", color: "from-sky-400 to-blue-500" },
                  { name: "Bassino Impex", url: "https://bassinoimpex.com/", domain: "bassinoimpex.com", color: "from-amber-400 to-orange-500" },
                  { name: "Bitcorp", url: "https://bitcorp.in/", domain: "bitcorp.in", color: "from-violet-500 to-purple-500" },
                  { name: "Casa Bleu", url: "https://www.casableustore.com/", domain: "casableustore.com", color: "from-blue-600 to-indigo-600" },
                  { name: "Aroura Achar 1944", url: "https://www.arouraachar1944.com/", domain: "arouraachar1944.com", color: "from-red-500 to-rose-600" },
                  { name: "Shankara", url: "https://www.shankara.in/", domain: "shankara.in", color: "from-amber-500 to-yellow-500" },
                  { name: "GK Hair", url: "https://www.gkhair.com/", domain: "gkhair.com", color: "from-zinc-700 to-black" },
                  { name: "VI John", url: "https://vijohnkart.com/", domain: "vijohnkart.com", color: "from-green-500 to-emerald-600" },
                  { name: "Bayars Coffee", url: "https://bayarscoffee.com/", domain: "bayarscoffee.com", color: "from-orange-700 to-amber-800" },
                ].map((brand, i) => (
                  <a 
                    key={i} 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden px-8 py-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                     <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                     <div className="relative z-10 flex items-center gap-3">
                       <img src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} alt={brand.name} className="h-6 w-6 object-contain rounded-full bg-white/50 backdrop-blur-sm group-hover:bg-white transition-colors duration-300" onError={(e) => e.target.style.display='none'} />
                       <span className="text-lg font-black text-slate-700 group-hover:text-white transition-colors duration-300">{brand.name}</span>
                       <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">open_in_new</span>
                     </div>
                  </a>
                ))}
             </div>
           </div>
        </section>
        
        {/* --- END BRAND SHOWCASE --- */}

        {/* CTA Section - The Energy Core */}
        <section className="max-w-[1100px] mx-auto px-6 py-32 pb-40">
          <div className="relative rounded-[4rem] p-12 md:p-24 overflow-hidden shadow-[0_40px_100px_rgba(37,99,235,0.3)] group bg-slate-900 border border-slate-800">
            
            {/* Deep Core Gradient */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.3)_0%,rgba(15,23,42,1)_70%)] z-0"></div>
            
            {/* Animated Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_20%,transparent_100%)] group-hover:scale-105 transition-transform duration-1000"></div>

            {/* Pulsing Energy Orbs */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-[80px] animate-ping opacity-50 z-0"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/20 blur-[100px] rounded-full pointer-events-none group-hover:translate-x-10 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 blur-[100px] rounded-full pointer-events-none group-hover:-translate-x-10 transition-transform duration-1000"></div>
            
            <div className="relative z-10 flex flex-col items-center text-center space-y-10">
              <div className="inline-flex items-center justify-center p-4 bg-white/5 backdrop-blur-md rounded-full border border-white/10 shadow-lg group-hover:scale-110 transition-transform duration-500 mb-4">
                 <span className="material-symbols-outlined text-4xl text-blue-400">rocket_launch</span>
              </div>
              
              <h2 className="text-5xl md:text-7xl font-black text-white tracking-tight drop-shadow-xl leading-tight">
                Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Scale?</span>
              </h2>
              
              <p className="text-slate-300 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed drop-shadow-md">
                Stop leaving money on the table. Partner with MarketOps and watch your revenue graph go up and to the right.
              </p>
              
              <a href="/contact" className="relative overflow-hidden inline-flex items-center justify-center gap-3 bg-white text-blue-700 font-black px-12 py-6 rounded-2xl text-xl hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(255,255,255,0.2)] transition-all duration-300 group/btn mt-8">
                {/* Light Sweep Animation */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-blue-100/50 to-transparent group-hover/btn:animate-[shimmer_1.5s_infinite]"></div>
                <span className="relative z-10">Get Your Custom Strategy</span>
                <span className="material-symbols-outlined relative z-10 group-hover/btn:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </a>
            </div>
          </div>
        </section>

      </div>
  );
}
