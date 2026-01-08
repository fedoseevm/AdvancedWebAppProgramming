import { Component } from "react";
import MyInput from "./MyInput";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            c: 0,
            czyDowolny: false,
            czyProstokatny: false,
            czyRownoramienny: false,
            czyRownoboczny: false
        }
    }

    changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.value;

        this.setState({[inputName]: isNaN(inputValue) ? 0 : inputValue});
    }

    oblicz = () => {
        if (isNaN(this.state.a) || isNaN(this.state.b) || isNaN(this.state.c)) {
            this.setState({
                czyDowolny: false,
                czyProstokatny: false,
                czyRownoramienny: false,
                czyRownoboczny: false
            })
            return;
        }

        const a = Number(this.state.a);
        const b = Number(this.state.b);
        const c = Number(this.state.c);

        if (a <= 0 || b <= 0 || c <= 0) {
            this.setState({
                czyDowolny: false,
                czyProstokatny: false,
                czyRownoramienny: false,
                czyRownoboczny: false
            })
            return;
        }

        let lista = [a, b, c].sort();
        
        if (!this.czyDowolny(lista[0], lista[1], lista[2])) {
            this.setState({
                czyDowolny: false,
                czyProstokatny: false,
                czyRownoramienny: false,
                czyRownoboczny: false
            })
            return;
        }
        if (this.czyRownoboczny(lista[0], lista[1], lista[2])) {
            this.setState({
                czyDowolny: false,
                czyProstokatny: false,
                czyRownoramienny: false,
                czyRownoboczny: true
            })
            return;
        }
        if (this.czyRownoramienny(lista[0], lista[1], lista[2])) {
            this.setState({
                czyDowolny: false,
                czyProstokatny: false,
                czyRownoramienny: true,
                czyRownoboczny: false
            })
            return;
        }
        if (this.czyProstokatny(lista[0], lista[1], lista[2])) {
            this.setState({
                czyDowolny: false,
                czyProstokatny: true,
                czyRownoramienny: false,
                czyRownoboczny: false
            })
            return;
        }
        if (this.czyDowolny(lista[0], lista[1], lista[2])) {
            this.setState({
                czyDowolny: true,
                czyProstokatny: false,
                czyRownoramienny: false,
                czyRownoboczny: false
            })
            return;
        }
    }

    czyDowolny = (a, b, c) => {
        if (a + b > c && a + c > b && b + c > a) return true;
        return false;
    }

    czyRownoboczny = (a, b, c) => {
        if (a === b && b === c) return true;
        return false;
    }

    czyRownoramienny = (a, b, c) => {
        if (a === b || b === c) return true;
        return false;
    }

    czyProstokatny = (a, b, c) => {
        if (Math.sqrt(a * a + b * b) === c) return true;
        return false;
    }


    render() {
        return (
            <main>
                <MyInput 
                    type="text"
                    name="a"
                    label="Podaj 1szą liczbę"
                    value={String(this.state.a)}
                    className="form-control"
                    onChange={this.changeHandler}
                    onBlur={this.oblicz}
                />
                <MyInput 
                    type="text"
                    name="b"
                    label="Podaj 2gą liczbę"
                    value={String(this.state.b)}
                    className="form-control"
                    onChange={this.changeHandler}
                    onBlur={this.oblicz}
                />
                <MyInput 
                    type="text"
                    name="c"
                    label="Podaj 3cią liczbę"
                    value={String(this.state.c)}
                    className="form-control"
                    onChange={this.changeHandler}
                    onBlur={this.oblicz}
                />

                {this.state.czyRownoboczny && (
                    <div>
                        <p>Podane liczby mogą utworzyć trójkąt równoboczny:</p>
                        <img src="images/tr_rownoboczny.png"></img>
                    </div>
                )}
                {this.state.czyRownoramienny && (
                    <div>
                        <p>Podane liczby mogą utworzyć trójkąt równoramienny:</p>
                        <img src="images/tr_rownoramienny.png"></img>
                    </div>
                )}
                {this.state.czyProstokatny && (
                    <div>
                        <p>Podane liczby mogą utworzyć trójkąt prostokątny:</p>
                        <img src="images/tr_prostokatny.png"></img>
                    </div>
                )}
                {this.state.czyDowolny && (
                    <div>
                        <p>Podane liczby mogą utworzyć trójkąt dowolny:</p>
                        <img src="images/tr_dowolny.png"></img>
                    </div>
                )}
                {!this.state.czyDowolny && !this.state.czyProstokatny && !this.state.czyRownoramienny && !this.state.czyRownoboczny && (
                    <div>
                        <p>Podane liczby nie mogą utworzyć trójkąt</p>
                    </div>
                )}
            </main>
        )
    }
}


export default Main;