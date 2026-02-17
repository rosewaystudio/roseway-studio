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
    <section className="relative bg-navy text-white overflow-hidden">
      {/* Compass Rose Background */}
      {showCompassRose && (
        <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
          <Image
            src="/compass-rose.png"
            alt=""
            width={800}
            height={800}
            className="object-contain"
            priority
          />
        </div>
      )}

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
  );
}