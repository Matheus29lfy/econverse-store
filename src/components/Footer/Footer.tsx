// src/components/Footer/Footer.tsx
import React, { useState } from 'react';
import './Footer.scss';

export default function Footer() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!acceptedTerms) {
      alert('Por favor, aceite os termos e condições.');
      return;
    }
    alert(`Obrigado por se inscrever, ${name}!`);
    setName('');
    setEmail('');
    setAcceptedTerms(false);
  };

  return (
    <footer className="footer-container">
      {/* Newsletter */}
      <section className="newsletter-section">
        <div className="newsletter-content">
          <div className="newsletter-text">
            <h3>Inscreva-se na nossa newsletter</h3>
            <p>Assine a nossa newsletter e receba as novidades e promoções exclusivas do Econverse</p>
          
           <form className="newsletter-form" onSubmit={handleSubmit}>
            <div className="form-inputs">
              <input
                type="text"
                placeholder="Digite seu nome"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Digite seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit">Cadastrar</button>
            </div>

            <label className="checkbox-label">
              <input
                type="checkbox"
                checked={acceptedTerms}
                onChange={(e) => setAcceptedTerms(e.target.checked)}
              />
              Aceito os termos e condições
            </label>
          </form>
          </div>
        </div>
      </section>

      {/* Links Institucionais */}
      <section className="links-section">
        <div className="links-content">
          <div className="brand-col">
            <div className="logo">
              <span style={{ color: '#041E50' }}>e</span>
              <span style={{ color: '#f71963' }}>converse</span>
            </div>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="social-icons">
              <span>📷</span>
              <span>📘</span>
              <span>💼</span>
            </div>
          </div>

          <div className="nav-col">
            <h4>Institucional</h4>
            <ul>
              <li><a href="#sobre">Sobre Nós</a></li>
              <li><a href="#movimento">Movimento</a></li>
              <li><a href="#trabalhe">Trabalhe Conosco</a></li>
            </ul>
          </div>

          <div className="nav-col">
            <h4>Ajuda</h4>
            <ul>
              <li><a href="#suporte">Suporte</a></li>
              <li><a href="#fale-conosco">Fale Conosco</a></li>
              <li><a href="#faq">Perguntas Frequentes</a></li>
            </ul>
          </div>

          <div className="nav-col">
            <h4>Termos</h4>
            <ul>
              <li><a href="#termos">Termos e Condições</a></li>
              <li><a href="#privacidade">Política de Privacidade</a></li>
              <li><a href="#trocas">Trocas e Devoluções</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Rodapé / Copyright */}
      <div className="copyright-section">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </footer>
  );
}