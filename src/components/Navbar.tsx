import React from 'react';
import { Moon } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-bg/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-[1200px] mx-auto px-4 md:px-8 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2L22 20H2L12 2Z" fill="url(#paint0_linear)" />
            <defs>
              <linearGradient id="paint0_linear" x1="12" y1="2" x2="12" y2="20" gradientUnits="userSpaceOnUse">
                <stop stopColor="#FF7A1A" />
                <stop offset="1" stopColor="#FF3C00" />
              </linearGradient>
            </defs>
          </svg>
          <span className="font-sora font-bold text-xl text-white tracking-tight">Velocity</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          {['Process', 'Work', 'Pricing', 'FAQs', 'Reviews', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-sm text-brand-text hover:text-white transition-colors relative group">
              {item}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-brand-orange-light transition-all group-hover:w-full"></span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <button className="hidden md:flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-brand-text hover:text-white hover:border-white/20 transition-colors">
            <Moon size={18} />
          </button>
          <button className="bg-gradient-orange text-white font-sora font-bold uppercase tracking-widest text-xs px-6 py-3 rounded-full glow-orange hover:glow-orange-strong transition-all hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
