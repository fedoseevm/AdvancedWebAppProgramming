import logo from './logo.svg';
import './App.css';
import Checkout from './strony/Checkout.js';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Zapraszamy na wycieczkę Twoich marzeń</h1>
      </header>
      <main>
        <Checkout />
      </main>
    </div>
  );
}

export default App;
