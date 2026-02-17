import { Metadata } from 'next';
import Button from '@/components/Button';

export const metadata: Metadata = {
  title: 'About | Roseway Studio',
  description: 'Learn about Andrea Frazier and Roseway Studio - Detroit-based digital practice serving mission-driven organizations with strategic digital infrastructure.',
};

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">About Roseway Studio</h1>
            <p className="text-xl text-gray-700">
              Strategic digital infrastructure for organizations that believe technology should serve everyone
            </p>
          </div>
        </div>
      </section>

      {/* About Roseway Studio */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Roseway Studio is a Detroit-based digital practice serving mission-driven organizations that need professional technical infrastructure without requiring an in-house IT department.
              </p>
              <p className="text-gray-700 mb-6">
                Our name reflects dual guidance: the compass rose that shows direction, and the botanical rose family (Rosaceae) connected to our founder's heritage. Like a compass rose guides travelers to their destination, we guide organizations through digital complexity to strategic clarity.
              </p>
              <p className="text-gray-700">
                We help nonprofits, social enterprises, and mission-driven businesses align their technology with their purpose—building accessible, reliable digital infrastructure that serves everyone.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Andrea */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">Meet Andrea Frazier</h2>
            
            {/* Headshot */}
            <div className="flex justify-center mb-12">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-teal shadow-lg">
                    <img
                    src="/andrea-frazier.png"
                    alt="Andrea Frazier, Founder of Roseway Studio"
                    className="w-full h-full object-cover"
                    />
                </div>
            </div>

            <div className="prose prose-lg max-w-none"></div>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Andrea Frazier founded Roseway Studio to help mission-driven organizations align their technology with their purpose. With 20+ years of business operations experience and deep technical expertise, she bridges strategic thinking with hands-on execution.
              </p>
              <p className="text-gray-700 mb-6">
                An MBA and full-stack developer based in Detroit, Andrea believes technology should work for everyone—and builds accessible, mission-aligned digital infrastructure to prove it.
              </p>

              <h3 className="text-2xl font-bold text-navy mt-8 mb-4">Background:</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">20+ years of business operations and strategic program management</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">MBA, University of Detroit Mercy</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">BBA, University of Michigan</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Full-stack developer with expertise in modern web technologies</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Experienced in Google Workspace and Microsoft 365 implementation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-700">Member, Alpha Kappa Alpha Sorority, Incorporated</span>
                </li>
              </ul>

              <div className="bg-gray-100 rounded-lg p-8">
                <p className="text-gray-700 text-lg">
                  Andrea's approach combines executive-level strategic thinking with hands-on technical capability—a rare combination that allows Roseway Studio to both advise on what organizations should build and actually build it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-12 text-center">Our Values</h2>

            <div className="space-y-10">
              <div className="border-l-4 border-teal pl-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Technology for Everyone</h3>
                <p className="text-gray-700">
                  We believe accessible design is foundational, not optional. Every website we build meets WCAG 2.1 AA accessibility standards because your mission deserves technology that serves your entire community.
                </p>
              </div>

              <div className="border-l-4 border-teal pl-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Strategic Partnership</h3>
                <p className="text-gray-700">
                  We don't just execute—we think strategically about what you should build and why. Our goal is to be a trusted partner, not just a vendor.
                </p>
              </div>

              <div className="border-l-4 border-teal pl-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Transparent Pricing</h3>
                <p className="text-gray-700">
                  Mission-driven organizations operate on tight budgets. We provide clear, honest pricing and offer 50% nonprofit partnership rates because we believe in the work you do.
                </p>
              </div>

              <div className="border-l-4 border-teal pl-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Quality Over Speed</h3>
                <p className="text-gray-700">
                  We'd rather take the time to build something right than rush to ship something broken. Accessible, well-documented, maintainable infrastructure is worth the investment.
                </p>
              </div>

              <div className="border-l-4 border-teal pl-8">
                <h3 className="text-2xl font-bold text-navy mb-4">Detroit Roots, National Reach</h3>
                <p className="text-gray-700">
                  Based in Detroit and proud to serve our local community, we work with mission-driven organizations across the country who share our values.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Network Model */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-navy mb-8 text-center">
              How We Scale: Partner Network
            </h2>

            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-gray-700 mb-6">
                Roseway Studio works with a trusted network of specialized partners to deliver comprehensive solutions when your project requires expertise beyond our core services.
              </p>

              <div className="bg-white rounded-lg p-8 shadow-sm mb-8">
                <div className="grid md:grid-cols-3 gap-6 text-center">
                  <div>
                    <p className="text-gray-600 mb-2">Need brand strategy?</p>
                    <p className="font-semibold text-navy">We coordinate with experienced brand designers.</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Need content strategy?</p>
                    <p className="font-semibold text-navy">We work with mission-focused copywriters.</p>
                  </div>
                  <div>
                    <p className="text-gray-600 mb-2">Need digital marketing?</p>
                    <p className="font-semibold text-navy">We connect you with specialists who understand nonprofit audiences.</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6">
                This model allows us to stay focused on what we do best—strategic digital infrastructure—while ensuring you have access to expert specialists when you need them.
              </p>

              <div className="bg-teal bg-opacity-10 rounded-lg p-8 border-l-4 border-teal">
                <p className="text-lg text-navy font-semibold">
                  You get the benefit of a full-service studio with the quality of working directly with specialists.
                </p>
              </div>
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
              Whether you need a new website, workspace implementation, or strategic digital guidance, we'd love to talk about how Roseway Studio can support your mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button href="/contact" variant="primary">
                Schedule a Consultation
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