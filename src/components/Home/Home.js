import { useState, useEffect } from "react";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import SearchBar from "../elements/SearchBar/SearchBar";
import HeroImage from "../elements/HeroImage/HeroImage";
import LoadMoreBtn from "../elements/LoadMoreBtn/LoadMoreBtn";
import NavPage from "../elements/NavPage/NavPage";

import "./Home.css"; 

import {
    API_KEY,
    API_LANG,
    API_DB,
} from "../config";


const movieURL = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;
const pageOne = 1;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    const [dados, setDados] = useState([]);
    const [offset, setOffset] = useState(0);
    
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };
    useEffect(() => {
        const topRatedUrl = `${movieURL}popular?${apiKey}${idiomaApi}&page=${offset +1}`;
        getTopRatedMovies(topRatedUrl);
    },[offset])

    const getDados = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setDados(data.total_results);
    };

    useEffect(() => {
        const dadosPaginas = `${movieURL}popular?${apiKey}${idiomaApi}`;
        getDados(dadosPaginas);
    },[])

    return (
        <div>
            <article>
                <SearchBar />
            </article>
            <article>
                <HeroImage />
            </article>
            <h3 className="titulo__section">Filmes Populares</h3>
            <section className="container__movie">
                {topMovies.length > 0 && topMovies.map((movie) => <FourColGrid key={movie.id} movie={movie} /> )}
            </section>
            <NavPage 
                limit={topMovies.length} 
                total={dados} 
                offset={offset}
                setOffset={setOffset}
            />
        </div>
    )
};

export default Home;