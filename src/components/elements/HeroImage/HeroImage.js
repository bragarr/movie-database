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
        <img className="img__principal" src="./img/page.jpg"/>
        <h1 className="hero__titulo">Fall</h1>
        <p className="hero__description">Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.</p>
    </div>

    )
}


export default HeroImage;