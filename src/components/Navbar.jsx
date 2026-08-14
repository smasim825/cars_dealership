import React, { useState } from 'react';
import { Menu, X, Phone, Car, Globe } from 'lucide-react';
import { CURRENCIES } from '../utils/currency';
import './Navbar.css';

export default function Navbar({ onOpenContact, currency, onCurrencyChange, language, onLanguageChange, t }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState('Home');

  const navItems = [
    { id: 'Home', label: t('nav_home') },
    { id: 'About', label: t('nav_about') },
    { id: 'Services', label: t('nav_services') },
    { id: 'Contact', label: t('nav_contact') },
  ];

  const handleNavClick = (item) => {
    setActiveNav(item.id);
    setMobileOpen(false);

    if (item.id === 'Contact') {
      onOpenContact();
      return;
    }

    const sectionId = item.id.toLowerCase();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="navbar-header">
      <div className="site-container navbar-inner">
        {/* Logo */}
        <a href="#" className="navbar-brand">
          <img 
            src="/assets/elite.png" 
            alt="Elite Motors Logo" 
            className="navbar-logo-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="navbar-logo-fallback">
            <Car size={26} className="logo-car-icon" />
            <span className="logo-text">ELITE MOTORS</span>
          </div>
        </a>

        {/* Desktop Navigation Links & Language Toggle */}
        <div className="navbar-right-group">
          <nav className="navbar-desktop-nav">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`nav-link-btn ${activeNav === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Language Selector Pill */}
          <div className="language-selector-pill">
            <Globe size={15} className="language-icon" />
            <select 
              value={language} 
              onChange={(e) => onLanguageChange(e.target.value)}
              className="language-select-input"
              aria-label="Select Language"
            >
              <option value="EN">🇬🇧 English</option>
              <option value="JA">🇯🇵 日本語</option>
            </select>
          </div>
        </div>

        {/* Mobile Toggle Button */}
        <button 
          className="navbar-mobile-toggle"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Drawer */}
        {mobileOpen && (
          <div className="navbar-mobile-menu animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item)}
                className={`mobile-nav-link ${activeNav === item.id ? 'active' : ''}`}
              >
                {item.label}
              </button>
            ))}

            <div className="mobile-controls-row">
              {/* Language Selector Pill */}
              <div className="language-selector-pill">
                <Globe size={15} />
                <select 
                  value={language} 
                  onChange={(e) => onLanguageChange(e.target.value)}
                  className="language-select-input"
                >
                  <option value="EN">🇬🇧 English</option>
                  <option value="JA">🇯🇵 日本語</option>
                </select>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
