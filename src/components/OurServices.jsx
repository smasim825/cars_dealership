import React from 'react';
import { ArrowRight, Shield, Award, Wrench, Headphones } from 'lucide-react';
import './OurServices.css';

export default function OurServices({ onOpenServiceModal, t }) {
  return (
    <section id="services" className="services-section">
      <div className="site-container">
        
        {/* Section Heading */}
        <div className="services-header">
          <span className="section-eyebrow">{t('services_eyebrow')}</span>
          <h2 className="services-title">{t('services_title')}</h2>
        </div>

        {/* Bento Grid */}
        <div className="services-grid">
          
          {/* Card 1: All Brands Card */}
          <div className="service-card service-card-text">
            <div className="service-icon-header">
              <Award size={26} className="service-icon" />
              <span className="service-tag">{t('service_1_tag')}</span>
            </div>
            <h3 className="service-card-title">{t('service_1_title')}</h3>
            <p className="service-card-desc">
              {t('service_1_desc')}
            </p>
            <ul className="service-checklist">
              <li>Direct Factory Procurement</li>
              <li>Global Export & Custom Tariffs</li>
              <li>Authenticity Guaranteed</li>
            </ul>
            <button 
              className="service-learn-link"
              onClick={() => onOpenServiceModal('All Luxury Brands Procurement')}
            >
              <span>{t('service_1_btn')}</span>
              <ArrowRight size={18} className="arrow-icon" />
            </button>
          </div>

          {/* Card 2: Luxury Interior Image Card */}
          <div 
            className="service-card service-card-image"
            onClick={() => onOpenServiceModal('Luxury Upholstery & Bespoke Interiors')}
          >
            <img 
              src="/assets/Rectangle 148.png" 
              alt="Luxury Car Leather Seats Interior" 
              className="service-img" 
            />
            <div className="service-img-overlay">
              <span className="overlay-tag">{t('service_2_tag')}</span>
              <h4 className="overlay-title">{t('service_2_title')}</h4>
            </div>
          </div>

          {/* Card 3: Cockpit Console Image Card */}
          <div 
            className="service-card service-card-image"
            onClick={() => onOpenServiceModal('Cockpit Detailing & Performance Tuning')}
          >
            <img 
              src="/assets/Rectangle 150.png" 
              alt="Luxury Car Shifter & Dashboard Console" 
              className="service-img" 
            />
            <div className="service-img-overlay">
              <span className="overlay-tag">{t('service_3_tag')}</span>
              <h4 className="overlay-title">{t('service_3_title')}</h4>
            </div>
          </div>

          {/* Card 4: Free Support Card */}
          <div className="service-card service-card-text">
            <div className="service-icon-header">
              <Headphones size={26} className="service-icon" />
              <span className="service-tag">{t('service_4_tag')}</span>
            </div>
            <h3 className="service-card-title">{t('service_4_title')}</h3>
            <p className="service-card-desc">
              {t('service_4_desc')}
            </p>
            <ul className="service-checklist">
              <li>Flatbed Enclosed Towing</li>
              <li>Annual Maintenance Valet</li>
              <li>Immediate Replacement Vehicle</li>
            </ul>
            <button 
              className="service-learn-link"
              onClick={() => onOpenServiceModal('VIP 24/7 Concierge Support')}
            >
              <span>{t('service_4_btn')}</span>
              <ArrowRight size={18} className="arrow-icon" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
