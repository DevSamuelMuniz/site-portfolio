import React from "react";
import "./footer.css";

//img
import Logo from "../../assets/img/logo.png";

import Linkedin from "../../assets/logo/LinkedIn_icon.svg.webp";
import Github from "../../assets/logo/GitHub-logo.png";
import Instagram from "../../assets/logo/Instagram_icon.png.webp";


function footer() {
  return (
    <main className="main-footer">
      <div className="content-trabalhe">
        <h1>Trabalhe conosco!</h1>
        <button>Vamos trabalhar juntos!</button>
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

        <div>
          <h1>Navegação</h1>
          <ul>
            <li>Início</li>
            <li>Projetos</li>
            <li>Experiências</li>
            <li>Contatos</li>
          </ul>
        </div>

        <div>
          <h1>Contatos</h1>
          <p>Github</p>
          <p>Linkedin</p>
          <p>Instagram</p>
        </div>
      </div>

      <hr />

      <div>
        <h1>Copyright© 2024 SAM-MU. All Rights Reserved.</h1>
        <h1>User Terms & Conditions | Privacy Policy</h1>
      </div>
    </main>
  );
}

export default footer;
