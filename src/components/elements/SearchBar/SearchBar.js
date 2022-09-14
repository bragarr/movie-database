import './SearchBar.css'

function SearchBar (){
    return ( 
        <form className="idBusca">

            <figure className='lupa'>
                <img 
                src='./img/lupa.png'/>
            </figure>
            <input 
                type="text" className="textBusca" placeholder="Buscar..." />
            <button
                 className="btnBusca" type='submit'>buscar
            </button>
        </form>
            )
        }
        
export default SearchBar;