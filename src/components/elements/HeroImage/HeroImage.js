import React from "react";
import "./HeroImage.css";
import {
    IMAGEM_URL,
    BACKDROPE_SIZE,
} from "../../config";

const imagemUrl = IMAGEM_URL;


const HeroImage = (movie) => {
    return (
    <div 
        className="hero__background"
        style={{background: `url${imagemUrl}${BACKDROPE_SIZE}${movie.backdrop_path}`}}

    >
        <h2 className="hero__title">Título do filme</h2>
        <p className="hero__description">Descrição do Filme</p>
    </div>

    )
}


export default HeroImage;