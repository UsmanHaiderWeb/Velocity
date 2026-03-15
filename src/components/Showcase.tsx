import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CardGlow from './CardGlow';

export default function Showcase() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.showcase-row-1', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: '.showcase-row-1', start: 'top 75%' } }
    );
    gsap.fromTo('.showcase-row-2', 
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, scrollTrigger: { trigger: '.showcase-row-2', start: 'top 75%' } }
    );
  }, { scope: containerRef });

  return (
    <section id="work" ref={containerRef} className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex flex-col gap-24">
        
        {/* Row 1 */}
        <div className="showcase-row-1 flex flex-col md:flex-row items-center gap-12 lg:gap-24">
          <div className="flex-1">
            <h2 className="font-sora font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              Don't settle for<br />template-looking<br />pages
            </h2>
            <p className="text-brand-text text-lg mb-8 max-w-md">
              We design every page from scratch to match your brand, your offer, and your goals. So it doesn't just look good it works.
            </p>
            <button className="bg-gradient-orange text-white font-sora font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full glow-orange hover:glow-orange-strong transition-all hover:scale-105">
              Start Now
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-brand-card rounded-[28px] border border-brand-border overflow-hidden aspect-[4/3] group">
              <div className="absolute inset-0 bg-brand-orange-light/5 blur-[40px] group-hover:bg-brand-orange-light/10 transition-colors duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?q=80&w=1000&auto=format&fit=crop" 
                alt="UI Wireframes" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-bg via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Row 2 */}
        <div className="showcase-row-2 flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-24">
          <div className="flex-1">
            <h2 className="font-sora font-bold text-3xl md:text-5xl text-white mb-6 leading-tight">
              We think<br />deeply before<br />we design
            </h2>
            <p className="text-brand-text text-lg mb-8 max-w-md">
              Strategy comes before style. We use user flow thinking, positioning, and layout psychology to build what performs.
            </p>
            <button className="bg-gradient-orange text-white font-sora font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full glow-orange hover:glow-orange-strong transition-all hover:scale-105">
              Start Now
            </button>
          </div>
          <div className="flex-1 w-full">
            <div className="relative bg-brand-card rounded-[28px] border border-brand-border overflow-hidden aspect-[4/3] group">
              <div className="absolute inset-0 bg-brand-orange-light/5 blur-[40px] group-hover:bg-brand-orange-light/10 transition-colors duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1000&auto=format&fit=crop" 
                alt="Design Thinking" 
                className="absolute inset-0 w-full h-full object-cover opacity-80 mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-tl from-brand-bg via-transparent to-transparent" />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
