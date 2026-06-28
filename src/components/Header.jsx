import React from 'react';
import Link from 'next/link';

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full px-5 z-50 transition-transform duration-500 translate-y-0 mt-4">
      <div className="bg-gradient-to-r from-[#172242] to-[#0c142c] text-white container mx-auto flex items-center justify-between px-6 py-3 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.3)] border border-white/10">
        <div>
          <Link href="/" className="text-2xl font-black italic tracking-tighter">
            MarketOps
          </Link>
        </div>
        
        {/* Navigation Links restored */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-8 text-xs lg:text-sm font-semibold text-gray-300">
          <Link className="hover:text-cyan-400 transition-colors" href="/">Home</Link>
          <Link className="hover:text-cyan-400 transition-colors" href="/#services">Services</Link>
          <Link className="hover:text-cyan-400 transition-colors" href="/about">About Us</Link>
          <Link className="hover:text-cyan-400 transition-colors" href="/cases">Case Study</Link>
          <Link className="hover:text-cyan-400 transition-colors" href="/scale-brand">Scale Brand</Link>
          <Link className="hover:text-cyan-400 transition-colors" href="/contact">Contact Us</Link>
        </nav>
        
        <div className="flex gap-3">
          <a href="#" className="bg-gradient-to-r from-[#00c6ff] to-[#0072ff] px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 transition-opacity shadow-[0_0_15px_rgba(0,198,255,0.4)] flex items-center gap-2">
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
