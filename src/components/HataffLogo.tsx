import React from 'react';

interface HataffLogoProps {
  variant?: 'light' | 'dark';
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export const HataffLogo: React.FC<HataffLogoProps> = ({
  variant = 'dark',
  className = '',
  size = 'md',
}) => {
  const isLight = variant === 'light';

  return (
    <div className={`flex items-center gap-3 select-none ${className}`}>
      {/* Shield Icon with Inset Star */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <svg
          className={`${size === 'sm' ? 'w-8 h-9' : size === 'lg' ? 'w-12 h-14' : 'w-10 h-11'} transition-transform duration-300 hover:scale-105`}
          viewBox="0 0 40 46"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Outer Shield Outline */}
          <path
            d="M20 2L36 7.5V20.5C36 32.5 29.5 40.5 20 44C10.5 40.5 4 32.5 4 20.5V7.5L20 2Z"
            fill={isLight ? '#1c2e20' : '#172719'}
            stroke={isLight ? '#43684a' : '#2d4b32'}
            strokeWidth="1.5"
          />
          {/* Inner Accent Crest */}
          <path
            d="M20 5.5L33 10V20C33 30 27.5 37 20 40.2C12.5 37 7 30 7 20V10L20 5.5Z"
            fill={isLight ? '#223827' : '#1d3220'}
          />
          {/* Tactical 5-Point Star */}
          <polygon
            points="20,13 22.3,18.5 28.2,18.8 23.7,22.6 25.2,28.4 20,25.1 14.8,28.4 16.3,22.6 11.8,18.8 17.7,18.5"
            fill="#dbe4dc"
          />
        </svg>
      </div>

      {/* Typography */}
      <div className="flex flex-col">
        <span
          className={`font-condensed font-extrabold tracking-wider leading-none text-xl ${
            isLight ? 'text-white' : 'text-neutral-900'
          }`}
          style={{ letterSpacing: '0.08em' }}
        >
          HATAFF
        </span>
        <span
          className={`text-[9px] font-semibold tracking-wider uppercase mt-1 leading-none ${
            isLight ? 'text-neutral-300' : 'text-neutral-600'
          }`}
          style={{ letterSpacing: '0.12em' }}
        >
          SECURITY SYSTEMS (PVT) LTD.
        </span>
      </div>
    </div>
  );
};
