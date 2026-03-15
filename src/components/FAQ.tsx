import React, { useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { Plus, Minus } from 'lucide-react';
import CardGlow from './CardGlow';

const faqs = [
  {
    q: 'How long does it take to deliver my landing page?',
    a: 'We typically deliver your landing page within 5 to 7 business days, depending on the plan you choose. If you\'re on the Velocity+ plan, you\'ll get priority delivery in just 3 to 4 days perfect if you\'re moving fast and need to go live sooner.',
  },
  {
    q: 'What if I don\'t like the design?',
    a: 'We offer revisions based on your selected plan. We work closely with you during the brief stage to ensure we align with your vision before we start designing.',
  },
  {
    q: 'Can I request revisions after delivery?',
    a: 'Yes, depending on your plan, you have a set number of revisions. We want to make sure you are 100% satisfied with the final result.',
  },
  {
    q: 'Do you help with copywriting too?',
    a: 'While our primary focus is design and conversion optimization, we can provide guidance on copy structure and best practices for landing pages.',
  },
  {
    q: 'Is development included in the pricing?',
    a: 'Our standard plans cover the design in Figma. If you need development (e.g., Framer, Webflow), we can discuss that as an add-on service.',
  }
];

export default function FAQ() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [openIdx, setOpenIdx] = useState<number>(0);

  useGSAP(() => {
    gsap.fromTo('.faq-item', 
      { y: 30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 0.6, 
        stagger: 0.1, 
        ease: 'power3.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
        }
      }
    );
  }, { scope: containerRef });

  return (
    <section id="faqs" ref={containerRef} className="py-24 md:py-32 relative">
      <div className="max-w-[800px] mx-auto px-4 md:px-8">
        
        <div className="text-center mb-16">
          <span className="animated-badge inline-block px-4 py-1.5 rounded-full border border-white/10 text-xs font-medium text-brand-text mb-6">FAQs</span>
          <h2 className="font-sora font-bold text-3xl md:text-4xl text-white mb-4">Questions? We've got answers.</h2>
          <p className="text-brand-text max-w-md mx-auto">We've answered the most common ones below. If you still need help, just reach out we're here for it.</p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div 
                key={idx} 
                className={`faq-item relative bg-brand-card rounded-2xl border ${isOpen ? 'border-brand-orange-light shadow-[0_0_40px_rgba(255,122,26,0.4)]' : 'border-brand-border'} overflow-hidden transition-all duration-300`}
              >
                <button 
                  onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                  className="w-full flex items-center justify-between p-6 text-left relative z-10"
                >
                  <span className={`font-sora font-semibold text-lg ${isOpen ? 'text-white' : 'text-brand-text'}`}>{faq.q}</span>
                  <span className={`shrink-0 ml-4 ${isOpen ? 'text-brand-orange-light' : 'text-brand-text'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </span>
                </button>
                <div 
                  className={`relative z-10 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="p-6 pt-0 text-brand-text leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
