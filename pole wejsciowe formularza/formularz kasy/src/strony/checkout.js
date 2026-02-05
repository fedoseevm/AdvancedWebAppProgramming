import React from "react";
import { Row, Col, Container, Button } from "react-bootstrap"
import MyInput from "../componenty/MyInput";
import MySelect from "../componenty/MySelect";
import MyTextArea from "../componenty/MyTextArea";

function Checkout() {

    const papierKolory = ["bialy", "czerwony", "zielony", "liliowy", "niebieski"];

    const paymentOptions = [
        { id: "--", name: "----" },
        { id: "pp", name: "PayPal" },
        { id: "stripe", name: "Stripe" },
        { id: "cc", name: "Karta kredytowa" }
    ];

    const [daneOsobowe, setDaneOsobowe] = React.useState({
        imie: "",
        nazwisko: "",
        ulica: "",
        kodPocztowy: "",
        miejscowosc: "",
        sposobZaplaty: "",
        uwagi:"",
        prezent: false,
        kolor: ""
    });

    const changeHandler = event => {
        let inputValue = 
        event.target.type === "checkbox" ? event.target.checked : event.target.value;;
        let inputName = event.target.name;
        setDaneOsobowe((prevState) => ({
            ...prevState,
            [inputName]: inputValue
        }));

    };
    
    const submitHandler = event => {
        alert("Wormularz wysłany!");
        event.preventDefault();
        console.log(daneOsobowe);
    }

    return (
        <Container onSubmit={submitHandler}>
            <form>
                <Row>
                    <Col xs={12}>
                        <h1>Witamy przy kasie </h1>
                        <h2>Prosze podac dane do wysylki: </h2>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="imie"
                            label="Imie"
                            className="form-control"
                            value={daneOsobowe.imie}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="nazwisko"
                            label="Nazwisko"
                            className="form-control"
                            value={daneOsobowe.nazwisko}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="ulica"
                            label="Ulica i numer domu:"
                            className="form-control"
                            value={daneOsobowe.ulica}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="kodPocztowy"
                            label="Kod pocztowy:"
                            className="form-control"
                            value={daneOsobowe.kodPocztowy}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput
                            type="text"
                            name="miejscowosc"
                            label="Miejscowosc: "
                            className="form-control"
                            value={daneOsobowe.miejscowosc}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MySelect
                            name="sposobZaplaty"
                            label="Rodzaj platnosci"
                            className="form-control"
                            onChange={changeHandler}
                            value={daneOsobowe.sposobZaplaty}
                            options={paymentOptions}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyTextArea
                            type="text"
                            name="uwagi"
                            label="Uwagi "
                            className="form-control"
                            value={daneOsobowe.uwagi}
                            onChange={changeHandler}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        <MyInput 
                            type = "checkbox"
                            name="prezent"
                            label="Czy zapakowac na prezent? "
                            className="form-control"
                            onChange={changeHandler}
                            value={daneOsobowe.prezent}
                        />
                    </Col>
                    <Col xs={12} md={4}>
                        {papierKolory.map((kolorP, indeks) => (
                            <MyInput
                                type="radio"
                                name="kolor"
                                label={kolorP}
                                className="form-control"
                                value={kolorP}
                                onChange={changeHandler}
                                checked={daneOsobowe.kolor}
                            />
                        ))}
                    </Col>
                </Row>
                <Button type="submit">Wyślij</Button>
                <br />Wprowadzone imię: {(daneOsobowe.imie === "") ? "jeszcze nie wprowadzone" : daneOsobowe.imie}
                <br />Wprowadzone nazwisko:{(daneOsobowe.nazwisko === "") ? "jeszcze nie wprowadzone" : daneOsobowe.nazwisko}
                <br />Wprowadzona ulica i numer domu: {(daneOsobowe.ulica === "") ? "jeszcze nie wprowadzone" : daneOsobowe.ulica}
                <br />Wprowadzone nazwisko:{(daneOsobowe.kodPocztowy === "") ? "jeszcze nie wprowadzone" : daneOsobowe.kodPocztowy}
                <br />Wprowadzone nazwisko:{(daneOsobowe.miejscowosc === "") ? "jeszcze nie wprowadzone" : daneOsobowe.miejscowosc}
                <br />Wybrany sposób zapłaty:{(daneOsobowe.sposobZaplaty === "") ? "jeszcze nie wprowadzone" : daneOsobowe.sposobZaplaty}
                <br/> Dodatkowe uwagi do zamowienia: {(daneOsobowe.uwagi ==="") ? "jeszcze nie wprowadzone" : daneOsobowe.uwagi}
                <br/> Czy zapakowac na prezent: {(daneOsobowe.prezent) ? "Tak" : "Nie"}
                <br/> Kolor papieru: {daneOsobowe.prezent ? daneOsobowe.kolor : "nie pakujemy"}
            </form >
        </Container >
    );
}

export default Checkout;