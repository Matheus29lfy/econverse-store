// src/components/Brands/Brands.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Brands from './Brands';

describe('Brands Component', () => {
  it('deve renderizar o título da seção e as marcas corretamente', () => {
    render(<Brands />);

    // Verifica se o título da seção está presente
    expect(screen.getByText('Navegue por marcas')).toBeInTheDocument();

    // Como existem 5 círculos de marcas, cada um contendo o texto "econverse",
    // usamos o getAllByText para validar que todas as 5 instâncias são renderizadas.
    const brandElements = screen.getAllByText('econverse');
    expect(brandElements.length).toBe(5);
  });
});