"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function CreativeServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const platforms = ["Meta Ads", "TikTok Ads", "YouTube", "Direct Mail", "Brand Assets"];

  const importance = [
    {
      title: "Grabs Attention Instantly",
      desc: "Strong creatives help your brand stand out in a crowded digital space and stop users from scrolling.",
    },
    {
      title: "Communicates Value Clearly",
      desc: "Creative marketing simplifies complex messages and helps customers quickly understand your product or service.",
    },
    {
      title: "Improves Conversion Rates",
      desc: "Well-designed ads and visuals directly influence buying decisions and increase overall sales.",
    },
    {
      title: "Boosts Engagement",
      desc: "Creative content increases likes, shares, comments, and overall customer interaction.",
    },
    {
      title: "Builds Brand Identity",
      desc: "Consistent visuals, messaging, and design create a highly recognizable and trustworthy brand image.",
    },
  ];

  const categories = [
    {
      title: "Social Media Creatives",
      desc: "Engaging posts, carousels, reels covers, and story designs for Instagram, Facebook, LinkedIn, etc.",
    },
    {
      title: "Ad Creatives (Performance Ads)",
      desc: "High-converting visuals and videos specifically engineered for Meta Ads, Google Ads, and other paid campaigns.",
    },
    {
      title: "Brand Identity Creatives",
      desc: "Custom logos, distinct color themes, typography selections, brand guidelines, and visual identity systems.",
    },
    {
      title: "Website & Landing Page Creatives",
      desc: "Interactive hero banners, sleek UI sections, conversion-focused layout illustrations, and promotional visuals.",
    },
    {
      title: "Video Creatives & Motion Graphics",
      desc: "Animated ads, high-fidelity product showcase videos, explainer videos, and short-form content for reels.",
    },
    {
      title: "eCommerce Marketplace Creative",
      desc: "Product image mockups, high-converting A+ content layouts, Amazon storefront designs, and lifestyle visuals.",
    },
  ];

  const faqs = [
    {
      q: "What is a marketing creative?",
      a: "A marketing creative refers to any visual, audio, or copy assets used to represent a brand or promote its products in ad campaigns and social media.",
    },
    {
      q: "Why is custom creative design important for ad scaling?",
      a: "Unique and custom designs grab visual attention, convey emotional selling points, bypass ad fatigue, and directly increase conversion ratios.",
    },
    {
      q: "Do you write copies for the visuals and video ads?",
      a: "Yes, we write high-impact, direct-response headline copies and video scripts matching target consumer psychology.",
    },
    {
      q: "Can you design A+ content and listings for Amazon and marketplaces?",
      a: "Absolutely. We specialize in producing marketplace lifestyle graphics, A+ content maps, and custom storefront banner panels.",
    },
    {
      q: "How do you maintain brand design consistency?",
      a: "We study your brand style guidelines or help you establish them, aligning color schemes, font weights, and logos across all visual assets.",
    },
    {
      q: "What file formats do you deliver for social and ad creatives?",
      a: "We deliver industry-standard high-resolution file packages (PNGs, JPEGs, MP4s, WebMs, and raw design source files if requested).",
    },
    {
      q: "Can you create video ads and short-form UGC reels?",
      a: "Yes, we produce custom motion graphics, product showcases, and high-impact UGC-style short videos optimized for Meta, YouTube, and TikTok ads.",
    },
    {
      q: "How long does a creative batch delivery take?",
      a: "Standard social batches take 3-5 business days, while premium corporate motion graphics or complete brand overhauls take 1-3 weeks.",
    },
    {
      q: "Do you offer layout designs for landing pages and sites?",
      a: "Yes, we design conversion-focused website mockups, ad landing pages, custom banners, and interactive interfaces.",
    },
    {
      q: "Why should we choose MarketOps for our brand creatives?",
      a: "Our designs are built on direct conversion performance data. We don't just design pretty layouts; we design assets structured to sell.",
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
            <span className="inline-block bg-[#ea4c89]/10 text-[#ea4c89] border border-[#ea4c89]/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
              Service Page - 5
            </span>
            <h1 className="font-be-vietnam-pro font-black text-4xl md:text-6xl leading-tight text-on-surface">
              Marketing Creative
            </h1>
            <h2 className="font-be-vietnam-pro text-xl md:text-2xl font-bold text-primary leading-snug">
              {platforms.join(" • ")}
            </h2>
            <p className="font-be-vietnam-pro text-2xl md:text-3xl font-extrabold text-on-surface-variant max-w-3xl leading-tight italic pt-4">
              &quot;Create Marketing That People Don&apos;t Just See — They Remember&quot;
            </p>
          </div>
        </section>

        {/* Importance Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Creativity to Build Powerful Brand Experiences
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {importance.map((item, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mb-4">
                  ★
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-on-surface mb-2">
                  {item.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Categories Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Types of Creatives We Customize for Your Brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-primary mb-3">
                  {category.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {category.desc}
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
