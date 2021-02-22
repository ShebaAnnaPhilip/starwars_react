import React from "react";
import "./Card.css";

export default function Card({ data, onClickDetails }) {
  return (
      <div className="cards-main">
<div className="card">
      <div className="card-heading">
        <p>{data.name}</p>
        <p>{`${data.height} cm height`} </p>
      </div>

      <div className="card-details">{<a onClick={onClickDetails}>&gt;</a>}</div>
    </div>
      </div>
    
  );
}
