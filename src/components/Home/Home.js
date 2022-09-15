import { useState, useEffect } from "react";
import FourColGrid from "../elements/FourColGrid/FourColGrid";

import "./Home.css"; 

import {
    API_SEARCH,
    API_KEY,
    API_LANG,
    API_DB,
    IMAGEM_URL,
    // BACKDROPE_SIZE,
    // POSTER_SIZE,
} from "../config";


const movieURL = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;
const imagem = IMAGEM_URL;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
        const topRatedUrl = `${movieURL}top_rated?${apiKey}${idiomaApi}`;
        getTopRatedMovies(topRatedUrl);

    }, [])

    return (
        <div className="container__movie">
            {topMovies.length > 0 && topMovies.map((movie) => <FourColGrid key={movie.id} movie={movie} /> )}
        </div>
    )
};

export default Home;
