import React from 'react';
import Link from 'next/link';
import { TrendingDown, CircleDollarSign, Zap, ShieldAlert, FileEdit, Globe, MapPin, Settings, ShoppingBag, TrendingUp } from 'lucide-react';

export default function SEOOptimization() {
  return (
    <div className="bg-[#f8fafc] min-h-screen font-inter text-[#0f172a] overflow-hidden">
      
      {/* 1. HERO SECTION (Engaging & Captivating) */}
      <section className="relative pt-40 pb-32">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(245,158,11,0.15),transparent_50%)] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(249,115,22,0.15),transparent_50%)] pointer-events-none"></div>
        
        <div className="container mx-auto px-6 max-w-7xl relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="lg:w-1/2 space-y-8">
              <span className="inline-block bg-amber-100 text-amber-700 text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-sm border border-amber-200">
                SEO Optimization
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
                Rank Higher. <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-500">Dominate Search.</span>
              </h1>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                Stop paying for every single click. Build long-term authority, organic traffic channels, and reliable search ranks that drive sales while you sleep.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a className="inline-flex items-center justify-center text-white font-bold text-lg px-10 py-5 rounded-full bg-amber-500 hover:bg-amber-600 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(245,158,11,0.3)] transition-all" href="#calendly">
                  Get Free SEO Audit
                </a>
                <a className="inline-flex items-center justify-center text-slate-700 font-bold text-lg px-10 py-5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all" href="#challenges">
                  See SEO Challenges
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* Floating Dashboard Graphic */}
              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-r from-amber-400 to-orange-500 text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Organic Traffic</p>
                  <p className="text-4xl font-black">+210% 📈</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-20 bg-emerald-500 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Page 1 Ranks</p>
                  <p className="text-3xl font-black">100+ 🏆</p>
                </div>

                <div className="space-y-6 opacity-90 relative z-10 overflow-hidden rounded-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=2070&auto=format&fit=crop" 
                    alt="Person analyzing SEO charts" 
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
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Common Challenges</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Common Challenges Before SEO in Today’s Digital Era</h2>
            <p className="text-slate-600 text-lg font-medium">Organic search landscape is highly competitive. Without smart SEO, your website gets buried under competitors.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: TrendingDown, title: 'Low Organic Reach', desc: 'Websites struggle to get traffic without proper optimization strategies. You might have a great design, but search engines simply cannot discover your pages.', color: 'red' },
              { icon: CircleDollarSign, title: 'Increasing Ad Costs', desc: 'Paid advertising is expensive and rates rise every quarter, making organic SEO an absolute necessity to maintain high overall business margins and healthy ROI.', color: 'orange' },
              { icon: Zap, title: 'Slow Website Speed', desc: 'Slow loading speed, poor mobile experience, and bad technical structures directly ruin search visibility rankings and push buyers to click away.', color: 'amber' },
              { icon: ShieldAlert, title: 'Poor User Experience', desc: 'Missing standard search engine optimization configurations leads to poor structure, broken navigation flows, and technical security indexing issues.', color: 'rose' }
            ].map((v, i) => (
              <div key={i} className="group relative bg-white p-8 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col overflow-hidden">
                <div className={`absolute top-0 right-0 w-32 h-32 bg-${v.color}-500 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-bl-full pointer-events-none`}></div>
                <div className={`w-14 h-14 rounded-2xl bg-${v.color}-50 flex items-center justify-center text-${v.color}-500 mb-6 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300`}>
                  <v.icon size={28} strokeWidth={2} />
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm font-medium">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. OUR STRATEGY */}
      <section className="py-24 bg-[#f8fafc] relative">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">Our Strategy</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">The SEO Growth Blueprint</h2>
            <p className="text-slate-600 text-lg font-medium">We use data-driven, white-hat frameworks to permanently claim rankings on search engines.</p>
          </div>

          <div className="grid md:grid-cols-5 gap-4 relative">
             {[
               { step: '01', title: 'Audit', desc: 'Deep technical crawling to find indexing errors.', icon: 'engineering', color: 'orange' },
               { step: '02', title: 'Keyword', desc: 'Finding high-intent terms for maximum conversion.', icon: 'search', color: 'amber' },
               { step: '03', title: 'Optimize', desc: 'On-page changes, meta tuning, and content structure.', icon: 'edit_document', color: 'emerald' },
               { step: '04', title: 'Link Building', desc: 'High authority backlinks to build global trust signals.', icon: 'link', color: 'blue' },
               { step: '05', title: 'Reporting', desc: 'Transparent KPI reporting and rank adjustments.', icon: 'monitoring', color: 'purple' }
             ].map((strategy, i) => (
               <div key={i} className="relative z-10 bg-white p-6 rounded-3xl border border-slate-200 shadow-md hover:-translate-y-2 transition-transform duration-500 text-center space-y-4 flex flex-col items-center">
                 <div className={`text-${strategy.color}-500 text-5xl font-black opacity-20 absolute top-4 right-4`}>{strategy.step}</div>
                 <div className={`w-16 h-16 bg-${strategy.color}-100 rounded-2xl flex items-center justify-center`}>
                    <span className={`material-symbols-outlined text-2xl text-${strategy.color}-600`}>{strategy.icon}</span>
                 </div>
                 <h3 className="text-lg font-bold text-[#0f172a]">{strategy.title}</h3>
                 <p className="text-slate-600 font-medium text-sm leading-relaxed">{strategy.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* SERVICE VERTICALS */}
      <section className="py-24 bg-white relative border-t border-slate-100">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">SEO Verticals</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Our Comprehensive SEO Services</h2>
            <p className="text-slate-600 text-lg font-medium">Dedicated search strategies engineered for every business model.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: FileEdit, title: 'On-Page SEO', desc: 'Improves rankings, increases organic traffic, enhances user experience, and helps search engines understand and index your website content effectively.', gradient: 'from-amber-400 to-orange-500', shadow: 'shadow-orange-500/30' },
              { icon: Globe, title: 'Off-Page SEO', desc: 'Builds website authority through backlinks, brand mentions, and external signals, improving rankings, trust, credibility, and organic traffic.', gradient: 'from-blue-500 to-indigo-600', shadow: 'shadow-blue-500/30' },
              { icon: MapPin, title: 'Local SEO', desc: 'Helps your business appear in nearby searches, improves Google Maps visibility, attracts local customers, and increases calls, visits, and sales.', gradient: 'from-red-500 to-rose-600', shadow: 'shadow-red-500/30' },
              { icon: Settings, title: 'Technical SEO', desc: 'Improves website speed, crawlability, indexing, mobile performance, and security, helping search engines understand your site.', gradient: 'from-slate-700 to-slate-900', shadow: 'shadow-slate-700/30' },
              { icon: ShoppingBag, title: 'E-Commerce SEO', desc: 'Improves product visibility, boosts organic traffic, enhances rankings, and increases online sales by optimizing product pages and categories.', gradient: 'from-emerald-400 to-teal-500', shadow: 'shadow-teal-500/30' },
              { icon: TrendingUp, title: 'Landing Page Optimization', desc: 'Increases conversions, improves user experience, and reduces bounce rate for better leads and sales.', gradient: 'from-purple-500 to-fuchsia-600', shadow: 'shadow-purple-500/30' }
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
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-amber-600/20 blur-[150px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-600/20 blur-[150px] rounded-full pointer-events-none"></div>

        <div className="container mx-auto px-6 max-w-7xl relative z-10">
           <div className="flex flex-col md:flex-row gap-16 items-center">
             
             <div className="md:w-1/2 space-y-8">
               <h2 className="text-4xl md:text-5xl font-black text-white">What You Get <br/><span className="text-amber-400">When You Partner With Us</span></h2>
               <p className="text-slate-400 text-lg font-medium max-w-lg">
                 We are not just another agency. We are your search partners. Here is exactly what you achieve when you plug your business into the MarketOps ecosystem.
               </p>
               
               <div className="space-y-6 pt-4">
                 {[
                   { title: 'Free, Passive Traffic', desc: 'Once ranked, you capture thousands of clicks monthly without paying a cent for ad spend.' },
                   { title: 'High Intent Leads', desc: 'Users searching on Google already want what you are selling. Conversion rates are astronomically high.' },
                   { title: 'Brand Credibility', desc: 'Ranking #1 instantly establishes your brand as the trusted authority in your niche.' },
                   { title: 'Long-Term Compound Growth', desc: 'Unlike ads that stop when you stop paying, SEO continues to yield results for years.' }
                 ].map((benefit, i) => (
                   <div key={i} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-amber-500/20 flex items-center justify-center shrink-0 mt-1">
                        <span className="material-symbols-outlined text-amber-400 text-[18px]">check</span>
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
                  <h5 className="text-5xl font-black text-orange-400 mb-2">#1</h5>
                  <p className="text-slate-400 font-medium">Rankings Secured</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-amber-400 mb-2">5x</h5>
                  <p className="text-slate-400 font-medium">Traffic Increase</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-yellow-400 mb-2">90+</h5>
                  <p className="text-slate-400 font-medium">Domain Rating</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-emerald-400 mb-2">0$</h5>
                  <p className="text-slate-400 font-medium">Cost Per Click</p>
                </div>
             </div>

           </div>
        </div>
      </section>

      {/* FAQS SECTION */}
      <section className="py-24 bg-[#f8fafc] border-b border-slate-200">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16 space-y-4">
            <span className="text-amber-600 font-bold tracking-widest uppercase text-sm">FAQ</span>
            <h2 className="text-3xl md:text-5xl font-black text-[#0f172a]">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg font-medium">Everything you need to know about our SEO and Rank Optimization solutions.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "What is SEO and how does it work?", a: "SEO (Search Engine Optimization) improves your website's organic visibility on search engines like Google by optimizing content relevance, keywords, and technical structure." },
              { q: "How long does SEO take to show results?", a: "SEO typically takes 3–6 months to establish initial authority and rankings depending on search competition, website condition, and niche keywords strategy." },
              { q: "Do you provide Local SEO services?", a: "Yes, Local SEO services help your business rank at the top of nearby localized searches and Google Maps business listings." },
              { q: "Is SEO better than paid ads?", a: "SEO gives compound, long-term organic results and high authority without recurring spend per click, while paid ads provide instant but temporary traffic." },
              { q: "Will SEO increase my sales?", a: "Yes, by targeting users who are actively searching for your products or services, SEO drives highly qualified, high-intent traffic to improve conversions and sales growth." },
              { q: "What is E-commerce SEO?", a: "E-commerce SEO optimizes product listing pages, parent category links, brand collections, and overall store navigation patterns to boost organic transactions." },
              { q: "How do you measure SEO success?", a: "We measure results using Google Search Console and analytics to track organic keyword impressions, search visibility, rankings, and conversions." },
              { q: "Do you fix SEO issues on existing websites?", a: "Yes, we perform extensive audits and fix technical layout, on-page content, slow speed loads, and indexing issues on legacy setups." },
              { q: "Is SEO a one-time process?", a: "No, SEO is an ongoing maintenance and growth process. Competitors, search algorithms, and consumer behavior shift continuously, necessitating regular optimization." },
              { q: "What is a Google ranking factor?", a: "Google ranks sites based on over 200 signals, primarily content relevance and depth, backlink authority, page speed, mobile adaptability, and core web vitals." }
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Setup Your Free Organic SEO Audit</h2>
            <p className="text-slate-600 text-lg font-medium">Connect with an organic ranking specialist today to analyze search visibility gaps and technical glitches.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="md:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-[#0f172a]">What We Will Discover:</h3>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Organic Keyword Indexing Gaps", desc: "Find the high-intent keywords driving leads to your top competitors that you rank poorly for." },
                  { num: "02", title: "Core Technical SEO Checklist", desc: "Identify crawl budget drains, missing schemas, broken URLs, and site performance blockers." },
                  { num: "03", title: "Authority Scaling Strategy", desc: "A solid off-page backlink roadmap to increase your domain authority score organically." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <span className="text-amber-500 font-black text-xl">{item.num}</span>
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
                <a href="https://wa.me/919424995426" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold bg-amber-500 text-white hover:bg-amber-600 transition-colors shadow-md">
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
              Join the elite group of brands that are crushing their organic goals with MarketOps.
            </p>
            <Link className="inline-flex items-center justify-center text-white font-bold text-xl px-12 py-6 rounded-full bg-amber-500 hover:bg-amber-600 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(245,158,11,0.4)] transition-all" href="/contact">
              Let's Build Your Empire
            </Link>
         </div>
      </section>

    </div>
  );
}
