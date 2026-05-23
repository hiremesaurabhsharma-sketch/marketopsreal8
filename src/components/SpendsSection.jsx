"use client";

export default function SpendsSection() {
  const partnersLeft = [
    "Amazon",
    "Flipkart",
    "Myntra",
    "Meesho",
    "Blinkit",
    "Zepto",
    "Swiggy Instamart",
  ];

  const channelsRight = [
    "Google Ads",
    "Meta Ads",
    "LinkedIn Ads",
    "YouTube Ads",
    "Instagram Ads",
    "Facebook Ads",
    "DSP Ads",
  ];

  return (
    <section className="w-full max-w-container-max flex flex-col gap-16 select-none relative z-10">
      {/* Row 1: Spends Metric */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-4 text-left">
          <div className="inline-block border border-black/10 rounded-full px-4 py-1.5 w-fit bg-white/50 text-xs font-semibold text-primary shadow-sm select-none">
            MarketOps Spent
          </div>
          <h2 className="font-be-vietnam-pro text-4xl md:text-6xl font-black text-on-surface leading-tight tracking-tight">
            $100,351,886<span className="text-primary">+</span>
          </h2>
          <p className="font-inter text-sm text-on-surface-variant leading-relaxed max-w-sm">
            Just a normal month of paid advertising spends managed by MarketOps growth partners.
          </p>
        </div>

        <div className="lg:col-span-7 flex gap-4 overflow-hidden relative items-center py-4">
          {/* Faded edges for marquee */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Marquee Loop */}
          <div className="flex gap-4 min-w-full animate-marquee hover:[animation-play-state:paused] cursor-pointer">
            {/* Seamless duplicate content */}
            {[...partnersLeft, ...partnersLeft, ...partnersLeft].map((partner, idx) => (
              <div
                key={idx}
                className="glass-card rounded-[18px] h-[100px] w-[200px] flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-[1.02] hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                <span className="font-be-vietnam-pro font-extrabold text-sm uppercase tracking-wider text-on-surface-variant text-center px-2">
                  {partner}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Row 2: Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-5 flex flex-col gap-4 text-left lg:order-last">
          <div className="inline-block border border-black/10 rounded-full px-4 py-1.5 w-fit bg-white/50 text-xs font-semibold text-primary shadow-sm select-none">
            Global Channels
          </div>
          <h2 className="font-be-vietnam-pro text-4xl md:text-5xl font-black text-on-surface leading-tight tracking-tight">
            Growth Partners
          </h2>
          <p className="font-inter text-sm text-on-surface-variant leading-relaxed max-w-sm">
            Backed and supported by the channels that shape the advertising industry.
          </p>
        </div>

        <div className="lg:col-span-7 flex gap-4 overflow-hidden relative items-center py-4">
          {/* Faded edges for marquee */}
          <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-surface to-transparent z-10 pointer-events-none"></div>
          <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-surface to-transparent z-10 pointer-events-none"></div>

          {/* Infinite Marquee Loop going right to left or different speed */}
          <div className="flex gap-4 min-w-full animate-marquee-slow hover:[animation-play-state:paused] cursor-pointer">
            {[...channelsRight, ...channelsRight, ...channelsRight].map((channel, idx) => (
              <div
                key={idx}
                className="glass-card rounded-[18px] h-[100px] w-[200px] flex-shrink-0 flex items-center justify-center opacity-70 hover:opacity-100 hover:scale-[1.02] hover:border-primary/20 transition-all duration-300 shadow-sm"
              >
                <span className="font-be-vietnam-pro font-black text-sm uppercase tracking-widest text-primary text-center px-2">
                  {channel}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
