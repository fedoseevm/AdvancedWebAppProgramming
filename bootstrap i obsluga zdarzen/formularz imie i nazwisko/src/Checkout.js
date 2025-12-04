import { Component } from "react";
import {Row, Col, Container} from 'react-bootstrap';
import MyInput from "./MyInput";

class Checkout extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imie: "",
            nazwisko: ""
        };
    }

    changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        
        this.setState({ [inputName]: inputValue });
    }

    render() {
        return (
            <Container>
                <form>
                    <div className="form-group">
                        <Row>
                            <Col xs={12}>
                                <h1>Witamy przy kasie</h1>
                                <h2>Proszę podać dane do wysyłki: </h2>
                            </Col>
                        </Row>
                        <Row>
                            <Col xs={12} md={4}>
                                <MyInput
                                    type="text"
                                    name="imie"
                                    label="Imie"
                                    className="form-control"
                                    value={this.state.imie}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                            <Col xs={12} md={4}>
                                <MyInput
                                    type="text"
                                    name="nazwisko"
                                    label="Nazwisko"
                                    className="form-control"
                                    value={this.state.nazwisko}
                                    onChange={this.changeHandler}
                                />
                            </Col>
                        </Row>
                    </div>                   
                </form>
                <Row>
                    <Col>
                    <h2>Podane dane: </h2>
                    <ul className="list-group">
                        <li className="list-group-item">
                            Imie: {this.state.imie === "" ? "Brak" : this.state.imie}
                        </li>
                        <li className="list-group-item">
                            Nazwisko: {this.state.nazwisko === "" ? "Brak" : this.state.nazwisko}
                        </li>
                    </ul>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Checkout;