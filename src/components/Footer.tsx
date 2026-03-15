import React from 'react';
import { Instagram, Twitter, Linkedin, Dribbble } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative pt-20 pb-10 border-t border-white/5 overflow-hidden">
      {/* Top Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[20vh] bg-brand-orange-light/10 blur-[80px] rounded-full pointer-events-none" />
      
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
          
          <div className="max-w-xs">
            <div className="flex items-center gap-2 mb-6">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L22 20H2L12 2Z" fill="url(#paint0_linear_footer)" />
                <defs>
                  <linearGradient id="paint0_linear_footer" x1="12" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#FF7A1A" />
                    <stop offset="1" stopColor="#FF3C00" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="font-sora font-bold text-xl text-white tracking-tight">Velocity</span>
            </div>
            <p className="text-brand-text text-sm leading-relaxed mb-6">
              Helping founders launch faster with high-converting landing pages.
            </p>
            <button className="bg-gradient-orange text-white font-sora font-bold uppercase tracking-widest text-[10px] px-4 py-2 rounded-full glow-orange hover:glow-orange-strong transition-all">
              Let's Build Something Great
            </button>
          </div>

          <div className="flex gap-16">
            <div>
              <h4 className="font-sora font-bold text-white mb-6 text-sm uppercase tracking-widest">Menu</h4>
              <ul className="space-y-4">
                {['Home', 'Work', 'Pricing', 'FAQs', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase()}`} className="text-brand-text text-sm hover:text-brand-orange-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-sora font-bold text-white mb-6 text-sm uppercase tracking-widest">Explore Velocity</h4>
              <ul className="space-y-4">
                {['Why Velocity', 'Process', 'Testimonials'].map((item) => (
                  <li key={item}>
                    <a href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-brand-text text-sm hover:text-brand-orange-light transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
          <p className="text-brand-text text-xs">
            &copy; {new Date().getFullYear()} Velocity. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-text hover:text-brand-orange-light hover:border-brand-orange-light transition-all">
              <Twitter size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-text hover:text-brand-orange-light hover:border-brand-orange-light transition-all">
              <Instagram size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-text hover:text-brand-orange-light hover:border-brand-orange-light transition-all">
              <Dribbble size={14} />
            </a>
            <a href="#" className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-brand-text hover:text-brand-orange-light hover:border-brand-orange-light transition-all">
              <Linkedin size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
