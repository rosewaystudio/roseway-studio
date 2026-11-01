'use client';

import { useState } from 'react';

type Status = 'idle' | 'sending' | 'done' | 'error';

const inputClass =
  'w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent';

export default function WaitlistForm() {
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('sending');
    const data = Object.fromEntries(new FormData(e.currentTarget).entries());
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      setStatus(json.success ? 'done' : 'error');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'done') {
    return (
      <div className="bg-white rounded-xl p-8 text-center" role="status">
        <p className="text-2xl font-bold text-navy mb-2">You&apos;re on the list.</p>
        <p className="text-gray-700">
          We&apos;ll email you when Foundation Workshops and Sessions open. In the meantime, your free foundation map is ready whenever you are.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-xl p-8 space-y-5">
      <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
      <input type="hidden" name="subject" value="Foundation Quest waitlist signup" />
      <input type="hidden" name="from_name" value="Roseway Studio Website" />
      <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

      <div>
        <label htmlFor="fq-name" className="block text-navy font-semibold mb-2">First name *</label>
        <input id="fq-name" name="name" type="text" required autoComplete="given-name" className={inputClass} />
      </div>

      <div>
        <label htmlFor="fq-email" className="block text-navy font-semibold mb-2">Email *</label>
        <input id="fq-email" name="email" type="email" required autoComplete="email" className={inputClass} />
      </div>

      <div>
        <label htmlFor="fq-interest" className="block text-navy font-semibold mb-2">I&apos;m interested in</label>
        <select id="fq-interest" name="interest" className={inputClass} defaultValue="Both">
          <option value="Foundation Workshop">Foundation Workshop (group)</option>
          <option value="Foundation Session">Foundation Session (one on one)</option>
          <option value="Both">Both / not sure yet</option>
        </select>
      </div>

      <div>
        <label htmlFor="fq-business" className="block text-navy font-semibold mb-2">What do you sell?</label>
        <select id="fq-business" name="business_type" className={inputClass} defaultValue="">
          <option value="">Select one...</option>
          <option value="Food & drinks">Food &amp; drinks</option>
          <option value="Body & beauty">Body &amp; beauty</option>
          <option value="Clothing, crafts & goods">Clothing, crafts &amp; goods</option>
          <option value="Home & trade services">Home &amp; trade services</option>
          <option value="Professional & creative services">Professional &amp; creative services</option>
          <option value="Other">Something else</option>
        </select>
      </div>

      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-dark transition-colors disabled:opacity-60"
      >
        {status === 'sending' ? 'Sending…' : 'Join the waitlist'}
      </button>

      {status === 'error' && (
        <p className="text-red-700 text-sm" role="alert">
          Something went wrong. Please try again, or email contact@rosewaystudio.com.
        </p>
      )}
      <p className="text-gray-500 text-sm">We&apos;ll only use your email to tell you when paid options open.</p>
    </form>
  );
}
