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
    <footer className="relative bg-army-camo-dark border-t-2 border-[#3e563d] text-white py-12 px-3 sm:px-6">
      {/* Decorative Camo Stripe */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-camo-stripe" />

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 pt-4">
        {/* Left: Brand Identity */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left">
          <HataffLogo variant="light" size="md" />
        </div>

        {/* Center: Legal & Address */}
        <div className="text-center text-xs text-[#d5c6b0] space-y-1.5 max-w-md">
          <p className="text-white font-medium">
            © {new Date().getFullYear()} Hataff Security Systems (Pvt) Ltd.
          </p>
          <p>2nd Floor, 13-Commercial Zone, Phase 1 DHA, Lahore, Pakistan</p>
          <p className="text-[#c2ab8a] font-semibold tracking-wider uppercase text-[10px] pt-1">
            Military Discipline · Vigilance · Uncompromising Protection
          </p>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#203422] hover:bg-[#2b472e] text-neutral-200 hover:text-white text-xs font-semibold rounded-xl border border-[#436342] transition-all cursor-pointer group"
          >
            <span>Back to top</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
