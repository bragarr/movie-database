import { useState, useEffect } from "react";
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

// import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";

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
    };

    useEffect(() => {
        const topRatedUrl = `${movieURL}top_rated?${apiKey}${idiomaApi}`;
        getTopRatedMovies(topRatedUrl);

    }, [])

    return (
        <div>
            {topMovies && topMovies.map((movie) => <p>{movie.title}</p> )}
        </div>
    )
};

export default Home;
