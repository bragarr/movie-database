import "./NavPage.css"

const maxItens = 9;
const maxLeft = (maxItens-1) / 2;

const NavPage = ({limit, total, offset, setOffset}) => {

    const currentPage = offset ? (offset / limit) + 1 : 1;
    const pages = Math.ceil(total / limit);
    const firstPage = Math.max(currentPage - maxLeft, 1);


    return (
        <ul className="paginas">
           {Array.from({length: Math.min(maxItens, pages)}).map((_,index) => index + firstPage)
           .map((page) => (
                <li key={page} className="numero__paginas">
                    <button onClick={() => setOffset((page - 1) * limit)} 
                    className={page === currentPage ? 'button__pagina--ativo' : 'button__pagina'}>
                        {page}
                    </button>
                </li>
           ))
           } 
        </ul>
    );
}

export default NavPage;