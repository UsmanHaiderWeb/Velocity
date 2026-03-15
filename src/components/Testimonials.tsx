import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import CardGlow from './CardGlow';

const testimonials = [
  {
    name: 'Michael R',
    role: 'Growth Lead at Convert',
    text: '"We had over 120 signups in the first week using the page Velocity designed. It gave us the confidence to pitch investors and start scaling the product. Big win for us."',
    active: false,
  },
  {
    name: 'Jason L',
    role: 'Founder at LaunchGrid',
    text: '"Velocity completely changed the game for us. We sent over a rough layout and they returned a stunning landing page that actually converted. Fast turnaround and no confusion."',
    active: true,
  },
  {
    name: 'Emily B',
    role: 'SaaS Founder at LoopTop',
    text: '"We used to overthink our site way too much. Velocity helped us simplify everything into a clear message with a beautiful layout. The process was smooth and surprisingly fast."',
    active: false,
  }
];

export default function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.test-card', 
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
    <section id="reviews" ref={containerRef} className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="animated-badge inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-brand-text mb-6">Testimonials</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">What Founders Are Saying</h2>
          <p className="text-brand-text max-w-2xl mx-auto">Startups trust Velocity because we don't just design pages we help founders turn clarity into conversions and land with impact.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((test, idx) => (
            <div 
              key={idx} 
              className={`test-card relative bg-brand-card rounded-[28px] p-8 border ${test.active ? 'border-brand-orange-light/50 scale-105 z-10 shadow-[0_0_40px_rgba(255,122,26,0.15)]' : 'border-brand-border'} overflow-hidden transition-all duration-500`}
            >
              <div className="glow"></div>
              {test.active && (
                <>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-orange-light/20 blur-[60px] rounded-full pointer-events-none" />
                </>
              )}
              
              <div className="relative z-10 flex flex-col items-center text-center h-full">
                <div className="w-12 h-12 rounded-full bg-white/10 mb-4 overflow-hidden border border-white/10">
                  <img src={`https://i.pravatar.cc/150?img=${idx + 11}`} alt={test.name} className="w-full h-full object-cover grayscale" />
                </div>
                <h3 className="font-sora font-bold text-lg text-white">{test.name}</h3>
                <p className="text-brand-orange-light text-xs mb-6">{test.role}</p>
                <p className="text-brand-text text-sm leading-relaxed italic">{test.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center gap-2 mt-12">
          {testimonials.map((test, idx) => (
            <div key={idx} className={`w-2 h-2 rounded-full ${test.active ? 'bg-brand-orange-light' : 'bg-white/20'}`} />
          ))}
        </div>

      </div>
    </section>
  );
}
