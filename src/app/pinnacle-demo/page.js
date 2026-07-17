import React from 'react';

export default function PinnacleDemo() {
  return (
    <main className="min-h-screen bg-white">
      {/* Header/Nav - Pinnacle Style with MarketOps branding */}
      <header className="fixed top-0 left-0 w-full px-5 z-50 transition-transform duration-500 translate-y-0 mt-4">
        <div className="bg-gradient-to-r from-blue-900/50 to-blue-600/50 text-white container mx-auto flex items-center justify-between backdrop-blur-lg px-6 py-3 rounded-full shadow-lg border border-white/10">
          <div>
            <a href="/" className="text-2xl font-bold tracking-tighter">
              MarketOps
            </a>
          </div>
          <nav className="hidden lg:flex items-center space-x-8 text-sm font-medium">
            <a className="hover:text-cyan-300 transition-colors" href="#services">Services</a>
            <a className="hover:text-cyan-300 transition-colors" href="/about">About Us</a>
            <a className="hover:text-cyan-300 transition-colors" href="/case_studies">Case Study</a>
            <a className="hover:text-cyan-300 transition-colors" href="/contact">Contact Us</a>
          </nav>
          <div className="flex gap-3">
            <a href="#" className="bg-gradient-to-t from-blue-600 to-teal-500 px-5 py-2 rounded-full text-sm font-semibold hover:scale-105 transition-transform shadow-md">
              WhatsApp
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-10 sm:pt-0 h-[80vh] md:min-h-screen overflow-hidden px-6 bg-[#00040f]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <video 
            className="w-full h-full object-cover opacity-60" 
            src="https://videos.pexels.com/video-files/3129595/3129595-uhd_2560_1440_30fps.mp4" 
            autoPlay loop muted playsInline
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#00040f]/90"></div>
        </div>
        <div className="relative z-10 max-w-4xl">
          <h1 className="capitalize text-5xl md:text-7xl leading-tight text-white font-extrabold mt-2 tracking-tight">
            Built for the brands<br/>that <span className="bg-gradient-to-b from-[#03118c] from-20% to-[#00a9e0] to-100% bg-clip-text text-transparent">don’t settle</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 my-6 font-medium">
            Trusted by brands that demand control, consistency, compliance, and explosive performance
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <a className="rounded-full bg-gradient-to-r from-blue-600 to-cyan-400 px-8 py-4 text-white text-lg font-medium shadow-[0_0_20px_rgba(0,198,255,0.4)] transition-transform hover:scale-105" href="#contact">
              Talk to Our Team
            </a>
            <a className="rounded-full bg-white px-8 py-4 text-blue-500 text-lg font-medium shadow-md transition-transform hover:scale-105 group" href="#video">
              <span className="bg-gradient-to-r from-[#0C3BFB] to-[#61E5FF] bg-clip-text text-transparent group-hover:opacity-80">
                See How We Work
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* Stats & Marquee Section */}
      <section className="bg-white px-6 py-20 lg:py-32">
        <div className="container mx-auto grid md:grid-cols-3 gap-10 items-center">
          <div>
            <div className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3 py-1 rounded-full mb-4">
              MarketOps Spent
            </div>
            <h3 className="flex items-center text-4xl md:text-6xl font-extrabold leading-none tracking-tight mb-4">
              <span className="bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">$100M+</span>
            </h3>
            <p className="text-base sm:text-lg text-gray-600 font-medium">
              Just a normal month of paid advertising spends managed by MarketOps growth partners.
            </p>
          </div>
          
          <div className="md:col-span-2 overflow-hidden relative rounded-3xl">
            {/* Fade edges */}
            <div className="pointer-events-none absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-20"></div>
            <div className="pointer-events-none absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-20"></div>
            
            <div className="flex animate-marquee w-max gap-6 py-6">
              {['Skala Media', 'Suits Finance', 'Whop', 'Ooptics', 'Incogniton', 'TikTok', 'Google', 'Meta'].map((partner, i) => (
                <div key={i} className="flex flex-col items-center justify-center h-[140px] w-[220px] bg-gray-50 border border-gray-100 rounded-3xl flex-shrink-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">{partner}</div>
                  <div className="text-xs text-gray-400 mt-2">Growth Partner</div>
                </div>
              ))}
              {/* Duplicate for infinite scroll */}
              {['Skala Media', 'Suits Finance', 'Whop', 'Ooptics', 'Incogniton', 'TikTok', 'Google', 'Meta'].map((partner, i) => (
                <div key={i+10} className="flex flex-col items-center justify-center h-[140px] w-[220px] bg-gray-50 border border-gray-100 rounded-3xl flex-shrink-0 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-xl font-bold bg-gradient-to-r from-gray-700 to-gray-500 bg-clip-text text-transparent">{partner}</div>
                  <div className="text-xs text-gray-400 mt-2">Growth Partner</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-50 px-6 xl:px-20 py-20 lg:py-32">
        <div className="container mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div className="flex flex-col gap-24">
            
            {/* Service 1 */}
            <div data-section="ecommerce" className="relative">
              <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm w-fit py-2 px-4 rounded-full mb-6">
                <span className="font-bold text-sm tracking-wide bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent uppercase">
                  Ecommerce Solutions
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">From Store Setup to Sales Growth</h2>
              <ul className="list-none bg-white border border-gray-100 shadow-xl shadow-blue-900/5 rounded-[2rem] p-8 font-semibold text-gray-700 space-y-4">
                <li className="flex items-center gap-4"><div className="bg-blue-100 p-2 rounded-lg text-blue-600 text-lg">🛍️</div><span>End-to-end Store Optimization</span></li>
                <li className="flex items-center gap-4"><div className="bg-blue-100 p-2 rounded-lg text-blue-600 text-lg">📈</div><span>Conversion Rate Optimization</span></li>
                <li className="flex items-center gap-4"><div className="bg-blue-100 p-2 rounded-lg text-blue-600 text-lg">🎯</div><span>Strategic Product Placement</span></li>
                <li className="flex items-center gap-4"><div className="bg-blue-100 p-2 rounded-lg text-blue-600 text-lg">💳</div><span>Seamless Checkout Experience</span></li>
              </ul>
              <div className="mt-8">
                <a className="inline-flex items-center justify-center text-white font-medium text-base px-8 py-4 rounded-full bg-gradient-to-r from-[#0072ff] to-[#00c6ff] hover:-translate-y-1 hover:shadow-lg transition-all" href="#">
                  Start Scaling
                </a>
              </div>
            </div>

            {/* Service 2 */}
            <div data-section="performance" className="relative">
              <div className="flex items-center gap-2 bg-white border border-gray-200 shadow-sm w-fit py-2 px-4 rounded-full mb-6">
                <span className="font-bold text-sm tracking-wide bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent uppercase">
                  Performance Marketing
                </span>
              </div>
              <h2 className="text-3xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">Smarter Ads. Better Conversions.</h2>
              <ul className="list-none bg-white border border-gray-100 shadow-xl shadow-blue-900/5 rounded-[2rem] p-8 font-semibold text-gray-700 space-y-4">
                <li className="flex items-center gap-4"><div className="bg-cyan-100 p-2 rounded-lg text-cyan-600 text-lg">🚀</div><span>Highly targeted ad campaigns</span></li>
                <li className="flex items-center gap-4"><div className="bg-cyan-100 p-2 rounded-lg text-cyan-600 text-lg">🧠</div><span>Google & Meta Algorithm Mastery</span></li>
                <li className="flex items-center gap-4"><div className="bg-cyan-100 p-2 rounded-lg text-cyan-600 text-lg">📊</div><span>Data-backed scaling decisions</span></li>
              </ul>
              <div className="mt-8">
                <a className="inline-flex items-center justify-center text-white font-medium text-base px-8 py-4 rounded-full bg-gradient-to-r from-[#0072ff] to-[#00c6ff] hover:-translate-y-1 hover:shadow-lg transition-all" href="#">
                  Book Consultation
                </a>
              </div>
            </div>
            
          </div>
          
          {/* Sticky Visualizer */}
          <div className="hidden lg:flex justify-end sticky top-32 h-[600px]">
            <div className="w-full h-full bg-gradient-to-br from-[#0c132b] to-[#050810] rounded-[3rem] flex flex-col items-center justify-center shadow-2xl p-10 relative overflow-hidden border border-blue-900/50">
              <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_0%,rgba(0,198,255,0.15),transparent_50%)]"></div>
              
              <div className="z-10 text-center space-y-6">
                <h3 className="text-2xl font-bold text-gray-400 tracking-widest uppercase text-sm">The Synergy</h3>
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400">
                  MarketOps
                </h2>
                <div className="text-4xl text-blue-500 font-light">×</div>
                <h2 className="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
                  Pinnacle Style
                </h2>
              </div>

              {/* Decorative rings */}
              <div className="absolute w-[500px] h-[500px] border border-blue-500/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_40s_linear_infinite]"></div>
              <div className="absolute w-[400px] h-[400px] border border-cyan-500/20 rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-[spin_30s_linear_infinite_reverse] border-dashed"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Metric Cards Section */}
      <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[100px] -z-10 opacity-50"></div>
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-gray-900 tracking-tight">
              When Infrastructure & <span className="bg-gradient-to-r from-[#141389] to-[#03c1fc] bg-clip-text text-transparent">Creative Work Together</span>
            </h2>
            <p className="text-lg text-gray-600">
              Real, verifiable data averages recorded across our portfolio partners in the last 12 months.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="relative rounded-[2rem] border border-gray-100 p-10 bg-white shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-300 text-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="relative text-5xl font-black mb-4 text-gray-900">24/7</h3>
              <p className="relative text-gray-500 font-medium">Continuous Support & Activation</p>
            </div>

            <div className="relative rounded-[2rem] border border-gray-100 p-10 bg-white shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-300 text-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="relative text-5xl font-black mb-4 text-gray-900">37%</h3>
              <p className="relative text-gray-500 font-medium">Drop in CAC</p>
            </div>

            <div className="relative rounded-[2rem] border border-gray-100 p-10 bg-white shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-300 text-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="relative text-5xl font-black mb-4 text-gray-900">4.6s</h3>
              <p className="relative text-gray-500 font-medium">Avg Hook Ratio</p>
            </div>
            
            <div className="relative rounded-[2rem] border border-gray-100 p-10 bg-white shadow-xl shadow-gray-200/40 hover:-translate-y-2 transition-all duration-300 text-center group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h3 className="relative text-5xl font-black mb-4 text-gray-900">68%</h3>
              <p className="relative text-gray-500 font-medium">Abandoned Carts Recovered</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Demo */}
      <footer className="bg-[#050810] text-white py-12 text-center border-t border-gray-800">
        <p className="text-gray-400">© 2026 MarketOps. All rights reserved.</p>
        <p className="text-sm text-gray-600 mt-2">Styled with The Pinnacle Media Aesthetics</p>
      </footer>
    </main>
  );
}
