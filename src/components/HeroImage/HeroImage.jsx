import { useEffect, useState } from "react";
import './HeroImage.css'

import {
    API_DB,
    API_KEY,
    API_LANG,
    IMAGEM_URL,
    BACKDROPE_SIZE,
} from "../config";

const apiUrl = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;
const imagemUrl = IMAGEM_URL;
const tamanhoImagem = BACKDROPE_SIZE;
let resultMovie = "";
let filmeAleatorio = Math.floor(Math.random()*20);

const HeroImage = () => {

    const [,setLatestMovie] = useState([]);
    
    const getLatestMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setLatestMovie(data.results);
        resultMovie = data.results[filmeAleatorio];
    };

    useEffect(() => {
        const lastestMovieUrl = `${apiUrl}popular?${apiKey}${idiomaApi}`;
        getLatestMovie(lastestMovieUrl);
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
        <div className="section__destaque">
            <h2 className="destaque">Em Alta</h2>
        </div>
        <div className="conteudo_div--image">
            <div className="text__presantation">
                <p className="hero__titulo">{resultMovie.title}</p>
                <p className="hero__description">{resultMovie.overview}</p>
            </div>
        </div>
    </div>

    )
}
export default HeroImage;