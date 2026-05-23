"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function OverseasServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const platforms = ["US Markets", "Europe Markets", "Middle East", "Southeast Asia"];

  const services = [
    {
      title: "International Market Research & Entry Strategy",
      desc: "Deep research on target demographics, regional compliance, purchasing habits, and pricing policies.",
    },
    {
      title: "Global Lead Generation & Business Outreach",
      desc: "Connect with high-value business leads and prospective commercial partners across borders.",
    },
    {
      title: "Cross-Border Partnership Development",
      desc: "Structure safe and mutually beneficial scaling agreements with distributors and overseas agents.",
    },
    {
      title: "Export & Expansion Planning",
      desc: "Systematic logistical mapping, regulatory clearances, and supply chain scaling roadmaps.",
    },
    {
      title: "Digital Global Branding & Positioning",
      desc: "Adjust marketing copy, branding, and assets to align with local cultural norms and search terms.",
    },
  ];

  const highlights = [
    {
      title: "Strong Understanding of Global Markets",
      desc: "Years of localized growth experience in the US, Europe, GCC, and APAC regions.",
    },
    {
      title: "Data-Driven Expansion Strategies",
      desc: "We run diagnostic tests on search demand and pricing scales before executing heavy capital moves.",
    },
    {
      title: "End-to-End Business Development Support",
      desc: "From initial lead outreach templates to legal framework checkups, we assist at every transition phase.",
    },
    {
      title: "Focus on Real Growth & Long-Term Success",
      desc: "We focus on real sales, sustainable trade partnerships, and growing margins, not vanity outreach impressions.",
    },
  ];

  const faqs = [
    {
      q: "How do you help businesses expand overseas?",
      a: "We perform local market research, establish B2B lead generation streams, design entry campaigns, and identify cross-border channel partners.",
    },
    {
      q: "Which international markets do you specialize in?",
      a: "We specialize in scaling brands into premium regions including the United States, United Kingdom, European Union, UAE/GCC countries, and Southeast Asia.",
    },
    {
      q: "Do you assist with local customs and logistics planning?",
      a: "We outline custom compliance regulations, import duties, and trade models, and recommend verified third-party freight and fulfillment partners.",
    },
    {
      q: "How do you generate business leads internationally?",
      a: "We use geo-targeted LinkedIn campaigns, hyper-focused email pipelines, local search ads, and coordinate outreach with local agents.",
    },
    {
      q: "What types of businesses can expand using your services?",
      a: "We scale D2C e-commerce brands, high-tier B2B manufacturing firms, SaaS platforms, and premium professional service corporations.",
    },
    {
      q: "How do you adjust marketing creatives for global audiences?",
      a: "We localize visual graphics, translate and adjust taglines to match regional languages, and ensure local compliance models are respected.",
    },
    {
      q: "How do you test international consumer interest cheaply?",
      a: "We run low-budget search and social ad diagnostic flights to measure CTR, conversion indicators, and initial feedback before localized bulk shipments.",
    },
    {
      q: "Do you coordinate with global trade distributors?",
      a: "Yes, we help research, outreach, and negotiate pricing margins with international retailers, distributors, and quick-commerce agencies.",
    },
    {
      q: "What is your pricing model for overseas business development?",
      a: "We offer tailored retainer budgets plus milestone options depending on the scope of market entry, research needs, and outreach pipelines.",
    },
    {
      q: "Why choose MarketOps for international business expansion?",
      a: "We combine digital advertising speed with verified international trade structures, making cross-border scaling secure and highly profitable.",
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
            <span className="inline-block bg-[#2ecc71]/10 text-[#2ecc71] border border-[#2ecc71]/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
              Service Page - 6
            </span>
            <h1 className="font-be-vietnam-pro font-black text-4xl md:text-6xl leading-tight text-on-surface">
              Overseas Business Expansion
            </h1>
            <h2 className="font-be-vietnam-pro text-xl md:text-2xl font-bold text-primary leading-snug">
              {platforms.join(" • ")}
            </h2>
            <p className="font-be-vietnam-pro text-2xl md:text-3xl font-extrabold text-on-surface-variant max-w-3xl leading-tight italic pt-4">
              &quot;Expand Beyond Borders. Grow Without Limits.&quot;
            </p>
          </div>
        </section>

        {/* What We Do Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Global Growth Systems We Build For Your Brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-primary mb-3">
                  {service.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Why Scale Globally With MarketOps?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#2c4c34]/10 text-[#2c4c34] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs leading-none font-bold">check</span>
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-[#2c4c34] mb-3">
                  {highlight.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {highlight.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Immersive CTA */}
        <section className="glass-card rounded-3xl p-8 md:p-12 border border-black/5 flex flex-col md:flex-row items-center justify-between gap-8 bg-gradient-to-r from-primary/5 via-transparent to-[#2ecc71]/5">
          <div className="space-y-3 text-left">
            <h2 className="font-be-vietnam-pro font-black text-2xl md:text-3xl text-on-surface">
              Grow Globally with Confidence
            </h2>
            <p className="font-inter text-xs text-on-surface-variant max-w-xl">
              Take your brand from local recognition to global presence with a clear, structured, and scalable expansion strategy.
            </p>
          </div>
          <a
            href="https://wa.me/919424995426"
            target="_blank"
            className="flex items-center gap-3 bg-[#2ecc71] text-white px-8 py-4 rounded-[16px] font-inter text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[0_10px_20px_rgba(46,204,113,0.2)] cursor-pointer whitespace-nowrap"
          >
            Start Your Global Expansion
            <span className="material-symbols-outlined bg-white text-[#2ecc71] rounded-full p-1 leading-none text-xs font-bold">
              arrow_forward
            </span>
          </a>
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
