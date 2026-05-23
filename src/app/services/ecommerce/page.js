"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function EcommerceServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const platforms = [
    "Amazon",
    "Flipkart",
    "Myntra",
    "Meesho",
    "Blinkit",
    "Zepto",
    "Swiggy Instamart",
  ];

  const challenges = [
    {
      title: "Low Product Visibility",
      desc: "Your products are not ranking for high-converting keywords, resulting in low organic traffic and fewer sales.",
    },
    {
      title: "Poor Ad Performance & High ACOS",
      desc: "Advertising campaigns spend more but deliver low conversions due to weak targeting and poor optimization.",
    },
    {
      title: "Listing Optimization Issues",
      desc: "Unoptimized titles, bullet points, images, and backend keywords reduce click-through rate and conversion rate.",
    },
    {
      title: "Inventory & Stock Management Problems",
      desc: "Frequent stock-outs or overstock situations impact rankings, sales consistency, and profitability.",
    },
    {
      title: "Buy Box & Pricing Challenges",
      desc: "Inconsistent pricing strategies and competition can lead to Buy Box loss and reduced sales.",
    },
    {
      title: "Account Growth Stagnation",
      desc: "Without a proper strategy, many marketplace accounts struggle to scale revenue, launch new products, or expand profitably.",
    },
  ];

  const solutions = [
    {
      title: "Marketplace Account Audit",
      desc: "We analyze your account performance, listings, ads, pricing, and competitors to identify growth opportunities.",
    },
    {
      title: "Listing & SEO Optimization",
      desc: "We optimize titles, keywords, bullet points, images, and descriptions to improve visibility and conversions.",
    },
    {
      title: "PPC Campaign Management",
      desc: "We create and optimize advertising campaigns to reduce ACOS and maximize profitable sales.",
    },
    {
      title: "Inventory & Pricing Strategy",
      desc: "We manage stock planning and pricing strategies to maintain Buy Box performance and avoid lost sales.",
    },
    {
      title: "Conversion & Brand Growth",
      desc: "We improve storefronts, A+ content, and customer experience to increase trust and conversion rates.",
    },
    {
      title: "Scaling & Performance Monitoring",
      desc: "We continuously track performance, optimize strategies, and scale your marketplace growth sustainably.",
    },
  ];

  const faqs = [
    {
      q: "Which marketplaces do you manage?",
      a: "We provide complete e-commerce solutions for marketplaces including Amazon, Flipkart, Myntra, Meesho, Blinkit, Zepto, and Swiggy Instamart.",
    },
    {
      q: "Do you help with new seller account setup?",
      a: "Yes, we assist with complete marketplace account setup, brand registration, catalog creation, and onboarding support.",
    },
    {
      q: "Can you optimize our product listings?",
      a: "Absolutely. We optimize titles, bullet points, descriptions, keywords, A+ content, and product images to improve visibility and conversions.",
    },
    {
      q: "Do you manage PPC and advertising campaigns?",
      a: "Yes, we create and manage performance-driven advertising campaigns to improve sales, rankings, and ROAS while reducing ACOS.",
    },
    {
      q: "Can you help increase sales on marketplaces?",
      a: "Our strategies focus on improving product visibility, conversion rates, ad performance, and overall account growth to drive higher sales.",
    },
    {
      q: "Do you support Quick Commerce platforms?",
      a: "Yes, we help brands scale on quick commerce platforms like Blinkit, Zepto, and Swiggy Instamart with catalog management and growth strategies.",
    },
    {
      q: "How do you improve product rankings?",
      a: "We use marketplace SEO, keyword optimization, PPC management, inventory planning, and conversion-focused strategies to improve rankings organically.",
    },
    {
      q: "Do you provide complete account management services?",
      a: "Yes, we offer end-to-end marketplace management including listings, ads, inventory planning, pricing strategy, reports, and growth consulting.",
    },
    {
      q: "Can you manage multiple marketplaces together?",
      a: "Yes, we provide centralized marketplace management solutions for brands selling across multiple e-commerce platforms.",
    },
    {
      q: "Why should brands choose MarketOps For e-commerce solutions?",
      a: "We focus on data-driven growth, marketplace expertise, conversion optimization, and long-term scaling strategies designed for sustainable success.",
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
            <span className="inline-block bg-[#2c4c34]/10 text-[#2c4c34] border border-[#2c4c34]/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
              Service Page - 1
            </span>
            <h1 className="font-be-vietnam-pro font-black text-4xl md:text-6xl leading-tight text-on-surface">
              Ecommerce Solutions
            </h1>
            <h2 className="font-be-vietnam-pro text-xl md:text-2xl font-bold text-primary leading-snug">
              {platforms.join(" • ")}
            </h2>
            <p className="font-be-vietnam-pro text-2xl md:text-3xl font-extrabold text-on-surface-variant max-w-3xl leading-tight italic pt-4">
              &quot;From Store Setup to Sales Growth — We Handle Everything&quot;
            </p>
          </div>
        </section>

        {/* Challenges Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Top Challenges Limiting Your Marketplace Growth
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {challenges.map((challenge, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#a63e2d]/10 text-[#a63e2d] flex items-center justify-center font-bold text-xs">
                  !
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-[#a63e2d] mb-3">
                  {idx + 1}. {challenge.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {challenge.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Solutions Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Here&apos;s How We Solve Them
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#2c4c34]/10 text-[#2c4c34] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs leading-none font-bold">check</span>
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-[#2c4c34] mb-3">
                  {idx + 1}. {solution.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {solution.desc}
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
