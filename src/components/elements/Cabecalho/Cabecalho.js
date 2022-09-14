import './Cabecalho.css'

function Cabecalho (){
    return (
        <header className="cabecalho">
            <img className="cabecalho__imagem" src="/img/reactMovie_logo.png" alt="logo"/>

            <ul className="menu">
                <li>
                    <a href="#" className="menu__movies">movies</a>
                </li>
                <li>
                    <img className="menu__github" src="img/github.png" alt="logo__webpage"/>
                </li>
                <li>
                    <button className="menu__botao" type="submit">login</button>
                </li>
            </ul>
        </header>
    )
}

export default Cabecalho