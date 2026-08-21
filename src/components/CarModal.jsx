import React, { useState } from 'react';
import { X, Gauge, Zap, Shield, Car, Sparkles, CheckCircle2, Volume2, MapPin, Phone, MessageCircle } from 'lucide-react';
import { playEngineRev } from '../utils/engineSound';
import { formatPrice } from '../utils/currency';
import { Tabs, TabsList, TabsTrigger, TabsContent } from './ui/tabs';
import ImageCarousel from './ImageCarousel';
import './CarModal.css';

const SPEC_KEY_LABELS = {
  engine: { EN: 'Engine', JA: 'エンジン' },
  mileage: { EN: 'Mileage', JA: '走行距離' },
  shaken: { EN: 'Shaken Inspection', JA: '車検有効期限' },
  transmission: { EN: 'Transmission', JA: 'トランスミッション' },
  auctionGrade: { EN: 'Auction Grade', JA: 'オークション評価' },
  model: { EN: 'Model Code', JA: '型式 (モデル)' },
  grade: { EN: 'Grade Edition', JA: 'グレード' },
  drive: { EN: 'Drivetrain', JA: '駆動方式' },
  bodyType: { EN: 'Body Type', JA: 'ボディタイプ' },
};

export default function CarModal({ car, onClose, currency, language, t }) {
  const [activeTab, setActiveTab] = useState('overview');

  if (!car) return null;

  const isSold = car.status === 'sold';
  const hasMultipleImages = car.images && car.images.length > 1;

  const carTitle = (language === 'JA' && car.name_ja) ? car.name_ja : car.name;
  const carSubtitle = (language === 'JA' && car.subtitle_ja) ? car.subtitle_ja : car.subtitle;
  const carDesc = (language === 'JA' && car.description_ja) ? car.description_ja : car.description;
  const carFeatures = (language === 'JA' && car.features_ja) ? car.features_ja : (car.features || []);

  const engineVal = (language === 'JA' && car.specs_ja?.engine) ? car.specs_ja.engine : (car.specs?.engine || '—');
  const mileageVal = (language === 'JA' && car.specs_ja?.mileage) ? car.specs_ja.mileage : (car.specs?.mileage || '—');
  const transmissionVal = (language === 'JA' && car.specs_ja?.transmission) ? car.specs_ja.transmission : (car.specs?.transmission || '—');

  const specsToDisplay = car.specs ? Object.entries(car.specs) : [];

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
            {isSold && <div className="modal-sold-ribbon">{t('status_sold')}</div>}
            <div className="modal-car-image-container">
              {hasMultipleImages ? (
                <ImageCarousel images={car.images} alt={carTitle} />
              ) : (
                <img src={car.image} alt={carTitle} className="modal-car-img" />
              )}
            </div>

            {/* Quick Spec Highlights Bar */}
            <div className="modal-spec-highlight-grid">
              <div className="spec-highlight-box">
                <Gauge size={18} className="spec-highlight-icon" />
                <span className="spec-highlight-val">{engineVal}</span>
                <span className="spec-highlight-lbl">{t('lbl_engine')}</span>
              </div>
              <div className="spec-highlight-box">
                <Zap size={18} className="spec-highlight-icon" />
                <span className="spec-highlight-val">{mileageVal}</span>
                <span className="spec-highlight-lbl">{t('lbl_mileage')}</span>
              </div>
              <div className="spec-highlight-box">
                <Shield size={18} className="spec-highlight-icon" />
                <span className="spec-highlight-val">{transmissionVal}</span>
                <span className="spec-highlight-lbl">{t('lbl_transmission')}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Vehicle Overview & Technical Specs */}
          <div className="modal-details">
            
            <div className="modal-header-row">
              <div>
                <h2 className="modal-car-title">{carTitle}</h2>
                <span className="modal-car-subtitle">{carSubtitle || ''}</span>
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
                  {carDesc || ''}
                </p>

                {/* Dynamic Features from car data */}
                {carFeatures && carFeatures.length > 0 && (
                  <div className="modal-features-list">
                    {carFeatures.map((feat, idx) => (
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
                      <span>{t('modal_whatsapp')}</span>
                    </a>
                    <a href="tel:0492736085" className="modal-action-btn-secondary">
                      <Phone size={18} />
                      <span>{t('concierge_call')}</span>
                    </a>
                  </div>
                )}

                {isSold && (
                  <div className="modal-sold-notice">
                    <p>{t('sold_notice_text')}</p>
                    <a href="https://wa.me/817091717196" target="_blank" rel="noopener noreferrer" className="modal-action-btn-primary whatsapp-btn">
                      <MessageCircle size={18} />
                      <span>{t('modal_whatsapp_contact')}</span>
                    </a>
                  </div>
                )}
              </TabsContent>

              {/* Tab 2: Full Specifications */}
              <TabsContent value="specs" className="modal-tab-content animate-fade-in">
                <div className="modal-specs-table">
                  {specsToDisplay.map(([key, val]) => {
                    const keyLabel = SPEC_KEY_LABELS[key]?.[language] || SPEC_KEY_LABELS[key]?.EN || key.replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase());
                    const valueDisplay = (language === 'JA' && car.specs_ja?.[key]) ? car.specs_ja[key] : val;
                    return (
                      <div key={key} className="specs-table-row">
                        <span className="specs-table-key">{keyLabel}</span>
                        <span className="specs-table-val">{valueDisplay}</span>
                      </div>
                    );
                  })}
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
