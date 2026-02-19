import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Services | Roseway Studio',
  description: 'Strategic partnership, fractional COO guidance, and digital infrastructure for early-stage founders and mission-driven organizations.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">How We Work Together</h1>
            <p className="text-xl text-gray-700">
              Most founders don't have a technology problem. They have a presence, alignment, and communication problem. The right technology — built on a clear strategic foundation — is how you solve it.
            </p>
          </div>
        </div>
      </section>

      {/* Service 01 — Mission Focus Framework */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <span className="text-teal font-bold text-lg">01</span>
              <div>
                <h2 className="text-4xl font-bold text-navy mb-2">Strategic Anchor Framework</h2>
                <p className="text-xl text-gray-600 italic">The starting point for every engagement</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              A structured, paid discovery process that identifies your strategic anchor — the core purpose that should guide every decision you make. We surface the gaps between where you are and where you're trying to go, and give you a clear picture of what it will take to close them.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  phase: "Days 1–10",
                  title: "Business Architecture Audit",
                  description: "Deep assessment of your mission, operations, digital presence, and alignment gaps",
                },
                {
                  phase: "Days 11–30",
                  title: "Alignment Framework Development",
                  description: "Build your decision-making framework and strategic guardrails grounded in your core purpose",
                },
                {
                  phase: "Days 31–45",
                  title: "Implementation Roadmap",
                  description: "A clear, actionable picture of what to keep, what to eliminate, and what to change — and in what order",
                },
              ].map((phase, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6 border-t-4 border-teal">
                  <p className="text-teal text-sm font-semibold uppercase tracking-wide mb-2">{phase.phase}</p>
                  <h3 className="text-lg font-bold text-navy mb-3">{phase.title}</h3>
                  <p className="text-gray-600 text-sm">{phase.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-navy mb-1">$2,500–$3,500</p>
                  <p className="text-gray-600">45-day engagement · Includes: strategic anchor report · alignment gap analysis · implementation roadmap · 2 stakeholder interviews</p>
                </div>
                <Button href="/contact">Start Here</Button>
              </div>
              <p className="text-gray-600 mt-4 italic text-sm">
                Most clients begin with the Strategic Anchor Framework before moving to a retainer relationship. Partnership pricing available for qualifying organizations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service 02 — Strategic Partnership Retainer */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <span className="text-teal font-bold text-lg">02</span>
              <div>
                <h2 className="text-4xl font-bold text-navy mb-2">Strategic Partnership Retainer</h2>
                <p className="text-xl text-gray-600 italic">For founders ready to build</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Ongoing fractional COO-level guidance combined with digital implementation. Strategy and execution in one relationship, one point of contact, one consistent partner who knows your organization as well as you do.
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-10">
              {[
                "Fractional COO guidance and strategic decision support",
                "Digital implementation aligned to your roadmap",
                "Monthly strategy sessions",
                "Quarterly reviews and roadmap refinement",
                "One relationship — strategy and execution together",
                "15–20 hours/month · Minimum 3-month commitment",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-navy mb-1">$3,000–$4,500/month</p>
                  <p className="text-gray-600">Monthly engagement · 15–20 hrs/month · Minimum 3-month commitment</p>
                </div>
                <Button href="/contact">Let's Talk</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 03 — Standalone Technology Projects */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-6 mb-8">
              <span className="text-teal font-bold text-lg">03</span>
              <div>
                <h2 className="text-4xl font-bold text-navy mb-2">Standalone Technology Projects</h2>
                <p className="text-xl text-gray-600 italic">For founders with a specific, defined need</p>
              </div>
            </div>

            <p className="text-gray-700 text-lg mb-8 leading-relaxed">
              Website design and development, workspace implementation, or digital infrastructure work scoped as a discrete project. A natural entry point for founders not yet ready for full strategic partnership.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                {
                  title: "Website Design & Development",
                  description: "Custom websites built to establish professional presence and support your mission from day one",
                },
                {
                  title: "Workspace Implementation",
                  description: "Google Workspace or Microsoft 365 setup, migration, and team onboarding",
                },
                {
                  title: "Digital Infrastructure",
                  description: "Domain management, email deliverability, security configuration, and technical troubleshooting",
                },
              ].map((item, i) => (
                <div key={i} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-lg font-bold text-navy mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div>
                  <p className="text-2xl font-bold text-navy mb-1">From $2,500</p>
                  <p className="text-gray-600">Scoped individually · Deliverable-based pricing</p>
                </div>
                <Button href="/contact">Get a Proposal</Button>
              </div>
              <p className="text-gray-600 mt-4 italic text-sm">
                Partnership pricing available for qualifying nonprofit organizations — contact us to discuss.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Summary Table */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-10 text-center">Investment Summary</h2>
            <div className="overflow-x-auto">
              <table className="w-full bg-white rounded-xl shadow-sm overflow-hidden">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="text-left p-5 font-semibold">Engagement</th>
                    <th className="text-left p-5 font-semibold">Investment</th>
                    <th className="text-left p-5 font-semibold">Includes</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    {
                      name: "Strategic Anchor Framework",
                      sub: "45-day engagement",
                      price: "$2,500–$3,500",
                      includes: "Strategic anchor report · Alignment gap analysis · Implementation roadmap · 2 stakeholder interviews",
                    },
                    {
                      name: "Strategic Partnership Retainer",
                      sub: "Monthly · 15–20 hrs",
                      price: "$3,000–$4,500/mo",
                      includes: "Fractional COO guidance · Digital implementation · Monthly strategy sessions · Quarterly reviews",
                    },
                    {
                      name: "Standalone Technology Project",
                      sub: "Scoped individually",
                      price: "From $2,500",
                      includes: "Website design/dev · Workspace setup · Digital infrastructure · Defined deliverables",
                    },
                  ].map((row, i) => (
                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                      <td className="p-5">
                        <p className="font-bold text-navy">{row.name}</p>
                        <p className="text-gray-500 text-sm">{row.sub}</p>
                      </td>
                      <td className="p-5 font-semibold text-navy">{row.price}</td>
                      <td className="p-5 text-gray-600 text-sm">{row.includes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-gray-600 text-center mt-6 italic">
              Most clients begin with the Strategic Anchor Framework before moving to a retainer relationship. Partnership pricing available for qualifying organizations — inquire directly.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to take the next step?</h2>
            <p className="text-xl text-gray-200 mb-8">
              Start with a discovery conversation. We'll spend 45 minutes understanding where you are, where you're going, and whether the Strategic Anchor Framework is the right next step.
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