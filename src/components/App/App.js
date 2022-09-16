import { Link, Outlet } from "react-router-dom";
import Cabecalho from '../elements/Cabecalho/Cabecalho';

const App = () => {
  return (
      <div className="App">
        <header>
          <Cabecalho />
        </header>
        {/* <nav>
            <Link to="/"></Link>
            <Link to="/movie/1"></Link>
            <Link to="/search"></Link>
        </nav> */}
        <Outlet /> 
      </div>
  );
}

export default App;
