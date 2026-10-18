import React, { useState } from 'react';
import { Building2, Factory, Home, CheckCircle2, ChevronRight } from 'lucide-react';
import { SECTORS, SectorItem } from '../data/hataffData.ts';

interface SectorsSectionProps {
  onRequestSectorQuote: (sectorName: string) => void;
}

export const SectorsSection: React.FC<SectorsSectionProps> = ({ onRequestSectorQuote }) => {
  const [selectedSector, setSelectedSector] = useState<string>('commercial');

  const getSectorIcon = (type: SectorItem['icon']) => {
    switch (type) {
      case 'commercial':
        return <Building2 className="w-7 h-7 stroke-[1.8]" />;
      case 'industrial':
        return <Factory className="w-7 h-7 stroke-[1.8]" />;
      case 'residential':
        return <Home className="w-7 h-7 stroke-[1.8]" />;
      default:
        return <Building2 className="w-7 h-7" />;
    }
  };

  return (
    <section id="sectors" className="py-16 sm:py-24 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Headline and Description */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="w-5 h-[2.5px] bg-[#867e3c]" />
              <span className="text-xs sm:text-sm font-bold tracking-widest text-[#242b1b] uppercase">
                SECTORS WE SERVE
              </span>
            </div>

            <h2 className="font-condensed font-black text-3xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-tight uppercase mb-6">
              Different environments.
              <br />
              <span className="text-[#3e4526]">One commitment.</span>
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-8">
              Every property has its own risks. Our people and systems work together to meet the needs of your environment.
            </p>

            <div className="hidden lg:block p-5 bg-[#FAF7F1] border border-[#767035]/40 rounded-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-camo-stripe" />
              <div className="text-xs font-bold tracking-wider text-[#1e2417] uppercase mb-2">
                Tailored Tactical Security Deployments
              </div>
              <p className="text-xs text-neutral-600 leading-relaxed">
                Whether you need a full tactical security platoon for high-value factory premises or courteous access wardens for residential societies, Hataff tailors standard operating procedures (SOPs) to your specific site.
              </p>
            </div>
          </div>

          {/* Right Column: Sectors List */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-6">
            {SECTORS.map((sector) => {
              const isSelected = selectedSector === sector.id;
              return (
                <div
                  key={sector.id}
                  onClick={() => setSelectedSector(sector.id)}
                  className={`bg-[#FAF7F1] border transition-all duration-300 rounded-2xl p-6 sm:p-7 cursor-pointer ${
                    isSelected
                      ? 'border-[#3e4526] shadow-md ring-2 ring-[#3e4526]/25 bg-white'
                      : 'border-[#767035]/30 hover:border-[#767035] hover:bg-[#f5efe5]'
                  }`}
                >
                  <div className="flex items-start gap-5">
                    <div
                      className={`w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-colors ${
                        isSelected
                          ? 'bg-[#182013] text-[#867e3c]'
                          : 'bg-[#ECE4D6] text-[#182013]'
                      }`}
                    >
                      {getSectorIcon(sector.icon)}
                    </div>

                    <div className="flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-condensed font-bold text-2xl sm:text-3xl text-neutral-900 tracking-tight">
                          {sector.title}
                        </h3>
                        <span
                          className={`text-xs font-semibold px-2.5 py-1 rounded-full transition-colors ${
                            isSelected
                              ? 'bg-[#213520]/15 text-[#213520] font-bold'
                              : 'text-neutral-400'
                          }`}
                        >
                          {isSelected ? 'Active View' : 'Explore'}
                        </span>
                      </div>

                      <p className="text-neutral-600 text-sm sm:text-base mt-1 mb-4">
                        {sector.desc}
                      </p>

                      {/* Expandable details when selected */}
                      {isSelected && (
                        <div className="pt-4 border-t border-neutral-200/80 animate-in fade-in duration-200">
                          <div className="text-xs font-semibold text-neutral-500 uppercase tracking-wider mb-2.5">
                            Key Coverage Areas:
                          </div>
                          <ul className="space-y-2 mb-4">
                            {sector.details.map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                                <CheckCircle2 className="w-4 h-4 text-[#2f4b2f] flex-shrink-0" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>

                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              onRequestSectorQuote(sector.title);
                            }}
                            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#213520] hover:text-[#3d5e3b] transition-colors"
                          >
                            <span>Inquire for {sector.title} Security</span>
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
