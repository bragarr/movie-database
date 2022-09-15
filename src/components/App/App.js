import { Link, Outlet } from "react-router-dom";
import Cabecalho from '../elements/Cabecalho/Cabecalho';

function App() {
  return (
    <>
      <div className="App">
        <Cabecalho />
      </div>
      <div>
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
