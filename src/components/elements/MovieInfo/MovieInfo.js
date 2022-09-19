import "./MovieInfo.css";
import "../FourColGrid/FourColGrid.css";

import 
  { 
    IMAGEM_URL,
    BACKDROPE_SIZE,
    POSTER_MOVIE 
  } from "../../config";

const imagemUrl = IMAGEM_URL;
const tamanhoPoster = POSTER_MOVIE;
const background = BACKDROPE_SIZE;

const MovieInfo = ({ movie }) => {
  let tamanhoGenres = movie.genres.length;
  let arrayGeneros = [];
  for (let i = 0; i < tamanhoGenres; i++) {
    arrayGeneros.push(movie.genres[i].name);
  }
  return (

    <section className="container__movieInfo"
    style={{
      background: `linear-gradient(to bottom, rgba(0,0,0,0)
    39%, rgba(0,0,0,0)
    41%, rgba(0,0,0,0.65)
    100%), url('${imagemUrl}${background}${movie.backdrop_path}'), #1c1c1c`
    }}
    >
      <figure className="bloco__movie">
        <img
          src={imagemUrl + tamanhoPoster + movie.poster_path}
          alt={movie.title}
        />
      </figure>
      <article className="container">
        <h2>{movie.title}</h2>
        <h3>Título Original {movie.original_title}</h3>
        <p>{movie.overview}</p>
        <p>Avaliação: {Number(movie.vote_average).toFixed(1)}</p>
        <p>Duração: {movie.runtime} minutos</p>
        <p>Data de Lançamento: {movie.release_date}</p>
        <p>Orçamento: ${Number(movie.budget)}</p>
        <p>Receita: ${Number(movie.revenue)}</p>
        <p>Gênero:</p>
        <ul className="genres_list">
          <li className="genres">{arrayGeneros[0]}</li>
          <li className="genres">{arrayGeneros[1]}</li>
          <li className="genres">{arrayGeneros[2]}</li>
        </ul>
      </article>
    </section>
  );
};

export default MovieInfo;
