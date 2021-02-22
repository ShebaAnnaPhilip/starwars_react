import React from 'react';
import './Card.css';

export default function Card({people}) {
    return (
        <div className="Card">
           <p>{people.name}</p> 
           <p>{people.height}</p> 
           <p>{people.hair_color}</p>
        </div>
    )
}
