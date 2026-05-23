"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function WebDevServicePage() {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const platforms = ["WordPress", "Shopify", "AWS", "CodeX"];

  const solutions = [
    {
      title: "eCommerce Websites",
      desc: "Online stores for selling products with payment gateway, cart & order management features.",
    },
    {
      title: "Corporate Business Websites",
      desc: "Professional websites for companies to showcase services, build trust & generate leads.",
    },
    {
      title: "Portfolio Websites",
      desc: "Personal branding websites for freelancers, creators, agencies & professionals to showcase work.",
    },
    {
      title: "Dynamic Websites",
      desc: "Interactive websites with real-time updates, user logins, dashboards & database integration.",
    },
    {
      title: "Landing Pages & Lead Gen",
      desc: "High-converting websites designed for ads, lead collection, inquiries & marketing campaigns.",
    },
  ];

  const features = [
    {
      title: "Mobile-Responsive Design",
      desc: "Fully responsive layouts that scale seamlessly on mobile, tablet, and desktop viewports.",
    },
    {
      title: "Fast Loading Speed",
      desc: "Highly optimized asset delivery and clean code architecture ensuring instantaneous page loads.",
    },
    {
      title: "SEO-Friendly Structure",
      desc: "Built-in search engine optimization with correct HTML5 schemas, metadata, and crawlable layouts.",
    },
    {
      title: "User-Friendly Navigation",
      desc: "Sleek, intuitive, and frictionless layouts designed to guide users straight to conversions.",
    },
    {
      title: "Secure & Scalable Development",
      desc: "Strong security measures including SSL configurations and safe, clean, and scalable coding practices.",
    },
    {
      title: "Conversion-Focused Layouts",
      desc: "Every card, form, and button is strategically structured to maximize leads and sales.",
    },
  ];

  const faqs = [
    {
      q: "How long does it take to design a website?",
      a: "It depends on the project type—basic websites take a few days, while advanced eCommerce or custom websites may take weeks.",
    },
    {
      q: "What types of websites do you design?",
      a: "We design static websites, dynamic websites, business websites, portfolio sites, landing pages, and eCommerce stores.",
    },
    {
      q: "Will my website be mobile-friendly?",
      a: "Yes, all websites are fully responsive and work smoothly on mobile, tablet, and desktop devices.",
    },
    {
      q: "Do you provide SEO-friendly websites?",
      a: "Yes, we build SEO-optimized websites to help improve your visibility on search engines.",
    },
    {
      q: "Can I update my website after it is built?",
      a: "Yes, we can integrate CMS platforms so you can easily update content, images, and pages.",
    },
    {
      q: "How much does website design cost?",
      a: "The cost depends on design complexity, features, and functionality required for your website.",
    },
    {
      q: "Do you offer eCommerce website development?",
      a: "Yes, we create fully functional eCommerce websites with product listings, cart, and payment integration.",
    },
    {
      q: "Will my website be secure?",
      a: "Yes, we implement strong security measures including SSL integration and safe coding practices.",
    },
    {
      q: "Do you provide website maintenance services?",
      a: "Yes, we offer ongoing maintenance, updates, and technical support for smooth website performance.",
    },
    {
      q: "Can you redesign my existing website?",
      a: "Yes, we can redesign your existing website to improve design, performance, and user experience.",
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
            <span className="inline-block bg-[#0062a1]/10 text-[#0062a1] border border-[#0062a1]/20 text-[10px] px-3 py-1 rounded-full font-inter font-black uppercase tracking-wider">
              Service Page - 3
            </span>
            <h1 className="font-be-vietnam-pro font-black text-4xl md:text-6xl leading-tight text-on-surface">
              Website & Developments
            </h1>
            <h2 className="font-be-vietnam-pro text-xl md:text-2xl font-bold text-primary leading-snug">
              {platforms.join(" • ")}
            </h2>
            <p className="font-be-vietnam-pro text-2xl md:text-3xl font-extrabold text-on-surface-variant max-w-3xl leading-tight italic pt-4">
              &quot;Build a Powerful Online Presence with Fast, Scalable & User-Friendly Custom Websites&quot;
            </p>
          </div>
        </section>

        {/* Highlight Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Your Digital Growth Starts with a Custom Website
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((solution, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-8 h-8 rounded-xl bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                  0{idx + 1}
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-primary mb-3">
                  {solution.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {solution.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Features Section */}
        <section className="space-y-12">
          <h2 className="font-be-vietnam-pro text-3xl font-black text-on-surface border-b border-black/5 pb-4">
            Smart Features Built into Every Website We Create
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => (
              <div key={idx} className="glass-card rounded-2xl p-6 border border-black/5 relative overflow-hidden">
                <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-[#2c4c34]/10 text-[#2c4c34] flex items-center justify-center">
                  <span className="material-symbols-outlined text-xs leading-none font-bold">check</span>
                </div>
                <h3 className="font-be-vietnam-pro font-extrabold text-base text-[#2c4c34] mb-3">
                  {feature.title}
                </h3>
                <p className="font-inter text-xs text-on-surface-variant leading-relaxed">
                  {feature.desc}
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
