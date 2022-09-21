import './App.css'
import {Outlet } from "react-router-dom";
import Cabecalho from '../elements/Cabecalho/Cabecalho';

const App = () => {
  return (
      <div className="App">
        <header>
          <Cabecalho />
        </header>
        <Outlet /> 
      </div>
  );
}

export default App;
