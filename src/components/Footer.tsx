import React from 'react';
import { HataffLogo } from './HataffLogo.tsx';
import { ArrowUpRight, Shield, ImageIcon } from 'lucide-react';

interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="relative bg-army-camo border-t-2 border-[#3e4a28] text-white py-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          <HataffLogo variant="light" size="md" />
        </div>

        {/* Center: Legal & Address directly on army print */}
        <div className="text-center text-xs text-white space-y-1.5 max-w-md drop-shadow-[0_1px_3px_rgba(0,0,0,0.8)]">
          <p className="text-white font-bold text-sm tracking-wide">
            © {new Date().getFullYear()} Hataff Security Systems (Pvt) Ltd.
          </p>
          <p className="text-neutral-300 font-medium">
            2nd Floor, 13-Commercial Zone, Phase 1 DHA, Lahore, Pakistan
          </p>
          <p className="text-[#867e3c] font-bold tracking-widest uppercase text-[10px] pt-1">
            Military Discipline · Vigilance · Uncompromising Protection
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#11170d] hover:bg-[#1f2c1a] text-[#dcd4ae] hover:text-white text-xs font-bold rounded-xl border border-[#48532b] shadow-lg transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
