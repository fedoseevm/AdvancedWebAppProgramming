import './App.css';
import szescian from './grafika/szescian.png';
import prostopadloscian from './grafika/prostopadloscian.png';
import kula from './grafika/kula.png';

const bryle = [
  {
    "id": 0,
    "nazwa": "szescian",
    "obrazek": szescian,
    "wzory":
      {
        "objetosc": "V=a^3",
        "pole": "P=6a^2"
      },
    "wymiary": [2]
  },
  {
    "id": 1,
    "nazwa": "prostopadloscian",
    "obrazek": prostopadloscian,
    "wzory":
      {
        "objetosc": "V=a*b*h",
        "pole": "P=2*a*b+2*a*h+2*b*h"
      },
    "wymiary": [3, 4, 5]
  },
  {
    "id": 2,
    "nazwa": "kula",
    "obrazek": kula,
    "wzory":
      {
        "objetosc": "V=4/3*pi*r^3",
        "pole": "P=4*pi*r^2"
      },
    "wymiary": [4]
  }
];

function ObliczPoleSzescianu(a) {
  return 6 * a ** 2;
}
function ObliczObjetoscSzescianu(a) {
  return a ** 3;
}

function ObliczPoleProstopadloscianu(a, b, h) {
  return 2 * (a*b + a*h + b*h);
}
function ObliczObjetoscProstopadloscianu(a, b, h) {
  return a * b * h;
}

function ObliczPoleKuli(r) {
  return (4 * Math.PI * r ** 2).toFixed(2);
}
function ObliczObjetoscKuli(r) {
  return ((4 / 3) * Math.PI * r ** 3).toFixed(2);
}

function ObliczPole(item) {
  const wymiary = item.wymiary;
  switch (item.nazwa) {
    case "szescian":
      return ObliczPoleSzescianu(wymiary[0]);
    case "prostopadloscian":
      return ObliczPoleProstopadloscianu(wymiary[0], wymiary[1], wymiary[2]);
    case "kula":
      return ObliczPoleKuli(wymiary[0]);
    default:
      return "Podano złe wymiary";
  }
}

function ObliczObjetosc(item) {
  const wymiary = item.wymiary;
  switch(item.nazwa) {
    case 'szescian':
      return ObliczObjetoscSzescianu(wymiary[0]);
    case 'prostopadloscian':
      return ObliczObjetoscProstopadloscianu(wymiary[0], wymiary[1], wymiary[2]);
    case 'kula':
      return ObliczObjetoscKuli(wymiary[0]);
    default:
      return "Podano złe wymiary";
  }
}


function App() {
  return (
    <div className="App">
      <h1>Bryly</h1>
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
              <td className='nazwa-bryly'>{item.nazwa}</td>
              <td>
                <img src={item.obrazek} alt={item.nazwa}></img>
              </td>
              <td className='wzory-bryly'>
                <p>Objętość: {item.wzory.objetosc}</p>
                <p>Pole: {item.wzory.pole}</p>
              </td>
              <td>
                <ol className='wymiary-bryly'>
                  {item.wymiary.map((itemW, indexW) => (
                    <li key={indexW}>Wymiar: {itemW}</li>
                  ))}
                </ol>
                <h2>Pole: {ObliczPole(item)}</h2>
                <h2>Objętość: {ObliczObjetosc(item)}</h2>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
