import React from 'react';
import {Link} from 'react-router-dom';
import homeImage from '../images/starwars_home.jpg';
import './Home.css';

export default function Home() {
    return (
      <div className="home">
        <div>
        <Link to="/people">People</Link> |
        <Link to="/planets">Planets</Link> |
        <Link to="/starships">Starships</Link>
        </div>
        <img className="home-image" src={homeImage} alt="" />
      </div>
    );
}
