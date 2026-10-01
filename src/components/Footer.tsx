import React from 'react';
import { MapPin, Phone, Heart, ShieldCheck, ArrowUp } from 'lucide-react';
import { Logo } from './Logo';
import { Newsletter } from './Newsletter';
import { ORGANIZATION_DATA } from '../data/organizationData';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-950 text-slate-300 pt-16 pb-12 border-t border-blue-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Join Our Newsletter Component */}
        <div className="mb-14">
          <Newsletter />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-900/80">
          
          {/* Brand info (5 cols) */}
          <div className="lg:col-span-5">
            <div className="bg-white/95 rounded-xl p-3 inline-block shadow-sm mb-4">
              <Logo size="md" />
            </div>
            <p className="text-amber-300 font-semibold text-base mb-3 italic">
              "{ORGANIZATION_DATA.tagline}"
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-md">
              A community-centered non-profit welfare organization dedicated to serving the general public, providing medical aid, food assistance, education, and humanitarian relief in Lahore, Pakistan.
            </p>

            <div className="mt-5 flex items-center gap-2 text-xs text-emerald-400">
              <ShieldCheck className="w-4 h-4" />
              <span>Dignified Humanitarian Service & Support</span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-blue-800 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about-us')}
                  className="hover:text-amber-300 transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('programs')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Our Programs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('gallery')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faq')}
                  className="hover:text-amber-300 transition-colors"
                >
                  FAQ
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-amber-300 transition-colors"
                >
                  Contact Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('donate')}
                  className="text-emerald-400 font-bold hover:text-emerald-300 transition-colors"
                >
                  Donate Us
                </button>
              </li>
            </ul>
          </div>

          {/* Contact & Donation Methods (4 cols) */}
          <div className="lg:col-span-4">
            <h4 className="text-white font-bold text-sm uppercase tracking-wider mb-4 border-b border-blue-800 pb-2">
              Organization Contact
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{ORGANIZATION_DATA.address.fullAddress}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={ORGANIZATION_DATA.contact.telLink}
                  className="text-amber-300 hover:underline font-mono text-sm"
                >
                  {ORGANIZATION_DATA.contact.phoneFormatted}
                </a>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-blue-900">
              <span className="text-xs uppercase font-bold text-slate-400 tracking-wider block mb-2">
                Accepted Donation Methods:
              </span>
              <div className="flex flex-wrap gap-2 text-xs font-semibold">
                <span className="bg-rose-950/80 text-rose-300 border border-rose-800 px-2.5 py-1 rounded">
                  JazzCash
                </span>
                <span className="bg-emerald-950/80 text-emerald-300 border border-emerald-800 px-2.5 py-1 rounded">
                  EasyPaisa
                </span>
                <span className="bg-blue-900/80 text-blue-200 border border-blue-800 px-2.5 py-1 rounded">
                  Bank Transfer
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {currentYear} Tahir Anthony Welfare Organization. All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Lahore, Pakistan</span>
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors bg-blue-900 hover:bg-blue-800 px-3 py-1.5 rounded-lg"
              aria-label="Scroll back to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
