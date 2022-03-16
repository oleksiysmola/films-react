import React from "react";
import Film from "../components/Film";
import FilmNextButton from "../components/FilmNextButton";
import FilmBackButton from "../components/FilmBackButton";
import { useState } from "react";

let filmIndex = 0;

const FilmContainer = ({films}) => {

    const [film, setFilm] = useState(films[filmIndex]);
    console.log("length:" + films.length)
    const handleFilmNextButtonClick = () => {
        if (filmIndex + 1 < films.length){
            filmIndex++;
        } else {
            filmIndex = 0;
        }
        setFilm(films[filmIndex]);
    }

    const handleFilmBackButtonClick = () => {
        if (filmIndex - 1 >= 0){
            filmIndex--;
        } else {
            filmIndex = films.length - 1;
        }
        setFilm(films[filmIndex]);
    }

    return (
        <section>
            <span id="film-details"><Film film={film}/></span>
            <div id="film-buttons">
                <FilmBackButton onClick={handleFilmBackButtonClick}/>
                <FilmNextButton onClick={handleFilmNextButtonClick}/>
            </div>
        </section>
    )
    
}

export default FilmContainer;