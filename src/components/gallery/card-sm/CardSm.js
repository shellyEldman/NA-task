import React from "react";
import "./cardSm.scss";
import Cardphoto from "../../../images/cardphoto.png";
import Logo from "../../../images/logo.png";
import V from "../../../images/V.png";
import Triangle from "../../../images/Triangle.png";

const CardSm = () => {
  return (
    <div className="gallery-card-sm mb-3">
      <div className="logo-wrapper">
        <img src={Logo} alt="logo" />
        <div className="score-wrapper">
          <span className="score">Our Score</span>
          <span className="score-num">9.8</span>
          <p className="read mb-0">Read Reviews</p>
        </div>
      </div>
      <div className="img-wrapper">
        <img src={Cardphoto} alt="box" />
        <div className="discount">
          <span>Get 30$ Off</span>
        </div>
        <div className="video">
          <img src={Triangle} alt="triangle" />
        </div>
      </div>
      <div className="content-wrapper">
        <div>
          <div>
            <img src={V} alt="V" />
            <span className="benefits">$30 off your first order</span>
          </div>
          <div>
            <img src={V} alt="V" />
            <span className="benefits">Healthy meals in 30 minutes</span>
          </div>
        </div>

        <div className="order-btn">
          <span className="order-now">Visit Site</span>
        </div>
      </div>
    </div>
  );
};

export default CardSm;
