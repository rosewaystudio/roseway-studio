import type { Metadata } from 'next';
import BookGate from './BookGate';

export const metadata: Metadata = {
  title: 'Book a Discovery Call | Roseway Studio',
  description: 'Schedule a free 45-minute Discovery Call with Roseway Studio.',
  alternates: { canonical: 'https://rosewaystudio.com/book' },
};

export default function BookPage() {
  return (
    <>
      <section className="bg-navy py-14">
        <div className="container-width">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Book a Discovery Call</h1>
            <p className="text-xl text-white/90">
              A free 45-minute conversation about where you are, where you&apos;re going, and whether we&apos;re the
              right fit. No pitch, no pressure.
            </p>
          </div>
        </div>
      </section>
      <section className="section-padding bg-white">
        <div className="container-width">
          <BookGate />
        </div>
      </section>
    </>
  );
}
