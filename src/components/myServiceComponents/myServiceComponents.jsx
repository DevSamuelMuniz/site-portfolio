import React from "react";
import "./myServiceComponents.css";

// Component
import CardComponent from "./cardComponent/cardComponent";

// Carousel
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

// Import images
import Um from "../../assets/carrossel/fisioterapiaRM.png";
import Dois from "../../assets/carrossel/IndianaJones.jpg";
import Cinco from "../../assets/carrossel/finamo.jpg";
import Quatro from "../../assets/carrossel/fluff.jpg";
import Tres from "../../assets/carrossel/cartao.png";
import Seis from "../../assets/carrossel/portAna.png";
import Sete from "../../assets/carrossel/Geolytic.jpg";
import Oito from "../../assets/carrossel/Rocketseat.png";
import Nove from "../../assets/carrossel/nutri.png";

function MyServiceComponents() {
  const cardData = [
    { title: "FisioterapiaRM", image: Um, link: 'https://fisioterapiarm.com/' },
    { title: "Cartão do Empresário", image: Tres, link: 'https://test.d2psx7is1von2g.amplifyapp.com/' },
    { title: "Indiana Jones School", image: Dois, link: 'https://github.com/DevSamuelMuniz/IndianaJonesSchool' },
    { title: "Finamo", image: Cinco, link: 'https://finamo.vercel.app/' },
    { title: "Fluff", image: Quatro, link: 'https://github.com/DevSamuelMuniz/Fluff' },
    { title: "Portfólios", image: Seis, link: 'https://github.com/DevSamuelMuniz/anaportfolio' },
    { title: "Geolytic", image: Sete, link: '' },
    { title: "Linktree", image: Oito, link: 'https://github.com/DevSamuelMuniz/ProjetoRocketseat' },
    { title: "Nutrilife", image: Nove, link: 'https://github.com/DevSamuelMuniz/front-mobile' },
  ];

  const chunkSize = 3;
  const slides = [];
  for (let i = 0; i < cardData.length; i += chunkSize) {
    slides.push(cardData.slice(i, i + chunkSize));
  }

  return (
    <main className="content-service">
      <div className="services-h1">
        <h1 className="textH1-service">Meus Serviços</h1>
      </div>

      <Carousel autoPlay infiniteLoop interval={3000} showThumbs={false}>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide.map((data, idx) => (
              <CardComponent key={idx} title={data.title} image={data.image} link={data.link} />
            ))}
          </div>
        ))}
      </Carousel>
    </main>
  );
}

export default MyServiceComponents;
