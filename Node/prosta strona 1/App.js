import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('http://localhost:3100/api/data')
    .then(response => response.json())
    .then(json => setData(json))
    .catch(error => console.error('Blad pobierania danych: ', error));
  }, []);
  return (
    <div className="App">
      <h1>Dane z serwera:</h1>
      {data ? <h3>{data.message}</h3> : <p>Laduje...</p>}
    </div>
  );
}

export default App;
