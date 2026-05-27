'use client';

import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from './ui/button';
import { Logo } from './logo';

interface Props {
  onContact?: () => void;
}

export default function Navbar({ onContact }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Services', href: '#services' },
    { label: 'Features', href: '#features' },
    { label: 'Portfolio', href: 'https://seekehr.github.io/' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith('#')) return;
    e.preventDefault();
    if (href === '#contact') {
      onContact?.();
      setIsOpen(false);
      return;
    }
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Logo size={36} className="w-9 h-9 rounded-lg" />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-sm text-white/70 hover:text-white transition-colors font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* CTA Button & Mobile Menu */}
          <div className="flex items-center gap-4">
            <Button
              onClick={onContact}
              className="hidden md:flex bg-white hover:bg-white/90 text-black rounded-full px-6 h-10 text-sm font-bold"
            >
              Contact
            </Button>


            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <div className="flex flex-col gap-4 pt-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-sm text-white/70 hover:text-white transition-colors font-medium"
                >
                  {item.label}
                </a>
              ))}
              <Button onClick={() => { onContact?.(); setIsOpen(false); }} className="w-full bg-white hover:bg-white/90 text-black rounded-full font-bold mt-2">
                Contact
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
