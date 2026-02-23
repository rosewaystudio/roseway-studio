'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { href: '/services', label: 'Services' },
    { href: '/work', label: 'Work' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
            aria-label="Roseway Studio home"
          >
            <Image
              src="/compass-rose-dark-3.jpeg"
              alt="Roseway Studio compass rose logo"
              width={40}
              height={40}
              className="w-10 h-10 object-contain"
              priority
            />
            <span className="text-2xl font-bold text-navy">
              Roseway Studio
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-700 hover:text-teal font-medium transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <a href="https://calendar.app.google/cJjLJ9wEnnHzJVN2A"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
            >
              Schedule Your Discovery Call
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-navy"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-gray-700 hover:text-teal font-medium py-2 transition-colors"
                >
                  {link.label}
                </Link>
              ))}
              <a href="https://calendar.app.google/cJjLJ9wEnnHzJVN2A"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-colors text-center"
              >
                Schedule Your Discovery Call
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}