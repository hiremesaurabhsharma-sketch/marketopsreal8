"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function ScaleBrandPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="bg-white min-h-screen relative text-slate-900 font-inter overflow-hidden">
      
      {/* --- GLOBAL BACKGROUND --- */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15)_0%,transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
      </div>

      {/* --- CREATIVE HERO --- */}
      <div className="relative z-10 pt-40 pb-20 px-6 flex flex-col items-center text-center">
        
        {/* Floating elements for creativity */}
        <div className="absolute top-32 left-10 md:left-32 animate-[bounce_6s_ease-in-out_infinite] hidden lg:flex flex-col items-center gap-2">
          <div className="bg-white/80 backdrop-blur-md px-4 py-2 rounded-2xl shadow-[0_10px_30px_rgba(59,130,246,0.1)] border border-blue-100 flex items-center gap-2">
            <span className="material-symbols-outlined text-emerald-500 font-bold">trending_up</span>
            <span className="font-bold text-slate-800">300% ROAS</span>
          </div>
          <div className="w-1 h-12 bg-gradient-to-b from-blue-200 to-transparent rounded-full"></div>
        </div>

        <div className="absolute top-52 right-10 md:right-32 animate-[bounce_7s_ease-in-out_infinite_delay-1000] hidden lg:flex flex-col items-center gap-2">
          <div className="bg-gradient-to-r from-blue-600 to-blue-500 px-4 py-2 rounded-2xl shadow-[0_10px_30px_rgba(59,130,246,0.3)] text-white flex items-center gap-2">
            <span className="material-symbols-outlined">rocket_launch</span>
            <span className="font-bold">Scale Faster</span>
          </div>
          <div className="w-1 h-16 bg-gradient-to-b from-blue-200 to-transparent rounded-full"></div>
        </div>

        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-xs px-6 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm mb-8 transform transition-transform hover:scale-105">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-blue-500"></span>
          </span>
          The MarketOps Blueprint
        </div>
        
        <h1 className="text-6xl md:text-[7rem] font-black tracking-tighter text-slate-900 pb-4 leading-[1.05] max-w-5xl mx-auto drop-shadow-sm">
          Scale Beyond <br/>
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-500">
            Limits.
          </span>
        </h1>
        
        <p className="text-slate-600 text-xl md:text-2xl font-medium max-w-2xl mx-auto leading-relaxed mt-6">
          We combine data science, creative engineering, and ruthless media buying to build growth engines that don't just run—they dominate.
        </p>

        <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center justify-center">
           <a href="#engine" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-[0_10px_40px_rgba(37,99,235,0.3)] transition-all hover:-translate-y-1 hover:shadow-[0_15px_50px_rgba(37,99,235,0.4)] flex items-center gap-2">
              Explore the Engine
              <span className="material-symbols-outlined">south</span>
           </a>
        </div>
      </div>

      {/* --- THE STRATEGY ENGINE TIMELINE --- */}
      <div id="engine" className="relative z-10 max-w-6xl mx-auto px-6 py-32">
         <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">Our 3-Phase <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Framework</span></h2>
         </div>

         <div className="relative">
            {/* Connecting Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-100 via-blue-400 to-blue-100 md:-translate-x-1/2 rounded-full"></div>

            {/* Phase 1 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-32 group">
               <div className="hidden md:block w-5/12 text-right pr-12">
                  <div className="inline-block bg-white p-6 rounded-[2rem] shadow-xl border border-blue-50 hover:border-blue-200 transition-colors transform hover:-translate-x-2">
                     <span className="material-symbols-outlined text-5xl text-blue-600 mb-4">troubleshoot</span>
                     <h4 className="text-2xl font-bold text-slate-900">Data is Compass</h4>
                     <p className="text-slate-500 mt-2">Proprietary audits to find budget leaks.</p>
                  </div>
               </div>
               
               <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-white border-4 border-blue-500 rounded-full md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(59,130,246,0.4)] z-10 group-hover:scale-125 transition-transform duration-500">
                 <span className="font-bold text-blue-600">1</span>
               </div>
               
               <div className="w-full md:w-5/12 pl-24 md:pl-12">
                  <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Phase 01</span>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-500">Deep-Dive <br/> Brand Audit</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Before spending a single dollar, we dissect your brand's positioning, past campaigns, and competitors to fix funnel leaks.
                  </p>
               </div>
            </div>

            {/* Phase 2 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between mb-32 group">
               <div className="w-full md:w-5/12 pl-24 md:pl-0 md:text-right md:pr-12 order-2 md:order-1">
                  <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Phase 02</span>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4 leading-tight group-hover:text-cyan-600 transition-colors duration-500">Creative <br/> Engineering</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Your creative is your targeting. We conceptualize, script, and design ad creatives specifically built to hook and convert.
                  </p>
               </div>
               
               <div className="absolute left-8 md:left-1/2 w-12 h-12 bg-white border-4 border-cyan-500 rounded-full md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.4)] z-10 group-hover:scale-125 transition-transform duration-500 order-1 md:order-2">
                 <span className="font-bold text-cyan-600">2</span>
               </div>
               
               <div className="hidden md:block w-5/12 pl-12 order-3">
                  <div className="inline-block bg-white p-6 rounded-[2rem] shadow-xl border border-cyan-50 hover:border-cyan-200 transition-colors transform hover:translate-x-2">
                     <span className="material-symbols-outlined text-5xl text-cyan-500 mb-4">movie</span>
                     <h4 className="text-2xl font-bold text-slate-900">Scroll-Stopping</h4>
                     <p className="text-slate-500 mt-2">UGC & High-end motion graphics.</p>
                  </div>
               </div>
            </div>

            {/* Phase 3 */}
            <div className="relative flex flex-col md:flex-row items-center justify-between group">
               <div className="hidden md:block w-5/12 text-right pr-12">
                  <div className="inline-block bg-gradient-to-br from-blue-600 to-cyan-500 p-8 rounded-[2rem] shadow-[0_20px_50px_rgba(37,99,235,0.3)] transform hover:-translate-x-2 transition-transform text-left border border-white/20">
                     <span className="material-symbols-outlined text-5xl text-white mb-4 drop-shadow-md">rocket_launch</span>
                     <h4 className="text-2xl font-black text-white">Scaling to the Moon</h4>
                     <p className="text-blue-100 mt-2 font-medium">Millions in budget managed with precision.</p>
                  </div>
               </div>
               
               <div className="absolute left-8 md:left-1/2 w-16 h-16 bg-blue-600 border-4 border-white rounded-full md:-translate-x-1/2 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.6)] z-10 group-hover:scale-125 transition-transform duration-500">
                 <span className="font-black text-white text-xl">3</span>
               </div>
               
               <div className="w-full md:w-5/12 pl-24 md:pl-12">
                  <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Phase 03</span>
                  <h3 className="text-4xl md:text-5xl font-black text-slate-900 mt-2 mb-4 leading-tight group-hover:text-blue-600 transition-colors duration-500">Ruthless <br/> Scaling</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium">
                    Once we find winning creatives and audiences, we turn up the heat. Advanced media buying to scale spend while maintaining target ROAS.
                  </p>
               </div>
            </div>

         </div>
      </div>

      {/* --- CREATIVE WHITE/BLUE BRANDS SHOWCASE --- */}
      <div className="relative z-10 bg-gradient-to-b from-white to-blue-50/50 py-32 border-t border-blue-50">
         <div className="max-w-[1200px] mx-auto px-6 mb-20 text-center">
            <h2 className="text-5xl md:text-6xl font-black text-slate-900 tracking-tight">Proof in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Numbers</span></h2>
            <p className="text-slate-500 text-xl mt-4">Real results for industry-leading visionaries.</p>
         </div>

         <div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-8">
            {[
               { name: "Kimirica", domain: "kimirica.shop", result: "Scaled E-commerce Sales by 3x", icon: "shopping_bag" },
               { name: "GK Hair", domain: "gkhair.com", result: "Reduced CAC by 40%", icon: "content_cut" },
               { name: "VI John", domain: "vijohnkart.com", result: "Generated 50k+ Leads", icon: "group_add" },
               { name: "Shankara", domain: "shankara.in", result: "10x Organic Traffic", icon: "trending_up" }
             ].map((brand, i) => (
               <div key={i} className="group relative bg-white/80 backdrop-blur-xl rounded-[2rem] p-10 shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white hover:border-blue-200 transition-colors duration-500 overflow-hidden cursor-default">
                  {/* Hover Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 flex flex-col h-full justify-between gap-12">
                     <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                           <div className="w-16 h-16 bg-white shadow-md rounded-2xl p-2 flex items-center justify-center border border-slate-50 group-hover:scale-110 transition-transform duration-500">
                             <img src={`https://www.google.com/s2/favicons?domain=${brand.domain}&sz=128`} alt={brand.name} className="w-full h-full object-contain rounded-xl" onError={(e) => { e.target.style.display='none'; }} />
                           </div>
                           <h3 className="text-2xl font-black text-slate-800">{brand.name}</h3>
                        </div>
                        <span className="material-symbols-outlined text-blue-100 text-6xl group-hover:text-blue-200 transition-colors">
                           {brand.icon}
                        </span>
                     </div>

                     <div>
                        <p className="text-blue-500 font-bold uppercase tracking-widest text-sm mb-2">The Result</p>
                        <h4 className="text-4xl font-black text-slate-900 group-hover:text-blue-600 transition-colors duration-300">
                           {brand.result}
                        </h4>
                     </div>
                  </div>
               </div>
             ))}
         </div>
      </div>

      {/* --- WALL OF FAME (BRANDS) --- */}
      <div className="relative z-10 bg-white py-20 pb-32">
         <div className="max-w-[1200px] mx-auto px-6 text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-4">The Wall of <span className="text-blue-600">Fame</span></h2>
            <p className="text-slate-500 font-medium max-w-xl mx-auto">We are proud to have partnered with these incredible brands to drive scalable growth.</p>
         </div>

         <div className="max-w-[1200px] mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-4">
               {[
                  { name: "The Func Lab", url: "https://thefunclab.com/", domain: "thefunclab.com", color: "from-blue-500 to-indigo-500" },
                  { name: "Apsara Tea", url: "https://apsaratea.in/", domain: "apsaratea.in", color: "from-blue-400 to-sky-500" },
                  { name: "HNI Corp", url: "https://www.hnicorp.com/", domain: "hnicorp.com", color: "from-slate-400 to-slate-600" },
                  { name: "Stanphord", url: "https://www.amazon.in/stores/Stanphord/page/6E641905-7EC0-460D-BC6F-360181AE0C91", domain: "amazon.in", color: "from-blue-500 to-cyan-500" },
                  { name: "SleepSmith", url: "https://www.amazon.in/stores/SleepSmith/page/47015169-675E-4F54-8E2E-255566AFF4C5", domain: "amazon.in", color: "from-indigo-400 to-blue-500" },
                  { name: "Mint and Oak", url: "https://www.mintandoak.in/", domain: "mintandoak.in", color: "from-teal-400 to-blue-500" },
                  { name: "Moha", url: "https://www.moha.co.in/", domain: "moha.co.in", color: "from-blue-400 to-indigo-400" },
                  { name: "Kimirica", url: "https://www.kimirica.shop/", domain: "kimirica.shop", color: "from-indigo-500 to-blue-600" },
                  { name: "VIVID", url: "https://www.amazon.in/stores/VIVID/page/6123B38E-AB8B-48D0-9ED6-AB7E0CE3FF8C", domain: "amazon.in", color: "from-blue-400 to-cyan-500" },
                  { name: "Vimal Agro", url: "https://www.vimalagro.com/", domain: "vimalagro.com", color: "from-sky-500 to-blue-500" },
                  { name: "Medisynth", url: "https://medisynth.com/", domain: "medisynth.com", color: "from-sky-400 to-blue-500" },
                  { name: "Bassino Impex", url: "https://bassinoimpex.com/", domain: "bassinoimpex.com", color: "from-blue-500 to-sky-600" },
                  { name: "Bitcorp", url: "https://bitcorp.in/", domain: "bitcorp.in", color: "from-indigo-500 to-blue-500" },
                  { name: "Casa Bleu", url: "https://www.casableustore.com/", domain: "casableustore.com", color: "from-blue-600 to-indigo-600" },
                  { name: "Aroura Achar 1944", url: "https://www.arouraachar1944.com/", domain: "arouraachar1944.com", color: "from-blue-500 to-cyan-600" },
                  { name: "Shankara", url: "https://www.shankara.in/", domain: "shankara.in", color: "from-sky-500 to-indigo-500" },
                  { name: "GK Hair", url: "https://www.gkhair.com/", domain: "gkhair.com", color: "from-slate-600 to-slate-800" },
                  { name: "VI John", url: "https://vijohnkart.com/", domain: "vijohnkart.com", color: "from-teal-500 to-blue-600" },
                  { name: "Bayars Coffee", url: "https://bayarscoffee.com/", domain: "bayarscoffee.com", color: "from-indigo-600 to-blue-800" },
               ].map((brand, i) => (
                  <a 
                    key={i} 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden px-8 py-5 rounded-2xl border border-slate-100 bg-white shadow-sm hover:shadow-[0_10px_30px_rgba(59,130,246,0.15)] hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
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
      </div>

      {/* --- PURE BLUE/WHITE CTA --- */}
      <div className="relative z-10 py-32 px-6">
         <div className="max-w-[1100px] mx-auto bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-[0_30px_60px_rgba(37,99,235,0.3)] group border border-white/20">
            {/* Creative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 blur-[80px] rounded-full mix-blend-overlay group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-300/30 blur-[60px] rounded-full mix-blend-overlay group-hover:scale-125 transition-transform duration-1000"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 mix-blend-overlay [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_20%,transparent_100%)]"></div>

            <div className="relative z-10 space-y-8 flex flex-col items-center">
               <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/30 shadow-xl group-hover:rotate-12 transition-transform duration-500">
                  <span className="material-symbols-outlined text-5xl drop-shadow-md">monitoring</span>
               </div>
               
               <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-tight drop-shadow-sm">
                  Stop Leaving <br/> Money on the Table.
               </h2>
               
               <p className="text-blue-50 text-xl md:text-2xl max-w-2xl font-medium drop-shadow-sm">
                  Partner with MarketOps and watch your revenue graph go up and to the right. The white and blue blueprint for scalable success.
               </p>
               
               <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-blue-700 px-10 py-5 rounded-full font-black text-xl hover:bg-blue-50 transition-colors shadow-xl hover:shadow-2xl transform hover:-translate-y-1 group/btn mt-8">
                  Start Scaling Now
                  <span className="material-symbols-outlined group-hover/btn:translate-x-2 transition-transform duration-300">arrow_forward</span>
               </Link>
            </div>
         </div>
      </div>

    </div>
  );
}
