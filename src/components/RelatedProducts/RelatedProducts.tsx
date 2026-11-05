// src/components/RelatedProducts/RelatedProducts.tsx
import React, { useState, useRef } from 'react';
import type { Product } from '../../types/product';
import ProductCard from '../ProductCard/ProductCard';
import './RelatedProducts.scss';

interface RelatedProductsProps {
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

const TABS = ['CELULAR', 'ACESSÓRIOS', 'TABLETS', 'NOTEBOOKS', 'TVS', 'VER TODOS'];

export default function RelatedProducts({ products, onSelectProduct }: RelatedProductsProps) {
  const [activeTab, setActiveTab] = useState('CELULAR');
  const carouselRef = useRef<HTMLDivElement>(null);

  // Função para mover o carrossel para a esquerda ou direita ao clicar nas setas
  const handleScroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = 322; // Largura do card (304px) + espaçamento (18px)
      carouselRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="related-products-container">
      <div className="title-area">
        <div className="line"></div>
        <h3>Produtos relacionados</h3>
        <div className="line"></div>
      </div>

      {/* Abas de Categorias */}
      <div className="tabs-bar">
        {TABS.map((tab) => (
          <button
            key={tab}
            className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Carrossel com Setas Posicionadas Corretamente */}
      <div className="carousel-wrapper">
        <button 
          className="arrow-btn prev" 
          onClick={() => handleScroll('left')}
          aria-label="Anterior"
        >
          ❮
        </button>

        <div className="grid-products" ref={carouselRef}>
          {products.map((product, index) => (
            <ProductCard
              key={index}
              product={product}
              onClick={() => onSelectProduct(product)}
            />
          ))}
        </div>

        <button 
          className="arrow-btn next" 
          onClick={() => handleScroll('right')}
          aria-label="Próximo"
        >
          ❯
        </button>
      </div>
    </section>
  );
}