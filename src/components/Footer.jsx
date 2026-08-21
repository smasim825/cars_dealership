import React from 'react';
import { Car, Phone, Mail, MapPin, MessageCircle } from 'lucide-react';
import './Footer.css';

const InstagramIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

export default function Footer({ onOpenContact, t }) {
  const navLinks = [
    { label: t('nav_home'), target: 'home' },
    { label: t('nav_about'), target: 'categories' },
    { label: t('nav_services'), target: 'services' },
    { label: t('nav_contact'), action: onOpenContact },
  ];

  const handleNavClick = (link) => {
    if (link.action) {
      link.action();
      return;
    }
    const element = document.getElementById(link.target);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="site-footer">
      <div className="site-container footer-inner">
        
        {/* Left Branding */}
        <div className="footer-brand">
          <img 
            src="/assets/elite.png" 
            alt="Elite Motors Logo" 
            className="footer-logo-img"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div className="footer-logo-fallback">
            <Car size={24} className="footer-car-icon" />
            <span>ELITE MOTORS</span>
          </div>

          {/* Social Media Links */}
          <div className="footer-social-row">
            <a href="https://www.instagram.com/elitemotors.jp" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61583871712323&mibextid=wwXIfr&rdid=42cwM3xzoQC4548l&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F18hkdtpTjQ%2F%3Fmibextid%3DwwXIfr#" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="Facebook">
              <FacebookIcon />
            </a>
            <a href="https://wa.me/817091717196" target="_blank" rel="noopener noreferrer" className="footer-social-link" title="WhatsApp">
              <MessageCircle size={18} />
            </a>
          </div>
        </div>

        {/* Center Quick Navigation */}
        <nav className="footer-nav">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => handleNavClick(link)}
              className="footer-nav-link"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Right Contact Info */}
        <div className="footer-contact">
          <a href="tel:0492736085" className="contact-item contact-phone">
            Tel: 0492 73 6085
          </a>
          <a href="https://wa.me/817091717196" target="_blank" rel="noopener noreferrer" className="contact-item contact-phone">
            WhatsApp: +81 70-9171-7196
          </a>
          <a href="mailto:elitemotorsjp@gmail.com" className="contact-item contact-email">
            elitemotorsjp@gmail.com
          </a>
          <div className="contact-item contact-address" style={{ whitespace: 'pre-line' }}>
            {t('footer_address')}
          </div>
        </div>

      </div>

      <div className="footer-bottom site-container">
        <p>© {new Date().getFullYear()} {t('footer_rights')}</p>
      </div>
    </footer>
  );
}
