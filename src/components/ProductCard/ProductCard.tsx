// src/components/ProductCard/ProductCard.tsx
import React from 'react';
import type { Product } from '../../types/product';
import './ProductCard.scss';

interface ProductCardProps {
  product: Product;
  onClick: () => void;
}

export default function ProductCard({ product, onClick }: ProductCardProps) {
  // Simula um preço anterior ligeiramente maior para o efeito de desconto do layout
  const oldPrice = product.price * 1.2;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  };

  return (
    <div className="product-card" onClick={onClick}>
      <div className="card-image-container">
        <img src={product.photo} alt={product.productName} />
      </div>

      <div className="card-content">
        <h3 className="product-name">{product.productName}</h3>
        
        <span className="price-old">{formatCurrency(oldPrice)}</span>
        <span className="price-current">{formatCurrency(product.price)}</span>
        
        <span className="installment">ou 2x de {formatCurrency(product.price / 2)} sem juros</span>
        <span className="free-shipping">Frete grátis</span>
      </div>

      <button className="buy-button" onClick={(e) => {
        e.stopPropagation(); // Evita disparar duas vezes caso clique direto no botão
        onClick();
      }}>
        Comprar
      </button>
    </div>
  );
}