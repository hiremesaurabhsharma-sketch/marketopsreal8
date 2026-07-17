import React from 'react';
import Link from 'next/link';
import { ShoppingBag, LayoutDashboard, Zap, Palette, Smartphone, Link2 } from 'lucide-react';

export default function WebsiteDevelopment() {
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
                Website Development
              </span>
              <h1 className="text-5xl md:text-7xl font-black tracking-tight text-[#0f172a] leading-[1.1]">
                Fast, Scalable <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-blue-500">Custom Websites.</span>
              </h1>
              <p className="text-slate-600 text-xl font-medium leading-relaxed max-w-lg">
                We engineer premium digital experiences. Lightning-fast load times, flawless responsiveness, and highly scalable architectures built to convert traffic into sales.
              </p>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <a className="inline-flex items-center justify-center text-white font-bold text-lg px-10 py-5 rounded-full bg-blue-500 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(6,182,212,0.3)] transition-all" href="#calendly">
                  Get Free Tech Audit
                </a>
                <a className="inline-flex items-center justify-center text-slate-700 font-bold text-lg px-10 py-5 rounded-full bg-white border border-slate-200 hover:bg-slate-50 hover:-translate-y-1 hover:shadow-[0_10px_20px_rgba(0,0,0,0.05)] transition-all" href="#stack">
                  View Our Tech Stack
                </a>
              </div>
            </div>
            
            <div className="lg:w-1/2 w-full relative">
              {/* Floating Dashboard Graphic */}
              <div className="relative rounded-[2.5rem] bg-white p-8 shadow-[0_30px_100px_rgba(0,0,0,0.08)] border border-slate-100 transform rotate-[-2deg] hover:rotate-0 transition-transform duration-700">
                <div className="absolute -top-6 -right-6 z-20 bg-gradient-to-r from-blue-400 to-blue-500 text-white p-6 rounded-3xl shadow-xl animate-bounce" style={{animationDuration: '3s'}}>
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Load Speed</p>
                  <p className="text-4xl font-black">99/100 ⚡</p>
                </div>
                
                <div className="absolute -bottom-10 -left-10 z-20 bg-blue-500 text-white p-6 rounded-3xl shadow-xl transform rotate-[5deg]">
                  <p className="text-sm font-bold opacity-80 uppercase tracking-widest">Uptime</p>
                  <p className="text-3xl font-black">99.99% 🌐</p>
                </div>

                <div className="space-y-6 opacity-90 relative z-10 overflow-hidden rounded-2xl">
                   <img 
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop" 
                    alt="Web development coding screen" 
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">The Engineering Framework</h2>
            <p className="text-slate-600 text-lg font-medium">We don't use clunky templates. We write clean, robust code to ensure your digital platform scales without breaking.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
             <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-400 to-blue-100 -translate-y-1/2 z-0"></div>

             {[
               {
                 step: '01',
                 title: 'UI/UX Architecture',
                 desc: 'We design intuitive user journeys that minimize friction and maximize conversions before writing a single line of code.',
                 icon: 'design_services',
                 color: 'teal'
               },
               {
                 step: '02',
                 title: 'Modern Tech Stack',
                 desc: 'We utilize Next.js, React, and serverless architectures to deliver blazing fast performance that users and search engines love.',
                 icon: 'code_blocks',
                 color: 'emerald'
               },
               {
                 step: '03',
                 title: 'Security & Scaling',
                 desc: 'Your application is built with enterprise-grade security and a scalable infrastructure capable of handling massive traffic spikes.',
                 icon: 'shield',
                 color: 'blue'
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

      {/* TECH STACK / SERVICES SECTION */}
      <section id="stack" className="py-24 bg-[#f8fafc] relative border-t border-slate-200">
        <div className="container mx-auto px-6 max-w-7xl">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Platforms & Technologies</span>
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Our Web Development Ecosystem</h2>
            <p className="text-slate-600 text-lg font-medium">We build tailored solutions using the best technologies suited for your specific business needs.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: ShoppingBag, title: 'Shopify Development', desc: 'Custom themes, headless commerce, and app integrations to build high-converting e-commerce machines.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' },
              { icon: LayoutDashboard, title: 'WordPress & CMS', desc: 'Highly customizable, SEO-friendly, and easy-to-manage content systems for blogs and corporate sites.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' },
              { icon: Zap, title: 'Custom Next.js & React', desc: 'Blazing fast, server-side rendered web applications built from the ground up for maximum scale and speed.', gradient: 'from-blue-500 to-blue-600', shadow: 'shadow-blue-500/30' },
              { icon: Palette, title: 'Webflow Development', desc: 'Pixel-perfect, animation-rich marketing websites launched with rapid speed without sacrificing quality.', gradient: 'from-blue-500 to-blue-700', shadow: 'shadow-blue-500/30' },
              { icon: Smartphone, title: 'UI/UX Design', desc: 'User-centric wireframes and stunning interfaces designed in Figma to guarantee smooth customer journeys.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' },
              { icon: Link2, title: 'API & Integrations', desc: 'Connecting your CRM, payment gateways, and third-party software for seamless automated operations.', gradient: 'from-blue-400 to-blue-500', shadow: 'shadow-blue-500/30' }
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
                 We are not just coders. We are your digital architects. Here is exactly what you achieve when you plug your business into the MarketOps ecosystem.
               </p>
               
               <div className="space-y-6 pt-4">
                 {[
                   { title: 'Lightning Fast Load Times', desc: 'Websites that load in under 2 seconds, reducing bounce rates and keeping users engaged.' },
                   { title: 'Mobile-First Perfection', desc: 'Flawless rendering on every device, from massive desktop monitors to small smartphones.' },
                   { title: 'SEO Optimized Architecture', desc: 'Code structured perfectly for Google bots, giving you an immediate technical SEO advantage.' },
                   { title: 'Zero Maintenance Headaches', desc: 'We provide ongoing support and updates so you can focus on running your business.' }
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
                  <h5 className="text-5xl font-black text-blue-400 mb-2">&lt;1s</h5>
                  <p className="text-slate-400 font-medium">Page Load Time</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">100%</h5>
                  <p className="text-slate-400 font-medium">Mobile Responsive</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">0</h5>
                  <p className="text-slate-400 font-medium">Security Breaches</p>
                </div>
                <div className="bg-slate-800/50 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 text-center hover:bg-slate-800 transition-colors mt-8">
                  <h5 className="text-5xl font-black text-blue-400 mb-2">24/7</h5>
                  <p className="text-slate-400 font-medium">Monitoring</p>
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
            <p className="text-slate-600 text-lg font-medium">Everything you need to know about our Web Design & Development process.</p>
          </div>

          <div className="space-y-4">
            {[
              { q: "How long does it take to build a website?", a: "A standard corporate website takes 3-4 weeks. Complex e-commerce stores or custom web applications take 6-12 weeks depending on the features required." },
              { q: "Do you use templates or custom code?", a: "We primarily build custom websites using Figma designs and modern frameworks like Next.js, or fully custom Shopify/WordPress themes. We avoid cheap pre-made templates." },
              { q: "Will my website be mobile-friendly?", a: "Absolutely. 100% of the websites we build are mobile-first, ensuring they look and function flawlessly on smartphones and tablets." },
              { q: "Do you provide hosting and maintenance?", a: "Yes! We offer premium cloud hosting (AWS/Vercel) and monthly maintenance packages to ensure your site is always fast, secure, and updated." },
              { q: "Can you redesign my existing website?", a: "Yes, we specialize in taking outdated, slow websites and completely transforming them into modern, high-converting digital assets." },
              { q: "Are your websites SEO optimized?", a: "Yes, technical SEO is baked into our development process. We ensure fast load times, proper tag structures, schema markup, and clean URLs." },
              { q: "Who owns the website once completed?", a: "You do. Once the project is fully paid for and launched, you own 100% of the codebase, assets, and intellectual property." }
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
            <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Get a Free Website Tech Audit</h2>
            <p className="text-slate-600 text-lg font-medium">Let our senior developers analyze your current website speed, UX bottlenecks, and conversion leaks.</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-12 bg-slate-50 rounded-[2.5rem] p-8 md:p-12 border border-slate-200 shadow-xl">
            <div className="md:w-1/2 space-y-8">
              <h3 className="text-3xl font-bold text-[#0f172a]">What We Will Discover:</h3>
              <div className="space-y-6">
                {[
                  { num: "01", title: "Speed & Core Web Vitals", desc: "Identify the exact scripts and heavy assets that are slowing down your page loads." },
                  { num: "02", title: "UX Friction Points", desc: "Discover where users are getting frustrated and abandoning their carts or forms." },
                  { num: "03", title: "Architecture Roadmap", desc: "A detailed plan to rebuild or optimize your site for maximum scale and SEO performance." }
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
                <a href="https://wa.me/919424995426" target="_blank" rel="noreferrer" className="flex items-center justify-center gap-2 w-full py-4 rounded-xl font-bold bg-blue-500 text-white hover:bg-blue-600 transition-colors shadow-md">
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
            <Link className="inline-flex items-center justify-center text-white font-bold text-xl px-12 py-6 rounded-full bg-blue-500 hover:bg-blue-600 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(6,182,212,0.4)] transition-all" href="/contact">
              Let's Build Your Platform
            </Link>
         </div>
      </section>

    </div>
  );
}
