import { useState, useEffect } from "react";
import { FourColGrid } from "../../components/FourColGrid/FourColGrid";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { HeroImage } from "../../components/HeroImage/HeroImage";
import { NavPage } from "../../components/NavPage/NavPage";

import "./Home.css"; 

const movieURL = import.meta.env.VITE_API_DB;
const apiKey = import.meta.env.VITE_API_KEY;
const idiomaApi = import.meta.env.VITE_API_LANG;

export function Home() {

    const [topMovies, setTopMovies] = useState([]);
    const [dados, setDados] = useState([]);
    const [offset, setOffset] = useState(0);
    
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTopMovies(data.results);
    };
    useEffect(() => {
        const topRatedUrl = `${movieURL}popular?${apiKey}${idiomaApi}&page=${offset + 1}`;
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
            <p className="texto__paginas">Páginas</p>
            <NavPage 
                limit={topMovies.length} 
                total={dados} 
                offset={offset}
                setOffset={setOffset}
            />
        </div>
    )
};