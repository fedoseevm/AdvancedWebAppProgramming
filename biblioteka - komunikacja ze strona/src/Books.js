import React, { Component } from "react";
import BookDescription from "./components/BookDescription";
import Header from "./components/Header";
import Footer from "./components/Footer";

class Books extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ksiazki:[
                {tytul: "Hobbit", autor: "J. R. Tolkien", stron: "455"},
                {tytul: "Rok 198", autor: "G. Orwell", stron: "300"},
                {tytul: "Wladca Pierscieni", autor: "J. R. Tolkien", stron: "669"},
                {tytul: "Stary czlowkiek i morze", autor: "E. Hemingway", stron: "226"}
            ]
            };
        }
    updateBooks = ()=>{
        this.setState({
            ksiazki:[
                {tytul: "Hobbit", autor: "J. R. Tolkien", stron: "455"},
                {tytul: "Wladca Pierscieni", autor: "J. R. Tolkien", stron: "669"},
            ]  
        });
    };

    addNewBook = () =>{
        this.setState(prevState =>(
            {
                ksiazki:
                [
                    ...prevState.ksiazki,
                    {tytul: "Nowy wspanialy swiat", autor: "A. Huxley", stron: "255"}
                ]
            }
        ));
    };
    render (){
        return(
            <div>
                <Header />
                <button onClick={this.updateBooks}>Pozostaw tylko ksiazki Tolkiena</button>
                <button onClick={this.addNewBook}>Dodaj nowa ksiazke</button>
                {this.state.ksiazki.map((book,i)=> (
                    <BookDescription book ={book} />
                )
                )}
                <Footer />
            </div>
        );
    }
}

export default Books;