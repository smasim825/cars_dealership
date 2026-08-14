import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CarTypes from './components/CarTypes';
import About from './components/About';
import TopCategories from './components/TopCategories';
import OurServices from './components/OurServices';
import Footer from './components/Footer';
import CarModal from './components/CarModal';
import ContactModal from './components/ContactModal';
import ConciergeWidget from './components/ConciergeWidget';
import { FEATURED_CAR } from './data/cars';

import { TRANSLATIONS } from './utils/translations';

export default function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedBodyType, setSelectedBodyType] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [contactModalTitle, setContactModalTitle] = useState(null);
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [currency, setCurrency] = useState('JPY');
  const [language, setLanguage] = useState('EN');

  const t = (key) => TRANSLATIONS[language]?.[key] || TRANSLATIONS.EN[key] || key;

  const handleReadMoreHero = () => {
    setSelectedCar(FEATURED_CAR);
  };

  const handleQuickSearch = (keyword, bodyType) => {
    setSearchQuery(keyword);
    if (bodyType !== 'all') {
      setSelectedBodyType(bodyType);
    } else {
      setSelectedBodyType(null);
    }
  };

  const handleOpenContact = () => {
    setContactModalTitle(null);
    setIsContactOpen(true);
  };

  const handleOpenServiceModal = (serviceTitle) => {
    setContactModalTitle(serviceTitle);
    setIsContactOpen(true);
  };

  return (
    <div className="modrino-app dark-mode">
      {/* Header Navigation with Currency & Language Selector */}
      <Navbar 
        onOpenContact={handleOpenContact}
        currency={currency}
        onCurrencyChange={(curr) => setCurrency(curr)}
        language={language}
        onLanguageChange={(lang) => setLanguage(lang)}
        t={t}
      />

      {/* Hero Showcase with Live Color Customizer */}
      <Hero 
        onReadMore={handleReadMoreHero}
        onQuickSearch={handleQuickSearch} 
        t={t}
      />

      {/* 5-Grid Body Style Bar */}
      <CarTypes 
        selectedType={selectedBodyType} 
        onSelectType={(typeId) => setSelectedBodyType(typeId)} 
        t={t}
      />

      {/* Dedicated Brand Heritage & About Us Section */}
      <About t={t} />

      {/* Top Categories Grid with Search & Filters */}
      <TopCategories 
        selectedBodyType={selectedBodyType}
        searchQuery={searchQuery}
        onSearchChange={(val) => setSearchQuery(val)}
        onResetBodyType={() => setSelectedBodyType(null)}
        onSelectCar={(car) => setSelectedCar(car)} 
        currency={currency}
        t={t}
      />

      {/* Our Services Section */}
      <OurServices 
        onOpenServiceModal={handleOpenServiceModal} 
        t={t}
      />

      {/* Footer */}
      <Footer onOpenContact={handleOpenContact} t={t} />

      {/* 24/7 Floating VIP Concierge Widget */}
      <ConciergeWidget onOpenContact={handleOpenContact} t={t} />

      {/* Detailed Car Modal Popup */}
      {selectedCar && (
        <CarModal 
          car={selectedCar} 
          onClose={() => setSelectedCar(null)} 
          currency={currency}
          t={t}
        />
      )}

      {/* Contact Inquiry Directory Modal */}
      {isContactOpen && (
        <ContactModal 
          serviceTitle={contactModalTitle} 
          onClose={() => setIsContactOpen(false)} 
          t={t}
        />
      )}
    </div>
  );
}
