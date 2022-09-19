import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";

import {
    API_KEY,
    API_LANG,
    API_DB,
    IMAGEM_URL,
    PROFILE_ACTOR
} from "../../config";

import "./Actor.css"; 

const apiUrl = API_DB;
const apiKey = API_KEY;
const idiomaApi = API_LANG;
const imagemUrl = IMAGEM_URL;
const tamanhoPoster = PROFILE_ACTOR;

const Actor = () => {
    const {id} = useParams();
    const [credit, setCredits] = useState(null);

    const getCredit = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCredits(data.cast);
    };

    useEffect(() => {
        const creditUrl = `${apiUrl}${id}/credits?${apiKey}${idiomaApi}`;
        getCredit(creditUrl);
    },[])

    return (
        <section className="titulo">
            <h2 className="titulo__elenco">Elenco</h2>
            <ul className="cast_list">    
                {credit && credit.map((credits) => {
                    if(credits.profile_path != null) {
                        return (
                        <li key={Math.random()*500} className="list_actors">
                            <img src={imagemUrl + tamanhoPoster + credits.profile_path} alt={credits.name} className="poster__actor" />
                            <article className="actors_name">
                                <p className="name">{credits.name}</p>
                                <p className="name">{credits.character}</p>
                            </article>
                        </li>
                        )
                    } else {
                        return (
                        <li key={Math.random()*500} className="list_actors">
                            <img src="../img/no_image.jpg" alt={credits.name} className="poster__actor"/>
                            <article className="actors_name">
                                <p className="name">{credits.name}</p>
                                <p className="name">{credits.character}</p>
                            </article>
                        </li>
                        )
                    }
                })}
            </ul>
        </section>
    )
}

export default Actor