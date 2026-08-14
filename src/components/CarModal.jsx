import React, { useState } from 'react';
import { X, Gauge, Zap, Shield, Car, Sparkles, CheckCircle2, Volume2, MapPin, Phone, MessageCircle } from 'lucide-react';
import { playEngineRev } from '../utils/engineSound';
import { formatPrice } from '../utils/currency';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import ImageCarousel from './ImageCarousel';
import './CarModal.css';

export default function CarModal({ car, onClose, currency, t }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!car) return null;

  const isSold = car.status === 'sold';
  const hasMultipleImages = car.images && car.images.length > 1;
  const priceDisplay = isSold ? 'Recently Sold' : (car.numericPrice > 0 ? formatPrice(car.numericPrice, currency) : 'Price on Request');

  return (
    <div className="modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="modal-content-card" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        <div className="modal-grid">
          
          {/* Left Column: Visual Showcase & Specs */}
          <div className="modal-visual">
            <div className="modal-brand-badge">{car.brand || 'ELITE MOTORS'}</div>
            {isSold && <div className="modal-sold-ribbon">SOLD</div>}
            <div className="modal-car-image-container">
              {hasMultipleImages ? (
                <ImageCarousel images={car.images} alt={car.name} />
              ) : (
                <img src={car.image} alt={car.name} className="modal-car-img" />
              )}
            </div>

            {/* Quick Spec Highlights Bar */}
            <div className="modal-spec-highlight-grid">
              <div className="spec-highlight-box">
                <Gauge size={18} className="spec-highlight-icon" />
                <span className="spec-highlight-val">{car.specs?.engine || '—'}</span>
                <span className="spec-highlight-lbl">{t('modal_power')}</span>
              </div>
              <div className="spec-highlight-box">
                <Zap size={18} className="spec-highlight-icon" />
                <span className="spec-highlight-val">{car.specs?.mileage || '—'}</span>
                <span className="spec-highlight-lbl">Mileage</span>
              </div>
              <div className="spec-highlight-box">
                <Shield size={18} className="spec-highlight-icon" />
                <span className="spec-highlight-val">{car.specs?.transmission || '—'}</span>
                <span className="spec-highlight-lbl">Transmission</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vehicle Overview & Technical Specs */}
          <div className="modal-details">
            
            <div className="modal-header-row">
              <div>
                <h2 className="modal-car-title">{car.name}</h2>
                <span className="modal-car-subtitle">{car.subtitle || ''}</span>
              </div>
            </div>

            {/* Official Shadcn UI Tabs Primitive Navigation */}
            <Tabs value={activeTab} onValueChange={setActiveTab}>
              <TabsList className="modal-tabs-list-full">
                <TabsTrigger value="overview" className="modal-tab-trigger-full">
                  {t('modal_overview')}
                </TabsTrigger>
                <TabsTrigger value="specs" className="modal-tab-trigger-full">
                  {t('modal_specs')}
                </TabsTrigger>
              </TabsList>

              {/* Tab 1: Overview */}
              <TabsContent value="overview" className="modal-tab-content animate-fade-in">
                <p className="modal-car-desc">
                  {car.description || ''}
                </p>

                {/* Dynamic Features from car data */}
                {car.features && car.features.length > 0 && (
                  <div className="modal-features-list">
                    {car.features.map((feat, idx) => (
                      <div key={idx} className="feature-pill">
                        <CheckCircle2 size={14} />
                        {feat}
                      </div>
                    ))}
                  </div>
                )}

                {/* Contact CTA for available cars */}
                {!isSold && (
                  <div className="modal-cta-row">
                    <a href="https://wa.me/817091717196" target="_blank" rel="noopener noreferrer" className="modal-action-btn-primary whatsapp-btn">
                      <MessageCircle size={18} />
                      <span>WhatsApp Inquiry</span>
                    </a>
                    <a href="tel:0492736085" className="modal-action-btn-secondary">
                      <Phone size={18} />
                      <span>Call Showroom</span>
                    </a>
                  </div>
                )}

                {isSold && (
                  <div className="modal-sold-notice">
                    <p>This vehicle has been sold. Contact us for similar vehicles.</p>
                    <a href="https://wa.me/817091717196" target="_blank" rel="noopener noreferrer" className="modal-action-btn-primary whatsapp-btn">
                      <MessageCircle size={18} />
                      <span>Contact via WhatsApp</span>
                    </a>
                  </div>
                )}
              </TabsContent>

              {/* Tab 2: Full Specifications */}
              <TabsContent value="specs" className="modal-tab-content animate-fade-in">
                <div className="modal-specs-table">
                  {car.specs && Object.entries(car.specs).map(([key, val]) => (
                    <div key={key} className="specs-table-row">
                      <span className="specs-table-key">{key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase())}</span>
                      <span className="specs-table-val">{val}</span>
                    </div>
                  ))}
                </div>

                <button className="modal-action-btn-primary" onClick={onClose}>
                  <CheckCircle2 size={18} />
                  <span>{t('modal_close_specs')}</span>
                </button>
              </TabsContent>
            </Tabs>

          </div>

        </div>
      </div>
    </div>
  );
}
