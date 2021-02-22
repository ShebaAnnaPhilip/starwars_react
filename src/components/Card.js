import React from "react";
import "./Card.css";
import showMore from '../images/showMore.png';


export default function Card({topLabel,bottomLabel, onClickDetails }) {
    const showDetails = typeof(onClickDetails) === 'function';
  return (
    <div className="cards-main">
      <div className="card">
        <div className="card-heading">
          <h3 onClick={onClickDetails}>{topLabel}</h3>
          <p>{bottomLabel}</p>
        </div>

        <div className="card-details">
          {showDetails && <img className="show-details-img"src={showMore} alt="Back" onClick={onClickDetails}/>}
        </div>
      </div>
    </div>
  );
}
