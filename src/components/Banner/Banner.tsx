// src/components/Banner/Banner.tsx
import './Banner.scss';

export default function Banner() {
  return (
    <section className="banner-container">
      <div className="banner-content-wrapper">
        <div className="banner-text">
          <h1>Venha conhecer nossas promoções</h1>
          <p>50% Off nos produtos</p>
          <a href="#produtos" className="banner-button">
            Ver produto
          </a>
        </div>
      </div>
    </section>
  );
}