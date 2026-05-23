"use client";

import { useState } from "react";
import Link from "next/link";

export default function SignupPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.firstName && formData.email && formData.password.length >= 8) {
      setIsSuccess(true);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen w-full flex font-inter bg-black text-white relative overflow-hidden select-none">
      
      {/* Floating Home Button (Top Right of Form Column) */}
      <Link href="/" className="absolute top-6 right-6 z-50">
        <button className="flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/15 text-white px-4 py-2 rounded-full font-inter text-xs font-semibold backdrop-blur-md transition-all active:scale-95 cursor-pointer">
          <span className="material-symbols-outlined text-sm leading-none font-bold">arrow_back</span>
          Home
        </button>
      </Link>

      {/* Left Column (Hero Sidebar - Hidden on mobile) */}
      <div className="hidden lg:flex flex-col relative w-[52%] overflow-hidden bg-black border-r border-white/5">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60"
        >
          <source
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260506_081238_406ed0e3-5d83-436e-a512-0bbff7ec5b95.mp4"
            type="video/mp4"
          />
        </video>
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
        
        <div className="relative z-10 p-16 flex flex-col h-full justify-between select-none">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 animate-fade-up w-fit">
            <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shadow-lg">
              <span className="material-symbols-outlined text-black font-bold text-lg leading-none" style={{ fontVariationSettings: "'FILL' 1" }}>
                change_history
              </span>
            </div>
            <span className="font-be-vietnam-pro font-bold text-xl text-white">MarketOps</span>
          </Link>

          {/* Onboarding steps information */}
          <div className="max-w-md text-left">
            <h1 className="font-be-vietnam-pro text-[48px] leading-tight font-black text-white mb-6 animate-fade-up delay-100">
              Join MarketOps
            </h1>
            <p className="font-inter text-base text-gray-300 mb-12 animate-fade-up delay-200">
              Follow these 3 quick phases to activate your space.
            </p>
            {/* Steps List */}
            <div className="space-y-6 animate-fade-up delay-300">
              <div className="flex items-center gap-4 group">
                <div className="w-10 h-10 rounded-full border border-white flex items-center justify-center bg-white text-black font-inter text-sm font-bold shadow-inner">
                  1
                </div>
                <span className="font-inter text-base text-white font-semibold">
                  Register your identity
                </span>
              </div>
              <div className="flex items-center gap-4 group opacity-40">
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white font-inter text-sm font-semibold">
                  2
                </div>
                <span className="font-inter text-base text-white">
                  Configure your studio
                </span>
              </div>
              <div className="flex items-center gap-4 group opacity-40">
                <div className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white font-inter text-sm font-semibold">
                  3
                </div>
                <span className="font-inter text-base text-white">
                  Finalize your profile
                </span>
              </div>
            </div>
          </div>
          
          <div className="text-gray-500 font-inter text-xs select-none">
            &copy; 2024 MarketOps. All rights reserved.
          </div>
        </div>
      </div>

      {/* Right Column (Interactive Dark Mode Form) */}
      <div className="w-full lg:w-[48%] flex flex-col justify-center px-8 sm:px-16 lg:px-24 py-16 relative overflow-y-auto z-10">
        {/* Subtle background glow */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
        
        <div className="w-full max-w-md mx-auto text-left">
          {isSuccess ? (
            <div className="flex flex-col gap-6 items-center text-center p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-md animate-[slideUpFade_0.5s_ease_forwards]">
              <div className="w-16 h-16 bg-primary/20 text-primary border border-primary/30 rounded-full flex items-center justify-center shadow-lg">
                <span className="material-symbols-outlined text-[36px] font-bold">check_circle</span>
              </div>
              <div className="space-y-2">
                <h2 className="font-be-vietnam-pro text-3xl font-black">Success!</h2>
                <p className="font-inter text-sm text-gray-400 max-w-xs leading-relaxed">
                  Welcome to MarketOps, {formData.firstName}! We are configuring your premium workspace dashboard now.
                </p>
              </div>
              <Link href="/" className="w-full">
                <button className="w-full bg-white text-black py-4 rounded-xl font-inter font-bold hover:bg-gray-200 transition-colors active:scale-95 duration-200 shadow-lg cursor-pointer">
                  Go to Dashboard
                </button>
              </Link>
            </div>
          ) : (
            <>
              <h2 className="font-be-vietnam-pro text-3xl md:text-5xl font-black text-white mb-8 animate-fade-up">
                Create New Profile
              </h2>

              {/* Social Login */}
              <div className="grid grid-cols-2 gap-4 mb-8 animate-fade-up delay-100">
                <button
                  type="button"
                  onClick={() => setIsSuccess(true)}
                  className="flex items-center justify-center gap-3 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-inter text-sm font-semibold transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"></path>
                  </svg>
                  Google
                </button>
                <button
                  type="button"
                  onClick={() => setIsSuccess(true)}
                  className="flex items-center justify-center gap-3 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl font-inter text-sm font-semibold transition-all active:scale-95 cursor-pointer shadow-sm"
                >
                  <svg className="w-5 h-5 text-white fill-current" viewBox="0 0 24 24">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.379.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"></path>
                  </svg>
                  GitHub
                </button>
              </div>

              {/* Email separator */}
              <div className="flex items-center gap-4 mb-8 animate-fade-up delay-200">
                <div className="h-[1px] flex-1 bg-white/10"></div>
                <span className="font-inter text-xs text-gray-400 font-bold tracking-wider">
                  OR CONTINUE WITH EMAIL
                </span>
                <div className="h-[1px] flex-1 bg-white/10"></div>
              </div>

              {/* Signup Form */}
              <form onSubmit={handleSubmit} className="space-y-5 animate-fade-up delay-300">
                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="font-inter text-sm text-gray-300 font-semibold block">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="John"
                      className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none transition-all placeholder:text-gray-600 shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-inter text-sm text-gray-300 font-semibold block">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Doe"
                      className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none transition-all placeholder:text-gray-600 shadow-inner"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="font-inter text-sm text-gray-300 font-semibold block">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none transition-all placeholder:text-gray-600 shadow-inner"
                  />
                </div>

                <div className="space-y-2 relative">
                  <label className="font-inter text-sm text-gray-300 font-semibold block">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      required
                      minLength={8}
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="w-full bg-white/5 border border-white/15 focus:border-primary focus:ring-1 focus:ring-primary rounded-xl px-4 py-3 font-inter text-sm text-white focus:outline-none transition-all placeholder:text-gray-600 shadow-inner pr-12"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors cursor-pointer focus:outline-none"
                    >
                      <span className="material-symbols-outlined text-[20px]">
                        {showPassword ? "visibility_off" : "visibility"}
                      </span>
                    </button>
                  </div>
                  <p className="font-inter text-xs text-gray-500 text-left">
                    Must be at least 8 characters long.
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-white text-black hover:bg-gray-200 py-4 rounded-xl font-inter text-sm font-bold mt-8 transition-all active:scale-[0.98] cursor-pointer shadow-lg duration-200"
                >
                  Create Account
                </button>
              </form>

              <p className="mt-8 text-center font-inter text-sm text-gray-400 animate-fade-up delay-400">
                Member of the team?{" "}
                <a href="#" className="text-white hover:underline font-semibold transition-all">
                  Log in
                </a>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
