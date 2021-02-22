import React from 'react'
import Card from '../components/Card'

export default function StarshipDetails({details}) {
    return (
        <div>
            <h1>{details.name}</h1>
           <Card topLabel="Model" bottomLabel={details.model}/>
           <Card topLabel="Manufacturer" bottomLabel={details.manufacturer}/>
           <Card topLabel="Cost_in_credits" bottomLabel={details.cost_in_credits}/>
           <Card topLabel="Length" bottomLabel={details.length}/>
           <Card topLabel="Max_atmosphering_speed" bottomLabel={details.max_atmosphering_speed}/>
           <Card topLabel="Crew" bottomLabel={details.crew}/>
           <Card topLabel="Passengers" bottomLabel={details.passengers}/>
           <Card topLabel="Cargo_capacity" bottomLabel={details.cargo_capacity}/>
           <Card topLabel="Consumables" bottomLabel={details.consumables}/>
           <Card topLabel="Hyperdrive_rating" bottomLabel={details.hyperdrive_rating}/>
           <Card topLabel="MGLT" bottomLabel={details.MGLT}/>
           <Card topLabel="Starship_class" bottomLabel={details.starship_class}/>
        </div>
    )
}
