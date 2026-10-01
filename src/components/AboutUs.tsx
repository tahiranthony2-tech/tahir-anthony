import React from 'react';
import { Upload, Shield, Heart, Eye, Check, User, Sparkles } from 'lucide-react';
import { ORGANIZATION_DATA } from '../data/organizationData';
import { useImageContext } from '../context/ImageContext';

export const AboutUs: React.FC = () => {
  const { tahirAnthonyPhoto, openAdminModalForSlot } = useImageContext();

  return (
    <section id="about-us" className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section kicker */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Humanitarian Leadership & Purpose
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-sans mt-1">
            About Us
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-sm sm:text-base">
            Dedicated to serving humanity, supporting vulnerable individuals, and building compassionate communities in Lahore, Pakistan.
          </p>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* LEFT SIDE: Tahir Anthony Original Photograph Slot */}
          <div className="lg:col-span-5">
            <div className="sticky top-28 bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-md">
              <div className="relative aspect-[3/4] rounded-xl overflow-hidden bg-slate-100 border border-slate-200 flex flex-col items-center justify-center">
                
                {tahirAnthonyPhoto ? (
                  <div className="relative w-full h-full group">
                    <img
                      src={tahirAnthonyPhoto}
                      alt="Tahir Anthony — Founder & President of Tahir Anthony Welfare Organization"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-top transition-transform duration-300 group-hover:scale-102"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex flex-col justify-end p-5 text-white">
                      <span className="text-xs uppercase tracking-wider font-semibold text-emerald-400">
                        Founder & President
                      </span>
                      <h3 className="text-xl font-bold text-white">
                        {ORGANIZATION_DATA.leader.name}
                      </h3>
                      <p className="text-xs text-slate-300">
                        {ORGANIZATION_DATA.name}
                      </p>
                    </div>

                    <button
                      onClick={() => openAdminModalForSlot('tahir')}
                      className="absolute top-3 right-3 bg-black/75 hover:bg-black text-white text-xs px-2.5 py-1.5 rounded-md flex items-center gap-1.5 transition-colors"
                      title="Replace Photo"
                    >
                      <Upload className="w-3.5 h-3.5 text-amber-300" />
                      <span>Change Photo</span>
                    </button>
                  </div>
                ) : (
                  /* Upload Placeholder strictly adhering to user prompt */
                  <div className="w-full h-full p-6 sm:p-8 flex flex-col items-center justify-center text-center bg-gradient-to-b from-slate-50 to-slate-100 border-2 border-dashed border-slate-300">
                    <div className="w-20 h-20 rounded-full bg-blue-50 border-2 border-blue-200 flex items-center justify-center text-blue-900 mb-4 shadow-xs">
                      <User className="w-10 h-10 text-blue-900" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 mb-1">
                      Real Photograph Slot
                    </span>
                    
                    <h3 className="text-base font-extrabold text-blue-950 max-w-xs leading-snug">
                      UPLOAD TAHIR ANTHONY'S ORIGINAL PHOTO
                    </h3>

                    <p className="text-xs text-slate-500 mt-3 max-w-xs leading-relaxed">
                      In accordance with our strict transparency policy, no synthetic or AI portraits are used. Real photograph can be uploaded here.
                    </p>

                    <button
                      onClick={() => openAdminModalForSlot('tahir')}
                      className="mt-6 inline-flex items-center gap-2 bg-blue-900 hover:bg-blue-950 text-white text-xs font-bold px-5 py-2.5 rounded-lg shadow-sm transition-all transform hover:-translate-y-0.5"
                    >
                      <Upload className="w-4 h-4 text-amber-300" />
                      <span>Upload Real Photo</span>
                    </button>

                    <span className="text-[10px] text-slate-400 mt-2">
                      Upload from phone or computer · Preview instantly
                    </span>
                  </div>
                )}

              </div>

              {/* Caption Card */}
              <div className="mt-4 px-2 py-2 flex items-center justify-between border-t border-slate-100 text-xs">
                <div>
                  <span className="font-bold text-slate-900 block">{ORGANIZATION_DATA.leader.name}</span>
                  <span className="text-slate-500">{ORGANIZATION_DATA.leader.title}</span>
                </div>
                <span className="text-emerald-700 font-semibold bg-emerald-50 px-2 py-1 rounded">
                  Lahore, PK
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Text content strictly from provided brief */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            
            {/* About Tahir Anthony Heading & Text */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-800">
                Leadership
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mt-1 mb-4 font-sans">
                About Tahir Anthony
              </h3>
              <p className="text-slate-700 text-base leading-relaxed mb-5">
                {ORGANIZATION_DATA.leader.description}
              </p>

              <div className="border-t border-slate-100 pt-5 mt-5">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  The Organization
                </span>
                <p className="text-slate-700 text-base leading-relaxed mt-2">
                  {ORGANIZATION_DATA.leader.organizationIntro}
                </p>
              </div>
            </div>

            {/* Our Vision Subsection */}
            <div className="bg-gradient-to-br from-blue-900 to-blue-950 rounded-2xl p-6 sm:p-8 text-white shadow-md relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center text-emerald-400">
                  <Eye className="w-5 h-5" />
                </div>
                <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                  Our Vision
                </h3>
              </div>
              <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic">
                "{ORGANIZATION_DATA.vision}"
              </p>
            </div>

            {/* Our Values Subsection */}
            <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-xs">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-700">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-700 block">
                    Guiding Principles
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                    Our Values
                  </h3>
                </div>
              </div>

              {/* Grid of values */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {ORGANIZATION_DATA.values.map((val) => (
                  <div
                    key={val}
                    className="flex items-center gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 transition-colors"
                  >
                    <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">
                      {val}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
