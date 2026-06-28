import React from 'react';
import Link from 'next/link';

export default function EcommerceSolutions() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-inter text-[#0f172a] overflow-hidden">
      
      {/* 1. HERO SECTION (Engaging & Captivating) */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm border border-blue-200">
                Ecommerce Growth Partner
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
                Stop Losing Sales. <br />
                Start Scaling <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Revenue.</span>
              </h1>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                We don't just build stores; we engineer highly profitable e-commerce ecosystems designed to capture attention, maximize Average Order Value, and create lifelong customers.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <Link className="inline-flex items-center justify-center text-white font-bold text-lg px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(37,99,235,0.3)] transition-all" href="/contact">
                  Scale My Store Now
                </Link>
                <div className="flex items-center gap-3 px-6 py-4 bg-white rounded-full border border-slate-200 shadow-sm">
                   <div className="flex -space-x-3">
                     {[1,2,3,4].map(i => (
                        <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center text-xs overflow-hidden">
                           <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="client" />
                        </div>
                     ))}
                   </div>
                   <div className="text-sm font-bold text-slate-700 leading-tight">
                     Trusted by <br/><span className="text-blue-600">50+ Brands</span>
                   </div>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* "Man Mohne Wala" Floating Dashboard Graphic */}
              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Monthly ROAS</p>
                  <p className="text-4xl font-black">4.8x 🚀</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 bg-emerald-500 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Conversion Rate</p>
                  <p className="text-3xl font-black">+142% 📈</p>
                </div>

                <div className="space-y-6 opacity-90">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                     <div>
                       <p className="text-slate-400 font-bold text-sm">Total Sales</p>
                       <p className="text-5xl font-black text-slate-800">$2.4M</p>
                     </div>
                     <div className="bg-emerald-100 text-emerald-600 px-3 py-1 rounded-lg font-bold text-sm">
                       +34.5% vs last month
                     </div>
                  </div>
                  {/* Fake Graph */}
                  <div className="h-40 flex items-end justify-between gap-2 pt-4">
                    {[30, 45, 25, 60, 50, 80, 65, 90, 75, 100].map((h, i) => (
                       <div key={i} className="w-full bg-gradient-to-t from-blue-100 to-blue-500 rounded-t-md hover:bg-cyan-400 transition-colors cursor-pointer" style={{height: `${h}%`}}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR STRATEGY (Strateg;y ham kya use kreeg;y) */}
      <section className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">The Blueprint to Dominance</h2>
            <p className="text-slate-600 text-lg font-medium">We don't rely on luck. We follow a battle-tested blueprint that guarantees growth for your eCommerce store.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             {/* Connecting line for desktop */}
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 -translate-y-1/2 z-0"></div>

             {[
               {
                 step: '01',
                 title: 'Traffic & Acquisition',
                 desc: 'We deploy highly targeted Meta & Google Ads to drive high-intent buyers to your store, minimizing your Customer Acquisition Cost (CAC).',
                 icon: 'ads_click',
                 color: 'blue'
               },
               {
                 step: '02',
                 title: 'Frictionless Conversion',
                 desc: 'Getting traffic is half the battle. We optimize your UI/UX, product pages, and checkout flow to ensure maximum visitors convert into buyers.',
                 icon: 'shopping_cart_checkout',
                 color: 'cyan'
               },
               {
                 step: '03',
                 title: 'Retention & LTV',
                 desc: 'We implement advanced email flows, SMS marketing, and loyalty programs to turn one-time buyers into lifelong brand advocates.',
                 icon: 'diamond',
                 color: 'emerald'
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

      {/* 3. WHAT YOU GET (Logo ko kya milega) */}
      <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="flex flex-col md:flex-row gap-16 items-center">
             
             <div className="md:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-black text-white">What You Get <br/><span className="text-blue-400">When You Partner With Us</span></h2>
               <p className="text-slate-400 text-lg font-medium max-w-lg">
                 We are not just another agency. We are your growth partners. Here is exactly what you achieve when you plug your business into the MarketOps ecosystem.
               </p>
               
               <div className="space-y-6 pt-4">
                 {[
                   { title: 'Skyrocketing Average Order Value (AOV)', desc: 'Through strategic upselling, cross-selling, and bundle offers.' },
                   { title: 'Lower Customer Acquisition Cost (CAC)', desc: 'Laser-focused ad targeting that only goes after high-intent audiences.' },
                   { title: 'Blazing Fast Store Speed', desc: 'Optimized code and image compression so your store loads in under 2 seconds.' },
                   { title: 'Data-Driven Decision Making', desc: 'Custom dashboards so you can track every penny spent and earned in real-time.' }
                 ].map((benefit, i) => (
                   <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="material-symbols-outlined text-blue-400 text-[18px]">check</span>
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
                  <h5 className="text-5xl font-black text-emerald-400 mb-2">3x</h5>
                  <p className="text-slate-400 font-medium">Average ROAS</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">99%</h5>
                  <p className="text-slate-400 font-medium">Uptime Guarantee</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-cyan-400 mb-2">-40%</h5>
                  <p className="text-slate-400 font-medium">Cart Abandonment Drop</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-indigo-400 mb-2">24/7</h5>
                  <p className="text-slate-400 font-medium">Dedicated Support</p>
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* 4. CTA (Closing) */}
      <section className="py-32 bg-[#f8fafc] text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-8">Ready to dominate your market?</h2>
            <p className="text-slate-600 text-xl font-medium mb-10 max-w-2xl mx-auto">
              Join the elite group of eCommerce brands that are crushing their revenue goals with MarketOps.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-xl px-12 py-6 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(37,99,235,0.4)] transition-all" href="/contact">
              Let's Build Your Empire
            </Link>
         </div>
      </section>

    </div>
  );
}
