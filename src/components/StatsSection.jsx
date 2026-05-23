export default function StatsSection() {
  const stats = [
    {
      value: "500+",
      label: "Active Clients",
      desc: "Performance-focused brands scaling profitably across digital and e-commerce ecosystems.",
    },
    {
      value: "$6M+",
      label: "Monthly Ad Spend",
      desc: "Result-oriented budgets managed across Meta Ads, Google Ads, and e-commerce sponsorships.",
    },
    {
      value: "1000+",
      label: "Case Studies",
      desc: "Proven track records of consistent performance, higher ROI, and sustainable scaling systems.",
    },
    {
      value: "100+",
      label: "Globally Launched",
      desc: "Taking brands successfully from local recognition to competitive international markets.",
    },
  ];

  return (
    <section className="w-full max-w-container-max flex flex-col items-center gap-stack-lg select-none relative z-10">
      <div className="text-center max-w-3xl space-y-4">
        <h2 className="font-be-vietnam-pro text-3xl md:text-5xl font-black text-on-surface leading-tight tracking-tight">
          Proven Results We&apos;ve Achieved
        </h2>
        <p className="font-inter text-base md:text-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Driven by performance. Powered by consistency. Focused on your growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full mt-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="glass-card rounded-[24px] p-8 flex flex-col items-center text-center transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lg border border-black/5"
          >
            <span className="font-be-vietnam-pro text-[48px] font-black text-on-surface leading-none mb-2">
              {stat.value}
            </span>
            <span className="font-be-vietnam-pro text-xl font-bold text-primary mb-4">
              {stat.label}
            </span>
            <p className="font-inter text-sm text-on-surface-variant leading-relaxed">
              {stat.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
