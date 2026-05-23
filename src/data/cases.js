export const CASES_DATA = [
  // --- ECOMMERCE SOLUTIONS ---
  {
    id: 1,
    slug: "aura-lifestyle-quick-commerce",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "How Aura Lifestyle Scaled to $180,000/mo on Amazon & Zepto",
    clientName: "Aura Lifestyle",
    niche: "Direct-to-Consumer Fashion & Apparel",
    metrics: { label: "Monthly Store Revenue", start: "$25,000", end: "$180,000", growth: "+620%" },
    adSpend: "$22,000/mo",
    roas: "4.8x ROAS",
    progress: 95,
    overview: "Aura Lifestyle struggled with stagnant marketplace visibility and high ACOS. By optimizing their listing architecture and launching aggressive quick-commerce campaigns on Zepto and Blinkit, we expanded their monthly sales dramatically in under 6 months.",
    challenge: "High ad spend leakage on generic terms, frequent out-of-stock penalties from Amazon, and an unoptimized storefront resulting in a low 1.4% conversion rate.",
    solution: [
      "Conducted a deep-dive keyword map focusing on highly specific long-tail buyer intent.",
      "Redesigned the storefront with premium A+ content and interactive cross-sell grids.",
      "Launched localized dark-store stock integrations on Blinkit, Swiggy Instamart, and Zepto to capitalize on 10-minute instant delivery options.",
      "Implemented a automated bid-scrubbing script to lower Amazon Sponsored Product ACOS by 57%."
    ],
    metricsDetail: {
      primary: "ACOS Reduced: from 42% down to 18%",
      secondary: "Conversion Rate Boosted: from 1.4% to 4.2%",
      tertiary: "Quick Commerce Contribution: 38% of total revenue"
    },
    takeaway: "Combining quick-commerce instant delivery options with hyper-targeted sponsored listing optimization unlocks massive compounding marketplace scaling."
  },
  {
    id: 2,
    slug: "nutri-bite-zepto-scaling",
    category: "ecommerce",
    categoryLabel: "Ecommerce Solutions",
    title: "NutriBite's 10-Minute Delivery Domination: +450% Sales Lift on Zepto & Blinkit",
    clientName: "NutriBite Snacks",
    niche: "Healthy D2C Packaged Foods",
    metrics: { label: "Monthly Orders", start: "1,200", end: "6,600", growth: "+450%" },
    adSpend: "$8,500/mo",
    roas: "3.9x ROAS",
    progress: 88,
    overview: "NutriBite wanted to dominate the instant-grocery snack category. We optimized their inventory forecasting and product display layouts across Zepto, Blinkit, and Swiggy Instamart, triggering a significant order spike.",
    challenge: "High cart abandonment rates on delivery apps and frequent stock-outs in critical high-density suburban dark stores.",
    solution: [
      "Designed clean, high-impact product thumbnails featuring bold benefit tags for mobile-first scrolling.",
      "Deployed local geo-targeted mobile search ads matching search phrases like 'healthy snacks late night' within active delivery radii.",
      "Integrated a real-time inventory API to automatically shift ad budget away from out-of-stock hubs and focus on stock-heavy warehouses."
    ],
    metricsDetail: {
      primary: "Dark Store Distribution: Raised to 150+ hubs",
      secondary: "Click-Through Rate (CTR): Raised from 0.8% to 2.9%",
      tertiary: "Organic Category Ranking: #3 in Healthy Snacks"
    },
    takeaway: "Quick commerce requires hyper-local stock synchronization; showing ads only where inventory exists prevents wasted marketing spend."
  },

  // --- PERFORMANCE MARKETING ---
  {
    id: 11,
    slug: "fintech-lead-generation-dsp",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "Fintech Lead Generation: 12,000+ Premium Investor Leads via Meta & Google",
    clientName: "Zenith Capital",
    niche: "Wealth Management & Investing",
    metrics: { label: "Monthly Certified Leads", start: "800", end: "12,200", growth: "+1425%" },
    adSpend: "$48,000/mo",
    roas: "38% CPL Reduction",
    progress: 97,
    overview: "Zenith Capital needed high-net-worth investor leads for their new portfolio fund. We bypassed standard demographics and implemented behavioral and financial interest targeting structures across Meta, Google Search, and LinkedIn DSP.",
    challenge: "High cost-per-lead (CPL) on generic investment terms and a high volume of low-quality, unverified lead inputs.",
    solution: [
      "Created dynamic landing pages with integrated API verification that validated lead phone numbers and financial criteria in real-time.",
      "Built custom audience profiles targeting individuals matching professional criteria like executive job roles and interest in high-tier luxury real estate.",
      "Developed interactive calculator tools as lead magnets ('Calculate Your Wealth Multiplier') to pre-qualify user intent."
    ],
    metricsDetail: {
      primary: "CPL Reduced: from $14.50 down to $8.90",
      secondary: "Lead-to-Meeting Conversion: Lifted by 180%",
      tertiary: "Total Asset Under Management (AUM) Attributed: $8.4M"
    },
    takeaway: "Pre-qualifying lead funnels with verification checks drastically reduces sales waste while lowering CPL on premium products."
  },
  {
    id: 12,
    slug: "d2c-apparel-roas-scaling",
    category: "performance",
    categoryLabel: "Performance Marketing",
    title: "D2C Apparel Brand Scales Daily Ad Spend to $10k/day at a Consistent 4.2x ROAS",
    clientName: "VogueThreads",
    niche: "Direct-to-Consumer Athleisure",
    metrics: { label: "Daily Store Revenue", start: "$4,200", end: "$42,000", growth: "+900%" },
    adSpend: "$10,000/day",
    roas: "4.2x ROAS",
    progress: 96,
    overview: "VogueThreads struggled to scale their Meta and Google campaigns past $1,000/day without ROAS crashing. We built a systematic creative testing pipeline and full-funnel custom audience retention setup.",
    challenge: "Severe ad fatigue within 4 days of creative launch and highly unstable performance spikes due to poor account structure.",
    solution: [
      "Consolidated account structures into broad targeting campaigns, letting the Meta machine learning algorithm optimize delivery.",
      "Launched a weekly creative testing pipeline, producing and launching 12 custom UGC video hook variations every Monday.",
      "Deployed automated Google Performance Max (PMax) campaigns with optimized video and shopping asset feeds."
    ],
    metricsDetail: {
      primary: "Scale Achieved: Scaled monthly ad spend from $30k to $300k",
      secondary: "Blended ROAS: Maintained at 4.2x (was 1.9x)",
      tertiary: "First-time Customer Acquisition Rate: +140%"
    },
    takeaway: "Scaling ad budget without performance dropping requires consolidated broad targeting campaigns and massive creative testing volume."
  },

  // --- WEBSITE & DEVELOPMENTS ---
  {
    id: 21,
    slug: "headless-shopify-storefront-speed",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Re-Engineering a Custom Shopify Storefront: Reducing Load Times to 0.8 Seconds",
    clientName: "Luxe Thread Co",
    niche: "Premium Apparel eCommerce",
    metrics: { label: "Mobile Page Load Speed", start: "4.2 seconds", end: "0.8 seconds", growth: "-80% Load Time" },
    adSpend: "N/A",
    roas: "+216% Conversion Increase",
    progress: 98,
    overview: "Luxe Thread Co's e-commerce store suffered from high bounce rates due to a slow Shopify template with excessive app scripts. We rebuilt their storefront as a headless Shopify setup using Next.js and optimized Tailwind styling.",
    challenge: "Slow mobile load speed, bad mobile layout responsiveness, and poor Core Web Vitals rankings that limited organic search growth.",
    solution: [
      "Decoupled the front-end layout from the Shopify backend using Shopify's Storefront API.",
      "Developed a custom React/Next.js storefront hosted on fast global edge networks.",
      "Optimized and compressed all visual assets, loading images lazily and deferring unnecessary scripts.",
      "Designed a sleek, glassmorphic UI matching modern design standards with micro-interactions."
    ],
    metricsDetail: {
      primary: "Page Speed Score: Boosted from 31 to 98/100",
      secondary: "E-commerce Conversion Rate: Climbed from 1.2% to 3.8%",
      tertiary: "Organic Mobile Traffic: Increased by 112%"
    },
    takeaway: "Decoupling your storefront front-end from backend databases allows you to build incredibly fast, custom storefronts that double conversion rates."
  },
  {
    id: 22,
    slug: "react-corporate-portal",
    category: "webdev",
    categoryLabel: "Website & Developments",
    title: "Next.js Corporate Website Rebuild Drives 140% Lead Generation Lift",
    clientName: "Aegis Security Group",
    niche: "Enterprise Cybersecurity Firm",
    metrics: { label: "Monthly Contact Submissions", start: "65", end: "156", growth: "+140%" },
    adSpend: "N/A",
    roas: "High-performance framework",
    progress: 86,
    overview: "Aegis Security had an outdated website that failed to convey their technological expertise. We built a fast, interactive Next.js corporate portal with smooth scroll transitions and clean technical animations.",
    challenge: "High bounce rates on key services pages and low lead form submissions due to confusing user paths.",
    solution: [
      "Architected clean, modern user journeys dividing enterprise services into intuitive segments.",
      "Developed interactive cyber-threat visualization tools as lead capture assets.",
      "Implemented server-side rendering (SSR) for instant subpage loading."
    ],
    metricsDetail: {
      primary: "Bounce Rate Reduced: from 58% down to 24%",
      secondary: "Average Session Duration: Raised by 130%",
      tertiary: "Form Click-Through Rate: Boosted to 4.2%"
    },
    takeaway: "B2B enterprise websites must match the technical quality of the business to build trust with corporate decision makers."
  },

  // --- SEO OPTIMIZATION ---
  {
    id: 29,
    slug: "programmatic-seo-directory-scaling",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "Programmatic SEO: Scaling Directory Traffic from 12k to 140k Monthly Visits",
    clientName: "HomePro Finder",
    niche: "Local Business Directory Portal",
    metrics: { label: "Monthly Organic Visits", start: "12,000", end: "140,000", growth: "+1066%" },
    adSpend: "Zero Ad Spend (SEO)",
    roas: "Organic Traffic Compounding",
    progress: 97,
    overview: "HomePro Finder wanted to rank for thousands of local home service keywords. Instead of writing pages manually, we built a database-driven programmatic SEO engine that generated 12,000 highly structured local search pages.",
    challenge: "Low crawl budgets, indexing blocks due to thin duplicate pages, and manual template generation limits.",
    solution: [
      "Designed a dynamic, high-performance database page template containing structured JSON-LD local schema.",
      "Deployed a programmatic page generator mapping service + location keywords (e.g., 'plumbers in Dallas').",
      "Automated internal linking grids to distribute site authority to programmatic subpages efficiently.",
      "Optimized Core Web Vitals across all generated pages to ensure high search ranking signals."
    ],
    metricsDetail: {
      primary: "Google Indexation Rate: Raised to 94% on programmatic pages",
      secondary: "Monthly Organic Lead Value: Equivalent to $35k/mo PPC ad budget",
      tertiary: "Top 3 Organic Search Results: 1,800+ local terms"
    },
    takeaway: "Programmatic SEO combined with clean structured schema and automated internal linking is the ultimate strategy to scale organic visibility."
  },
  {
    id: 30,
    slug: "saas-blog-inbound-engine",
    category: "seo",
    categoryLabel: "SEO Optimization",
    title: "SaaS Blog Inbound Engine Scales Inquiries by 240% in 120 Days",
    clientName: "DocuSign Pro",
    niche: "Enterprise Document Security Software",
    metrics: { label: "Organic Monthly Leads", start: "80", end: "272", growth: "+240%" },
    adSpend: "N/A",
    roas: "Compounding SEO asset value",
    progress: 89,
    overview: "DocuSign Pro had a product page that failed to attract organic traffic. We designed a content marketing engine targeted at transactional search terms and scaled their search rankings.",
    challenge: "High competitiveness in the digital signatures segment with generic terms controlled by high-authority websites.",
    solution: [
      "Conducted a search-intent gap audit targeting long-tail compliance phrases.",
      "Structured a high-frequency publication sequence mapping detailed how-to integration guides.",
      "Built clean, prominent contact forms inside learning sidebars to capture leads.",
      "Acquired contextual mentions in high-tier trade resources."
    ],
    metricsDetail: {
      primary: "Monthly Organic Impressions: Scaled to 4.5M",
      secondary: "Organic Conversion Lift: +240% higher direct leads",
      tertiary: "Top 10 Rankings: Secured 82 key transactional phrases"
    },
    takeaway: "Content-driven search marketing succeeds when you answer granular user compliance and implementation questions rather than writing generic blogs."
  },

  // --- MARKETING CREATIVE ---
  {
    id: 35,
    slug: "meta-creative-hook-testing",
    category: "creative",
    categoryLabel: "Marketing Creative",
    title: "How Systematic Creative Video Hook Testing Boosted CTR by 280%",
    clientName: "Lumi Skin Co",
    niche: "Direct-to-Consumer Organic Cosmetics",
    metrics: { label: "Creative CTR", start: "0.8%", end: "3.0%", growth: "+275%" },
    adSpend: "$14,000/mo",
    roas: "5.2x ROAS",
    progress: 92,
    overview: "Lumi Skin Co's Meta ad campaigns suffered from quick ad fatigue and dropping conversion rates. We deployed a creative hook testing matrix, filming and editing 5 different vertical hooks for every product demo script.",
    challenge: "Traditional ad graphics lost conversion efficiency within 5 days of launch, leading to unstable CPA and bid leakages.",
    solution: [
      "Developed a systematic vertical video editing template combining fast typography hooks and aesthetic product texture highlights.",
      "Conducted weekly batch testing of different user hook phrases ('This is why my skin glows...', 'Stop buying chemical creams...').",
      "Created highly styled typography guidelines and lifestyle brand cards."
    ],
    metricsDetail: {
      primary: "Creative CTR Lift: +280% on broad campaigns",
      secondary: "Cost Per Purchase: Slashed by 42%",
      tertiary: "First-Time Customers Acquired: 8,400+ in 90 days"
    },
    takeaway: "Systematic horizontal creative hook variations bypass ad fatigue faster than editing target demographics."
  },

  // --- OVERSEAS BUSINESS EXPANSION ---
  {
    id: 40,
    slug: "us-market-entry-saas",
    category: "overseas",
    categoryLabel: "Overseas Expansion",
    title: "US Market Entry: Scaling B2B SaaS Global Pipeline by 380%",
    clientName: "QuickLogistics Tech",
    niche: "Global Trade Supply Chain SaaS",
    metrics: { label: "US Sales Pipeline Value", start: "$150,000", end: "$720,000", growth: "+380%" },
    adSpend: "$22,000/mo",
    roas: "High-tier global positioning",
    progress: 91,
    overview: "QuickLogistics wanted to break out of their local market and enter the highly competitive US enterprise sector. We mapped a robust global outbound pipeline, localized search assets, and structured cross-border targeting strategies.",
    challenge: "Zero brand awareness in US corporate spaces, low email response ratios, and high local ad bid prices.",
    solution: [
      "Designed clean, targeted US-compliance landing pages addressing localized supply-chain logistics issues.",
      "Launched hyper-targeted LinkedIn ABM conversation campaigns directed at Supply Chain Directors in US manufacturing firms.",
      "Structured localized case studies showcasing cross-border transit times and cost-saving metrics."
    ],
    metricsDetail: {
      primary: "Pipeline Value Boosted: +380% in 120 days",
      secondary: "US Lead Response Rate: Lifted to 8.4% on direct outreach",
      tertiary: "Active B2B Sales Demos Booked: 48 enterprise contracts"
    },
    takeaway: "Entering foreign premium markets requires localizing product benefits to regional supply chain roadblocks and using precise account-based outbound tools."
  }
];
