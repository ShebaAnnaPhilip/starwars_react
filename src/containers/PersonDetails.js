import React, {useState} from 'react'
import Card from '../components/Card'
import { getAllData } from '../utils';

export default function PersonDetails({details, loading}) {
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
        {loading ? (
          <h1>Loading .....</h1>
        ) : (
          <>
            <h1>{details.name}</h1>
            <Card topLabel="Year of Birth" bottomLabel={details.birth_year} />
            <Card topLabel="Gender" bottomLabel={details.gender} />
            <Card topLabel="Height" bottomLabel={details.height} />
            <Card topLabel="Mass" bottomLabel={details.mass} />
            <Card topLabel="Hair Colour" bottomLabel={details.hair_color} />
            <Card topLabel="Skin Colour" bottomLabel={details.skin_color} />
            <Card topLabel="Eye Colour" bottomLabel={details.eye_color} />
            <Card topLabel="Skin Colour" bottomLabel={details.skin_color} />
            <Card
              topLabel="Films"
              onClickDetails={() => handleClickDetails(details.films)}
              filmList={filmList}
            />
          </>
        )}
      </div>
    );
}
