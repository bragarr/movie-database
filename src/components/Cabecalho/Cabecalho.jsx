import { Link } from 'react-router-dom';
import './Cabecalho.css';

import logo from '../../assets/img/reactMovie_logo.png';
import github from '../../assets/img/github.png';


export function Cabecalho() {
    return (
        <header className="cabecalho">

        <Link to={"/"}>
            <img className="cabecalho__imagem" src={logo} alt="logo" />
        </Link>
        
        
        <nav className="menu">
                <ul className="list__nav">
                    <li>
                        <a href="/home" className="menu__movies">Movies</a>
                    </li>
                    <li>
                        <a href={import.meta.env.VITE_GITHUB} target="_blank" className="menu__movies">
                            <img className="menu__github" src={github} alt="logo GitHub" />
                        </a>
                    </li>
                    <Link to={"signin"}>
                        <button className="menu__botao" type="button">Sign In</button>
                    </Link>
                </ul>
            </nav>
        </header >
    )
}