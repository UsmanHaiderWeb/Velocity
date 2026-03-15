import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Triangle } from 'lucide-react';
import CardGlow from './CardGlow';

export default function FinalCTA() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.cta-content', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 80%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="py-24 md:py-32 relative overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-[40vh] bg-brand-orange-light/10 blur-[100px] rounded-full pointer-events-none" />
      
      <div className="max-w-[800px] mx-auto px-4 md:px-8 relative z-10">
        <div className="cta-content bg-brand-card rounded-[32px] p-12 md:p-16 border border-brand-border text-center relative overflow-hidden">
          <div className="absolute -bottom-[100px] left-1/2 -translate-x-1/2 w-[80%] h-[200px] bg-[#ff7300] rounded-full blur-[80px] opacity-40 pointer-events-none" />
          <div className="absolute inset-0 bg-brand-orange-light/5 blur-[40px] pointer-events-none" />
          
          <div className="relative z-10 flex flex-col items-center">
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/50 border border-white/5 shadow-[0_0_40px_rgba(255,122,26,0.2)]">
              <Triangle size={32} className="text-brand-orange-light fill-brand-orange-light" />
            </div>
            
            <h2 className="font-sora font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Ready to launch something<br />that actually works?
            </h2>
            
            <p className="text-brand-text text-lg mb-10 max-w-lg mx-auto">
              Let Velocity design the landing page your idea deserves. Clean, strategic, and ready to grow.
            </p>
            
            <button className="bg-gradient-orange text-white font-sora font-bold uppercase tracking-widest text-sm px-8 py-4 rounded-full glow-orange hover:glow-orange-strong transition-all hover:scale-105">
              Get Started Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
