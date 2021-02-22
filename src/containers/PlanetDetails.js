import React from 'react'
import Card from '../components/Card'

export default function PlanetDetails({details}) {
    return (
        <div>
            <h1>{details.name}</h1>
           <Card topLabel="Rotation Period" bottomLabel={details.rotation_period}/>
           <Card topLabel="Orbital Period" bottomLabel={details.orbital_period}/>
           <Card topLabel="Diameter" bottomLabel={details.diameter}/>
           <Card topLabel="Gravity" bottomLabel={details.gravity}/>
           <Card topLabel="Terrain" bottomLabel={details.terrain}/>
           <Card topLabel="Surface Water" bottomLabel={details.surface_water}/>
           <Card topLabel="Population" bottomLabel={details.population}/>
        </div>
    )
}
