// src/components/Brands/Brands.tsx
import React from 'react';
import './Brands.scss';

export default function Brands() {
  const brandList = [1, 2, 3, 4, 5]; // Simula as 5 marcas do layout

  return (
    <section className="brands-container">
      <h3>Navegue por marcas</h3>
      <div className="brands-grid">
        {brandList.map((_, index) => (
          <div key={index} className="brand-circle">
            <span className="brand-logo-text">econverse</span>
          </div>
        ))}
      </div>
    </section>
  );
}