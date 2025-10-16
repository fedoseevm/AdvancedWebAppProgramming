import './App.css';
import kwiat from './grafika/kwiat.png';
import dzrewo from './grafika/drzewo.png';

const rosliny = [
  {
    lp: 1,
    roslina: "kwiaty",
    rodzaj: "polne",
    przyklady: ["mak", "rumianek"],
    obrazek: kwiat
  },
  {
    lp: 2,
    roslina: "drzewa",
    rodzaj: "liściaste",
    przyklady: ["dąb", "buk"],
    obrazek: dzrewo
  }
];

function App() {
  return (
    <div className="App">
      <h1 className='App-header'>Moje rośliny</h1>
      <table>
        <thead>
          <th>lp</th>
          <th>roslina</th>
          <th>rodzaj</th>
          <th>obrazek</th>
        </thead>
        <tbody>
          {rosliny.map((item, index) => (
            <tr key={item.lp}>
              <td>{item.lp}</td>
              <td>{item.roslina}</td>
              <td>
                {item.rodzaj}
                <ul className='Table-list'>
                  {item.przyklady.map((itemW, indexW) => (
                    <li key={indexW}>{itemW}</li>
                  ))}
                </ul>
              </td>
              <td>
                <img className='Table-img' src={item.obrazek} alt={item.roslina}></img>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
