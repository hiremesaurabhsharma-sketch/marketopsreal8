"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function BlogPage() {
  const posts = [
    {
      videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_030111_a9e15665-d379-4a7f-8116-695bbe452ad1.mp4",
      category: "Lighting",
      categoryColor: "text-[#2c4c34]",
      title: "Finding Natural Light in Unexpected Places",
    },
    {
      videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4",
      category: "Editing",
      categoryColor: "text-[#a63e2d]",
      title: "My Approach to Editing: Creating a Consistent Photography Style",
    },
    {
      videoSrc: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_154232_f8809bd2-a6c3-4a38-908d-2005e5b3cb3e.mp4",
      category: "Business",
      categoryColor: "text-[#1a2b8c]",
      title: "Pricing Your Photography: Strategies That Work",
    },
  ];

  return (
    <>
      <Navbar />

      {/* Main Content Canvas */}
      <main className="max-w-[1200px] mx-auto px-margin-mobile md:px-12 py-[60px] select-none relative z-10">
        
        {/* Header Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl text-left">
            <span className="inline-block bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 text-on-surface-variant px-3 py-1 rounded-lg text-xs font-semibold mb-4 tracking-wider uppercase">
              Blog
            </span>
            <h1 className="font-outfit font-black text-5xl md:text-7xl leading-tight tracking-tight text-on-surface mb-4">
              Behind the lens
            </h1>
            <p className="text-on-surface-variant text-base md:text-lg font-inter max-w-lg leading-relaxed">
              Thoughts, insights, and stories from my photography journey — capturing moments and building brands through visual precision.
            </p>
          </div>
          <button className="bg-on-surface text-white dark:bg-white dark:text-black px-8 py-4 rounded-full font-outfit font-semibold hover:opacity-90 active:scale-95 duration-200 transition-all whitespace-nowrap cursor-pointer select-none">
            View all posts
          </button>
        </header>

        {/* Featured Post Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 rounded-2xl border border-outline-variant/35 overflow-hidden min-h-[520px] bg-white/40 dark:bg-white/5 backdrop-blur-md mb-12 shadow-sm">
          {/* Left: Video Area */}
          <div className="relative group cursor-pointer overflow-hidden aspect-video lg:aspect-auto">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260507_155500_808e6fdd-761f-4acd-b3be-cb7e6e700def.mp4"
                type="video/mp4"
              />
            </video>
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
              <div className="w-[70px] h-[70px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                <span className="material-symbols-outlined text-white text-3xl font-bold">add</span>
              </div>
              {/* L-shaped corner brackets */}
              <div className="corner-bracket bracket-tl"></div>
              <div className="corner-bracket bracket-tr"></div>
              <div className="corner-bracket bracket-bl"></div>
              <div className="corner-bracket bracket-br"></div>
            </div>
          </div>
          {/* Right: Content Area */}
          <div className="p-8 lg:p-[60px] flex flex-col justify-center text-left">
            <div className="flex items-center gap-3 mb-6">
              <span className="bg-on-surface text-white dark:bg-white dark:text-black text-[10px] px-3 py-1 rounded-full font-outfit uppercase tracking-widest font-extrabold">
                Must Read
              </span>
              <span className="text-primary text-xs font-black uppercase tracking-widest px-1">
                Gear
              </span>
            </div>
            <h2 className="font-outfit text-3xl md:text-5xl leading-tight font-black text-on-surface mb-6">
              Mastering the Art of Architectural Composition
            </h2>
            <p className="text-on-surface-variant text-sm md:text-base leading-relaxed mb-8 font-inter">
              Exploring the intersection of geometry, light, and perspective to create stunning visual narratives in modern commercial spaces.
            </p>
            <div className="flex items-center gap-2 mt-auto">
              <span className="font-outfit text-on-surface font-semibold text-sm">
                By August Renner &copy;
              </span>
            </div>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, idx) => (
            <article key={idx} className="flex flex-col text-left group">
              <div className="relative overflow-hidden rounded-2xl aspect-[4/3] mb-6 cursor-pointer border border-outline-variant/30 bg-black">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                >
                  <source src={post.videoSrc} type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/25 transition-all duration-300 flex items-center justify-center">
                  <div className="w-[70px] h-[70px] bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center scale-0 group-hover:scale-100 transition-transform duration-500">
                    <span className="material-symbols-outlined text-white text-3xl font-bold">add</span>
                  </div>
                  <div className="corner-bracket bracket-tl"></div>
                  <div className="corner-bracket bracket-tr"></div>
                  <div className="corner-bracket bracket-bl"></div>
                  <div className="corner-bracket bracket-br"></div>
                </div>
              </div>
              <div>
                <span className={`font-outfit text-[11px] font-extrabold uppercase tracking-widest mb-3 block ${post.categoryColor}`}>
                  {post.category}
                </span>
                <h3 className="font-outfit text-[22px] font-bold leading-snug text-on-surface group-hover:text-primary transition-colors cursor-pointer duration-200">
                  {post.title}
                </h3>
              </div>
            </article>
          ))}
        </section>

        {/* Next Page button */}
        <div className="flex justify-center mt-16">
          <button className="flex items-center gap-2 bg-white/60 dark:bg-white/5 border border-outline-variant/30 text-on-surface px-8 py-3 rounded-full text-sm font-outfit font-extrabold transition-all duration-300 hover:bg-white dark:hover:bg-white/10 hover:scale-[1.02] active:scale-95 shadow-sm cursor-pointer select-none">
            <span>Next Page</span>
            <span className="material-symbols-outlined text-base font-bold leading-none">arrow_forward</span>
          </button>
        </div>
      </main>

      <Footer />
    </>
  );
}
