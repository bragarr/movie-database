import { Link, Outlet } from "react-router-dom";
import Cabecalho from '../elements/Cabecalho/Cabecalho';
import SearchBar from "../elements/SearchBar/SearchBar";

function App() {
  return (
    <>
    <div className="App">
      <Cabecalho />
    </div>
    <div>
      <SearchBar />
    </div>

    <nav>
        <Link to="/">Home</Link>
        <Link to="/movie/1">Movie</Link>
        <Link to="/search">Search</Link>
      </nav>
      <Outlet /> 
    </>
  );
}

export default App;
