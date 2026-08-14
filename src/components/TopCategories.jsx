import React, { useState } from 'react';
import { CATEGORY_TABS, FEATURED_CAR, CARS_DATA } from '../data/cars';
import { Star, Search, SlidersHorizontal, Eye, Calendar, Sparkles, MessageCircle } from 'lucide-react';
import { formatPrice } from '../utils/currency';
import { Tabs, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardFooter } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import ImageCarousel from './ImageCarousel';
import './TopCategories.css';

export default function TopCategories({
  selectedBodyType,
  searchQuery,
  onSearchChange,
  onResetBodyType,
  onSelectCar,
  currency,
  t
}) {
  const [activeTab, setActiveTab] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [favorites, setFavorites] = useState(['ferrari-f8-red']);

  const categoryTabsTranslated = CATEGORY_TABS.map(tab => ({
    ...tab,
    label: t(`tab_${tab.id}`) !== `tab_${tab.id}` ? t(`tab_${tab.id}`) : tab.label
  }));

  const toggleFavorite = (e, carId) => {
    e.stopPropagation();
    setFavorites(prev =>
      prev.includes(carId) ? prev.filter(id => id !== carId) : [...prev, carId]
    );
  };

  const queryToUse = (searchQuery || '').trim().toLowerCase();

  // Filter cars based on selected tab, selected body type, and search query
  let filteredCars = CARS_DATA.filter(car => {
    if (selectedBodyType && car.type !== selectedBodyType) return false;
    if (activeTab === 'in_stock' && car.status !== 'in_stock') return false;
    if (activeTab === 'sold' && car.status !== 'sold') return false;

    if (queryToUse) {
      const matchName = car.name.toLowerCase().includes(queryToUse);
      const matchBrand = car.brand ? car.brand.toLowerCase().includes(queryToUse) : false;
      const matchType = car.type.toLowerCase().includes(queryToUse);
      const matchEngine = car.specs?.engine ? car.specs.engine.toLowerCase().includes(queryToUse) : false;
      return matchName || matchBrand || matchType || matchEngine;
    }

    return true;
  });

  // Sorting
  if (sortBy === 'price_asc') {
    filteredCars = [...filteredCars].sort((a, b) => (a.numericPrice || 0) - (b.numericPrice || 0));
  } else if (sortBy === 'price_desc') {
    filteredCars = [...filteredCars].sort((a, b) => (b.numericPrice || 0) - (a.numericPrice || 0));
  } else if (sortBy === 'rating') {
    filteredCars = [...filteredCars].sort((a, b) => (b.rating || 0) - (a.rating || 0));
  }

  return (
    <section id="categories" className="categories-section">
      <div className="site-container">

        {/* Section Heading & Controls */}
        <div className="categories-header">
          <div>
            <span className="section-eyebrow">{t('categories_eyebrow')}</span>
            <h2 className="categories-title">{t('categories_title')}</h2>
          </div>

          <div className="categories-controls">
            <div className="categories-search-box">
              <Search size={16} className="search-icon" />
              <input
                type="text"
                placeholder={t('categories_filter_placeholder')}
                value={searchQuery || ''}
                onChange={(e) => onSearchChange && onSearchChange(e.target.value)}
                className="categories-search-input"
              />
            </div>

            <div className="categories-sort-box">
              <SlidersHorizontal size={15} className="sort-icon" />
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="categories-sort-select"
              >
                <option value="default">{t('sort_recommended')}</option>
                <option value="price_asc">{t('sort_price_asc')}</option>
                <option value="price_desc">{t('sort_price_desc')}</option>
                <option value="rating">{t('sort_rating')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Shadcn UI Tabs Bar */}
        <div className="categories-tabs-wrapper">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList>
              {categoryTabsTranslated.map((tab) => (
                <TabsTrigger key={tab.id} value={tab.id}>
                  {tab.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Featured Flagship Banner Card with Rolls Royce Demo Showcase Image */}
        {(!selectedBodyType || selectedBodyType === 'coupe') && !queryToUse && (
          <div
            className="featured-banner-card"
            onClick={() => onSelectCar(FEATURED_CAR)}
          >
            <div className="banner-bg-container">
              <img src="/assets/Rectangle 54.png" alt="" className="banner-bg-img" />
            </div>

            <div className="banner-content">
              {/* Left Column: Text Info & Specs */}
              <div className="banner-text-side">
                <Badge variant="gold" className="banner-badge">
                  <Sparkles size={14} />
                  <span>DEMO SHOWCASE EXHIBIT</span>
                </Badge>
                <h3 className="banner-car-title">{FEATURED_CAR.name}</h3>
                <p className="banner-car-subtitle">{FEATURED_CAR.description}</p>
                <div className="banner-specs-row">
                  <div className="banner-spec-item">
                    <span className="spec-val">{FEATURED_CAR.specs.engine}</span>
                    <span className="spec-lbl">Powertrain</span>
                  </div>
                  <div className="banner-spec-item">
                    <span className="spec-val">{FEATURED_CAR.specs.horsepower}</span>
                    <span className="spec-lbl">Performance</span>
                  </div>
                  <div className="banner-spec-item">
                    <span className="spec-val">{FEATURED_CAR.specs.acceleration}</span>
                    <span className="spec-lbl">0-60 MPH</span>
                  </div>
                </div>
              </div>

              {/* Center Rolls Royce Showcase Image */}
              <div className="banner-image-wrapper">
                <div className="banner-display-platform">
                  <div className="display-pedestal-glow"></div>
                  <img
                    src="/assets/beautiful-rolls-royce-car_999195-437-removebg-preview 1.png"
                    alt={FEATURED_CAR.name}
                    className="banner-car-img"
                  />
                  <div className="display-shadow-ellipse"></div>
                </div>
              </div>

              {/* Right Column: Glassmorphic Action Card */}
              <div className="banner-right-card">
                <div className="banner-luxury-tag">
                  <Sparkles size={14} className="banner-tag-icon" />
                  <span>Luxury Showcase</span>
                </div>
                <Button variant="default" className="banner-learn-btn">
                  <Eye size={16} />
                  <span>{t('explore_specs')}</span>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* Fleet Grid Showcase */}
        {filteredCars.length === 0 ? (
          <div className="no-cars-found">
            <p>{t('no_cars_found')}</p>
            <Button
              onClick={() => {
                setActiveTab('all');
                onSearchChange && onSearchChange('');
                onResetBodyType && onResetBodyType();
              }}
              variant="default"
              className="reset-filter-btn"
            >
              {t('reset_filters')}
            </Button>
          </div>
        ) : (
          <div className="cars-grid">
            {filteredCars.map((car) => {
              const isFav = favorites.includes(car.id);

              return (
                <Card
                  key={car.id}
                  className="car-card"
                  onClick={() => onSelectCar(car)}
                >
                  <div className="car-card-image-box">
                    {/* Status Badge */}
                    {car.status === 'in_stock' && (
                      <span className="car-status-tag status-in-stock">● {t('in_stock')}</span>
                    )}
                    {car.status === 'sold' && (
                      <span className="car-status-tag status-sold">SOLD</span>
                    )}

                    {/* Favorite Star Button */}
                    <button
                      className={`car-fav-btn ${isFav ? 'active' : ''}`}
                      onClick={(e) => toggleFavorite(e, car.id)}
                      title={isFav ? "Remove from Favorites" : "Add to Favorites"}
                    >
                      <Star size={16} fill={isFav ? '#F59E0B' : 'transparent'} color={isFav ? '#F59E0B' : '#94A3B8'} />
                    </button>

                    <img
                      src={car.image}
                      alt={car.name}
                      className="car-card-img"
                      loading="lazy"
                    />
                  </div>

                  <CardContent className="car-card-details">
                    <div className="car-brand-row">
                      <span className="car-brand-name">{car.brand || 'ELITE MOTORS'}</span>
                      <div className="car-rating-box">
                        <Star size={13} fill="#F59E0B" color="#F59E0B" />
                        <span>{car.rating || '4.9'}</span>
                      </div>
                    </div>

                    <h4 className="car-title">{car.name}</h4>

                    {/* Key Specifications Badges */}
                    <div className="car-specs-row">
                      {car.specs?.horsepower && (
                        <Badge variant="secondary" className="spec-badge">{car.specs.horsepower}</Badge>
                      )}
                      {car.specs?.acceleration && (
                        <Badge variant="secondary" className="spec-badge">{car.specs.acceleration}</Badge>
                      )}
                      {car.year && (
                        <Badge variant="secondary" className="spec-badge">
                          <Calendar size={11} />
                          {car.year}
                        </Badge>
                      )}
                    </div>
                  </CardContent>

                  <CardFooter className="car-card-footer">
                    <Button
                      variant="secondary"
                      className="car-card-view-btn full-width-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        onSelectCar(car);
                      }}
                    >
                      <Eye size={15} />
                      <span>{t('view_specs')}</span>
                    </Button>
                  </CardFooter>
                </Card>
              );
            })}
          </div>
        )}

      </div>
    </section>
  );
}
