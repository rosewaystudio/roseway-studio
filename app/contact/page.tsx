import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Roseway Studio',
  description: 'Get in touch with Roseway Studio. Schedule a consultation to discuss your organization\'s digital infrastructure needs.',
};

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-700">
              Ready to talk about your organization's digital needs? We'd love to hear from you.
            </p>
            <p className="text-lg text-gray-600 mt-4">
              Whether you have a specific project in mind or just want to explore possibilities, let's start a conversation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="section-padding bg-white">
        <div className="container-width">
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Send Us a Message</h2>
              
              <form 
                name="contact"
                method="POST"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
                className="space-y-6"
              >
                {/* Netlify form detection */}
                <input type="hidden" name="form-name" value="contact" />
                
                {/* Honeypot for spam protection */}
                <div className="hidden">
                  <label>
                    Don't fill this out if you're human: <input name="bot-field" />
                  </label>
                </div>

                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-navy font-semibold mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-navy font-semibold mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                {/* Organization Name */}
                <div>
                  <label htmlFor="organization" className="block text-navy font-semibold mb-2">
                    Organization Name *
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  />
                </div>

                {/* Organization Type */}
                <div>
                  <label htmlFor="organizationType" className="block text-navy font-semibold mb-2">
                    Organization Type
                  </label>
                  <select
                    id="organizationType"
                    name="organizationType"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent"
                  >
                    <option value="">Select one...</option>
                    <option value="nonprofit-501c3">Nonprofit 501(c)(3)</option>
                    <option value="social-enterprise">Social Enterprise</option>
                    <option value="for-profit-mission">For-Profit Mission-Driven</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Project Type */}
                <div>
                  <label className="block text-navy font-semibold mb-2">
                    Project Type (select all that apply)
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="projectType[]"
                        value="website"
                        className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                      />
                      <span className="text-gray-700">Website Design & Development</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="projectType[]"
                        value="workspace"
                        className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                      />
                      <span className="text-gray-700">Workspace Implementation</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="projectType[]"
                        value="infrastructure"
                        className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                      />
                      <span className="text-gray-700">Digital Infrastructure</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="projectType[]"
                        value="consultation"
                        className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                      />
                      <span className="text-gray-700">Not Sure - Need Consultation</span>
                    </label>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-navy font-semibold mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal focus:border-transparent resize-none"
                    placeholder="Tell us about your project, challenges, or questions..."
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="w-full bg-teal text-white px-8 py-4 rounded-lg font-semibold hover:bg-teal-dark transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Direct Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Prefer to Reach Out Directly?</h2>
              
              <div className="space-y-8">
                {/* Email */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Email</h3>
                  <a 
                    href="mailto:contact@rosewaystudio.com"
                    className="text-teal hover:text-teal-dark text-lg transition-colors"
                  >
                    contact@rosewaystudio.com
                  </a>
                </div>

                {/* Calendar Placeholder */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Schedule a Consultation</h3>
                  <p className="text-gray-600 mb-4">
                    Calendar scheduling coming soon. For now, please email to schedule a 30-minute consultation.
                  </p>
                  {/* TODO: Add Calendly or Google Calendar scheduling link here */}
                </div>

                {/* Phone Placeholder */}
                {/* 
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Phone</h3>
                  <p className="text-gray-700 text-lg">
                    [Phone number to be added]
                  </p>
                </div>
                */}

                {/* Location */}
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
                  <p className="text-gray-700">Detroit, MI</p>
                  <p className="text-gray-600">Serving nonprofits and mission-driven organizations nationally</p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="mt-12 bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">What to Expect</h3>
                <ol className="space-y-4">
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </span>
                    <div>
                      <p className="text-gray-700">We'll respond within 24 hours</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </span>
                    <div>
                      <p className="text-gray-700">Schedule a discovery call (usually 30-45 minutes)</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </span>
                    <div>
                      <p className="text-gray-700">Discuss your mission, challenges, and goals</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold">
                      4
                    </span>
                    <div>
                      <p className="text-gray-700">Recommend the right approach for your needs</p>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold">
                      5
                    </span>
                    <div>
                      <p className="text-gray-700">Provide a custom proposal with transparent pricing</p>
                    </div>
                  </li>
                </ol>
                <p className="text-gray-600 mt-6 italic">
                  No pressure, no sales tactics—just an honest conversation about whether we're the right fit for your organization.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}