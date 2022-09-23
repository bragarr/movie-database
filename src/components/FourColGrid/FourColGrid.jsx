import { Link } from "react-router-dom";

import "./FourColGrid.css"

import {
    IMAGEM_URL,
    POSTER_SIZE,
} from "../config";

const imagemUrl = IMAGEM_URL;
const tamanhoPoster = POSTER_SIZE;

export function FourColGrid({movie, showlink = true}) {
    return (
        <div > 
            {showlink && <Link to={`/movie/${movie.id}`}>
                <img src={imagemUrl + tamanhoPoster + movie.poster_path} alt={movie.title} className="poster__movie"/>
            </Link>}
        </div>
    );
};