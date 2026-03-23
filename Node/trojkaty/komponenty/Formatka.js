import React from "react";

function doSerwera(liczby, rodzaj, setResult) {
    const dataToServer = { daneDoSerwera: liczby, rodzajDanych: rodzaj };
    fetch('http://localhost:3100/math/operators', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataToServer)
    })
    .then((response) => response.json())
    .then((json_data) => setResult(
        json_data.wynik
    ))
    .catch((error) => console.log(error));
}

function Formatka() {
    const wyborRodzajuDanych = [
        { id: 0, dzialanie: "Proszę wybrać rodzaj danych" },
        { id: 1, dzialanie: "Boki" },
        { id: 2, dzialanie: "Kąty" }
    ]

    const [dane, setDane] = React.useState({
        wartosc1: "",
        wartosc2: "",
        wartosc3: ""
    });
    const [wynik, setWynik] = React.useState("");
    const [rodzajDanych, setRodzajDanych] = React.useState(0);

    const submitHandler = event => {
        event.preventDefault();
        let tmp=parseInt(rodzajDanych);
        if (tmp === 0) {
            alert("Prosze wybrac rodzaj danych");
        }
        else {
            doSerwera(dane, rodzajDanych, setWynik);
        }

    };

    const onChangeHandlerDane = event => {
        let inputName = event.target.name;
        let inputValue = event.target.value;
        setDane((prevState) => ({
            ...prevState,
            [inputName]: inputValue
        }));
    }

    const onChangeHandlerWynik = event => {
        setWynik(event.target.value);
    }

    const onChangeHandlerRodzajDanych = event => {
        setRodzajDanych(event.target.value);
    }



    return (
        <div>
            <form onSubmit={submitHandler}>
                <p>Prosze wybrac rodzaj danych:
                    <select name="rodzajDanych" value={rodzajDanych} onChange={onChangeHandlerRodzajDanych}>
                        {wyborRodzajuDanych.map((elem, klucz) => (
                            <option key={elem.id} value={elem.id}>{elem.dzialanie}</option>
                        )
                        )
                        }
                    </select>
                </p>
                <p>Prosze podac pierwsza wartosc: 
                    <input name="wartosc1"
                        type="text"
                        value={dane.wartosc1}
                        onChange={onChangeHandlerDane}
                        required
                    />
                </p>
                <p>Prosze podac druga wartosc: 
                    <input name="wartosc2"
                        type="text"
                        value={dane.wartosc2}
                        onChange={onChangeHandlerDane}
                        required
                    />
                </p>
                <p>Prosze podac trzecia wartosc: 
                    <input name="wartosc3"
                        type="text"
                        value={dane.wartosc3}
                        onChange={onChangeHandlerDane}
                        required
                    />
                </p>
                <input type="submit" value="Policz" />
                <p>{wynik}</p>
            </form>
        </div>
    )
}

export default Formatka;