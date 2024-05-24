import React from "react";
import "./workExpComponent.css";

//images
import Daccord from "../../assets/img/daccord.jpg";
import FerreiraCosta from "../../assets/img/ferreiracosta.png";

function workExpComponent() {
  return (
    <main>
      <div>
        <h1>Minhas experiências de trabalho</h1>
      </div>

      <div>
        <div>
          <img src="" alt="" />
          <h2>Frontend Developer</h2>
          <p>Senac Pernambuco</p>
          <p>jan de 2024 - o momento • 5 meses</p>
        </div>

        <div>
          <img src="" alt="" />
          <h2>Software Developer</h2>
          <p>Porto Digital - Residência</p>
          <p>mar de 2023 - o momento • 1ano 3 meses</p>
        </div>

        <div>
          <img src="" alt="" />
          <h2>PWA website Development</h2>
          <p>Porto Digital - Residência</p>
          <p>mar de 2023 - o momento • 1ano 3 meses</p>
        </div>

        <div>
          <img src={FerreiraCosta} alt="" />
          <h2>Backend System Development</h2>
          <p>Ferreira Costa</p>
          <p>abr de 2024 - jul de 2024 • 4 meses</p>
        </div>

        <div>
          <img src={Daccord} alt="Logo daccord" />
          <h2>Website Development</h2>
          <p>Fisioterapia RM</p>
          <p>fev de 2024 - mar de 2024 • 2 meses</p>
        </div>

        <div>
          <img src={Daccord} alt="Logo daccord" />
          <h2>Android Development</h2>
          <p>Daccord Music</p>
          <p>set de 2023 - dez de 2023 • 4 meses</p>
        </div>
      </div>
    </main>
  );
}

export default workExpComponent;
