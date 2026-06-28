"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    budget: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1500);
  };

  return (
    <div className="bg-[#f8fafc] min-h-screen">
      {/* Contact Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center pt-40 pb-32 overflow-hidden px-6 bg-gradient-to-b from-[#3b82f6] to-[#e0f2fe]">
        <div className="absolute inset-0 z-0 overflow-hidden">
           <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[100%] bg-white/30 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[100%] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none"></div>
           <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>
        </div>
        
        <div className="relative z-10 space-y-6 max-w-4xl mx-auto mt-4">
          <span className="inline-block bg-blue-600 text-white text-xs px-5 py-2 rounded-full font-bold uppercase tracking-widest shadow-lg shadow-blue-500/30">
            Get in touch
          </span>
          <h1 className="font-bold text-5xl md:text-7xl leading-tight text-[#0f172a]">
            Let's Scale <br className="hidden md:block"/>
            <span className="text-blue-700">Your Brand Together</span>
          </h1>
          <p className="text-slate-700 text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed font-semibold pt-4">
            Ready to dominate your market? Drop us a line and let's discuss your custom growth strategy.
          </p>
        </div>
      </section>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-20 md:py-24 select-none relative z-10 bg-[#f8fafc] -mt-10 rounded-t-[3rem]">
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20 items-start">
          
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-2 space-y-12">
            <div className="space-y-6">
              <h2 className="font-bold text-3xl md:text-4xl text-[#0f172a] leading-tight">
                Direct Line to <br/>
                <span className="text-blue-600">Our Experts</span>
              </h2>
              <p className="text-slate-600 text-lg font-medium leading-relaxed">
                Whether you're looking for a comprehensive audit or ready to launch a new campaign, our team is standing by.
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-2xl">mail</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Email Us</p>
                  <p className="text-lg font-bold text-slate-800 group-hover:text-blue-600 transition-colors">hello@marketops.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-cyan-100 flex items-center justify-center text-cyan-600 group-hover:scale-110 group-hover:bg-cyan-600 group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-2xl">call</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">Call Us</p>
                  <p className="text-lg font-bold text-slate-800 group-hover:text-cyan-600 transition-colors">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-start gap-6 group cursor-pointer">
                <div className="w-14 h-14 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition-all shadow-sm">
                  <span className="material-symbols-outlined text-2xl">location_on</span>
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-bold text-slate-400 uppercase tracking-widest">HQ Office</p>
                  <p className="text-lg font-bold text-slate-800 group-hover:text-emerald-600 transition-colors">Mumbai, Maharashtra, India</p>
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-slate-200">
              <div className="bg-blue-50 border border-blue-100 rounded-[2rem] p-8 space-y-6">
                <h3 className="font-bold text-xl text-blue-900">Need Immediate Help?</h3>
                <p className="text-sm text-blue-700 font-medium leading-relaxed">
                  Skip the form and chat with our senior strategists directly on WhatsApp.
                </p>
                <a
                  href="https://wa.me/919424995426"
                  target="_blank"
                  className="inline-block bg-[#2ecc71] hover:bg-[#27ae60] hover:-translate-y-1 active:translate-y-0 text-white font-bold text-sm px-8 py-4 rounded-xl transition-all shadow-[0_8px_20px_rgba(46,204,113,0.3)] cursor-pointer select-none"
                >
                  💬 Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-3">
            <div className="bg-white p-8 md:p-12 rounded-[2.5rem] border border-slate-200 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition-all relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center text-center py-20 space-y-6 relative z-10">
                  <div className="w-24 h-24 rounded-full bg-emerald-100 text-emerald-500 flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-5xl">check_circle</span>
                  </div>
                  <h3 className="font-bold text-3xl text-slate-800">Message Sent!</h3>
                  <p className="text-slate-600 text-lg font-medium max-w-sm mx-auto">
                    Thanks for reaching out. One of our growth strategists will get back to you within 24 hours.
                  </p>
                  <button 
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-8 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold rounded-xl transition-colors cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Full Name *</label>
                      <input 
                        required
                        type="text" 
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="John Doe"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Email Address *</label>
                      <input 
                        required
                        type="email" 
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Phone Number</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="+1 (555) 000-0000"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Company / Brand</label>
                      <input 
                        type="text" 
                        value={formData.company}
                        onChange={(e) => setFormData({...formData, company: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all"
                        placeholder="Your Brand Name"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">Monthly Ad Budget</label>
                    <div className="relative">
                      <select 
                        value={formData.budget}
                        onChange={(e) => setFormData({...formData, budget: e.target.value})}
                        className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all appearance-none cursor-pointer"
                      >
                        <option value="" disabled>Select your monthly ad spend</option>
                        <option value="under-5k">Under $5,000</option>
                        <option value="5k-20k">$5,000 - $20,000</option>
                        <option value="20k-50k">$20,000 - $50,000</option>
                        <option value="50k-plus">$50,000+</option>
                      </select>
                      <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">expand_more</span>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-slate-500 uppercase tracking-widest ml-1">How can we help? *</label>
                    <textarea 
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-xl font-medium text-slate-800 placeholder:text-slate-400 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-100 transition-all resize-none min-h-[160px]"
                      placeholder="Tell us about your current challenges and goals..."
                    ></textarea>
                  </div>

                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold text-lg py-5 rounded-xl transition-all shadow-[0_8px_20px_rgba(37,99,235,0.3)] hover:shadow-[0_12px_25px_rgba(37,99,235,0.4)] flex items-center justify-center gap-3 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span className="material-symbols-outlined animate-spin">refresh</span>
                    ) : (
                      <>
                        Submit Request
                        <span className="material-symbols-outlined">send</span>
                      </>
                    )}
                  </button>
                  <p className="text-center text-xs text-slate-400 font-medium">
                    Your information is 100% secure. We will never share your details.
                  </p>
                </form>
              )}
            </div>
          </div>

        </div>

      </main>
    </div>
  );
}
