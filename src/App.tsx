/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Process from './components/Process';
import Showcase from './components/Showcase';
import Testimonials from './components/Testimonials';
import Pricing from './components/Pricing';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    const cards = document.querySelectorAll('.feature-card, .process-card, .pricing-card, .test-card'); 
    const corners = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];

    cards.forEach(card => {
      const glow = card.querySelector('.glow');
      if (glow) {
        const randomCorner = corners[Math.floor(Math.random() * corners.length)];
        glow.classList.add(randomCorner);
      }
    });
  }, []);

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text overflow-x-hidden selection:bg-brand-orange-light selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Process />
        <Showcase />
        <Testimonials />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
