import React from 'react';
import { X, ArrowRightLeft, Gauge, Zap, Shield, Check, Sparkles } from 'lucide-react';
import { formatPrice } from '../utils/currency';
import './CompareCarsModal.css';

export default function CompareCarsModal({ cars, onClose, currency }) {
  if (!cars || cars.length === 0) return null;

  const car1 = cars[0];
  const car2 = cars[1] || null;

  return (
    <div className="compare-modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="compare-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="compare-modal-close" onClick={onClose} aria-label="Close Comparison">
          <X size={20} />
        </button>

        <div className="compare-header">
          <div className="compare-eyebrow">
            <ArrowRightLeft size={14} />
            <span>SIDE-BY-SIDE FLEET COMPARISON</span>
          </div>
          <h2>Vehicle Specifications Comparison</h2>
        </div>

        <div className="compare-grid-wrapper">
          <div className="compare-grid">
            
            {/* Header Column: Spec Labels */}
            <div className="compare-col spec-label-col">
              <div className="compare-car-header-stub">SPECIFICATIONS</div>
              <div className="compare-row-item label">Price</div>
              <div className="compare-row-item label">Body Style</div>
              <div className="compare-row-item label">Engine & Powertrain</div>
              <div className="compare-row-item label">Horsepower Output</div>
              <div className="compare-row-item label">0-60 MPH Acceleration</div>
              <div className="compare-row-item label">Top Velocity</div>
              <div className="compare-row-item label">Availability Status</div>
            </div>

            {/* Car 1 Column */}
            <div className="compare-col car-data-col">
              <div className="compare-car-header">
                <img src={car1.image} alt={car1.name} className="compare-car-img" />
                <h4>{car1.name}</h4>
                <span className="compare-car-brand">{car1.brand || 'ELITE MOTORS'}</span>
              </div>
              <div className="compare-row-item highlight">{formatPrice(car1.numericPrice, currency)}</div>
              <div className="compare-row-item">{(car1.type || 'Supercar').toUpperCase()}</div>
              <div className="compare-row-item">{car1.specs?.engine || 'V8 Twin-Turbo'}</div>
              <div className="compare-row-item">{car1.specs?.horsepower || '500 HP'}</div>
              <div className="compare-row-item">{car1.specs?.acceleration || '3.5s'}</div>
              <div className="compare-row-item">{car1.specs?.topSpeed || '180 mph'}</div>
              <div className="compare-row-item status">{car1.status === 'in_stock' ? 'IN STOCK' : 'PRE-OWNED'}</div>
            </div>

            {/* Car 2 Column */}
            {car2 ? (
              <div className="compare-col car-data-col">
                <div className="compare-car-header">
                  <img src={car2.image} alt={car2.name} className="compare-car-img" />
                  <h4>{car2.name}</h4>
                  <span className="compare-car-brand">{car2.brand || 'ELITE MOTORS'}</span>
                </div>
                <div className="compare-row-item highlight">{formatPrice(car2.numericPrice, currency)}</div>
                <div className="compare-row-item">{(car2.type || 'Supercar').toUpperCase()}</div>
                <div className="compare-row-item">{car2.specs?.engine || 'V8 Twin-Turbo'}</div>
                <div className="compare-row-item">{car2.specs?.horsepower || '500 HP'}</div>
                <div className="compare-row-item">{car2.specs?.acceleration || '3.5s'}</div>
                <div className="compare-row-item">{car2.specs?.topSpeed || '180 mph'}</div>
                <div className="compare-row-item status">{car2.status === 'in_stock' ? 'IN STOCK' : 'PRE-OWNED'}</div>
              </div>
            ) : (
              <div className="compare-col car-empty-col">
                <div className="empty-compare-placeholder">
                  <Sparkles size={28} className="empty-icon" />
                  <p>Select a 2nd car from the fleet grid to compare side-by-side!</p>
                </div>
              </div>
            )}

          </div>
        </div>

        <button className="compare-close-btn" onClick={onClose}>
          Close Comparison Window
        </button>
      </div>
    </div>
  );
}
