import logo from './logo.jpg';
import './App.css';
import Header from './biblioteka/header/Header';
import Menu from './biblioteka/main/Menu';
import Footer from './biblioteka/footer/Footer';

function App() {
  return (
    <div className="App">
      <Header rodzajLokalu="naszej kawiarni" />
      <Menu />
      <Footer godzinaOtwarcia="8:00" godzinaZamkniecia="14:00" />
    </div>
  );
}

export default App;
