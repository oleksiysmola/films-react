import React from "react";

const Film = ({film}) => {

    return (
        <>
            <h3>{film.title}</h3>
            <p>Duration: {film.duration}</p>
            <p>Rating: {film.rating}</p>
            <p>Director: {film.director.name}</p>
            <p>Cast:</p>
            <ul>
                {film.cast.map((actor, index) => {
                    return(
                        <li key={index}>{actor.name}</li>
                    )
                })}
            </ul> 
        </>
    )
}

export default Film;