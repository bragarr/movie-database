import React from "react";
import { Link } from "react-router-dom";

import "./Navigation.css"

const Navigation = ({movie}) => {
    return (
        <div>
            <article className="barra__navigation">
                <Link to={"/"} className="link__home">
                    <p>Home / </p>
                </Link>
                <p>{movie.original_title}</p> 
            </article>
        </div>
    )
}

export default Navigation