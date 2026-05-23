"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PerformanceServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const channels = ["Google Ads", "Meta Ads", "LinkedIn Ads", "DSP Ads (Demand Side Platforms)"];

  const benefits = [
    {
      title: "Increase Brand Awareness",
      desc: "Improve your brand visibility through strategic ads on Google, Meta, YouTube & marketplaces.",
    },
    {
      title: "Quality Leads Generation",
      desc: "Connect with the right audience based on interests, behavior, and purchase intent.",
    },
    {
      title: "Achieve Better ROI",
      desc: "Through Performance Marketing with Data-Driven Campaigns, Smart Targeting, and Higher Conversion Growth.",
    },
    {
      title: "Expand Your Brand Reach",
      desc: "Grow your business in local, national, and global markets with targeted campaigns.",
    },
    {
      title: "Boost Audience Recall",
      desc: "Boost Audience Recall with High-Performing Marketing Ads that Increase Brand Visibility, Engagement, and Customer Recognition.",
    },
  ];

  const campaigns = [
    {
      title: "Search Advertising",
      desc: "Appear on top search results when customers actively search for your products or services.",
      icon: "search",
    },
    {
      title: "Social Media Advertising",
      desc: "High-converting campaigns across Meta, Instagram, Facebook, and LinkedIn.",
      icon: "share",
    },
    {
      title: "Shopping Ads",
      desc: "Showcase products directly on Google search with optimized shopping campaigns.",
      icon: "shopping_bag",
    },
    {
      title: "Display Advertising",
      desc: "Reach targeted audiences with banner and visual ads across websites and apps.",
      icon: "image",
    },
    {
      title: "Video Advertising",
      desc: "Engage audiences through high-impact video campaigns on platforms like YouTube.",
      icon: "play_circle",
    },
    {
      title: "Remarketing Ads",
      desc: "Reconnect with users who visited your website but didn’t convert.",
      icon: "replay",
    },
    {
      title: "Marketplace Advertising",
      desc: "Boost visibility and sales through sponsored ads on eCommerce Marketplaces.",
      icon: "storefront",
    },
    {
      title: "Lead Generation Campaigns",
      desc: "Generate high-quality business leads with optimized conversion funnels.",
      icon: "contacts",
    },
    {
      title: "App Install Campaigns",
      desc: "Drive more downloads and engagement for mobile applications.",
      icon: "install_desktop",
    },
  ];

  const faqs = [
    {
      q: "What is Performance Marketing?",
      a: "Performance marketing is a digital marketing strategy where businesses pay based on measurable results like clicks, leads, or sales.",
    },
    {
      q: "Which Platforms Do You Run Performance Marketing Ads On?",
      a: "We run campaigns on Google Ads, Meta Ads, Instagram, YouTube, LinkedIn, Amazon, Flipkart, and other marketplaces.",
    },
    {
      q: "How Does Performance Marketing Help My Business?",
      a: "It helps increase brand visibility, generate quality leads, boost sales, and improve overall return on investment (ROI).",
    },
    {
      q: "What Types of Ads Do You Run?",
      a: "We run Search Ads, Display Ads, Shopping Ads, Video Ads, Remarketing Ads, Lead Generation Ads, and Marketplace Ads.",
    },
    {
      q: "How Much Budget Is Required for Performance Marketing?",
      a: "The budget depends on your business goals, industry competition, target audience, and advertising platforms.",
    },
    {
      q: "Can You Target Specific Locations?",
      a: "Yes, we run local, national, international, and customized geo-targeted marketing campaigns.",
    },
    {
      q: "How Do You Measure Campaign Performance?",
      a: "We track impressions, clicks, conversions, leads, sales, ROAS, CTR, and customer engagement using analytics tools.",
    },
    {
      q: "How Long Does It Take to See Results?",
      a: "Some campaigns generate results within days, while optimized long-term campaigns deliver stronger growth over time.",
    },
    {
      q: "Do You Provide Custom Marketing Strategies?",
      a: "Yes, we create customized performance marketing strategies based on your brand goals and target audience.",
    },
    {
      q: "Why Choose Your Performance Marketing Services?",
      a: "We focus on data-driven strategies, audience targeting, conversion optimization, and scalable business growth.",
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
            <span className="inline-block bg-[#005ea5]/10 text-[#005ea5] border border-[#005ea5]/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
              Service Page - 2
            </span>
            <h1 className="font-be-vietnam-pro font-black text-4xl md:text-6xl leading-tight text-on-surface">
              Performance Marketing
            </h1>
            <h2 className="font-be-vietnam-pro text-xl md:text-2xl font-bold text-primary leading-snug">
              {channels.join(" • ")}
            </h2>
            <p className="font-be-vietnam-pro text-2xl md:text-3xl font-extrabold text-on-surface-variant max-w-3xl leading-tight italic pt-4">
              &quot;Smarter Ads. Better Conversions. Bigger Revenue.&quot;
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Why Performance Marketing Matters for Your Brand
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="w-8 h-8 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs mb-4">
                  ★
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-on-surface mb-2">
                  {benefit.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Specialization Section */}
        <section className="space-y-12">
          <div className="space-y-2">
            <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
              Marketing Campaigns We Specialize In
            </h2>
            <p className="font-inter text-xs text-on-surface-variant">
              Hyper-Targeted Marketing Campaigns for Local, National &amp; Global Reach.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {campaigns.map((campaign, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-primary/15 text-primary flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px] leading-none font-bold">
                    {campaign.icon}
                  </span>
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-be-vietnam-pro font-extrabold text-sm text-on-surface leading-tight">
                    {idx + 1}. {campaign.title}
                  </h3>
                  <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                    {campaign.desc}
                  </p>
                </div>
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
