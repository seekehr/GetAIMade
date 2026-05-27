'use client';

import { ArrowRight, MessageCircle, Zap, Users, Smartphone, BarChart3 } from 'lucide-react';
import { Button } from './ui/button';
import { Logo } from './logo';

interface Props {
  onContact?: () => void;
}

export default function Hero({ onContact }: Props) {
  return (
    <section className="flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden bg-black">
      <div className="max-w-7xl w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 z-10">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full">
              <Zap className="w-4 h-4 text-white" />
              <span className="text-xs font-semibold text-white/80 uppercase tracking-wide">AI-POWERED SOLUTIONS</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black leading-tight text-white animate-fade-in-up">
              AI Solutions That Drive Real Results.
            </h1>

            {/* Subheading */}
            <p className="text-lg text-white/70 leading-relaxed max-w-xl animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              We build custom AI systems, chatbots, and automations that help businesses scale, engage, and convert more leads into loyal customers.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <Button onClick={onContact} className="bg-white hover:bg-white/90 text-black font-bold px-8 h-12 rounded-full flex items-center gap-2 group">
                Contact
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button className="border border-white/30 hover:border-white/50 text-white font-bold px-8 h-12 rounded-full bg-transparent transition-all">
                Explore Services
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Column - 3D Mesh Visualization with Floating Badges */}
          <div className="relative h-64 sm:h-96 lg:h-auto lg:min-h-[600px] flex items-center justify-center overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/5 via-transparent to-white/5 animate-gradient-shift pointer-events-none"></div>

            {/* Central Mesh Circle - SVG Background with Animation */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <svg className="w-full h-full max-w-xs sm:max-w-md opacity-60 animate-rotate" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#ffffff', stopOpacity: 0.8 }} />
                    <stop offset="100%" style={{ stopColor: '#888888', stopOpacity: 0.3 }} />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                
                {/* Concentric circles */}
                <circle cx="200" cy="200" r="180" fill="none" stroke="url(#grad1)" strokeWidth="1" opacity="0.4" filter="url(#glow)"/>
                <circle cx="200" cy="200" r="150" fill="none" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" filter="url(#glow)"/>
                <circle cx="200" cy="200" r="120" fill="none" stroke="url(#grad1)" strokeWidth="1" opacity="0.6" filter="url(#glow)"/>
                <circle cx="200" cy="200" r="90" fill="none" stroke="url(#grad1)" strokeWidth="1" opacity="0.5" filter="url(#glow)"/>
                
                {/* Orbital paths */}
                <path d="M 200 20 Q 320 200 200 380 Q 80 200 200 20" fill="none" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" filter="url(#glow)"/>
                <path d="M 20 200 Q 200 320 380 200 Q 200 80 20 200" fill="none" stroke="url(#grad1)" strokeWidth="1" opacity="0.3" filter="url(#glow)"/>
                
                {/* Grid pattern */}
                <g opacity="0.2">
                  <line x1="100" y1="100" x2="300" y2="300" stroke="url(#grad1)" strokeWidth="0.5"/>
                  <line x1="300" y1="100" x2="100" y2="300" stroke="url(#grad1)" strokeWidth="0.5"/>
                </g>
              </svg>

              {/* Center Icon with Glow */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-20 sm:w-24 h-20 sm:h-24 rounded-2xl border-2 border-white/40 flex items-center justify-center bg-black/60 backdrop-blur-sm hover:border-white/80 transition-all animate-pulse-scale animate-glow p-3 sm:p-4">
                  <Logo size={80} className="w-full h-full rounded-xl animate-pulse" />
                </div>
              </div>
            </div>

            {/* Floating orbiting dots */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="relative w-40 sm:w-64 h-40 sm:h-64">
                <div className="absolute w-2 h-2 bg-white rounded-full top-0 left-1/2 -translate-x-1/2 animate-orbit opacity-70"></div>
                <div className="absolute w-2 h-2 bg-white rounded-full bottom-0 left-1/2 -translate-x-1/2 opacity-50" style={{animation: 'orbit 8s linear infinite', animationDelay: '4s'}}></div>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full left-0 top-1/2 -translate-y-1/2 opacity-60" style={{animation: 'orbit 8s linear infinite', animationDelay: '2.67s'}}></div>
                <div className="absolute w-1.5 h-1.5 bg-white rounded-full right-0 top-1/2 -translate-y-1/2 opacity-50" style={{animation: 'orbit 8s linear infinite', animationDelay: '6.67s'}}></div>
              </div>
            </div>

            {/* Floating AI Service Badges - Positioned Around Mesh */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
              {/* AI Chatbots - Top Right */}
              <div className="absolute top-12 right-0 animate-float float-delay-1 animate-fade-in-right" style={{animationDelay: '0.3s'}}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm hover:border-white/40 transition-all">
                  <MessageCircle className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">AI Chatbots</span>
                </div>
              </div>

              {/* Automations - Right */}
              <div className="absolute top-1/2 right-0 -translate-y-1/2 animate-float float-delay-2 animate-fade-in-right" style={{animationDelay: '0.4s'}}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm hover:border-white/40 transition-all">
                  <Zap className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">Automations</span>
                </div>
              </div>

              {/* Lead Generation - Bottom Right */}
              <div className="absolute bottom-12 right-0 animate-float float-delay-3 animate-fade-in-right" style={{animationDelay: '0.5s'}}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm hover:border-white/40 transition-all">
                  <BarChart3 className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">Lead Gen</span>
                </div>
              </div>

              {/* AI Agents - Left */}
              <div className="absolute top-1/3 left-0 animate-float float-delay-2 animate-fade-in-left" style={{animationDelay: '0.35s'}}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm hover:border-white/40 transition-all">
                  <Users className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">AI Agents</span>
                </div>
              </div>

              {/* Analytics - Bottom Left */}
              <div className="absolute bottom-20 left-0 animate-float float-delay-1 animate-fade-in-left" style={{animationDelay: '0.25s'}}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm hover:border-white/40 transition-all">
                  <BarChart3 className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">Analytics</span>
                </div>
              </div>

              {/* Integrations - Top Left */}
              <div className="absolute top-20 left-12 animate-float float-delay-3 animate-fade-in-left" style={{animationDelay: '0.45s'}}>
                <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-white/20 bg-black/60 backdrop-blur-sm hover:border-white/40 transition-all">
                  <Smartphone className="w-4 h-4 text-white" />
                  <span className="text-xs font-semibold text-white whitespace-nowrap">Integrations</span>
                </div>
              </div>

              {/* Floating dots */}
              <div className="absolute top-1/4 left-1/4 w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-pulse delay-700"></div>
              <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-white rounded-full opacity-50 animate-pulse delay-500"></div>
            </div>

            {/* Mobile badges - simplified layout */}
            <div className="lg:hidden absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
                  <div className="w-8 h-8 rounded-lg border border-white/20 bg-black/60 flex items-center justify-center mx-auto mb-1 animate-pulse">
                    <MessageCircle className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] text-white/70 font-semibold">Chat</span>
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                  <div className="w-8 h-8 rounded-lg border border-white/20 bg-black/60 flex items-center justify-center mx-auto mb-1 animate-pulse">
                    <Zap className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] text-white/70 font-semibold">Auto</span>
                </div>
                <div className="animate-fade-in-up" style={{animationDelay: '0.5s'}}>
                  <div className="w-8 h-8 rounded-lg border border-white/20 bg-black/60 flex items-center justify-center mx-auto mb-1 animate-pulse">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-[10px] text-white/70 font-semibold">Agents</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
