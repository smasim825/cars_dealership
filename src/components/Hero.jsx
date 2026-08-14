import React, { useState, useEffect } from 'react';
import { Search, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';
import { CAR_BODY_TYPES } from '../data/cars';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import './Hero.css';

const COLOR_OPTIONS = [
  { 
    id: 'white', 
    name: 'Pearl White', 
    hex: '#FFFFFF', 
    image: '/assets/white-midsize-city-suv-family-black-background-3d-rendering_101266-20790-removebg-preview 1.png', 
    glow: 'radial-gradient(circle, rgba(255, 255, 255, 0.35) 0%, rgba(255, 255, 255, 0) 70%)' 
  },
  { 
    id: 'black', 
    name: 'Stealth Onyx', 
    hex: '#1E293B', 
    image: '/assets/black.png', 
    glow: 'radial-gradient(circle, rgba(59, 130, 246, 0.35) 0%, rgba(59, 130, 246, 0) 70%)' 
  },
  { 
    id: 'blue', 
    name: 'Royal Blue', 
    hex: '#2563EB', 
    image: '/assets/blue.png', 
    glow: 'radial-gradient(circle, rgba(37, 99, 235, 0.45) 0%, rgba(37, 99, 235, 0) 70%)' 
  },
  { 
    id: 'red', 
    name: 'Crimson Red', 
    hex: '#DC2626', 
    image: '/assets/red.png', 
    glow: 'radial-gradient(circle, rgba(220, 38, 38, 0.45) 0%, rgba(220, 38, 38, 0) 70%)' 
  },
  { 
    id: 'green', 
    name: 'Emerald Jade', 
    hex: '#10B981', 
    image: '/assets/green.png', 
    glow: 'radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(16, 185, 129, 0) 70%)' 
  }
];

export default function Hero({ onReadMore, onQuickSearch, t }) {
  const [selectedColor, setSelectedColor] = useState(COLOR_OPTIONS[0]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [selectedBodyType, setSelectedBodyType] = useState('all');

  // Preload all color images in memory for zero-lag color switching
  useEffect(() => {
    COLOR_OPTIONS.forEach((opt) => {
      const img = new Image();
      img.src = opt.image;
    });
  }, []);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    onQuickSearch(searchKeyword, selectedBodyType);
    const element = document.getElementById('categories');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="hero-section">
      {/* Background Decorative Ellipse Orbs */}
      <div className="hero-bg-ellipses">
        <img src="/assets/Ellipse 1.png" alt="" className="hero-ellipse-1" />
        <img src="/assets/Ellipse 2.png" alt="" className="hero-ellipse-2" />
        <img src="/assets/Ellipse 3.png" alt="" className="hero-ellipse-3" />
        <img src="/assets/Ellipse 4.png" alt="" className="hero-ellipse-4" />
      </div>

      <div className="site-container hero-container">

        {/* Left Text & Interactive Search */}
        <div className="hero-text-content">
          <Badge variant="default" className="hero-vip-badge animate-fade-in">
            <Sparkles size={14} className="sparkle-icon" />
            <span>{t('hero_badge')}</span>
          </Badge>

          <h1 className="hero-title">
            {t('hero_title_1')} <br />
            <span className="hero-title-italic">{t('hero_title_2')}</span>
          </h1>

          <p className="hero-subtitle">
            {t('hero_subtitle')}
          </p>

          {/* Search Filter Bar Component */}
          <form className="hero-search-bar" onSubmit={handleSearchSubmit}>
            <div className="search-input-group">
              <Search size={18} className="search-icon" />
              <input
                type="text"
                placeholder={t('hero_search_placeholder')}
                value={searchKeyword}
                onChange={(e) => setSearchKeyword(e.target.value)}
                className="hero-search-input"
              />
            </div>

            {/* Custom Styled Select Pill with Custom Chevron */}
            <div className="hero-select-wrapper">
              <select
                value={selectedBodyType}
                onChange={(e) => setSelectedBodyType(e.target.value)}
                className="hero-select-body"
              >
                <option value="all">{t('hero_all_types')}</option>
                {CAR_BODY_TYPES.map((type) => (
                  <option key={type.id} value={type.id}>
                    {type.name}
                  </option>
                ))}
              </select>
              <ChevronDown size={14} className="hero-select-chevron" />
            </div>

            <Button type="submit" variant="default" className="hero-search-btn">
              <span>{t('hero_explore_btn')}</span>
              <ArrowRight size={16} />
            </Button>
          </form>

          {/* Quick Stats Counter */}
          <div className="hero-stats-row">
            <div className="hero-stat-item">
              <span className="stat-number">{t('hero_stat_1_val')}</span>
              <span className="stat-label">{t('hero_stat_1_lbl')}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="stat-number">{t('hero_stat_2_val')}</span>
              <span className="stat-label">{t('hero_stat_2_lbl')}</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat-item">
              <span className="stat-number">{t('hero_stat_3_val')}</span>
              <span className="stat-label">{t('hero_stat_3_lbl')}</span>
            </div>
          </div>
        </div>

        {/* Right Car Showcase with Smooth Cross-Fade Color Customizer */}
        <div className="hero-image-wrapper">
          {/* Soft 3D Radial Spotlight Ambient Aura Glow */}
          <div
            className="hero-car-aura"
            style={{ background: selectedColor.glow }}
          />

          {/* Layered Color Image Stack for Silky Smooth Cross-Fade */}
          <div className="hero-car-img-container">
            {COLOR_OPTIONS.map((c) => (
              <img
                key={c.id}
                src={c.image}
                alt={`Elite Motors ${c.name} Luxury SUV`}
                className={`hero-car-img-layer ${selectedColor.id === c.id ? 'active' : ''}`}
              />
            ))}
          </div>

          {/* Interactive Color Switcher Controls */}
          <div className="hero-color-picker-card">
            <span className="color-picker-title">CUSTOMIZE FINISH</span>
            <div className="color-pills-group">
              {COLOR_OPTIONS.map((c) => (
                <button
                  key={c.id}
                  onClick={() => setSelectedColor(c)}
                  className={`color-pill-btn ${selectedColor.id === c.id ? 'active' : ''}`}
                  title={c.name}
                  aria-label={`Select ${c.name}`}
                >
                  <span className="color-dot" style={{ backgroundColor: c.hex }} />
                </button>
              ))}
            </div>
            <span className="color-selected-label">{selectedColor.name}</span>
          </div>
        </div>

      </div>
    </section>
  );
}
