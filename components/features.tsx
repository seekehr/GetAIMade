'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Github, Globe, ScanText, BookOpen, Radar, Building2, Workflow } from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'AI-Powered Web Scraping',
    description:
      'Scrape websites, directories, listings, docs, or public data sources, then clean and structure the data automatically.',
    example: {
      name: 'Business directory scraper',
      summary:
        'Crawls every listing page of a local-business directory and turns it into one clean, deduplicated dataset.',
    },
    flow: ['Crawl', 'Parse', 'Clean & dedupe', 'Export'],
    outcome:
      'Hundreds of inconsistent listing pages become a spreadsheet you can actually use: normalized phones, addresses and categories, no duplicates.',
    stack: ['Playwright', 'Python', 'LLM cleanup', 'Postgres', 'CSV / Sheets'],
    image: '/featureimgs/web-scraping.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Directory scraper: crawl job progress and request log, a messy raw listing cleaned into structured fields, and the deduplicated dataset table',
  },
  {
    icon: ScanText,
    title: 'Smart Data Extraction',
    description:
      'Pull specific information from messy pages, PDFs, articles, or semi-structured content, optionally with the help of AI parsing.',
    example: {
      name: 'Product spec extractor',
      summary:
        'Pulls the same spec fields from spec tables, marketing copy and PDF datasheets, whatever the layout.',
    },
    flow: ['Parse page or PDF', 'Extract to schema', 'Validate'],
    outcome:
      'One schema across wildly different layouts, with units normalized, and a site redesign doesn’t break it the way a CSS selector would.',
    stack: ['LLM extraction', 'JSON schema', 'PDF parsing', 'Validation'],
    image: '/featureimgs/smart-extraction.svg',
    repo: 'https://github.com/seekehr/Scrape-Quizlet-Flashcards',
    alt: 'Quizlet scraper: a user’s public folders page and a flashcard set rendered in Chrome, a run log, and the exported data folder with one numbered term : definition text file per set',
  },
  {
    icon: BookOpen,
    title: 'Custom RAG Systems',
    description:
      'Turn scraped websites, documents, or internal knowledge into an AI assistant that answers questions using the collected sources.',
    example: {
      name: 'Product docs assistant',
      summary:
        'An assistant built on a crawled docs site, API reference and changelog that answers with links to the exact page.',
    },
    flow: ['Crawl docs', 'Chunk & embed', 'Answer with citations'],
    outcome:
      'Users and support staff get answers they can verify in one click, and the index refreshes itself when the docs change.',
    stack: ['Crawler', 'Embeddings', 'Vector DB', 'RAG'],
    image: '/featureimgs/rag-docs-assistant.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Docs assistant chat answering how to rotate an API key, with numbered citations and source cards linking to the crawled documentation pages',
  },
  {
    icon: Radar,
    title: 'Research & Monitoring Systems',
    description:
      'Continuously collect information from selected sources, detect changes, summarize updates, compare competitors, or generate research briefs.',
    example: {
      name: 'Competitor change monitor',
      summary:
        'Snapshots competitor pricing, changelog and careers pages every day, detects what changed, and posts a short summary.',
    },
    flow: ['Snapshot', 'Diff', 'Summarize', 'Alert'],
    outcome:
      'You hear about a competitor’s price change or launch the day it happens, without anyone checking their site.',
    stack: ['Scheduled crawls', 'Text + visual diff', 'LLM summaries', 'Slack / email'],
    image: '/featureimgs/research-monitoring.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Change monitor listing watched competitor pages, a pricing-page diff showing old and new prices, and an AI summary posted to a Slack channel',
  },
  {
    icon: Building2,
    title: 'Lead & Company Intelligence',
    description:
      'Collect public business data, enrich it, classify companies, score leads, and generate useful summaries or personalized outreach inputs.',
    example: {
      name: 'Company intelligence pipeline',
      summary:
        'Collects companies from public directories and job boards, enriches and scores them, and writes a short brief with outreach angles for each.',
    },
    flow: ['Collect', 'Enrich & classify', 'Score', 'Brief'],
    outcome:
      'Sales gets a ranked list of companies that fit, each with a summary and a concrete reason to reach out now.',
    stack: ['Public data sources', 'Enrichment', 'LLM classification', 'CRM export'],
    image: '/featureimgs/company-intelligence.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Three-stage pipeline: companies collected from public sources, an enriched company with a fit score of 86, and an AI-generated brief with outreach angles',
  },
  {
    icon: Workflow,
    title: 'Custom Data Pipelines & APIs',
    description:
      'Build the backend that ties everything together: crawling, queues, databases, deduplication, scheduled jobs, AI processing, APIs, and exports.',
    example: {
      name: 'Scraping pipeline & API',
      summary:
        'The backend behind the systems above: scheduled crawls, a job queue, AI processing, deduplication, a database and a clean API.',
    },
    flow: ['Schedule', 'Crawl', 'Process', 'Store', 'Serve'],
    outcome:
      'Data arrives on schedule, failed jobs retry on their own, duplicates never reach the database, and your apps read it all through one API.',
    stack: ['Python / Node', 'Redis queue', 'Postgres', 'REST API', 'Cron'],
    image: '/featureimgs/data-pipeline.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Pipeline architecture from scheduler to crawlers, queue, AI processing, dedupe and Postgres feeding an API, exports and webhooks, with job runs and an API response',
  },
];

export default function Features() {
  const [visibleItems, setVisibleItems] = React.useState<number[]>([]);
  const itemsRef = React.useRef<(HTMLElement | null)[]>([]);

  React.useEffect(() => {
    const observers = services.map((_, idx) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => (prev.includes(idx) ? prev : [...prev, idx]));
            observer.disconnect();
          }
        },
        { threshold: 0.15, rootMargin: '0px 0px -50px 0px' }
      );

      if (itemsRef.current[idx]) {
        observer.observe(itemsRef.current[idx]!);
      }

      return observer;
    });

    return () => observers.forEach((obs) => obs.disconnect());
  }, []);

  return (
    <section id="services" className="py-32 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="space-y-6 mb-20 lg:mb-28 max-w-3xl">
          <p className="text-xs font-semibold text-white/60 uppercase tracking-widest">SELECTED WORK</p>
          <h2 className="text-5xl sm:text-6xl font-black text-white leading-tight">
            Things I&apos;ve Built.
          </h2>
          <p className="text-lg text-white/70 leading-relaxed">
            I build systems that collect data from websites and documents and turn it into useful AI-powered answers,
            reports, and workflows. Here&apos;s one example of each.
          </p>
        </div>

        {/* Services */}
        <div className="space-y-24 lg:space-y-36">
          {services.map((service, idx) => {
            const Icon = service.icon;
            const reversed = idx % 2 === 1;
            const isVisible = visibleItems.includes(idx);

            return (
              <article
                key={service.title}
                ref={(el) => {
                  itemsRef.current[idx] = el;
                }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-x-16 lg:gap-y-8 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                {/* Service → example project */}
                <div
                  className={`space-y-5 lg:col-span-5 lg:row-start-1 lg:self-end ${
                    reversed ? 'lg:col-start-8' : 'lg:col-start-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-white/40">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="h-px w-8 bg-white/20" />
                    <Icon className="w-4 h-4 text-white/60" strokeWidth={1.75} />
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">{service.title}</h3>

                  <p className="text-base sm:text-lg text-white/70 leading-relaxed">{service.description}</p>

                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-widest">Example</p>
                    <p className="text-xl font-bold text-white">{service.example.name}</p>
                    <p className="text-sm sm:text-base text-white/60 leading-relaxed">{service.example.summary}</p>
                    <div className="flex flex-wrap items-center gap-2 pt-1">
                      {service.flow.map((step, i) => (
                        <React.Fragment key={step}>
                          {i > 0 && <ArrowRight className="w-3.5 h-3.5 text-white/30" />}
                          <span className="px-3 py-1 rounded-full border border-white/15 bg-white/[0.03] text-xs text-white/80">
                            {step}
                          </span>
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual proof */}
                <div
                  className={`lg:col-span-7 lg:row-start-1 lg:row-span-2 lg:self-center ${
                    reversed ? 'lg:col-start-1' : 'lg:col-start-6'
                  }`}
                >
                  <div className="relative group">
                    <div className="absolute -inset-4 bg-gradient-to-br from-white/10 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl" />
                    <div className="relative rounded-2xl border border-white/10 group-hover:border-white/30 bg-gradient-to-br from-white/5 to-white/[0.02] p-2 sm:p-3 transition-colors duration-500">
                      <Image
                        src={service.image}
                        alt={service.alt}
                        width={960}
                        height={640}
                        className="w-full h-auto rounded-xl"
                      />
                    </div>
                  </div>
                </div>

                {/* Outcome */}
                <div
                  className={`space-y-5 lg:col-span-5 lg:row-start-2 lg:self-start ${
                    reversed ? 'lg:col-start-8' : 'lg:col-start-1'
                  }`}
                >
                  <div className="border-l-2 border-white/40 pl-5 py-1">
                    <p className="text-xs font-semibold text-white/50 uppercase tracking-widest mb-2">Outcome</p>
                    <p className="text-white font-medium leading-relaxed">{service.outcome}</p>
                  </div>
                  <p className="text-sm text-white/40 font-mono">{service.stack.join(' · ')}</p>
                  <a
                    href={service.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/repo flex items-center justify-between gap-4 pt-5 border-t border-white/10"
                  >
                    <span className="flex items-center gap-2.5 text-xs font-semibold text-white/50 uppercase tracking-widest">
                      <Github className="w-4 h-4" strokeWidth={1.75} />
                      Example Project
                    </span>
                    <span className="flex items-center gap-1 text-sm font-mono text-white/70 group-hover/repo:text-white transition-colors">
                      {service.repo.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                      <ArrowUpRight className="w-4 h-4 group-hover/repo:translate-x-0.5 group-hover/repo:-translate-y-0.5 transition-transform" />
                    </span>
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
