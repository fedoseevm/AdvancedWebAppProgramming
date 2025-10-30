import './App.css';
import Header from './lib/header/Header';
import CarMain from './lib/main/CarMain';
import Footer from './lib/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header nazwaFirmy="BestCars" />
      <CarMain />
      <Footer otwarcie="8:00" zamkniecie="20:00"/>
    </div>
  );
}

export default App;
