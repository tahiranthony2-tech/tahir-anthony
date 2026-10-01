import React from 'react';
import {
  HeartPulse,
  Utensils,
  GraduationCap,
  Stethoscope,
  Wrench,
  Users,
  CheckCircle,
} from 'lucide-react';
import { ORGANIZATION_DATA, MAJOR_WORK_AREAS } from '../data/organizationData';

const iconMap: Record<string, React.ReactNode> = {
  HeartPulse: <HeartPulse className="w-6 h-6 text-emerald-600" />,
  Utensils: <Utensils className="w-6 h-6 text-amber-600" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-blue-700" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-emerald-600" />,
  Wrench: <Wrench className="w-6 h-6 text-blue-700" />,
  Users: <Users className="w-6 h-6 text-amber-600" />,
};

interface MissionAndAreasProps {
  onLearnMore: () => void;
}

export const MissionAndAreas: React.FC<MissionAndAreasProps> = ({ onLearnMore }) => {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Mission Statement Box */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700 mb-2 block">
            Our Purpose & Commitment
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-blue-950 font-sans tracking-tight">
            Our Mission
          </h2>
          <div className="w-16 h-1 bg-emerald-600 mx-auto mt-3 mb-6 rounded-full"></div>
          <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-50/70 via-slate-50 to-emerald-50/40 border border-blue-100 shadow-sm relative">
            <p className="text-lg sm:text-xl font-medium text-slate-800 leading-relaxed italic">
              "{ORGANIZATION_DATA.mission}"
            </p>
            <div className="mt-4 flex flex-wrap justify-center items-center gap-4 text-xs font-semibold text-slate-600">
              <span className="flex items-center gap-1.5 text-blue-900">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Dignified Service
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-blue-900">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Community Focused
              </span>
              <span className="text-slate-300">·</span>
              <span className="flex items-center gap-1.5 text-blue-900">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                Transparent Humanitarian Action
              </span>
            </div>
          </div>
        </div>

        {/* Section Header for Areas of Work */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-emerald-700">
            Core Pillars of Impact
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-blue-950 mt-1">
            Major Areas of Work
          </h3>
          <p className="mt-2 text-sm text-slate-600">
            Addressing critical humanitarian challenges through coordinated local welfare initiatives in Lahore and beyond.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MAJOR_WORK_AREAS.map((area) => (
            <div
              key={area.id}
              className="group bg-slate-50 hover:bg-white rounded-xl p-6 border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center mb-4 shadow-xs group-hover:scale-110 transition-transform duration-200">
                  {iconMap[area.icon] || <HeartPulse className="w-6 h-6 text-emerald-600" />}
                </div>
                <h4 className="text-lg font-bold text-blue-950 group-hover:text-blue-900 transition-colors">
                  {area.title}
                </h4>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  {area.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-200/60 flex items-center justify-between text-xs text-slate-500">
                <span className="text-emerald-700 font-medium">Community Service</span>
                <span className="text-slate-400">Lahore, PK</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
