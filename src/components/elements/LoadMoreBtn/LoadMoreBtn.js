import {useState} from "react";

import "./LoadMoreBtn.css";

import {
    API_KEY,
    API_LANG,
    API_DB,
} from "../../config";


const movieURL = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;
let pagina = 1;



const LoadMoreBtn = () => {

    const [load, setLoad] = useState([]);

    const stopSubmit = (e) => {
        e.preventDefault();
    };

    const loadMoreItems = () => {
        let endpoint = "";
        endpoint = `${movieURL}popular?${apiKey}${idiomaApi}&page=${pagina + 1}`;
    }

    return (
        <div className="campao_botao">
            <form onSubmit={stopSubmit}>
                <button type="submit" className="botao_filmes" onClick={loadMoreItems}>EXPLORE +</button>
            </form>
            {loadMoreItems === true && 
                <div>
                    <p>Teste Básico</p>
                </div>
            }

        </div>
    );

}

export default LoadMoreBtn
