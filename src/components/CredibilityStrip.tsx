import React from 'react';
import { ShieldCheck, Award, Clock, Building2 } from 'lucide-react';

export const CredibilityStrip: React.FC = () => {
  const pillars = [
    {
      icon: ShieldCheck,
      stat: '30+ Years',
      label: 'Of security experience',
    },
    {
      icon: Award,
      stat: 'Disciplined',
      label: 'Trained & professional personnel',
    },
    {
      icon: Clock,
      stat: 'Integrated',
      label: 'People & technology, together',
    },
    {
      icon: Building2,
      stat: 'Every Sector',
      label: 'Commercial · Industrial · Residential',
    },
  ];

  return (
    <section className="px-3 sm:px-6 py-4">
      <div className="max-w-7xl mx-auto bg-[#F7F3EB] border border-[#c2ab8a]/60 rounded-2xl p-6 sm:p-8 shadow-sm relative overflow-hidden">
        {/* Subtle Camouflage Accent Indicator on Corner */}
        <div className="absolute top-0 right-0 w-24 h-1.5 bg-camo-stripe opacity-75" />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#c2ab8a]/40">
          {pillars.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`flex items-start gap-4 ${
                  index !== 0 ? 'pt-5 sm:pt-0 lg:pl-8' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-white border border-[#c2ab8a]/80 flex items-center justify-center flex-shrink-0 text-[#253d26] shadow-sm">
                  <Icon className="w-6 h-6 stroke-[1.8]" />
                </div>
                <div>
                  <h3 className="font-condensed font-black text-2xl text-neutral-900 tracking-tight leading-none mb-1">
                    {item.stat}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-snug font-medium">
                    {item.label}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
