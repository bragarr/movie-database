import { useState, useEffect } from "react";
import "./Home.css"; 

import {
    API_URL,
    API_KEY,
    // API_LANG,
    // IMAGEM_URL,
    // BACKDROPE_SIZE,
    // POSTER_SIZE,
} from "../config";

// import HeroImage from "../elements/HeroImage/HeroImage";
// import SearchBar from "../elements/SearchBar/SearchBar";

const movieURL = API_URL;
const apiKey = API_KEY;

const Home = () => {

    const [topMovies, setTopMovies] = useState([]);
    
    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        console.log(data);
    };

    useEffect(() => {

        const topRatedUrl = `${movieURL}top_rated?${apiKey}`
        
        console.log(topRatedUrl);
    }, [])

    return (
    <div>
        <h2>Home</h2>
        <p>Aqui ficara todos os principais filmes</p>
    </div>
    )
}

export default Home;