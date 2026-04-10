'use client';

import { useState } from 'react';
import Button from '@/components/Button';

const QUESTIONS = [
  {
    id: 'q1',
    section: 'Legal Foundation',
    text: 'Your business entity is formally registered with the State of Michigan.',
  },
  {
    id: 'q2',
    section: 'Financial Infrastructure',
    text: 'You have a dedicated business checking account — separate from all personal accounts.',
  },
  {
    id: 'q3',
    section: 'Business Planning',
    text: 'You have a documented business plan or operating thesis — mission, target market, service offerings, and revenue model.',
  },
  {
    id: 'q4',
    section: 'Business Planning',
    text: 'You have a clearly defined profile of your ideal client — who they are, what they need, and what makes them the right fit — documented, not just in your head.',
  },
  {
    id: 'q5',
    section: 'Legal Documents & Contracts',
    text: 'You have a client contract you use for every engagement without exception.',
  },
  {
    id: 'q6',
    section: 'Operational Systems',
    text: 'You have a CRM or contact tracking system that tells you where every prospect and client is in your pipeline.',
  },
  {
    id: 'q7',
    section: 'Identity & Presence',
    text: 'Your website clearly communicates what you do, who you serve, and how a potential client takes the next step — in 60 seconds or less.',
  },
];

const SCORE_OPTIONS = [
  { value: 0, label: '0', description: 'Solid / In place' },
  { value: 3, label: '3', description: 'Informal / Partial' },
  { value: 6, label: '6', description: 'Unclear / Scattered' },
  { value: 10, label: '10', description: 'Not in place' },
];

type Tier = 'ready' | 'building' | 'foundation';

function getTier(total: number): Tier {
  if (total <= 21) return 'ready';
  if (total <= 49) return 'building';
  return 'foundation';
}

const TIER_CONTENT = {
  ready: {
    label: 'Ready to Engage',
    color: 'text-teal',
    borderColor: 'border-teal',
    bgColor: 'bg-teal',
    headline: 'Your infrastructure is in order.',
    body: 'This is exactly where Roseway Studio\'s work begins — helping founders with strong infrastructure build the strategic alignment that makes every client conversation, partnership negotiation, and business decision more effective.',
    cta: true,
  },
  building: {
    label: 'Building Stage',
    color: 'text-navy',
    borderColor: 'border-navy',
    bgColor: 'bg-navy',
    headline: 'Your foundation is partially in place.',
    body: 'Meaningful gaps remain in areas clients and partners scrutinize. Your full assessment and companion checklist will show you exactly what to close and in what order. The infrastructure work you do now expands what becomes possible.',
    cta: false,
  },
  foundation: {
    label: 'Foundation Stage',
    color: 'text-gray-700',
    borderColor: 'border-gray-400',
    bgColor: 'bg-gray-600',
    headline: 'Significant infrastructure gaps exist.',
    body: 'These gaps will limit your ability to win and retain serious clients regardless of how strong your offering is. The work right now is not marketing or business development — it is building the organization that can deliver at the level you intend to charge for.',
    cta: false,
  },
};

type FormStatus = 'idle' | 'submitting' | 'submitted' | 'error';

export default function AssessBusinessPage() {
  const [scores, setScores] = useState<Record<string, number | null>>(
    Object.fromEntries(QUESTIONS.map((q) => [q.id, null]))
  );
  const [step, setStep] = useState<'assessment' | 'contact' | 'result'>('assessment');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [orgName, setOrgName] = useState('');
  const [formStatus, setFormStatus] = useState<FormStatus>('idle');
  const [tier, setTier] = useState<Tier | null>(null);
  const [totalScore, setTotalScore] = useState<number>(0);

  const allAnswered = QUESTIONS.every((q) => scores[q.id] !== null);
  const answered = QUESTIONS.filter((q) => scores[q.id] !== null).length;

  function handleScore(id: string, value: number) {
    setScores((prev) => ({ ...prev, [id]: value }));
  }

  function handleAssessmentNext() {
    const total = QUESTIONS.reduce((sum, q) => sum + (scores[q.id] ?? 0), 0);
    setTotalScore(total);
    setTier(getTier(total));
    setStep('contact');
  }

  async function handleContactSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!tier) return;
    setFormStatus('submitting');

    try {
      const portalId = '243240666';
      const formId = '78e89b77-5d79-436b-b092-912b659caa58';

      const body = {
        fields: [
          { name: 'firstname', value: firstName },
          { name: 'lastname', value: lastName },
          { name: 'email', value: email },
          { name: 'company', value: orgName },
          { name: 'readiness_tier', value: TIER_CONTENT[tier].label },
          { name: 'audience_type', value: 'For-Profit' },
          { name: 'assessment_score', value: String(totalScore) },
          { name: 'assessment_date', value: new Date().toISOString().split('T')[0] },
        ],
        context: {
          pageUri: 'https://rosewaystudio.com/assess/business',
          pageName: 'For-Profit Readiness Assessment',
        },
      };

      await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formId}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body),
        }
      );

      setFormStatus('submitted');
      setStep('result');
    } catch {
      setFormStatus('error');
    }
  }

  if (step === 'result' && tier) {
    const content = TIER_CONTENT[tier];
    return (
      <>
        {/* Result Hero */}
        <section className="bg-navy section-padding">
          <div className="container-width">
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-4">
                Your Readiness Assessment Result
              </p>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {content.label}
              </h1>
              <p className="text-gray-300 text-lg">
                Score: {totalScore} out of 70
              </p>
            </div>
          </div>
        </section>

        {/* Result Detail */}
        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-3xl mx-auto">
              <div className={`border-l-4 ${content.borderColor} pl-8 mb-10`}>
                <h2 className="text-2xl font-bold text-navy mb-4">
                  {content.headline}
                </h2>
                <p className="text-xl text-gray-700 leading-relaxed">
                  {content.body}
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 mb-10">
                <h3 className="text-lg font-bold text-navy mb-3">
                  What happens next
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Your full For-Profit Readiness Assessment and companion checklist are on their way to <span className="font-semibold">{email}</span>. The full assessment gives you a complete picture across all seven infrastructure areas — with specific, actionable guidance for every gap.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Work through it honestly. The score tells you where to focus, not whether the work is worth doing.
                </p>
              </div>

              {content.cta ? (
                <div className="text-center">
                  <p className="text-xl font-semibold text-navy mb-6">
                    Ready to build the organization behind the vision?
                  </p>
                  <Button
                    href="https://calendly.com/andrea-rosewaystudio/discovery_call"
                    variant="primary"
                  >
                    Schedule Your Discovery Call
                  </Button>
                </div>
              ) : (
                <div className="text-center">
                  <p className="text-gray-600 text-lg">
                    When you&apos;ve addressed your highest-priority gaps, this is the conversation Roseway Studio was built for.
                  </p>
                  <p className="mt-4">
                    <a
                      href="https://rosewaystudio.com"
                      className="text-teal font-semibold hover:underline"
                    >
                      rosewaystudio.com
                    </a>
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>
      </>
    );
  }

  if (step === 'contact') {
    return (
      <>
        <section className="bg-navy section-padding">
          <div className="container-width">
            <div className="max-w-2xl mx-auto text-center">
              <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-4">
                Assessment Complete
              </p>
              <h1 className="text-4xl font-bold text-white mb-4">
                Where should we send your results?
              </h1>
              <p className="text-gray-300 text-lg">
                Your tier result plus the full assessment and companion checklist — delivered to your inbox.
              </p>
            </div>
          </div>
        </section>

        <section className="section-padding bg-white">
          <div className="container-width">
            <div className="max-w-xl mx-auto">
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      required
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-navy mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      required
                      value={lastName}
                      onChange={(e) => setLastName(e.target.value)}
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-teal"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-teal"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-navy mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    required
                    value={orgName}
                    onChange={(e) => setOrgName(e.target.value)}
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-700 focus:outline-none focus:border-teal"
                  />
                </div>

                <p className="text-sm text-gray-500">
                  No pitch. No sales call. Your information is used only to deliver your results and the companion resources.
                </p>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-teal text-white py-4 rounded-lg font-semibold text-lg hover:bg-teal-dark transition-colors disabled:opacity-60"
                >
                  {formStatus === 'submitting' ? 'Sending...' : 'Get my results'}
                </button>

                {formStatus === 'error' && (
                  <p className="text-red-600 text-sm text-center">
                    Something went wrong. Please email{' '}
                    <a href="mailto:contact@rosewaystudio.com" className="underline">
                      contact@rosewaystudio.com
                    </a>{' '}
                    and we&apos;ll send your results directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      {/* Hero */}
      <section className="bg-navy section-padding">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-teal font-semibold text-sm uppercase tracking-wide mb-4">
              For-Profit · Business Readiness Assessment
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Is your business infrastructure ready for serious clients?
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed">
              Seven questions. Three minutes. A clear picture of where your business stands — and where to focus first.
            </p>
          </div>
        </div>
      </section>

      {/* What you get */}
      <section className="bg-white py-10 border-b border-gray-100">
        <div className="container-width">
          <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
            {[
              { label: 'Instant tier result', sub: 'See where you stand immediately' },
              { label: 'Full assessment', sub: 'Delivered to your inbox' },
              { label: 'No pitch', sub: 'Results first, conversation only if you want one' },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-teal pl-4 text-left">
                <p className="font-bold text-navy">{item.label}</p>
                <p className="text-gray-600 text-sm">{item.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Assessment */}
      <section className="section-padding bg-gray-50">
        <div className="container-width">
          <div className="max-w-3xl mx-auto">

            {/* Progress */}
            <div className="mb-10">
              <div className="flex justify-between text-sm text-gray-500 mb-2">
                <span>{answered} of {QUESTIONS.length} answered</span>
                <span>{Math.round((answered / QUESTIONS.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-teal h-1.5 rounded-full transition-all duration-300"
                  style={{ width: `${(answered / QUESTIONS.length) * 100}%` }}
                />
              </div>
            </div>

            {/* Score key */}
            <div className="bg-white rounded-xl border border-gray-200 p-5 mb-8">
              <p className="text-sm font-semibold text-navy mb-3">How to score each question:</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {SCORE_OPTIONS.map((opt) => (
                  <div key={opt.value} className="text-center">
                    <span className="block text-lg font-bold text-navy">{opt.label}</span>
                    <span className="text-xs text-gray-500">{opt.description}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Questions */}
            <div className="space-y-6">
              {QUESTIONS.map((q, i) => (
                <div
                  key={q.id}
                  className="bg-white rounded-xl border border-gray-200 p-6"
                >
                  <p className="text-teal font-semibold text-xs uppercase tracking-wide mb-2">
                    {q.section}
                  </p>
                  <p className="text-navy font-semibold text-lg mb-5 leading-snug">
                    {i + 1}. {q.text}
                  </p>
                  <div className="grid grid-cols-4 gap-3">
                    {SCORE_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => handleScore(q.id, opt.value)}
                        className={`py-3 rounded-lg border-2 font-bold text-lg transition-all ${
                          scores[q.id] === opt.value
                            ? 'border-teal bg-teal text-white'
                            : 'border-gray-200 text-navy hover:border-teal hover:text-teal'
                        }`}
                        aria-label={`Score ${opt.value} — ${opt.description}`}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Submit */}
            <div className="mt-10 text-center">
              {!allAnswered && (
                <p className="text-gray-500 text-sm mb-4">
                  Answer all {QUESTIONS.length} questions to see your results.
                </p>
              )}
              <button
                onClick={handleAssessmentNext}
                disabled={!allAnswered}
                className="bg-teal text-white px-12 py-4 rounded-lg font-semibold text-lg hover:bg-teal-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                See my results
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}