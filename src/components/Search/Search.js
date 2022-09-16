import {useEffect, useState} from "react";
import { useSearchParams } from "react-router-dom";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import "../Search/Search.css"
import "../elements/FourColGrid/FourColGrid.css"

import {
    API_SEARCH,
    API_KEY,
    API_LANG,
    IMAGEM_URL,
    POSTER_SIZE,
} from "../config";

const apiSearch = API_SEARCH;
const apiKey = API_KEY;


const Search = () => {

    const [searchParams] = useSearchParams();

    const [movies, setMovies] = useState([]);

    const query = searchParams.get("q");
    console.log(query);

    const getMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovies(data.results);
        console.log(data);
    };

    useEffect(() => {
        const moviesSearchUrl = `${apiSearch}?${apiKey}&query=${query}`;
        getMovies(moviesSearchUrl);
        console.log(moviesSearchUrl)

    }, [])

    return (
        <div>
            <div>
                <h2 className="h2">Resultados:
                <span 
                className="seacrh__text">{query}
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