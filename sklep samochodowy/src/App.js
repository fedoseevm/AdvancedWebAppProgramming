import './App.css';
import Header from './lib/header/Header';
import logo from './lib/header/logo.jpg';

function App() {
  return (
    <div className="App">
      <header>
        <Header nazwaFirmy="BestCars" />
        <img className='App-logo' src={logo} alt="Logo" />
      </header>
      <main>
        
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
