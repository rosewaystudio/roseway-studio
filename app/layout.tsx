import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roseway Studio | From Idea to Organization",
  description: "Detroit-based strategic consulting firm helping founders build the organizational infrastructure to execute their vision. Fractional COO guidance, strategic alignment, and digital infrastructure.",
  keywords: ["fractional COO", "strategic consulting", "organizational infrastructure", "strategic alignment", "Detroit consulting", "founder strategy", "digital infrastructure", "nonprofit strategy"],
  authors: [{ name: "Andrea Frazier" }],
  openGraph: {
    title: "Roseway Studio | From Idea to Organization",
    description: "Helping founders build the organization behind the vision — strategic alignment, fractional COO guidance, and digital infrastructure.",
    type: "website",
    locale: "en_US",
    url: "https://rosewaystudio.com",
    siteName: "Roseway Studio",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180' },
    ],
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}