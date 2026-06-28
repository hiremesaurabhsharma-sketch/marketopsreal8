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

  useEffect(() => {
    // Preload images
    const loadImages = async () => {
      const loadedImages = [];
      let loadedCount = 0;
      
      for (let i = 1; i <= frameCount; i++) {
        const img = new window.Image();
        img.src = currentFrame(i);
        
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setLoaded(true);
          }
        };
        
        img.onerror = () => {
          loadedCount++;
          if (loadedCount === frameCount) setLoaded(true);
        };
        
        loadedImages.push(img.src);
      }
      setImages(loadedImages);
    };
    
    loadImages();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !loaded) return;
      
      const scrollTop = window.scrollY - containerRef.current.offsetTop;
      const maxScrollTop = containerRef.current.scrollHeight - window.innerHeight;
      
      // Calculate scroll fraction
      const scrollFraction = Math.max(0, Math.min(1, scrollTop / maxScrollTop));
      
      // Map fraction to frame index
      const newFrameIndex = Math.min(frameCount - 1, Math.floor(scrollFraction * frameCount)) + 1;
      
      setFrameIndex(newFrameIndex);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loaded]);

  return (
    <div className="bg-[#f8fafc] min-h-screen relative text-[#0f172a] font-inter">
      
      {/* Intro text */}
      <div className="pt-40 pb-20 text-center px-6 relative z-10 bg-gradient-to-b from-[#3b82f6] to-[#e0f2fe] overflow-hidden rounded-b-[3rem] shadow-sm">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-white/30 blur-[120px] rounded-full"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-blue-400/20 blur-[120px] rounded-full"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px]"></div>
        </div>

        <div className="relative z-10">
          <span className="inline-block bg-blue-600 text-white text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest mb-6 shadow-lg shadow-blue-500/30">
            The MarketOps Blueprint
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-[#0f172a] pb-6">
            How We Scale <br className="hidden md:block"/>
            <span className="text-blue-700">Your Brand to Millions</span>
          </h1>
          <p className="text-slate-700 text-xl md:text-2xl font-semibold max-w-2xl mx-auto leading-relaxed">
            We don't just run ads. We build highly scalable, data-driven growth engines that turn clicks into loyal customers and revenue.
          </p>
        </div>
      </div>

      {/* Animation Container - Shorter scroll length (250vh instead of 400vh) */}
      <div ref={containerRef} className="relative w-full h-[250vh] bg-[#f8fafc] z-20">
        <div className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center bg-[#f8fafc] pt-10">
          
          {!loaded && (
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 z-20 bg-[#f8fafc]">
              <div className="w-10 h-10 border-4 border-slate-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-blue-600 font-bold tracking-widest uppercase text-xs">Loading Experience...</p>
            </div>
          )}

          {/* Using img tag fixes pixelation from devicePixelRatio issues with canvas */}
          <div className="relative w-full max-w-5xl mx-auto px-4 h-[60vh] md:h-[70vh] flex items-center justify-center rounded-[2.5rem] overflow-hidden shadow-[0_20px_80px_rgba(59,130,246,0.15)] border border-slate-200 bg-white">
            {loaded && images.length > 0 ? (
              <img 
                src={images[frameIndex - 1]} 
                alt="Scroll Animation Frame" 
                className="w-full h-full object-cover transition-opacity duration-300 rounded-[2.5rem]"
              />
            ) : null}
            
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent pointer-events-none"></div>
            
            <div className="absolute bottom-8 left-8 md:bottom-12 md:left-12 z-10 pointer-events-none max-w-lg">
              <h2 className="text-3xl md:text-5xl font-black text-white tracking-tight drop-shadow-lg">
                Precision Targeting.
              </h2>
              <p className="text-lg md:text-xl font-medium text-slate-100 mt-2 drop-shadow-md">
                Every frame, every pixel, optimized for maximum conversion and ROI.
              </p>
            </div>
          </div>

        </div>
      </div>
      
      {/* Marketing / Strategy Sections */}
      <div className="relative z-10 bg-[#f8fafc]">
        
        {/* Phase 1 */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Phase 01</span>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0f172a]">Deep-Dive Brand Audit</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Before spending a single dollar on ads, we dissect your brand's current positioning, past campaigns, customer persona, and competitors. We find the leaks in your funnel and fix them.
              </p>
              <ul className="space-y-4 pt-4">
                {['Audience Persona Mapping', 'Competitor Ad Library Analysis', 'Landing Page Conversion Rate Optimization'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-semibold">
                    <span className="material-symbols-outlined text-blue-600 bg-blue-100 rounded-full w-6 h-6 flex items-center justify-center text-[14px]">check</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50/80 rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
               <div className="space-y-8 relative z-10">
                 <div className="h-14 w-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600">
                    <span className="material-symbols-outlined text-3xl">troubleshoot</span>
                 </div>
                 <h4 className="text-2xl font-bold text-[#0f172a]">Data is our compass.</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">We don't guess. Our proprietary audit frameworks reveal exactly where your budget is being wasted and where the untapped potential lies.</p>
               </div>
            </div>
          </div>
        </section>

        {/* Phase 2 */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all relative overflow-hidden group order-2 md:order-1">
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-50/80 rounded-full translate-y-1/4 -translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
               <div className="space-y-8 relative z-10">
                 <div className="h-14 w-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600">
                    <span className="material-symbols-outlined text-3xl">campaign</span>
                 </div>
                 <h4 className="text-2xl font-bold text-[#0f172a]">Scroll-stopping creatives.</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">In today's attention economy, your creative is your targeting. We produce high-converting assets that hook viewers in the first 3 seconds.</p>
               </div>
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <span className="text-cyan-600 font-bold tracking-widest uppercase text-sm">Phase 02</span>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0f172a]">Performance Creative Engine</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                We conceptualize, script, and design ad creatives specifically built for performance. From UGC style videos to high-end motion graphics, we test multiple angles to find the winning formula.
              </p>
              <ul className="space-y-4 pt-4">
                {['Direct-Response Copywriting', 'UGC & Video Production', 'A/B Testing Frameworks'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-semibold">
                    <span className="material-symbols-outlined text-cyan-600 bg-cyan-100 rounded-full w-6 h-6 flex items-center justify-center text-[14px]">check</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Phase 3 */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Phase 03</span>
              <h3 className="text-4xl md:text-5xl font-bold text-[#0f172a]">Aggressive Scaling</h3>
              <p className="text-slate-600 text-lg leading-relaxed font-medium">
                Once we find winning creatives and audiences, we turn up the heat. We deploy advanced media buying strategies on Meta and Google Ads to scale your daily spend while maintaining target ROAS.
              </p>
              <ul className="space-y-4 pt-4">
                {['Omnichannel Retargeting', 'Lookalike & Broad Audience Expansion', 'Automated Rules & Bid Strategies'].map((item, i) => (
                  <li key={i} className="flex items-start gap-4 text-slate-700 font-semibold">
                    <span className="material-symbols-outlined text-emerald-600 bg-emerald-100 rounded-full w-6 h-6 flex items-center justify-center text-[14px]">check</span>
                    <span className="pt-0.5">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-[2.5rem] p-10 md:p-12 border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all relative overflow-hidden group">
               <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50/80 rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
               <div className="space-y-8 relative z-10">
                 <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600">
                    <span className="material-symbols-outlined text-3xl">rocket_launch</span>
                 </div>
                 <h4 className="text-2xl font-bold text-[#0f172a]">Scaling to the Moon.</h4>
                 <p className="text-slate-600 font-medium leading-relaxed">Our media buyers are trained to handle multi-million dollar budgets. We know exactly when to scale horizontally, vertically, and diagonally.</p>
               </div>
            </div>
          </div>
        </section>

        {/* --- BRAND SHOWCASE --- */}
        
        {/* Infinite Logo Marquee */}
        <section className="py-20 bg-white border-y border-slate-100 overflow-hidden relative">
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
          
          <div className="text-center mb-10 relative z-20">
             <h3 className="text-sm font-bold tracking-widest text-slate-400 uppercase">Trusted by 20+ Global Brands</h3>
          </div>

          <div className="flex animate-marquee w-max gap-8 py-4">
            {[
              "The Func Lab", "Apsara Tea", "HNI Corp", "Stanphord", "SleepSmith", 
              "Mint and Oak", "Moha", "Kimirica", "VIVID", "Vimal Agro", 
              "Medisynth", "Bassino Impex", "Bitcorp", "Casa Bleu", 
              "Aroura Achar 1944", "Shankara", "GK Hair", "VI John", "Bayars Coffee"
            ].map((brand, i) => (
              <div key={i} className="flex items-center justify-center px-8 py-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                <span className="text-xl font-black text-slate-800 tracking-tight">{brand}</span>
              </div>
            ))}
            {/* Duplicate for infinite effect */}
            {[
              "The Func Lab", "Apsara Tea", "HNI Corp", "Stanphord", "SleepSmith", 
              "Mint and Oak", "Moha", "Kimirica", "VIVID", "Vimal Agro", 
              "Medisynth", "Bassino Impex", "Bitcorp", "Casa Bleu", 
              "Aroura Achar 1944", "Shankara", "GK Hair", "VI John", "Bayars Coffee"
            ].map((brand, i) => (
              <div key={i+20} className="flex items-center justify-center px-8 py-4 bg-slate-50 border border-slate-100 rounded-2xl shadow-sm">
                <span className="text-xl font-black text-slate-800 tracking-tight">{brand}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Top Brands Results Driven Showcase */}
        <section className="max-w-[1200px] mx-auto px-6 py-24">
           <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
             <span className="text-blue-600 font-bold tracking-widest uppercase text-sm">Case Studies</span>
             <h2 className="text-4xl md:text-5xl font-black text-[#0f172a]">Brands We've Scaled</h2>
             <p className="text-slate-600 text-lg font-medium">Real results for industry-leading brands.</p>
           </div>
           
           <div className="grid md:grid-cols-2 gap-8">
             {[
               { name: "Kimirica", result: "Scaled E-commerce Sales by 3x", icon: "shopping_bag", color: "blue", bg: "from-blue-500 to-blue-700" },
               { name: "GK Hair", result: "Reduced CAC by 40%", icon: "content_cut", color: "emerald", bg: "from-emerald-400 to-emerald-600" },
               { name: "VI John", result: "Generated 50k+ Leads", icon: "group_add", color: "purple", bg: "from-purple-500 to-purple-700" },
               { name: "Shankara", result: "10x Organic Traffic Growth", icon: "trending_up", color: "amber", bg: "from-amber-400 to-amber-600" }
             ].map((brand, i) => (
               <div key={i} className={`bg-gradient-to-br ${brand.bg} rounded-[2.5rem] p-10 text-white relative overflow-hidden group hover:-translate-y-2 transition-transform duration-500 shadow-xl`}>
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
                  
                  <div className="flex justify-between items-start mb-12 relative z-10">
                     <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                       <span className="material-symbols-outlined text-3xl">{brand.icon}</span>
                     </div>
                     <span className="px-4 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold tracking-widest uppercase">Verified</span>
                  </div>
                  
                  <div className="relative z-10">
                     <h3 className="text-3xl font-black mb-2 drop-shadow-md">{brand.name}</h3>
                     <p className="text-white/90 text-xl font-medium">{brand.result}</p>
                  </div>
               </div>
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
                  { name: "The Func Lab", url: "https://thefunclab.com/", color: "from-blue-500 to-indigo-500" },
                  { name: "Apsara Tea", url: "https://apsaratea.in/", color: "from-green-500 to-emerald-500" },
                  { name: "HNI Corp", url: "https://www.hnicorp.com/", color: "from-slate-600 to-slate-800" },
                  { name: "Stanphord", url: "https://www.amazon.in/stores/Stanphord/page/6E641905-7EC0-460D-BC6F-360181AE0C91", color: "from-orange-400 to-red-500" },
                  { name: "SleepSmith", url: "https://www.amazon.in/stores/SleepSmith/page/47015169-675E-4F54-8E2E-255566AFF4C5", color: "from-indigo-400 to-purple-500" },
                  { name: "Mint and Oak", url: "https://www.mintandoak.in/", color: "from-emerald-400 to-teal-500" },
                  { name: "Moha", url: "https://www.moha.co.in/", color: "from-rose-400 to-pink-500" },
                  { name: "Kimirica", url: "https://www.kimirica.shop/", color: "from-fuchsia-500 to-purple-600" },
                  { name: "VIVID", url: "https://www.amazon.in/stores/VIVID/page/6123B38E-AB8B-48D0-9ED6-AB7E0CE3FF8C", color: "from-blue-400 to-cyan-500" },
                  { name: "Vimal Agro", url: "https://www.vimalagro.com/", color: "from-green-600 to-lime-500" },
                  { name: "Medisynth", url: "https://medisynth.com/", color: "from-sky-400 to-blue-500" },
                  { name: "Bassino Impex", url: "https://bassinoimpex.com/", color: "from-amber-400 to-orange-500" },
                  { name: "Bitcorp", url: "https://bitcorp.in/", color: "from-violet-500 to-purple-500" },
                  { name: "Casa Bleu", url: "https://www.casableustore.com/", color: "from-blue-600 to-indigo-600" },
                  { name: "Aroura Achar 1944", url: "https://www.arouraachar1944.com/", color: "from-red-500 to-rose-600" },
                  { name: "Shankara", url: "https://www.shankara.in/", color: "from-amber-500 to-yellow-500" },
                  { name: "GK Hair", url: "https://www.gkhair.com/", color: "from-zinc-700 to-black" },
                  { name: "VI John", url: "https://vijohnkart.com/", color: "from-green-500 to-emerald-600" },
                  { name: "Bayars Coffee", url: "https://bayarscoffee.com/", color: "from-orange-700 to-amber-800" },
                ].map((brand, i) => (
                  <a 
                    key={i} 
                    href={brand.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="relative group overflow-hidden px-8 py-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                  >
                     <div className={`absolute inset-0 bg-gradient-to-r ${brand.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}></div>
                     <div className="relative z-10 flex items-center gap-2">
                       <span className="text-lg font-black text-slate-700 group-hover:text-white transition-colors duration-300">{brand.name}</span>
                       <span className="material-symbols-outlined text-[16px] text-slate-400 group-hover:text-white transition-colors duration-300 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0">open_in_new</span>
                     </div>
                  </a>
                ))}
             </div>
           </div>
        </section>
        
        {/* --- END BRAND SHOWCASE --- */}

        {/* CTA Section */}
        <section className="max-w-[1000px] mx-auto px-6 py-32 text-center pb-40">
          <div className="bg-blue-600 rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-[0_20px_60px_rgba(37,99,235,0.2)]">
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none"></div>
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-6xl font-black text-white">Ready to Scale?</h2>
              <p className="text-blue-100 text-xl font-medium max-w-2xl mx-auto leading-relaxed">Stop leaving money on the table. Partner with MarketOps and watch your revenue graph go up and to the right.</p>
              <a href="/contact" className="inline-block bg-white text-blue-700 font-bold px-10 py-5 rounded-xl text-lg hover:-translate-y-1 hover:shadow-xl transition-all">
                Get Your Custom Strategy
              </a>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
