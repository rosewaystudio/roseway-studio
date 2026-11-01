import type { Metadata } from 'next';
import LegalPage from '@/components/LegalPage';

export const metadata: Metadata = {
  title: 'Accessibility | Roseway Studio',
  description: 'Roseway Studio’s commitment to making rosewaystudio.com and Foundation Quest usable for everyone.',
  alternates: { canonical: 'https://rosewaystudio.com/accessibility' },
};

export default function AccessibilityPage() {
  return (
    <LegalPage
      title="Accessibility"
      intro="We want everyone to be able to use rosewaystudio.com and Foundation Quest, including people who use screen readers, keyboard navigation, magnification, or other assistive technology."
    >
      <h2>Our goal</h2>
      <p>
        We aim to meet the Web Content Accessibility Guidelines (WCAG) 2.1 at Level AA. That means clear headings and labels, enough color contrast, text alternatives for meaningful images, and pages that work with a keyboard alone.
      </p>

      <h2>Where we are</h2>
      <p>
        We build with accessibility in mind and keep improving as we go. Some parts may not fully meet the standard yet, especially pages and tools that are still in prototype. Content from other services we link to, such as our scheduling tool, follows those providers&apos; own accessibility practices.
      </p>

      <h2>Tell us about a problem</h2>
      <p>
        If something on the Sites is hard to use, or you need information in another format, please let us know. Tell us the page and what happened, and we&apos;ll respond within 5 business days and work with you on a fix or another way to get what you need.
      </p>
      <p>
        <a href="mailto:contact@rosewaystudio.com">contact@rosewaystudio.com</a> · (313) 207-8786
      </p>
      <p>
        We&apos;re also happy to make accommodations for workshops and sessions, such as captions, materials in advance, or extra time. Just ask when you book.
      </p>
    </LegalPage>
  );
}
