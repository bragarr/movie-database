import './Cabecalho.css'

function Cabecalho (){
    return (
        <header className="cabecalho">
            <img className="imagem" src="/img/reactMovie_logo.png" alt="logo"/>
            <button className="botao">login</button>
        </header>
    )
}

export default Cabecalho