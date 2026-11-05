// src/components/Header/Header.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header Component', () => {
  it('deve renderizar a logo, campo de busca e categorias principais', () => {
    render(<Header />);

    // Usa uma função para encontrar o texto da logo mesmo dividido em spans ('e' + 'converse')
    const logoElement = screen.getByText((content, element) => {
      return element?.tagName.toLowerCase() === 'a' && element.classList.contains('logo');
    });
    expect(logoElement).toBeInTheDocument();

    // Verifica se o placeholder da barra de pesquisa está correto
    const searchInput = screen.getByPlaceholderText('O que você está buscando?');
    expect(searchInput).toBeInTheDocument();

    // Verifica se as categorias do menu aparecem corretamente
    expect(screen.getByText('Lançamentos')).toBeInTheDocument();
    expect(screen.getByText('Supermercado')).toBeInTheDocument();
  });
});