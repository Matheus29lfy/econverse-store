// src/components/SupportBanners/SupportBanners.test.tsx
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import SupportBanners from './SupportBanners';

describe('SupportBanners Component', () => {
  it('deve renderizar os títulos e botões de chamada para ação dos parceiros', () => {
    render(<SupportBanners />);

    // Como existem múltiplos banners, usamos getAllByText e verificamos a quantidade
    const parceirosElements = screen.getAllByText(/Parceiros/i);
    expect(parceirosElements.length).toBe(2);

    const loremElements = screen.getAllByText(/Lorem ipsum dolor/i);
    expect(loremElements.length).toBe(2);

    // Verifica se os botões "Confira" estão presentes nos banners
    const buttons = screen.getAllByText(/Confira/i);
    expect(buttons.length).toBe(2);
  });
});