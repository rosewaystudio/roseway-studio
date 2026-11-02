'use client';

import { OPEN_EVENT } from './CookieConsent';

export default function CookieSettingsButton({ className = '' }: { className?: string }) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(OPEN_EVENT))}
      className={className || 'text-navy underline underline-offset-4 hover:text-teal-dark'}
    >
      Cookie settings
    </button>
  );
}
