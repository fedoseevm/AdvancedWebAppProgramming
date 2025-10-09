import fibonacci from './fibonacci.jpg';
import './App.css';

function FibTable(n) {
  let a = 1;
  let b = 1;
  let temp;
  let result = [a, b];

  for (let i = 2; i < n; i++) {
    temp = a;
    a = b;
    b = a + temp;
    result[i] = b;
  }
  return result;
}

function IloczynFib() {
  let n = prompt("Podaj ilość wyrazów ciągu:");
  let wyrazy = FibTable(n);
  let output = "";
  let iloczyn = 1;
  for (let i = 0; i < wyrazy.length - 1; i++) {
    iloczyn *= wyrazy[i];
    output += wyrazy[i] + " * ";
  }
  iloczyn *= wyrazy[n - 1];
  output += wyrazy[n - 1];
  
  return (
    <div>
      <p>Iloczyn pierwszych {n} elementów ciągu Fibonacciego:</p>
      <p>{output} = {iloczyn}</p>
    </div>
  );
}

function App() {
  return (
    <div className='App'>
      <h1 className='App-header'>Oblicznanie iloczynu n elementow ciagu Fibonacciego </h1>
      <img src={fibonacci} className='App-fib-image' alt="Fibonacci" />
      <div className='App-fibonacci'>
        <h2 className='App-fib-header'>Ciag Fibonacciego</h2>
        <IloczynFib />
      </div>
    </div>
  );
}

export default App;
