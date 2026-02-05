import './App.css';
import Header from './komponenty/Header';
import Info from './komponenty/Info';
import Obliczenia from './komponenty/Obliczenia';
import Footer from './komponenty/Footer';

function App() {
  return (
    <div className="App">
      <Header rodzajZadan="Równanie kwadratowe" />
      <hr></hr>
      <Info />
      <Obliczenia />
      <Footer rodzajZadania="równań kwadratowych" />
    </div>
  );
}

export default App;
