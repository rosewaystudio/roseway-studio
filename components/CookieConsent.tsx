'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Script from 'next/script';

// HubSpot tracking loads only after the visitor accepts analytics cookies.
// The choice is remembered in localStorage; the "Cookie settings" button
// (CookieSettingsButton) reopens this banner via a window event.

const STORAGE_KEY = 'rs-cookie-consent';
export const OPEN_EVENT = 'rs-open-cookie-settings';
type Choice = 'accepted' | 'declined' | null;

function readChoice(): Choice {
  try {
    const v = window.localStorage.getItem(STORAGE_KEY);
    return v === 'accepted' || v === 'declined' ? v : null;
  } catch {
    return null;
  }
}

function saveChoice(v: Exclude<Choice, null>) {
  try {
    window.localStorage.setItem(STORAGE_KEY, v);
  } catch {
    /* storage unavailable: choice lasts for this page view only */
  }
}

export default function CookieConsent() {
  const [choice, setChoice] = useState<Choice>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const c = readChoice();
    setChoice(c);
    setOpen(c === null);
    const reopen = () => setOpen(true);
    window.addEventListener(OPEN_EVENT, reopen);
    return () => window.removeEventListener(OPEN_EVENT, reopen);
  }, []);

  function decide(v: Exclude<Choice, null>) {
    const wasAccepted = choice === 'accepted';
    saveChoice(v);
    setChoice(v);
    setOpen(false);
    // Withdrawing consent: reload so the already-loaded HubSpot script is gone.
    if (wasAccepted && v === 'declined') window.location.reload();
  }

  return (
    <>
      {choice === 'accepted' && (
        <Script id="hs-script-loader" src="//js-na2.hs-scripts.com/243240666.js" strategy="afterInteractive" />
      )}
      {open && (
        <div
          role="region"
          aria-label="Cookie choices"
          className="fixed bottom-0 inset-x-0 z-[60] bg-white border-t border-gray-200 shadow-[0_-4px_20px_rgba(11,30,60,0.12)]"
        >
          <div className="container-width py-5 flex flex-col md:flex-row md:items-center gap-4">
            <p className="text-gray-700 text-sm md:text-base flex-1">
              We&apos;d like to use HubSpot analytics cookies to understand how people use this site. They&apos;re off unless you accept.{' '}
              <Link href="/privacy" className="text-navy underline underline-offset-4">Privacy Policy</Link>
            </p>
            <div className="flex gap-3 shrink-0">
              <button
                type="button"
                onClick={() => decide('declined')}
                className="px-5 py-2.5 rounded-lg font-semibold border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors"
              >
                Decline
              </button>
              <button
                type="button"
                onClick={() => decide('accepted')}
                className="px-5 py-2.5 rounded-lg font-semibold bg-navy text-white hover:bg-navy-dark transition-colors"
              >
                Accept
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
