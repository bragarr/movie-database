import { useParams } from "react-router-dom";
import {useEffect, useState} from "react";

import noimage from '../../assets/img/no_image.jpg';

import "./Actor.css"; 

const apiUrl = import.meta.env.VITE_API_DB;
const apiKey = import.meta.env.VITE_API_KEY;
const idiomaApi = import.meta.env.VITE_API_LANG;
const imagemUrl = import.meta.env.VITE_IMAGEM_URL;
const tamanhoPoster = import.meta.env.VITE_PROFILE_ACTOR;

export function Actor() {
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
                {credit && credit.map((credits, id) => {
                    if(credits.profile_path != null) {
                        return (
                        <li key={id} className="list_actors">
                            <img src={imagemUrl + tamanhoPoster + credits.profile_path} alt={credits.name} className="poster__actor" />
                            <article className="actors_name">
                                <p className="name">{credits.name}</p>
                                <p className="name">{credits.character}</p>
                            </article>
                        </li>
                        )
                    } else {
                        return (
                        <li key={id} className="list_actors">
                            <img src={noimage} alt={credits.name} className="poster__actor"/>
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