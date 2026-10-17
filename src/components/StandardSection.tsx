import React from 'react';
import { Check } from 'lucide-react';
import squadGuardImage from '../assets/images/hataff_boonie_squad_1792118836643.jpg';

interface StandardSectionProps {
  customImage?: string;
}

export const StandardSection: React.FC<StandardSectionProps> = ({ customImage }) => {
  const displayImage = customImage || squadGuardImage;
  const highlights = [
    'Experienced personnel',
    'Supervisory oversight',
    'Technology-led protection',
    'Sector-specific solutions',
  ];

  return (
    <section id="about" className="py-12 sm:py-20 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto rounded-3xl bg-[#142318] bg-camo-pattern border border-[#2b4431]/60 text-white overflow-hidden shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center p-6 sm:p-10 lg:p-14">
          {/* Left Column: Image with EST. 1995 badge */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-[#395a41]/60 shadow-xl group">
              <img
                src={displayImage}
                alt="Hataff Security Squad in Disciplined Formation"
                referrerPolicy="no-referrer"
                className="w-full h-auto max-h-[520px] object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

              {/* EST. 1995 Overlay Badge */}
              <div className="absolute bottom-5 left-5 right-5 sm:right-auto bg-[#1b3422]/95 border border-[#40684a] backdrop-blur-md px-5 py-3.5 rounded-xl shadow-lg">
                <div className="font-condensed font-black text-2xl text-white tracking-wider leading-none">
                  EST. 1995
                </div>
                <div className="text-[10px] tracking-widest uppercase font-semibold text-neutral-300 mt-1">
                  A LEGACY OF PROTECTION
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Pillars */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 mb-4">
              <span className="w-5 h-[2px] bg-[#6ba777]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#8ec89a] uppercase">
                THE HATAFF STANDARD
              </span>
            </div>

            {/* Headline */}
            <h2 className="font-condensed font-black text-3xl sm:text-5xl lg:text-5xl text-white tracking-tight leading-tight uppercase mb-6">
              Military discipline.
              <br />
              <span className="text-neutral-200">Professional protection.</span>
            </h2>

            {/* Narrative text */}
            <div className="space-y-4 text-neutral-300 text-sm sm:text-base leading-relaxed mb-8">
              <p>
                Established in 1995, Hataff Security Systems (Pvt) Ltd. is a Lahore-based private security contractor built on discipline, vigilance and responsibility.
              </p>
              <p>
                Our personnel often bring military and law enforcement experience. Combined with modern electronic security, that experience creates a stronger line of protection for your premises.
              </p>
            </div>

            {/* 4 Feature Badges (2x2 Grid) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-white/10">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#26442d] flex items-center justify-center flex-shrink-0 text-[#8ec89a]">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-sm font-medium text-neutral-200">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
