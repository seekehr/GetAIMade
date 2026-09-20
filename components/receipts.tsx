'use client';

import React from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Lock } from 'lucide-react';

const DISCORD_INVITE = 'https://discord.gg/bHEjbQdEcx';

const DiscordIcon = ({ className = 'w-5 h-5' }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057c.002.025.016.048.035.063a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
  </svg>
);

const shots = [
  {
    src: '/reviews/review-1.png',
    width: 815,
    height: 418,
    alt: 'Discord messages: a client confirms they sent payment, and a wallet transaction is shown as received',
  },
  {
    src: '/reviews/review-2.png',
    width: 672,
    height: 742,
    alt: 'Discord messages: a client sends payment, asks for the files, and the finished project archive is delivered',
  },
  {
    src: '/reviews/review-3.png',
    width: 574,
    height: 522,
    alt: 'Discord messages: a client confirms the payment went through and work is scheduled to start the next day',
  },
];

const LOCKED_INDEX = shots.length;
const TOTAL = shots.length + 1;

export default function Receipts() {
  const [index, setIndex] = React.useState(0);

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(TOTAL - 1, i + 1));

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prev();
    }
    if (e.key === 'ArrowRight') {
      e.preventDefault();
      next();
    }
  };

  const locked = index === LOCKED_INDEX;

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-12">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-widest">
            PROOF, NOT PROMISES
          </p>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">Receipts.</h2>
          <p className="text-white/60 text-base max-w-xl leading-relaxed">
            Unedited client conversations from our Discord.
          </p>
        </div>

        {/* Viewer */}
        <div
          className="relative rounded-2xl border border-white/10 bg-gradient-to-b from-white/[0.04] to-white/[0.01] overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          tabIndex={0}
          onKeyDown={onKeyDown}
          role="group"
          aria-roledescription="carousel"
          aria-label="Client reviews from Discord"
        >
          {/* Stage */}
          <div className="relative h-[340px] sm:h-[440px] flex items-center justify-center p-4 sm:p-8">
            {shots.map((shot, idx) => (
              <div
                key={shot.src}
                className={`absolute inset-0 flex items-center justify-center p-4 sm:p-8 transition-opacity duration-500 ${
                  index === idx ? 'opacity-100' : 'opacity-0 pointer-events-none'
                }`}
                aria-hidden={index !== idx}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 768px) 90vw, 700px"
                  priority={idx === 0}
                  className="max-h-full w-auto object-contain rounded-lg border border-white/10 shadow-2xl shadow-black/60"
                />
              </div>
            ))}

            {/* Locked slide */}
            <div
              className={`absolute inset-0 transition-opacity duration-500 ${
                locked ? 'opacity-100' : 'opacity-0 pointer-events-none'
              }`}
              aria-hidden={!locked}
            >
              <div className="absolute inset-0 flex items-center justify-center p-4 sm:p-8">
                <Image
                  src={shots[1].src}
                  alt=""
                  width={shots[1].width}
                  height={shots[1].height}
                  sizes="(max-width: 768px) 90vw, 700px"
                  aria-hidden="true"
                  draggable={false}
                  className="max-h-full w-auto object-contain rounded-lg blur-md scale-105 opacity-40 select-none pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-center gap-4 px-6">
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10 flex items-center justify-center">
                  <Lock className="w-5 h-5 text-white/80" strokeWidth={2} />
                </div>
                <p className="text-white font-bold text-lg">More reviews in the server</p>
                <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                  The rest of the client feedback lives in{' '}
                  <span className="text-white/80">#client-reviews</span>, unedited and in full.
                </p>
              </div>
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous review"
              className="absolute left-2 sm:left-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-white/15 bg-black/60 backdrop-blur text-white/70 enabled:hover:text-white enabled:hover:border-white/50 enabled:hover:bg-white/10 enabled:hover:scale-110 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={index === TOTAL - 1}
              aria-label="Next review"
              className="absolute right-2 sm:right-3 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full border border-white/15 bg-black/60 backdrop-blur text-white/70 enabled:hover:text-white enabled:hover:border-white/50 enabled:hover:bg-white/10 enabled:hover:scale-110 transition-all disabled:opacity-25 disabled:cursor-not-allowed"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress */}
          <div className="flex items-center justify-center gap-2 py-4 border-t border-white/10 bg-white/[0.02]">
            {Array.from({ length: TOTAL }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setIndex(idx)}
                aria-label={idx === LOCKED_INDEX ? 'Locked reviews' : `Review ${idx + 1}`}
                aria-current={index === idx}
                className={`h-2 rounded-full transition-all hover:scale-125 ${
                  index === idx ? 'bg-white w-8' : 'bg-white/25 w-2 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-8 flex flex-col items-center gap-3">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-base px-8 py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg shadow-[#5865F2]/30 hover:shadow-xl hover:shadow-[#5865F2]/40"
          >
            <DiscordIcon className="w-6 h-6 group-hover:scale-110 transition-transform" />
            Join Discord to see full reviews
          </a>
          <p className="text-xs text-white/40">Free to join. No signup needed to read.</p>
        </div>
      </div>
    </section>
  );
}
