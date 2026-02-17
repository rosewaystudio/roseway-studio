import Hero from '@/components/Hero';
import ServiceCard from '@/components/ServiceCard';
import Button from '@/components/Button';

export default function Home() {
  const services = [
    {
      title: "Website Design & Development",
      description: "Custom, accessible websites built to serve your mission",
      features: [
        "Accessibility-first development (WCAG 2.1 AA)",
        "Mission-aligned design strategy",
        "Mobile-responsive architecture",
        "Content management & training"
      ],
      pricing: "$5,000–$15,000"
    },
    {
      title: "Workspace Implementation",
      description: "Google Workspace & Microsoft 365 setup for mission-driven teams",
      features: [
        "Platform consultation (Google vs. M365)",
        "Email & domain configuration",
        "Team training & documentation",
        "Security & compliance settings"
      ],
      pricing: "$2,000–$8,000"
    },
    {
      title: "Digital Infrastructure",
      description: "Technical foundation for organizations ready to grow",
      features: [
        "Domain management & DNS",
        "SSL certificates & security",
        "Email deliverability optimization",
        "Technical support & documentation"
      ],
      pricing: "Custom pricing"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Roseway Studio"
        subtitle="Strategic digital infrastructure for mission-driven organizations"
        primaryCTA={{
          text: "Schedule a Consultation",
          href: "/contact"
        }}
        secondaryCTA={{
          text: "View Our Services",
          href: "/services"
        }}
      />

      {/* Services Overview Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                features={service.features}
                pricing={service.pricing}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              *50% nonprofit partnership pricing available for qualifying organizations*
            </p>
            <Button href="/services">Learn More About Our Services</Button>
          </div>
        </div>
      </section>

      {/* Why Roseway Studio Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Left Column */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Technology Built for Everyone
              </h2>
              <p className="text-gray-700 mb-4">
                We believe accessible design isn't optional—it's foundational. Every site we build meets WCAG 2.1 AA accessibility standards, ensuring your technology serves your entire community.
              </p>
              <p className="text-gray-700">
                Unlike template-based agencies, we custom-code every website to meet accessibility requirements from day one—because mission-driven organizations deserve infrastructure that reflects their values.
              </p>
            </div>

            {/* Right Column */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">
                Strategic Partnership, Not Just Vendors
              </h2>
              <p className="text-gray-700 mb-4">
                Roseway Studio combines strategic thinking with hands-on technical expertise. We don't just build what you ask for—we help you understand what you should build and why.
              </p>
              <p className="text-gray-700">
                Based in Detroit and serving organizations nationally, we work as your strategic digital partner, coordinating expert specialists through our trusted network when your project needs it.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study Section */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="max-w-4xl mx-auto">
            <div className="border-l-4 border-teal pl-8 mb-12">
              <h2 className="text-3xl font-bold text-navy mb-8">
                Partnership Success: A Safe Space For Men
              </h2>

              {/* Testimonial */}
              <blockquote className="text-xl text-gray-700 italic mb-8 leading-relaxed">
                "Roseway Studio has been an invaluable partner to us. From collaboration on our strategic direction and implementation of our technical infrastructure to the custom design & development of our website. Through our ongoing partnership with Roseway, we have been able to establish a professional presence to support our mission to expand mental health awareness, education and resources for men in the Detroit, MI area and beyond."
              </blockquote>
              <p className="text-gray-600 font-medium mb-12">
                — A Safe Space For Men
              </p>

              {/* Results */}
              <div className="bg-gray-50 rounded-lg p-8 mb-8">
                <h3 className="text-xl font-bold text-navy mb-6">The Impact:</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg"><strong className="text-navy">25% increase</strong> in memberships</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg"><strong className="text-navy">100% increase</strong> in volunteer engagement</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-teal flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700 text-lg"><strong className="text-navy">30% increase</strong> in one-time donations</span>
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 italic">Within 90 days of website launch</p>
              </div>

              {/* What We Delivered */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-navy mb-4">What We Delivered:</h3>
                <p className="text-gray-700">
                  Strategic business planning • Custom website with donation integration • Google Workspace implementation • Ongoing support
                </p>
              </div>

              <div className="text-gray-600 mb-8">
                <p className="font-medium">Timeline:</p>
                <p>30-week engagement with iterative, ongoing development</p>
              </div>

              <Button href="/contact">See How We Can Help Your Organization</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-navy text-white section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 text-white">
              Ready to align your technology to advance your mission?
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Let's talk about how Roseway Studio can support your organization's strategic digital needs to realize your vision.
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