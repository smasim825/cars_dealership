import React from 'react';
import { CAR_BODY_TYPES } from '../data/cars';
import './CarTypes.css';

// SVG Vector Silhouettes for razor-sharp rendering on all devices
const BodyTypeSVG = ({ typeId }) => {
  switch (typeId) {
    case 'sedan':
      return (
        <svg viewBox="0 0 100 40" className="cartype-svg-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Sedan Silhouette */}
          <path d="M10 26 C12 20 18 20 25 19 L38 12 C44 9 60 9 68 12 L80 19 C88 20 92 22 92 26 C92 28 88 30 84 30 H16 C12 30 10 28 10 26 Z" />
          <circle cx="26" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="74" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <path d="M38 12 L68 12 L75 19 H30 Z" strokeWidth="1.8" />
        </svg>
      );
    case 'suv':
      return (
        <svg viewBox="0 0 100 40" className="cartype-svg-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* SUV Silhouette */}
          <path d="M10 27 C10 20 16 18 24 18 L32 8 C35 5 45 5 70 5 L85 14 C90 17 92 20 92 27 C92 29 88 30 84 30 H16 C12 30 10 29 10 27 Z" />
          <circle cx="25" cy="30" r="6" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="75" cy="30" r="6" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <path d="M34 8 L68 8 L77 18 H28 Z" strokeWidth="1.8" />
        </svg>
      );
    case 'cabriolet':
      return (
        <svg viewBox="0 0 100 40" className="cartype-svg-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Cabriolet Open Top Silhouette */}
          <path d="M8 26 C10 22 16 21 24 20 L42 20 C48 16 62 16 68 20 L82 20 C88 21 92 23 92 26 L88 30 H16 Z" />
          <path d="M38 20 C42 16 48 14 55 14 L55 20" strokeWidth="1.8" />
          <circle cx="24" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="76" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      );
    case 'coupe':
      return (
        <svg viewBox="0 0 100 40" className="cartype-svg-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Aerodynamic Coupe Silhouette */}
          <path d="M8 26 C10 20 18 19 28 18 L46 8 C54 7 68 9 76 18 L86 21 C92 22 94 24 94 26 L88 30 H16 Z" />
          <circle cx="25" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="75" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <path d="M44 8 L65 10 L73 18 H36 Z" strokeWidth="1.8" />
        </svg>
      );
    case 'micro':
      return (
        <svg viewBox="0 0 100 40" className="cartype-svg-icon" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          {/* Compact Micro EV Silhouette */}
          <path d="M16 26 C16 19 22 17 32 16 L42 8 C46 5 62 5 70 12 L78 16 C84 18 86 21 86 26 L80 30 H22 Z" />
          <circle cx="30" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <circle cx="70" cy="30" r="5" fill="#FFFFFF" stroke="currentColor" strokeWidth="2.5" />
          <path d="M42 8 L65 8 L72 16 H35 Z" strokeWidth="1.8" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 100 40" className="cartype-svg-icon" fill="none" stroke="currentColor" strokeWidth="2.5">
          <rect x="10" y="10" width="80" height="20" rx="4" />
        </svg>
      );
  }
};

export default function CarTypes({ selectedType, onSelectType, language, t }) {
  return (
    <section className="cartypes-section">
      <div className="site-container">
        
        {/* Header Title with Active Filter Notice */}
        <div className="cartypes-header">
          <span className="cartypes-subtitle">{t('cartypes_subtitle')}</span>
          {selectedType && (
            <button className="cartypes-clear-filter" onClick={() => onSelectType(null)}>
              {t('cartypes_clear')}
            </button>
          )}
        </div>

        {/* 5-Grid Body Style Cards */}
        <div className="cartypes-grid">
          {CAR_BODY_TYPES.map((type) => {
            const isSelected = selectedType === type.id;
            const typeNameTranslated = t(`cartype_${type.id}`) !== `cartype_${type.id}` ? t(`cartype_${type.id}`) : type.name;
            return (
              <button
                key={type.id}
                onClick={() => onSelectType(isSelected ? null : type.id)}
                className={`cartype-card ${isSelected ? 'selected' : ''}`}
                title={`Filter by ${type.name} (${type.count} available)`}
              >
                <div className="cartype-icon-container">
                  {/* Primary SVG Vector Icon */}
                  <BodyTypeSVG typeId={type.id} />
                </div>
                
                {/* Bold Car Type Name Label - ALWAYS visible */}
                <div className="cartype-meta">
                  <span className="cartype-name">{typeNameTranslated}</span>
                  <span className="cartype-count">{type.count} {t('cartypes_cars_count')}</span>
                </div>

                {isSelected && <div className="cartype-active-dot" />}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
