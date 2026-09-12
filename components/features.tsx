'use client';

import React from 'react';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Github, Inbox, FileText, Search, Workflow, BookOpen, Target } from 'lucide-react';

const projects = [
  {
    icon: Inbox,
    category: 'Personal workflow automation',
    title: 'Inbox triage system',
    description:
      'Every incoming email is classified, summarized in one line, and routed. Urgent items land in a Slack digest, action items go straight onto a Notion task board.',
    flow: ['Classify', 'Summarize', 'Route to Slack + Notion'],
    outcome:
      'The inbox only surfaces what actually needs a reply. Everything else is already filed, archived, or drafted.',
    stack: ['Gmail API', 'LLM classification', 'Slack', 'Notion'],
    image: '/featureimgs/inbox-triage.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Inbox triage dashboard: emails tagged Urgent, Invoice, Client and Newsletter with one-line AI summaries, routed into a Slack digest and a Notion task list',
  },
  {
    icon: FileText,
    category: 'AI document workflows',
    title: 'Invoice extraction pipeline',
    description:
      'Drop in a PDF invoice and the vendor, dates, line items, tax and total are pulled into a strict schema, confidence-checked, and appended to the AP spreadsheet.',
    flow: ['Parse PDF', 'Extract fields', 'Validate', 'Append to sheet'],
    outcome:
      'No more retyping invoices. Low-confidence fields get flagged for a human instead of silently going wrong.',
    stack: ['OCR', 'LLM extraction', 'JSON schema', 'Excel / Sheets'],
    image: '/featureimgs/invoice-extraction.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'A PDF invoice with highlighted fields next to the extracted key-value fields with confidence scores and the new row in an invoices spreadsheet',
  },
  {
    icon: Search,
    category: 'Research automation',
    title: 'Competitor research agent',
    description:
      'Give it a question. It plans the searches, collects and reads the sources, cross-checks the facts, and writes a brief where every claim is cited.',
    flow: ['Search', 'Read', 'Cross-check', 'Write report'],
    outcome:
      'A cited competitor brief in minutes instead of an afternoon of open tabs, and every claim links back to its source.',
    stack: ['Web search', 'Scraping', 'LLM agents', 'Notion / PDF export'],
    image: '/featureimgs/research-agent.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Research agent run showing completed steps and collected sources beside a generated competitor report with a comparison table and citations',
  },
  {
    icon: Workflow,
    category: 'API integrations',
    title: 'CRM ↔ Slack ↔ Sheets sync',
    description:
      'A small sync service listening to CRM webhooks. When a deal moves, the team hears about it in Slack and the pipeline sheet updates itself. Edits in the sheet flow back.',
    flow: ['Webhook', 'Queue', 'Sync both ways'],
    outcome:
      'One source of truth. Nobody copy-pastes deals between tools, and failed syncs retry instead of disappearing.',
    stack: ['HubSpot API', 'Slack API', 'Google Sheets API', 'Webhooks'],
    image: '/featureimgs/crm-slack-sheets-sync.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'System diagram of HubSpot, a sync service, Slack and Google Sheets, with a Slack deal-won alert and the matching updated row in the pipeline sheet',
  },
  {
    icon: BookOpen,
    category: 'Custom RAG',
    title: 'Internal knowledge assistant',
    description:
      'A chat assistant over your Drive, Notion wiki and help center. Answers cite the exact document and section, and respect existing permissions.',
    flow: ['Index docs', 'Retrieve', 'Answer with citations'],
    outcome:
      'Staff get answers they can verify in one click, instead of pinging the one person who knows.',
    stack: ['Embeddings', 'Vector DB', 'RAG', 'Google Drive + Notion'],
    image: '/featureimgs/knowledge-assistant.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Knowledge assistant chat answering a refund-policy question with numbered citations and source cards from Google Drive and a Notion wiki',
  },
  {
    icon: Target,
    category: 'Lead automation',
    title: 'Lead qualification pipeline',
    description:
      'New leads are enriched with company data and buying signals, scored against your ideal customer profile, and the good ones get a personalized follow-up drafted for approval.',
    flow: ['Enrich', 'Score', 'Draft follow-up'],
    outcome:
      'Sales spends its time on the leads worth it, and every qualified lead gets a relevant reply the same day.',
    stack: ['Enrichment APIs', 'LLM scoring', 'Gmail', 'HubSpot'],
    image: '/featureimgs/lead-qualification.svg',
    repo: 'https://github.com/seekehr/',
    alt: 'Three-stage lead pipeline: incoming leads, an enriched lead with a fit score of 86, and an auto-drafted personalized follow-up email awaiting approval',
  },
];

export default function Features() {
  const [visibleItems, setVisibleItems] = React.useState<number[]>([]);
  const itemsRef = React.useRef<(HTMLElement | null)[]>([]);

  React.useEffect(() => {
    const observers = projects.map((_, idx) => {
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
            One real system for each service: what it does, what it looks like, and what changed once it was running.
          </p>
        </div>

        {/* Projects */}
        <div className="space-y-24 lg:space-y-36">
          {projects.map((project, idx) => {
            const Icon = project.icon;
            const reversed = idx % 2 === 1;
            const isVisible = visibleItems.includes(idx);

            return (
              <article
                key={project.title}
                ref={(el) => {
                  itemsRef.current[idx] = el;
                }}
                className={`grid lg:grid-cols-12 gap-8 lg:gap-x-16 lg:gap-y-8 ${
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                }`}
              >
                {/* Category → project */}
                <div
                  className={`space-y-5 lg:col-span-5 lg:row-start-1 lg:self-end ${
                    reversed ? 'lg:col-start-8' : 'lg:col-start-1'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-mono text-white/40">{String(idx + 1).padStart(2, '0')}</span>
                    <span className="h-px w-8 bg-white/20" />
                    <span className="flex items-center gap-2 text-xs font-semibold text-white/60 uppercase tracking-widest">
                      <Icon className="w-4 h-4" strokeWidth={1.75} />
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-3xl sm:text-4xl font-black text-white leading-tight">{project.title}</h3>

                  <p className="text-base sm:text-lg text-white/70 leading-relaxed">{project.description}</p>

                  <div className="flex flex-wrap items-center gap-2">
                    {project.flow.map((step, i) => (
                      <React.Fragment key={step}>
                        {i > 0 && <ArrowRight className="w-3.5 h-3.5 text-white/30" />}
                        <span className="px-3 py-1 rounded-full border border-white/15 bg-white/[0.03] text-xs text-white/80">
                          {step}
                        </span>
                      </React.Fragment>
                    ))}
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
                        src={project.image}
                        alt={project.alt}
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
                    <p className="text-white font-medium leading-relaxed">{project.outcome}</p>
                  </div>
                  <p className="text-sm text-white/40 font-mono">{project.stack.join(' · ')}</p>
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/repo flex items-center justify-between gap-4 pt-5 border-t border-white/10"
                  >
                    <span className="flex items-center gap-2.5 text-xs font-semibold text-white/50 uppercase tracking-widest">
                      <Github className="w-4 h-4" strokeWidth={1.75} />
                      Example Project
                    </span>
                    <span className="flex items-center gap-1 text-sm font-mono text-white/70 group-hover/repo:text-white transition-colors">
                      {project.repo.replace(/^https?:\/\//, '').replace(/\/$/, '')}
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
