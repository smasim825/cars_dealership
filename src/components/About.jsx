import React from 'react';
import { ShieldCheck, Award, Sparkles, CheckCircle2 } from 'lucide-react';
import './About.css';

export default function About({ t }) {
  return (
    <section id="about" className="about-section">
      <div className="site-container">
        <div className="about-grid">
          
          {/* Left Text Column */}
          <div className="about-text-column">
            <div className="about-eyebrow">
              <Sparkles size={14} className="sparkle-icon" />
              <span>{t('about_eyebrow')}</span>
            </div>

            <h2 className="about-title">
              {t('about_title_1')} <br />
              <span className="about-title-highlight">{t('about_title_2')}</span>
            </h2>

            <p className="about-description">
              {t('about_desc_1')}
            </p>

            <p className="about-subdescription">
              {t('about_desc_2')}
            </p>

            {/* Feature Bullet List */}
            <div className="about-features-grid">
              <div className="about-feature-item">
                <ShieldCheck size={20} className="about-feature-icon" />
                <div>
                  <h4>{t('about_feat_1_title')}</h4>
                  <p>{t('about_feat_1_desc')}</p>
                </div>
              </div>

              <div className="about-feature-item">
                <Award size={20} className="about-feature-icon" />
                <div>
                  <h4>{t('about_feat_2_title')}</h4>
                  <p>{t('about_feat_2_desc')}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Stats Showcase Column */}
          <div className="about-visual-column">
            <div className="about-image-card">
              <img 
                src="/assets/tem.jpeg" 
                alt="ELITE MOTORS Flagship Tokyo Showcase" 
                className="about-img" 
              />
              
              {/* Floating Stat Badge 1 */}
              <div className="about-stat-badge stat-badge-top">
                <Award size={24} className="stat-badge-icon" />
                <div>
                  <span className="stat-badge-number">{t('about_stat_1_val')}</span>
                  <span className="stat-badge-label">{t('about_stat_1_lbl')}</span>
                </div>
              </div>

              {/* Floating Stat Badge 2 */}
              <div className="about-stat-badge stat-badge-bottom">
                <CheckCircle2 size={24} className="stat-badge-icon blue" />
                <div>
                  <span className="stat-badge-number">{t('about_stat_2_val')}</span>
                  <span className="stat-badge-label">{t('about_stat_2_lbl')}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
