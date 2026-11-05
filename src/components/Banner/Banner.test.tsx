import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import '@testing-library/jest-dom';
import Banner from './Banner';

describe('Banner Component', () => {
  it('deve renderizar o título promocional e o botão de ação', () => {
    render(<Banner />);

    // Verifica o texto de destaque do banner
    expect(screen.getByText('Venha conhecer nossas promoções')).toBeInTheDocument();
    expect(screen.getByText('50% Off nos produtos')).toBeInTheDocument();

    // Verifica se o botão de conversão está presente
    const buttonElement = screen.getByText('Ver produto');
    expect(buttonElement).toBeInTheDocument();
  });
});