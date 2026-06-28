"use client";



export default function AboutPage() {
  const stats = [
    { value: "500+", label: "Active Clients", desc: "Profitably scaling globally" },
    { value: "$6M+", label: "Monthly Ad Spend", desc: "Managed across ad portals" },
    { value: "1000+", label: "Case Studies", desc: "Successfully recorded results" },
    { value: "100+", label: "Globally Launched Brands", desc: "With sustainable expansion" },
  ];

  const clientPillars = [
    "Result-Oriented Growth",
    "Strong Brand Presence",
    "Higher ROI & Sales",
    "Long-Term Business Success",
    "Transparent Communication",
    "Data-Driven Marketing Strategies",
    "Consistent Performance Improvement",
  ];

  const teamPillars = [
    "Creative & Innovative Thinking",
    "Continuous Learning & Skill Development",
    "Healthy Work Culture",
    "Team Collaboration & Leadership",
    "Performance & Accountability",
    "Growth Opportunities",
    "Work With Passion & Purpose",
  ];

  const businessPillars = [
    "Building Long-Term Partnerships",
    "Scaling Brands Globally",
    "Adapting to Market Trends",
    "Delivering Consistent Value",
    "Creating Sustainable Marketing Systems",
  ];

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* About Hero Section - Pinnacle Style */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-32 overflow-hidden px-6 bg-gradient-to-b from-[#3b82f6] to-[#e0f2fe]">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-white/30 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto mt-4">
          <span className="inline-block bg-blue-600 text-white text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-lg shadow-blue-500/30">
            About Us
          </span>
          <h1 className="font-bold text-5xl md:text-7xl leading-tight text-[#0f172a]">
            MarketOps <br className="hidden md:block"/>
            <span className="text-blue-700">Marketing Solutions</span>
          </h1>
          <p className="text-slate-700 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-semibold pt-4">
            "Driven by performance. Powered by consistency. Focused on your growth."
          </p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-24 select-none text-left relative z-10 space-y-24 bg-[#f8fafc] -mt-10 rounded-t-[3rem]">
        
        {/* Corporate Background Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start relative z-20">
          <div className="space-y-6 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all">
            <h2 className="font-bold text-3xl text-[#0f172a] flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 material-symbols-outlined text-sm">visibility</span>
              Who We Are
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              MarketOps Marketing Solutions is a performance-focused marketing agency dedicated to helping brands scale profitably across digital and e-commerce ecosystems.
            </p>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              We specialize in delivering result-oriented marketing solutions across major channels including Meta Ads, Google Ads, and e-commerce marketplaces such as Amazon, Flipkart, Myntra, and other leading platforms. Our expertise supports brands at every level—local, national, and international markets.
            </p>
          </div>
          <div className="space-y-6 bg-white p-10 rounded-[2.5rem] border border-slate-200 shadow-sm hover:shadow-[0_20px_60px_rgba(0,0,0,0.05)] transition-all">
            <h2 className="font-bold text-3xl text-[#0f172a] flex items-center gap-3">
              <span className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 material-symbols-outlined text-sm">track_changes</span>
              Our Core Focus
            </h2>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              Our core focus is simple: consistent performance and measurable growth. We combine data-driven strategies, creative execution, and continuous optimization to ensure every campaign delivers real business outcomes, not just visibility.
            </p>
            <p className="text-slate-600 text-base leading-relaxed font-medium">
              At MarketOps, we don’t just run campaigns—we build scalable growth systems that help brands increase sales, improve ROI, and expand into new markets with confidence.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="bg-blue-600 rounded-[3rem] p-10 md:p-16 border border-blue-500 shadow-[0_20px_60px_rgba(37,99,235,0.2)] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 blur-[100px] rounded-full pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-400/20 blur-[100px] rounded-full pointer-events-none"></div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-3 text-center lg:text-left">
                <span className="block font-black text-5xl md:text-6xl text-white tracking-tight drop-shadow-md">
                  {stat.value}
                </span>
                <span className="block text-sm font-bold text-blue-100 uppercase tracking-widest">
                  {stat.label}
                </span>
                <span className="block text-sm text-blue-200 font-medium">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Three Pillars Focus Section */}
        <section className="space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-6">
            <h2 className="font-bold text-4xl md:text-5xl text-[#0f172a]">
              We 100% Focus On
            </h2>
            <p className="text-slate-600 text-lg font-medium">
              Driving sustainable outcomes across all stakeholders, campaigns, and operational teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Clients */}
            <div className="group relative rounded-[2.5rem] bg-white p-10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-slate-200 hover:-translate-y-2 hover:border-blue-300 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)] z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-100/80 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="font-bold text-2xl text-blue-700 border-b border-slate-100 pb-4 flex items-center gap-3">
                  For Clients
                </h3>
                <ul className="space-y-4">
                  {clientPillars.map((pillar, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-700 text-sm font-semibold">
                      <span className="w-6 h-6 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center flex-shrink-0 material-symbols-outlined text-[14px]">check</span>
                      <span className="pt-0.5">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* For Our Team */}
            <div className="group relative rounded-[2.5rem] bg-white p-10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-slate-200 hover:-translate-y-2 hover:border-emerald-300 hover:shadow-[0_20px_60px_rgba(16,185,129,0.15)] z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-emerald-100/80 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="font-bold text-2xl text-emerald-700 border-b border-slate-100 pb-4 flex items-center gap-3">
                  For Our Team
                </h3>
                <ul className="space-y-4">
                  {teamPillars.map((pillar, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-700 text-sm font-semibold">
                      <span className="w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0 material-symbols-outlined text-[14px]">check</span>
                      <span className="pt-0.5">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* For Business Growth */}
            <div className="group relative rounded-[2.5rem] bg-white p-10 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col border border-slate-200 hover:-translate-y-2 hover:border-amber-300 hover:shadow-[0_20px_60px_rgba(245,158,11,0.15)] z-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-amber-100/80 to-transparent rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none"></div>
              <div className="relative z-10 space-y-8">
                <h3 className="font-bold text-2xl text-amber-600 border-b border-slate-100 pb-4 flex items-center gap-3">
                  For Business Growth
                </h3>
                <ul className="space-y-4">
                  {businessPillars.map((pillar, idx) => (
                    <li key={idx} className="flex items-start gap-4 text-slate-700 text-sm font-semibold">
                      <span className="w-6 h-6 rounded-full bg-amber-100 text-amber-600 flex items-center justify-center flex-shrink-0 material-symbols-outlined text-[14px]">check</span>
                      <span className="pt-0.5">{pillar}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Press Release / Social Proof Section */}
        <section className="border-t border-slate-200 pt-16 pb-8 space-y-10 text-center">
          <p className="font-bold text-sm text-slate-400 uppercase tracking-[0.2em]">
            As seen in Press Release
          </p>
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-70">
            {["DAILY NEWS", "FINANCE CHRONICLE", "MARKET CHANNELS", "TECH CHRONICLES"].map((logo) => (
              <span key={logo} className="font-bold text-lg md:text-xl text-slate-400 grayscale hover:grayscale-0 hover:text-slate-800 transition-all duration-300">
                {logo}
              </span>
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}
