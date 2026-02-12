import React from "react";
import MyInput from "../komponenty/MyInput";
import MySelect from "../komponenty/MySelect";
import MyTextArea from "../komponenty/MyTextArea";


function Checkout() {
    const sposobWyzywienia = ["własne", "śniadanie", "pełne"];

    const miasta = [
        { name: "---" },
        { name: "Warszawa" },
        { name: "Kraków" },
        { name: "Lublin" }
    ];

    const [daneOsobowe, setDaneOsobowe] = React.useState({
        miejscowosc: "",
        iloscOsob: null,
        dojazdWlasny: false,
        wyzywienie: "",
        uwagi: "",
        email: "",
        wartoscWycieczki: 0
    });

    const changeHandler = event => {
        let inputName = event.target.name;
        let inputValue = event.target.type === "checkbox" ? (event.target.checked ? true : false) : event.target.value;
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

    const obliczWartosc = () => {
        daneOsobowe.wartoscWycieczki = 0;
        const cenaMiasta = 550;
        const cenaDojazdu = 60;
        const cenaSniadania = 50;
        const cenaObiadu = 75;

        if (daneOsobowe.miejscowosc !== "---") {
            daneOsobowe.wartoscWycieczki += cenaMiasta;
        }

        if (!daneOsobowe.dojazdWlasny){
            daneOsobowe.wartoscWycieczki += cenaDojazdu;
        }

        if (daneOsobowe.wyzywienie === "śniadanie") {
            daneOsobowe.wartoscWycieczki += cenaSniadania;
        }
        else if (daneOsobowe.wyzywienie === "pełne") {
            daneOsobowe.wartoscWycieczki += cenaObiadu + cenaSniadania*2;
        }

        if (isNaN(daneOsobowe.iloscOsob) || daneOsobowe.iloscOsob <= 0) {
            daneOsobowe.wartoscWycieczki *= daneOsobowe.iloscOsob;
        }
    }


    return (
        <main>
            {daneOsobowe.miejscowosc === "Warszawa" && (
                <img src="images/warszawa.jpg" />
            ) || daneOsobowe.miejscowosc === "Kraków" && (
                <img src="images/krakow.jpg" />
            ) || daneOsobowe.miejscowosc === "Lublin" && (
                <img src="images/lublin.jpg" />
            ) || (
                <img src="images/mapa_polski.jpg" />
            )}
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
                    type="text"
                    name="iloscOsob"
                    label="Ilość osób"
                    className="form-control"
                    onChange={changeHandler}
                    value={daneOsobowe.iloscOsob}
                />
                <MyInput
                    type="checkbox"
                    name="dojazdWlasny"
                    label="Proszę zaznaczyć w przypadku własnego transportu"
                    className="form-control"
                    onChange={changeHandler}
                    value={daneOsobowe.dojazdWlasny}
                />
                <p>Proszę zaznaczyć sposób wyżywienia: </p>
                {sposobWyzywienia.map((item, index) => (
                    <MyInput
                        type="radio"
                        name="wyzywienie"
                        label={item}
                        className="form-control"
                        value={item}
                        onChange={changeHandler}
                        checked={daneOsobowe.wyzywienie}
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
                    type="email"
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
                <p>Miejscowosc: {daneOsobowe.miejscowosc === "" ? "jeszcze nie wybrane" : daneOsobowe.miejscowosc}</p>
                <p>Ilość osób: {isNaN(daneOsobowe.iloscOsob) || daneOsobowe.iloscOsob <= 0 ? "brak danych" : daneOsobowe.iloscOsob}</p>
                <p>Dojazd: {daneOsobowe.dojazdWlasny ? "własny" : "organizator"}</p>
                <p>Wyżywienie: {daneOsobowe.wyzywienie === "" ? "brak danych" : daneOsobowe.wyzywienie}</p>
                <p>Uwagi: {daneOsobowe.uwagi === "" ? "brak" : daneOsobowe.uwagi}</p>
                <p>Ilość osób: {daneOsobowe.email === "" ? "nie został podany" : daneOsobowe.email}</p>
                <p>Aktualna wartość wycieczki: {daneOsobowe.wartoscWycieczki}</p>
            </form>
        </main>

    )
}

export default Checkout;