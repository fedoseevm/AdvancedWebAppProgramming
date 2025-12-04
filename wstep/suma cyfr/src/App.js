import logo from './logo.svg';
import szkola from './szkola.png';
import './App.css';

function Witaj() {
  let osoba = prompt("Jak masz na imie?");
  let nazwisko = prompt("Nazwisko?");
  return <p className='App-p'>{osoba} {nazwisko} witaj w funkcji Witaj()</p>;
}

function SumaFu() {
  let start = prompt("Prosze podac 1szy element ciagu:");
  start = parseInt(start);
  let end = prompt("Prosze podac osatni element ciagu:");
  end = parseInt(end);
  let step = prompt("Prosze podac krok:");
  step = parseInt(step);

  let elem = "";
  let suma = 0;
  
  for (let i = start; i <= end; i += step) {
    elem += i + "+";
    suma += i;
  }

  elem += 0 + "=" + suma;
  return <p className='App-p'>Suma ciagu: {elem}</p>;
}

function App() {
  return (
    <div className='App-strona'>
      <img src={szkola} className='App-szkola' alt="logo" />
      <h2 className='App-h2'> Hello world</h2>
      <Witaj />
      <SumaFu />
    </div>
  );
}

export default App;
