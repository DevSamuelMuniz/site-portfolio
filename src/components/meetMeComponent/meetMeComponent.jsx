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
          <a
            className="redes"
            target="_blank"
            href="https://www.linkedin.com/in/samuel-muniz-4b5a3126a/"
            rel="noreferrer"
          >
            <div className="redes-meetme">
              <p className="nome-meetme">Linkedin</p>
              <img className="logo-meetme" src={Linkedin} alt="" />
            </div>
          </a>
          <a
            className="redes"
            target="_blank"
            href="https://github.com/DevSamuelMuniz"
            rel="noreferrer"
          >
            <div className="redes-meetme">
              <p className="nome-meetme">Github</p>
              <img className="logo-meetme" src={Github} alt="" />
            </div>
          </a>
          <a
            className="redes"
            target="_blank"
            href="https://www.instagram.com/samuel_mzz?igsh=c2JwdGw2ZnByZDI1&utm_source=qr"
            rel="noreferrer"
          >
            <div className="redes-meetme">
              <p className="nome-meetme">Instagram</p>
              <img className="logo-meetme" src={Instagram} alt="" />
            </div>
          </a>
        </div>
      </div>
      <div className="btn">
        <a
          href="https://wa.me/5581984174521?text=Ol%C3%A1,%20gostaria%20de%20apresentar%20minha%20ideia%20para%20trabalharmos%20juntos!"
          target="_blank"
          className="btn-meetme"
          rel="noreferrer"
        >
          Trabalhe comigo!
        </a>
      </div>
    </main>
  );
}

export default meetMeComponent;
