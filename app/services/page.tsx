import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'Services | Roseway Studio',
  description: 'Custom websites, workspace implementation, and digital infrastructure for mission-driven organizations. Transparent pricing with nonprofit partnership rates.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">Our Services</h1>
            <p className="text-xl text-gray-700">
              Roseway Studio provides strategic digital infrastructure for mission-driven organizations. Every service is custom-tailored to your needs, built with accessibility standards, and designed to advance your mission.
            </p>
          </div>
        </div>
      </section>

      {/* Website Design & Development */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-teal pl-8 mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Website Design & Development
              </h2>
              <p className="text-xl text-gray-600">
                Custom, accessible websites built to serve your mission
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                We build websites that work for everyone. Every Roseway Studio website is custom-coded (no templates), meets WCAG 2.1 AA accessibility standards, and is designed to support your organization's mission and community.
              </p>

              <h3 className="text-2xl font-bold text-navy mt-8 mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Accessibility-first development (WCAG 2.1 AA compliant)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mission-aligned design strategy and information architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Mobile-responsive, fast-loading architecture</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Content management system and training</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">SEO foundation and performance optimization</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Domain, hosting, and SSL setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">30-90 day post-launch support</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Technology Built for Everyone:</h3>
                <p className="text-gray-700">
                  Unlike template-based agencies that rely on pre-built themes, we custom-code every website to ensure proper accessibility implementation. This means screen reader compatibility, keyboard navigation, color contrast compliance, and semantic HTML structure—built in from day one, not bolted on later.
                </p>
              </div>

              <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8 mb-8">
                <p className="text-2xl font-bold text-navy mb-2">Investment: $5,000–$15,000</p>
                <p className="text-gray-700">
                  The range reflects project complexity—number of pages, custom functionality, integrations, content volume, and timeline. Every project includes accessibility compliance and mission-aligned strategy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Workspace Implementation */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-teal pl-8 mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Workspace Implementation
              </h2>
              <p className="text-xl text-gray-600">
                Google Workspace & Microsoft 365 setup for mission-driven teams
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                Whether you're migrating from outdated email systems or setting up your first professional workspace, we handle the technical complexity so you can focus on your mission.
              </p>

              <h3 className="text-2xl font-bold text-navy mt-8 mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Platform consultation (Google Workspace or Microsoft 365)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Custom domain email configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">User account setup and permissions management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Email migration from existing systems</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">File storage organization (Drive or OneDrive/SharePoint)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Security settings and compliance protocols</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Team training and comprehensive documentation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ongoing admin support options</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-navy mb-4">We Support Both Platforms:</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-bold text-navy mb-2">Google Workspace</h4>
                    <p className="text-gray-700">Best for organizations prioritizing simplicity, collaboration, and ease of use</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-navy mb-2">Microsoft 365</h4>
                    <p className="text-gray-700">Best for organizations needing enterprise features, advanced security, or legacy compatibility</p>
                  </div>
                </div>
                <p className="text-gray-600 mt-4 italic">
                  Not sure which is right for you? We'll help you decide based on your team's needs, budget, and technical context.
                </p>
              </div>

              <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8 mb-8">
                <p className="text-2xl font-bold text-navy mb-2">Investment: $2,000–$8,000</p>
                <p className="text-gray-700">
                  Pricing varies based on number of users, migration complexity, platform choice, and training needs. Simple setups start at the lower range; complex migrations with extensive training reach the higher end.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Digital Infrastructure */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-teal pl-8 mb-12">
              <h2 className="text-4xl font-bold text-navy mb-4">
                Digital Infrastructure
              </h2>
              <p className="text-xl text-gray-600">
                Technical foundation for organizations ready to grow
              </p>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-gray-700 mb-6">
                The invisible work that keeps your digital systems running smoothly. We handle domain management, security, email deliverability, and technical troubleshooting so you don't need an in-house IT department.
              </p>

              <h3 className="text-2xl font-bold text-navy mt-8 mb-4">What's Included:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Domain registration and DNS management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">SSL certificates and security configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Email deliverability optimization (SPF, DKIM, DMARC)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Technical troubleshooting and support</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">System documentation and knowledge transfer</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Ongoing maintenance and monitoring options</span>
                </li>
              </ul>

              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-bold text-navy mb-4">When You Need This:</h3>
                <p className="text-gray-700">
                  Digital infrastructure services are often bundled with website or workspace projects, but we also provide standalone support for organizations managing their own systems who need expert technical guidance.
                </p>
              </div>

              <div className="bg-teal bg-opacity-10 border-l-4 border-teal p-8 mb-8">
                <p className="text-2xl font-bold text-navy mb-2">Investment: Custom pricing</p>
                <p className="text-gray-700">
                  Infrastructure needs vary significantly by organization. We'll discuss your specific requirements and provide transparent pricing based on scope and ongoing support needs.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nonprofit Partnership Pricing */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white rounded-lg shadow-lg p-12">
              <h2 className="text-4xl font-bold text-navy mb-6">
                Nonprofit Partnership Pricing
              </h2>
              <p className="text-xl text-gray-700 mb-8">
                We believe mission-driven organizations deserve access to professional digital infrastructure without prohibitive costs.
              </p>
              <div className="bg-teal bg-opacity-10 rounded-lg p-8 mb-8">
                <p className="text-3xl font-bold text-navy mb-4">
                  50% Partnership Pricing
                </p>
                <p className="text-lg text-gray-700">
                  Qualifying nonprofit organizations receive 50% partnership pricing on all services.
                </p>
              </div>
              <p className="text-gray-600 mb-6">
                This isn't a discount—it's a partnership. We reduce our rates because we believe in the work you do and want to help you maximize your impact.
              </p>
              <p className="text-gray-700 font-medium mb-8">
                Eligibility: 501(c)(3) organizations, fiscal sponsorships, and mission-driven nonprofits
              </p>
              <Button href="/contact">Let's Discuss How We Can Support Your Organization</Button>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">How We Work</h2>
            
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-xl">
                    1
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Discovery Consultation</h3>
                  <p className="text-gray-700">
                    We start with a conversation about your mission, current challenges, and strategic goals. This helps us understand what you actually need—not just what you think you need.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-xl">
                    2
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Strategic Recommendation</h3>
                  <p className="text-gray-700">
                    Based on our discussion, we'll recommend the right services and approach for your organization. If we're not the right fit, we'll tell you honestly.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-xl">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Custom Proposal</h3>
                  <p className="text-gray-700">
                    Every project gets a tailored proposal with clear scope, timeline, deliverables, and transparent pricing. No surprises.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-xl">
                    4
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Collaborative Execution</h3>
                  <p className="text-gray-700">
                    We work closely with your team throughout the project, providing regular updates and incorporating your feedback. You're never left in the dark.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-xl">
                    5
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Training & Handoff</h3>
                  <p className="text-gray-700">
                    We don't just deliver and disappear. Every project includes training, documentation, and support to ensure your team can confidently manage what we've built.
                  </p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-teal text-white rounded-full flex items-center justify-center font-bold text-xl">
                    6
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-navy mb-2">Ongoing Partnership</h3>
                  <p className="text-gray-700">
                    Need ongoing support? We offer retainer options for maintenance, updates, and technical guidance as your organization grows.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center mt-12">
              <Button href="/contact">Schedule a Consultation</Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}