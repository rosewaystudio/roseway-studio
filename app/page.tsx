import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <Hero
        title="From Idea to Organization"
        subtitle="Strategic partnership for founders who are ready to build"
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
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-2xl text-navy font-semibold leading-relaxed mb-6">
              Most founders don't have a technology problem.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed">
              They have a <strong>presence, alignment, and communication problem.</strong> The right technology—built on a clear strategic foundation—is how you solve it.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-10 text-center">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                "Founders with vision and momentum but no operational infrastructure to match",
                "Post-idea, pre-functional leaders who are starting to realize vision alone won't get them there",
                "Organizations that feel disconnected from how they show up digitally",
                "Leaders who need a trusted partner, not another vendor",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-lg p-6 shadow-sm">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-4 text-center">How We Work</h2>
            <p className="text-xl text-gray-600 text-center mb-12">
              Every engagement begins with the Strategic Anchor Framework — a structured discovery process that surfaces the gap between where you are and where you're trying to go.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  phase: "Phase 1",
                  title: "Business Architecture Audit",
                  description: "Understand your mission, operations, and alignment gaps — Days 1–10",
                },
                {
                  phase: "Phase 2",
                  title: "Alignment Framework",
                  description: "Build your decision-making framework and strategic guardrails — Days 11–30",
                },
                {
                  phase: "Phase 3",
                  title: "Implementation Roadmap",
                  description: "What to keep, eliminate, and change — with a clear path forward — Days 31–45",
                },
              ].map((phase, i) => (
                <div key={i} className="border-l-4 border-teal pl-6">
                  <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-1">{phase.phase}</p>
                  <h3 className="text-xl font-bold text-navy mb-3">{phase.title}</h3>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-600 text-center mt-10 text-lg">
              After the Framework, most founders continue as ongoing strategic partners — with Roseway Studio providing fractional COO-level guidance alongside digital implementation. One relationship. One point of contact. Strategy and execution together.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-sm p-10">
              <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-2">Strategic Partnership · Early-Stage Organization</p>
              <h2 className="text-3xl font-bold text-navy mb-6">A Safe Space for Men</h2>

              <p className="text-gray-700 text-lg mb-6 leading-relaxed italic">
                A founding team arrived with a powerful idea and nothing else: a safe, affirming space for men navigating mental health and personal development. They needed more than a website. They needed to become an organization.
              </p>

              <blockquote className="border-l-4 border-teal pl-6 mb-8 text-gray-700 text-lg leading-relaxed">
                "Roseway Studio has been an invaluable partner to us. From collaboration on our strategic direction and implementation of our technical infrastructure to the custom design and development of our website. Through our ongoing partnership with Roseway, we have been able to establish a professional presence to support our mission to expand mental health awareness, education and resources for men in the Detroit, MI area and beyond."
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
                They didn't need someone to build them a website. They needed a partner to help them become an organization. That's what Roseway Studio does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-navy text-white section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to build something that lasts?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Start with a discovery conversation. We'll spend 45 minutes understanding where you are, where you're going, and whether the Strategic Anchor Framework is the right next step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="primary">
                Start the Conversation
              </Button>
              <a
                href="mailto:contact@roseway.com"
                className="text-white hover:text-teal transition-colors font-medium"
              >
                or email contact@roseway.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}