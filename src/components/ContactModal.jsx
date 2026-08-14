import React from 'react';
import { X, Mail, Phone, MapPin, Clock, Sparkles, MessageCircle } from 'lucide-react';
import './ContactModal.css';

export default function ContactModal({ serviceTitle, onClose, t }) {
  return (
    <div className="contact-modal-backdrop animate-fade-in" onClick={onClose}>
      <div className="contact-modal-card" onClick={(e) => e.stopPropagation()}>
        <button className="contact-modal-close" onClick={onClose} aria-label="Close">
          <X size={22} />
        </button>

        <div className="contact-modal-header">
          <div className="contact-eyebrow">
            <Sparkles size={14} />
            <span>{t('contact_eyebrow')}</span>
          </div>
          <h2>{serviceTitle ? `ELITE MOTORS - ${serviceTitle}` : t('contact_title_default')}</h2>
          <p>Direct contact channels for our automotive showroom.</p>
        </div>

        <div className="contact-info-list">
          <a href="tel:0492736085" className="contact-info-card">
            <div className="contact-info-icon-box">
              <Phone size={20} />
            </div>
            <div>
              <span className="contact-info-label">Tel</span>
              <span className="contact-info-value">0492 73 6085</span>
            </div>
          </a>

          <a href="https://wa.me/817091717196" target="_blank" rel="noopener noreferrer" className="contact-info-card">
            <div className="contact-info-icon-box whatsapp-icon-box">
              <MessageCircle size={20} />
            </div>
            <div>
              <span className="contact-info-label">Phone / WhatsApp</span>
              <span className="contact-info-value">+81 70-9171-7196</span>
            </div>
          </a>

          <a href="mailto:elitemotorsjp@gmail.com" className="contact-info-card">
            <div className="contact-info-icon-box">
              <Mail size={20} />
            </div>
            <div>
              <span className="contact-info-label">{t('contact_email_label')}</span>
              <span className="contact-info-value">elitemotorsjp@gmail.com</span>
            </div>
          </a>

          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <MapPin size={20} />
            </div>
            <div>
              <span className="contact-info-label">{t('contact_showroom_label')}</span>
              <span className="contact-info-value">17-3 Aina Shinden, Kawagoe City, Saitama Prefecture, Japan</span>
            </div>
          </div>

          <div className="contact-info-card">
            <div className="contact-info-icon-box">
              <Clock size={20} />
            </div>
            <div>
              <span className="contact-info-label">{t('contact_hours_label')}</span>
              <span className="contact-info-value">{t('contact_hours_val')}</span>
            </div>
          </div>
        </div>

        {/* Social Media Links */}
        <div className="contact-social-row">
          <a href="https://www.instagram.com/elitemotors.jp" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
            Instagram @elitemotors.jp
          </a>
          <a href="https://www.facebook.com/profile.php?id=61583871712323&mibextid=wwXIfr&rdid=42cwM3xzoQC4548l&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18hkdtpTjQ%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="contact-social-btn">
            Facebook
          </a>
        </div>

        <button className="contact-done-btn" onClick={onClose}>
          {t('contact_close')}
        </button>
      </div>
    </div>
  );
}
