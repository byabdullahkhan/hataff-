import React from 'react';
import { ArrowUpRight, Users, Video, Fingerprint } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/hataffData.ts';

interface SolutionsSectionProps {
  onSelectService: (service: ServiceItem) => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({ onSelectService }) => {
  const getIcon = (type: ServiceItem['icon']) => {
    switch (type) {
      case 'guard':
        return <Users className="w-6 h-6 stroke-[1.8]" />;
      case 'cctv':
        return <Video className="w-6 h-6 stroke-[1.8]" />;
      case 'access':
        return <Fingerprint className="w-6 h-6 stroke-[1.8]" />;
      default:
        return <Users className="w-6 h-6" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div>
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2px] bg-[#2a4d33]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2a4d33] uppercase">
                OUR SECURITY SOLUTIONS
              </span>
            </div>
            <h2 className="font-condensed font-black text-3xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-tight uppercase">
              A complete shield.
              <br />
              <span className="text-neutral-800">Not just a single service.</span>
            </h2>
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-md leading-relaxed font-normal lg:text-right">
            From a vigilant presence on the ground to intelligent systems behind the scenes, we bring your security together.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service) => (
            <div
              key={service.id}
              className="bg-[#FAF7F1] border border-[#c2ab8a]/50 rounded-2xl p-7 lg:p-9 flex flex-col justify-between hover:border-[#385135] transition-all duration-300 hover:shadow-lg group relative overflow-hidden"
            >
              {/* Subtle top edge camo line on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-camo-stripe opacity-0 group-hover:opacity-100 transition-opacity" />

              <div>
                {/* Icon & Index Number */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-xl bg-[#ECE5D8] border border-[#c2ab8a]/60 flex items-center justify-center text-[#233823] group-hover:bg-[#233823] group-hover:text-[#c2ab8a] transition-all duration-200">
                    {getIcon(service.icon)}
                  </div>
                  <span className="font-condensed font-bold text-2xl text-neutral-400 group-hover:text-[#385135] transition-colors">
                    {service.number}
                  </span>
                </div>

                {/* Card Title */}
                <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-neutral-900 mb-3 tracking-tight">
                  {service.title}
                </h3>

                {/* Card Description */}
                <p className="text-neutral-600 text-sm leading-relaxed mb-8">
                  {service.shortDesc}
                </p>
              </div>

              {/* Action Button */}
              <div>
                <button
                  onClick={() => onSelectService(service)}
                  className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#233823] hover:text-[#3f5d3b] transition-colors group/btn cursor-pointer py-1"
                >
                  <span>Discover Service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
