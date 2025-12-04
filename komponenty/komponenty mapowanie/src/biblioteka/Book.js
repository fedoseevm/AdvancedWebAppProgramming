import { Component } from "react";
import Header from "./naglowek/Header";
import BookDesc from "./cialo/BookDesc";
import Footer from "./stopka/Footer";


class Book extends Component {
    render() {
        return (
            <div className="App">
                <Header nazwa="Uniwersytetu Adama Mickiewicza" miasto="Poznaniu" />
                <BookDesc />
                <Footer />
            </div>
        )
    }
}


export default Book;