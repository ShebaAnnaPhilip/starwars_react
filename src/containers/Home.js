import React from 'react';
import {Link} from 'react-router-dom';
import homeImage from '../images/starwars_home.jpg';
import './Home.css';

export default function Home() {
    return (
      <div className="home">
        <div className="home-nav">
        <Link className="home-link" to="/people">People</Link> |
        <Link className="home-link" to="/planets">Planets</Link> |
        <Link className="home-link" to="/starships">Starships</Link>
        </div>
        <img className="home-image" src={homeImage} alt="" />
      </div>
    );
}
