"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const services = [
    { label: "Ecommerce Solutions", href: "/services/ecommerce", emoji: "🛒", sub: "From Store Setup to Sales Growth" },
    { label: "Performance Marketing", href: "/services/performance", emoji: "🎯", sub: "Smarter Ads. Better Conversions." },
    { label: "Website & Developments", href: "/services/webdev", emoji: "💻", sub: "Fast, Scalable Custom Websites" },
    { label: "SEO Optimization", href: "/services/seo", emoji: "📈", sub: "Rank organically higher on Google" },
    { label: "Marketing Creative", href: "/services/creative", emoji: "🎨", sub: "Stop Scrolling. Grab Attention." },
    { label: "Overseas Business Dev", href: "/services/overseas", emoji: "🌍", sub: "Expand Beyond Borders Globally" },
  ];

  const links = [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "About Us", href: "/about" },
    { label: "Case Study", href: "/cases" },
    { label: "Blog", href: "/blog" },
    { label: "Contact Us", href: "/#contact" },
  ];

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href) || pathname === href;
  };

  return (
    <>
      <nav className="sticky top-4 mx-auto w-[calc(100%-40px)] max-w-container-max rounded-xl bg-white/75 backdrop-blur-[24px] border border-black/5 shadow-sm inset-shadow-sm flex justify-between items-center px-8 py-4 z-50 transition-all duration-300 ease-in-out hover:backdrop-blur-[32px]">
        {/* Logo */}
        <Link href="/" className="font-be-vietnam-pro text-[24px] font-bold tracking-tight text-primary select-none cursor-pointer">
          MarketOps
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6">
          {links.map((link) => {
            const active = isActive(link.href);
            
            if (link.label === "Contact Us") {
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className="font-inter text-sm border border-black rounded-lg px-3 py-1.5 text-on-surface hover:bg-black/5 hover:text-primary transition-all duration-300 font-medium"
                >
                  Contact Us
                </Link>
              );
            }

            if (link.label === "Services") {
              return (
                <div
                  key={link.href}
                  className="relative group py-1"
                  onMouseEnter={() => setServicesDropdownOpen(true)}
                  onMouseLeave={() => setServicesDropdownOpen(false)}
                >
                  <button
                    className={`font-inter text-sm px-2 py-1 transition-all duration-300 flex items-center gap-1 cursor-pointer focus:outline-none ${
                      active || pathname.startsWith("/services")
                        ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                        : "text-on-surface-variant hover:text-primary hover:bg-black/5"
                    }`}
                  >
                    Services
                    <span className="material-symbols-outlined text-[14px] leading-none transition-transform duration-300 group-hover:rotate-180">
                      keyboard_arrow_down
                    </span>
                  </button>

                  {/* Dropdown Menu Box */}
                  {servicesDropdownOpen && (
                    <div className="absolute top-[32px] left-1/2 -translate-x-1/2 w-[340px] rounded-2xl bg-white/95 border border-black/5 p-4 shadow-xl backdrop-blur-xl animate-[slideDownFade_0.2s_ease_forwards] grid grid-cols-1 gap-2 z-50">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-black/5 transition-all text-left group/item"
                        >
                          <span className="text-lg leading-none">{service.emoji}</span>
                          <div className="space-y-0.5">
                            <h4 className="font-be-vietnam-pro text-[13px] font-black text-[#1a1c1c] group-hover/item:text-primary transition-colors">
                              {service.label}
                            </h4>
                            <p className="font-inter text-[10px] text-[#414754] group-hover/item:text-[#1a1c1c] transition-colors">
                              {service.sub}
                            </p>
                          </div>
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`font-inter text-sm px-2 py-1 transition-all duration-300 ${
                  active
                    ? "text-primary font-bold border-b-2 border-primary pb-0.5"
                    : "text-on-surface-variant hover:text-primary hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>

        {/* CTA Button / Mobile Menu Toggle */}
        <div className="flex items-center gap-4">
          <Link href="/signup">
            <button className="bg-white/50 backdrop-blur-md border border-black/10 text-primary font-inter text-sm font-semibold px-6 py-2 rounded-lg hover:bg-white/80 transition-all shadow-[0_2px_4px_rgba(0,0,0,0.05)] cursor-pointer select-none active:scale-95 hidden sm:block">
              SignUp
            </button>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-primary p-1 focus:outline-none"
          >
            <span className="material-symbols-outlined text-[28px] leading-none">
              {mobileMenuOpen ? "close" : "menu"}
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Panel */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-4 top-[80px] z-50 bg-white/95 backdrop-blur-xl rounded-2xl p-6 flex flex-col gap-4 animate-[slideDownFade_0.3s_ease_forwards] border border-black/5 overflow-y-auto max-h-[75vh]">
          {links.map((link) => {
            const active = isActive(link.href);

            if (link.label === "Services") {
              return (
                <div key={link.href} className="space-y-2">
                  <span className="block font-inter text-[11px] font-extrabold text-outline uppercase tracking-wider px-3">
                    Our Services
                  </span>
                  <div className="grid grid-cols-1 gap-1 border-l-2 border-primary/20 pl-4 ml-3">
                    {services.map((service) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="font-inter text-sm py-2 text-on-surface-variant hover:text-primary transition-all flex items-center gap-2"
                      >
                        <span>{service.emoji}</span>
                        {service.label}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`font-inter text-base py-2 px-3 rounded-xl transition-all ${
                  active
                    ? "text-primary font-bold bg-primary-container/15"
                    : "text-on-surface-variant hover:text-primary hover:bg-black/5"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
          
          <Link href="/signup" onClick={() => setMobileMenuOpen(false)} className="w-full pt-2">
            <button className="w-full bg-primary text-white py-3 rounded-xl font-inter font-semibold transition-all active:scale-[0.98] shadow-[0_4px_12px_rgba(0,91,179,0.2)]">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </>
  );
}
