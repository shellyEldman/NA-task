import React from "react";
import "./cardBig.scss";
import Cardphoto from "../../../images/cardphoto.png";
import Logo from "../../../images/logo.png";
import V from "../../../images/V.png";
import Triangle from "../../../images/Triangle.png";
import Rectangle from "../../../images/Rectangle.png";

const CardBig = () => {
  return (
    <div className="gallery-card-big mb-4">
      <div className="img-wrapper">
        <img src={Cardphoto} alt="box" />
        <div className="rectangle">
          <img src={Rectangle} alt="rectangle" />
          <span className="exclusive">Exclusive Offer</span>
        </div>
        <div className="video">
          <img src={Triangle} alt="triangle" />
        </div>
      </div>
      <div className="content-wrapper">
        <div className="logo-wrapper">
          <img src={Logo} alt="logo" />
          <div className="score-wrapper">
            <p className="score">Our Score</p>
            <p className="score-num">9.8</p>
          </div>
        </div>
        <div>
          <img src={V} alt="V" />
          <span className="benefits">$30 off your first order</span>
        </div>
        <div>
          <img src={V} alt="V" />
          <span className="benefits">Healthy meals in 30 minutes</span>
        </div>
        <div>
          <img src={V} alt="V" />
          <span className="benefits">Fresh ingredients, not frozen</span>
        </div>
        <div className="bottom-wrapper">
          <span className="read">Read Review</span>
          <div className="order-btn">
            <span className="order-now">Order Now</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardBig;
