// src/components/Header/Header.tsx
import React from 'react';
import './Header.scss';

export default function Header() {
  return (
    <header className="header-container">
      {/* Barra Superior */}
      <div className="header-top">
        <div className="top-content">
          <ul>
            <li>
              🔒 Compra <strong>100% segura</strong>
            </li> 
            <li>
              🚚 <strong>Frete grátis</strong> acima de R$ 200
            </li>
            <li>
              📦 <strong>Parcele</strong> suas compras
            </li>
          </ul>
        </div>
      </div>

      {/* Barra Principal */}
      <div className="header-main">
        <a href="/" className="logo">
          {/* Substitua pela tag img com o logo da Econverse se tiver o arquivo */}
          <span style={{ color: '#041E50' }}>e</span>
          <span style={{ color: '#f71963' }}>converse</span>
        </a>

        <div className="search-bar">
          <input 
            type="text" 
            placeholder="O que você está buscando?" 
          />
          <button className="search-icon" aria-label="Pesquisar">
            🔍
          </button>
        </div>

        <div className="header-actions">
          <button aria-label="Meus Pedidos">
            📦
          </button>
          <button aria-label="Favoritos">
            ❤️
          </button>
          <button aria-label="Minha Conta">
            👤
          </button>
          <button aria-label="Carrinho de Compras">
            🛒
          </button>
        </div>
      </div>

      {/* Menu de Navegação / Categorias do Topo */}
      <nav className="header-nav">
        <ul>
          <li><a href="#todas-categorias">Todas as Categorias</a></li>
          <li><a href="#supermercado">Supermercado</a></li>
          <li><a href="#livros">Livros</a></li>
          <li><a href="#moda">Moda</a></li>
          <li><a href="#lancamentos" className="active">Lançamentos</a></li>
          <li><a href="#ofertas-do-dia">Ofertas do dia</a></li>
          <li><a href="#assinatura">Assinatura</a></li>
        </ul>
      </nav>
    </header>
  );
}