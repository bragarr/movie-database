import { useState, useEffect } from "react";
import FourColGrid from "../elements/FourColGrid/FourColGrid";

import "./Home.css"; 

import {
    API_KEY,
    API_LANG,
    API_DB,
} from "../config";


const movieURL = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
        const topRatedUrl = `${movieURL}popular?${apiKey}${idiomaApi}`;
        getTopRatedMovies(topRatedUrl);

    }, [])

    return (
        <div>
            <h3 className="titulo__section">Filmes Populares</h3>
            <section className="container__movie">
                {topMovies.length > 0 && topMovies.map((movie) => <FourColGrid key={movie.id} movie={movie} /> )}
            </section>
        </div>
    )
};

export default Home;
