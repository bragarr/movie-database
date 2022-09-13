import logo from './logo.svg';
import './App.css';
import Cabecalho from './componets/Cabecalho/Cabecalho';

function App() {
  return (
    <div className="App">
      <Cabecalho />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bem vindo ao react-movie
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
