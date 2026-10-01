import React from 'react';
import { Heart, ArrowRight, ShieldCheck, MapPin, Phone, Upload, CheckCircle2 } from 'lucide-react';
import { ORGANIZATION_DATA } from '../data/organizationData';
import { useImageContext } from '../context/ImageContext';

interface HeroProps {
  onExplorePrograms: () => void;
  onDonateNow: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExplorePrograms, onDonateNow }) => {
  const { heroPhoto, openAdminModalForSlot } = useImageContext();

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-950 via-blue-900 to-slate-900 text-white pt-12 pb-16 lg:pt-20 lg:pb-24">
      {/* Subtle background decorative motifs (no fake AI pictures) */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="humanitarian-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#humanitarian-grid)" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Heading, Subheading & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Humanitarian unboxed tag */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-emerald-400 mb-4">
              <span>Non-Profit Community Initiative</span>
              <span aria-hidden="true">·</span>
              <span>Lahore, Pakistan</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-sans">
              Serving Humanity, <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-amber-300">
                Changing Lives
              </span>
            </h1>

            {/* Subheadline */}
            <p className="mt-5 text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal">
              {ORGANIZATION_DATA.name} is committed to serving communities, supporting vulnerable families, providing healthcare assistance, promoting education and skills development, and working for the welfare and uplift of humanity.
            </p>

            {/* Call to Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={onDonateNow}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-bold text-base px-8 py-3.5 rounded-lg shadow-lg hover:shadow-emerald-900/30 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <Heart className="w-5 h-5 fill-emerald-200 text-emerald-100" />
                <span>Donate Now</span>
              </button>

              <button
                onClick={onExplorePrograms}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/15 text-white font-semibold text-base px-7 py-3.5 rounded-lg border border-white/20 transition-all duration-200 backdrop-blur-sm"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4 text-amber-300" />
              </button>
            </div>

            {/* Location & Quick Contact Badges */}
            <div className="mt-10 pt-6 border-t border-blue-800/80 w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Official Address:</span>
                  <span>{ORGANIZATION_DATA.address.fullAddress}</span>
                </div>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white block">Direct Helpline / WhatsApp:</span>
                  <a
                    href={ORGANIZATION_DATA.contact.telLink}
                    className="text-amber-300 hover:underline font-mono text-sm"
                  >
                    {ORGANIZATION_DATA.contact.phoneFormatted}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Original Organization Photograph Slot */}
          <div className="lg:col-span-5 w-full">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer decorative card border */}
              <div className="relative rounded-2xl bg-gradient-to-b from-blue-800/40 to-slate-900/60 p-2 sm:p-3 border border-blue-700/50 shadow-2xl backdrop-blur-md">
                
                {heroPhoto ? (
                  <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-slate-950 group">
                    <img
                      src={heroPhoto}
                      alt="Tahir Anthony Welfare Organization field activity"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4">
                      <div className="text-left">
                        <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                          Original Field Photograph
                        </span>
                        <p className="text-sm font-medium text-white">
                          Tahir Anthony Welfare Organization serving the community
                        </p>
                      </div>
                    </div>
                    {/* Admin replace button */}
                    <button
                      onClick={() => openAdminModalForSlot('hero')}
                      className="absolute top-3 right-3 bg-black/70 hover:bg-black/90 text-white text-xs px-2.5 py-1.5 rounded-md flex items-center gap-1.5 opacity-80 hover:opacity-100 transition-opacity"
                      title="Replace Hero Photograph"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-300" />
                      <span>Replace Photo</span>
                    </button>
                  </div>
                ) : (
                  /* Neutral Dignified Placeholder compliant with user instructions */
                  <div className="aspect-[4/3] rounded-xl border-2 border-dashed border-blue-400/40 bg-blue-950/60 p-6 flex flex-col items-center justify-center text-center">
                    <div className="w-14 h-14 rounded-full bg-blue-900/80 border border-blue-700 flex items-center justify-center text-amber-300 mb-3 shadow-inner">
                      <ShieldCheck className="w-8 h-8" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-amber-300 mb-1">
                      Official Organization Photograph Area
                    </span>
                    <h3 className="text-sm font-semibold text-white max-w-xs leading-snug">
                      ORIGINAL ORGANIZATION PHOTO WILL BE ADDED HERE
                    </h3>
                    <p className="text-xs text-slate-300 mt-2 max-w-xs leading-relaxed">
                      We strictly use authentic field photographs of Tahir Anthony Welfare Organization.
                    </p>

                    <button
                      onClick={() => openAdminModalForSlot('hero')}
                      className="mt-4 inline-flex items-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
                    >
                      <Upload className="w-3.5 h-3.5" />
                      <span>Upload Original Photo</span>
                    </button>
                    <span className="text-[10px] text-slate-400 mt-1.5">
                      JPG or PNG · Stored securely
                    </span>
                  </div>
                )}

                {/* Transparency guarantee note */}
                <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-[11px] text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Real Community Welfare Work</span>
                  </span>
                  <span className="text-slate-400">Sabzazar, Multan Rd, Lahore</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
