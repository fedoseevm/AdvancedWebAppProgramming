import { Component } from "react";
import ShoesDescription from "./components/ShoesDesc";

class Shoes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            shoes: [
                {
                    id: 0,
                    nazwa: "sandaly",
                    rodzaj: "letnie",
                    img: "/images/sandaly.jpg",
                    ilosc: 2
                },
                {
                    id: 1,
                    nazwa: "klapki",
                    rodzaj: "letnie",
                    img: "/images/klapki.jpg",
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
                    img: "/images/japonki.jpg",
                    ilosc: 11
                },
                {
                    id: prevState.shoes.length + 2,
                    nazwa: "drewniaki",
                    rodzaj: "letnie",
                    img: "/images/drewniaki.jpg",
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
                    img: "/images/kozaki.jpg",
                    ilosc: 0
                },
                {
                    id: prevState.shoes.length + 2,
                    nazwa: "trapery",
                    rodzaj: "zimowe",
                    img: "/images/trapery.jpg",
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

    sellCurrentShoesPair = (id) => {
        this.setState(prev => ({
            shoes: prev.shoes.map(shoe =>
                shoe.id === id
                    ? { ...shoe, ilosc: Math.max(0, shoe.ilosc - 1) }
                    : shoe
            )
        }));
    };

    addCurrentShoePair = (id) => {
        let amount = prompt("Podaj ilość par.")
        if (isNaN(amount) || amount < 0) {
            alert("Podaj dodatnią liczbę!")
        }
        else {
            amount = Number(amount);
            this.setState(prev => ({
                shoes: prev.shoes.map(shoe =>
                    shoe.id === id ? { ...shoe, ilosc: shoe.ilosc + amount } : shoe
                )
            }));
        }
    };

    render() {
        const summerShoes = this.state.shoes.filter(shoe => shoe.rodzaj === "letnie");
        const winterShoes = this.state.shoes.filter(shoe => shoe.rodzaj === "zimowe");
        
        return (
            <main>
                <div className="Controls-container">
                    <button onClick={this.addSummerShoes}>Przyjmij obuwie letnie</button>
                    <button onClick={this.addWinterShoes}>Przyjmij obuwie zimowe</button>
                    <button onClick={this.deleteSoldOutShoes}>Usuń wyprzedane</button>

                </div>
                <div className="Main-container">
                    <h2>Nazwa oferta: </h2>
                    <h3>Obuwie letnie</h3>
                    {summerShoes.map(shoe => (
                        <ShoesDescription
                        key={shoe.id}
                        shoe={shoe}
                        sellCurrentShoesPair={this.sellCurrentShoesPair}
                        addCurrentShoePair={this.addCurrentShoePair}
                        />
                    ))}

                    {winterShoes.length > 0 && (
                        <div>
                            <h3>Obuwie zimowe</h3>
                            {winterShoes.map(shoe => (
                                <ShoesDescription
                                key={shoe.id}
                                shoe={shoe}
                                sellCurrentShoesPair={this.sellCurrentShoesPair}
                                addCurrentShoePair={this.addCurrentShoePair}
                                />
                            ))}
                        </div>
                    )}


                </div>
            </main>  
        );
    }
}

export default Shoes;