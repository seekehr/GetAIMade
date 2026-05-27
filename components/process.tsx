'use client';

import { Search, FileText, Code2, Rocket, TrendingUp } from 'lucide-react';

export default function Process() {
  const steps = [
    {
      number: '01',
      icon: Search,
      title: 'Discover',
      description: 'We understand your business goals.',
    },
    {
      number: '02',
      icon: FileText,
      title: 'Plan',
      description: 'We design the perfect AI solution for you.',
    },
    {
      number: '03',
      icon: Code2,
      title: 'Build',
      description: 'We build and integrate your AI system.',
    },
    {
      number: '04',
      icon: Rocket,
      title: 'Deploy',
      description: 'We launch and ensure everything runs smoothly.',
    },
    {
      number: '05',
      icon: TrendingUp,
      title: 'Optimize',
      description: 'We continuously optimize for better results.',
    },
  ];

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-transparent to-white/5 animate-gradient-shift opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-6 mb-24 animate-fade-in-up">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-widest">OUR PROCESS</p>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">
            From Idea to AI-Powered Reality.
          </h2>
        </div>

        {/* Process Steps */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-4 lg:gap-0">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex-1 relative group" style={{animationDelay: `${idx * 0.1}s`}}>
                {/* Card with enhanced styling */}
                <div className="flex flex-col items-center text-center space-y-5 p-6 sm:p-8 h-full rounded-lg border border-white/10 group-hover:border-white/30 bg-gradient-to-br from-white/5 to-white/[0.02] transition-all duration-500 group-hover:shadow-lg group-hover:shadow-white/10 animate-fade-in-up relative"
                style={{animationDelay: `${idx * 0.1}s`}}>
                  {/* Glow on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-white/5 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>

                  {/* Icon Container */}
                  <div className="w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-white/5 group-hover:bg-white/15 group-hover:border-white/50 transition-all group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-white/20">
                    <Icon className="w-7 h-7 text-white group-hover:text-white animate-pulse group-hover:animate-bounce-custom transition-all" strokeWidth={1.5} />
                  </div>

                  {/* Step Number */}
                  <div className="text-4xl font-black text-white/20 group-hover:text-white/40 transition-colors">
                    {step.number}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white group-hover:text-white transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-white/70 group-hover:text-white/90 transition-colors">
                    {step.description}
                  </p>
                </div>

                {/* Animated arrow to next step (except last) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-5 top-1/2 -translate-y-1/2 items-center justify-center">
                    <svg className="w-6 h-6 text-white/20 group-hover:text-white/60 transition-colors animate-float float-delay-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                )}

                {/* Mobile arrow (vertical) */}
                {idx < steps.length - 1 && (
                  <div className="lg:hidden flex justify-center items-center mt-4 mb-4">
                    <svg className="w-6 h-6 text-white/20 animate-bounce-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                    </svg>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
