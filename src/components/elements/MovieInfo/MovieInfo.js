import './MovieInfo.css';
import "../FourColGrid/FourColGrid.css"

import {
    IMAGEM_URL,
    POSTER_MOVIE,
    BACKDROPE_SIZE,
} from "../../config";

const imagemUrl = IMAGEM_URL;
const tamanhoPoster = POSTER_MOVIE;
const background = BACKDROPE_SIZE;

const MovieInfo = ({movie}) => {
    let tamanhoGenres = movie.genres.length;
    let arrayGeneros = [];
    for(let i = 0; i < tamanhoGenres; i++) {
        arrayGeneros.push(movie.genres[i].name);
    }
    return (
        <div className="container__movieInfo"
        style={{
            background: `linear-gradient(to bottom, rgba(0,0,0,0)
          39%, rgba(0,0,0,0)
          41%, rgba(0,0,0,0.65)
          100%), url('${imagemUrl}${background}${movie.backdrop_path}'), #1c1c1c`
          }}
        >
            <figure className="bloco__movie">
                <img src={imagemUrl + tamanhoPoster + movie.poster_path} alt={movie.title} className="movie__poster"/>
            </figure>
            <article className="container">
                <h2 className="titulo__filme">{movie.title}</h2>
                <h3 className="titulo__original">Título Original: {movie.original_title}</h3>
                <h4>Sinopse</h4>
                <p>{movie.overview}</p>
                <p>Avaliação: {Number(movie.vote_average).toFixed(1)}</p>
                <p>Duração: {movie.runtime} minutos</p>
                <p>Data de Lançamento: {movie.release_date}</p>
                <p>Orçamento: ${Number(movie.budget)}</p>
                <p>Bilheteria: ${Number(movie.revenue)}</p>
                <p>Gêneros:</p>
                <ul className="genres">
                    <li className="list_genres">{arrayGeneros[0]}</li>
                    <li className="list_genres">{arrayGeneros[1]}</li>
                    <li className="list_genres">{arrayGeneros[2]}</li>   
                </ul>
            </article>
        </div>
    )
}

export default MovieInfo;