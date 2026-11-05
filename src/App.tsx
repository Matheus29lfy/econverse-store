// src/App.tsx
import React, { useState, useEffect } from 'react';
import { fetchProducts } from './services/api';
import type { Product } from './types/product';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Categories from './components/Categories/Categories';
import RelatedProducts from './components/RelatedProducts/RelatedProducts';
import SupportBanners from './components/SupportBanners/SupportBanners';
import Brands from './components/Brands/Brands';
import ProductModal from './components/ProductModal/ProductModal';
import Footer from './components/Footer/Footer';

import './styles/main.scss';

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);

  return (
    <div className="home-container">
      <Header />
      
      <main>
        {/* 1. Banner Principal de Promoções */}
        <Banner />
        
        {/* 2. Carrossel de Categorias */}
        <Categories />

        {/* 3. Primeira Vitrine de Produtos Relacionados */}
        <RelatedProducts 
          products={products} 
          onSelectProduct={setSelectedProduct} 
        />

        {/* 4. Banners de Apoio / Parceiros (Primeiro par) */}
        <SupportBanners />

        {/* 5. Segunda Vitrine de Produtos Relacionados */}
        <RelatedProducts 
          products={products} 
          onSelectProduct={setSelectedProduct} 
        />

        {/* 6. Banners de Apoio / Parceiros (Segundo par opcional ou repetido conforme o layout) */}
        <SupportBanners />

        {/* 7. Seção Navegar por Marcas */}
        <Brands />
      </main>

      {/* 8. Rodapé Completo com Newsletter */}
      <Footer />

      {/* Modal de Detalhes do Produto */}
      {selectedProduct && (
        <ProductModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
        />
      )}
    </div>
  );
}

export default App;