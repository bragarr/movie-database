import './SearchBar.css'

function SearchBar (){
    return ( 
        <form className="idBusca">
            <input type="text" className="textBusca" placeholder="Buscar..." />
            <button className="btnBusca" type='submit'>Buscar</button>
        </form>
            )
        }
        
export default SearchBar;