import './App.css';
import Header from "./komponenty/Header";
import Kwiaty from './komponenty/Kwiaty';

function App() {
  return (
    <div className="App">
      <Header nazwa="Salon kwiatowy" />
      <Kwiaty />
    </div>
  );
}

export default App;
