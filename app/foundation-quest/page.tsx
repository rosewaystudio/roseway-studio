import type { Metadata } from 'next';
import Link from 'next/link';
import WaitlistForm from './WaitlistForm';
import { FOUNDATION_QUEST_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Foundation Quest | Roseway Studio',
  description:
    'A free, Michigan-specific web app that walks solo founders through the business foundations their kind of business needs: what each one is, and why it matters.',
  alternates: {
    canonical: 'https://rosewaystudio.com/foundation-quest',
  },
  openGraph: {
    title: 'Foundation Quest | Roseway Studio',
    description:
      'Build your business foundation before someone asks for it. A free, Michigan-specific web app for solo founders.',
    url: 'https://rosewaystudio.com/foundation-quest',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Foundation Quest | Roseway Studio',
    description: 'A free, Michigan-specific web app for solo founders.',
  },
};

const categories = [
  'Food & drinks',
  'Body & beauty',
  'Clothing, crafts & goods',
  'Home & trade services',
  'Professional & creative services',
];

const asks = [
  { who: 'A market asks', what: 'for a certificate of insurance' },
  { who: 'A client asks', what: 'for a signed contract' },
  { who: 'A bank asks', what: 'for an EIN and business records' },
];

const steps = [
  { n: '1', title: 'Tell it what you sell', body: 'Pick your kind of business and answer a few quick follow-up questions.' },
  { n: '2', title: 'Walk the quest', body: 'Go step by step through the foundations your business needs, with what each one is and why it matters.' },
  { n: '3', title: 'Get your foundation map', body: 'See where you stand and your three most important next moves.' },
];

function StartButton({ className = '' }: { className?: string }) {
  return (
    <a
      href={FOUNDATION_QUEST_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-dark transition-colors inline-block text-center ${className}`}
    >
      Start your free foundation map
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

export default function FoundationQuestPage() {
  return (
    <>
      {/* Header */}
      <section className="bg-navy py-16 md:py-20">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-3">Free web app · Built for Michigan</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Foundation Quest</h1>
            <p className="text-xl text-white/90 mb-8">
              Build your business foundation before someone asks for it. Tell Foundation Quest what you sell, and it walks you through what your kind of business needs, what each item is, and why it matters.
            </p>
            <StartButton />
            <p className="text-sm text-gray-300 mt-4">Works on any phone or computer. No account needed.</p>
          </div>
        </div>
      </section>

      {/* Problem */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">Most makers start selling first</h2>
            <p className="text-xl text-gray-700 text-center mb-10 max-w-3xl mx-auto">
              Then they learn what the business needed only when someone asks for it. Each surprise can cost a sale, a booth, or a month.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {asks.map((a) => (
                <div key={a.who} className="border border-gray-200 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-navy mb-1">{a.who}</h3>
                  <p className="text-gray-600">{a.what}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section-padding bg-gray-100">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-12 text-center">How it works</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {steps.map((s) => (
                <div key={s.n} className="border-l-4 border-teal pl-6">
                  <p className="text-teal font-bold text-3xl mb-2">{s.n}</p>
                  <h3 className="text-xl font-bold text-navy mb-2">{s.title}</h3>
                  <p className="text-gray-600">{s.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 text-center">
              <p className="text-navy font-semibold mb-4">Made for solo founders in:</p>
              <ul className="flex flex-wrap justify-center gap-3">
                {categories.map((c) => (
                  <li key={c} className="bg-white border border-gray-200 rounded-full px-4 py-2 text-gray-700">{c}</li>
                ))}
                <li className="rounded-full px-4 py-2 text-gray-500 italic">more coming</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Built with founders */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">Built with founders</h2>
              <div className="flex gap-10 mb-6">
                <div>
                  <p className="text-5xl font-bold text-teal">6</p>
                  <p className="text-gray-600">founder interviews shaped the design</p>
                </div>
                <div>
                  <p className="text-5xl font-bold text-teal">10</p>
                  <p className="text-gray-600">testers used the working prototype</p>
                </div>
              </div>
              <p className="text-gray-600">
                Testers said it was easy to navigate and not too long, that the &ldquo;what it is&rdquo; and &ldquo;why you need it&rdquo; explanations helped, and that they liked having everything in one place.
              </p>
              <p className="text-gray-500 text-sm mt-4">Interviews and testing through the Black Tech Saturdays x UMCI Design Thinking program, fall 2026.</p>
            </div>
            <figure className="bg-navy rounded-xl p-8">
              <blockquote className="text-xl text-white leading-relaxed mb-4">
                &ldquo;I wish I had something like this when I was starting out. I thought all I needed to do was register a DBA with Wayne County and start selling. The app identified gaps in my business foundation that I need to close.&rdquo;
              </blockquote>
              <figcaption className="text-teal font-semibold">Tamika, cottage baker</figcaption>
            </figure>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section-padding bg-gray-100" id="pricing">
        <div className="container-width">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4 text-center">Free to start, low cost when you want help</h2>
            <p className="text-xl text-gray-700 text-center mb-12">The map is free. Paid help is coming soon.</p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-navy rounded-xl p-8 flex flex-col">
                <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-2">Foundation map</p>
                <p className="text-4xl font-bold text-white mb-3">Free</p>
                <p className="text-gray-300 mb-6 flex-1">The full quest, your foundation map, and your next three moves.</p>
                <a
                  href={FOUNDATION_QUEST_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-teal text-white px-6 py-3 rounded-lg font-semibold hover:bg-teal-dark transition-colors text-center"
                >
                  Start now<span className="sr-only"> (opens in a new tab)</span>
                </a>
              </div>
              {[
                { name: 'Foundation Workshop', price: '$25–$50', unit: 'per person', body: 'A live group session working through your map, together.' },
                { name: 'Foundation Session', price: '$150–$250', unit: 'one on one', body: 'A sequenced action plan and vetted referrals for your situation.' },
              ].map((t) => (
                <div key={t.name} className="bg-white border border-gray-200 rounded-xl p-8 flex flex-col">
                  <div className="flex items-center justify-between mb-2 gap-2">
                    <p className="text-teal-dark font-semibold text-sm uppercase tracking-wide">{t.name}</p>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 rounded-full px-3 py-1 whitespace-nowrap">Coming soon</span>
                  </div>
                  <p className="text-4xl font-bold text-navy">{t.price}</p>
                  <p className="text-gray-500 mb-3">{t.unit}</p>
                  <p className="text-gray-600 mb-6 flex-1">{t.body}</p>
                  <a href="#waitlist" className="border-2 border-navy text-navy px-6 py-3 rounded-lg font-semibold hover:bg-navy hover:text-white transition-colors text-center">
                    Join the waitlist
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist */}
      <section className="section-padding bg-navy" id="waitlist">
        <div className="container-width">
          <div className="max-w-xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 text-center">Get first word on Workshops and Sessions</h2>
            <p className="text-lg text-gray-300 text-center mb-8">Join the waitlist and we&apos;ll email you when paid options open.</p>
            <WaitlistForm />
          </div>
        </div>
      </section>

      {/* Disclaimer + bridge */}
      <section className="py-12 bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-amber-50 border-l-4 border-amber-400 rounded-lg p-5 text-amber-900" role="note">
              <p className="font-semibold mb-1">Prototype, not legal advice</p>
              <p className="text-sm leading-relaxed">
                Foundation Quest is a prototype and a general guide, not legal, tax, or financial advice. Some items are still being checked against official sources and are marked &ldquo;Draft&rdquo; in the app. Confirm the details for your situation with a licensed Michigan attorney, CPA, or insurance broker.
              </p>
            </div>
            <p className="text-gray-600 text-center">
              Already up and running and ready to build the organization behind it?{' '}
              <Link href="/services" className="text-teal-dark font-semibold hover:underline">See Roseway&apos;s services</Link>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
