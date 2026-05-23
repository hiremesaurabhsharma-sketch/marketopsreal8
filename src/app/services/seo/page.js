"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SeoServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const flow = ["Audit", "Keyword Research", "Optimization", "Link Building", "Reporting"];

  const challenges = [
    {
      title: "Low Organic Reach",
      desc: "Websites struggle to get traffic and rank for high-value keywords without proper optimization strategies.",
    },
    {
      title: "Increasing Ad Costs",
      desc: "Paid advertising is growing expensive, making compounding organic SEO crucial for long-term customer acquisition ROI.",
    },
    {
      title: "Slow Website Speed",
      desc: "Slow speed, poor mobile experience, and bad technical structures severely penalize search engine rankings.",
    },
    {
      title: "Poor User Experience",
      desc: "Lack of clean page SEO means bad site structure, navigation flow, and critical website security leaks.",
    },
  ];

  const services = [
    {
      title: "On-page SEO",
      desc: "Improves keyword rankings, increases organic search impressions, enhances user experience, and helps Google crawl and index your content.",
    },
    {
      title: "Off-Page SEO",
      desc: "Builds domain authority through white-hat backlink networks, brand mentions, and external digital trust signals.",
    },
    {
      title: "Local SEO",
      desc: "Helps your physical or local service business dominate nearby searches and maps listings to trigger calls, visits, and physical store sales.",
    },
    {
      title: "Technical SEO",
      desc: "Optimizes website crawl budgets, page speed indices, XML sitemaps, schemas, responsiveness, and SSL configurations.",
    },
    {
      title: "E-commerce SEO",
      desc: "Improves direct product visibility and category rankings to scale online shop organic order flows.",
    },
    {
      title: "Landing Page Optimization",
      desc: "Fuses clean copy with layout modifications to drop bounce rates and maximize organic conversion leads.",
    },
  ];

  const faqs = [
    {
      q: "What is SEO and how does it work?",
      a: "SEO improves your website visibility on search engines like Google by optimizing content relevance, keywords, and technical site structure.",
    },
    {
      q: "How long does SEO take to show results?",
      a: "SEO typically takes 3–6 months to show significant organic gains depending on industry competition, domain authority, and strategy execution.",
    },
    {
      q: "Do you provide Local SEO services?",
      a: "Yes, Local SEO helps brick-and-mortar or local service businesses rank at the top of Google Maps listings and regional search results.",
    },
    {
      q: "Is SEO better than paid ads?",
      a: "SEO provides compounding, long-term organic assets that generate free traffic, while PPC ads provide immediate but temporary paid visits.",
    },
    {
      q: "Will SEO increase my sales?",
      a: "Yes, by targeting transactional user intents, SEO drives highly motivated, ready-to-buy traffic to your website to boost conversions.",
    },
    {
      q: "What is E-commerce SEO?",
      a: "E-commerce SEO optimizes category paths, product pages, site schema, and image delivery to drive direct organic marketplace orders.",
    },
    {
      q: "How do you measure SEO success?",
      a: "We track search impressions, organic traffic volume, keyword ranking positions, click-through rates (CTR), and direct goal conversions.",
    },
    {
      q: "Do you fix SEO issues on existing websites?",
      a: "Yes, we perform complete site audits and fix performance bottlenecks, broken link architectures, thin pages, and sitemap errors.",
    },
    {
      q: "Is SEO a one-time process?",
      a: "No, SEO is an ongoing process that requires continuous content creation, backlink generation, and adapting to search engine updates.",
    },
    {
      q: "What is Google ranking factor?",
      a: "Google uses hundreds of factors, primarily content quality, crawl speed, high-authority backlinks, mobile experience, and secure HTTPS structures.",
    },
  ];

  return (
    <>
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-12 py-[60px] select-none text-left relative z-10 space-y-24">
        
        {/* Service Hero */}
        <section className="space-y-6 max-w-4xl">
          <Link
            href="/services"
            className="flex items-center gap-2 text-primary font-inter text-xs font-bold hover:underline transition-all cursor-pointer w-fit"
          >
            <span className="material-symbols-outlined text-xs font-bold leading-none">arrow_back</span>
            Back to Services
          </Link>

          <div className="space-y-4">
            <span className="inline-block bg-[#ff9900]/10 text-[#ff9900] border border-[#ff9900]/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
              Service Page - 4
            </span>
            <h1 className="font-be-vietnam-pro font-black text-4xl md:text-6xl leading-tight text-on-surface">
              SEO Optimization
            </h1>
            <h2 className="font-be-vietnam-pro text-xl md:text-2xl font-bold text-primary leading-snug">
              {flow.join(" → ")}
            </h2>
            <p className="font-be-vietnam-pro text-2xl md:text-3xl font-extrabold text-on-surface-variant max-w-3xl leading-tight italic pt-4">
              &quot;Rank Your Website Higher on Google with Proven SEO Strategies&quot;
            </p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Common Search Challenges in Today&apos;s Digital Era
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#a63e2d]/10 text-[#a63e2d] flex items-center justify-center font-bold text-xs">
                  !
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-[#a63e2d] mb-3">
                  {challenge.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            How We Can Fix It
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#2c4c34]/10 text-[#2c4c34] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs leading-none font-bold">check</span>
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-[#2c4c34] mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* FAQs Accordion */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4 max-w-4xl">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="glass-card rounded-2xl border border-black/5 overflow-hidden transition-all duration-300"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full p-6 flex justify-between items-center text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-be-vietnam-pro font-extrabold text-sm text-on-surface">
                      {idx + 1}. {faq.q}
                    </span>
                    <span className="material-symbols-outlined text-primary text-lg leading-none font-black transition-transform duration-300">
                      {isOpen ? "remove" : "add"}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 font-inter text-xs text-on-surface-variant leading-relaxed border-t border-black/[0.03] animate-[slideDownFade_0.3s_ease_forwards]">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

      </main>

      <Footer />
    </>
  );
}
