import React from 'react';
import './style.css';

export default function PageHome() {
  return (
    <main className="hero-container">
      {/* Camada de máscara para a imagem de fundo não atrapalhar a leitura do texto */}
      <div className="hero-overlay"></div>

      <div className="hero-content">
        {/* Tag estilo guilda/clã */}
        <span className="hero-badge">Temporada de Outono 2026</span>
        
        {/* Título Principal com destaque */}
        <h1 className="hero-title">
          Explore o Seu Próprio <br />
          <span>Universo Otaku</span>
        </h1>
        
        {/* Frase de efeito explicativa */}
        <p className="hero-subtitle">
          Acompanhe seus episódios favoritos, gerencie sua lista de animes personalizada 
          e descubra novos mundos com a maior comunidade ninja da internet.
        </p>
        
        {/* Botões de Chamada para Ação (CTA) */}
        <div className="hero-buttons">
          <button className="btn-primary">
            <span className="btn-text">Iniciar Jornada</span>
            <div className="btn-energy"></div>
          </button>
          <button className="btn-secondary">
            Ver Lançamentos
          </button>
        </div>
      </div>

      {/* Detalhe estético de partículas ou linhas de velocidade no fundo */}
      <div className="hero-lines"></div>
    </main>
  );
}