import type { Metadata } from 'next';
import Link from 'next/link';
import LegalPage from '@/components/LegalPage';
import CookieSettingsButton from '@/components/CookieSettingsButton';

export const metadata: Metadata = {
  title: 'Privacy Policy | Roseway Studio',
  description: 'How Roseway Studio and Foundation Quest collect, use, and protect your information.',
  alternates: { canonical: 'https://rosewaystudio.com/privacy' },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      intro="This policy explains what information we collect when you use rosewaystudio.com or Foundation Quest, why we collect it, and the choices you have. We collect only what we need to respond to you and run our services, and we never sell your information."
    >
      <h2>Who we are</h2>
      <p>
        Roseway Studio is the business name of Velora LLC, a Michigan limited liability company based in Detroit (&ldquo;Roseway Studio,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;). This policy covers rosewaystudio.com and Foundation Quest, our free web app and its related workshops and sessions (together, the &ldquo;Sites&rdquo;).
      </p>

      <h2>What we collect</h2>
      <h3>Information you give us</h3>
      <ul>
        <li><strong>Contact form:</strong> your name, email, organization name, how you heard about us, your current situation, the kind of engagement you&apos;re exploring, your approximate budget, and anything you write in your message.</li>
        <li><strong>Readiness assessments:</strong> your first and last name, email, organization name, your answers, and the resulting score and readiness tier.</li>
        <li><strong>Foundation Quest waitlist:</strong> your first name, email, which paid options interest you, and what you sell.</li>
        <li><strong>Scheduling:</strong> if you book a call, the details you enter in our scheduling tool (Calendly).</li>
        <li><strong>Email and calls:</strong> anything you share when you write to us or talk with us.</li>
      </ul>
      <h3>The Foundation Quest app</h3>
      <p>
        In its current prototype version, the Foundation Quest app does not save or send the answers you enter. They stay in your browser and disappear when you leave or start over. If that changes, for example when we add the option to email you your foundation map, we&apos;ll update this policy before it goes live.
      </p>
      <h3>Information collected automatically</h3>
      <ul>
        <li><strong>Analytics cookies (only with your consent):</strong> on rosewaystudio.com we use HubSpot to understand which pages are visited and how people find us. HubSpot sets cookies only if you choose &ldquo;Accept&rdquo; in our cookie banner.</li>
        <li><strong>Server logs:</strong> our hosting provider (Vercel) automatically records basic technical information such as IP address, browser type, and the pages requested, to keep the Sites secure and working.</li>
        <li><strong>Your choices:</strong> we store your cookie choice in your browser so we don&apos;t ask on every visit.</li>
      </ul>

      <h2>How we use it</h2>
      <ul>
        <li>To reply to you and schedule conversations you ask for.</li>
        <li>To send you the assessment results, checklists, or waitlist updates you requested.</li>
        <li>To manage our relationship with clients and prospective clients.</li>
        <li>To understand how the Sites are used and improve them.</li>
        <li>To keep the Sites secure and meet legal obligations.</li>
      </ul>
      <p>
        If you join a waitlist or request a resource, we may send related follow-up emails. Every marketing email includes a way to unsubscribe, and you can also email us to stop.
      </p>

      <h2>Who we share it with</h2>
      <p>We don&apos;t sell or rent your information. We share it only with service providers that help us run the Sites, and only for that purpose:</p>
      <table>
        <thead>
          <tr><th>Provider</th><th>What it does for us</th></tr>
        </thead>
        <tbody>
          <tr><td>HubSpot</td><td>Customer records, assessment submissions, email, and (with consent) website analytics</td></tr>
          <tr><td>Web3Forms</td><td>Delivers contact and waitlist form submissions to our inbox</td></tr>
          <tr><td>Calendly</td><td>Scheduling for discovery calls and sessions</td></tr>
          <tr><td>Google Workspace</td><td>Our business email</td></tr>
          <tr><td>Vercel</td><td>Hosts the Sites</td></tr>
          <tr><td>Stripe</td><td>Will process payments when paid workshops and sessions launch; we never see or store full card numbers</td></tr>
        </tbody>
      </table>
      <p>
        Each provider handles information under its own privacy policy. We may also disclose information if required by law, to protect our rights or the safety of others, or as part of a sale or reorganization of the business.
      </p>

      <h2>Cookies</h2>
      <p>
        rosewaystudio.com uses HubSpot analytics cookies only after you accept them. If you decline, the Sites still work normally. You can change your choice at any time:
      </p>
      <p><CookieSettingsButton /></p>
      <p>The Foundation Quest site does not use analytics or advertising cookies.</p>

      <h2>How long we keep it</h2>
      <p>
        We keep contact and waitlist information while it&apos;s useful for the purpose you gave it to us, and client records as long as needed for the engagement and our legal, tax, and accounting obligations. You can ask us to delete your information at any time.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Ask what information we have about you, or ask us to correct or delete it.</li>
        <li>Unsubscribe from marketing emails using the link in any email.</li>
        <li>Decline or withdraw consent to analytics cookies.</li>
      </ul>
      <p>
        To make a request, email <a href="mailto:contact@rosewaystudio.com">contact@rosewaystudio.com</a>. We&apos;ll respond within 30 days.
      </p>

      <h2>Security</h2>
      <p>
        We use reputable providers and reasonable safeguards to protect your information. No website or email system is perfectly secure, so please don&apos;t send sensitive details such as Social Security numbers or bank account numbers through our forms.
      </p>

      <h2>Children</h2>
      <p>The Sites are intended for adults. We don&apos;t knowingly collect information from anyone under 18.</p>

      <h2>Changes to this policy</h2>
      <p>
        We&apos;ll update this page when our practices change and revise the &ldquo;Last updated&rdquo; date above. For significant changes, we&apos;ll give notice on the Sites.
      </p>

      <h2>Contact</h2>
      <p>
        Velora LLC, doing business as Roseway Studio<br />
        Detroit, Michigan<br />
        <a href="mailto:contact@rosewaystudio.com">contact@rosewaystudio.com</a> · (313) 207-8786
      </p>
      <p>
        See also our <Link href="/terms">Terms of Use</Link>.
      </p>
    </LegalPage>
  );
}
