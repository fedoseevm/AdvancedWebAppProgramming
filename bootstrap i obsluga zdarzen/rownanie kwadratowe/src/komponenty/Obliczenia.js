import { Component } from "react";
import MyInput from "./MyInput";

class Obliczenia extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a: 0,
            b: 0,
            c: 0,
            error: "",
            delta: null,
            x1: null,
            x2: null,
            showResult: false
        }
    }

    changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.value;

        this.setState({ [inputName]: inputValue });
    }

    blurHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.value;

        if(isNaN(inputValue) || inputValue === "") {
            this.setState({ error: "Podane złe dane" });
        } else {
            this.setState({ error: "" });
        }
    }

    oblicz = () => {
        if (isNaN(this.state.a) || isNaN(this.state.b) || isNaN(this.state.c)) return;

        const a = Number(this.state.a);
        const b = Number(this.state.b);
        const c = Number(this.state.c);

        const delta = b * b - 4 * a * c;

        if (delta < 0) {
            this.setState({
                delta: delta,
                x1: null,
                x2: null,
                showResult: true
            });
        }
        else if (delta === 0) {
            const x = -b / (2 * a);
            this.setState({
                delta: delta,
                x1: x,
                x2: null,
                showResult: true
            });
        }
        else {
            const x1 = (-b - Math.sqrt(delta)) / (2 * a);
            const x2 = (-b + Math.sqrt(delta)) / (2 * a);

            this.setState({
                delta: delta,
                x1: x1,
                x2: x2,
                showResult: true
            });
        }
    }

    render() {
        return(
            <main>
                <div className="column">
                    <h3>Przykładowe obliczenia:</h3>
                    <p>{this.state.error}&nbsp;</p>
                    <form>
                        <MyInput
                            type="text"
                            name="a"
                            label="Podaj a"
                            value={String(this.state.a)}
                            className="form-control"
                            onChange={this.changeHandler}
                            onBlur={this.blurHandler}
                        />
                        <MyInput
                            type="text"
                            name="b"
                            label="Podaj b"
                            value={this.state.b}
                            className="form-control"
                            onChange={this.changeHandler}
                            onBlur={this.blurHandler}
                        />
                        <MyInput
                            type="text"
                            name="c"
                            label="Podaj c"
                            value={this.state.c}
                            className="form-control"
                            onChange={this.changeHandler}
                            onBlur={this.blurHandler}
                        />
                    </form>
                </div>
                <div className="column">
                    <h3>Interpretacja graficzna:</h3>
                    {this.state.showResult && this.state.delta > 0 && (
                        <img src="images/delta_dodatnia.png" alt="Delta dodatnia"></img>
                    )}
                    {this.state.showResult && this.state.delta === 0 && (
                        <img src="images/delta_zero.png" alt="Delta równa się 0"></img>
                    )}
                    {this.state.showResult && this.state.delta < 0 && (
                        <img src="images/delta_ujemna.png" alt="Delta ujemna"></img>
                    )}
                </div>
                <div className="wynik">
                    <h3>Równanie o postaci:</h3>
                    <p>{this.state.a || 0}x<sup>2</sup> + {this.state.b}x + {this.state.c} = 0</p>
                    <button onClick={this.oblicz}>Oblicz</button>

                    {this.state.showResult && (
                        <div>
                            <p>Delta: {this.state.delta}</p>
                            {this.state.x1 !== null && <p>x1: {this.state.x1}</p>}
                            {this.state.x2 !== null && <p>x2: {this.state.x2}</p>}
                        </div>
                    )}
                </div>
            </main>
        )
    }
}


export default Obliczenia;