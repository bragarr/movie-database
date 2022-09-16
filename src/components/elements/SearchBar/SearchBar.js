import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SearchBar.css'

const SearchBar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return

        navigate(`/search?q=${search}`);
        setSearch("");
        
    };

    return ( 
        <form className="idBusca" onSubmit={handleSubmit}>

            <figure className='lupa'>
                <img 
                src='../../../../img/lupa.png' alt='imagem lupa'/>
            </figure>
            <input 
                type="text" className="textBusca" 
                placeholder="Busque um filme aqui..." 
                onChange={(e) => setSearch(e.target.value)}
                value={search}
             />
            <button
                 className="btnBusca" type='submit'>buscar
            </button>
        </form>
    )
}
        
export default SearchBar;