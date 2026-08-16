import React from 'react';
import { ArrowRight, Gavel, Globe, Wrench, Sliders, Check } from 'lucide-react';
import './OurServices.css';

export default function OurServices({ onOpenServiceModal, t }) {
  const servicesData = [
    {
      id: '01',
      icon: Gavel,
      tag: t('service_1_tag'),
      title: t('service_1_title'),
      desc: t('service_1_desc'),
      highlights: [
        t('service_1_check_1'),
        t('service_1_check_2'),
        t('service_1_check_3'),
        t('service_1_check_4'),
      ],
      btnText: t('service_1_btn'),
      modalTitle: 'Japanese Auction Vehicle Procurement'
    },
    {
      id: '02',
      icon: Globe,
      tag: t('service_2_tag'),
      title: t('service_2_title'),
      desc: t('service_2_desc'),
      highlights: [
        t('service_2_check_1'),
        t('service_2_check_2'),
        t('service_2_check_3'),
        t('service_2_check_4'),
      ],
      btnText: t('service_2_btn'),
      modalTitle: 'Worldwide Vehicle Shipping'
    },
    {
      id: '03',
      icon: Wrench,
      tag: t('service_3_tag'),
      title: t('service_3_title'),
      desc: t('service_3_desc'),
      highlights: [
        t('service_3_check_1'),
        t('service_3_check_2'),
        t('service_3_check_3'),
        t('service_3_check_4'),
      ],
      btnText: t('service_3_btn'),
      modalTitle: 'Vehicle Appearance Restoration'
    },
    {
      id: '04',
      icon: Sliders,
      tag: t('service_4_tag'),
      title: t('service_4_title'),
      desc: t('service_4_desc'),
      highlights: [
        t('service_4_check_1'),
        t('service_4_check_2'),
        t('service_4_check_3'),
        t('service_4_check_4'),
      ],
      btnText: t('service_4_btn'),
      modalTitle: 'Custom Interior Care & Modifications'
    }
  ];

  return (
    <section id="services" className="services-section">
      <div className="site-container">
        
        {/* Section Heading */}
        <div className="services-header">
          <span className="section-eyebrow">{t('services_eyebrow')}</span>
          <h2 className="services-title">{t('services_title')}</h2>
        </div>

        {/* Services 2x2 Grid */}
        <div className="services-grid">
          {servicesData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div key={service.id} className="service-card service-card-text">
                
                {/* Header: Icon & Eyebrow Tag */}
                <div className="service-icon-header">
                  <div className="service-icon-wrapper">
                    <IconComponent size={20} className="service-icon" />
                  </div>
                  <span className="service-tag">{service.tag}</span>
                </div>

                {/* Title */}
                <h3 className="service-card-title">{service.title}</h3>
                
                {/* Description */}
                <p className="service-card-desc">{service.desc}</p>
                
                {/* Highlights Box */}
                <div className="service-highlights-container">
                  <h4 className="service-highlights-title">{t('services_highlights_label')}</h4>
                  <ul className="service-checklist">
                    {service.highlights.map((item, idx) => (
                      <li key={idx}>
                        <Check size={16} className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA Action Button */}
                <button 
                  className="service-learn-link"
                  onClick={() => onOpenServiceModal(service.modalTitle)}
                >
                  <span>{service.btnText}</span>
                  <ArrowRight size={18} className="arrow-icon" />
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
