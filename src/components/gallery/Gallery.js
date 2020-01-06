import React, { useEffect, useState } from "react";
import CardBig from "./card-big/CardBig";
import CardSm from "./card-sm/CardSm";
import windowSize from "react-window-size";

const Gallery = ({ windowWidth }) => {
  if (windowWidth >= 992) {
    return (
      <div className="gallery container mt-4">
        {[0, 1, 2, 3, 4].map(i => {
          return <CardBig key={i} />;
        })}
      </div>
    );
  } else {
    return (
      <div className="gallery d-flex flex-column align-items-center mt-4">
        {[0, 1, 2, 3, 4].map(i => {
          return <CardSm key={i} />;
        })}
      </div>
    );
  }
};

export default windowSize(Gallery);
