import React from 'react';
import Link from 'next/link';

export default function OverseasBusiness() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-inter text-[#0f172a] overflow-hidden">
      
      {/* 1. HERO SECTION (Engaging & Captivating) */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(99,102,241,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <span className="inline-block bg-indigo-100 text-indigo-700 text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm border border-indigo-200">
                Overseas Business Dev
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
                Expand Beyond Borders <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-blue-500">Globally.</span>
              </h1>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                We help ambitious brands launch into international markets with localized marketing, compliance guidance, and global growth strategies.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-10 py-5 rounded-full bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(99,102,241,0.3)] transition-all" href="/contact">
                  Go Global Today
                </Link>
                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-slate-200 shadow-sm">
                   <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+30}`} alt="client" />
                        </div>
                     ))}
                   </div>
                   <div className="text-sm font-bold text-slate-700 leading-tight">
                     Trusted in <br/><span className="text-indigo-600">20+ Countries</span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* Floating Global Graphic */}
              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-r from-indigo-500 to-blue-500 text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Global Reach</p>
                  <p className="text-4xl font-black">+450% 🌍</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-20 bg-blue-500 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">New Markets</p>
                  <p className="text-3xl font-black">5 Launched 🚀</p>
                </div>

                <div className="space-y-6 opacity-90 relative z-10 overflow-hidden rounded-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop" 
                    alt="Global diverse business team meeting" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR STRATEGY */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-indigo-600 font-bold tracking-widest uppercase text-sm">Our Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">The Global Expansion Playbook</h2>
            <p className="text-slate-600 text-lg font-medium">Entering a new country requires more than just translating your ads. We build localized engines of growth.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-indigo-100 via-indigo-400 to-indigo-100 -translate-y-1/2 z-0"></div>

             {[
               {
                 step: '01',
                 title: 'Market Intelligence',
                 desc: 'We analyze consumer behavior, competitors, and cultural nuances in your target country to craft a winning entry strategy.',
                 icon: 'public',
                 color: 'indigo'
               },
               {
                 step: '02',
                 title: 'Localization & Setup',
                 desc: 'From translating copy to navigating local payment gateways and compliance, we handle the friction of setting up abroad.',
                 icon: 'translate',
                 color: 'blue'
               },
               {
                 step: '03',
                 title: 'Cross-Border Scaling',
                 desc: 'We launch hyper-localized ad campaigns and scale them profitably using cross-border performance marketing tactics.',
                 icon: 'trending_up',
                 color: 'cyan'
               }
             ].map((strategy, i) => (
               <div key={i} className="relative z-10 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:-translate-y-4 transition-transform duration-500 text-center space-y-6">
                 <div className={`mx-auto w-20 h-20 bg-${strategy.color}-100 rounded-full flex items-center justify-center border-4 border-white shadow-md relative`}>
                    <span className={`material-symbols-outlined text-3xl text-${strategy.color}-600`}>{strategy.icon}</span>
                    <div className={`absolute -top-3 -right-3 bg-${strategy.color}-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white`}>
                      {strategy.step}
                    </div>
                 </div>
                 <h3 className="text-2xl font-bold text-[#0f172a]">{strategy.title}</h3>
                 <p className="text-slate-600 font-medium leading-relaxed">{strategy.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU GET */}
      <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="flex flex-col md:flex-row gap-16 items-center">
             
             <div className="md:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-black text-white">What You Get <br/><span className="text-indigo-400">When You Partner With Us</span></h2>
               <p className="text-slate-400 text-lg font-medium max-w-lg">
                 We are not just another agency. We are your global growth partners. Here is exactly what you achieve when you plug your business into the MarketOps ecosystem.
               </p>
               
               <div className="space-y-6 pt-4">
                 {[
                   { title: 'De-Risked Global Entry', desc: 'Avoid expensive mistakes by leveraging our established global frameworks.' },
                   { title: 'Cultural Resonance', desc: 'Ads and funnels that speak the local language, both literally and emotionally.' },
                   { title: 'International Revenue Streams', desc: 'Diversify your income by tapping into high-growth, untapped international markets.' },
                   { title: 'End-to-End Execution', desc: 'We handle everything from market research to media buying across borders.' }
                 ].map((benefit, i) => (
                   <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="material-symbols-outlined text-indigo-400 text-[18px]">check</span>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-1">{benefit.title}</h4>
                        <p className="text-slate-400 text-sm font-medium">{benefit.desc}</p>
                      </div>
                   </div>
                 ))}
               </div>
             </div>

             <div className="md:w-1/2 w-full grid grid-cols-2 gap-6">
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">5+</h5>
                  <p className="text-slate-400 font-medium">New Geographies</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-indigo-400 mb-2">0</h5>
                  <p className="text-slate-400 font-medium">Compliance Headaches</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-cyan-400 mb-2">2x</h5>
                  <p className="text-slate-400 font-medium">Customer Base Size</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-purple-400 mb-2">100%</h5>
                  <p className="text-slate-400 font-medium">Localized Strategy</p>
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 bg-[#f8fafc] text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-8">Ready to dominate your market?</h2>
            <p className="text-slate-600 text-xl font-medium mb-10 max-w-2xl mx-auto">
              Join the elite group of brands that are crushing their global goals with MarketOps.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-xl px-12 py-6 rounded-full bg-indigo-600 hover:bg-indigo-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(99,102,241,0.4)] transition-all" href="/contact">
              Let's Build Your Empire
            </Link>
         </div>
      </section>

    </div>
  );
}
