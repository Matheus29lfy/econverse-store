// src/components/Categories/Categories.tsx
import { useState } from 'react';
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
  const [activeCategory, setActiveCategory] = useState<string>('Tecnologia');

  return (
    <nav className="categories-container">
      <ul className="categories-list">
        {categoriesData.map((category) => {
          const isActive = activeCategory === category.name;
          return (
            <li
              key={category.name}
              className={`category-item ${isActive ? 'active' : ''}`}
              onClick={() => setActiveCategory(category.name)}
            >
              <div className="category-icon-box">
                <span>{category.icon}</span>
              </div>
              <span className="category-name">{category.name}</span>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}