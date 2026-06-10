import React, { useState } from 'react';
import './style.css';

export default function PageRegister() {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    animeFavorito: '',
    cla: 'shinobi'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`🎉 Alistamento concluído, ${formData.nome}! Bem-vindo ao clã dos ${formData.cla.toUpperCase()}!`);
  };

  return (
    <section className="register-section">
      <div className="register-container">
        
        {/* Lado Esquerdo: Lore/História do Alistamento */}
        <div className="register-info">
          <span className="register-badge">Recrutamento Aberto</span>
          <h2 className="register-info-title">
            Desperte o seu <span>Poder Oculto</span>
          </h2>
          <p className="register-info-text">
            Não seja apenas mais um espectador na história. Crie seu perfil hoje para desbloquear 
            sua lista personalizada, salvar seus episódios favoritos e subir de Rank na guilda.
          </p>
          <div className="register-perks">
            <div className="perk-item">⚡ Acesso a lançamentos antes de todo mundo</div>
            <div className="perk-item">🦊 Badges exclusivas para o seu perfil</div>
            <div className="perk-item">⚔️ Escolha o seu próprio Clã/Aliança</div>
          </div>
        </div>

        {/* Lado Direito: O Formulário Real */}
        <div className="register-card">
          <h3 className="form-title">Fazer Alistamento</h3>
          
          <form onSubmit={handleSubmit} className="otaku-form">
            <div className="input-group">
              <label htmlFor="nome">Nome de Usuário / Vulgo</label>
              <input 
                type="text" 
                id="nome" 
                name="nome" 
                placeholder="Ex: NarutoUzumaki" 
                required 
                value={formData.nome}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="email">Endereço de E-mail</label>
              <input 
                type="email" 
                id="email" 
                name="email" 
                placeholder="seu-email@clanzone.com" 
                required 
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="animeFavorito">Anime Favorito da Vida</label>
              <input 
                type="text" 
                id="animeFavorito" 
                name="animeFavorito" 
                placeholder="Ex: One Piece, Hunter x Hunter..." 
                required 
                value={formData.animeFavorito}
                onChange={handleChange}
              />
            </div>

            <div className="input-group">
              <label htmlFor="cla">Selecione sua Facção / Clã</label>
              <select 
                id="cla" 
                name="cla"
                value={formData.cla}
                onChange={handleChange}
              >
                <option value="shinobi">Aliança Shinobi 🥷</option>
                <option value="saiyan">Guerreiros Saiyajin 👑</option>
                <option value="pirate">Bando dos Piratas 🏴‍☠️</option>
                <option value="hunter">Associação Hunter 🃏</option>
                <option value="renegado">Ninja Renegado (Akatsuki) ☁️</option>
              </select>
            </div>

            <button type="submit" className="btn-submit">
              Selo de Invocação: Cadastrar
            </button>
          </form>
        </div>

      </div>
    </section>
  );
}