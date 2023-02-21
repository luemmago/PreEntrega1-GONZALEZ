import logo from './logo.svg';
import './App.css';
import './navbar.js'; 

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenidos a mi aplicacion
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          En construccion 
        </a>
      </header>
    </div>
  );
}

export default App;
