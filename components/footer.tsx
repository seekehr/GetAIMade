'use client';

import { Mail, MessageSquare } from 'lucide-react';

const footerLinks = [
  {
    title: 'Services',
    links: ['AI Chatbots', 'Automation', 'Web Scraping', 'AI Agents', 'Integrations'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press', 'Contact'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Security', 'Compliance'],
  },
];

const socialLinks = [
  { icon: MessageSquare, href: '#', label: 'Twitter' },
  { icon: Mail, href: '#', label: 'Email' },
  { icon: MessageSquare, href: '#', label: 'Discord' },
];

export default function Footer() {
  return (
    <footer id="contact" className="relative py-24 px-4 sm:px-6 lg:px-8 bg-black border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        {/* Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Tagline */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center text-black font-black text-sm">
                AI
              </div>
              <span className="font-black text-lg text-white">Get AI Made</span>
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
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a
                      href="#"
                      className="text-white/60 hover:text-white transition-colors font-light text-sm"
                    >
                      {link}
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
            © 2024 Get AI Made. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex gap-4">
            {socialLinks.map((social, idx) => {
              const Icon = social.icon;
              return (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded-full border border-white/20 hover:border-white/40 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label={social.label}
                >
                  <Icon className="w-5 h-5" />
                </a>
              );
            })}
          </div>

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
