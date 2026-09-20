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

/* Fades the screenshot edges into the page so nothing reads as a pasted-in rectangle.
   One axis per element so the two masks compose without needing mask-composite. */
const MASK_Y = 'linear-gradient(to bottom, transparent 0%, #000 6%, #000 94%, transparent 100%)';
const MASK_X = 'linear-gradient(to right, transparent 0%, #000 5%, #000 95%, transparent 100%)';

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
  const dragStart = React.useRef<number | null>(null);

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

  const onPointerDown = (e: React.PointerEvent) => {
    dragStart.current = e.clientX;
  };

  const onPointerUp = (e: React.PointerEvent) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (dx < -50) next();
    else if (dx > 50) prev();
  };

  const locked = index === LOCKED_INDEX;

  return (
    <section className="py-32 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="space-y-6 mb-14">
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
          className="relative rounded-3xl overflow-hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
          tabIndex={0}
          onKeyDown={onKeyDown}
          role="group"
          aria-roledescription="carousel"
          aria-label="Client reviews from Discord"
        >
          {/* Top hairline — catches the light instead of drawing a hard box */}
          <div
            aria-hidden="true"
            className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent z-20"
          />

          {/* Stage */}
          <div
            className="relative h-[380px] sm:h-[520px] touch-pan-y"
            onPointerDown={onPointerDown}
            onPointerUp={onPointerUp}
          >
            {/* Ambient light behind the screenshots */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
              <div
                className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] rounded-full blur-[100px] transition-colors duration-700 ${
                  locked ? 'bg-[#5865F2]/30' : 'bg-[#5865F2]/15'
                }`}
              />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[45%] h-[45%] rounded-full bg-white/[0.07] blur-[80px]" />
            </div>

            {/* Screenshots */}
            {shots.map((shot, idx) => (
              <div
                key={shot.src}
                style={{ maskImage: MASK_Y, WebkitMaskImage: MASK_Y }}
                className={`absolute inset-0 flex items-center justify-center p-6 sm:p-10 transition-all duration-700 ease-out ${
                  index === idx
                    ? 'opacity-100 scale-100 blur-0'
                    : 'opacity-0 scale-[0.97] blur-[2px] pointer-events-none'
                }`}
                aria-hidden={index !== idx}
              >
                <Image
                  src={shot.src}
                  alt={shot.alt}
                  width={shot.width}
                  height={shot.height}
                  sizes="(max-width: 768px) 90vw, 760px"
                  priority={idx === 0}
                  loading="eager"
                  draggable={false}
                  style={{ maskImage: MASK_X, WebkitMaskImage: MASK_X }}
                  className="max-h-full max-w-full w-auto h-auto object-contain select-none"
                />
              </div>
            ))}

            {/* Locked slide */}
            <div
              className={`absolute inset-0 transition-all duration-700 ease-out ${
                locked ? 'opacity-100 scale-100' : 'opacity-0 scale-[0.97] pointer-events-none'
              }`}
              aria-hidden={!locked}
            >
              <div
                className="absolute inset-0 flex items-center justify-center p-6 sm:p-10"
                style={{ maskImage: MASK_Y, WebkitMaskImage: MASK_Y }}
              >
                <Image
                  src={shots[1].src}
                  alt=""
                  width={shots[1].width}
                  height={shots[1].height}
                  sizes="(max-width: 768px) 90vw, 760px"
                  aria-hidden="true"
                  loading="eager"
                  draggable={false}
                  style={{ maskImage: MASK_X, WebkitMaskImage: MASK_X }}
                  className="max-h-full max-w-full w-auto h-auto object-contain blur-xl scale-105 opacity-30 select-none pointer-events-none"
                />
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center gap-4 px-6">
                <div className="relative">
                  <div className="absolute inset-0 rounded-full bg-[#5865F2]/40 blur-xl animate-pulse" />
                  <div className="relative w-14 h-14 rounded-full border border-white/20 bg-white/[0.08] backdrop-blur-sm flex items-center justify-center">
                    <Lock className="w-5 h-5 text-white" strokeWidth={2} />
                  </div>
                </div>
                <p className="text-white font-bold text-xl">More reviews in the server</p>
                <p className="text-white/60 text-sm max-w-sm leading-relaxed">
                  The rest of the client feedback lives in{' '}
                  <span className="text-white/85 font-medium">#vouches</span>, unedited and in
                  full.
                </p>
              </div>
            </div>

            {/* Counter */}
            <div
              aria-hidden="true"
              className="absolute top-5 left-6 sm:left-8 z-20 text-[11px] font-mono tabular-nums tracking-widest text-white/35"
            >
              {String(index + 1).padStart(2, '0')}
              <span className="text-white/20"> / {String(TOTAL).padStart(2, '0')}</span>
            </div>

            {/* Channel tag */}
            <div
              aria-hidden="true"
              className="absolute top-4 right-5 sm:right-7 z-20 flex items-center gap-1.5 text-[11px] font-medium text-white/35"
            >
              <DiscordIcon className="w-3.5 h-3.5" />
              #vouches
            </div>

            {/* Arrows */}
            <button
              onClick={prev}
              disabled={index === 0}
              aria-label="Previous review"
              className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white/60 enabled:hover:text-white enabled:hover:border-white/40 enabled:hover:bg-white/10 enabled:hover:scale-110 enabled:active:scale-95 transition-all disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={next}
              disabled={index === TOTAL - 1}
              aria-label="Next review"
              className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 z-20 p-2.5 rounded-full border border-white/10 bg-black/50 backdrop-blur-md text-white/60 enabled:hover:text-white enabled:hover:border-white/40 enabled:hover:bg-white/10 enabled:hover:scale-110 enabled:active:scale-95 transition-all disabled:opacity-0 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Progress */}
          <div className="relative z-20 flex items-center justify-center gap-2.5 pb-1">
            {Array.from({ length: TOTAL }).map((_, idx) => {
              const isLock = idx === LOCKED_INDEX;
              const active = index === idx;
              return (
                <button
                  key={idx}
                  onClick={() => setIndex(idx)}
                  aria-label={isLock ? 'Locked reviews' : `Review ${idx + 1}`}
                  aria-current={active}
                  className={`flex items-center justify-center transition-all ${
                    isLock
                      ? `h-4 w-4 ${active ? 'text-white' : 'text-white/25 hover:text-white/60'}`
                      : `h-1.5 rounded-full hover:scale-125 ${
                          active
                            ? 'bg-white w-8 shadow-[0_0_12px_rgba(255,255,255,0.5)]'
                            : 'bg-white/20 w-4 hover:bg-white/50'
                        }`
                  }`}
                >
                  {isLock && <Lock className="w-3.5 h-3.5" strokeWidth={2.5} />}
                </button>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-10 flex flex-col items-center gap-3">
          <a
            href={DISCORD_INVITE}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative w-full sm:w-auto flex items-center justify-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white font-bold text-base px-8 py-4 rounded-2xl transition-all hover:scale-[1.03] active:scale-[0.99] shadow-[0_8px_40px_-8px_rgba(88,101,242,0.7)] hover:shadow-[0_12px_50px_-6px_rgba(88,101,242,0.9)]"
          >
            <span
              aria-hidden="true"
              className="absolute inset-x-6 -top-px h-px bg-gradient-to-r from-transparent via-white/60 to-transparent"
            />
            <DiscordIcon className="w-6 h-6 group-hover:scale-110 group-hover:-rotate-6 transition-transform" />
            Join Discord to see full reviews
          </a>
          <p className="text-xs text-white/35">Free to join — the full #vouches channel.</p>
        </div>
      </div>
    </section>
  );
}
