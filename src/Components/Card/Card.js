import React from "react";

function Card({title,imgSrc,link}) {
  return (
    <div className="card">
      <div className="cardimg">
       <img src={imgSrc} alt="alt" />
      </div>
      <h6>{title}</h6>
      <a  rel="noreferrer" href={link} target="_blank">Visit Now</a>
    </div>
  );
}

export default Card;
