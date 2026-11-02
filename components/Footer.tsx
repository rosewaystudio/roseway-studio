import Link from 'next/link';
import CookieSettingsButton from './CookieSettingsButton';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container-width py-12">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Left Column */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">Roseway Studio</h3>
            <p className="text-gray-300 mb-4">
              Operational strategy and digital infrastructure <br />
              from first idea to full organization
            </p>
            <p className="text-gray-400 text-sm">
              Detroit, MI • Serving Nationally
            </p>
          </div>

          {/* Right Column - Navigation */}
          <div className="flex flex-col md:items-end gap-4">
            <div className="flex flex-col md:flex-row gap-6">
              <Link 
                href="/services" 
                className="text-gray-300 hover:text-teal transition-colors"
              >
                Services
              </Link>
               <Link 
                href="/work" 
                className="text-gray-300 hover:text-teal transition-colors"
              >
                Work
              </Link>
              <Link 
                href="/about" 
                className="text-gray-300 hover:text-teal transition-colors"
              >
                About
              </Link>
              <Link 
                href="/foundation-quest" 
                className="text-gray-300 hover:text-teal transition-colors"
              >
                Foundation Quest
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-300 hover:text-teal transition-colors"
              >
                Contact
              </Link>
            </div>
            <a 
              href="mailto:contact@rosewaystudio.com"
              className="text-teal hover:text-teal-light transition-colors"
            >
              contact@rosewaystudio.com
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-4">
            <Link href="/privacy" className="hover:text-teal transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-teal transition-colors">Terms of Use</Link>
            <Link href="/refunds" className="hover:text-teal transition-colors">Refund &amp; Cancellation</Link>
            <Link href="/accessibility" className="hover:text-teal transition-colors">Accessibility</Link>
            <CookieSettingsButton className="hover:text-teal transition-colors" />
          </nav>
          <p>© {currentYear} Roseway Studio, a dba of Velora LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}