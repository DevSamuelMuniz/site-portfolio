import React from "react";
import "./aboutmeComponent.css";

//icon / imgs
import Stars from "../../assets/icons/stars.png";
import Eu from "../../assets/img/eu.png";

function aboutmeComponent() {
  return (
    <main className="content-aboutme">
      <div className="hello-header">
        <h1 className="apresentation-header">
          Eu sou <span className="nome">Samuel</span>, <br></br>
          Desenvolvedor de sistemas
        </h1>
      </div>

      <div className="aboutme-header">
        <div className="intro-aboutme">
          <img src="" alt="" />
          <p>
            <br />
            <br />
            React | Angular | React Native | Python | Node.js | Flutter | SQL |
          </p>
        </div>

        <div className="exp-aboutme">
          <img src={Stars} alt="" />
          <p>+15 Meses</p>
          <p className="exp">de experiência</p>
        </div>
      </div>

      <div className="imagem-aboutme">
        <img className="img-eu" src={Eu} alt="" />
        <div className="circle"></div>
      </div>
    </main>
  );
}

export default aboutmeComponent;
