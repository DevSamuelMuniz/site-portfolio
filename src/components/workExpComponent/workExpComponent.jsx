import React from "react";
import "./workExpComponent.css";

//images
import Daccord from "../../assets/img/daccord.jpg";
import FerreiraCosta from "../../assets/img/ferreiracosta.png";
import Senac from "../../assets/img/senacpe_logo.jpg";
import Porto from "../../assets/img/portodigital_logo.jpg";
import FRM from "../../assets/img/frm.png";
import GenAces from "../../assets/img/genAce.png";
import Balls from "../../assets/icons/bolls.png";

function workExpComponent() {
  return (
    <main className="main-exp">
      <div>
        <h1 className="title-work-xp">Minhas experiências de trabalho</h1>
      </div>

      <div className="container-exp">
        <div className="ctn-exp">
          <div className="card-exp">
            <img className="img-exp" src={Senac} alt="Logo senac pe" />
            <div>
              <h2 className="title-exp">Frontend Developer</h2>
              <p className="empresa-exp">Senac Pernambuco</p>
              <p className="data-ex">jan de 2024 - o momento • 5 meses</p>
            </div>
          </div>

          <div className="card-exp">
            <img className="img-exp" src={Porto} alt="Logo porto digital" />
            <div>
              <h2 className="title-exp">Software Developer</h2>
              <p className="empresa-exp">Porto Digital - Residência</p>
              <p className="data-ex">mar de 2023 - o momento • 1 ano 3 meses</p>
            </div>
          </div>

          <div className="card-exp">
            <img
              className="img-exp"
              src={GenAces}
              alt="Logo genérico Acessível"
            />
            <div>
              <h2 className="title-exp">PWA website Development</h2>
              <p className="empresa-exp">Genérico Acessível</p>
              <p className="data-ex">mar de 2023 - o momento • 1 ano 3 meses</p>
            </div>
          </div>
        </div>

        <div>
          <img className="img-exp" src={Balls} alt="effects" />
        </div>

        <div className="ctn-exp">
          <div className="card-exp">
            <img
              className="img-exp"
              src={FerreiraCosta}
              alt="Logo derreita costa"
            />
            <div>
              <h2 className="title-exp">Backend System Development</h2>
              <p className="empresa-exp">Ferreira Costa</p>
              <p className="data-ex">abr de 2024 - jul de 2024 • 4 meses</p>
            </div>
          </div>

          <div className="card-exp">
            <img className="img-exp" src={FRM} alt="Logo Fisioterapi RM" />
            <div>
              <h2 className="title-exp">Website Development</h2>
              <p className="empresa-exp">Fisioterapia RM</p>
              <p className="data-ex">fev de 2024 - mar de 2024 • 2 meses</p>
            </div>
          </div>

          <div className="card-exp">
            <img className="img-exp" src={Daccord} alt="Logo daccord" />
            <div>
              <h2 className="title-exp">Android Development</h2>
              <p className="empresa-exp">Daccord Music</p>
              <p className="data-ex">set de 2023 - dez de 2023 • 4 meses</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default workExpComponent;
