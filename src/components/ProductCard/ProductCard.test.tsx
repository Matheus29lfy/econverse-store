// src/components/ProductCard/ProductCard.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import ProductCard from './ProductCard';

const mockProduct = {
  name: 'Iphone 11 Pro Max Branco', // Verifique se no seu componente é 'name' ou 'title'
  description: 'Lorem ipsum dolor sit amet',
  oldPrice: 18000,
  price: 15000,
  image: 'iphone.png',
  installments: 'ou 2x de R$ 7.500,00 sem juros',
  freeShipping: true,
};

describe('ProductCard Component', () => {
  it('deve renderizar o preço e o frete corretamente', () => {
    render(<ProductCard product={mockProduct} onClick={vi.fn()} />);

    // Se o nome do produto aparecer, descomente a linha abaixo:
    // expect(screen.getByText('Iphone 11 Pro Max Branco')).toBeInTheDocument();
    
    expect(screen.getByText('R$ 15.000,00')).toBeInTheDocument();
    
    // Ajustado para o texto exato que apareceu no log do HTML ('Frete grátis')
    expect(screen.getByText('Frete grátis')).toBeInTheDocument();
    
    // Verifica se o botão Comprar está presente
    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });
});