import React from "react";

//css
import "./headerComponent.css"

//img
import Logo from "../../assets/img/logo.png"

function headerComponent(){
    return(
        <main className="content-header">
            <ul className="ul-header">
                <a className="link-header"><li className="li-header">Início</li></a>
                <a className="link-header"><li className="li-header">Sobre</li></a>
                <a className="link-header"><li className="li-header">Serviços</li></a>

                <img className="logo-header" src={Logo} alt="Logo Sam-mu" />

                <a className="link-header"><li className="li-header">Resumo</li></a>
                <a className="link-header"><li className="li-header">Projetos</li></a>
                <a className="link-header"><li className="li-header">Contatos</li></a>
            </ul>
        </main>
    );
}

export default headerComponent;