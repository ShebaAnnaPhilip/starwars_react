import React, {useState} from 'react'
import Card from '../components/Card'
import { getAllData } from '../utils';

export default function PlanetDetails({details}) {
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
        <Card
          topLabel="Rotation Period"
          bottomLabel={details.rotation_period}
        />
        <Card topLabel="Orbital Period" bottomLabel={details.orbital_period} />
        <Card topLabel="Diameter" bottomLabel={details.diameter} />
        <Card topLabel="Gravity" bottomLabel={details.gravity} />
        <Card topLabel="Terrain" bottomLabel={details.terrain} />
        <Card topLabel="Surface Water" bottomLabel={details.surface_water} />
        <Card topLabel="Population" bottomLabel={details.population} />
        <Card
          topLabel="Films"
          onClickDetails={() => handleClickDetails(details.films)}
          filmList={filmList}
        />
      </div>
    );
}
