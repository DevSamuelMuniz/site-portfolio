import React from "react";
import PropTypes from "prop-types";

import "./cardComponent.css";

//img & icons
import Seta from "../../../assets/icons/seta.png";

function CardComponent({ title, image, link }) {
  return (
    <main className="card">
      <div className="card-content">
        <h1 className="title-card">{title}</h1>
        <hr />
        <img src={image} alt={title} className="image-card" />
      </div>
      <a href={link} className="link-card">
        <div className="seta-container">
          <img src={Seta} alt="Seta" className="seta" />
        </div>
      </a>
    </main>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default CardComponent;
