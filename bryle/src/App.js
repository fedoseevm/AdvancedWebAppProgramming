import './App.css';

const bryle = [
  {
    "id": 0,
    "nazwa": "szescian",
    "obrazek": "/grafika/szescian.png",
    "wzory":
      {
        "objetosc": "V=a^3",
        "pole": "P=6a^2"
      },
    "wymiary": {
      "a": 6
    }
  }
];


function App() {
  return (
    <div className="App">
      <table cellpadding="0" cellspacing="0">
        <thead>
          <tr>
            <th>Bryla</th>
            <th>Ilustracja</th>
            <th>Wzory</th>
            <th>Przykład</th>
          </tr>
        </thead>
        <tbody>
          {bryle.map((item, index) => (
            <tr key={item.id}>
              <td>{item.nazwa}</td>
              <td>
                <img src={item.obrazek} alt={item.nazwa}></img>
              </td>
              <td>
                <ol>
                  {item.utwory.map((itemW, indexW) => (
                    <li key={itemW.id}><b>{pisarze[index].utwory[indexW].tytul}</b> to {pisarze[index].utwory[indexW].rodzaj}</li>
                  ))}
                </ol>
                FUNKCJA UtworyDruk: {UtworyDruk(item)} FUNKCJA GatunekLiter: {GatunekLiter(item)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
