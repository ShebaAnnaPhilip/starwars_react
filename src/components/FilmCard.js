import React from 'react'

export default function FilmCard({filmList}) {
    return (
        <div style={{width:"100%", textAlign:"center"}}>
            <p style={{fontSize:"24px", fontWeight:"bold"}}>Films</p>
            {filmList?filmList.length>0 && (
              <ul style={{listStyle:"none",display:"inline-block",textAlign:"left", fontSize:"20px"}}>
                {filmList.map((film, index) => (
                  <li key={index}>{film}</li>
                ))}
              </ul>
            ): ''}
        </div>
    )
}
