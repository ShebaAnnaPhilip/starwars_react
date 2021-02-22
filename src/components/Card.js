import React from "react";
import "./Card.css";
import showMore from "../images/showMore.png";
import FilmCard from "./FilmCard";

export default function Card({
  topLabel,
  bottomLabel,
  onClickDetails,
  filmList,
}) {
  const showDetails = typeof onClickDetails === "function";
  console.log(filmList);
  return (
    <div className="cards-main">
      {!(filmList && filmList.length > 0) && (
        <div className="card">
          <div className="card-heading">
            <p className="top-label">{topLabel}</p>
            <p className="bottom-label">{bottomLabel}</p>
          </div>

          <div className="card-details">
            {showDetails && (
              <img
                className="show-details-img"
                src={showMore}
                alt="Show Details"
                onClick={onClickDetails}
              />
            )}
          </div>
        </div>
      )}
      {filmList?filmList.length>0 &&<div className="film-card">
       <FilmCard filmList = {filmList}/>
      </div>:''}
    </div>
  );
}
