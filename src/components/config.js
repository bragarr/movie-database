// Configuração para Key API


//Consumo de API para Banco de dados de filmes e atores
const API_SEARCH = "https://api.themoviedb.org/3/search/movie/";
const API_DB = "https://api.themoviedb.org/3/movie/";
const API_KEY = "api_key=569ff9eec8d764584edc5a6ab4f72371";
const API_LANG = "&language=pt-BR";

//Consumo de API para imagens de filmes e atores

const IMAGEM_URL = "https://image.tmdb.org/t/p/";


// Tamanho das imagens para página

//para poster principal

const BACKDROPE_SIZE = "w1280";

// Para postes menores

const POSTER_SIZE = "w500/";


export {
    API_SEARCH,
    API_DB,
    API_KEY,
    API_LANG,
    IMAGEM_URL,
    BACKDROPE_SIZE,
    POSTER_SIZE
}