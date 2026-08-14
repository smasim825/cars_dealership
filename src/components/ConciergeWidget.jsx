import React, { useState } from 'react';
import { MessageSquare, X, Phone, Mail, MapPin, Sparkles, ArrowUpRight, MessageCircle } from 'lucide-react';
import './ConciergeWidget.css';

export default function ConciergeWidget({ onOpenContact, t }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="concierge-widget-wrapper">
      
      {/* Floating Action Trigger Button */}
      <button 
        className={`concierge-float-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle VIP Concierge Care"
      >
        {isOpen ? <X size={24} /> : (
          <>
            <MessageSquare size={22} />
            <span className="online-indicator-dot" />
          </>
        )}
      </button>

      {/* Popover VIP Concierge Drawer */}
      {isOpen && (
        <div className="concierge-popover animate-fade-in">
          
          {/* Header */}
          <div className="concierge-header">
            <div className="concierge-avatar-box">
              <Sparkles size={18} className="concierge-sparkle" />
            </div>
            <div>
              <h4 className="concierge-name">{t('concierge_title')}</h4>
              <span className="concierge-status">{t('concierge_status')}</span>
            </div>
            <button className="concierge-close-btn" onClick={() => setIsOpen(false)}>
              <X size={16} />
            </button>
          </div>

          {/* Directory Contact Items */}
          <div className="concierge-directory-body">
            <a href="tel:0492736085" className="concierge-dir-item">
              <div className="concierge-dir-icon">
                <Phone size={16} />
              </div>
              <div className="concierge-dir-text">
                <span>{t('concierge_call')}</span>
                <strong>0492 73 6085</strong>
              </div>
              <ArrowUpRight size={16} className="concierge-dir-arrow" />
            </a>

            <a href="https://wa.me/817091717196" target="_blank" rel="noopener noreferrer" className="concierge-dir-item">
              <div className="concierge-dir-icon whatsapp-icon">
                <MessageCircle size={16} />
              </div>
              <div className="concierge-dir-text">
                <span>WhatsApp</span>
                <strong>+81 70-9171-7196</strong>
              </div>
              <ArrowUpRight size={16} className="concierge-dir-arrow" />
            </a>

            <a href="mailto:elitemotorsjp@gmail.com" className="concierge-dir-item">
              <div className="concierge-dir-icon">
                <Mail size={16} />
              </div>
              <div className="concierge-dir-text">
                <span>{t('concierge_email')}</span>
                <strong>elitemotorsjp@gmail.com</strong>
              </div>
              <ArrowUpRight size={16} className="concierge-dir-arrow" />
            </a>

            <div className="concierge-dir-item" onClick={() => { onOpenContact(); setIsOpen(false); }}>
              <div className="concierge-dir-icon">
                <MapPin size={16} />
              </div>
              <div className="concierge-dir-text">
                <span>{t('concierge_location')}</span>
                <strong>Kawagoe, Saitama</strong>
              </div>
              <ArrowUpRight size={16} className="concierge-dir-arrow" />
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
