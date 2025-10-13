import { Component } from "react";


class BookDesc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [
                {
                    id: 0,
                    title: "Hobbit",
                    author: "J. R. Tolkien",
                    pages: "300"
                },
                {
                    id: 1,
                    title: "Wladca pierscieni",
                    author: "J. R. Tolkien",
                    pages: "900"
                },
                {
                    id: 2,
                    title: "Wladca much",
                    author: "W. Godlnig",
                    pages: "250"
                },
            ]
        }
    };
    render() {
        return (
            <div>
                {this.state.books.map((item, index) => (
                    <ol>
                        <h1>tytul: {item.title}</h1>
                        <h2>author: {item.author}</h2>
                        <h4>ilosc stron: {item.pages}</h4>
                    </ol>
                ))}
            </div>
        );
    }
}

export default BookDesc;