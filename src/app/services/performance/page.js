"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { Users, Search, Music, Briefcase, TrendingDown, Bot, TriangleAlert } from 'lucide-react';

export default function PerformanceMarketing() {
  const [activeEditorial, setActiveEditorial] = useState(null);

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
                Performance Marketing
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
                Smarter Ads. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-700">Better Conversions.</span>
              </h1>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                Stop guessing. We leverage aggressive data-driven media buying across Google, Meta, TikTok, and LinkedIn to scale your brand predictably and profitably.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a className="inline-flex items-center justify-center text-white font-bold text-lg px-10 py-5 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] transition-all" href="#calendly">
                  Get Free Account Audit
                </a>
                <a className="inline-flex items-center justify-center text-slate-700 font-bold text-lg px-10 py-5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all" href="#challenges">
                  View Ad Challenges
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* Floating Dashboard Graphic */}
              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-r from-blue-500 to-blue-500 text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">CPA Reduction</p>
                  <p className="text-4xl font-black">-35% 📉</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-20 bg-blue-600 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">ROAS</p>
                  <p className="text-3xl font-black">400%+ ⭐</p>
                </div>

                <div className="space-y-6 opacity-90 relative z-10 overflow-hidden rounded-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop" 
                    alt="Marketing data analytics dashboard" 
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CHALLENGES SECTION */}
      <section id="challenges" className="py-24 bg-white border-t border-slate-100 relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Common Ad Challenges</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Why Brands Struggle with Paid Media Today</h2>
            <p className="text-slate-600 text-lg font-medium">Burning cash on ads without a system is a one-way ticket to failure. We fix these critical errors.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: TrendingDown, title: 'Creative Fatigue', desc: 'Ad creatives burn out quickly. Stale visuals and copy result in plummeting click-through rates and soaring CPMs.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30' },
              { icon: Bot, title: 'Poor Pixel Tracking', desc: 'IOS updates killed standard tracking. Without server-side API setups, Facebook and Google cannot optimize for your best customers.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' },
              { icon: TriangleAlert, title: 'Scale Bottlenecks', desc: 'Campaigns do great at $100/day but completely break down when scaled to $1,000/day. We build frameworks meant for aggressive scaling.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' }
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
                    See Solution <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR STRATEGY */}
      <section className="py-24 bg-[#f8fafc] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Our Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Media Buying Methodology</h2>
            <p className="text-slate-600 text-lg font-medium">We treat your ad spend like our own money. Our methodology is ruthless, data-driven, and highly profitable.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
             {[
               { step: '01', title: 'Audit & Tracking', desc: 'Implementing CAPI and server-side tracking to capture 100% of data.', icon: 'track_changes', gradient: 'from-blue-400 to-blue-500', iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
               { step: '02', title: 'Creative Engineering', desc: 'Producing scroll-stopping hooks and direct-response creatives.', icon: 'design_services', gradient: 'from-blue-500 to-blue-500', iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
               { step: '03', title: 'Hyper-Targeting', desc: 'Advanced audience segmentation and lookalikes modeling.', icon: 'my_location', gradient: 'from-blue-500 to-blue-600', iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
               { step: '04', title: 'Algorithm Mastery', desc: 'Feeding signals to Meta/Google machine learning for efficiency.', icon: 'memory', gradient: 'from-blue-400 to-blue-500', iconBg: 'bg-blue-100', iconColor: 'text-blue-500' },
               { step: '05', title: 'Ruthless Scaling', desc: 'Cutting losers and aggressively funding winners to maximize ROI.', icon: 'rocket_launch', gradient: 'from-blue-400 to-blue-500', iconBg: 'bg-blue-100', iconColor: 'text-blue-500' }
             ].map((strategy, i) => (
               <div key={i} className="group h-full relative z-10 bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.12)] hover:-translate-y-3 transition-all duration-700 ease-out text-left overflow-hidden flex flex-col items-start">
                 {/* Elegant Slide-up Gradient */}
                 <div className={`absolute inset-0 bg-gradient-to-br ${strategy.gradient} translate-y-[101%] group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] z-0`}></div>
                 
                 {/* Creative Glassmorphism Bloom */}
                 <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-white/10 backdrop-blur-2xl rounded-full scale-0 group-hover:scale-100 transition-transform duration-700 ease-out z-0"></div>
                 
                 <div className="relative z-10 flex flex-col items-start h-full space-y-4 w-full">
                   
                   {/* Top Row: Bare Icon & Outline Number */}
                   <div className="flex justify-between items-start w-full mb-2">
                      <span className={`material-symbols-outlined text-[3.5rem] ${strategy.iconColor} group-hover:text-white transition-all duration-700 group-hover:scale-110 group-hover:-rotate-6 transform`}>
                        {strategy.icon}
                      </span>
                      
                      <div className="text-5xl font-black text-transparent [-webkit-text-stroke:1px_#cbd5e1] group-hover:[-webkit-text-stroke:1px_rgba(255,255,255,0.4)] transition-all duration-700">
                        {strategy.step}
                      </div>
                   </div>
                   
                   {/* Animated Expanding Divider */}
                   <div className="w-full h-px bg-slate-100 group-hover:bg-white/20 transition-colors duration-700 relative overflow-hidden">
                     <div className="absolute top-0 left-0 h-full w-0 bg-white group-hover:w-full transition-all duration-1000 ease-out"></div>
                   </div>
                   
                   <h3 className="text-xl font-black text-[#0f172a] group-hover:text-white transition-colors duration-700 z-10 pt-2">{strategy.title}</h3>
                   <p className="text-slate-500 font-medium text-sm leading-relaxed group-hover:text-white/90 transition-colors duration-700 z-10 flex-grow">{strategy.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* CHANNELS SECTION */}
      <section className="py-24 bg-white relative border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Ad Networks</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Omnichannel Dominance</h2>
            <p className="text-slate-600 text-lg font-medium">We deploy capital across the most profitable networks for your specific niche.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              { 
                icon: Users, title: 'Meta Ads (FB & IG)', desc: 'Unmatched demographic targeting and visual selling. We build complex funnel structures for e-commerce and lead gen.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30',
                editorial: 'Meta (Facebook & Instagram) is unparalleled for visual selling and demographic targeting. We don\'t just \'boost posts.\' We engineer highly structured ad accounts utilizing Advantage+ Shopping, custom audiences, and dynamic retargeting. By rapidly testing creative variations—from UGC to polished graphics—we find the winning angles that force the algorithm to deliver low-cost conversions at scale. Whether it\'s lead gen or e-commerce, we turn Meta into a predictable revenue machine.'
              },
              { 
                icon: Search, title: 'Google Ads', desc: 'Capture high-intent search traffic. We dominate Search, Shopping, Performance Max, and YouTube ad placements.', gradient: 'from-blue-500 via-blue-500 to-blue-500', shadow: 'shadow-blue-500/30',
                editorial: 'Google Ads is where high-intent buyers go when they are ready to purchase. We dominate the search engine results page (SERP) by targeting exact-match keywords that your competitors miss. Our strategy extends beyond simple search; we build highly profitable Performance Max (PMax) campaigns, optimize Google Shopping feeds, and utilize YouTube ads for top-of-funnel awareness. We capture demand that already exists and convert it ruthlessly.'
              },
              { 
                icon: Music, title: 'TikTok Ads', desc: 'Explosive viral growth and low CPMs. We create raw, UGC-style creatives that native audiences love to engage with.', gradient: 'from-zinc-900 to-zinc-700', shadow: 'shadow-zinc-900/30',
                editorial: 'TikTok is no longer just for dancing; it\'s a massive conversion engine. The secret to TikTok ads is that they shouldn\'t look like ads. We specialize in producing raw, lo-fi, User-Generated Content (UGC) that feels native to the platform. By leveraging fast-paced editing, trending audio, and strong psychological hooks in the first 3 seconds, we capture Gen Z and Millennial attention, resulting in explosive viral growth and incredibly low CPMs.'
              },
              { 
                icon: Briefcase, title: 'LinkedIn Ads', desc: 'The holy grail for B2B. Target decision-makers by job title, company size, and industry for premium lead generation.', gradient: 'from-blue-600 to-blue-700', shadow: 'shadow-blue-600/30',
                editorial: 'For B2B companies, LinkedIn is the holy grail of lead generation. We bypass the gatekeepers and put your offer directly in front of the decision-makers. We utilize advanced firmographic targeting to zero in on specific job titles, company sizes, and industries. Through a mix of Sponsored Content, InMail campaigns, and Lead Gen Forms, we fill your pipeline with high-ticket, qualified prospects who are ready to talk business.'
              }
            ].map((v, i) => (
              <div key={i} onClick={() => setActiveEditorial(v)} className="group cursor-pointer relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden text-left">
                <div className={`absolute inset-0 bg-gradient-to-br ${v.gradient} translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0`}></div>
                
                <div className="relative z-10 flex flex-col h-full">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${v.gradient} group-hover:bg-none group-hover:bg-white/20 flex items-center justify-center text-white mb-6 shadow-lg ${v.shadow} group-hover:shadow-none transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-500`}>
                    <v.icon size={28} strokeWidth={2.5} />
                  </div>
                  <h3 className="text-2xl font-black text-[#0f172a] group-hover:text-white mb-3 transition-colors duration-500">{v.title}</h3>
                  <p className="text-slate-600 group-hover:text-white/90 leading-relaxed text-sm font-medium transition-colors duration-500 flex-grow">{v.desc}</p>
                  
                  <div className="mt-6 flex items-center text-sm font-bold opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-white transition-all duration-500 delay-100">
                    Read Editorial <span className="ml-2 group-hover:translate-x-2 transition-transform duration-300">→</span>
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
                 We are not just another agency. We are your performance partners. Here is exactly what you achieve when you plug your business into the MarketOps ecosystem.
               </p>
               
               <div className="space-y-6 pt-4">
                 {[
                   { title: 'Predictable Revenue Generation', desc: 'Stop guessing. We build sales funnels that consistently generate high-quality leads and sales.' },
                   { title: 'Optimized Cost Per Acquisition', desc: 'We continuously A/B test creatives and audiences to keep your CAC as low as humanly possible.' },
                   { title: 'Omnichannel Retargeting', desc: 'Following your prospects across the web until they finally convert into paying customers.' },
                   { title: 'Full Transparency', desc: 'No vanity metrics. You get custom reporting dashboards showing exact ROI on every dollar spent.' }
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
                  <h5 className="text-5xl font-black text-blue-400 mb-2">4x</h5>
                  <p className="text-slate-400 font-medium">Return on Ad Spend</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">-35%</h5>
                  <p className="text-slate-400 font-medium">Drop in CAC</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">10k+</h5>
                  <p className="text-slate-400 font-medium">Leads Generated</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">100%</h5>
                  <p className="text-slate-400 font-medium">Data Transparency</p>
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
            <p className="text-slate-600 text-lg font-medium">Everything you need to know about our Performance Marketing solutions.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is a good starting budget for ads?", a: "We recommend a minimum of $3,000 to $5,000 per month in ad spend to effectively test creatives, audiences, and generate statistically significant data." },
              { q: "Do you create the ad creatives for us?", a: "Yes, our in-house creative team designs high-converting image and video assets tailored specifically for direct-response marketing." },
              { q: "How do you track conversions accurately?", a: "We implement advanced server-side tracking (like Facebook Conversions API and Google Enhanced Conversions) to bypass iOS restrictions and track accurately." },
              { q: "When can we expect to see results?", a: "While we often see quick wins in the first week, a full campaign maturation and stabilization typically takes 30 to 60 days of aggressive testing." },
              { q: "Do you run B2B or B2C campaigns?", a: "Both. We use Google and LinkedIn for high-ticket B2B lead generation, and Meta/TikTok for B2C e-commerce scaling." },
              { q: "How is your performance marketing different?", a: "We don't focus on vanity metrics like 'likes' or 'impressions'. We focus purely on CPA, ROAS, and net profit margins." },
              { q: "What happens if an ad stops working?", a: "Ad fatigue is normal. We proactively launch new creative variations and angles every single week to ensure performance never drops." }
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Get a Free Ad Account Audit</h2>
            <p className="text-slate-600 text-lg font-medium">Let our senior media buyers peek into your accounts and show you exactly where you are bleeding money.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="md:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-[#0f172a]">What We Will Discover:</h3>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Wasted Spend Analysis", desc: "Identify the campaigns and keywords draining your budget without driving conversions." },
                  { num: "02", title: "Tracking Infrastructure", desc: "Check if your pixel and server-side tracking are actually passing the right data back to the platforms." },
                  { num: "03", title: "Scaling Roadmap", desc: "A concrete, step-by-step mathematical plan on how to drop your CPA and scale your budget." }
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
              Join the elite group of brands that are crushing their revenue goals with MarketOps.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-xl px-12 py-6 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)] transition-all" href="/contact">
              Let's Build Your Empire
            </Link>
         </div>
      </section>

      {/* EDITORIAL MODAL */}
      {activeEditorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 lg:p-8">
          <div className="absolute inset-0 bg-[#0f172a]/60 backdrop-blur-sm transition-opacity" onClick={() => setActiveEditorial(null)}></div>
          <div className="relative w-full max-w-2xl bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-in fade-in zoom-in duration-300">
            {/* Header/Gradient */}
            <div className={`h-32 w-full bg-gradient-to-br ${activeEditorial.gradient} relative shrink-0`}>
               <button onClick={() => setActiveEditorial(null)} className="absolute top-6 right-6 w-10 h-10 bg-white/20 hover:bg-white/40 rounded-full flex items-center justify-center text-white transition-colors backdrop-blur-sm z-10">
                 <span className="material-symbols-outlined font-bold">close</span>
               </button>
               {/* Icon */}
               <div className="absolute -bottom-10 left-8 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center p-1">
                 <div className={`w-full h-full rounded-xl bg-gradient-to-br ${activeEditorial.gradient} flex items-center justify-center text-white`}>
                   <activeEditorial.icon size={36} strokeWidth={2.5} />
                 </div>
               </div>
            </div>
            
            {/* Content */}
            <div className="pt-16 pb-10 px-8 md:px-12 overflow-y-auto">
              <span className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2 block">MarketOps Editorial</span>
              <h3 className="text-3xl md:text-4xl font-black text-[#0f172a] mb-6 leading-tight">{activeEditorial.title}</h3>
              <p className="text-lg text-slate-600 leading-relaxed font-medium">
                {activeEditorial.editorial}
              </p>
              
              <div className="mt-10 pt-8 border-t border-slate-100 flex items-center justify-between">
                <button onClick={() => setActiveEditorial(null)} className="text-slate-500 font-bold hover:text-slate-800 transition-colors">
                  Close Reading
                </button>
                <button onClick={() => { setActiveEditorial(null); window.location.href = '#calendly'; }} className={`px-6 py-3 rounded-full text-white font-bold bg-gradient-to-r ${activeEditorial.gradient} shadow-md hover:shadow-lg transition-all hover:-translate-y-1`}>
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
