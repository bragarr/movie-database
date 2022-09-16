import { Link, Outlet } from "react-router-dom";
import Cabecalho from '../elements/Cabecalho/Cabecalho';
import HeroImage from "../elements/HeroImage/HeroImage";
import SearchBar from "../elements/SearchBar/SearchBar";

function App() {
  return (
    <>
      <div className="App">
        <Cabecalho />
      </div>
      <div>
        <HeroImage />
      </div>
      <div>
      <SearchBar />
      </div>
      <nav>
          <Link to="/"></Link>
          <Link to="/movie/1"></Link>
          <Link to="/search"></Link>
      </nav>
      <Outlet /> 
    </>
  );
}

export default App;
