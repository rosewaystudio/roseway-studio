import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Roseway Studio | Strategic Digital Infrastructure for Mission-Driven Organizations",
  description: "Detroit-based digital studio serving nonprofits and mission-driven organizations with custom websites, workspace implementation, and accessible digital infrastructure.",
  keywords: ["nonprofit web design", "digital infrastructure", "Google Workspace", "Microsoft 365", "accessible websites", "Detroit web development"],
  authors: [{ name: "Andrea Frazier" }],
  openGraph: {
    title: "Roseway Studio",
    description: "Strategic digital infrastructure for mission-driven organizations",
    type: "website",
    locale: "en_US",
    url: "https://rosewaystudio.com",
    siteName: "Roseway Studio",
  },
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