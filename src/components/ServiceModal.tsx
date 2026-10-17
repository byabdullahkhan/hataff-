import React from 'react';
import { X, Check, ShieldCheck, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { ServiceItem, MANAGERS } from '../data/hataffData.ts';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onRequestQuote: (serviceTitle: string) => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({
  service,
  onClose,
  onRequestQuote,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#FBF9F5] rounded-3xl border border-neutral-300 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header bar */}
        <div className="bg-[#142318] bg-camo-pattern p-6 text-white border-b border-[#2d4933] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="font-condensed font-black text-2xl text-[#8ec89a]">
              {service.number}
            </span>
            <div className="w-[1px] h-6 bg-white/20" />
            <h3 className="font-condensed font-bold text-2xl tracking-tight text-white uppercase">
              {service.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6">
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-[#2a4d33] mb-2">
              Operational Overview
            </h4>
            <p className="text-neutral-700 text-sm sm:text-base leading-relaxed">
              {service.fullDesc}
            </p>
          </div>

          {/* Features Checklist */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">
              Core Capabilities & Protocols
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-neutral-200/80 shadow-xs text-xs sm:text-sm text-neutral-800"
                >
                  <ShieldCheck className="w-4 h-4 text-[#2a4d33] flex-shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Equipment & Gear */}
          <div>
            <h4 className="text-xs font-bold tracking-widest uppercase text-neutral-500 mb-3">
              Deployment Hardware & Gear
            </h4>
            <div className="flex flex-wrap gap-2">
              {service.equipment.map((eq, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#EAE4D7] text-neutral-800 text-xs font-medium border border-neutral-300"
                >
                  {eq}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-5 sm:p-6 bg-[#F4EFE6] border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-xs text-neutral-600 text-center sm:text-left">
            Ready to deploy for your facility?
          </div>
          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onRequestQuote(service.title);
              }}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#172719] hover:bg-[#203723] text-white text-xs sm:text-sm font-bold rounded-xl transition-all cursor-pointer shadow-sm"
            >
              <span>Request Deployment</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href={`https://wa.me/${MANAGERS[0].whatsappNumber}?text=Inquiring%20about%20${encodeURIComponent(
                service.title
              )}%20service`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center p-2.5 bg-[#1e7e34] hover:bg-[#196b2c] text-white rounded-xl transition-all"
              title="Chat with GM on WhatsApp"
            >
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
