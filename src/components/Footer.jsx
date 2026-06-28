import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#050810] text-white pt-20 pb-10 border-t border-gray-800">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-16">
          <div className="md:col-span-1">
            <Link href="/" className="text-3xl font-bold italic tracking-tighter mb-6 block bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
              MarketOps
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              A results-driven digital advertising agency helping brands scale with smart infrastructure, creative loops, and performance marketing.
            </p>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/services/ecommerce" className="hover:text-cyan-400 transition-colors">Ecommerce Solutions</Link></li>
              <li><Link href="/services/performance" className="hover:text-cyan-400 transition-colors">Performance Marketing</Link></li>
              <li><Link href="/services/webdev" className="hover:text-cyan-400 transition-colors">Website & Developments</Link></li>
              <li><Link href="/services/seo" className="hover:text-cyan-400 transition-colors">SEO Optimization</Link></li>
              <li><Link href="/services/creative" className="hover:text-cyan-400 transition-colors">Marketing Creative</Link></li>
              <li><Link href="/services/overseas" className="hover:text-cyan-400 transition-colors">Overseas Business Dev</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link href="/about" className="hover:text-cyan-400 transition-colors">About Us</Link></li>
              <li><Link href="/cases" className="hover:text-cyan-400 transition-colors">Case Studies</Link></li>
              <li><Link href="/blog" className="hover:text-cyan-400 transition-colors">Blog & News</Link></li>
              <li><Link href="/contact" className="hover:text-cyan-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Connect</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="https://wa.me/919111880088" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">WhatsApp</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Telegram</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">LinkedIn</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>© {new Date().getFullYear()} MarketOps. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/policy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/policy/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
