import React from 'react';
import {
  Hospital,
  HeartHandshake,
  Compass,
  Users,
  BookOpen,
  Activity,
  PlusCircle,
  ShieldAlert,
  Users2,
  Briefcase,
  Sparkles,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { PROGRAMS, ProgramItem } from '../data/organizationData';

const programIcons: Record<string, React.ReactNode> = {
  Hospital: <Hospital className="w-6 h-6 text-blue-800" />,
  Home: <HeartHandshake className="w-6 h-6 text-emerald-700" />,
  Compass: <Compass className="w-6 h-6 text-amber-700" />,
  HeartHandshake: <Heart className="w-6 h-6 text-rose-700" />,
  BookOpen: <BookOpen className="w-6 h-6 text-blue-700" />,
  Activity: <Activity className="w-6 h-6 text-emerald-700" />,
  Cross: <PlusCircle className="w-6 h-6 text-emerald-700" />,
  ShieldPlus: <ShieldAlert className="w-6 h-6 text-blue-700" />,
  Users2: <Users2 className="w-6 h-6 text-amber-700" />,
  Briefcase: <Briefcase className="w-6 h-6 text-blue-800" />,
  Sparkles: <Sparkles className="w-6 h-6 text-amber-600" />,
};

interface OurProgramsProps {
  onDonateClick: () => void;
}

export const OurPrograms: React.FC<OurProgramsProps> = ({ onDonateClick }) => {
  return (
    <section id="programs" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Objectives & Welfare Initiatives
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-950 font-sans mt-1">
            Our Programs
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 mb-4 rounded-full"></div>
          <p className="text-slate-600 text-base sm:text-lg">
            Working together to support healthier, stronger and more resilient communities.
          </p>
        </div>

        {/* 11 Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {PROGRAMS.map((program: ProgramItem) => (
            <div
              key={program.id}
              className="group relative bg-slate-50 hover:bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Header with Program Number & Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 group-hover:border-emerald-200 flex items-center justify-center shadow-xs group-hover:scale-110 transition-transform duration-200">
                    {programIcons[program.iconName] || <Sparkles className="w-6 h-6 text-blue-800" />}
                  </div>
                  <span className="text-xs font-bold text-slate-400 group-hover:text-emerald-700 transition-colors">
                    Objective #{String(program.id).padStart(2, '0')}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-blue-950 group-hover:text-blue-900 transition-colors font-sans mb-3">
                  {program.title}
                </h3>

                {/* Objective Description */}
                <p className="text-sm text-slate-600 leading-relaxed">
                  {program.objective}
                </p>
              </div>

              {/* Card Footer */}
              <div className="mt-6 pt-4 border-t border-slate-200/70 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">
                  {program.category}
                </span>
                <button
                  onClick={onDonateClick}
                  className="inline-flex items-center gap-1 font-semibold text-emerald-700 hover:text-emerald-800 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Support this</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 bg-gradient-to-r from-blue-950 via-blue-900 to-slate-900 rounded-2xl p-8 sm:p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg">
          <div>
            <span className="text-xs font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Join Us in Service
            </span>
            <h3 className="text-xl sm:text-2xl font-bold text-white">
              Every Contribution Directly Empowers Human Lives
            </h3>
            <p className="text-sm text-slate-300 mt-1 max-w-xl">
              From free medicines to urgent food packages and vocational youth training, your partnership makes dignified community assistance possible.
            </p>
          </div>
          <button
            onClick={onDonateClick}
            className="shrink-0 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm px-6 py-3.5 rounded-lg shadow-md transition-all transform hover:-translate-y-0.5"
          >
            Support Our Programs
          </button>
        </div>

      </div>
    </section>
  );
};
