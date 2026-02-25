import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="You built something real."
        subtitle="Now build the organization behind it."
        primaryCTA={{
          text: "Start the Conversation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "See How We Work",
          href: "/services"
        }}
      />

      {/* Positioning Statement */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-justify">
            <p className="text-xl text-gray-700 leading-relaxed mb-5">
              Most organizations don&apos;t fail because the vision was wrong. They fail because nobody built the infrastructure to carry it. The founder burns out holding everything together by instinct. The team moves in five directions. The digital presence says something different than what the organization actually does. And a mission that could have changed something quietly runs out of runway.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-5">
              We are in a moment that is asking a lot of Black founders and community-led organizations. Build something. Sustain it. Grow it. Do it without the networks, the capital access, or the institutional infrastructure that others take for granted.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed mb-5">
              Roseway Studio was built for this moment. We partner with founders who have launched something real and are ready to build the organization behind it &mdash; the decision-making frameworks, the operational clarity, the presence that tells the world exactly what you stand for and who you serve.
            </p>
            <p className="text-xl font-semibold text-navy leading-relaxed mb-4">
              One conviction: that the organizations doing the most important work deserve the same quality of infrastructure as anyone else.
            </p>
            <p className="text-xl font-semibold text-teal leading-relaxed">
              Detroit-rooted. Community-committed. Built for the work that actually needs to be done.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-navy text-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-justify">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Who We Serve</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              We work with founders and organization leaders who have vision and momentum but lack the operational infrastructure to match. Leaders who have already launched something real &mdash; a program, an organization, a mission &mdash; and are starting to feel the weight of running it without the systems, clarity, or presence to sustain it.
            </p>
            <p className="text-xl font-semibold text-teal leading-relaxed">
              If you are doing everything and not seeing your expected results, that is the conversation Roseway Studio was built for.
            </p>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-4 text-center">How We Work</h2>
            <p className="text-xl text-gray-600 text-justify mb-12">
              Every engagement begins with the Strategic Alignment Framework, a structured discovery process that surfaces the gap between where you are and where you&apos;re trying to go.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Business Architecture Audit",
                  description: "Understand your mission, operations, and alignment gaps — Days 1–10",
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mb-4" aria-hidden="true">
                      <rect x="8" y="6" width="32" height="36" rx="3" stroke="#2BB3C0" strokeWidth="2.5"/>
                      <line x1="15" y1="16" x2="33" y2="16" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="15" y1="23" x2="33" y2="23" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="15" y1="30" x2="25" y2="30" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round"/>
                      <circle cx="36" cy="36" r="7" fill="#0B1E3C"/>
                      <line x1="33" y1="36" x2="39" y2="36" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                      <line x1="36" y1="33" x2="36" y2="39" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  phase: "Phase 2",
                  title: "Alignment Framework",
                  description: "Build your decision-making framework and strategic guardrails — Days 11–30",
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mb-4" aria-hidden="true">
                      <circle cx="24" cy="24" r="16" stroke="#2BB3C0" strokeWidth="2.5"/>
                      <circle cx="24" cy="24" r="3" fill="#0B1E3C"/>
                      <line x1="24" y1="8" x2="24" y2="14" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="24" y1="34" x2="24" y2="40" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="8" y1="24" x2="14" y2="24" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="34" y1="24" x2="40" y2="24" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="24" y1="24" x2="24" y2="16" stroke="#0B1E3C" strokeWidth="2.5" strokeLinecap="round"/>
                      <line x1="24" y1="24" x2="30" y2="24" stroke="#0B1E3C" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ),
                },
                {
                  phase: "Phase 3",
                  title: "Implementation Roadmap",
                  description: "What to keep, eliminate, and change — with a clear path forward — Days 31–45",
                  icon: (
                    <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12 mb-4" aria-hidden="true">
                      <path d="M8 36 L8 20 L20 20 L20 28 L32 28 L32 14 L40 14" stroke="#2BB3C0" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <polyline points="34,10 40,14 34,18" fill="#2BB3C0" stroke="#2BB3C0" strokeWidth="1.5" strokeLinejoin="round"/>
                      <circle cx="8" cy="36" r="3" fill="#0B1E3C"/>
                      <circle cx="20" cy="20" r="3" fill="#0B1E3C"/>
                      <circle cx="32" cy="28" r="3" fill="#0B1E3C"/>
                      <circle cx="40" cy="14" r="3" fill="#0B1E3C"/>
                    </svg>
                  ),
                },
              ].map((phase, i) => (
                <div key={i} className="border-l-4 border-teal pl-6">
                  {phase.icon}
                  <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-1">{phase.phase}</p>
                  <h3 className="text-xl font-bold text-navy mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-justify mt-10 text-xl">
              After the Framework, most founders continue as ongoing strategic partners — with Roseway Studio providing fractional COO-level guidance alongside digital implementation. One relationship. One point of contact. Strategy and execution together.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-gray-100">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-10">
              <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-2">Strategic Partnership · Early-Stage Organization</p>
              <h2 className="text-3xl font-bold text-navy mb-6">A Safe Space for Men</h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                A founding team arrived with a powerful idea and nothing else: a safe, affirming space for men navigating mental health and personal development. They needed more than a website. They needed to become an organization.
              </p>

              <blockquote className="border-l-4 border-teal pl-6 mb-8 text-gray-700 text-lg leading-relaxed">
                &ldquo;Roseway Studio has been an invaluable partner to us. From collaboration on our strategic direction and implementation of our technical infrastructure to the custom design and development of our website. Through our ongoing partnership with Roseway, we have been able to establish a professional presence to support our mission to expand mental health awareness, education and resources for men in the Detroit, MI area and beyond.&rdquo;
              </blockquote>

              <div className="bg-gray-50 rounded-lg p-6 mb-8">
                <h3 className="text-lg font-bold text-navy mb-4">Within 90 days of launch:</h3>
                <div className="grid md:grid-cols-3 gap-4 text-center">
                  {[
                    { stat: "25%", label: "increase in memberships" },
                    { stat: "100%", label: "increase in volunteer engagement" },
                    { stat: "30%", label: "increase in one-time donations" },
                  ].map((item, i) => (
                    <div key={i}>
                      <p className="text-3xl font-bold text-teal mb-1">{item.stat}</p>
                      <p className="text-gray-600 text-sm">{item.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-bold text-navy mb-2">What We Delivered:</h3>
                <p className="text-gray-700">Mission and vision development · Strategic business planning · Web design and development · Ongoing strategic guidance and operational support</p>
              </div>

              <p className="text-navy font-semibold text-lg">
                They didn&apos;t need someone to build them a website. They needed a partner to help them become an organization. That&apos;s what Roseway Studio does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-white text-white section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-center mb-6 text-navy">
              Ready to build something that lasts?
            </h2>
            <p className="text-xl text-justify text-gray-700 mb-8">
              Start with a discovery conversation. We&apos;ll spend 45 minutes understanding where you are, where you&apos;re going, and whether the Strategic Alignment Framework is the right next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="primary">
                Start the Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}