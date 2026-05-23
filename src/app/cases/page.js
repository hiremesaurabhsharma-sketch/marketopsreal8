"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CASES_DATA } from "@/data/cases";

export default function CasesPage() {
  const [currentCategory, setCurrentCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOrder, setSortOrder] = useState("relevance");
  const [selectedCase, setSelectedCase] = useState(null);

  const categories = [
    { id: "all", label: "All Cases" },
    { id: "ecommerce", label: "Ecommerce" },
    { id: "performance", label: "Performance Ads" },
    { id: "webdev", label: "Web & Dev" },
    { id: "seo", label: "SEO Optimization" },
    { id: "creative", label: "Creatives & UGC" },
    { id: "overseas", label: "Overseas Expansion" },
  ];

  // Helper colors
  const getCategoryStyles = (cat) => {
    switch (cat) {
      case "ecommerce":
        return {
          bg: "bg-[#00c6ff]/5",
          color: "text-[#00c6ff]",
          border: "border-[#00c6ff]/15",
        };
      case "performance":
        return {
          bg: "bg-[#0c3bfb]/5",
          color: "text-[#0c3bfb]",
          border: "border-[#0c3bfb]/15",
        };
      case "webdev":
        return {
          bg: "bg-[#128c7e]/5",
          color: "text-[#128c7e]",
          border: "border-[#128c7e]/15",
        };
      case "seo":
        return {
          bg: "bg-[#ff9900]/5",
          color: "text-[#ff9900]",
          border: "border-[#ff9900]/15",
        };
      case "creative":
        return {
          bg: "bg-[#9c27b0]/5",
          color: "text-[#9c27b0]",
          border: "border-[#9c27b0]/15",
        };
      case "overseas":
        return {
          bg: "bg-[#4caf50]/5",
          color: "text-[#4caf50]",
          border: "border-[#4caf50]/15",
        };
      default:
        return {
          bg: "bg-black/5",
          color: "text-on-surface",
          border: "border-black/10",
        };
    }
  };

  // Filter and sort logic
  const filteredCases = useMemo(() => {
    let result = [...CASES_DATA];

    // Filter by Category
    if (currentCategory !== "all") {
      result = result.filter((item) => item.category === currentCategory);
    }

    // Filter by Search Query
    if (searchQuery.trim() !== "") {
      const q = searchQuery.toLowerCase().trim();
      result = result.filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.clientName.toLowerCase().includes(q) ||
          item.niche.toLowerCase().includes(q) ||
          item.overview.toLowerCase().includes(q)
      );
    }

    // Sort
    result.sort((a, b) => {
      if (sortOrder === "relevance") {
        return a.id - b.id;
      }

      const parseGrowth = (str) => {
        const num = parseFloat(str.replace(/[^0-9.-]/g, ""));
        return isNaN(num) ? 0 : num;
      };

      const growthA = parseGrowth(a.metrics.growth);
      const growthB = parseGrowth(b.metrics.growth);

      if (sortOrder === "growth-desc") {
        return growthB - growthA;
      } else if (sortOrder === "growth-asc") {
        return growthA - growthB;
      }
      return 0;
    });

    return result;
  }, [currentCategory, searchQuery, sortOrder]);

  return (
    <>
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-12 py-[60px] select-none text-left relative z-10 space-y-16">
        
        {/* Header */}
        <section className="space-y-4 text-center max-w-3xl mx-auto">
          <span className="inline-block bg-primary/10 text-primary border border-primary/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
            Success Showcases
          </span>
          <h1 className="font-be-vietnam-pro font-black text-4xl md:text-5xl leading-tight text-on-surface">
            Real Growth. Proven Results.
          </h1>
          <p className="font-inter text-xs text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Explore direct-response statistics, search authority metrics, and B2B expansion case studies from our verified portfolio partners.
          </p>
        </section>

        {/* Controls / Filter Bar */}
        <section className="space-y-6 bg-white/50 border border-black/5 rounded-3xl p-6 md:p-8 backdrop-blur-md">
          {/* Top row: search & sort */}
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case study (e.g. Amazon, ROAS, Next.js, SEO)..."
                className="w-full pl-12 pr-4 py-3 bg-white/70 border border-black/5 rounded-xl font-inter text-xs text-on-surface placeholder:text-outline focus:outline-none focus:border-primary transition-all shadow-sm"
              />
            </div>

            {/* Sort Select */}
            <div className="relative w-full md:w-fit">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full md:w-[220px] px-4 py-3 bg-white/70 border border-black/5 rounded-xl font-inter text-xs text-on-surface focus:outline-none focus:border-primary transition-all shadow-sm cursor-pointer"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="growth-desc">Growth Rate: High to Low</option>
                <option value="growth-asc">Growth Rate: Low to High</option>
              </select>
            </div>
          </div>

          {/* Bottom row: Category filter tabs */}
          <div className="flex flex-wrap items-center gap-2 border-t border-black/5 pt-6">
            {categories.map((cat) => {
              const active = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className={`px-4 py-2 rounded-xl font-inter text-xs font-semibold border transition-all cursor-pointer ${
                    active
                      ? "bg-primary border-primary text-white shadow-sm"
                      : "bg-white/50 border-black/5 text-on-surface-variant hover:text-primary hover:border-primary/20"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Grid of Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCases.length === 0 ? (
            <div className="col-span-full py-16 text-center space-y-4 bg-white/20 border border-dashed border-black/10 rounded-3xl backdrop-blur-sm">
              <span className="material-symbols-outlined text-4xl text-outline">search_off</span>
              <h3 className="font-be-vietnam-pro font-black text-lg text-on-surface">No Case Studies Found</h3>
              <p className="font-inter text-xs text-on-surface-variant max-w-xs mx-auto">
                Try modifying your keyword search queries or switching category tabs.
              </p>
            </div>
          ) : (
            filteredCases.map((item) => {
              const styles = getCategoryStyles(item.category);
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedCase(item)}
                  className="glass-card rounded-3xl p-6 border border-black/5 flex flex-col justify-between h-[360px] cursor-pointer hover:-translate-y-1 hover:border-primary/20 hover:shadow-md transition-all duration-300"
                >
                  <div className="space-y-4">
                    <span className={`inline-block px-3 py-1 rounded-full text-[10px] font-inter font-black uppercase tracking-wider ${styles.bg} ${styles.color} ${styles.border}`}>
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-be-vietnam-pro font-black text-lg text-on-surface line-clamp-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="font-inter text-xs text-on-surface-variant leading-relaxed line-clamp-3">
                      {item.overview}
                    </p>
                  </div>

                  <div className="space-y-4 pt-6 border-t border-black/5">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <span className="block text-[9px] font-inter font-bold text-outline uppercase tracking-wider leading-none">
                          {item.metrics.label}
                        </span>
                        <span className="block font-be-vietnam-pro font-black text-sm text-on-surface leading-none">
                          {item.metrics.end}
                        </span>
                      </div>
                      <div className="space-y-1 text-right">
                        <span className="block text-[9px] font-inter font-bold text-outline uppercase tracking-wider leading-none">
                          Growth
                        </span>
                        <span className="block font-be-vietnam-pro font-black text-sm text-primary leading-none">
                          {item.metrics.growth}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-1.5 bg-black/5 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent-cyan rounded-full transition-all duration-500"
                        style={{ width: `${item.progress}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </section>

        {/* Modal Sheet Window */}
        {selectedCase && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
              onClick={() => setSelectedCase(null)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm cursor-pointer transition-opacity"
            ></div>

            {/* Modal Box */}
            <div className="relative bg-white/95 border border-black/10 w-full max-w-4xl h-[90vh] md:h-[80vh] rounded-3xl shadow-2xl flex flex-col z-10 overflow-hidden animate-[slideUpFade_0.3s_ease_forwards] text-left backdrop-blur-xl">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 w-8 h-8 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center focus:outline-none transition-all cursor-pointer z-25 text-on-surface"
              >
                <span className="material-symbols-outlined text-lg leading-none font-bold">close</span>
              </button>

              {/* Modal Scroll Content */}
              <div className="flex-grow overflow-y-auto p-6 md:p-10 space-y-10">
                
                {/* Header */}
                <div className="space-y-4 pr-12">
                  <span className="inline-block px-3 py-1 rounded-full text-[10px] font-inter font-black uppercase tracking-wider bg-primary/10 text-primary">
                    {selectedCase.categoryLabel}
                  </span>
                  <h2 className="font-be-vietnam-pro font-black text-2xl md:text-3xl leading-tight text-on-surface">
                    {selectedCase.title}
                  </h2>

                  {/* Meta Specs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-black/[0.03] border border-black/5 rounded-2xl p-4 md:p-6 font-inter text-xs text-on-surface-variant">
                    <div className="space-y-1">
                      <span className="block text-[10px] text-outline font-bold uppercase tracking-wider">Client Name</span>
                      <span className="block font-black text-[#1a1c1c]">{selectedCase.clientName}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] text-outline font-bold uppercase tracking-wider">Industry Niche</span>
                      <span className="block font-black text-[#1a1c1c]">{selectedCase.niche}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] text-outline font-bold uppercase tracking-wider">Ad Budget</span>
                      <span className="block font-black text-[#1a1c1c]">{selectedCase.adSpend}</span>
                    </div>
                    <div className="space-y-1">
                      <span className="block text-[10px] text-outline font-bold uppercase tracking-wider">Primary Efficiency</span>
                      <span className="block font-black text-primary">{selectedCase.roas}</span>
                    </div>
                  </div>
                </div>

                {/* Body split */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {/* Left Column: text summaries & steps */}
                  <div className="lg:col-span-2 space-y-8">
                    
                    <div className="space-y-3">
                      <h4 className="font-be-vietnam-pro font-extrabold text-sm text-primary uppercase tracking-wider border-b border-black/5 pb-2">
                        Executive Summary
                      </h4>
                      <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                        {selectedCase.overview}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h4 className="font-be-vietnam-pro font-extrabold text-sm text-[#a63e2d] uppercase tracking-wider border-b border-black/5 pb-2">
                        Roadblocks &amp; Pain Points
                      </h4>
                      <p className="font-inter text-xs text-[#414754] leading-relaxed">
                        {selectedCase.challenge}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-be-vietnam-pro font-extrabold text-sm text-[#2c4c34] uppercase tracking-wider border-b border-black/5 pb-2">
                        Operational Blueprint &amp; Execution
                      </h4>
                      <ul className="space-y-4">
                        {selectedCase.solution.map((sol, index) => (
                          <li key={index} className="flex gap-4 items-start">
                            <span className="font-be-vietnam-pro font-black text-xs text-[#2c4c34] bg-[#2c4c34]/10 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0">
                              0{index + 1}
                            </span>
                            <p className="font-inter text-xs text-on-surface-variant leading-relaxed pt-1">
                              {sol}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Right Column: Dashboard Card */}
                  <div className="lg:col-span-1 space-y-6">
                    
                    <div className="glass-card rounded-2xl p-6 border border-black/5 bg-black/[0.02] space-y-6">
                      <h4 className="font-be-vietnam-pro font-black text-sm text-[#1a1c1c] border-b border-black/5 pb-3">
                        📊 Performance Indicators
                      </h4>
                      
                      <table className="w-full font-inter text-xs text-left">
                        <thead>
                          <tr className="border-b border-black/5 text-outline">
                            <th className="pb-2 font-semibold">Indicator</th>
                            <th className="pb-2 font-semibold text-right">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-black/[0.03] text-on-surface-variant">
                          <tr>
                            <td className="py-2.5">Primary Growth</td>
                            <td className="py-2.5 font-bold text-primary text-right">{selectedCase.metrics.growth}</td>
                          </tr>
                          <tr>
                            <td className="py-2.5">Target Baseline</td>
                            <td className="py-2.5 text-right text-[#1a1c1c]">{selectedCase.metrics.start}</td>
                          </tr>
                          <tr>
                            <td className="py-2.5">Scale Achieved</td>
                            <td className="py-2.5 text-right text-[#1a1c1c]">{selectedCase.metrics.end}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="space-y-4 pt-4 border-t border-black/5 text-[11px] text-on-surface-variant leading-relaxed">
                        <div>
                          <strong className="block text-on-surface">Primary Audit Result:</strong>
                          <span>{selectedCase.metricsDetail.primary}</span>
                        </div>
                        <div>
                          <strong className="block text-on-surface">Conversion Lift:</strong>
                          <span>{selectedCase.metricsDetail.secondary}</span>
                        </div>
                        <div>
                          <strong className="block text-on-surface">Contribution Rate:</strong>
                          <span>{selectedCase.metricsDetail.tertiary}</span>
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Footer CTA block inside modal */}
                <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="space-y-1">
                    <h5 className="font-be-vietnam-pro font-bold text-xs text-on-surface">
                      Want to replicate these scaling numbers for your brand?
                    </h5>
                    <p className="font-inter text-[11px] text-[#414754]">
                      Schedule a free 1-on-1 portfolio review calendar call with our partners.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919424995426"
                    target="_blank"
                    className="bg-[#2ecc71] hover:scale-105 active:scale-95 text-white font-inter text-xs font-semibold px-6 py-3 rounded-xl transition-all shadow-[0_4px_12px_rgba(46,204,113,0.2)] cursor-pointer select-none"
                  >
                    💬 WhatsApp Consultation
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>

      <Footer />
    </>
  );
}
