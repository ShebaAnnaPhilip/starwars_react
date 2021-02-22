import React from "react";

export default function Pagination(props) {
  const previousPage = () => {
      props.prev();
  };

  const nextPage = () => {
    props.next();
  };
  return (
    <div>
      <button onClick={previousPage}>Previous</button>
      <button onClick={nextPage}>Next</button>
    </div>
  );
}
