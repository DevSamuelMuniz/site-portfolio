import React from "react";

//css
import "./headerComponent.css"

//img
import Logo from "../../assets/img/logo.png"

function headerComponent(){
    return(
        <main className="content-header">
            <ul className="ul-header">
                <li className="li-header">Início</li>
                <li className="li-header">Sobre</li>
                <li className="li-header">Serviços</li>

                <img className="logo-header" src={Logo} alt="Logo Sam-mu" />

                <li className="li-header">Resumo</li>
                <li className="li-header">Projetos</li>
                <li className="li-header">Contatos</li>
            </ul>
        </main>
    );
}

export default headerComponent;