/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar.tsx';
import { Hero } from './components/Hero.tsx';
import { CredibilityStrip } from './components/CredibilityStrip.tsx';
import { SolutionsSection } from './components/SolutionsSection.tsx';
import { StandardSection } from './components/StandardSection.tsx';
import { SectorsSection } from './components/SectorsSection.tsx';
import { ContactSection } from './components/ContactSection.tsx';
import { Footer } from './components/Footer.tsx';
import { ServiceModal } from './components/ServiceModal.tsx';
import { FastQuoteModal } from './components/FastQuoteModal.tsx';
import { ServiceItem } from './data/hataffData.ts';

import defaultHero from './assets/images/hataff_operators_wall_1792118861275.jpg';
import defaultSquad from './assets/images/hataff_boonie_squad_1792118836643.jpg';

export default function App() {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [quoteInitialService, setQuoteInitialService] = useState<string>('Manned Guarding');
  const [quoteInitialSector, setQuoteInitialSector] = useState<string>('Commercial');

  const [heroImage] = useState<string>(() => {
    try {
      return localStorage.getItem('hataff_hero_image') || defaultHero;
    } catch {
      return defaultHero;
    }
  });

  const [standardImage] = useState<string>(() => {
    try {
      return localStorage.getItem('hataff_standard_image') || defaultSquad;
    } catch {
      return defaultSquad;
    }
  });

  const handleOpenQuote = (serviceName?: string, sectorName?: string) => {
    if (serviceName) setQuoteInitialService(serviceName);
    if (sectorName) setQuoteInitialSector(sectorName);
    setQuoteModalOpen(true);
  };

  const scrollToServices = () => {
    const el = document.getElementById('services');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#FBF9F5] text-neutral-900 flex flex-col antialiased">
      {/* Top Fixed Navigation */}
      <Navbar onOpenContactModal={() => handleOpenQuote()} />

      {/* Main Page Layout */}
      <main className="flex-1">
        {/* 1. Hero Section with 3 Balaclava Tactical Operators */}
        <Hero
          onExploreServices={scrollToServices}
          onTalkSecurity={scrollToContact}
          customImage={heroImage}
        />

        {/* 2. 4-Pillars Credibility Strip */}
        <CredibilityStrip />

        {/* 3. Our Security Solutions (Manned Guarding, CCTV, Access Control) */}
        <SolutionsSection onSelectService={(service) => setSelectedService(service)} />

        {/* 4. The Hataff Standard with Full Uncropped Boonie Hats Squad Photo */}
        <StandardSection customImage={standardImage} />

        {/* 5. Sectors We Serve (Commercial, Industrial, Residential) */}
        <SectorsSection onRequestSectorQuote={(sector) => handleOpenQuote(undefined, sector)} />

        {/* 6. Contact / Management Accordion */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Service Detail Modal */}
      <ServiceModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onRequestQuote={(serviceTitle: string) => handleOpenQuote(serviceTitle)}
      />

      {/* Fast Quote / Direct Consultation Modal */}
      <FastQuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        initialService={quoteInitialService}
        initialSector={quoteInitialSector}
      />
    </div>
  );
}
