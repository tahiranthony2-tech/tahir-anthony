import React from 'react';
import { useImageContext } from '../context/ImageContext';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const { organizationLogo } = useImageContext();

  const dimensions = {
    sm: 'w-10 h-10',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24',
  }[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {organizationLogo ? (
        <img
          src={organizationLogo}
          alt="Tahir Anthony Welfare Organization Logo"
          referrerPolicy="no-referrer"
          className={`${dimensions} rounded-full object-cover border-2 border-blue-900 shadow-sm`}
        />
      ) : (
        <div
          className={`${dimensions} shrink-0 relative rounded-full bg-white border-2 border-blue-900 shadow-sm flex items-center justify-center p-1 overflow-hidden`}
          title="Tahir Anthony Welfare Organization Official Emblem"
        >
          {/* Official Emblem Representation with Flying Dove and Golden Hands */}
          <svg viewBox="0 0 100 100" className="w-full h-full" fill="none">
            {/* Outer Blue Ring */}
            <circle cx="50" cy="50" r="47" stroke="#1e3a8a" strokeWidth="5" fill="#ffffff" />
            
            {/* Circular Path Text */}
            <path
              id="topTextArc"
              d="M 18,50 A 32,32 0 1,1 82,50"
              fill="none"
            />
            <text fill="#1e3a8a" fontSize="6.8" fontWeight="bold" letterSpacing="0.08em">
              <textPath href="#topTextArc" startOffset="50%" textAnchor="middle">
                TAHIR ANTHONY
              </textPath>
            </text>

            <path
              id="bottomTextArc"
              d="M 82,52 A 32,32 0 0,1 18,52"
              fill="none"
            />
            <text fill="#1e3a8a" fontSize="5.8" fontWeight="bold" letterSpacing="0.08em">
              <textPath href="#bottomTextArc" startOffset="50%" textAnchor="middle">
                WELFARE ORG.
              </textPath>
            </text>

            {/* Flying White Dove with Wings Spread */}
            <g transform="translate(20, 24) scale(0.6)">
              {/* Dove Body & Wings */}
              <path
                d="M50 45 C48 35 30 20 10 25 C18 35 25 42 35 48 C20 48 5 45 0 52 C12 55 25 56 38 54 C28 62 18 75 22 80 C32 75 42 65 48 57 C50 68 52 82 58 85 C62 82 62 68 60 57 C66 65 76 75 86 80 C90 75 80 62 70 54 C83 56 96 55 108 52 C103 45 88 48 73 48 C83 42 90 35 98 25 C78 20 60 35 58 45 Z"
                fill="#f8fafc"
                stroke="#0284c7"
                strokeWidth="1.5"
              />
              {/* Dove Head & Eye */}
              <circle cx="54" cy="38" r="4.5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1" />
              <path d="M57 37 L63 38 L57 40 Z" fill="#f59e0b" />
              <circle cx="53" cy="37" r="1" fill="#0f172a" />
            </g>

            {/* Clasping Golden Hands (Yellow unity symbol) */}
            <g transform="translate(36, 68) scale(0.28)">
              <path
                d="M50 5 C40 15 25 25 20 40 C15 55 25 75 50 90 C75 75 85 55 80 40 C75 25 60 15 50 5 Z"
                fill="#eab308"
                stroke="#ca8a04"
                strokeWidth="3"
              />
              <path
                d="M32 45 C38 48 44 48 50 45 C56 48 62 48 68 45"
                stroke="#a16207"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M36 55 C42 58 48 58 50 56 C52 58 58 58 64 55"
                stroke="#a16207"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </g>
          </svg>
        </div>
      )}

      {showText && (
        <div className="flex flex-col text-left">
          <span className="text-base sm:text-lg font-extrabold tracking-tight text-blue-950 uppercase leading-none font-sans">
            Tahir Anthony
          </span>
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-emerald-700 uppercase leading-tight">
            Welfare Organization
          </span>
        </div>
      )}
    </div>
  );
};
