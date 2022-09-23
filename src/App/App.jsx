import './App.css'
import { BrowserRouter,Outlet} from "react-router-dom";
import Cabecalho from '../components/Cabecalho/Cabecalho';
import MainRoutes from '../routes';

const App = () => {
  return (
      <BrowserRouter>
        <div className="App">
          <header>
            <Cabecalho />
          </header>
          <Outlet /> 
          <MainRoutes />
        </div>
      </BrowserRouter>
  );
}

export default App;
