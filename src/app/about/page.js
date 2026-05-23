"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
    <>
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-12 py-[60px] select-none text-left relative z-10 space-y-24">
        
        {/* About Hero */}
        <section className="space-y-6 max-w-4xl">
          <div className="space-y-4">
            <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
              About Us
            </span>
            <h1 className="font-be-vietnam-pro font-black text-4xl md:text-6xl leading-tight text-on-surface">
              MarketOps Marketing Solutions
            </h1>
            <p className="font-be-vietnam-pro text-2xl md:text-3xl font-extrabold text-on-surface-variant leading-snug pt-4">
              &quot;Driven by performance. Powered by consistency. Focused on your growth.&quot;
            </p>
          </div>
        </section>

        {/* Corporate Background Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-6">
            <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface">
              Who We Are
            </h2>
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              MarketOps Marketing Solutions is a performance-focused marketing agency dedicated to helping brands scale profitably across digital and e-commerce ecosystems.
            </p>
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              We specialize in delivering result-oriented marketing solutions across major channels including Meta Ads, Google Ads, and e-commerce marketplaces such as Amazon, Flipkart, Myntra, and other leading platforms. Our expertise supports brands at every level—local, national, and international markets.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface">
              Our Core Focus
            </h2>
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              Our core focus is simple: consistent performance and measurable growth. We combine data-driven strategies, creative execution, and continuous optimization to ensure every campaign delivers real business outcomes, not just visibility.
            </p>
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              At MarketOps, we don’t just run campaigns—we build scalable growth systems that help brands increase sales, improve ROI, and expand into new markets with confidence.
            </p>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-2 text-center lg:text-left">
                <span className="block font-be-vietnam-pro text-4xl md:text-5xl font-black text-primary">
                  {stat.value}
                </span>
                <span className="block font-be-vietnam-pro text-sm font-bold text-on-surface">
                  {stat.label}
                </span>
                <span className="block font-inter text-xs text-on-surface-variant">
                  {stat.desc}
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Three Pillars Focus Section */}
        <section className="space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-4">
            <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface">
              We 100% Focus On
            </h2>
            <p className="font-inter text-xs text-on-surface-variant">
              Driving sustainable outcomes across all stakeholders, campaigns, and operational teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* For Clients */}
            <div className="glass-card rounded-2xl p-6 border border-black/5 space-y-6">
              <h3 className="font-be-vietnam-pro font-black text-lg text-primary border-b border-black/5 pb-3">
                For Clients
              </h3>
              <ul className="space-y-3">
                {clientPillars.map((pillar, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-inter text-xs text-on-surface-variant leading-tight">
                    <span className="material-symbols-outlined text-[14px] leading-none text-primary font-black mt-0.5">check</span>
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>

            {/* For Our Team */}
            <div className="glass-card rounded-2xl p-6 border border-black/5 space-y-6">
              <h3 className="font-be-vietnam-pro font-black text-lg text-[#2c4c34] border-b border-black/5 pb-3">
                For Our Team
              </h3>
              <ul className="space-y-3">
                {teamPillars.map((pillar, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-inter text-xs text-on-surface-variant leading-tight">
                    <span className="material-symbols-outlined text-[14px] leading-none text-[#2c4c34] font-black mt-0.5">check</span>
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>

            {/* For Business Growth */}
            <div className="glass-card rounded-2xl p-6 border border-black/5 space-y-6">
              <h3 className="font-be-vietnam-pro font-black text-lg text-[#ff9900] border-b border-black/5 pb-3">
                For Business Growth
              </h3>
              <ul className="space-y-3">
                {businessPillars.map((pillar, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 font-inter text-xs text-on-surface-variant leading-tight">
                    <span className="material-symbols-outlined text-[14px] leading-none text-[#ff9900] font-black mt-0.5">check</span>
                    {pillar}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Press Release / Social Proof Section */}
        <section className="border-t border-black/5 pt-12 space-y-8 text-center">
          <p className="font-inter text-xs font-bold text-outline uppercase tracking-widest">
            As seen in Press Release
          </p>
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-60">
            {["DAILY NEWS", "FINANCE CHRONICLE", "MARKET CHANNELS", "TECH CHRONICLES"].map((logo) => (
              <span key={logo} className="font-be-vietnam-pro text-sm font-extrabold text-on-surface border border-black/10 rounded-xl px-6 py-2.5 bg-black/5 shadow-sm">
                {logo}
              </span>
            ))}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
