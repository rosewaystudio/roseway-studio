import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Our Work | Roseway Studio',
  description: 'Case studies from Roseway Studio — strategic partnership, fractional COO engagements, and digital infrastructure for mission-driven founders and organizations.',
};

export default function WorkPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">Our Work</h1>
            <p className="text-xl text-gray-700">
              Every engagement is different. What stays constant is the approach: understand the mission, surface the gaps, build the infrastructure that closes them.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study 01 — A Safe Space for Men */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-teal text-sm font-semibold uppercase tracking-wide mb-2">Strategic Partnership · Early-Stage Organization</p>
              <h2 className="text-4xl font-bold text-navy mb-4">A Safe Space for Men</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A founding team arrived with a powerful idea and nothing else: a safe, affirming space for men navigating mental health and personal development. They needed more than a website. They needed to become an organization.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">The Situation</h3>
              <p className="text-gray-700 leading-relaxed">
                The founding team had deep conviction and community relationships — but no organizational infrastructure to build on. No documented mission or vision. No strategic plan. No digital presence. No operational systems. They were functioning on belief alone, and belief alone doesn't scale.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">What We Delivered</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Mission and vision statements that grounded the organization's identity",
                  "Strategic business plan to guide early decisions and resource allocation",
                  "Web design and development that established professional presence from day one",
                  "Ongoing strategic guidance and operational support",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal bg-opacity-10 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-navy mb-6">Within 90 Days of Launch</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                {[
                  { stat: "25%", label: "increase in memberships" },
                  { stat: "100%", label: "increase in volunteer engagement" },
                  { stat: "30%", label: "increase in one-time donations" },
                ].map((item, i) => (
                  <div key={i}>
                    <p className="text-4xl font-bold text-teal mb-1">{item.stat}</p>
                    <p className="text-gray-600 text-sm">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="border-l-4 border-teal pl-6 mb-4">
              <p className="text-gray-700 text-lg leading-relaxed italic mb-3">
                "Roseway Studio has been an invaluable partner to us. From collaboration on our strategic direction and implementation of our technical infrastructure to the custom design and development of our website. Through our ongoing partnership with Roseway, we have been able to establish a professional presence to support our mission to expand mental health awareness, education and resources for men in the Detroit, MI area and beyond."
              </p>
              <cite className="text-gray-500 text-sm font-medium not-italic">— A Safe Space for Men</cite>
            </blockquote>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-navy font-semibold text-lg">
                They didn't need someone to build them a website. They needed a partner to help them become an organization. That's what Roseway Studio does.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 02 — SafetyZone */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-teal text-sm font-semibold uppercase tracking-wide mb-2">Digital Infrastructure · Early-Stage Organization</p>
              <h2 className="text-4xl font-bold text-navy mb-4">SafetyZone Behavioral Health Urgent Care</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                SafetyZone was preparing to launch with critical digital infrastructure gaps that would have undermined their credibility and operations from day one.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">The Situation</h3>
              <p className="text-gray-700 leading-relaxed">
                A behavioral health urgent care organization preparing for launch had a significant problem: their communication infrastructure wasn't ready. With a 14-user team operating across fragmented systems, they faced the prospect of opening their doors without reliable, professional-grade email and collaboration tools — a credibility and operational risk they couldn't afford in a field where trust is everything.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">What We Delivered</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Migrated 14-user email environment from Microsoft 365 to Google Workspace",
                  "Established reliable, scalable communication infrastructure ahead of launch",
                  "Configured security settings and user permissions across the organization",
                  "Ongoing website maintenance partnership to support long-term operational stability",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-navy font-semibold text-lg">
                A behavioral health organization that can't reliably communicate isn't just inefficient — it's a barrier to the people it exists to serve. Infrastructure is mission-critical.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 03 — Building Better Men */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <p className="text-teal text-sm font-semibold uppercase tracking-wide mb-2">Digital Infrastructure · Established Organization</p>
              <h2 className="text-4xl font-bold text-navy mb-4">Building Better Men</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Building Better Men came to Roseway Studio with two silent liabilities: non-functional email accounts and a website with active security vulnerabilities — both quietly eroding trust with every person who tried to reach them.
              </p>
            </div>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">The Situation</h3>
              <p className="text-gray-700 leading-relaxed">
                An established organization doing meaningful work had a problem it didn't fully see: broken infrastructure was actively undermining its credibility. Email accounts weren't functioning. The website carried security vulnerabilities. Every person who tried to reach them and couldn't — or who landed on an unsecured site — experienced a gap between the organization's mission and its reality. The damage was invisible until someone looked for it.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">What We Delivered</h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "Restored Microsoft 365 email functionality across the organization",
                  "Identified and resolved active website security vulnerabilities",
                  "Returned the organization to a stable, trustworthy digital presence",
                  "Documentation to support ongoing maintenance and prevent recurrence",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-gray-50 rounded-lg p-4">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-navy font-semibold text-lg">
                They weren't looking for a rebrand. They needed someone to fix what was broken so their mission could move forward unobstructed.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study 04 — Soulivity */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="flex items-center gap-3 mb-3">
                <p className="text-teal text-sm font-semibold uppercase tracking-wide">Strategic Anchor Framework · Engagement in Progress</p>
                <span className="bg-teal bg-opacity-10 text-teal text-xs font-semibold px-3 py-1 rounded-full">Phase 1 Complete</span>
              </div>
              <h2 className="text-4xl font-bold text-navy mb-4">Soulivity</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                A digital media platform with real content assets, a growing audience, and plans to launch video syndication — but no strategic anchor holding it together. The Business Architecture Audit revealed that the problem wasn't content or technology. It was clarity.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">The Situation</h3>
              <p className="text-gray-700 leading-relaxed mb-4">
                Soulivity came to Roseway Studio with momentum and ambition: an established digital magazine, a radio show, a community platform, a merchandise shop, and plans to add video syndication. The founder knew something wasn't clicking — audience engagement wasn't growing the way the content volume suggested it should — but the diagnosis wasn't clear.
              </p>
              <p className="text-gray-700 leading-relaxed">
                The Phase 1 Business Architecture Audit revealed a more fundamental problem. Soulivity wasn't operating as one platform. It was operating as four separate products — magazine, radio show, community hub, and shop — each on different platforms, with no shared architecture connecting them. Every user who arrived had to figure out on their own what Soulivity actually was. Most left without finding out.
              </p>
            </div>

            <div className="mb-8">
              <h3 className="text-xl font-bold text-navy mb-4">What Phase 1 Surfaced</h3>
              <div className="space-y-4">
                {[
                  {
                    flag: "Three disconnected user experiences",
                    detail: "The magazine, Community Hub, and Shop exist on separate platforms with no architecture connecting them. Users can't flow between products — they have to leave and find their way back.",
                  },
                  {
                    flag: "Anchor content buried under filler content",
                    detail: "Soulivity has genuinely distinctive content — long-form columns from credentialed experts, an original health equity video series, exclusive artist interviews. But it has no content hierarchy, so this material competes for attention with generic 2-minute listicles. The most valuable content is invisible.",
                  },
                  {
                    flag: "Navigation that doesn't reflect a user journey",
                    detail: "\"Culture\" and \"Lifestyle\" categories overlap significantly, making content discovery unpredictable. Users can't develop browsing patterns when the architecture doesn't hold consistent logic.",
                  },
                  {
                    flag: "Video syndication without a foundation to syndicate from",
                    detail: "The planned video expansion makes strategic sense — the content and interview subjects are already there. But syndicating to a wider audience without a coherent anchor would distribute the confusion, not the brand.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-lg p-5">
                    <svg className="w-5 h-5 text-teal flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-semibold text-navy mb-1">{item.flag}</p>
                      <p className="text-gray-600 text-sm">{item.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8 mb-8">
              <h3 className="text-xl font-bold text-navy mb-3">The Core Finding</h3>
              <p className="text-gray-700 leading-relaxed">
                Soulivity's mission — to inspire people to live with passion, purpose, and high quality living — is clear to the founder. But it hasn't been translated into architecture. The platform's structure doesn't guide users toward that mission; it asks them to figure it out on their own. Phase 1 gave the founder a name for what was wrong and a picture of what resolving it would require. Phases 2 and 3 will build the framework and roadmap to close that gap before the video syndication launch.
              </p>
            </div>

            <div className="mt-8 pt-8 border-t border-gray-200">
              <p className="text-navy font-semibold text-lg">
                They didn't have a content problem or a technology problem. They had an anchor problem — and they needed someone to surface it before investing further in growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-white">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">Ready to build something that lasts?</h2>
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