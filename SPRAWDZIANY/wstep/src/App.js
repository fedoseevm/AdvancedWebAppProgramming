import kwadrat from './kwadrat.png';
import './App.css';

function ObliczPole(n) {
  return n*n;
}

function WypiszPole() {
  let bok = prompt("Podaj długość boku kwadratu:");
  if (isNaN(bok) || bok <= 0){
    alert("Bład! Podaj liczbę większą od 0");
    return "";
  }

  return (
    <p>Pole kwadratu o boku <span className='obliczenia'>{bok}</span>: P = {bok} * {bok} = <span className='obliczenia'>{ObliczPole(bok)}</span> </p>
  )
}

function App() {
  return (
    <div className="App">
      <img className='obrazek' src={kwadrat} alt='Kwadrat'></img>
      <h2 className='napis'>Witaj w świecie geometrii!</h2>
      <WypiszPole/>
    </div>
  );
}

export default App;
