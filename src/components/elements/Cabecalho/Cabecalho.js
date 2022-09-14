import './Cabecalho.css'

function Cabecalho (){
    return (
        <header className="cabecalho">
            <img className="imagem" src="/img/reactMovie_logo.png" alt="logo"/>

            <ul className="menu">
                <li>
                    <a className="menu__movies">movies</a>
                </li>
                <li>
                    <img className="logo__github" src="img/github.png"/>
                </li>
                <li>
                    <button type='submit' className="botao">login</button>
                </li>
            </ul>
        </header>
    )
}

export default Cabecalho