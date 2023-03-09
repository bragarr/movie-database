import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import { FourColGrid } from "../../components/FourColGrid/FourColGrid";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { Spinner } from "../../components/Spinner/Spinner";

import "./Search.css";
import "../../components/FourColGrid/FourColGrid.css";

const apiSearch = import.meta.env.VITE_API_SEARCH;
const apiKey = import.meta.env.VITE_API_KEY;
const idimodaUrl = import.meta.env.VITE_API_LANG;

export function Search() {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    
    const query = searchParams.get("q");

    const getMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setMovies(data.results);
    };

    useEffect(() => {
        const moviesSearchUrl = `${apiSearch}?${apiKey}&${idimodaUrl}&query=${query}&page=1&include_adult=false`;
        getMovies(moviesSearchUrl);
    }, [query])

    return (
        <section>
            <article>
                <SearchBar />
            </article>
            <article>
                <h2 className="titulo__busca">Resultados:
                    <span className="seacrh__text">
                        {query}
                    </span>
                </h2>
                {movies.length === 0 && <Spinner />}
            </article>
            <article className="container__movie">
                {movies.length > 0 && movies.map((movie) => <FourColGrid key={movie.id} movie={movie} /> )}
            </article> 
        </section>
    )
};