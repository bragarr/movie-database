import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import SearchBar from "../elements/SearchBar/SearchBar";
import "../Search/Search.css"
import "../elements/FourColGrid/FourColGrid.css"
import {
    API_SEARCH,
    API_KEY,
    API_LANG
} from "../config";

const apiSearch = API_SEARCH;
const apiKey = API_KEY;
const idimodaUrl = API_LANG;

const Search = () => {
    const [searchParams] = useSearchParams();
    const [movies, setMovies] = useState([]);
    const query = searchParams.get("q");

    const getMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
        const moviesSearchUrl = `${apiSearch}?${apiKey}&query=${query}${idimodaUrl}`;
        getMovies(moviesSearchUrl);
        console.log(moviesSearchUrl)
    }, [query])

    return (
        <div>
            <article>
                <SearchBar />
            </article>
            <div>
                <h2 className="titulo__busca">Resultados:
                <span className="seacrh__text">
                    {query}
                </span>
                </h2>
            </div>
            <div className="container__movie">
                {movies.length > 0 && movies.map((movie) => <FourColGrid key={movie.id} movie={movie} /> )}
            </div> 
        </div>
    )
};

export default Search;