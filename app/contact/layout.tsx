import { Metadata } from 'next';
export const metadata: Metadata = {
  title: 'Contact | Roseway Studio',
  description: 'Start a discovery conversation with Roseway Studio...',
};
export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}