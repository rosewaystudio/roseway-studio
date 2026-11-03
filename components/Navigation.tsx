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

  // TEMPORARY (Nov 2026): Foundation Quest gets its own button while the
  // Torch of Wisdom competition review is underway. Afterward, tone it down
  // (e.g. an outlined pill) or move it back into navLinks.
  const fqButton =
    'bg-navy text-white px-5 py-3 rounded-lg font-semibold hover:bg-navy-dark transition-colors text-center';

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      {/* TEMPORARY (Nov 2026): phones only (<640px), where the Foundation Quest
          button is hidden in the menu and the homepage arrow doesn't show. */}
      <Link
        href="/foundation-quest"
        className="sm:hidden flex items-center justify-center gap-2 bg-teal px-4 py-2 text-sm text-navy hover:bg-teal-light transition-colors"
      >
        <span>
          <span className="font-bold">New:</span> Foundation Quest
        </span>
        <span className="font-bold whitespace-nowrap underline underline-offset-2">Try for free &rarr;</span>
      </Link>
      <div className="container-width">
        <div className="flex items-center justify-between h-20">
          {/* Logo + Wordmark, with the page links right beside it */}
          <div className="flex items-center gap-10">
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

            {/* Desktop page links */}
            <div className="hidden xl:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-gray-700 hover:text-teal font-medium transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Desktop buttons, on the right */}
          <div className="hidden xl:flex items-center gap-3">
            <Link href="/foundation-quest" className={fqButton}>
              Foundation Quest
            </Link>
            <Link
              href="/book"
              className="bg-teal text-white px-5 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
            >
              Book a Discovery Call
            </Link>
          </div>

          {/* Tablet / small laptop: keep the FQ button visible beside the menu icon */}
          <div className="flex items-center gap-3 xl:hidden">
            <Link href="/foundation-quest" className={`${fqButton} hidden sm:inline-block`}>
              Foundation Quest
            </Link>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-2 text-navy"
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
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-gray-100">
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
              <Link
                href="/foundation-quest"
                onClick={() => setMobileMenuOpen(false)}
                className={`${fqButton} inline-flex items-center justify-center gap-2`}
              >
                Foundation Quest
                <span className="rounded-full bg-teal px-2 py-0.5 text-xs font-bold text-navy">Free</span>
              </Link>
              <Link
                href="/book"
                onClick={() => setMobileMenuOpen(false)}
                className="bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-colors text-center"
              >
                Book a Discovery Call
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}