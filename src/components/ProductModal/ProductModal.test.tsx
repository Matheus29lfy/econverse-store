// src/components/ProductModal/ProductModal.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';
import '@testing-library/jest-dom';
import ProductModal from './ProductModal';

const mockProduct = {
  productName: 'Iphone 11 Pro Max',
  price: 15000,
  photo: 'iphone.png',
  descriptionShort: 'Descrição curta do produto de teste',
};

describe('ProductModal Component', () => {
  it('deve renderizar os detalhes do produto e o preço formatado', () => {
    render(<ProductModal product={mockProduct} onClose={vi.fn()} />);

    expect(screen.getByText('Iphone 11 Pro Max')).toBeInTheDocument();
    expect(screen.getByText('R$ 15.000,00')).toBeInTheDocument();
    expect(screen.getByText('Descrição curta do produto de teste')).toBeInTheDocument();
    expect(screen.getByText('Comprar')).toBeInTheDocument();
  });

  it('deve incrementar e decrementar a quantidade corretamente', () => {
    render(<ProductModal product={mockProduct} onClose={vi.fn()} />);

    // Quantidade inicial começa em 1, formatada como "01"
    expect(screen.getByText('01')).toBeInTheDocument();

    const incrementButton = screen.getByText('+');
    const decrementButton = screen.getByText('-');

    // Clica em incrementar
    fireEvent.click(incrementButton);
    expect(screen.getByText('02')).toBeInTheDocument();

    // Clica em decrementar
    fireEvent.click(decrementButton);
    expect(screen.getByText('01')).toBeInTheDocument();
  });

  it('deve chamar onClose ao clicar no botão de fechar ou no overlay', () => {
    const handleClose = vi.fn();
    const { container } = render(<ProductModal product={mockProduct} onClose={handleClose} />);

    // Clica no botão de fechar (✕)
    const closeBtn = screen.getByText('✕');
    fireEvent.click(closeBtn);
    expect(handleClose).toHaveBeenCalledTimes(1);

    // Clica no overlay do modal
    const overlay = container.querySelector('.modal-overlay');
    if (overlay) {
      fireEvent.click(overlay);
      expect(handleClose).toHaveBeenCalledTimes(2);
    }
  });
});