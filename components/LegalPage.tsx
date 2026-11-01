import Link from 'next/link';

// Shared layout for the policy pages. These policies cover rosewaystudio.com
// and the Foundation Quest site. Drafted Nov 2026; attorney review pending.

export const LEGAL_LAST_UPDATED = 'November 1, 2026';

const legalLinks = [
  { href: '/privacy', label: 'Privacy Policy' },
  { href: '/terms', label: 'Terms of Use' },
  { href: '/refunds', label: 'Refund & Cancellation' },
  { href: '/accessibility', label: 'Accessibility' },
];

export default function LegalPage({
  title,
  intro,
  children,
}: {
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="bg-navy py-14">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">{title}</h1>
            <p className="text-gray-300">Last updated {LEGAL_LAST_UPDATED}</p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">
            {intro && <p className="text-xl text-gray-700 leading-relaxed mb-10">{intro}</p>}
            <div className="legal-prose">{children}</div>
            <nav aria-label="Policies" className="mt-14 pt-8 border-t border-gray-200 flex flex-wrap gap-x-6 gap-y-2 text-sm">
              {legalLinks.map((l) => (
                <Link key={l.href} href={l.href} className="text-navy hover:text-teal-dark underline-offset-4 hover:underline">
                  {l.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </section>
    </>
  );
}
