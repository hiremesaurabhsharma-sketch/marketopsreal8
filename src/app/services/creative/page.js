import React from 'react';
import Link from 'next/link';
import { Smartphone, Clapperboard, Palette, Box, PenTool, Sparkles } from 'lucide-react';

export default function MarketingCreative() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-inter text-[#0f172a] overflow-hidden">
      
      {/* 1. HERO SECTION (Engaging & Captivating) */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(6,182,212,0.15),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <span className="inline-block bg-blue-100 text-blue-700 text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm border border-blue-200">
                Marketing Creative
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
                Stop Scrolling. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">Grab Attention.</span>
              </h1>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                We craft high-converting ad creatives, UGC videos, and 3D graphics designed specifically to beat the algorithm, capture attention instantly, and drive massive sales.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a className="inline-flex items-center justify-center text-white font-bold text-lg px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] transition-all" href="#calendly">
                  Get Free Brand Audit
                </a>
                <a className="inline-flex items-center justify-center text-slate-700 font-bold text-lg px-10 py-5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all" href="#formats">
                  Explore Formats
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* Floating Creative Graphic */}
              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-r from-blue-500 to-blue-500 text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">CTR Boost</p>
                  <p className="text-4xl font-black">+85% 📈</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-20 bg-blue-500 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Video Views</p>
                  <p className="text-3xl font-black">2.5M+ 👁️</p>
                </div>

                <div className="space-y-6 opacity-90 relative z-10 overflow-hidden rounded-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop" 
                    alt="Creative team working on designs" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. OUR STRATEGY */}
      <section className="py-24 bg-white relative border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">The Blueprint to Dominance</h2>
            <p className="text-slate-600 text-lg font-medium">We don't rely on luck. We follow a battle-tested blueprint that guarantees growth for your brand.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 -translate-y-1/2 z-0"></div>

             {[
               {
                 step: '01',
                 title: 'Psychological Hooks',
                 desc: 'We analyze your audience deeply to craft the perfect first 3 seconds of video or copy to hook them instantly.',
                 icon: 'psychology',
                 color: 'purple'
               },
               {
                 step: '02',
                 title: 'Storytelling & Value',
                 desc: 'Once hooked, we deliver compelling visual stories that communicate the unique value of your brand without feeling like an ad.',
                 icon: 'movie',
                 color: 'fuchsia'
               },
               {
                 step: '03',
                 title: 'Relentless Testing',
                 desc: 'We deploy multiple creative variations, let the algorithms decide the winner, and scale the top performers.',
                 icon: 'science',
                 color: 'pink'
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

      {/* CREATIVE FORMATS SECTION */}
      <section id="formats" className="py-24 bg-[#f8fafc] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Creative Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Built For Performance</h2>
            <p className="text-slate-600 text-lg font-medium">From viral TikToks to high-end 3D product renders, we build assets that sell.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: Smartphone, title: 'UGC Video Ads', desc: 'Authentic User-Generated Content that looks like a native post but converts like a high-end commercial.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30' },
              { icon: Clapperboard, title: 'High-End Production', desc: 'Cinematic brand videos, commercials, and product shoots that establish massive brand authority.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30' },
              { icon: Palette, title: 'Static Graphics & Carousels', desc: 'Direct-response graphic design tailored perfectly for Facebook, Instagram, and LinkedIn feeds.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30' },
              { icon: Box, title: '3D Animation & Motion', desc: 'Scroll-stopping 3D product renders and motion graphics that explain complex products easily.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' },
              { icon: PenTool, title: 'Direct Response Copywriting', desc: 'Persuasive ad copy and landing page scripts that psychologically compel the user to buy.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' },
              { icon: Sparkles, title: 'Brand Identity & Guidelines', desc: 'Full-scale brand overhauls including logo design, color theory, and tone of voice development.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30' }
            ].map((v, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} group-hover:bg-none group-hover:bg-white/20 flex items-center justify-center text-white mb-6 shadow-lg ${v.shadow} group-hover:shadow-none transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                    <v.icon size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0f172a] group-hover:text-white mb-3 transition-colors duration-500">{v.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm font-medium transition-colors duration-500 flex-grow">{v.desc}</p>
                  
                  <div className="mt-6 flex items-center text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-white transition-all duration-500 delay-100">
                    Explore Strategy <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. WHAT YOU GET */}
      <section className="py-24 bg-[#0f172a] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="flex flex-col md:flex-row gap-16 items-center">
             
             <div className="md:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-black text-white">What You Get <br/><span className="text-blue-400">When You Partner With Us</span></h2>
               <p className="text-slate-400 text-lg font-medium max-w-lg">
                 We are not just another agency. We are your growth partners. Here is exactly what you achieve when you plug your business into the MarketOps ecosystem.
               </p>
               
               <div className="space-y-6 pt-4">
                 {[
                   { title: 'Thumb-Stopping Visuals', desc: 'Designs and videos so good, users have no choice but to stop scrolling.' },
                   { title: 'Higher Click-Through Rates', desc: 'More clicks mean cheaper traffic and a massively improved ROI on your ad spend.' },
                   { title: 'Brand Identity Elevation', desc: 'Premium aesthetics that make your brand look like the clear market leader.' },
                   { title: 'Endless Creative Supply', desc: 'A constant stream of fresh, tested creatives to fight ad fatigue.' }
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
                  <h5 className="text-5xl font-black text-blue-400 mb-2">3x</h5>
                  <p className="text-slate-400 font-medium">Click-Through Rate</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">-50%</h5>
                  <p className="text-slate-400 font-medium">Cost Per Acquisition</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">10x</h5>
                  <p className="text-slate-400 font-medium">Brand Recall</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">100+</h5>
                  <p className="text-slate-400 font-medium">Creatives Monthly</p>
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a]">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg font-medium">Everything you need to know about our Creative Studio.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is UGC and why is it important?", a: "UGC (User-Generated Content) involves real people reviewing or using your product. It builds massive trust and currently has the highest conversion rates on Meta and TikTok." },
              { q: "Do you supply the creators for UGC?", a: "Yes, we have a massive roster of vetted creators across different demographics. We handle the scripting, shipping, filming, and editing." },
              { q: "How long does a creative batch take?", a: "Static graphics and motion design usually take 3-5 days. Full video productions or UGC campaigns take 10-14 days depending on product shipping times." },
              { q: "Do you offer just creatives, or media buying too?", a: "We offer both. You can hire us just as your creative studio, or pair it with our Performance Marketing team for an end-to-end growth solution." },
              { q: "Can you design my brand from scratch?", a: "Yes, our Brand Identity package includes logo design, typography, color palettes, and comprehensive brand guidelines." },
              { q: "What happens if a creative doesn't perform?", a: "That's why we build in volume. We test multiple angles simultaneously. If one fails, we kill it and iterate on the winners." }
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-2xl border border-slate-200 overflow-hidden cursor-pointer open:bg-slate-50 transition-colors">
                <summary className="px-6 py-5 font-bold text-[#0f172a] text-lg select-none flex justify-between items-center list-none">
                  <span>{i+1}. {faq.q}</span>
                  <span className="text-slate-400 group-open:rotate-45 transition-transform duration-300 text-2xl">+</span>
                </summary>
                <div className="px-6 pb-5 text-slate-600 leading-relaxed border-t border-slate-100 pt-4 mt-2">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CALENDLY EMBED SECTION */}
      <section id="calendly" className="py-24 bg-white relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Get a Free Creative Audit</h2>
            <p className="text-slate-600 text-lg font-medium">Let our Creative Directors analyze your current ads and brand assets to find conversion leaks.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="md:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-[#0f172a]">What We Will Discover:</h3>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Hook Rate Analysis", desc: "Why users are scrolling past your videos in the first 3 seconds and how to fix it." },
                  { num: "02", title: "Visual Consistency", desc: "A review of your brand identity to ensure you look like a premium, trustworthy market leader." },
                  { num: "03", title: "Competitor Benchmarking", desc: "We'll show you exactly what creatives your top 3 competitors are scaling right now." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-blue-500 font-black text-xl">{item.num}</span>
                    <div>
                      <h4 className="text-lg font-bold text-[#0f172a] mb-1">{item.title}</h4>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="md:w-1/2 bg-white rounded-3xl p-8 border border-slate-200 shadow-md text-center flex flex-col justify-center">
              <h4 className="text-2xl font-bold text-[#0f172a] mb-2">Schedule Session</h4>
              <p className="text-slate-500 mb-8">Select a slot on our live team calendar</p>
              <div className="space-y-4">
                <a href="https://wa.me/919424995426" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold bg-blue-600 text-white hover:bg-blue-700 transition-colors shadow-md">
                  <span className="material-symbols-outlined">chat</span> WhatsApp Direct booking
                </a>
                <a href="mailto:connect@marketops.in" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold bg-white text-slate-700 border border-slate-300 hover:bg-slate-50 transition-colors">
                  <span className="material-symbols-outlined">mail</span> Email: connect@marketops.in
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CTA */}
      <section className="py-32 bg-[#f8fafc] text-center border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-8">Ready to dominate your market?</h2>
            <p className="text-slate-600 text-xl font-medium mb-10 max-w-2xl mx-auto">
              Join the elite group of brands that are crushing their digital goals with MarketOps.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-xl px-12 py-6 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)] transition-all" href="/contact">
              Let's Build Your Empire
            </Link>
         </div>
      </section>

    </div>
  );
}
