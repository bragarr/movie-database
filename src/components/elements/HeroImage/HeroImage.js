import React from "react";
import { useEffect, useState } from "react";

import {
    API_DB,
    API_KEY,
    API_LANG,
    IMAGEM_URL,
    BACKDROPE_SIZE,
} from "../../config";

import "./HeroImage.css";

const apiUrl = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;
const imagemUrl = IMAGEM_URL;
const tamanhoImagem = BACKDROPE_SIZE;
let resultMovie = "";
let filmeAleatorio = Math.floor(Math.random()*20);

console.log(filmeAleatorio);

const HeroImage = () => {

    const [latest, setLatestMovie] = useState([]);
    
    const getLatestMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setLatestMovie(data.results);
        console.log(data.results[0]);
        resultMovie = data.results[filmeAleatorio];
        console.log(data.results);
    };

    useEffect(() => {
        const lastestMovieUrl = `${apiUrl}now_playing?${apiKey}${idiomaApi}`;
        getLatestMovie(lastestMovieUrl);
        console.log(lastestMovieUrl)

    }, [])

    return (
    <div 
        className="hero__background"
        style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
          39%, rgba(0,0,0,0)
          41%, rgba(0,0,0,0.65)
          100%), url('${imagemUrl}${tamanhoImagem}${resultMovie.backdrop_path}'), #1c1c1c`
          }}
    >
        <div className="conteudo_div--image">
            <div className="text__presantation">
                <h1 className="hero__titulo">{resultMovie.title}</h1>
                <p className="hero__description">{resultMovie.overview}</p>
            </div>
        </div>
    </div>

    )
}


export default HeroImage;