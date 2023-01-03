import './App.css'
import { BrowserRouter, Outlet, MemoryRouter } from "react-router-dom";
import { Cabecalho } from '../components/Cabecalho/Cabecalho';
import MainRoutes from '../routes';

export function App() {
  return (
      <MemoryRouter>
        <div className="App">
          <header>
            <Cabecalho />
          </header>
          <Outlet /> 
          <MainRoutes />
        </div>
      </MemoryRouter>
  );
}
