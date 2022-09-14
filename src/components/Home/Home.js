import React from "react";
import "./Home.css" 
import SearchBar from "../elements/SearchBar/SearchBar";

import {
    API_URL,
    API_KEY,
    API_LANG,
    IMAGEM_URL,
    BACKDROPE_SIZE,
    POSTER_SIZE,
} from "../config";

import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";


const Home = () => {
    return (
        <>
        <div>Home</div>
        <SearchBar />
        </>
}