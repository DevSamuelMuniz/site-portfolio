import React from "react";
import "./footer.css";
import { Link } from "react-scroll";

//img
import Logo from "../../assets/img/logo.png";

import Linkedin from "../../assets/logo/LinkedIn_icon.svg.webp";
import Github from "../../assets/logo/GitHub-logo.png";
import Instagram from "../../assets/logo/Instagram_icon.png.webp";

function footer() {
  return (
    <main className="main-footer">
      <div className="content-trabalhe">
        <h1>Junte-se a nós!</h1>
      </div>

      <hr className="linha" />

      <div className="infos-footer">
        <div>
          <img className="logo-footer" src={Logo} alt="" />
          <div className="redes-footer">
            <img className="logos-footer1" src={Linkedin} alt="" />
            <img className="logos-footer2" src={Github} alt="" />
            <img className="logos-footer3" src={Instagram} alt="" />
          </div>
        </div>

        <div className="navegacao-footer">
          <h1>Navegação</h1>
          <ul className="ul-header">
            <li className="li-header">
              <Link
                to="section1"
                smooth={true}
                duration={500}
                className="link-header"
              >
                Início
              </Link>
            </li>
            <li className="li-header">
              <Link
                to="section2"
                smooth={true}
                duration={500}
                className="link-header"
              >
                Projetos
              </Link>
            </li>
            <li className="li-header">
              <img className="logo-header" src={Logo} alt="Logo Sam-mu" />
            </li>
            <li className="li-header">
              <Link
                to="section3"
                smooth={true}
                duration={500}
                className="link-header"
              >
                Experiências
              </Link>
            </li>
            <li className="li-header">
              <Link
                to="section4"
                smooth={true}
                duration={500}
                className="link-header"
              >
                Contatos
              </Link>
            </li>
          </ul>
        </div>

        <div className="contatos-footer">
  <h1>Contatos</h1>
  <ul className="ul-footer">
    <li>
      <a className="link-footer" 
        target="_blank"
        href="https://github.com/DevSamuelMuniz"
        rel="noreferrer"
        aria-label="Visit Samuel Muniz's Github profile"
      >
        <p>Github</p>
      </a>
    </li>
    <li>
      <a className="link-footer"
        target="_blank"
        href="https://www.linkedin.com/in/samuel-muniz-4b5a3126a/"
        rel="noreferrer"
        aria-label="Visit Samuel Muniz's LinkedIn profile"
      >
        <p>Linkedin</p>
      </a>
    </li>
    <li>
      <a className="link-footer"
        target="_blank"
        href="https://www.instagram.com/samuel_mzz?igsh=c2JwdGw2ZnByZDI1&utm_source=qr"
        rel="noreferrer"
        aria-label="Visit Samuel Muniz's Instagram profile"
      >
        <p>Instagram</p>
      </a>
    </li>
    <li>
      <a className="link-footer"
        target="_blank"
        href="https://wa.me/5581984174521?text=Ol%C3%A1,%20gostaria%20de%20apresentar%20minha%20ideia%20para%20trabalharmos%20juntos!"
        rel="noreferrer"
        aria-label="Send a message to Samuel Muniz on Whatsapp"
      >
        <p>Whatsapp</p>
      </a>
    </li>
  </ul>
</div>

      </div>

      <hr className="linha" />

      <div className="copy-footer">
        <h1>Copyright© 2024 SAM-MU. All Rights Reserved.</h1>
        <h1>User Terms & Conditions | Privacy Policy</h1>
      </div>
    </main>
  );
}

export default footer;
