import React, { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Check, Triangle } from 'lucide-react';
import CardGlow from './CardGlow';

const plans = [
  {
    name: 'Starter Plan',
    price: '$1080 USD',
    features: [
      '1 landing page design',
      'Desktop + mobile versions',
      'Delivered in 5-7 days',
      'Standard Figma file',
      '1 revision'
    ],
    highlighted: false,
  },
  {
    name: 'Pro Plan',
    price: '$2800 USD',
    features: [
      'Up to 3 landing page designs',
      'Desktop + mobile versions',
      'Delivered in 5-7 days',
      'Source Figma file + assets',
      '3 revisions'
    ],
    highlighted: true,
  },
  {
    name: 'Velocity+ Plan',
    price: '$4020 USD',
    features: [
      'Full website design (up to 6 pages)',
      'Desktop + mobile versions',
      'Delivered in 10-14 days',
      'Source Figma file + assets',
      'Unlimited revisions'
    ],
    highlighted: false,
  }
];

export default function Pricing() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    gsap.fromTo('.pricing-card', 
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
    <section id="pricing" ref={containerRef} className="py-24 md:py-32 relative">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="animated-badge inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-brand-text mb-6">Pricing</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">Straightforward pricing that fits</h2>
          <p className="text-brand-text max-w-md mx-auto">Whether you're launching your first idea or scaling your startup, Velocity has a plan that fits your pace.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          {plans.map((plan, idx) => (
            <div 
              key={idx} 
              className={`pricing-card relative bg-brand-card rounded-[32px] p-8 border ${plan.highlighted ? 'border-brand-orange-light/50 scale-105 z-10 shadow-[0_0_60px_rgba(255,122,26,0.2)]' : 'border-brand-border'} overflow-hidden transition-all duration-500 flex flex-col h-full`}
            >
              <div className="glow"></div>
              {plan.highlighted && (
                <>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1/2 bg-brand-orange-light/20 blur-[60px] rounded-full pointer-events-none" />
                  {/* Honeycomb pattern overlay */}
                  <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'40\' height=\'69.28203230275509\' viewBox=\'0 0 40 69.28203230275509\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M40 17.32050807568877l-20 11.547005383792515L0 17.32050807568877V-5.773502691896257l20-11.547005383792515 20 11.547005383792515V17.32050807568877zM20 46.18802153837925l20 11.547005383792515v-23.09401076758503L20 23.09401076758503l-20 11.547005383792515v23.09401076758503L20 46.18802153837925z\' fill=\'%23FF7A1A\' fill-opacity=\'1\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")' }} />
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-brand-orange-light text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                </>
              )}
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="mb-6">
                  <Triangle size={24} className={plan.highlighted ? "text-brand-orange-light fill-brand-orange-light" : "text-white"} />
                </div>
                <h3 className="font-sora font-bold text-2xl text-white mb-2">{plan.name}</h3>
                <p className="font-sora font-bold text-3xl text-white mb-8">{plan.price}</p>
                
                <ul className="space-y-4 mb-10 flex-1">
                  {plan.features.map((feature, fIdx) => (
                    <li key={fIdx} className="flex items-start gap-3 text-brand-text text-sm">
                      <Check size={16} className="text-brand-orange-light shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className={`w-full font-sora font-bold uppercase tracking-widest text-xs px-6 py-4 rounded-full transition-all ${plan.highlighted ? 'bg-gradient-orange text-white glow-orange hover:glow-orange-strong' : 'bg-transparent border border-white/20 text-white hover:border-brand-orange-light hover:text-brand-orange-light'}`}>
                  Choose this plan
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
