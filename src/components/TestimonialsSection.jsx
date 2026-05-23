"use client";

import { useEffect, useRef, useState } from "react";

export default function TestimonialsSection() {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState({});

  const testimonials = [
    {
      text: "I've been working with MarketOps for the past six months and the experience has been genuinely impressive. Their team replies instantly, even on weekends, and the account quality is consistently top-tier.",
      name: "Yorah",
      role: "E-Commerce Brand Founder",
      delay: "delay-[0ms]",
    },
    {
      text: "After nearly two years in dropshipping, switching to MarketOps was a game changer. Instant responses, weekend support, and quick top-ups removed stress and helped me scale confidently.",
      name: "Sarah",
      role: "Scaling Dropshipping Partner",
      delay: "delay-[150ms]",
    },
    {
      text: "Nearly a year with MarketOps and zero regrets. Fast responses, clear guidance, and real integrity. They don't just fix problems, they genuinely care about your growth.",
      name: "Victor",
      role: "Digital Agency Operator",
      delay: "delay-[300ms]",
    },
    {
      text: "After five years in e-commerce, MarketOps stands above every agency I've worked with. Reliable ad accounts and true 24/7 support made scaling safer and faster.",
      name: "Saamir",
      role: "Enterprise Brand CMO",
      delay: "delay-[450ms]",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = entry.target.getAttribute("data-index");
            setVisibleCards((prev) => ({ ...prev, [index]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll(".testimonial-card-item");
    cards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="w-full max-w-container-max flex flex-col items-center gap-stack-lg mb-[120px] select-none relative z-10"
    >
      <h2 className="font-be-vietnam-pro text-3xl md:text-5xl font-black text-on-surface text-center leading-tight tracking-tight mb-8">
        What Our Clients Say After Scaling
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-4">
        {testimonials.map((t, idx) => {
          const isVisible = visibleCards[idx];
          return (
            <div
              key={idx}
              data-index={idx}
              className={`testimonial-card-item testimonial-card bg-white/30 backdrop-blur-md border border-white/50 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.05)] rounded-[24px] p-8 flex flex-col gap-4 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_8px_32px_rgba(0,91,179,0.15)] ${t.delay} ${
                isVisible ? "animate-in" : ""
              }`}
            >
              <div className="flex text-[#FF801E] text-sm">
                {[...Array(5)].map((_, i) => (
                  <span
                    key={i}
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    star
                  </span>
                ))}
              </div>
              
              <p className="font-inter text-[15px] leading-relaxed text-on-surface-variant flex-grow italic">
                &quot;{t.text}&quot;
              </p>

              <div className="mt-4 border-t border-black/5 pt-4">
                <h4 className="font-be-vietnam-pro text-base font-bold text-on-surface">
                  {t.name}
                </h4>
                <p className="font-inter text-xs font-semibold text-primary">
                  {t.role}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
