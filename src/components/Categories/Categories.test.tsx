// src/components/Categories/Categories.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Categories from './Categories';

describe('Categories Component', () => {
  it('deve renderizar as categorias principais do e-commerce', () => {
    render(<Categories />);

    // Verifica se algumas das categorias do carrossel aparecem na tela
    expect(screen.getByText('Tecnologia')).toBeInTheDocument();
    expect(screen.getByText('Supermercado')).toBeInTheDocument();
    expect(screen.getByText('Bebidas')).toBeInTheDocument();
    expect(screen.getByText('Ferramentas')).toBeInTheDocument();
  });
});