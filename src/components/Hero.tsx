import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    
    tl.fromTo('.hero-badge', { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 })
      .fromTo('.hero-title', { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.2 }, '-=0.4')
      .fromTo('.hero-sub', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-btns', { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4')
      .fromTo('.hero-trust', { opacity: 0 }, { opacity: 1, duration: 1 }, '-=0.2')
      .fromTo('.hero-glow', { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' }, 0);
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="relative pt-40 pb-32 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      {/* Massive bottom glow */}
      <div className="hero-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[120vw] h-[60vh] bg-brand-orange-light/20 blur-[120px] rounded-full pointer-events-none -z-10" />
      <div className="hero-glow absolute bottom-0 left-1/2 -translate-x-1/2 w-[80vw] h-[40vh] bg-brand-orange-dark/30 blur-[100px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1200px] mx-auto px-4 md:px-8 text-center relative z-10 flex flex-col items-center">
        
        <div className="hero-badge animated-badge inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-brand-orange-light/30 bg-brand-orange-light/10 mb-8">
          <span className="w-2 h-2 rounded-full bg-brand-orange-light animate-pulse" />
          <span className="text-xs font-medium text-white tracking-wide">Onboarding new founders this week &rarr;</span>
        </div>

        <h1 className="hero-title font-sora font-extrabold text-5xl md:text-7xl lg:text-[80px] leading-[1.1] text-white tracking-tight mb-6 text-glow">
          Launch faster.<br />Convert better.
        </h1>

        <p className="hero-sub text-lg md:text-xl text-brand-text max-w-2xl mx-auto mb-10 leading-relaxed">
          We Design Landing Pages That Help Founders<br />Launch Faster And Grow Smarter.
        </p>

        <div className="hero-btns flex flex-col sm:flex-row items-center gap-4 mb-20">
          <button className="w-full sm:w-auto bg-gradient-orange text-white font-sora font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full glow-orange hover:glow-orange-strong transition-all hover:scale-105">
            Get Started Now
          </button>
          <button className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-sora font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full hover:border-brand-orange-light hover:text-brand-orange-light transition-all">
            See Features
          </button>
        </div>

        <div className="hero-trust flex flex-col items-center opacity-60">
          <p className="text-xs uppercase tracking-widest text-brand-text mb-6">Trusted by 100+ Startups Worldwide</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 grayscale opacity-80">
            <span className="font-sora font-bold text-xl flex items-center gap-1"><span className="text-brand-orange-light">✧</span> ENHANCE</span>
            <span className="font-sora font-bold text-xl">PromptPilot</span>
            <span className="font-sora font-bold text-xl flex items-center gap-1"><span className="text-brand-orange-light">❯❯❯</span> Screen</span>
            <span className="font-sora font-bold text-xl flex items-center gap-1"><span className="text-brand-orange-light">☁</span> EverMist</span>
            <span className="font-sora font-bold text-xl flex items-center gap-1"><span className="text-brand-orange-light">■</span> Tasio</span>
          </div>
        </div>
      </div>
    </section>
  );
}
