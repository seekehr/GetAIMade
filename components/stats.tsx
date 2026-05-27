'use client';

import { Rocket, Star, Headphones, TrendingUp, MessageSquare, Zap } from 'lucide-react';

export default function Stats() {
  const stats = [
    {
      icon: Rocket,
      value: '100+',
      label: 'Projects Delivered',
    },
    {
      icon: Star,
      value: '98%',
      label: 'Client Satisfaction',
    },
    {
      icon: Headphones,
      value: '24/7',
      label: 'Support',
    },
    {
      icon: TrendingUp,
      value: '30%+',
      label: 'Increase in Sales',
    },
    {
      icon: MessageSquare,
      value: '10M+',
      label: 'Messages Automated',
    },
    {
      icon: Zap,
      value: '50+',
      label: 'Integrations',
    },
  ];

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black border-y border-white/10 relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-white/5 via-transparent to-white/5 animate-gradient-shift opacity-50"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 sm:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <div 
                key={idx} 
                className="text-center space-y-4 animate-fade-in-up group cursor-pointer"
                style={{ animationDelay: `${idx * 0.1}s` }}
              >
                {/* Icon container with animation */}
                <div className="flex justify-center">
                  <div className="p-3 rounded-lg bg-white/5 border border-white/10 group-hover:border-white/30 group-hover:bg-white/10 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Icon className="w-6 h-6 text-white/70 group-hover:text-white transition-colors group-hover:animate-bounce-custom" strokeWidth={1.5} />
                  </div>
                </div>
                
                {/* Stats value with counter effect */}
                <div className="space-y-2">
                  <div className="text-3xl md:text-4xl font-black text-white group-hover:text-white transition-colors">
                    {stat.value}
                  </div>
                  <p className="text-xs md:text-sm text-white/60 group-hover:text-white/80 mt-2 font-semibold uppercase tracking-widest transition-colors">
                    {stat.label}
                  </p>
                </div>

                {/* Animated underline */}
                <div className="h-0.5 bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:via-white/80 transition-all duration-300 origin-left scale-x-0 group-hover:scale-x-100"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
