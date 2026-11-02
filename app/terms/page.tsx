import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Terms of Use | Roseway Studio',
  description: 'The terms that apply when you use rosewaystudio.com and Foundation Quest.',
  alternates: { canonical: 'https://rosewaystudio.com/terms' },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      intro="These terms apply when you use rosewaystudio.com or Foundation Quest. By using either one, you agree to them. If you don't agree, please don't use the Sites."
    >
      <h2>Who we are</h2>
      <p>
        The Sites are operated by Velora LLC, a Michigan limited liability company doing business as Roseway Studio (&ldquo;Roseway Studio,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). &ldquo;Sites&rdquo; means rosewaystudio.com and Foundation Quest, including the web app and its related pages, workshops, and sessions.
      </p>

      <h2>General information, not professional advice</h2>
      <p>
        Content on the Sites, including Foundation Quest, the readiness assessments, checklists, and articles, is general educational information. It is <strong>not legal, tax, accounting, insurance, or financial advice</strong>, and it may not reflect the rules that apply to your situation. Laws and requirements change, and some Foundation Quest items are still being checked against official sources and are marked &ldquo;Draft.&rdquo;
      </p>
      <p>
        Before you act, confirm the details with a licensed professional, such as a Michigan attorney, CPA, or insurance broker. Using the Sites, attending a workshop or session, or contacting us does not create an attorney-client, accountant-client, or any other professional relationship.
      </p>

      <h2>Foundation Quest is a prototype</h2>
      <p>
        Foundation Quest is an early version offered free for testing and learning. It may change, have errors, or be unavailable at times, and we may add, change, or remove features without notice.
      </p>

      <h2>Paid services</h2>
      <p>
        Foundation Workshops, Foundation Sessions, and consulting engagements are subject to the description and price shown when you book, and to our <Link href="/refunds">Refund &amp; Cancellation Policy</Link>. Consulting engagements such as the Strategic Alignment Framework are governed by a separate signed agreement; if that agreement conflicts with these terms, the agreement controls.
      </p>

      <h2>Using the Sites</h2>
      <p>You agree not to:</p>
      <ul>
        <li>use the Sites for anything unlawful, or in a way that could harm us or others;</li>
        <li>try to gain unauthorized access to the Sites or their systems, or disrupt them;</li>
        <li>submit false information, spam, or someone else&apos;s information without permission;</li>
        <li>copy, resell, or republish substantial parts of the Sites&apos; content or tools without our written permission.</li>
      </ul>

      <h2>Our content</h2>
      <p>
        The Sites&apos; text, design, graphics, logos, assessments, checklists, and the Foundation Quest app belong to Roseway Studio or our licensors and are protected by copyright and trademark law. You may view and print pages and use your own results for your personal or business planning. &ldquo;Roseway Studio&rdquo; and &ldquo;Foundation Quest&rdquo; are our names, and you may not use them in a way that suggests we endorse you.
      </p>

      <h2>What you send us</h2>
      <p>
        You keep ownership of what you submit. You give us permission to use it to respond to you and provide our services, as described in our <Link href="/privacy">Privacy Policy</Link>. If you send us feedback or suggestions, we may use them without obligation to you.
      </p>

      <h2>Other websites</h2>
      <p>
        The Sites link to other websites, such as government agencies, Calendly, and partners. We don&apos;t control those sites and aren&apos;t responsible for their content or practices.
      </p>

      <h2>No warranties</h2>
      <p>
        The Sites and their content are provided &ldquo;as is&rdquo; and &ldquo;as available,&rdquo; without warranties of any kind, express or implied, including warranties of accuracy, completeness, fitness for a particular purpose, and non-infringement, to the fullest extent the law allows.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        To the fullest extent the law allows, Roseway Studio and Velora LLC are not liable for any indirect, incidental, special, consequential, or punitive damages, or for lost profits, revenue, or data, arising from your use of the Sites or reliance on their content. Our total liability for any claim related to the Sites is limited to the amount you paid us for the specific service the claim relates to in the 12 months before it arose, or $100 if you paid nothing.
      </p>

      <h2>Indemnity</h2>
      <p>
        If you misuse the Sites or break these terms and that leads to a claim against us, you agree to cover our reasonable losses and costs related to that claim.
      </p>

      <h2>Governing law</h2>
      <p>
        These terms are governed by the laws of the State of Michigan, without regard to its conflict-of-law rules. Any dispute will be resolved in the state or federal courts located in Wayne County, Michigan, and you agree to their jurisdiction.
      </p>

      <h2>Changes</h2>
      <p>
        We may update these terms. When we do, we&apos;ll revise the &ldquo;Last updated&rdquo; date above. Continuing to use the Sites after a change means you accept the updated terms.
      </p>

      <h2>Contact</h2>
      <p>
        Velora LLC, doing business as Roseway Studio · Detroit, Michigan<br />
        <a href="mailto:contact@rosewaystudio.com">contact@rosewaystudio.com</a> · (313) 207-8786
      </p>
    </LegalPage>
  );
}
