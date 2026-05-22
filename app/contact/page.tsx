import { Metadata } from 'next';
import { useState } from 'react';
import ContactForm from './ContactForm';

export const metadata: Metadata = {
  title: 'Contact | Roseway Studio',
  description: 'Start a discovery conversation with Roseway Studio. 45 minutes to understand where you are, where you\'re going, and whether the Strategic Alignment Framework is the right next step.',
  alternates: {
    canonical: 'https://rosewaystudio.com/contact',
  },
  openGraph: {
    title: 'Contact | Roseway Studio',
    description: 'Start a discovery conversation with Roseway Studio — 45 minutes, no sales pitch, just a diagnostic conversation.',
    url: 'https://rosewaystudio.com/contact',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact | Roseway Studio',
    description: 'Start a discovery conversation with Roseway Studio.',
  },
}

export default function ContactPage() {
  return <ContactForm />
}

