import React, { useState } from "react";
import Card from "../components/Card";
import { getAllData } from "../utils";

export default function StarshipDetails({ details,loading }) {
  const [filmList, setFilmList] = useState([]);

  const getFilmDetails = (urls) => {
    Promise.all(urls.map((url) => getAllData(url)))
      .then((resp) => Promise.all(resp.map((r) => r.title)))
      .then((result) => setFilmList(result));
  };

  const handleClickDetails = (films) => {
    let filmUrl = films.map((film) => film);
    getFilmDetails(filmUrl);
  };

  return (
    <div>
      <h1>{details.name}</h1>
      <Card topLabel="Model" bottomLabel={details.model} />
      <Card topLabel="Manufacturer" bottomLabel={details.manufacturer} />
      <Card topLabel="Cost" bottomLabel={details.cost_in_credits} />
      <Card topLabel="Length" bottomLabel={details.length} />
      <Card
        topLabel="Atmospheric Speed"
        bottomLabel={details.max_atmosphering_speed}
      />
      <Card topLabel="Crew" bottomLabel={details.crew} />
      <Card topLabel="Passengers" bottomLabel={details.passengers} />
      <Card topLabel="Cargo Capacity" bottomLabel={details.cargo_capacity} />
      <Card topLabel="Consumables" bottomLabel={details.consumables} />
      <Card
        topLabel="Hyperdrive Rating"
        bottomLabel={details.hyperdrive_rating}
      />
      <Card topLabel="MGLT" bottomLabel={details.MGLT} />
      <Card topLabel="Starship Class" bottomLabel={details.starship_class} />
      <Card
        topLabel="Films"
        onClickDetails={() => handleClickDetails(details.films)}
        filmList={filmList}
      />
    </div>
  );
}
