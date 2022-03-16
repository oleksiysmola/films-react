import React from "react";
import Film from "../components/Film";
import FilmNextButton from "../components/FilmNextButton";
import FilmBackButton from "../components/FilmBackButton";

const FilmContainer = ({film}) => {
    
    return (
        <section>
            <span id="film-details"><Film film={film}/></span>
            <div id="film-buttons">
                <FilmBackButton/>
                <FilmNextButton/>
            </div>
        </section>
    )
    
}

export default FilmContainer;