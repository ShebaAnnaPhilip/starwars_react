import React from 'react';

export default function Card({people}) {
    return (
        <div className="Card">
           <p>{people.name}</p> 
           <p>{people.height}</p> 
           <p>{people.hair_color}</p>
        </div>
    )
}
