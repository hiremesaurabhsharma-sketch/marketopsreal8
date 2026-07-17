"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, TrendingUp, Target, Mail, Server, BarChart } from 'lucide-react';

export default function EcommerceSolutions() {
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
                Ecommerce Growth Partner
              </span>
              <h1 className="text-4xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-tight md:leading-[1.1]">
                Stop Losing Sales. <br />
                Start Scaling <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-500">Revenue.</span>
              </h1>
              <p className="text-slate-600 text-base sm:text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                We don't just build stores; we engineer highly profitable e-commerce ecosystems designed to capture attention, maximize Average Order Value, and create lifelong customers.
              </p>
              
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 pt-4 w-full">
                <Link className="w-full sm:w-auto text-center inline-flex items-center justify-center text-white font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] transition-all" href="#calendly">
                  Scale My Store Now
                </Link>
                <Link className="w-full sm:w-auto text-center inline-flex items-center justify-center text-slate-700 font-bold text-base md:text-lg px-8 md:px-10 py-4 md:py-5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all" href="#capabilities">
                  View Capabilities
                </Link>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* "Man Mohne Wala" Floating Dashboard Graphic */}
              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-r from-blue-500 to-blue-700 text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Monthly ROAS</p>
                  <p className="text-4xl font-black">4.8x 🚀</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-20 bg-blue-500 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Conversion Rate</p>
                  <p className="text-3xl font-black">+142% 📈</p>
                </div>

                <div className="space-y-6 opacity-90 relative z-10">
                  <div className="flex justify-between items-end border-b border-slate-100 pb-4">
                     <div>
                       <p className="text-slate-400 font-bold text-sm">Total Sales</p>
                       <p className="text-5xl font-black text-slate-800">$2.4M</p>
                     </div>
                     <div className="bg-blue-100 text-blue-600 px-3 py-1 rounded-lg font-bold text-sm">
                       +34.5% vs last month
                     </div>
                  </div>
                  {/* Fake Graph */}
                  <div className="h-40 flex items-end justify-between gap-2 pt-4">
                    {[30, 45, 25, 60, 50, 80, 65, 90, 75, 100].map((h, i) => (
                       <div key={i} className="w-full bg-gradient-to-t from-blue-100 to-blue-500 rounded-t-md hover:bg-blue-400 transition-colors cursor-pointer" style={{height: `${h}%`}}></div>
                    ))}
                  </div>
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
               <div key={i} className="group relative z-10 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-xl shadow-slate-200/50 hover:shadow-2xl transition-all duration-500 text-center overflow-hidden flex flex-col">
                 <div className={`absolute inset-0 bg-${strategy.color}-600 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-in-out z-0`}></div>
                 <div className="relative z-10 flex flex-col items-center h-full space-y-6">
                   <div className={`mx-auto w-20 h-20 bg-${strategy.color}-100 group-hover:bg-white/20 rounded-full flex items-center justify-center border-4 border-white shadow-md relative transition-colors duration-500`}>
                      <span className={`material-symbols-outlined text-3xl text-${strategy.color}-600 group-hover:text-white transition-colors duration-500`}>{strategy.icon}</span>
                      <div className={`absolute -top-3 -right-3 bg-${strategy.color}-600 group-hover:bg-white text-white group-hover:text-${strategy.color}-600 w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm border-2 border-white transition-colors duration-500`}>
                        {strategy.step}
                      </div>
                   </div>
                   <h3 className="text-2xl font-bold text-[#0f172a] group-hover:text-white transition-colors duration-500">{strategy.title}</h3>
                   <p className="text-slate-600 group-hover:text-white/90 font-medium leading-relaxed transition-colors duration-500 flex-grow">{strategy.desc}</p>
                 </div>
               </div>
             ))}
          </div>
        </div>
      </section>

      {/* E-COMMERCE CAPABILITIES SECTION */}
      <section id="capabilities" className="py-24 bg-[#f8fafc] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Capabilities</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">End-to-End E-Commerce Solutions</h2>
            <p className="text-slate-600 text-lg font-medium">We provide everything you need to scale your online store from zero to multi-millions.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                icon: ShoppingBag, title: 'Shopify Plus Development', desc: 'Custom theme architecture and headless builds that prioritize speed, UX, and conversion.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30',
                editorial: 'In the modern eCommerce battlefield, slow and clunky stores die quickly. Our Shopify Plus development isn\'t just about making things look pretty; it\'s about building a high-speed, frictionless buying engine. We implement custom architectures, headless builds, and advanced API integrations that handle massive traffic spikes without breaking a sweat. Every pixel is engineered to reduce bounce rates, increase average order value, and guide the user seamlessly to the checkout. We transform your store into a scalable digital asset.'
              },
              { 
                icon: Target, title: 'Growth Marketing', desc: 'Omnichannel ad strategies across Meta, Google, and TikTok to acquire high-intent buyers profitably.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30',
                editorial: 'Traffic is useless if it doesn\'t convert. Our Growth Marketing methodology revolves around acquiring highly qualified, intent-driven traffic at the lowest possible cost. We build omnichannel funnels across Meta, Google Ads, and TikTok, utilizing advanced server-side tracking (CAPI) and dynamic product ads. By aggressively testing creatives and leveraging machine learning algorithms, we continuously drive down your Customer Acquisition Cost (CAC) while scaling your daily revenue.'
              },
              { 
                icon: TrendingUp, title: 'Conversion Rate Optimization', desc: 'A/B testing, heatmap analysis, and UI improvements to squeeze more revenue out of your existing traffic.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30',
                editorial: 'Why pay for more traffic when you can generate more revenue from the visitors you already have? Our Conversion Rate Optimization (CRO) experts dive deep into user psychology, deploying heatmaps, session recordings, and rigorous A/B testing. We identify exactly where users drop off—whether it\'s confusing navigation, a cluttered product page, or a lengthy checkout—and systematically eliminate that friction. A 1% increase in conversion rate can double your profit margins overnight.'
              },
              { 
                icon: Mail, title: 'Email & SMS Automation', desc: 'Complex Klaviyo flows that recover abandoned carts, nurture leads, and maximize Customer Lifetime Value.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30',
                editorial: 'Your most profitable customers are the ones you already have. We build highly sophisticated retention engines using Klaviyo and SMS to maximize your Customer Lifetime Value (LTV). From multi-step abandoned cart recoveries that claw back lost revenue, to hyper-personalized post-purchase flows that build brand loyalty, we ensure you stay top-of-mind. We automate revenue generation so your brand makes money on autopilot, 24/7.'
              },
              { 
                icon: Server, title: 'Headless Commerce', desc: 'Decoupled frontend architectures using Next.js for blazing fast load times and limitless customization.', gradient: 'from-slate-700 to-slate-900', shadow: 'shadow-slate-700/30',
                editorial: 'Traditional monolithic eCommerce platforms often limit creativity and suffer from poor page load speeds. Headless Commerce solves this by decoupling your frontend storefront from the backend logic. We utilize modern frameworks like Next.js and React to build bespoke, lightning-fast interfaces while relying on robust backends like Shopify or BigCommerce for order management. The result? Unprecedented speed, limitless design freedom, and a significantly higher conversion rate.'
              },
              { 
                icon: BarChart, title: 'Advanced Data Analytics', desc: 'Custom data pipelines and dashboards that track every single touchpoint and penny of your ad spend.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30',
                editorial: 'You can\'t scale what you can\'t measure. In a post-iOS 14 world, standard pixel tracking is wildly inaccurate. We engineer custom data pipelines and server-side tracking solutions to give you a single source of truth. We build real-time dashboards utilizing Looker Studio and Triple Whale that display your true Marketing Efficiency Ratio (MER), Profit on Ad Spend (POAS), and blended CAC. With us, you make decisions based on hard data, not gut feelings.'
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

      {/* 3. WHAT YOU GET (Logo ko kya milega) */}
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
                  <h5 className="text-5xl font-black text-blue-400 mb-2">3x</h5>
                  <p className="text-slate-400 font-medium">Average ROAS</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">99%</h5>
                  <p className="text-slate-400 font-medium">Uptime Guarantee</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">-40%</h5>
                  <p className="text-slate-400 font-medium">Cart Abandonment Drop</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">24/7</h5>
                  <p className="text-slate-400 font-medium">Dedicated Support</p>
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
            <p className="text-slate-600 text-lg font-medium">Everything you need to know about our E-Commerce services.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "Do you only work with Shopify?", a: "While we highly recommend Shopify and Shopify Plus for most brands, our development team is also proficient in WooCommerce, BigCommerce, and custom Headless builds." },
              { q: "How much ad spend is required to work with you?", a: "For our growth marketing services, we typically require a minimum ad spend of $5,000/month to ensure we have enough data to optimize and scale effectively." },
              { q: "What is your typical turnaround time for a new store build?", a: "A standard custom Shopify theme takes 4-6 weeks. A complex headless architecture or major migration can take 8-12 weeks." },
              { q: "Do you offer CRO as a standalone service?", a: "Yes, we offer ongoing Conversion Rate Optimization retainers where we run constant A/B tests to improve your existing store's performance." },
              { q: "How do you handle reporting?", a: "We build custom live dashboards using tools like Looker Studio and Triple Whale, giving you 24/7 access to your true ROAS, MER, and profit margins." },
              { q: "Will you manage our inventory or fulfillment?", a: "No, we strictly handle the digital side: development, marketing, and retention. We can, however, recommend top-tier 3PL partners if needed." }
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Get a Free Store Growth Audit</h2>
            <p className="text-slate-600 text-lg font-medium">Let our e-commerce strategists analyze your store, ad accounts, and funnels to find hidden revenue.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="md:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-[#0f172a]">What We Will Discover:</h3>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Conversion Bottlenecks", desc: "Identify exactly where users are dropping off in your funnel and cart." },
                  { num: "02", title: "Ad Spend Inefficiencies", desc: "We'll audit your Meta & Google ads to see where you're wasting money." },
                  { num: "03", title: "Scaling Roadmap", desc: "A clear, actionable plan to increase your Revenue and Profit Margin over the next 90 days." }
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

      {/* 4. CTA (Closing) */}
      <section className="py-32 bg-[#f8fafc] text-center">
         <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl md:text-6xl font-black text-[#0f172a] mb-8">Ready to dominate your market?</h2>
            <p className="text-slate-600 text-xl font-medium mb-10 max-w-2xl mx-auto">
              Join the elite group of eCommerce brands that are crushing their revenue goals with MarketOps.
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
