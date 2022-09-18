import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import MovieInfo from "../elements/MovieInfo/MovieInfo"
import FourColGrid from "../elements/FourColGrid/FourColGrid";
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



const Movie = () => {

    const {id} = useParams();
    const [movie, setMovie] = useState(null);


    const getMovie = async (url) => {
        const res = await fetch(url);
        const data = await res.json();

        setMovie(data);
        console.log(data)

    };

    useEffect(() => {
        const moviehUrl = `${apiUrl}${id}?${apiKey}${idiomaApi}`;
        getMovie(moviehUrl);
        console.log(moviehUrl)
    }, [])

    return(
        <div>
            {movie && <><MovieInfo movie={movie} /></>}
        </div>
    )
}

export default Movie;