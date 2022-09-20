import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../elements/MovieInfo/MovieInfo"
import Navigation from "../elements/Navigation/Navigation";
import Actor from "../elements/Actor/Actor";
import Spinner from "../elements/Spinner/Spinner";

import {
    API_DB,
    API_KEY,
    API_LANG,
} from "../config";

const apiUrl = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;

const Movie = () => {
    const {id} = useParams();
    const [movie, setMovie] = useState(null);

    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovie(data);
    };

    useEffect(() => {
        const moviehUrl = `${apiUrl}${id}?${apiKey}${idiomaApi}`;
        getMovie(moviehUrl);
    },[])

    return(
        <div>
            {!movie && <Spinner />}
            {movie && <Navigation movie={movie}/>}
            {movie && <><MovieInfo movie={movie} /></>}
            {movie && <Actor />}
        </div>
    )
}

export default Movie;