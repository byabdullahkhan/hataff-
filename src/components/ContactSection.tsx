import React, { useState } from 'react';
import { MapPin, Mail, Phone, MessageSquare, ChevronDown, ChevronUp, Send, Check } from 'lucide-react';
import { MANAGERS } from '../data/hataffData.ts';

export const ContactSection: React.FC = () => {
  // Store expanded state for each manager card; GM can default open or closed
  const [expandedId, setExpandedId] = useState<string | null>('gm');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    sector: 'Commercial',
    message: '',
  });

  const toggleAccordion = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setFormSubmitted(true);
    setTimeout(() => {
      setFormSubmitted(false);
      setFormData({ name: '', phone: '', sector: 'Commercial', message: '' });
    }, 4500);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 px-3 sm:px-6 bg-[#F4EFE6] border-t border-neutral-300/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Office info & quick inquiry */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-5 h-[2px] bg-[#2a4d33]" />
                <span className="text-xs sm:text-sm font-bold tracking-widest text-[#2a4d33] uppercase">
                  LET'S TALK SECURITY
                </span>
              </div>

              <h2 className="font-condensed font-black text-3xl sm:text-5xl lg:text-6xl text-neutral-900 tracking-tight leading-tight uppercase mb-4">
                Protection starts with a conversation.
              </h2>

              <p className="text-neutral-700 text-sm sm:text-base leading-relaxed mb-10">
                Speak with Hataff about the right protection for your property.
              </p>

              {/* Contact Details List */}
              <div className="space-y-7 mb-10">
                {/* Head Office */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#c2ab8a]/80 flex items-center justify-center flex-shrink-0 text-[#233824] shadow-sm">
                    <MapPin className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase text-neutral-500 mb-1">
                      HEAD OFFICE
                    </div>
                    <div className="text-sm sm:text-base text-neutral-900 font-medium leading-relaxed">
                      2nd Floor, 13-Commercial Zone,
                      <br />
                      Phase 1 DHA, Lahore, Pakistan
                    </div>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white border border-[#c2ab8a]/80 flex items-center justify-center flex-shrink-0 text-[#233824] shadow-sm">
                    <Mail className="w-5 h-5 stroke-[2]" />
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider uppercase text-neutral-500 mb-1">
                      EMAIL
                    </div>
                    <div className="text-sm sm:text-base text-neutral-900 font-medium leading-relaxed">
                      <div>
                        <a
                          href="mailto:info@hataff.com"
                          className="hover:text-[#233824] hover:underline"
                        >
                          info@hataff.com
                        </a>
                      </div>
                      <div>
                        <a
                          href="mailto:hataffhr@gmail.com"
                          className="hover:text-[#233824] hover:underline"
                        >
                          hataffhr@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Consultation Form Box */}
            <div className="bg-white/90 backdrop-blur-sm border border-[#c2ab8a]/60 rounded-2xl p-5 sm:p-6 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-camo-stripe" />
              <h3 className="font-condensed font-bold text-lg uppercase tracking-wide text-neutral-900 mb-1">
                Direct Inquiry / Site Survey
              </h3>
              <p className="text-xs text-neutral-600 mb-4">
                Leave your contact details and our tactical operations team will reach out within 2 hours.
              </p>

              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 border border-emerald-300 rounded-xl text-emerald-800 text-sm flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-600 text-white flex items-center justify-center flex-shrink-0">
                    <Check className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold">Inquiry Sent Successfully!</div>
                    <div className="text-xs text-emerald-700">A security supervisor will contact you shortly.</div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-3">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Your Full Name / Company"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F4] border border-neutral-300 rounded-xl focus:outline-none focus:border-[#233824] focus:bg-white transition-all"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone (e.g. 0300 1234567)"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F4] border border-neutral-300 rounded-xl focus:outline-none focus:border-[#233824] focus:bg-white transition-all"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <select
                      value={formData.sector}
                      onChange={(e) => setFormData({ ...formData, sector: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F4] border border-neutral-300 rounded-xl focus:outline-none focus:border-[#233824] focus:bg-white transition-all text-neutral-800"
                    >
                      <option value="Commercial">Commercial / Office</option>
                      <option value="Industrial">Industrial / Factory</option>
                      <option value="Residential">Residential / Home</option>
                      <option value="VIP / Events">VIP / Armed Escort</option>
                    </select>

                    <input
                      type="text"
                      placeholder="Location / Requirements (optional)"
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-[#FAF8F4] border border-neutral-300 rounded-xl focus:outline-none focus:border-[#233824] focus:bg-white transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-[#18271a] hover:bg-[#253d28] text-[#c2ab8a] border border-[#3e5a3c] font-bold text-xs sm:text-sm rounded-xl transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                  >
                    <Send className="w-4 h-4" />
                    <span>Submit Security Request</span>
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Right Column: Key Management Accordion Cards */}
          <div className="lg:col-span-6 space-y-4">
            {MANAGERS.map((manager) => {
              const isExpanded = expandedId === manager.id;
              return (
                <div
                  key={manager.id}
                  className="bg-white border border-[#c2ab8a]/50 rounded-2xl overflow-hidden shadow-sm transition-all duration-300"
                >
                  {/* Card Header clickable */}
                  <div
                    onClick={() => toggleAccordion(manager.id)}
                    className="p-6 cursor-pointer hover:bg-[#FAF8F4] transition-colors flex items-center justify-between"
                  >
                    <div>
                      <div className="text-[11px] font-bold tracking-widest text-[#253d26] uppercase mb-1">
                        {manager.role}
                      </div>
                      <h3 className="font-condensed font-bold text-2xl text-neutral-900 tracking-tight">
                        {manager.name}
                      </h3>
                      <div className="text-base text-neutral-800 font-medium mt-1 font-mono">
                        {manager.phone}
                      </div>
                      {!isExpanded && (
                        <div className="text-[11px] uppercase tracking-wider font-semibold text-neutral-400 mt-2">
                          CALL OR WHATSAPP
                        </div>
                      )}
                    </div>

                    <button
                      type="button"
                      aria-label="Toggle contact details"
                      className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 hover:text-neutral-900 transition-colors"
                    >
                      {isExpanded ? (
                        <ChevronUp className="w-5 h-5 stroke-[2.5]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                      )}
                    </button>
                  </div>

                  {/* Expanded Actions */}
                  {isExpanded && (
                    <div className="px-6 pb-6 pt-2 border-t border-neutral-100 animate-in fade-in duration-200">
                      <div className="text-[11px] font-bold tracking-widest text-neutral-500 uppercase mb-3">
                        CHOOSE HOW TO CONNECT
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {/* CALL button */}
                        <a
                          href={`tel:${manager.rawPhone}`}
                          className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#18271a] hover:bg-[#253d28] text-[#c2ab8a] border border-[#3e5a3c] font-bold text-sm tracking-wider uppercase rounded-xl transition-all shadow-sm group"
                        >
                          <Phone className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                          <span>Call</span>
                        </a>

                        {/* WHATSAPP button in vibrant green */}
                        <a
                          href={`https://wa.me/${manager.whatsappNumber}?text=Hello%20${encodeURIComponent(
                            manager.name
                          )}%2C%20I%20am%20contacting%20you%20regarding%20Hataff%20Security%20Systems.`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2.5 py-3.5 px-4 bg-[#1e7e34] hover:bg-[#196b2c] text-white font-bold text-sm tracking-wider uppercase rounded-xl transition-all shadow-sm group"
                        >
                          <MessageSquare className="w-4 h-4 fill-current group-hover:scale-110 transition-transform" />
                          <span>WhatsApp</span>
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
