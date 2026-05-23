import Link from "next/link";
import Navbar from "@/components/Navbar";
import StatsSection from "@/components/StatsSection";
import ServicesExplorer from "@/components/ServicesExplorer";
import SpendsSection from "@/components/SpendsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-grow flex flex-col items-center justify-center relative z-10 w-full max-w-[1600px] mx-auto px-margin-mobile md:px-margin-desktop py-section-padding space-y-[120px] select-none">
        
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center w-full max-w-container-max mb-[120px]">
          {/* Left Column: Hero Content */}
          <div className="flex flex-col gap-stack-md max-w-2xl text-left">
            {/* Social Proof */}
            <div className="flex items-center gap-3 bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full px-4 py-2 w-fit shadow-sm">
              <div className="flex text-[#FF801E] text-base leading-none select-none">
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
                <span>★</span>
              </div>
              <span className="font-inter text-[11px] font-semibold text-on-surface-variant dark:text-on-surface">
                Rated 4.9/5 by 2700+ customers
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-be-vietnam-pro font-black text-on-surface text-left" style={{ fontSize: "75px", lineHeight: "1.05", letterSpacing: "-2px" }}>
              Work smarter,<br />achieve faster
            </h1>

            {/* Subheadline */}
            <p className="font-inter text-on-surface-variant max-w-xl leading-relaxed text-left" style={{ fontSize: "18px", letterSpacing: "-1px" }}>
              Effortlessly manage your projects, collaborate with your team, and achieve your goals with our intuitive task management tool.
            </p>

            {/* CTA button */}
            <div className="mt-4 text-left">
              <Link href="/signup">
                <button className="flex items-center gap-3 bg-primary backdrop-blur-[2px] text-white px-8 py-4 rounded-[16px] font-inter text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95 shadow-[inset_0_4px_4px_rgba(255,255,255,0.3),0_10px_20px_rgba(0,91,179,0.2)] cursor-pointer">
                  Get Started Now
                  <span
                    className="material-symbols-outlined bg-white text-primary rounded-full p-1 leading-none text-xs font-bold"
                  >
                    arrow_forward
                  </span>
                </button>
              </Link>
            </div>
          </div>

          {/* Right Column: Glassy Orb Video */}
          <div className="relative w-full aspect-square flex items-center justify-center overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover scale-125 video-blend absolute inset-0 opacity-80"
            >
              <source
                src="https://future.co/images/homepage/glassy-orb/orb-purple.webm"
                type="video/webm"
              />
            </video>
            {/* Decorative Glass Elements framing the orb */}
            <div className="absolute inset-10 border border-black/5 dark:border-white/10 rounded-full backdrop-blur-[2px] z-10 pointer-events-none"></div>
            <div className="absolute inset-20 border border-black/5 dark:border-white/5 rounded-full backdrop-blur-[4px] z-10 pointer-events-none"></div>
          </div>
        </section>

        {/* Trusted Logos Cloud */}
        <section className="w-full max-w-container-max flex flex-col items-center gap-stack-lg border-t border-black/5 dark:border-white/5 pt-[60px] pb-[40px]">
          <p className="font-inter text-xs font-bold text-outline uppercase tracking-widest text-center select-none">
            Trusted by Top-tier product companies
          </p>
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-45 grayscale invert dark:invert-0 select-none pointer-events-none mt-2">
            {["ACME CORP", "GLOBEX", "SOYUZ", "INITECH", "UMBRELLA"].map((logo) => (
              <div
                key={logo}
                className="font-be-vietnam-pro text-sm font-extrabold border border-black/10 dark:border-white/10 rounded-xl px-6 py-2.5 bg-black/5"
              >
                {logo}
              </div>
            ))}
          </div>
        </section>

        {/* StatsSection */}
        <StatsSection />

        {/* ServicesExplorer */}
        <ServicesExplorer />

        {/* SpendsSection */}
        <SpendsSection />

        {/* TestimonialsSection */}
        <TestimonialsSection />

      </main>

      <Footer />
    </>
  );
}
