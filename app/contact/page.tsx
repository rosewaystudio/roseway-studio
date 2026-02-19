import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | Roseway Studio',
  description: 'Start a discovery conversation with Roseway Studio. We\'ll spend 45 minutes understanding where you are, where you\'re going, and whether the Strategic Anchor Framework is the right next step.',
};

export default function ContactPage() {
  return (
    <>
      {/* Success Message */}
        {typeof window !== 'undefined' && new URLSearchParams(window.location.search).get('success') === 'true' && (
          <div className="bg-teal text-white py-4 text-center">
            <p className="text-lg font-semibold">Thank you! We'll be in touch within 24 hours.</p>
          </div>
        )}
      {/* Page Header */}
      <section className="bg-gray-50 py-16">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-navy mb-6">Start the Conversation</h1>
            <p className="text-xl text-gray-700">
              There's no agenda other than understanding where you are and where you're trying to go. If it feels like there's a fit, we'll talk about what that looks like. If not, we'll point you toward someone who might be a better match.
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
              <h2 className="text-3xl font-bold text-navy mb-6">Tell Us About Where You Are</h2>

              <form 
                action="https://api.web3forms.com/submit"
                method="POST"
                className="space-y-6"
              >
                {/* Web3Forms Access Key - REPLACE WITH YOUR ACTUAL KEY */}
                <input type="hidden" name="access_key" value={process.env.NEXT_PUBLIC_WEB3FORMS_KEY} />
                
                {/* Redirect after submission */}
                <input type="hidden" name="redirect" value="https://rosewaystudio.com/contact?success=true" />
                
                {/* Subject line for email */}
                <input type="hidden" name="subject" value="New Contact Form Submission from Roseway Studio Website" />
                
                {/* From name */}
                <input type="hidden" name="from_name" value="Roseway Studio Website" />

                {/* Honeypot for spam protection */}
                <input type="checkbox" name="botcheck" className="hidden" />

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
                        name="projectType"
                        value="Website Design & Development"
                        className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                      />
                      <span className="text-gray-700">Website Design & Development</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="projectType"
                        value="Workspace Implementation"
                        className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                      />
                      <span className="text-gray-700">Workspace Implementation</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="projectType"
                        value="Digital Infrastructure"
                        className="w-5 h-5 text-teal border-gray-300 rounded focus:ring-teal"
                      />
                      <span className="text-gray-700">Digital Infrastructure</span>
                    </label>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        name="projectType"
                        value="Not Sure - Need Consultation"
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

            {/* Direct Contact + What to Expect */}
            <div>
              <h2 className="text-3xl font-bold text-navy mb-6">Prefer to Reach Out Directly?</h2>

              <div className="space-y-8 mb-12">
                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Email</h3>
                  <a
                    href="mailto:contact@rosewaystudio.com"
                    className="text-teal hover:text-teal-dark text-lg transition-colors"
                  >
                    contact@rosewaystudio.com
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Phone</h3>
                  <a
                    href="tel:3132078786"
                    className="text-teal hover:text-teal-dark text-lg transition-colors"
                  >
                    (313) 207-8786
                  </a>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Location</h3>
                  <p className="text-gray-700">Detroit, MI</p>
                  <p className="text-gray-600">Serving founders and mission-driven organizations nationally</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-navy mb-2">Schedule a Discovery Call</h3>
                  <p className="text-gray-600">
                    Calendar scheduling coming soon. For now, please email or call to schedule your 45-minute discovery conversation.
                  </p>
                </div>
              </div>

              {/* What to Expect */}
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-navy mb-6">What to Expect</h3>
                <ol className="space-y-5">
                  {[
                    "We'll respond within 24 hours",
                    "Schedule a 45-minute discovery conversation",
                    "We'll listen to understand where you are, where you're going, and what's in the way",
                    "We'll share what we're hearing and recommend whether and how we can help",
                    "If there's a fit, we'll send you the Service Offering within 24 hours and propose a follow-up to discuss scope and timeline",
                  ].map((step, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="flex-shrink-0 w-8 h-8 bg-teal text-white rounded-full flex items-center justify-center font-bold text-sm">
                        {i + 1}
                      </span>
                      <p className="text-gray-700 mt-1">{step}</p>
                    </li>
                  ))}
                </ol>
                <p className="text-gray-600 mt-6 italic text-sm">
                  No pitch, no pressure — just an honest conversation about whether we're the right fit for where you're going.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}