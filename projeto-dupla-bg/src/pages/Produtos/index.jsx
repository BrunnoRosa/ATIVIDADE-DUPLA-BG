import React from 'react';
import './style.css';

const animeData = [
  {
    ranking: "#1",
    title: "Sousou no Frieren",
    rating: "9.39",
    seasons: "1 Temporada (28 Eps)",
    image: "https://images.justwatch.com/poster/306716295/s332/sousou-no-frieren.webp",
    videoUrl: "https://www.youtube.com/embed/qgQunxg0v9c",
    description: "A história do que acontece após a derrota do Rei Demônio. A maga elfa Frieren e seus companheiros trouxeram a paz à terra, mas agora precisam seguir caminhos separados."
  },
  {
    ranking: "#2",
    title: "Fullmetal Alchemist: Brotherhood",
    rating: "9.10",
    seasons: "1 Temporada (64 Eps)",
    image: "https://images.justwatch.com/poster/8655075/s332/fullmetal-alchemist-brotherhood.webp",
    videoUrl: "https://www.youtube.com/embed/v3CqAnfK1ys",
    description: "Dois irmãos usam a alquimia em uma tentativa desesperada de reviver sua falecida mãe. Após a falha traumática, eles buscam a lendária Pedra Filosofal para restaurar seus corpos."
  },
  {
    ranking: "#3",
    title: "Steins;Gate",
    rating: "9.07",
    seasons: "2 Temporadas",
    image: "https://images.justwatch.com/poster/14588975/s332/steinsgate.webp",
    videoUrl: "https://www.youtube.com/embed/27OZcIqT95c",
    description: "Um cientista excêntrico e seus amigos acidentalmente criam um dispositivo capaz de enviar mensagens de texto para o passado, desencadeando consequências catastróficas nas linhas do tempo."
  },
  {
    ranking: "#4",
    title: "Shingeki no Kyojin (Attack on Titan)",
    rating: "9.05",
    seasons: "4 Temporadas",
    image: "https://images.justwatch.com/poster/263595568/s332/shingeki-no-kyojin.webp",
    videoUrl: "https://www.youtube.com/embed/LHtdKW50vSg",
    description: "A humanidade vive isolada dentro de imensas muralhas para se proteger de gigantescos monstros devoradores de homens, conhecidos como Titãs. Até que um dia, a paz é quebrada."
  },
  {
    ranking: "#5",
    title: "Hunter x Hunter (2011)",
    rating: "9.04",
    seasons: "6 Temporadas (148 Eps)",
    image: "https://images.justwatch.com/poster/251347068/s332/hunter-x-hunter-2011.webp",
    videoUrl: "https://www.youtube.com/embed/d6kBeWjRIc8",
    description: "Gon Freecss descobre que seu pai, que ele acreditava estar morto, está vivo e é um lendário Hunter. Gon decide seguir os mesmos passos para encontrá-lo."
  }
];

export default function Produtos() {
  return (
    <div className="container-page">
      {/* CONTEÚDO ALTERADO: PRODUTOS / ANIME LIST */}
      <main className="content-products">
          <section className="anime-list-container">
          {animeData.map((anime, index) => (
            <div className="anime-card" key={index}>
              <div className="badge-ranking">{anime.ranking}</div>
              
              <div className="card-body">
                <div className="anime-image-box">
                  <img src={anime.image} alt={anime.title} />
                </div>

                <div className="anime-info">
                  <h2>{anime.title}</h2>
                  <div className="meta-info">
                    <span className="rating">⭐ {anime.rating}</span>
                    <span className="seasons">🎬 {anime.seasons}</span>
                  </div>
                  <p className="description">{anime.description}</p>
                </div>

                <div className="anime-video-box">
                  <iframe 
                    src={anime.videoUrl} 
                    title={`Trailer de ${anime.title}`}
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          ))}
        </section>
      </main>
    </div>
  );
}