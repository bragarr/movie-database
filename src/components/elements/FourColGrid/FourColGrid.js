import { Link } from "react-router-dom";

import {
    IMAGEM_URL,
    POSTER_SIZE,
} from "../../config";

const imagemUrl = IMAGEM_URL;
const tamanhoPoster = POSTER_SIZE;

const FourColGrid = ({movie, showlink = true}) => {
    return (
        <div >
            {showlink && <Link to={`/movie/${movie.id}`}><img src={imagemUrl + tamanhoPoster + movie.poster_path} alt={movie.title} className="conatiner"/></Link>}
        </div>
    );
};

export default FourColGrid