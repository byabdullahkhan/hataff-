import React from 'react';
import { ArrowUpRight, Check, MapPin } from 'lucide-react';
import heroGuardImage from '../assets/images/hataff_operators_wall_1792118861275.jpg';

interface HeroProps {
  onExploreServices: () => void;
  onTalkSecurity: () => void;
  customImage?: string;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreServices,
  onTalkSecurity,
  customImage,
}) => {
  const displayImage = customImage || heroGuardImage;

  return (
    <section id="home" className="relative pt-24 sm:pt-28 pb-8 sm:pb-12 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-2xl relative border border-[#2b3d2b]/60">
        {/* Tactical Digital Camouflage Accent Top Strip */}
        <div className="h-3 w-full bg-camo-stripe border-b border-[#3e563d]" />

        {/* Hero Main Container */}
        <div className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center">
          {/* Background Image */}
          <div className="absolute inset-0 z-0">
            <img
              src={displayImage}
              alt="Hataff Security Armed Tactical Personnel"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center lg:object-[center_35%]"
            />
            {/* Tactical Dark Camo & Shadow Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0d160e]/95 via-[#0d160e]/85 to-[#0d160e]/40 lg:to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d160e]/90 via-transparent to-[#0d160e]/30" />
          </div>

          {/* Foreground Hero Content */}
          <div className="relative z-10 w-full px-6 sm:px-10 lg:px-14 py-12 lg:py-20 max-w-3xl">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-6 h-[2.5px] bg-[#c2ab8a]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#d5c6b0] uppercase">
                VIGILANT BY DUTY · TRUSTED BY CHOICE
              </span>
            </div>

            {/* Headline */}
            <h1 className="font-condensed font-black text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white uppercase leading-[0.95] mb-6">
              Hataff Security.
              <br />
              Your Safety.
              <br />
              <span className="text-[#c2ab8a]">Our Commitment.</span>
            </h1>

            {/* Subtitle description */}
            <p className="text-base sm:text-lg text-neutral-300 max-w-xl leading-relaxed mb-8 font-normal">
              Disciplined personnel. Intelligent technology. Complete military-grade security solutions to protect your people, property and peace of mind.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
              <button
                onClick={onExploreServices}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#c2ab8a] hover:bg-[#d4bfa1] text-neutral-950 font-bold rounded-xl shadow-lg transition-all duration-200 group cursor-pointer text-sm sm:text-base"
              >
                <span>Explore Our Services</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onTalkSecurity}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#1b2b1d]/70 hover:bg-[#223725]/90 text-white font-semibold rounded-xl border border-[#3e563d] backdrop-blur-sm transition-all duration-200 group cursor-pointer text-sm sm:text-base"
              >
                <span>Let's Talk Security</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>

            {/* Badges / Social Proof */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-2 border-t border-[#344b33]/40 text-xs sm:text-sm text-neutral-300">
              <div className="flex items-center gap-2">
                <span className="w-4 h-4 rounded-full bg-[#2a452a] border border-[#4e6f4e] flex items-center justify-center text-[#c2ab8a]">
                  <Check className="w-2.5 h-2.5 stroke-[3]" />
                </span>
                <span>Protecting what matters since 1995</span>
              </div>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-[#c2ab8a]" />
                <span>Lahore, Pakistan</span>
              </div>
            </div>
          </div>

          {/* Bottom Right Floating Badge with Camouflage border */}
          <div className="hidden md:block absolute bottom-8 right-8 z-10">
            <div className="bg-[#122014]/95 border-2 border-[#395237] backdrop-blur-md rounded-2xl p-5 shadow-2xl text-white max-w-[240px]">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#c2ab8a] animate-pulse" />
                <span className="text-xs uppercase tracking-wider text-[#d5c6b0] font-semibold">
                  Always vigilant.
                </span>
              </div>
              <div className="font-condensed font-black text-xl tracking-wider text-white">
                ALWAYS HATAFF.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
