import { Component } from "react";
import KwiatyCzerwone from "./KwiatyCzerwone";

class Kwiaty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            kwiaty: [
                {
                    id: 0,
                    rodzaj: "czerwone",
                    wartosc1: 15,
                    wartosc2: 15,
                    img: "images/kwiat_czerwony.png"
                },
                {
                    id: 1,
                    rodzaj: "niebieskie",
                    wartosc1: 22,
                    wartosc2: 4,
                    img: "images/kwiat_niebieski.png"
                }
            ]
        };
    }

    sprzedaj = (id) => {
        this.setState(prev => ({
            kwiaty: prev.kwiaty.map(kwiat =>
                kwiat.id === id ? {...kwiat, wartosc2: kwiat.wartosc2 - 1} : kwiat
            )
        }));
    }

    kup = (id) => {
        let ilosc = prompt("Podaj liczbę kupionych kwiatów:");
        ilosc = Number(ilosc);

        if (!ilosc) return;

        this.setState(prev => ({
            kwiaty: prev.kwiaty.map(kwiat =>
                kwiat.id === id ? {...kwiat, wartosc1: kwiat.wartosc1 + ilosc} : kwiat
            )
        }));
    }

    przyjmij = () => {
        this.setState(prev => ({
            kwiaty: [
                ...prev.kwiaty,
                {
                    id: 2,
                    rodzaj: "fioletowe",
                    wartosc1: 15,
                    wartosc2: 6,
                    img: "images/kwiat_fioletowy.png"
                },
                {
                    id: 3,
                    rodzaj: "żółte",
                    wartosc1: 27,
                    wartosc2: 8,
                    img: "images/kwiat_zolty.png"
                }
            ]
        }));
    }

    usun = (id1, id2) => {
        this.setState({
            kwiaty: this.state.kwiaty.filter(kwiat => kwiat.id !== id1 && kwiat.id !== id2)
        });
    }

    render() {
        return (
            <main>
                {this.state.kwiaty.map(kwiat => (
                    <KwiatyCzerwone
                        key={kwiat.id}
                        kwiat={kwiat}
                        sprzedaj={() => this.sprzedaj(kwiat.id)}
                        kup={() => this.kup(kwiat.id)}
                    />
                ))}
            </main>
        );
    }
}

export default Kwiaty;
