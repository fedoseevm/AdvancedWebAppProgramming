import React from "react";
import MyInput from "../komponenty/MyInput";
import MySelect from "../komponenty/MySelect";
import MyTextArea from "../komponenty/MyTextArea";


function Checkout() {
    const sposobWyzywienia = ["własne", "śniadanie", "pełne"];

    const miasta = [
        {id: "--", name: "---"},
        {id: "wrs", name: "Warszawa"},
        {id: "krk", name: "Kraków"},
        {id: "Lbl", name: "Lublin"}
    ];

    const [daneOsobowe, setDaneOsobowe] = React.useState({
        miejscowosc: "",
        iloscOsob: null,
        dojazd: false,
        wyzywienie: "",
        uwagi: "",
        email: "",
        wartoscWycieczki: 0
    });

    const changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.type === "checkbox" ? event.target.cheched : event.target.value;
        setDaneOsobowe((prevState) => ({
            ...prevState,
            [inputName]: inputValue
        }));
    };

    const submitHandler = event => {
        alert("Dziękujemy za złożenie zamówienia! \nWszystkie informacje zostały wysłane na adres: " + daneOsobowe.email);
        event.preventDefault();
        console.log(daneOsobowe);
    };


    return (
        <form onSubmit={submitHandler}>
            <MySelect
                name="miejscowosc"
                label="Proszę wybrać miejsce z listy"
                className="form-control"
                onChange={changeHandler}
                value={daneOsobowe.miejscowosc}
                options={miasta}
            />
            <MyInput
                type="checkbox"
                name="dojazd"
                label="Proszę zaznaczyć w przypadku własnego transportu"
                className="form-control"
                onChange={changeHandler}
                value={daneOsobowe.dojazd}
            />
            <p>Proszę zaznaczyć sposób wyżywienia: </p>
            {sposobWyzywienia.map((item, index) => (
                <MyInput
                    type="radio"
                    name="sposobWyzywienia"
                    label={item}
                    className="form-control"
                    value={item}
                    onChange={changeHandler}
                    cheched={daneOsobowe.wyzywienie}
                />
            ))}
            <MyTextArea
                type="text"
                name="uwagi"
                label="Uwagi do organizatora"
                className="form-control"
                value={daneOsobowe.uwagi}
                onChange={changeHandler}
            />
            <MyInput
                type="text"
                name="email"
                label="Adres do wysłania oferty"
                className="form-control"
                value={daneOsobowe.email}
                onChange={changeHandler}
            />
            <MyInput
                type="submit"
                name="wyslij"
                label="Wyślij zamówienie"
                className="form-control"
            />
        </form>
    )
}

export default Checkout;