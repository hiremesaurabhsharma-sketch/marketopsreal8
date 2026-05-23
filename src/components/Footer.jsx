"use client";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="w-full py-stack-lg mt-section-padding bg-surface dark:bg-surface-dim border-t border-outline-variant dark:border-outline relative overflow-hidden flex flex-col items-center select-none">
      {/* Massive Faded Watermark SVG */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none overflow-hidden z-0">
        <svg className="w-full h-auto min-w-[1200px]" preserveAspectRatio="xMidYMid slice" viewBox="0 0 800 200">
          <text
            dominantBaseline="middle"
            fill="currentColor"
            fontFamily="'Be Vietnam Pro', sans-serif"
            fontSize="160"
            fontWeight="800"
            textAnchor="middle"
            x="50%"
            y="50%"
          >
            MarketOps
          </text>
        </svg>
      </div>

      <div className="max-w-[1150px] w-full mx-auto px-margin-mobile md:px-margin-desktop relative z-10 space-y-stack-lg">
        {/* Two-Card Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
          {/* Left Card: Immersive Video */}
          <div className="relative overflow-hidden rounded-[24px] min-h-[400px] flex flex-col justify-between p-8 group shadow-sm border border-black/5">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260503_104800_bc43ae09-f494-43e3-97d7-2f8c1692cfd7.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white text-primary rounded-xl flex items-center justify-center font-be-vietnam-pro font-bold shadow-lg">
                  M
                </div>
                <span className="text-white font-be-vietnam-pro text-xl font-bold tracking-tight">MarketOps</span>
              </div>
            </div>

            <div className="relative z-10 mt-auto space-y-6">
              <h3 className="text-white font-be-vietnam-pro text-2xl font-bold max-w-sm leading-tight">
                Precision marketing automation, powered by AI.
              </h3>
              <div className="pt-4 border-t border-white/20">
                <p className="text-accent-handwritten text-white text-2xl mb-4 font-caveat">Stay in touch!</p>
                <div className="flex gap-4">
                  {["forum", "alternate_email", "work", "code"].map((icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-10 h-10 bg-black/50 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-primary transition-colors border border-white/10 hover:scale-105 active:scale-95 duration-200"
                    >
                      <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                        {icon}
                      </span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Card: Navigation & Actions */}
          <div className="bg-surface-container-low rounded-[24px] p-8 md:p-10 flex flex-col justify-between border border-white border-opacity-60 shadow-sm relative overflow-hidden">
            {/* Floating Badge */}
            <div className="absolute top-8 right-8 bg-white py-2 px-4 rounded-full shadow-sm flex items-center gap-2 border border-surface-variant z-20">
              <div className="w-6 h-6 rounded bg-gradient-to-br from-primary to-secondary-container flex items-center justify-center text-white text-xs font-bold shadow-inner">
                M
              </div>
              <span className="font-inter text-xs font-semibold text-on-surface">Feeling lucky?</span>
            </div>

            <div className="grid grid-cols-2 gap-8 mb-12 mt-12 md:mt-0">
              {/* Column 1 */}
              <div>
                <h4 className="text-accent-handwritten text-primary text-2xl mb-6 font-caveat">Navigation</h4>
                <ul className="space-y-3">
                  {["Services", "About Us", "Case Study", "Contact Us"].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={
                          link === "Case Study"
                            ? "/cases"
                            : link === "About Us"
                            ? "/about"
                            : link === "Services"
                            ? "/services"
                            : "/#contact"
                        }
                        className="font-inter text-sm text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <h4 className="text-accent-handwritten text-primary text-2xl mb-6 font-caveat">Company</h4>
                <ul className="space-y-3">
                  {["Privacy Policy", "Terms of Service", "Cookies"].map((link, idx) => (
                    <li key={idx}>
                      <Link
                        href={link === "Privacy Policy" ? "/policy" : "#"}
                        className="font-inter text-sm text-on-surface-variant opacity-70 hover:opacity-100 hover:text-primary transition-all duration-200"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                  <li>
                    <a
                      href="mailto:connect@marketops.in"
                      className="font-inter text-xs text-primary font-bold hover:underline transition-all duration-200 block mt-2"
                    >
                      connect@marketops.in
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Newsletter form */}
            <div className="mt-auto space-y-4 pt-8 border-t border-surface-variant/50">
              <p className="font-inter text-sm font-semibold text-on-surface">Stay ahead with MarketOps</p>
              {subscribed ? (
                <div className="bg-primary/10 border border-primary/20 text-primary py-3 px-4 rounded-lg font-inter text-sm font-semibold animate-[slideUpFade_0.4s_ease_forwards]">
                  ✨ Thank you for subscribing! We'll stay in touch.
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="flex-grow bg-white border border-outline-variant rounded-lg px-4 py-3 font-inter text-sm text-on-surface focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-colors placeholder:text-outline shadow-inner"
                  />
                  <button
                    type="submit"
                    className="bg-on-background text-white px-6 py-3 rounded-lg font-inter text-sm font-semibold hover:bg-primary transition-colors active:scale-95 duration-200 cursor-pointer"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Bottom copyright row */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-stack-md pt-8 border-t border-outline-variant dark:border-outline">
          <span className="font-be-vietnam-pro font-bold text-lg text-primary dark:text-primary-fixed select-none">
            MarketOps
          </span>
          <p className="font-inter text-xs text-on-surface-variant opacity-70 text-center md:text-left">
            © 2024 MarketOps. Precision Marketing for Tech Founders.
          </p>
        </div>
      </div>
    </footer>
  );
}
