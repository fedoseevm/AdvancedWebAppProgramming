import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';

function App() {
  const [result, setResult] = React.useState({sum: null, liczba1: null, liczba2: null});
  useEffect(() => {
    const dane = {d1: 3, d2: 4};

    fetch('http://localhost:3100/api/data', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(dane)
    })
    .then((response) => response.json())
    .then((json_data) => setResult(
      {
        sum: json_data.wynik,
        liczba1: json_data.zwrot.d1,
        liczba2: json_data.zwrot.d2
      }
    ))
    .catch((error) => console.log(error));
  }, []);
  // Pusty array zaleznosci zapewnia, ze to sie uruchamia wraz z zamontowaniem komponentu
  return (
    <h3>Opdowiedź z serwera: {result.sum} = {result.liczba1} + {result.liczba2}</h3>
  );
}

export default App;
