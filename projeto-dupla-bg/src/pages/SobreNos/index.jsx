import React from 'react';
import './style.css';

// Caso queiram colocar a foto de vocês no futuro, basta importar aqui:
// import fotoBrunoGeovane from '../../assets/dupla.png';

export default function SobreNos() {
  return (
    <div className="container-page">
      {/* CONTEÚDO PRINCIPAL: SOBRE NÓS */}
      <main className="content-about">
        <div className="title-section">
          <p className="subtitle">Conheça os Desenvolvedores</p>
        </div>

        <section className="about-card">
          <div className="about-grid">
            
            {/* LADO ESQUERDO: TEXTO INSTITUCIONAL */}
            <div className="about-info">
              <h2>Parceria & Desenvolvimento</h2>
              <p>
                Esta página está sendo desenvolvida em parceria mútua pelos programadores 
                <strong> Bruno Rosa</strong> e <strong>Geovane Ferreira</strong>, alunos do curso 
                técnico em <strong>Desenvolvimento de Sistemas</strong> ministrado pelo 
                <strong> SENAI Dendezeiros</strong>.
              </p>
              
              <p>
                Atualmente no 3º semestre, a dupla avança no universo do 
                <em> Front-End</em> integrado a estruturas de Banco de Dados, aplicando na prática 
                os conhecimentos adquiridos ao longo da formação.
              </p>

              <div className="project-details">
                <h3>Sobre o Projeto</h3>
                <p>
                  Esta é uma atividade pontuada que visa a prática real de mercado. Utilizou-se o 
                  <strong> GitHub</strong> como ferramenta essencial de versionamento, permitindo que ambos 
                  trabalhassem de forma colaborativa e simultânea no mesmo repositório, cada um gerenciando 
                  sua própria etapa do projeto.
                </p>
              </div>

              <blockquote>
                "Ideia de trabalho em dupla idealizada e orientada pelo Professor Carlos Anderson."
              </blockquote>
            </div>

            {/* LADO DIREITO: DESTAQUE DA DUPLA / CURSO */}
            <div className="about-sidebar">
              <div className="status-box">
                <span className="status-badge">SENAI DENDEZEIROS</span>
                <h3>Status da Dupla</h3>
                <ul>
                  <li><strong>Curso:</strong> Dev. de Sistemas</li>
                  <li><strong>Período:</strong> 3º / 4º Semestre 🎓</li>
                  <li><strong>Foco:</strong> Front-End & Databases</li>
                  <li><strong>Ferramentas:</strong> React, Vite, GitHub</li>
                </ul>
              </div>
              
              <div className="dev-names">
                <div className="dev-tag">⚡ Bruno Rosa</div>
                <div className="dev-tag">🦊 Geovane Ferreira</div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </div>
  );
}