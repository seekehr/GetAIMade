'use client';

import { Mail, MessageSquare } from 'lucide-react';
import { Logo } from './logo';

const footerLinks = [
  {
    title: 'Services',
    links: [
      { label: 'AI-Powered Web Scraping', href: '#service-01' },
      { label: 'Smart Data Extraction', href: '#service-02' },
      { label: 'Custom RAG Systems', href: '#service-03' },
      { label: 'Research & Monitoring Systems', href: '#service-04' },
      { label: 'Lead & Company Intelligence', href: '#service-05' },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About', href: '#services' },
      { label: 'Contact', href: '#contact' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
      { label: 'Compliance', href: '#' },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <Logo size={40} className="w-10 h-10 rounded-lg" />
            </div>
            <p className="text-white/60 leading-relaxed font-light text-sm">
              Cutting-edge AI automation for modern businesses.
            </p>
          </div>

          {/* Links */}
          {footerLinks.map((section, idx) => (
            <div key={idx} className="space-y-5">
              <h4 className="font-bold text-white text-sm uppercase tracking-wide">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors font-light text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-8 pt-12 border-t border-white/10">
          {/* Copyright */}
          <p className="text-white/60 font-light text-sm">
            © 2026 Get AI Made. All rights reserved.
          </p>

          {/* Social Links */}
  

          {/* Status Badge */}
          <div className="flex items-center gap-2 px-4 py-2 border border-white/20 rounded-full bg-white/5">
            <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            <span className="text-xs font-semibold text-white/70">
              All systems operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
