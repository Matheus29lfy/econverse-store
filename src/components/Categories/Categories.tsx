// src/components/Categories/Categories.tsx
import React from 'react';
import './Categories.scss';

interface Category {
  name: string;
  icon: string;
}

const categoriesData: Category[] = [
  { name: 'Tecnologia', icon: '💻' },
  { name: 'Supermercado', icon: '🛒' },
  { name: 'Bebidas', icon: '🍷' },
  { name: 'Ferramentas', icon: '🛠️' },
  { name: 'Saúde', icon: '❤️' },
  { name: 'Esportes e Fitness', icon: '⚽' },
  { name: 'Moda', icon: '👗' },
];

export default function Categories() {
  return (
    <nav className="categories-container">
      <ul className="categories-list">
        {categoriesData.map((category, index) => (
          <li key={index} className="category-item">
            <div className="category-icon-box">
              <span>{category.icon}</span>
            </div>
            <span className="category-name">{category.name}</span>
          </li>
        ))}
      </ul>
    </nav>
  );
}