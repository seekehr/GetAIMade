'use client';

import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

interface Props {
  onContact?: () => void;
}

export default function CTA({ onContact }: Props) {
  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-5xl mx-auto relative">
        {/* Main CTA Card */}
        <div className="relative bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10 rounded-2xl p-16 sm:p-20 text-center overflow-hidden group animate-fade-in-up">
          {/* Content */}
          <div className="relative z-10 space-y-10">
            {/* Heading */}
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white">
              Ready to Automate Your Business with AI?
            </h2>

            {/* Subheading */}
            <p className="text-xl text-white/70 max-w-3xl mx-auto leading-relaxed">
              Let&apos;s build intelligent solutions that drive growth, save time, and maximize your profits.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={onContact}
                className="bg-white hover:bg-white/90 text-black rounded-full px-10 h-12 text-base font-bold flex items-center justify-center gap-2 group/btn"
              >
                Contact
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </Button>
              <Button
                asChild
                className="border border-white/30 hover:border-white/50 text-white hover:bg-white/5 rounded-full px-10 h-12 text-base font-bold transition-all bg-transparent"
              >
                <a href="#services">
                  View Services
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
