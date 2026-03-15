import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Target, Layout, Rocket } from 'lucide-react';
import CardGlow from './CardGlow';

const steps = [
  {
    title: 'Share Your Vision',
    desc: 'Hop on a quick call or fill out a brief. You tell us the "what", we figure out the "how".',
    icon: <Target size={32} className="text-brand-orange-light" />,
    glowPosition: 'top-left' as const,
  },
  {
    title: 'We Design It',
    desc: 'You get a clean, conversion-focused landing page tailored to your brand and goals.',
    icon: <Layout size={32} className="text-brand-orange-light" />,
    glowPosition: 'top-right' as const,
  },
  {
    title: 'Ready to Launch',
    desc: 'We deliver everything ready to launch. Use it to validate, grow, or raise your cpl.',
    icon: <Rocket size={32} className="text-brand-orange-light" />,
    glowPosition: 'top-right' as const,
  }
];

export default function Process() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.process-card', 
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
    <section id="process" ref={containerRef} className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="animated-badge inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-brand-text mb-6">Process</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">The Process Fast, Clear, Done</h2>
          <p className="text-brand-text max-w-md mx-auto">No endless revisions. No messy handoffs. Just a process that works and delivers fast.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div 
              key={idx} 
              className="process-card group relative bg-brand-card rounded-[28px] p-8 border border-brand-border overflow-hidden hover:scale-[1.04] transition-transform duration-500 ease-out"
            >
              <div className="glow"></div>
              <CardGlow position={step.glowPosition} />
              
              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="mb-8 inline-flex items-center justify-center w-20 h-20 rounded-full bg-black/50 border border-white/5 shadow-[0_0_30px_rgba(255,122,26,0.15)] group-hover:shadow-[0_0_40px_rgba(255,122,26,0.3)] transition-shadow">
                  {step.icon}
                </div>
                <h3 className="font-sora font-bold text-xl text-white mb-3">{step.title}</h3>
                <p className="text-brand-text text-sm leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
