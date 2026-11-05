import React, { useState } from 'react';
import type { Product } from '../../types/product'; 
import './ProductModal.scss';

interface ProductModalProps {
  product: Product;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () => setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  // Formata o preço para o padrão brasileiro (R$)
  const formattedPrice = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(product.price);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-container" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ✕
        </button>

        <div className="modal-image-container">
          <img src={product.photo} alt={product.productName} />
        </div>

        <div className="modal-content">
          <div>
            <h2 className="product-title">{product.productName}</h2>
            <div className="product-price">{formattedPrice}</div>
            <p className="product-description">
              {product.descriptionShort ||
                "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour."}
            </p>
            <span className="more-details">Veja mais detalhes do produto &gt;</span>
          </div>

          <div className="modal-actions">
            <div className="quantity-selector">
              <button onClick={handleDecrement}>-</button>
              <span>{quantity < 10 ? `0${quantity}` : quantity}</span>
              <button onClick={handleIncrement}>+</button>
            </div>
            <button className="buy-button">Comprar</button>
          </div>
        </div>
      </div>
    </div>
  );
}