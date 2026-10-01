import React, { useEffect, useState, useRef } from 'react';
import {
  Clock,
  Utensils,
  Stethoscope,
  HeartHandshake,
  Users,
  GraduationCap,
  Award,
  Building,
  ShieldCheck,
  Edit3,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { useImageContext } from '../context/ImageContext';
import { ImpactStatItem } from '../data/organizationData';

const statIcons: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6 text-amber-500" />,
  Utensils: <Utensils className="w-6 h-6 text-emerald-400" />,
  Stethoscope: <Stethoscope className="w-6 h-6 text-teal-400" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6 text-rose-400" />,
  Users: <Users className="w-6 h-6 text-blue-400" />,
  GraduationCap: <GraduationCap className="w-6 h-6 text-amber-400" />,
  Award: <Award className="w-6 h-6 text-emerald-400" />,
  Building: <Building className="w-6 h-6 text-teal-300" />,
};

interface CounterProps {
  value: number;
  duration?: number;
}

const AnimatedCounter: React.FC<CounterProps> = ({ value, duration = 2000 }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasStarted) {
          setHasStarted(true);
        }
      },
      { threshold: 0.2 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) return;

    let startTime: number | null = null;
    let animationFrameId: number;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Cubic ease-out: fast start, soft stop
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setDisplayValue(Math.floor(easeOut * value));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };

    animationFrameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrameId);
  }, [hasStarted, value, duration]);

  return <span ref={elementRef}>{displayValue.toLocaleString()}</span>;
};

interface ImpactStatsProps {
  onOpenAdminStats?: () => void;
}

export const ImpactStats: React.FC<ImpactStatsProps> = ({ onOpenAdminStats }) => {
  const { impactStats, openAdminModalForSlot } = useImageContext();

  const handleEditClick = () => {
    if (onOpenAdminStats) {
      onOpenAdminStats();
    } else {
      openAdminModalForSlot('impact');
    }
  };

  return (
    <section className="relative -mt-6 sm:-mt-8 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Container with deep navy card style, gold & emerald accents */}
      <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-2xl shadow-xl border border-blue-800/80 p-6 sm:p-8 lg:p-10 backdrop-blur-md">
        
        {/* Section Header with quiet unboxed metadata & Admin trigger */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-blue-800/60 mb-8">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 uppercase tracking-widest mb-1">
              <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
              <span>Real Humanitarian Ground Impact</span>
              <span aria-hidden="true">·</span>
              <span className="text-slate-400 font-normal">Lahore & Beyond</span>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight font-sans">
              Our Community Impact
            </h2>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleEditClick}
              className="inline-flex items-center gap-1.5 bg-blue-900/80 hover:bg-blue-800 text-slate-200 hover:text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-blue-700/80 transition-colors shadow-xs"
              title="Admin: Edit Impact Figures & Labels"
            >
              <Edit3 className="w-3.5 h-3.5 text-amber-400" />
              <span>Edit Impact Figures</span>
            </button>
          </div>
        </div>

        {/* Dynamic Animated Counter Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {impactStats.map((stat: ImpactStatItem) => (
            <div
              key={stat.id}
              className="group relative bg-white/5 hover:bg-white/10 rounded-xl p-5 sm:p-6 border border-white/10 hover:border-emerald-500/40 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Icon & Label */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-900/60 border border-blue-700/60 flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-200">
                    {statIcons[stat.iconName] || <Sparkles className="w-6 h-6 text-amber-400" />}
                  </div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Verified Work
                  </span>
                </div>

                {/* Animated Counter Display */}
                <div className="flex items-baseline gap-0.5 text-3xl sm:text-4xl lg:text-4xl font-extrabold text-white tracking-tight font-sans">
                  {stat.prefix && <span className="text-emerald-400">{stat.prefix}</span>}
                  <AnimatedCounter value={stat.value} />
                  {stat.suffix && (
                    <span className="text-amber-400 text-2xl sm:text-3xl font-bold ml-0.5">
                      {stat.suffix}
                    </span>
                  )}
                </div>

                {/* Stat Title */}
                <h3 className="mt-2 text-base font-bold text-slate-100 group-hover:text-emerald-300 transition-colors">
                  {stat.label}
                </h3>

                {/* Description */}
                <p className="mt-1.5 text-xs text-slate-300 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              {/* Bottom Card Footer */}
              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                <span className="text-emerald-400 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3 h-3" />
                  <span>On the Ground</span>
                </span>
                <span>Active 2026</span>
              </div>
            </div>
          ))}
        </div>

        {/* Transparency note at bottom */}
        <div className="mt-8 pt-4 border-t border-blue-900/60 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-400 text-center sm:text-left">
          <p>
            * These numbers reflect humanitarian contributions across medical relief camps, daily food assistance, and volunteer service hours in Lahore.
          </p>
          <span className="text-amber-300/90 font-medium whitespace-nowrap">
            Updated regularly by Organization Administration
          </span>
        </div>

      </div>
    </section>
  );
};
