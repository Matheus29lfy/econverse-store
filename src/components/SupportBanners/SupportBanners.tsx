// src/components/SupportBanners/SupportBanners.tsx
import React from 'react';
import './SupportBanners.scss';

export default function SupportBanners() {
  return (
    <section className="support-banners">
      <div className="banner-box">
        <div className="banner-gradient"></div>
        <div className="banner-content">
          <h4>Parceiros</h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn-confira">Confira</button>
        </div>
      </div>

      <div className="banner-box">
        <div className="banner-gradient"></div>
        <div className="banner-content">
          <h4>Parceiros</h4>
          <p>Lorem ipsum dolor sit amet, consectetur</p>
          <button className="btn-confira">Confira</button>
        </div>
      </div>
    </section>
  );
}