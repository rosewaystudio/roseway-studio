import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Refund & Cancellation Policy | Roseway Studio',
  description: 'Refund, cancellation, and rescheduling terms for Foundation Workshops, Foundation Sessions, and Roseway Studio engagements.',
  alternates: { canonical: 'https://rosewaystudio.com/refunds' },
};

export default function RefundsPage() {
  return (
    <LegalPage
      title="Refund & Cancellation Policy"
      intro="Plans change. Here's how cancellations, rescheduling, and refunds work for our paid offerings."
    >
      <h2>Free offerings</h2>
      <p>The Foundation Quest map, readiness assessments, and discovery calls are free, so no payment or refund applies.</p>

      <h2>Foundation Workshops (group)</h2>
      <ul>
        <li><strong>Cancel 3 or more days before the workshop:</strong> full refund.</li>
        <li><strong>Cancel less than 3 days before:</strong> no refund, but you can move your seat to a future workshop once, within 6 months.</li>
        <li><strong>Send someone in your place:</strong> you&apos;re welcome to transfer your seat to another person at any time. Just let us know their name and email.</li>
        <li><strong>No-shows:</strong> no refund or transfer.</li>
      </ul>

      <h2>Foundation Sessions (one on one)</h2>
      <ul>
        <li><strong>Cancel 2 or more days before your session:</strong> full refund.</li>
        <li><strong>Reschedule:</strong> free with at least 1 day&apos;s notice, using the link in your confirmation email.</li>
        <li><strong>Cancel or reschedule with less than 1 day&apos;s notice, or miss the session:</strong> the session fee isn&apos;t refunded.</li>
      </ul>

      <h2>If we cancel</h2>
      <p>
        If we cancel or can&apos;t deliver a workshop or session, you choose a full refund or a new date. Emergencies happen on both sides; if something serious keeps you from attending, email us and we&apos;ll work with you.
      </p>

      <h2>Consulting engagements</h2>
      <p>
        Strategic Alignment Framework engagements and ongoing partnerships are governed by the payment and cancellation terms in your signed agreement.
      </p>

      <h2>How to cancel or request a refund</h2>
      <p>
        Use the link in your booking confirmation, or email <a href="mailto:contact@rosewaystudio.com">contact@rosewaystudio.com</a> with your name and the date of your workshop or session. Approved refunds go back to your original payment method, usually within 5–10 business days.
      </p>
    </LegalPage>
  );
}
