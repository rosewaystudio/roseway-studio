'use client';

import { useState } from 'react';
import { FOUNDATION_QUEST_SITE } from '@/lib/links';

// HubSpot form "Roseway – Website contact" (portal 243240666)
const HS_PORTAL = '243240666';
const HS_CONTACT_FORM = '6665a7f6-d7e2-42b9-9eef-ea3d82e11fb9';

export default function ContactForm() {
  const [budget, setBudget] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState('');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get('botcheck')) return;
    const full = String(data.get('name') || '').trim();
    const [firstname, ...rest] = full.split(/\s+/);
    const fields = [
      { name: 'firstname', value: firstname || '' },
      { name: 'lastname', value: rest.join(' ') },
      { name: 'email', value: String(data.get('email') || '') },
      { name: 'company', value: String(data.get('organization') || '') },
      { name: 'rs_referral_source', value: String(data.get('referralSource') || '') },
      { name: 'rs_situation', value: String(data.get('situation') || '') },
      { name: 'rs_engagement_type', value: data.getAll('engagementType').map(String).join('; ') },
      { name: 'rs_budget', value: String(data.get('budget') || '') },
      { name: 'message', value: String(data.get('message') || '') },
    ];
    setSending(true);
    setError('');
    try {
      const res = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${HS_PORTAL}/${HS_CONTACT_FORM}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fields,
            context: { pageUri: 'https://rosewaystudio.com/contact', pageName: 'Contact' },
          }),
        }
      );
      if (!res.ok) throw new Error(String(res.status));
      setSubmitted(true);
      form.reset();
      setBudget('');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch {
      setError('Something went wrong. Please try again, or email andrea@rosewaystudio.com.');
    } finally {
      setSending(false);
    }
  }

  const isUnqualified = budget === 'under-1000';

  return (
    <>
      {/* Success Message */}
      {submitted && (
        <div className="bg-teal text-white py-4 text-center">
          <p className="text-lg font-semibold">Thank you! We'll be in touch within 24 hours.</p>
        </div>
      )}

      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">Start the Conversation</h1>
            <p className="text-xl text-white/90">
              There's no agenda other than understanding where you are and where you're trying to go
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Tell Us About Where You Are</h2>

              <form className="space-y-6" onSubmit={handleSubmit}>
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} autoComplete="off" />

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-navy font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-navy font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                {/* Organization Name */}
                <div>
                  <label htmlFor="organization" className="block text-navy font-semibold mb-2">
                    Organization or Business Name *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    placeholder="Your organization or business name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                {/* How did you hear */}
                <div>
                  <label htmlFor="referralSource" className="block text-navy font-semibold mb-2">
                    How did you hear about Roseway Studio?
                  </label>
                  <select
                    id="referralSource"
                    name="referralSource"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Select one...</option>
                    <option value="Referral">Referral</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Black Tech Saturdays">Black Tech Saturdays</option>
                    <option value="TechTown Detroit">TechTown Detroit</option>
                    <option value="Google Search">Google Search</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                {/* Current Situation */}
                <div>
                  <label htmlFor="situation" className="block text-navy font-semibold mb-2">
                    What best describes your current situation? *
                  </label>
                  <select
                    id="situation"
                    name="situation"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Select one...</option>
                    <option value="I have a vision and need help building the organization behind it">
                      I have a vision and need help building the organization behind it
                    </option>
                    <option value="I have a website or technology need">
                      I have a website or technology need
                    </option>
                    <option value="I'm not sure yet — I need a conversation">
                      I'm not sure yet — I need a conversation
                    </option>
                  </select>
                </div>

                {/* Engagement Type */}
                <div>
                  <label className="block text-navy font-semibold mb-2">
                    What type of engagement are you exploring? (select all that apply)
                  </label>
                  <div className="space-y-2">
                    {[
                      'Strategic Alignment Framework',
                      'Strategic Partnership Retainer',
                      'Website Design & Development',
                      'Workspace Implementation',
                      'Not Sure — Need Consultation',
                    ].map((option) => (
                      <label key={option} className="flex items-center gap-2">
                        <input
                          type="checkbox"
                          name="engagementType"
                          value={option}
                          className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                        />
                        <span className="text-gray-700">{option}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Budget */}
                <div>
                  <label htmlFor="budget" className="block text-navy font-semibold mb-2">
                    What is your approximate budget for this project? *
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    required
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Select one...</option>
                    <option value="under-1000">Under $1,000</option>
                    <option value="1000-2500">$1,000 – $2,500</option>
                    <option value="2500-5000">$2,500 – $5,000</option>
                    <option value="5000-10000">$5,000 – $10,000</option>
                    <option value="10000+">$10,000+</option>
                  </select>

                  {/* Under $1,000 inline message */}
                  {isUnqualified && (
                    <div className="mt-3 p-4 bg-gray-50 border border-gray-200 rounded-lg">
                      <p className="text-gray-700 text-sm leading-relaxed">
                        Thank you for your interest in Roseway Studio. Our engagements start at $2,500 for
                        standalone technology projects and $2,500–$3,500 for strategic consulting. If that's
                        outside your current budget, we'd encourage you to reach back out when the timing is
                        right — we're happy to have that conversation then.
                      </p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-3">
                        Just getting started?{' '}
                        <a href={FOUNDATION_QUEST_SITE} target="_blank" rel="noopener noreferrer" className="text-navy font-semibold underline underline-offset-4">
                          Foundation Quest
                        </a>{' '}
                        is a free web app that maps the business foundations you need, with low-cost workshops and sessions coming soon.
                      </p>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-navy font-semibold mb-2">
                    Tell us about your project or challenge *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                    placeholder="Share as much or as little as you'd like — the more context you give us, the better prepared we'll be for our conversation."
                  />
                </div>

                {/* Submit — disabled if unqualified */}
                {error && (
                  <p className="text-red-700 text-sm" role="alert">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={isUnqualified || sending}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors ${
                    isUnqualified
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : 'bg-teal text-white hover:bg-teal-dark'
                  }`}
                >
                  {sending ? 'Sending…' : 'Send Message'}
                </button>
              </form>
            </div>

            {/* Direct Contact + What to Expect */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Prefer to Reach Out Directly?</h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Email</h3>
                  <a
                    href="mailto:andrea@rosewaystudio.com"
                    className="text-teal hover:text-teal-dark text-lg transition-colors"
                  >
                    andrea@rosewaystudio.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Phone</h3>
                  <a
                    href="tel:3132078786"
                    className="text-teal hover:text-teal-dark text-lg transition-colors"
                  >
                    (313) 207-8786
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
                  <p className="text-gray-700">Detroit, MI & Nationwide</p>
                  <p className="text-gray-600">
                    Serving founders and organizations that have outgrown what vision alone can accomplish,
                    and need the infrastructure to match where they're trying to go
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Schedule a Consultation</h3>
                  <p className="text-gray-600">
                    Use the <strong>Schedule Your Discovery Call</strong> button above to book a free
                    45-minute conversation directly on our calendar.
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-100 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">What to Expect</h3>
                <ol className="space-y-5">
                  {[
                    "We'll respond within 24 hours",
                    "Schedule a free 45-minute Discovery Call — no pressure, no pitch, just a conversation",
                    "We'll listen to understand where you are, where you're going, and what's in the way",
                    "We'll share what we're hearing and recommend whether and how we can help",
                    "If there's a fit, we'll send you the Service Offering within 24 hours and propose a follow-up to discuss scope and timeline",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 mt-1">{step}</p>
                    </li>
                  ))}
                </ol>
                <p className="text-gray-600 mt-6 italic text-sm">
                  No pitch, no pressure — just an honest conversation about whether we're the right fit
                  for where you're going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}