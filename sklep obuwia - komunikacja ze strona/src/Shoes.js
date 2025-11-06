import { Component } from "react";

class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: [
                {
                    id: 0,
                    nazwa: "sandaly",
                    rodzaj: "letnie",
                    foto: "placeholder",
                    ilosc: 2
                },
                {
                    id: 1,
                    nazwa: "klapki",
                    rodzaj: "letnie",
                    foto: "placeholder",
                    ilosc: 7
                }
            ]
        };
    }

    addSummerShoes = () => {
        this.setState(prevState => ({
            shoes: [
                ...prevState.shoes,
                {
                    id: prevState.shoes.length + 1,
                    nazwa: "japonki",
                    rodzaj: "letnie",
                    foto: "placeholder",
                    ilosc: 11
                },
                {
                    id: prevState.shoes.length + 2,
                    nazwa: "drewniaki",
                    rodzaj: "letnie",
                    foto: "placeholder",
                    ilosc: 0
                }
            ]
        }));
    };

    addWinterShoes = () => {
        this.setState(prevState => ({
            shoes: [
                ...prevState.shoes,
                {
                    id: prevState.shoes.length + 1,
                    nazwa: "kozaki",
                    rodzaj: "zimowe",
                    foto: "placeholder",
                    ilosc: 0
                },
                {
                    id: prevState.shoes.length + 2,
                    nazwa: "trapery",
                    rodzaj: "zimowe",
                    foto: "placeholder",
                    ilosc: 1
                }
            ]
        }));
    };

    deleteSoldOutShoes = () => {
        this.setState({
            shoes: this.state.shoes.filter(function(shoesPair) {
                return shoesPair.ilosc !== 0;
            })
        });
    };

    getSummerShoes = () => {
        this.setState({
            summerShoes: this.state.shoes.filter(function(shoesPair) {
                return shoesPair.rodzaj == "letnie";
            })
        });
    };

    getWinterShoes = () => {
        this.setState({
            winterShoes: this.state.shoes.filter(function(shoesPair) {
                return shoesPair.rodzaj == "zimowe";
            })
        });
    };

    sellCurrentShoesPair = id => {
        if (shoes[id].ilosc >= 0) {
            shoes[id].ilosc -= 1;
        };
    };

    addCurrentShoePair = id => {
        shoes[id].ilosc++;
    };


    render () {
        const summerShoes = this.getSummerShoes();
        const winterShoes = this.getWinterShoes();

        return(
            <main>
                <Header nazwaFirmy="Big steps" />
                <div className="Controls-container">
                    <button onClick={this.addSummerShoes}>Przyjmij obuwie letnie</button>
                    <button onClick={this.addWinterShoes}>Przyjmij obuwie zimowe</button>
                    <button onClick={this.deleteSoldOutShoes}>Usuń wyprzedane</button>

                </div>
            </main>  
        )
    }
}