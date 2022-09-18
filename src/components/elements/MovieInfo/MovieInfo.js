import { Link } from "react-router-dom";
import "./MovieInfo.css";
import "../FourColGrid/FourColGrid.css";

import { IMAGEM_URL, POSTER_SIZE } from "../../config";

const imagemUrl = IMAGEM_URL;
const tamanhoPoster = POSTER_SIZE;

const MovieInfo = ({ movie }) => {
  let tamanhoGenres = movie.genres.length;
  let j = 0;
  let arrayGeneros = [];
  for (let i = 0; i < tamanhoGenres; i++) {
    arrayGeneros.push(movie.genres[i].name);
  }
  return (

    <div className="container__movieInfo">
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
        <ul>
          <li>{arrayGeneros[0]}</li>
          <li>{arrayGeneros[1]}</li>
          <li>{arrayGeneros[2]}</li>
        </ul>
      </article>
    </div>
  );
};

export default MovieInfo;
