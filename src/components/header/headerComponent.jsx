import React from "react";
import { Link } from "react-scroll";

// CSS
import "./headerComponent.css";

// Imagem
import Logo from "../../assets/img/logo.png";

function HeaderComponent() {
  return (
    <header className="content-header">
      <ul className="ul-header">
        <li className="li-header">
          <Link to="section1" smooth={true} duration={500} className="link-header">Início</Link>
        </li>
        <li className="li-header">
          <Link to="section2" smooth={true} duration={500} className="link-header">Projetos</Link>
        </li>
        <li className="li-header">
          <img className="logo-header" src={Logo} alt="Logo Sam-mu" />
        </li>
        <li className="li-header">
          <Link to="section3" smooth={true} duration={500} className="link-header">Experiências</Link>
        </li>
        <li className="li-header">
          <Link to="section4" smooth={true} duration={500} className="link-header">Contatos</Link>
        </li>
      </ul>
    </header>
  );
}

export default HeaderComponent;
