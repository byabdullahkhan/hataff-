import React, { useState } from 'react';
import { X, Send, Phone, MessageSquare, Check, Shield } from 'lucide-react';
import { MANAGERS } from '../data/hataffData.ts';

interface FastQuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialSector?: string;
}

export const FastQuoteModal: React.FC<FastQuoteModalProps> = ({
  isOpen,
  onClose,
  initialService,
  initialSector,
}) => {
  const [service, setService] = useState(initialService || 'Manned Guarding');
  const [sector, setSector] = useState(initialSector || 'Commercial');
  const [guardCount, setGuardCount] = useState('2-4 Guards');
  const [shiftType, setShiftType] = useState('24/7 Round-the-Clock');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientCity, setClientCity] = useState('Lahore');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!clientName || !clientPhone) return;
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      onClose();
    }, 3500);
  };

  const whatsappInquiryText = encodeURIComponent(
    `Hello Hataff Security,\n\nI would like a security proposal for:\n- Service: ${service}\n- Sector: ${sector}\n- Scale: ${guardCount} (${shiftType})\n- Location: ${clientCity}\n\nClient Name: ${clientName || 'Inquirer'}\nPhone: ${clientPhone || 'Pending'}`
  );

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-xl bg-[#FBF9F5] rounded-3xl border border-neutral-300 shadow-2xl overflow-hidden max-h-[95vh] flex flex-col">
        {/* Top Header */}
        <div className="bg-[#142318] bg-camo-pattern p-5 sm:p-6 text-white border-b border-[#2d4933] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#27452d] flex items-center justify-center text-white">
              <Shield className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-condensed font-bold text-xl sm:text-2xl tracking-tight text-white uppercase leading-none">
                Get In Touch / Fast Quote
              </h3>
              <p className="text-[11px] text-neutral-300 mt-0.5">
                Speak directly with Hataff Security Systems (Pvt) Ltd.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5 sm:p-7 overflow-y-auto space-y-5">
          {isSubmitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
                <Check className="w-8 h-8 stroke-[3]" />
              </div>
              <h4 className="font-condensed font-black text-2xl text-neutral-900 uppercase">
                Proposal Request Received
              </h4>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                Thank you, {clientName}. General Manager Muhammad Murtaza Manzoor's team will contact you at {clientPhone} shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Security Service
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-[#1e3422] focus:outline-none"
                  >
                    <option value="Manned Guarding">Manned Guarding (Static & Armed)</option>
                    <option value="CCTV & Surveillance">CCTV & Remote Surveillance</option>
                    <option value="Access Control Systems">Access Control & Biometrics</option>
                    <option value="VIP / Armed Escort">VIP & Executive Protection</option>
                    <option value="Integrated Security Package">Complete Integrated Shield</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Sector / Property Type
                  </label>
                  <select
                    value={sector}
                    onChange={(e) => setSector(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-[#1e3422] focus:outline-none"
                  >
                    <option value="Commercial">Commercial / Corporate Office</option>
                    <option value="Industrial">Industrial / Factory / Warehouse</option>
                    <option value="Residential">Residential Community / Residence</option>
                    <option value="Institutional">Educational / Healthcare Complex</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Guard Requirement Scale
                  </label>
                  <select
                    value={guardCount}
                    onChange={(e) => setGuardCount(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-[#1e3422] focus:outline-none"
                  >
                    <option value="1 Guard">1 Dedicated Guard</option>
                    <option value="2-4 Guards">2 to 4 Guards</option>
                    <option value="5-10 Guards">5 to 10 Guards (Platoon)</option>
                    <option value="10+ Guards">10+ Guards (Large Site/Plant)</option>
                    <option value="Systems Only">Equipment & CCTV Only</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Shift Pattern
                  </label>
                  <select
                    value={shiftType}
                    onChange={(e) => setShiftType(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-[#1e3422] focus:outline-none"
                  >
                    <option value="24/7 Round-the-Clock">24/7 Round-the-Clock (2 Shifts)</option>
                    <option value="12-Hour Day Shift">12-Hour Day Shift</option>
                    <option value="12-Hour Night Shift">12-Hour Night Shift</option>
                    <option value="On-Demand / Event">Event / Temporary Deployment</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 pt-2 border-t border-neutral-200">
                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Full Name"
                    value={clientName}
                    onChange={(e) => setClientName(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-[#1e3422] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0300 0000000"
                    value={clientPhone}
                    onChange={(e) => setClientPhone(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-[#1e3422] focus:outline-none"
                  />
                </div>

                <div className="sm:col-span-1">
                  <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                    City / Area
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. DHA Lahore"
                    value={clientCity}
                    onChange={(e) => setClientCity(e.target.value)}
                    className="w-full px-3.5 py-2 text-xs sm:text-sm bg-white border border-neutral-300 rounded-xl focus:border-[#1e3422] focus:outline-none"
                  />
                </div>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-[#142318] hover:bg-[#1f3724] text-white font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>Request Official Proposal</span>
                </button>
              </div>

              {/* Instant WhatsApp alternative */}
              <div className="pt-2 text-center">
                <div className="text-xs text-neutral-500 mb-2 font-medium">Or message General Manager directly:</div>
                <a
                  href={`https://wa.me/${MANAGERS[0].whatsappNumber}?text=${whatsappInquiryText}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full py-2.5 px-4 bg-[#1e7e34] hover:bg-[#186a2b] text-white font-semibold text-xs rounded-xl transition-all shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Open Inquiry via WhatsApp ({MANAGERS[0].name})</span>
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
