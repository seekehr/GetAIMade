'use client';

import React, { useRef, useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

const projects = [
  {
    title: 'E-Commerce Lead Bot',
    category: 'AI Chatbot',
    description: 'Instagram chatbot that qualifies leads and books consultations',
    metrics: '45% conversion rate',
    color: 'from-blue-600/20 to-blue-400/10',
  },
  {
    title: 'Social Media Manager',
    category: 'Automation',
    description: 'Schedules posts across 5 platforms with AI-powered optimization',
    metrics: '3x engagement increase',
    color: 'from-cyan-600/20 to-blue-400/10',
  },
  {
    title: 'Data Extraction Pipeline',
    category: 'Web Scraping',
    description: 'Intelligent scraping system for competitor price monitoring',
    metrics: '10M+ data points/month',
    color: 'from-blue-500/20 to-indigo-400/10',
  },
  {
    title: 'Customer Support AI',
    category: 'Chatbot',
    description: 'WhatsApp bot handling 80% of support inquiries automatically',
    metrics: '90% customer satisfaction',
    color: 'from-blue-600/20 to-cyan-400/10',
  },
  {
    title: 'Lead Qualification System',
    category: 'AI Agent',
    description: 'Autonomous agent that qualifies, scores, and routes leads',
    metrics: '200% ROI in 6 months',
    color: 'from-indigo-600/20 to-blue-400/10',
  },
  {
    title: 'CRM Automation Suite',
    category: 'Integration',
    description: 'End-to-end CRM automation with AI-powered insights',
    metrics: '40 hours saved/week',
    color: 'from-blue-600/20 to-purple-400/10',
  },
];

export default function Portfolio() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observers = projects.map((_, idx) => {
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
    <section id="portfolio" className="py-32 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center space-y-6 mb-24">
          <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black text-black dark:text-white leading-tight animate-fade-in-up">
            Case Studies
          </h2>
          <p className="text-xl sm:text-2xl text-black/60 dark:text-white/60 max-w-3xl mx-auto leading-relaxed font-light animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Cutting-edge AI solutions delivering measurable results for industry leaders
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => {
            const isVisible = visibleCards.includes(idx);
            return (
              <div
                key={idx}
                ref={(el) => {
                  cardsRef.current[idx] = el;
                }}
                className={`group relative overflow-hidden bg-white dark:bg-black border-2 border-black dark:border-white rounded-2xl transition-all duration-500 hover:shadow-2xl cursor-pointer h-full p-10 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{
                  animationDelay: isVisible ? `${idx * 0.1}s` : '0s',
                }}
              >
              {/* Background - removed gradient */}
              <div className="absolute inset-0 bg-white dark:bg-black"></div>

              {/* Content */}
              <div className="relative z-10 space-y-6 h-full flex flex-col">
                {/* Category Badge */}
                <div className="inline-flex w-fit">
                  <span className="text-xs font-black text-black dark:text-white bg-black dark:bg-white px-4 py-2 rounded-full dark:text-black text-white">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-black dark:text-white">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-black/70 dark:text-white/70 leading-relaxed flex-grow text-lg">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-5 pt-6 border-t-2 border-black dark:border-white">
                  <p className="text-lg font-black text-black dark:text-white">
                    {project.metrics}
                  </p>
                  <Button
                    className="group/btn text-black dark:text-white hover:bg-black/5 dark:hover:bg-white/5 p-0 h-auto font-bold flex items-center gap-2"
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>

              {/* Floating accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-400/10 rounded-full blur-2xl group-hover:bg-blue-400/20 transition-colors duration-300"></div>
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
