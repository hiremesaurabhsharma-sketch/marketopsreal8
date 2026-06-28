"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

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

  const getCategoryStyles = (cat) => {
    switch (cat) {
      case "ecommerce":
        return { bg: "bg-blue-100", color: "text-blue-700", barBg: "bg-blue-600", border: "border-blue-200", shadowHover: "hover:shadow-[0_20px_60px_rgba(59,130,246,0.2)]", hoverBorder: "hover:border-blue-300", glow: "from-blue-100/80" };
      case "performance":
        return { bg: "bg-cyan-100", color: "text-cyan-700", barBg: "bg-cyan-600", border: "border-cyan-200", shadowHover: "hover:shadow-[0_20px_60px_rgba(6,182,212,0.2)]", hoverBorder: "hover:border-cyan-300", glow: "from-cyan-100/80" };
      case "webdev":
        return { bg: "bg-emerald-100", color: "text-emerald-700", barBg: "bg-emerald-600", border: "border-emerald-200", shadowHover: "hover:shadow-[0_20px_60px_rgba(16,185,129,0.2)]", hoverBorder: "hover:border-emerald-300", glow: "from-emerald-100/80" };
      case "seo":
        return { bg: "bg-amber-100", color: "text-amber-700", barBg: "bg-amber-500", border: "border-amber-200", shadowHover: "hover:shadow-[0_20px_60px_rgba(245,158,11,0.2)]", hoverBorder: "hover:border-amber-300", glow: "from-amber-100/80" };
      case "creative":
        return { bg: "bg-purple-100", color: "text-purple-700", barBg: "bg-purple-600", border: "border-purple-200", shadowHover: "hover:shadow-[0_20px_60px_rgba(168,85,247,0.2)]", hoverBorder: "hover:border-purple-300", glow: "from-purple-100/80" };
      case "overseas":
        return { bg: "bg-indigo-100", color: "text-indigo-700", barBg: "bg-indigo-600", border: "border-indigo-200", shadowHover: "hover:shadow-[0_20px_60px_rgba(99,102,241,0.2)]", hoverBorder: "hover:border-indigo-300", glow: "from-indigo-100/80" };
      default:
        return { bg: "bg-gray-100", color: "text-gray-700", barBg: "bg-gray-600", border: "border-gray-200", shadowHover: "hover:shadow-[0_20px_60px_rgba(100,116,139,0.2)]", hoverBorder: "hover:border-gray-300", glow: "from-gray-100/80" };
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
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Cases Hero Section - Pinnacle Style */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-32 overflow-hidden px-6 bg-gradient-to-b from-[#3b82f6] to-[#e0f2fe]">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-white/30 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 space-y-6 max-w-3xl mx-auto mt-4">
          <span className="inline-block bg-blue-600 text-white text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-lg shadow-blue-500/30">
            Success Showcases
          </span>
          <h1 className="font-bold text-5xl md:text-7xl leading-tight text-[#0f172a]">
            Real Growth.<br/>
            <span className="text-blue-700">Proven Results.</span>
          </h1>
          <p className="text-slate-700 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-medium">
            Explore direct-response statistics, search authority metrics, and B2B expansion case studies from our verified portfolio partners.
          </p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 pb-24 pt-4 select-none text-left relative z-10 space-y-16 bg-[#f8fafc] -mt-10 rounded-t-[3rem]">
        
        {/* Controls / Filter Bar */}
        <section className="space-y-6 bg-white border border-slate-200 rounded-3xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] relative z-20">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-lg">
                search
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search case study..."
                className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
              />
            </div>

            {/* Sort Select */}
            <div className="relative w-full md:w-fit">
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value)}
                className="w-full md:w-[220px] px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl font-bold text-slate-700 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all cursor-pointer"
              >
                <option value="relevance">Sort by Relevance</option>
                <option value="growth-desc">Growth Rate: High to Low</option>
                <option value="growth-asc">Growth Rate: Low to High</option>
              </select>
            </div>
          </div>

          {/* Bottom row: Category filter tabs */}
          <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 pt-6">
            {categories.map((cat) => {
              const active = currentCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setCurrentCategory(cat.id)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider transition-all cursor-pointer ${
                    active
                      ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30 scale-105"
                      : "bg-slate-100 text-slate-600 hover:bg-blue-50 hover:text-blue-600 hover:scale-105"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </section>

        {/* Grid of Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredCases.length === 0 ? (
            <div className="col-span-full py-16 text-center space-y-4 bg-white border border-dashed border-slate-300 rounded-3xl">
              <span className="material-symbols-outlined text-4xl text-slate-400">search_off</span>
              <h3 className="font-bold text-xl text-slate-800">No Case Studies Found</h3>
              <p className="font-medium text-sm text-slate-500 max-w-xs mx-auto">
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
                  className={`group relative rounded-[2rem] bg-white p-8 transition-all duration-500 shadow-[0_4px_20px_rgba(0,0,0,0.04)] overflow-hidden flex flex-col justify-between border border-gray-100 hover:-translate-y-2 z-10 cursor-pointer min-h-[380px] ${styles.hoverBorder} ${styles.shadowHover}`}
                >
                  {/* Creative Elements */}
                  <div className={`absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br ${styles.glow} to-transparent rounded-full -translate-y-1/4 translate-x-1/4 group-hover:scale-[1.4] transition-transform duration-700 pointer-events-none`}></div>
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808020_1px,transparent_1px),linear-gradient(to_bottom,#80808020_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none group-hover:opacity-100 opacity-60 transition-opacity"></div>
                  
                  <div className="relative z-10 space-y-5">
                    <span className={`inline-block px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest border ${styles.bg} ${styles.color} ${styles.border} shadow-sm`}>
                      {item.categoryLabel}
                    </span>
                    <h3 className={`font-bold text-2xl text-[#0f172a] line-clamp-3 leading-snug group-hover:${styles.color} transition-colors`}>
                      {item.title}
                    </h3>
                    <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 font-medium">
                      {item.overview}
                    </p>
                  </div>

                  <div className="relative z-10 space-y-5 pt-6 mt-6 border-t border-slate-100">
                    <div className="flex justify-between items-end">
                      <div className="space-y-1">
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                          {item.metrics.label}
                        </span>
                        <span className="block font-black text-xl text-[#0f172a] leading-none">
                          {item.metrics.end}
                        </span>
                      </div>
                      <div className="space-y-1 text-right">
                        <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider leading-none">
                          Growth
                        </span>
                        <span className={`block font-black text-xl leading-none ${styles.color}`}>
                          {item.metrics.growth}
                        </span>
                      </div>
                    </div>

                    {/* Progress Bar */}
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden shadow-inner">
                      <div
                        className={`h-full ${styles.barBg} rounded-full transition-all duration-1000`}
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
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-md cursor-pointer transition-opacity"
            ></div>

            {/* Modal Box */}
            <div className="relative bg-white border border-slate-200 w-full max-w-5xl h-[90vh] md:h-[85vh] rounded-[2rem] shadow-2xl flex flex-col z-10 overflow-hidden animate-[slideUpFade_0.3s_ease_forwards] text-left">
              {/* Close Button */}
              <button
                onClick={() => setSelectedCase(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 hover:bg-slate-200 flex items-center justify-center focus:outline-none transition-all cursor-pointer z-30 text-slate-600 hover:text-slate-900"
              >
                <span className="material-symbols-outlined text-xl leading-none font-bold">close</span>
              </button>

              {/* Modal Scroll Content */}
              <div className="flex-grow overflow-y-auto p-8 md:p-12 space-y-12">
                
                {/* Header */}
                <div className="space-y-6 pr-12 max-w-4xl">
                  <span className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border shadow-sm ${getCategoryStyles(selectedCase.category).bg} ${getCategoryStyles(selectedCase.category).color} ${getCategoryStyles(selectedCase.category).border}`}>
                    {selectedCase.categoryLabel}
                  </span>
                  <h2 className="font-bold text-3xl md:text-5xl leading-tight text-[#0f172a]">
                    {selectedCase.title}
                  </h2>

                  {/* Meta Specs Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-50 border border-slate-100 rounded-2xl p-6">
                    <div className="space-y-1.5">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Client Name</span>
                      <span className="block font-black text-slate-800 text-sm">{selectedCase.clientName}</span>
                    </div>
                    <div className="space-y-1.5">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Industry Niche</span>
                      <span className="block font-black text-slate-800 text-sm">{selectedCase.niche}</span>
                    </div>
                    <div className="space-y-1.5">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Ad Budget</span>
                      <span className="block font-black text-slate-800 text-sm">{selectedCase.adSpend}</span>
                    </div>
                    <div className="space-y-1.5">
                      <span className="block text-[10px] text-slate-400 font-bold uppercase tracking-widest">Primary Efficiency</span>
                      <span className={`block font-black text-sm ${getCategoryStyles(selectedCase.category).color}`}>{selectedCase.roas}</span>
                    </div>
                  </div>
                </div>

                {/* Body split */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                  {/* Left Column: text summaries & steps */}
                  <div className="lg:col-span-2 space-y-10">
                    
                    <div className="space-y-4">
                      <h4 className="font-bold text-sm text-slate-900 uppercase tracking-widest border-b border-slate-100 pb-3">
                        Executive Summary
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {selectedCase.overview}
                      </p>
                    </div>

                    <div className="space-y-4">
                      <h4 className="font-bold text-sm text-red-600 uppercase tracking-widest border-b border-slate-100 pb-3">
                        Roadblocks &amp; Pain Points
                      </h4>
                      <p className="text-slate-600 text-sm leading-relaxed font-medium">
                        {selectedCase.challenge}
                      </p>
                    </div>

                    <div className="space-y-6">
                      <h4 className="font-bold text-sm text-emerald-600 uppercase tracking-widest border-b border-slate-100 pb-3">
                        Operational Blueprint &amp; Execution
                      </h4>
                      <ul className="space-y-5">
                        {selectedCase.solution.map((sol, index) => (
                          <li key={index} className="flex gap-4 items-start">
                            <span className="font-black text-xs text-emerald-700 bg-emerald-100 rounded-lg w-8 h-8 flex items-center justify-center flex-shrink-0 shadow-sm">
                              0{index + 1}
                            </span>
                            <p className="text-slate-600 text-sm leading-relaxed font-medium pt-1">
                              {sol}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                  {/* Right Column: Dashboard Card */}
                  <div className="lg:col-span-1">
                    <div className="bg-slate-50 rounded-3xl p-8 border border-slate-200 space-y-8 sticky top-0 shadow-sm">
                      <h4 className="font-black text-base text-slate-800 border-b border-slate-200 pb-4">
                        📊 Performance Indicators
                      </h4>
                      
                      <table className="w-full text-sm text-left">
                        <thead>
                          <tr className="border-b border-slate-200 text-slate-400">
                            <th className="pb-3 font-bold uppercase tracking-wider text-[10px]">Indicator</th>
                            <th className="pb-3 font-bold uppercase tracking-wider text-[10px] text-right">Value</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 text-slate-600 font-medium">
                          <tr>
                            <td className="py-4">Primary Growth</td>
                            <td className={`py-4 font-black text-lg text-right ${getCategoryStyles(selectedCase.category).color}`}>{selectedCase.metrics.growth}</td>
                          </tr>
                          <tr>
                            <td className="py-4">Target Baseline</td>
                            <td className="py-4 text-right font-bold text-slate-800">{selectedCase.metrics.start}</td>
                          </tr>
                          <tr>
                            <td className="py-4">Scale Achieved</td>
                            <td className="py-4 text-right font-bold text-slate-800">{selectedCase.metrics.end}</td>
                          </tr>
                        </tbody>
                      </table>

                      <div className="space-y-5 pt-6 border-t border-slate-200 text-xs text-slate-500 leading-relaxed font-medium">
                        <div>
                          <strong className="block text-slate-800 mb-1">Primary Audit Result:</strong>
                          <span>{selectedCase.metricsDetail.primary}</span>
                        </div>
                        <div>
                          <strong className="block text-slate-800 mb-1">Conversion Lift:</strong>
                          <span>{selectedCase.metricsDetail.secondary}</span>
                        </div>
                        <div>
                          <strong className="block text-slate-800 mb-1">Contribution Rate:</strong>
                          <span>{selectedCase.metricsDetail.tertiary}</span>
                        </div>
                      </div>

                    </div>
                  </div>
                </div>

                {/* Footer CTA block inside modal */}
                <div className="bg-blue-50 border border-blue-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-8">
                  <div className="space-y-2 text-center md:text-left">
                    <h5 className="font-bold text-lg text-blue-900">
                      Want to replicate these scaling numbers for your brand?
                    </h5>
                    <p className="text-sm text-blue-700 font-medium">
                      Schedule a free 1-on-1 portfolio review calendar call with our partners.
                    </p>
                  </div>
                  <a
                    href="https://wa.me/919111880088"
                    target="_blank"
                    className="bg-blue-600 hover:bg-blue-700 hover:-translate-y-1 active:translate-y-0 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(37,99,235,0.3)] cursor-pointer select-none whitespace-nowrap"
                  >
                    💬 WhatsApp Consultation
                  </a>
                </div>

              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}
