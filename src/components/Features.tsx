import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Zap, TrendingUp, Layers, Triangle } from 'lucide-react';
import CardGlow from './CardGlow';

const features = [
  {
    title: 'Implementation\nand tools',
    desc: 'Streamlined process with the right tools to build fast and smart.',
    icon: <Triangle size={32} className="text-brand-orange-light" fill="currentColor" />,
    glowPosition: 'bottom-center' as const,
  },
  {
    title: 'High-converting',
    desc: 'Clean designs that convert. Built in Figma, powered by Framer.',
    icon: <Zap size={32} className="text-brand-orange-light" fill="currentColor" />,
    glowPosition: 'bottom-right' as const,
  },
  {
    title: 'Maximum Return on ROI',
    desc: 'Real value, no fluff. Everything is done with purpose and profit in mind.',
    icon: <TrendingUp size={32} className="text-brand-orange-light" />,
    glowPosition: 'bottom-left' as const,
    extra: (
      <div className="mt-6 flex items-end gap-2 text-brand-orange-light">
        <span className="text-4xl font-sora font-bold">120%</span>
        <span className="text-sm mb-1">average increase</span>
      </div>
    )
  },
  {
    title: 'Clear steps\nand trust',
    desc: "You'll always know what's next. Simple, honest communication.",
    icon: <Layers size={32} className="text-brand-orange-light" />,
    glowPosition: 'bottom-center' as const,
  }
];

export default function Features() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.feature-card', 
      { y: 50, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        stagger: 0.2, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="features" ref={containerRef} className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="animated-badge inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-brand-text mb-6">Why Us?</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">Why Clients Stick With Us</h2>
          <p className="text-brand-text max-w-md mx-auto">We combine clarity, trust, and high-performing design to deliver results that actually matter.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="feature-card group relative bg-brand-card rounded-[28px] p-8 md:p-10 border border-brand-border overflow-hidden hover:scale-[1.02] transition-transform duration-500 ease-out"
            >
              <div className="glow"></div>
              <CardGlow position={feature.glowPosition} />

              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-black/50 border border-white/5 shadow-[0_0_30px_rgba(255,122,26,0.2)] group-hover:shadow-[0_0_40px_rgba(255,122,26,0.4)] transition-shadow">
                  {feature.icon}
                </div>
                <h3 className="font-sora font-bold text-2xl text-white mb-3 whitespace-pre-line">{feature.title}</h3>
                <p className="text-brand-text text-base leading-relaxed">{feature.desc}</p>
                {feature.extra}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
