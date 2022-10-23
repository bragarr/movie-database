import { Link } from "react-router-dom";

import "./FourColGrid.css"

const imagemUrl = import.meta.env.VITE_IMAGEM_URL;
const tamanhoPoster = import.meta.env.VITE_POSTER_SIZE;

export function FourColGrid({movie, showlink = true}) {
    return (
        <div > 
            {showlink && <Link to={`/movie/${movie.id}`}>
                <img src={imagemUrl + tamanhoPoster + movie.poster_path} alt={movie.title} className="poster__movie"/>
            </Link>}
        </div>
    );
};