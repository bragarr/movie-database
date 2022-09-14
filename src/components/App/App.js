import { Link } from "react-router-dom";
import Cabecalho from '../elements/Cabecalho/Cabecalho';
import Movie from "../Movie/Movie";

function App() {
  return (
    <><div className="App">
      <Cabecalho />
    </div><nav>
        <h2>
          <Link to="/">React Movie</Link>
        </h2>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
      </nav>
      <Movie />  
    </>
  );
}

export default App;
