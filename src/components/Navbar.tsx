import React, { useState, useEffect } from 'react';
import { HataffLogo } from './HataffLogo.tsx';
import { ArrowUpRight, Menu, X, PhoneCall } from 'lucide-react';

interface NavbarProps {
  onOpenContactModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenContactModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'services', 'sectors', 'contact'];
      for (const section of sections.reverse()) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const navLinks = [
    { label: 'Home', target: 'home' },
    { label: 'About Hataff', target: 'about' },
    { label: 'Our Services', target: 'services' },
    { label: 'Sectors We Serve', target: 'sectors' },
    { label: 'Contact', target: 'contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 py-3">
      <div
        className={`max-w-7xl mx-auto rounded-2xl transition-all duration-300 border ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-neutral-200/80 py-2.5 px-4 sm:px-6'
            : 'bg-white/90 backdrop-blur-sm border-neutral-200/60 py-3 px-4 sm:px-6'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => scrollTo('home')}
            className="flex items-center text-left focus:outline-none group cursor-pointer"
          >
            <HataffLogo />
          </button>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-7 lg:gap-9">
            {navLinks.map((link) => {
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => scrollTo(link.target)}
                  className={`text-sm font-medium transition-colors relative py-1 cursor-pointer ${
                    isActive
                      ? 'text-[#1c2e1d] font-bold'
                      : 'text-neutral-600 hover:text-neutral-900'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[2.5px] bg-[#294228] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Action CTA & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => scrollTo('contact')}
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 bg-[#18281a] hover:bg-[#253e28] text-[#c2ab8a] border border-[#3c553a] text-sm font-bold rounded-xl shadow-sm hover:shadow transition-all duration-200 group cursor-pointer"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg focus:outline-none"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden mt-2 max-w-7xl mx-auto bg-white rounded-2xl shadow-xl border border-neutral-200/80 p-5 animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.target}
                onClick={() => scrollTo(link.target)}
                className={`text-left px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.target
                    ? 'bg-[#1e3422]/10 text-[#1e3422] font-semibold'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="pt-2 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  scrollTo('contact');
                }}
                className="w-full flex items-center justify-center gap-2 py-3 bg-[#172719] text-white font-medium rounded-xl"
              >
                <span>Get in Touch</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 bg-neutral-100 text-neutral-800 text-sm font-medium rounded-xl"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Request Fast Security Call</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
