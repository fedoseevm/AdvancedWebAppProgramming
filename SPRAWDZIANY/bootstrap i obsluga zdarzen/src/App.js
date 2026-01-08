import './App.css';
import Header from './komponenty/Header';
import Main from './komponenty/Main';
import Footer from './komponenty/Footer';

function App() {
  return (
    <div className="App">
      <Header rodzajObliczen="obliczeń matematycznych" />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
