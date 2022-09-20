import React from 'react'
import { Link } from 'react-router-dom'
import './Cabecalho.css'

function Cabecalho() {
    return (
        <header className="cabecalho">

        <Link to={"/"}>
            <img className="cabecalho__imagem" src="/img/reactMovie_logo.png" alt="logo" />
        </Link>
        
        
        <nav className="menu">
                <ul className="list__nav">
                    <li>
                        <a href="/home" className="menu__movies">Movies</a>
                    </li>
                    <li>
                        <img className="menu__github" src="/img/github.png" alt="logo GitHub" />
                    </li>
                    <li>
                        <button className="menu__botao" type="submit">login</button>
                    </li>
                </ul>
            </nav>
        </header >
    )
}

export default Cabecalho