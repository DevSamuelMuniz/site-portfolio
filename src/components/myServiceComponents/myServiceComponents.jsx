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
import Tres from "../../assets/carrossel/finamo.jpg";
import Quatro from "../../assets/carrossel/fluff.jpg";
import Cinco from "../../assets/carrossel/knowl.png";
import Seis from "../../assets/carrossel/portAna.png";
import Sete from "../../assets/carrossel/Geolytic.jpg";
import Oito from "../../assets/carrossel/Rocketseat.png";
import Nove from "../../assets/carrossel/nutri.png";

function MyServiceComponents() {
  const cardData = [
    { title: "FisioterapiaRM", image: Um },
    { title: "Indiana Jones School", image: Dois },
    { title: "Finamo", image: Tres },
    { title: "Fluff", image: Quatro },
    { title: "Knowl", image: Cinco },
    { title: "Portfólios", image: Seis },
    { title: "Geolytic", image: Sete },
    { title: "Linktree", image: Oito },
    { title: "Nutrilife", image: Nove },
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

      <Carousel>
        {slides.map((slide, index) => (
          <div key={index} className="carousel-slide">
            {slide.map((data, idx) => (
              <CardComponent key={idx} title={data.title} image={data.image} />
            ))}
          </div>
        ))}
      </Carousel>
    </main>
  );
}

export default MyServiceComponents;
