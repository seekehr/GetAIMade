'use client';

import { useEffect, useState } from 'react';
import Navbar from '@/components/navbar';
import Hero from '@/components/hero';
import Services from '@/components/services';
import Stats from '@/components/stats';
import Process from '@/components/process';
import Testimonials from '@/components/testimonials';
import CTA from '@/components/cta';
import Footer from '@/components/footer';
import ContactModal from '@/components/contact-modal';

export default function Page() {
  const [scrollY, setScrollY] = useState(0);
  const [contactOpen, setContactOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black overflow-hidden">
      {/* Subtle animated background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-0 right-0 w-[800px] h-[800px] border border-white/3 rounded-full blur-3xl opacity-20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div 
          className="absolute -bottom-1/2 -left-1/2 w-[1000px] h-[1000px] border border-white/2 rounded-full blur-3xl opacity-10"
          style={{ transform: `translateY(${-scrollY * 0.3}px)` }}
        />
      </div>

      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
      <div className="relative z-10">
        <Navbar onContact={() => setContactOpen(true)} />
        <Hero onContact={() => setContactOpen(true)} />
        <Services />
        <Stats />
        <Process />
        <Testimonials />
        <CTA onContact={() => setContactOpen(true)} />
        <Footer />
      </div>
    </div>
  );
}
