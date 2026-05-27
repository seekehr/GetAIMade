'use client';

import React from 'react';
import { Zap, Shield, TrendingUp, Settings, Cpu, BarChart3 } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Fast Deployment',
    description: 'Get your AI systems live in days, not months',
  },
  {
    icon: Shield,
    title: 'Scalable Infrastructure',
    description: 'Built to handle millions of requests without breaking a sweat',
  },
  {
    icon: Settings,
    title: 'Custom Integrations',
    description: 'Seamlessly connect with your existing tools and platforms',
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track performance metrics and optimize in real-time',
  },
  {
    icon: Cpu,
    title: 'AI-Powered Workflows',
    description: 'Intelligent automation that learns and improves over time',
  },
  {
    icon: TrendingUp,
    title: 'Proven Results',
    description: 'Drive growth and efficiency across your entire organization',
  },
];

export default function Features() {
  const [visibleCards, setVisibleCards] = React.useState<number[]>([]);
  const cardsRef = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const observers = features.map((_, idx) => {
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
    <section id="features" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight animate-fade-in-up">
            Performance Specs
          </h2>
          <p className="text-xl sm:text-2xl text-black/60 dark:text-white/60 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Enterprise-grade AI solutions built for performance, reliability, and measurable growth
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            const isVisible = visibleCards.includes(idx);
            return (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className={`bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl transition-all duration-500 hover:shadow-2xl p-10 group ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${idx * 0.1}s` : '0s',
                }}
              >
                <div className="space-y-6">
                  {/* Icon with background */}
                  <div className="w-16 h-16 rounded-xl bg-black dark:bg-white flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-8 h-8 text-white dark:text-black" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-black text-black dark:text-white pt-2">
                    {feature.title}
                  </h3>

                  {/* Description */}
                  <p className="text-black/60 dark:text-white/60 leading-relaxed text-lg">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats with scroll animation */}
        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '1000+', label: 'Automations Deployed' },
            { value: '99.9%', label: 'Uptime SLA' },
            { value: '24/7', label: 'Support' },
            { value: '50%', label: 'Avg Cost Savings' },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl p-8 text-center animate-fade-in-up" style={{ animationDelay: `${0.5 + idx * 0.1}s` }}>
              <div className="text-4xl font-black text-black dark:text-white mb-3">
                {stat.value}
              </div>
              <p className="text-sm text-black/60 dark:text-white/60 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
