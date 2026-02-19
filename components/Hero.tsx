import Button from './Button';
import Image from 'next/image';

interface HeroProps {
  title: string;
  subtitle: string;
  primaryCTA?: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  showCompassRose?: boolean;
}

export default function Hero({ 
  title, 
  subtitle, 
  primaryCTA, 
  secondaryCTA,
  showCompassRose = true 
}: HeroProps) {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-navy text-white overflow-hidden">
        {/* Teal compass rose SVG outline — centered, low opacity */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" aria-hidden="true">
          <svg
            viewBox="0 0 400 400"
            fill="none"
            className="w-[520px] h-[520px] opacity-10"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Outer circle */}
            <circle cx="200" cy="200" r="180" stroke="#2BB3C0" strokeWidth="2"/>
            {/* Inner circle */}
            <circle cx="200" cy="200" r="120" stroke="#2BB3C0" strokeWidth="1.5" strokeDasharray="6 6"/>
            {/* Center circle */}
            <circle cx="200" cy="200" r="12" stroke="#2BB3C0" strokeWidth="2"/>
            <circle cx="200" cy="200" r="4" fill="#2BB3C0"/>
            {/* Cardinal points — N, S, E, W long spikes */}
            <polygon points="200,20 192,185 208,185" fill="#2BB3C0"/>
            <polygon points="200,380 192,215 208,215" fill="#2BB3C0"/>
            <polygon points="20,200 185,192 185,208" fill="#2BB3C0"/>
            <polygon points="380,200 215,192 215,208" fill="#2BB3C0"/>
            {/* Intercardinal points — NE, NW, SE, SW shorter spikes */}
            <polygon points="327,73 209,191 218,200" fill="#2BB3C0" opacity="0.7"/>
            <polygon points="73,73 191,191 200,182" fill="#2BB3C0" opacity="0.7"/>
            <polygon points="327,327 209,209 200,218" fill="#2BB3C0" opacity="0.7"/>
            <polygon points="73,327 191,209 182,200" fill="#2BB3C0" opacity="0.7"/>
            {/* Tick marks at cardinal ring */}
            <line x1="200" y1="18" x2="200" y2="30" stroke="#2BB3C0" strokeWidth="2"/>
            <line x1="200" y1="370" x2="200" y2="382" stroke="#2BB3C0" strokeWidth="2"/>
            <line x1="18" y1="200" x2="30" y2="200" stroke="#2BB3C0" strokeWidth="2"/>
            <line x1="370" y1="200" x2="382" y2="200" stroke="#2BB3C0" strokeWidth="2"/>
          </svg>
        </div>

      {/* Content */}
      <div className="relative container-width py-24 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white text-balance">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-10 text-balance">
            {subtitle}
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {primaryCTA && (
              <Button href={primaryCTA.href} variant="primary">
                {primaryCTA.text}
              </Button>
            )}
            {secondaryCTA && (
              <a 
                href={secondaryCTA.href}
                className="text-white hover:text-teal transition-colors font-medium flex items-center gap-2"
              >
                {secondaryCTA.text}
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            )}
          </div>
        </div>
      </div>
      </section>
    </>
  );
}