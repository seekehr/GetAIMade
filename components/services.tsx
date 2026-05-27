'use client';

import { useRef, useState, useEffect } from 'react';
import { MessageCircle, Share2, Smartphone, Users, Gauge, Globe, BarChart3, Zap } from 'lucide-react';

const services = [
  {
    icon: MessageCircle,
    title: 'AI Chatbots',
    description: 'Smart, human-like conversations that engage, support, and convert 24/7.',
  },
  {
    icon: Share2,
    title: 'Social Media Automation',
    description: 'Schedule engagement, DMs, comments, and lead generation across platforms.',
  },
  {
    icon: Smartphone,
    title: 'WhatsApp Automation',
    description: 'Automate messages, responses, and workflows to close more deals on WhatsApp.',
  },
  {
    icon: Users,
    title: 'AI Agents',
    description: 'Autonomous AI agents that handle tasks, follow-ups, and deliver results.',
  },
  {
    icon: Gauge,
    title: 'Lead Generation Systems',
    description: 'AI-powered systems that find, qualify, and convert high-quality leads automatically.',
  },
  {
    icon: Globe,
    title: 'Web Scraping Bots',
    description: 'Extract real-time data from websites and automate data collection at scale.',
  },
  {
    icon: BarChart3,
    title: 'CRM Automation',
    description: 'Streamline your CRM with automated workflows, updates, and lead management.',
  },
  {
    icon: Zap,
    title: 'Custom Integrations',
    description: 'Integrate AI with your tools, platforms, and APIs seamlessly.',
  },
];

export default function Services() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = services.map((_, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleCards((prev) => [...prev, idx]);
          }
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
      );

      if (cardsRef.current[idx]) {
        observer.observe(cardsRef.current[idx]!);
      }

      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header with scroll animation */}
        <div className="space-y-6 mb-20 border-t border-white/10 pt-10">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-widest animate-fade-in-up">WHAT WE BUILD</p>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight animate-fade-in-up" style={{ animationDelay: '0.05s' }}>
            Powerful AI Solutions For Modern Businesses.
          </h2>
        </div>

        {/* Services Grid - 4 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const isVisible = visibleCards.includes(idx);
            return (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className={`group bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 rounded-xl transition-all duration-500 hover:shadow-lg hover:shadow-white/20 hover:scale-105 p-6 sm:p-8 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${idx * 0.08}s` : '0s',
                }}
              >
                <div className="space-y-5 relative">
                  {/* Glow background on hover */}
                  <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-xl"></div>

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-lg border border-white/20 flex items-center justify-center group-hover:border-white/60 group-hover:bg-white/10 transition-all group-hover:scale-110">
                    <Icon className="w-6 h-6 text-white group-hover:text-white transition-colors" strokeWidth={1.5} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-white transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-white/70 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
                    {service.description}
                  </p>

                  {/* Arrow */}
                  <div className="pt-2 group-hover:translate-x-2 transition-transform">
                    <svg className="w-5 h-5 text-white/40 group-hover:text-white/80 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
