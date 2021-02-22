import React from "react";
import "./Pagination.css"

export default function Pagination(props) {
  const previousPage = () => {
      props.prev();
  };

  const nextPage = () => {
    props.next();
  };
  return (
    <div className="pagination">
      <button disabled={props.disablePrev} className="pagination-btn" onClick={previousPage}>Previous</button>
      <button disabled={props.disableNext} className="pagination-btn" onClick={nextPage}>Next</button>
    </div>
  );
}
