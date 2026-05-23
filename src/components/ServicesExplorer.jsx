"use client";

import { useState } from "react";

export default function ServicesExplorer() {
  const [activeTab, setActiveTab] = useState(0);

  const services = [
    {
      title: "E-Commerce Solutions",
      tagline: "From Store Setup to Sales Growth — “ We Handle Everything “",
      icon: "shopping_cart",
      platforms: ["Amazon", "Flipkart", "Myntra", "Meesho", "Blinkit", "Zepto", "Instamart"],
      challenges: [
        "Low organic search visibility & ranking",
        "Poor ad conversions & high ACOS",
        "Listing layout & image optimization bottlenecks",
      ],
      solutions: [
        "Full Marketplace Account Audits",
        "Keyword, title, bullet, and A+ content SEO",
        "Profitable PPC & Sponsored campaign management",
      ],
      bullets: [
        "Storefront design & A+ cataloging",
        "中央 inventory & pricing monitoring",
        "Centralized multi-channel scaling",
      ],
    },
    {
      title: "Performance Marketing",
      tagline: "Smarter Ads. Better Conversions. Bigger Revenue.",
      icon: "trending_up",
      platforms: ["Google Ads", "Meta Ads", "LinkedIn", "YouTube", "DSP Platforms"],
      challenges: [
        "Expensive paid ads with low click-through rates",
        "Difficulty targeting high-intent buyers",
        "Poor retargeting & client recall on visual networks",
      ],
      solutions: [
        "Hyper-targeted Search & Visual banner advertising",
        "High-converting Instagram, Meta & LinkedIn campaigns",
        "Oversized Shopping, Dynamic, and YouTube video ads",
      ],
      bullets: [
        "Lead generation conversion funnels",
        "App install & download campaigns",
        "Continuous A/B optimization",
      ],
    },
    {
      title: "Web Design & Dev",
      tagline: "Build a Powerful Online Presence with Fast, Scalable & Custom Sites",
      icon: "code",
      platforms: ["WordPress", "Shopify", "AWS", "CodeX"],
      challenges: [
        "Slow-loading web templates with bad user flows",
        "Lack of security & broken cart checkout integrations",
        "Poor responsiveness on modern mobile viewports",
      ],
      solutions: [
        "Custom high-speed Headless & WordPress creations",
        "Fully-responsive UX frameworks for all layouts",
        "Secure payment gateway & CMS administration integrations",
      ],
      bullets: [
        "Dynamic real-time dashboards",
        "Landing page lead hooks",
        "Centralized support & maintenance",
      ],
    },
    {
      title: "SEO Optimization",
      tagline: "Rank Your Website Higher on Google with Proven SEO Strategies",
      icon: "search",
      platforms: ["Google Search", "Google Maps", "Bing", "Schema Markup"],
      challenges: [
        "Declining organic reach & expensive paid traffic costs",
        "Bad website indexing, crawling, or schema markups",
        "Weak link profiles and low local map presence",
      ],
      solutions: [
        "Technical audit, speed tuning, and crawlability optimization",
        "On-page, metadata, and body content semantic tuning",
        "Authoritative link-building & local Google Maps SEO",
      ],
      bullets: [
        "E-commerce category structure SEO",
        "Actionable rankings & analytics reports",
        "Conversion landing page optimization",
      ],
    },
    {
      title: "Marketing Creative",
      tagline: "Create Marketing That People Don’t Just See — They Remember",
      icon: "palette",
      platforms: ["Adobe Suite", "Figma", "Motion Graphics", "Reels Creative"],
      challenges: [
        "Boring, static visual mockups that users scroll past",
        "Inconsistent brand design and typography choices",
        "Unclear value messaging in promotional templates",
      ],
      solutions: [
        "Grabbing social media posts, stories, and carousel layouts",
        "High-impact ad banners and short-form reels creatives",
        "Cohesive brand visual identity guides & motion graphics",
      ],
      bullets: [
        "A+ e-commerce content designs",
        "Lifestyle visual assets",
        "Engagement-focused concepts",
      ],
    },
    {
      title: "Overseas Expansion",
      tagline: "Expand Beyond Borders. Grow Without Limits.",
      icon: "public",
      platforms: ["Global Markets", "Cross-Border Logistics", "Export Planning"],
      challenges: [
        "Difficulty entering complex new international target spaces",
        "Weak cross-border partnerships and log-in triggers",
        "Poor digital global brand positioning & lead collection",
      ],
      solutions: [
        "Global market analytics & structured entry frameworks",
        "Cross-border partner outreach and B2B outreach schemes",
        "International brand positioning & digital growth models",
      ],
      bullets: [
        "Export and scaling compliance guidance",
        "Global lead pipelines",
        "Free strategy consulting hooks",
      ],
    },
  ];

  return (
    <section id="services-explorer" className="w-full max-w-container-max flex flex-col gap-12 select-none relative z-10 py-8 border-t border-black/5 dark:border-white/5">
      <div className="text-left space-y-4 max-w-3xl">
        <div className="inline-block border border-black/10 rounded-full px-4 py-1.5 w-fit bg-white/50 text-xs font-semibold text-primary shadow-sm">
          Core Competencies
        </div>
        <h2 className="font-be-vietnam-pro text-3xl md:text-5xl font-black text-on-surface leading-tight tracking-tight">
          Result-Oriented Agency Services
        </h2>
        <p className="font-inter text-sm md:text-base text-on-surface-variant leading-relaxed max-w-xl">
          We combine data-driven strategies, creative execution, and continuous optimization to build scalable growth systems for tech founders and enterprise brands.
        </p>
      </div>

      {/* Tabs and Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mt-4">
        {/* Left Side: Services List Tabs */}
        <div className="lg:col-span-4 flex flex-col gap-3 w-full">
          {services.map((service, index) => {
            const active = index === activeTab;
            return (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-4 w-full p-5 rounded-2xl border transition-all text-left duration-300 cursor-pointer ${
                  active
                    ? "bg-white dark:bg-white/5 border-primary shadow-[0_4px_20px_rgba(0,91,179,0.1)] scale-[1.01] z-10"
                    : "bg-white/30 hover:bg-white/50 border-black/5 hover:border-black/10 dark:border-white/5"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${
                    active ? "bg-primary text-white" : "bg-black/5 text-on-surface-variant"
                  }`}
                >
                  <span className="material-symbols-outlined text-[22px] leading-none">
                    {service.icon}
                  </span>
                </div>
                <div className="flex flex-col">
                  <span className={`font-be-vietnam-pro text-sm font-extrabold ${active ? "text-primary" : "text-on-surface"}`}>
                    {service.title}
                  </span>
                  <span className="font-inter text-xs text-on-surface-variant truncate max-w-[200px] mt-0.5">
                    {service.tagline}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Side: Interactive Details View */}
        <div className="lg:col-span-8 w-full glass-card rounded-[28px] p-8 md:p-10 border border-white/60 dark:border-white/10 shadow-sm relative min-h-[500px] flex flex-col justify-between overflow-hidden animate-[slideUpFade_0.4s_ease_forwards] text-left">
          
          {/* Header */}
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="bg-primary/10 text-primary border border-primary/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
                Active Agency Track
              </span>
              <div className="flex gap-2">
                {services[activeTab].platforms.slice(0, 3).map((platform, idx) => (
                  <span
                    key={idx}
                    className="font-inter text-[10px] text-on-surface-variant bg-black/5 dark:bg-white/5 px-2.5 py-1 rounded-full border border-black/[0.03]"
                  >
                    {platform}
                  </span>
                ))}
              </div>
            </div>

            <h3 className="font-be-vietnam-pro text-2xl md:text-3xl font-black text-on-surface leading-snug">
              {services[activeTab].tagline}
            </h3>
          </div>

          {/* Grid: Challenges vs Solutions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8 pt-6 border-t border-black/5 dark:border-white/5">
            {/* Common Challenges */}
            <div className="space-y-4">
              <h4 className="font-be-vietnam-pro text-xs font-black uppercase tracking-widest text-[#a63e2d] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] leading-none font-bold">cancel</span>
                Marketplace Bottlenecks
              </h4>
              <ul className="space-y-3">
                {services[activeTab].challenges.map((challenge, idx) => (
                  <li key={idx} className="flex gap-2 items-start font-inter text-xs text-on-surface-variant leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#a63e2d] mt-1.5 flex-shrink-0"></span>
                    {challenge}
                  </li>
                ))}
              </ul>
            </div>

            {/* How We Solve Them */}
            <div className="space-y-4">
              <h4 className="font-be-vietnam-pro text-xs font-black uppercase tracking-widest text-[#2c4c34] flex items-center gap-2">
                <span className="material-symbols-outlined text-[16px] leading-none font-bold">check_circle</span>
                Sustained Solutions
              </h4>
              <ul className="space-y-3">
                {services[activeTab].solutions.map((solution, idx) => (
                  <li key={idx} className="flex gap-2 items-start font-inter text-xs text-on-surface-variant leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#2c4c34] mt-1.5 flex-shrink-0"></span>
                    {solution}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Footer of card */}
          <div className="pt-6 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mt-auto">
            <div className="flex flex-wrap items-center gap-1.5">
              <span className="font-inter text-[10px] font-extrabold text-outline uppercase tracking-wider mr-2">
                Scaling Platforms:
              </span>
              {services[activeTab].platforms.map((platform, idx) => (
                <span
                  key={idx}
                  className="font-inter text-[10px] text-primary font-bold bg-primary-container/10 px-2 py-0.5 rounded-md"
                >
                  {platform}
                </span>
              ))}
            </div>
            
            <button className="flex items-center gap-1.5 text-primary font-inter text-xs font-black group cursor-pointer active:scale-95 duration-200">
              Inquire service
              <span className="material-symbols-outlined text-sm font-black transition-transform duration-300 group-hover:translate-x-1">
                arrow_forward
              </span>
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}
