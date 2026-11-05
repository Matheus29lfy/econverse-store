// src/components/RelatedProducts/RelatedProducts.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import RelatedProducts from './RelatedProducts';

const mockProducts = [
  {
    productName: 'Smartphone Teste 1',
    price: 2500,
    photo: 'phone1.png',
    descriptionShort: 'Descrição do telefone 1',
  },
  {
    productName: 'Smartphone Teste 2',
    price: 3500,
    photo: 'phone2.png',
    descriptionShort: 'Descrição do telefone 2',
  },
];

describe('RelatedProducts Component', () => {
  it('deve renderizar o título da seção e as abas de categoria', () => {
    render(<RelatedProducts products={mockProducts} onSelectProduct={vi.fn()} />);

    expect(screen.getByText('Produtos relacionados')).toBeInTheDocument();
    expect(screen.getByText('CELULAR')).toBeInTheDocument();
    expect(screen.getByText('ACESSÓRIOS')).toBeInTheDocument();
    expect(screen.getByText('VER TODOS')).toBeInTheDocument();
  });

  it('deve alternar a aba ativa ao clicar em uma categoria', () => {
    render(<RelatedProducts products={mockProducts} onSelectProduct={vi.fn()} />);

    const tabletTab = screen.getByText('TABLETS');
    fireEvent.click(tabletTab);

    // Verifica se a classe 'active' foi aplicada na aba clicada
    expect(tabletTab).toHaveClass('active');
  });

  it('deve renderizar a lista de produtos corretamente', () => {
    render(<RelatedProducts products={mockProducts} onSelectProduct={vi.fn()} />);

    expect(screen.getByText('Smartphone Teste 1')).toBeInTheDocument();
    expect(screen.getByText('Smartphone Teste 2')).toBeInTheDocument();
  });

  it('deve chamar onSelectProduct ao clicar em um produto', () => {
    const handleSelectProduct = vi.fn();
    render(<RelatedProducts products={mockProducts} onSelectProduct={handleSelectProduct} />);

    const productCardTitle = screen.getByText('Smartphone Teste 1');
    fireEvent.click(productCardTitle);

    expect(handleSelectProduct).toHaveBeenCalledTimes(1);
    expect(handleSelectProduct).toHaveBeenCalledWith(mockProducts[0]);
  });
});