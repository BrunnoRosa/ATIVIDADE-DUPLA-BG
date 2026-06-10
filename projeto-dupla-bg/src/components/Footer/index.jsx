import React from 'react';
import './style.css';

export default function Footer() {
  return (
    <footer className="otaku-footer">
      {/* Detalhe estético superior que lembra o clã Uchiha/selos de Naruto */}
      <div className="footer-top-border"></div>

      <div className="footer-content">
        {/* Marca com efeito de energia (Super Saiyajin / Akatsuki) */}
        <div className="footer-brand">
          Mundo<span>Anime</span>
        </div>

        {/* Links ou Frase de Efeito Otaku */}
        <div className="footer-quote">
          "Se você não tem um motivo para estar vivo, é o mesmo que estar morto."
        </div>

        {/* Texto de Copyright */}
        <div className="footer-copy">
          &copy; {new Date().getFullYear()} - Desenvolvido com muito ⚡ e 🦊 Chakra
        </div>
      </div>

      {/* Barra Dinâmica Inferior (Simula o Ki/Chakra correndo em alta velocidade) */}
      <div className="footer-speed-bar"></div>
    </footer>
  );
}