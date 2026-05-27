'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: '"Get AI Made built an incredible chatbot for our business. It increased our leads by 300%"',
    author: 'John Carter',
    role: 'CEO, GrowthLab',
    rating: 5,
    avatar: '👨‍💼',
  },
  {
    quote: '"The automation system they built saved us 20+ hours every week. Amazing team!"',
    author: 'Sarah Mitchell',
    role: 'Founder, Elevate Digital',
    rating: 5,
    avatar: '👩‍💼',
  },
  {
    quote: '"Professional, fast, and reliable. Our go-to team for all AI and automation needs."',
    author: 'David Lee',
    role: 'CTO, Nexus Systems',
    rating: 5,
    avatar: '👨‍💻',
  },
];

export default function Testimonials() {
  const [visibleCards, setVisibleCards] = React.useState<number[]>([]);
  const cardsRef = React.useRef<(HTMLDivElement | null)[]>([]);

  React.useEffect(() => {
    const observers = testimonials.map((_, idx) => {
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

  const [currentIndex, setCurrentIndex] = React.useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-20">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-widest">WHAT OUR CLIENTS SAY</p>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">
            Real Results From Real Clients.
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((testimonial, idx) => {
              const isActive = idx === currentIndex;
              return (
                <div
                  key={idx}
                  className={`bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 hover:border-white/30 rounded-2xl p-6 md:p-8 transition-all duration-500 group cursor-pointer ${
                    isActive ? 'scale-100 opacity-100 shadow-lg shadow-white/20' : 'md:scale-95 md:opacity-60 opacity-100'
                  }`}
                  onClick={() => setCurrentIndex(idx)}
                >
                  {/* Glow on hover */}
                  <div className="absolute -inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-lg"></div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6 group-hover:scale-110 transition-transform origin-left">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-white text-white animate-pulse"
                        style={{animationDelay: `${i * 0.1}s`}}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-white/90 text-base leading-relaxed mb-8 group-hover:text-white transition-colors">
                    {testimonial.quote}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4 group-hover:translate-x-1 transition-transform">
                    <div className="w-10 h-10 rounded-full bg-white/10 group-hover:bg-white/20 flex items-center justify-center text-lg group-hover:scale-110 transition-all group-hover:shadow-lg group-hover:shadow-white/20">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <p className="font-bold text-white text-sm group-hover:text-white transition-colors">
                        {testimonial.author}
                      </p>
                      <p className="text-xs text-white/60 group-hover:text-white/80 transition-colors">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Carousel Navigation */}
          <div className="flex items-center justify-center gap-4 mt-12 flex-wrap">
            <button
              onClick={prevSlide}
              className="p-2 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all hover:scale-110 group"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all hover:scale-125 ${
                  idx === currentIndex ? 'bg-white w-8 shadow-lg shadow-white/40' : 'bg-white/30 w-2 hover:bg-white/60'
                }`}
                aria-label={`Go to testimonial ${idx + 1}`}
              />
            ))}
            <button
              onClick={nextSlide}
              className="p-2 rounded-full border border-white/20 hover:border-white/60 hover:bg-white/10 transition-all hover:scale-110 group"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6 text-white/60 group-hover:text-white transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
