"use client";

import Link from "next/link";


export default function ServicesIndexPage() {
  const services = [
    {
      id: "ecommerce",
      title: "E-Commerce Solutions",
      tagline: "From Store Setup to Sales Growth — “ We Handle Everything “",
      icon: "shopping_cart",
      desc: "Complete end-to-end marketplace management, optimization, and ad scaling across leading channels like Amazon, Flipkart, Myntra, and Meesho.",
      platforms: "Amazon, Flipkart, Myntra, Swiggy Instamart, Zepto, Swc",
    },
    {
      id: "performance",
      title: "Performance Marketing",
      tagline: "Smarter Ads. Better Conversions. Bigger Revenue.",
      icon: "trending_up",
      desc: "Data-driven advertising campaigns focused on delivering measurable results, leads, higher conversion rates, and scalable ROI.",
      platforms: "Google Ads, Meta Ads, LinkedIn, DSP Platforms",
    },
    {
      id: "webdev",
      title: "Web Design & Development",
      tagline: "Build Fast, Scalable & User-Friendly Custom Websites",
      icon: "code",
      desc: "Bespoke corporate, portfolio, and e-commerce websites designed to build trust, generate quality leads, and scale conversions.",
      platforms: "WordPress, Shopify, AWS, CodeX",
    },
    {
      id: "seo",
      title: "SEO Optimization",
      tagline: "Rank Your Website Higher on Google with Proven SEO",
      icon: "search",
      desc: "Technical audits, semantic keyword optimization, off-page backlinks, and local maps marketing to scale organic traffic consistently.",
      platforms: "Google Search, Maps, Schema, Webmaster Tool",
    },
    {
      id: "creative",
      title: "Marketing Creative",
      tagline: "Create Marketing That People Remember & Buy From",
      icon: "palette",
      desc: "High-impact visual designs, carousel ads, storytelling reels covers, animated graphics, and A+ marketplace content that grabs attention.",
      platforms: "Adobe Suite, Figma, Motion Graphics",
    },
    {
      id: "overseas",
      title: "Overseas Expansion",
      tagline: "Expand Beyond Borders. Grow Without Limits.",
      icon: "public",
      desc: "Strategic international market research, global B2B outreach pipelines, export planning, and cross-border partnership development.",
      platforms: "Global Markets, B2B Pipelines, Entry Strategy",
    },
  ];

  return (
    <>


      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-12 py-[60px] select-none text-left relative z-10">
        
        {/* Header Section */}
        <header className="max-w-3xl mb-16 space-y-4">
          <span className="inline-block bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-on-surface-variant px-3 py-1 rounded-lg text-xs font-semibold tracking-wider uppercase">
            Our Expertise
          </span>
          <h1 className="font-be-vietnam-pro font-black text-5xl md:text-7xl leading-tight tracking-tight text-on-surface">
            Result-Oriented Services
          </h1>
          <p className="text-on-surface-variant text-base md:text-lg font-inter leading-relaxed max-w-xl">
            We specialize in delivering performance-focused marketing, e-commerce, and development solutions that help brands scale profitability across local, national, and global ecosystems.
          </p>
        </header>

        {/* Services Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="glass-card rounded-[28px] p-8 border border-black/5 dark:border-white/5 shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg"
            >
              <div className="space-y-6">
                {/* Icon wrapper */}
                <div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center">
                  <span className="material-symbols-outlined text-[26px] leading-none">
                    {service.icon}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-be-vietnam-pro text-xl font-extrabold text-on-surface leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-inter text-xs text-primary font-bold">
                    {service.tagline}
                  </p>
                </div>

                <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
                  {service.desc}
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-black/5 dark:border-white/5 flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <span className="font-inter text-[10px] font-extrabold text-outline uppercase tracking-wider">
                    Core Channels & Platforms:
                  </span>
                  <span className="font-inter text-xs text-on-surface font-semibold truncate">
                    {service.platforms}
                  </span>
                </div>

                <Link href={`/services/${service.id}`} className="w-full">
                  <button className="w-full bg-white hover:bg-black/5 dark:bg-white/5 dark:hover:bg-white/10 text-primary border border-black/5 dark:border-white/5 py-3 rounded-xl font-inter text-xs font-bold transition-all active:scale-[0.98] cursor-pointer text-center">
                    Explore Details &amp; FAQs
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </section>

      </main>


    </>
  );
}
