'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FOUNDATION_QUEST_SITE } from '@/lib/links';

// Budget screen in front of the Discovery Call calendar. Calendly's Standard
// plan can't block bookings by answer, so the screen lives here. Keep the
// options in step with the Contact form and the Calendly budget question.
const CALENDLY_URL = 'https://calendly.com/andrea-rosewaystudio/discovery_call';
const SCREENED = 'under-500';

// `calendly` must match the Discovery Call's budget answers in Calendly exactly
// (custom question 3, so it pre-fills as a3). Check here if those answers change.
const options = [
  { value: 'under-500', label: 'Under $500', calendly: 'Under $500' },
  { value: '500-1000', label: '$500 – $1,000', calendly: '$500 – $1,000' },
  { value: '1000-2500', label: '$1,000 – $2,500', calendly: '$1,000 – $2,500' },
  { value: '2500-5000', label: '$2,500 – $5,000', calendly: '$2,500 – $5,000' },
  { value: '5000-10000', label: '$5,000 – $10,000', calendly: '$5,000 - $10,000' },
  { value: '10000+', label: '$10,000+', calendly: '$10,000+' },
];

export default function BookGate() {
  const [budget, setBudget] = useState('');
  const qualified = budget !== '' && budget !== SCREENED;
  const calendlyBudget = options.find((o) => o.value === budget)?.calendly || '';
  const embedSrc = `${CALENDLY_URL}?embed_domain=rosewaystudio.com&embed_type=Inline&a3=${encodeURIComponent(calendlyBudget)}`;

  return (
    <div className="max-w-3xl mx-auto">
      <label htmlFor="book-budget" className="block text-navy font-semibold text-lg mb-2">
        What is your approximate budget for working with us? *
      </label>
      <select
        id="book-budget"
        value={budget}
        onChange={(e) => setBudget(e.target.value)}
        className="w-full max-w-md px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
      >
        <option value="">Select one...</option>
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>

      {budget === SCREENED && (
        <div className="mt-6 p-6 bg-gray-50 border border-gray-200 rounded-xl" role="status">
          <p className="text-gray-700 leading-relaxed">
            Thank you for your interest in Roseway Studio. Our services start at $500–$750 for a
            Technology Advisory Session, from $750 for standalone technology projects, and
            $2,500–$3,500 for the Strategic Alignment Framework. If that&apos;s outside your current
            budget, we&apos;d encourage you to reach back out when the timing is right — we&apos;re happy to
            have that conversation then.
          </p>
          <p className="text-gray-700 leading-relaxed mt-4">
            Just getting started?{' '}
            <a
              href={FOUNDATION_QUEST_SITE}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-semibold underline underline-offset-4"
            >
              Foundation Quest
            </a>{' '}
            is a free web app that maps the business foundations you need, with low-cost workshops and
            sessions coming soon.
          </p>
        </div>
      )}

      {qualified && (
        <div className="mt-8">
          <p className="text-gray-700 mb-4">
            Great. Pick a time that works for you below. If the calendar doesn&apos;t load,{' '}
            <a
              href={`${CALENDLY_URL}?a3=${encodeURIComponent(calendlyBudget)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-navy font-semibold underline underline-offset-4"
            >
              open it in a new tab
            </a>
            .
          </p>
          <iframe
            key={budget}
            src={embedSrc}
            title="Book a Discovery Call with Roseway Studio"
            className="w-full rounded-xl border border-gray-200 bg-white"
            style={{ height: 760 }}
          />
          <p className="text-gray-500 text-sm mt-3">
            Scheduling is handled by Calendly. See our{' '}
            <Link href="/privacy" className="underline underline-offset-4">Privacy Policy</Link>.
          </p>
        </div>
      )}
    </div>
  );
}
