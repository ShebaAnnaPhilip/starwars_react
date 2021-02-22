import React from 'react'
import Card from '../components/Card'

export default function PersonDetails({details, loading}) {
    if(!details) return;
    return (
      <div>
        {loading ? (
          <h1>Loading .....</h1>
        ) : (
          <>
            <h1>{details.name}</h1>
            <Card topLabel="Height" bottomLabel={details.height} />
            <Card topLabel="Mass" bottomLabel={details.mass} />
            <Card topLabel="Hair Colour" bottomLabel={details.hair_color} />
            <Card topLabel="Skin Colour" bottomLabel={details.skin_color} />
            <Card topLabel="Eye Colour" bottomLabel={details.eye_color} />
          </>
        )}
      </div>
    );
}
