import React from "react";

const Card = (props) => {
  return (
    <div className="card-box">
      <div className="card-icon">
      <img src={props.imageSrc} alt={props.imageAlt} />
        	  <div className="text">
            <h4>{props.feature}</h4>

              	  </div>
  </div>
    </div>
  );
};

export default Card;
