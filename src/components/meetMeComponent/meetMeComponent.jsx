import React from "react";
import "./meetMeComponent.css";

//img
import Me from "../../assets/img/me.png";
import Linkedin from "../../assets/logo/LinkedIn_icon.svg.webp";
import Github from "../../assets/logo/GitHub-logo.png";
import Instagram from "../../assets/logo/Instagram_icon.png.webp";

function meetMeComponent() {
  return (
    <main className="main-meetme">
      <h1 className="meet-me">Me conheça</h1>
      <p className="minhasRedes-meetme">Minhas redes sociais</p>

      <div className="content-meetme">
        <div>
          <img className="me-meetme" src={Me} alt="me" />
        </div>

        <div className="redes">
          <a className="redes" href="https://www.linkedin.com/in/samuel-muniz-4b5a3126a/">
            <div className="redes-meetme">
              <p className="nome-meetme">Linkedin</p>
              <img className="logo-meetme" src={Linkedin} alt="" />
            </div>
          </a>
          <a className="redes" href="https://github.com/DevSamuelMuniz">
            <div className="redes-meetme">
              <p className="nome-meetme">Github</p>
              <img className="logo-meetme" src={Github} alt="" />
            </div>
          </a>
          <a className="redes" href="https://www.instagram.com/samuel_mzz?igsh=c2JwdGw2ZnByZDI1&utm_source=qr">
            <div className="redes-meetme">
              <p className="nome-meetme">Instagram</p>
              <img className="logo-meetme" src={Instagram} alt="" />
            </div>
          </a>
          <button className="btn-meetme">Trabalhe comigo!</button>
        </div>
      </div>
    </main>
  );
}

export default meetMeComponent;
