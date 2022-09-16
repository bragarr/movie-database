import { useState, useEffect } from "react";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import SearchBar from "../elements/SearchBar/SearchBar";
import HeroImage from "../elements/HeroImage/HeroImage";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";

import "./Home.css"; 

import {
    API_KEY,
    API_LANG,
    API_DB,
} from "../config";


const movieURL = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;
let aleatorio = 1;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setTopMovies(data.results);
        console.log(data);
    };
    

    useEffect(() => {
        const topRatedUrl = `${movieURL}popular?${apiKey}${idiomaApi}&page=${aleatorio}`;
        getTopRatedMovies(topRatedUrl);
       
    }, [])

    return (
        <div>
            <article>
                <HeroImage />
            </article>
            <article>
                <SearchBar />
            </article>
            <h3 className="titulo__section">Filmes Populares</h3>
            <section className="container__movie">
                {topMovies.length > 0 && topMovies.map((movie) => <FourColGrid key={movie.id} movie={movie} /> )}
            </section>
            <LoadMoreBtn />
        </div>
    )
};

export default Home;
