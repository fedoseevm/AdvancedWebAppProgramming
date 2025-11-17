import './App.css';
import Shoes from './Shoes';
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header nazwaFirmy="Big steps" />
      <Shoes />
      <Footer />
    </div>
  );
}

export default App;
