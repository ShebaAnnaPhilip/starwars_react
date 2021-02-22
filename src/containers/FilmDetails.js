import React from "react";

export default function FilmDetails() {
  
  return (<div>
      <h1>{details.name}</h1>
           <Card topLabel="Model" bottomLabel={details.model}/>
           <Card topLabel="Manufacturer" bottomLabel={details.manufacturer}/>
           <Card topLabel="Cost" bottomLabel={details.cost_in_credits}/>
           <Card topLabel="Length" bottomLabel={details.length}/>
           <Card topLabel="Atmospheric Speed" bottomLabel={details.max_atmosphering_speed}/>
           <Card topLabel="Crew" bottomLabel={details.crew}/>
           <Card topLabel="Passengers" bottomLabel={details.passengers}/>
           <Card topLabel="Cargo Capacity" bottomLabel={details.cargo_capacity}/>
  </div>)
}
