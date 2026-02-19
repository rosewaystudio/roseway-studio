import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About | Roseway Studio',
  description: 'Learn about Andrea Frazier and Roseway Studio — strategic partnership and fractional COO services for early-stage founders and mission-driven organizations in Detroit and beyond.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-navy py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-white mb-6">About Roseway Studio</h1>
          </div>
        </div>
      </section>

      {/* Studio Story */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Roseway Studio is a Detroit-based strategic consulting firm providing fractional COO services and digital infrastructure to early-stage founders and mission-driven organizations. We exist for founders who have the vision but need the partner to help them build the organization behind it.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              Our name reflects who we are. The compass rose — our visual identity — represents strategic navigation and direction for founders who know where they want to go but need a clear path to get there. The rose family connection runs through our founder's heritage, making the name as authentic as the work.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Every engagement begins with the Strategic Anchor Framework — a structured discovery process that identifies the core purpose that should guide every decision an organization makes. From there, we work alongside founders as a fractional COO, providing ongoing strategic guidance, operational infrastructure, and digital implementation in one consistent relationship.
            </p>
          </div>
        </div>
      </section>

      {/* About Andrea */}
      <section className="section-padding bg-gray-100">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-10 text-center">Your Strategic Partner</h2>

            <div className="flex justify-center mb-12">
              <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal shadow-lg">
                <img
                  src="/andrea-frazier.jpeg"
                  alt="Andrea Frazier, Founder of Roseway Studio"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-navy mb-1">Andrea Frazier</h3>
              <p className="text-teal font-semibold text-lg">Founder, Roseway Studio</p>
            </div>

            <p className="text-xl text-gray-700 mb-6 leading-relaxed">
              Andrea brings 20+ years of business operations experience from organizations including Blue Cross Blue Shield of Michigan and Rocket Mortgage, combined with an MBA from University of Detroit Mercy. She founded Roseway Studio on a single conviction: that founders deserve the same quality of strategic infrastructure as large enterprises — built around their purpose, not borrowed from a template.
            </p>
            <p className="text-gray-700 mb-10 leading-relaxed">
              An active member of Detroit's entrepreneurial community through TechTown and Black Tech Saturdays, Andrea works closely with post-idea, pre-functional founders to build organizational infrastructure from the ground up — the mission, decision-making frameworks, operational systems, and digital presence that transform a vision into a functioning organization.
            </p>

            <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
              <h3 className="text-xl font-bold text-navy mb-6">Background</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "20+ years of business operations and strategic program management",
                  "MBA, University of Detroit Mercy",
                  "BBA, University of Michigan",
                  "Blue Cross Blue Shield of Michigan",
                  "Rocket Mortgage",
                  "Active member, TechTown Detroit and Black Tech Saturdays",
                  "Member, Alpha Kappa Alpha Sorority, Incorporated",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8">
              <p className="text-lg text-navy leading-relaxed">
                Andrea's approach combines executive-level strategic thinking with hands-on operational and technical capability — a rare combination that allows Roseway Studio to both advise on what organizations should build and actually build it alongside them.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What This Looks Like in Practice */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-4 text-center">What This Looks Like in Practice</h2>
            <p className="text-gray-600 text-center mb-12">
              We've worked with early-stage founders, launching organizations, and established teams whose infrastructure had fallen behind their mission.{' '}
              <a href="/work" className="text-teal hover:underline font-medium">See the full case studies →</a>
            </p>

            <div className="space-y-6">
              {[
                {
                  org: "A Safe Space for Men",
                  type: "Strategic Partnership · Early-Stage Organization",
                  summary: "Helped a founding team build organizational infrastructure from the ground up — mission and vision, strategic business plan, web presence, and ongoing fractional COO guidance.",
                },
                {
                  org: "Soulivity",
                  type: "Strategic Anchor Framework · Engagement in Progress",
                  summary: "Phase 1 Business Architecture Audit surfaced a foundational anchor problem across a digital media platform preparing to launch video syndication. Phases 2 and 3 in progress.",
                },
                {
                  org: "SafetyZone Behavioral Health Urgent Care",
                  type: "Digital Infrastructure · Early-Stage Organization",
                  summary: "Migrated a 14-user email environment and established reliable communication infrastructure for a behavioral health organization ahead of its launch.",
                },
                {
                  org: "Building Better Men",
                  type: "Digital Infrastructure · Established Organization",
                  summary: "Restored non-functional email accounts and resolved active website security vulnerabilities that were quietly eroding trust with every person who tried to reach them.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6 border-l-4 border-teal pl-6 py-2">
                  <div className="flex-1">
                    <p className="text-teal text-xs font-semibold uppercase tracking-wide mb-1">{item.type}</p>
                    <h3 className="text-lg font-bold text-navy mb-1">{item.org}</h3>
                    <p className="text-gray-600 text-sm">{item.summary}</p>
                  </div>
                  <a href="/work" className="text-teal text-sm font-medium hover:underline whitespace-nowrap mt-1">
                    Full story →
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-gray-100">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">How We Work</h2>

            <div className="space-y-8">
              {[
                {
                  title: "Strategic Partnership Over Vendor Relationship",
                  description: "We don't just execute tasks. We think strategically about what you should build, why, and in what order — then build it alongside you. Our goal is to be the partner you call when a big decision is on the table.",
                },
                {
                  title: "Founders Deserve Enterprise-Quality Infrastructure",
                  description: "Large organizations have COOs, strategic planners, and operational leadership. Early-stage founders often have none of that. We exist to close that gap — bringing the same quality of strategic thinking and operational rigor to founders who are building something that matters.",
                },
                {
                  title: "Transparent Pricing",
                  description: "We believe in honest, upfront pricing. You'll know what you're investing and what you're getting before we begin — no surprises, no scope creep without conversation.",
                },
                {
                  title: "Detroit Roots, National Reach",
                  description: "Based in Detroit and deeply embedded in the city's entrepreneurial ecosystem through TechTown and Black Tech Saturdays. We serve mission-driven founders wherever they are.",
                },
              ].map((value, i) => (
                <div key={i} className="border-l-4 border-teal pl-8">
                  <h3 className="text-xl font-bold text-navy mb-3">{value.title}</h3>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Let's Work Together</h2>
            <p className="text-xl text-gray-200 mb-8">
              Whether you're starting from an idea or scaling an existing organization, we'd love to talk about whether Roseway Studio is the right strategic partner for where you're going.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="primary">
                Start the Conversation
              </Button>
              <a
                href="mailto:contact@rosewaystudio.com"
                className="text-white hover:text-teal transition-colors font-medium"
              >
                or email contact@rosewaystudio.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}